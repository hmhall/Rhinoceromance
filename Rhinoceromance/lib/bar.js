var Bar = function(game, providedConfig) {
    this.game = game;

    this.setupConfiguration(providedConfig);
    this.setPosition(this.config.x, this.config.y);
    this.drawBackground();
    this.drawBar();
    this.setFixedToCamera(this.config.isFixedToCamera);
};
Bar.prototype.constructor = Bar;

Bar.prototype.setupConfiguration = function (providedConfig) {
    this.config = this.mergeWithDefaultConfiguration(providedConfig);
    this.flipped = this.config.flipped;
};

Bar.prototype.mergeWithDefaultConfiguration = function(newConfig) {
    var defaultConfig= {
        width: 600,
        height: 50,
        x: 600,
        y: 50,
        bg: {
            color: '#ffffcc'
        },
        bar: {
            color: '#33ccff'
        },
        animationDuration: 80,
        flipped: false,
        isFixedToCamera: false
    };

    return mergeObjetcs(defaultConfig, newConfig);
};

function mergeObjetcs(targetObj, newObj) {
    for (var p in newObj) {
        try {
            targetObj[p] = newObj[p].constructor==Object ? mergeObjetcs(targetObj[p], newObj[p]) : newObj[p];
        } catch(e) {
            targetObj[p] = newObj[p];
        }
    }
    return targetObj;
}

Bar.prototype.drawBackground = function() {
    var bmd = this.game.add.bitmapData(this.config.width, this.config.height);
    bmd.ctx.fillStyle = this.config.bg.color;
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, this.config.width, this.config.height);
    bmd.ctx.fill();

    this.bgSprite = this.game.add.sprite(this.x, this.y, bmd);
    this.bgSprite.anchor.set(0.5);
};

Bar.prototype.drawBar = function() {
    var bmd = this.game.add.bitmapData(this.config.width, this.config.height);
    bmd.ctx.fillStyle = this.config.bar.color;
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, this.config.width, this.config.height);
    bmd.ctx.fill();

    this.barSprite = this.game.add.sprite(this.x - this.bgSprite.width/2, this.y, bmd);
    this.barSprite.anchor.y = 0.5;
    if (this.flipped){
      this.barSprite.anchor.x = 1;
      this.barSprite.position.x = this.bgSprite.position.x + this.config.width * this.bgSprite.anchor.x;
    }
};

Bar.prototype.setPosition = function (x, y) {
    this.x = x;
    this.y = y;

    if(this.bgSprite !== undefined && this.barSprite !== undefined){
        this.bgSprite.position.x = x;
        this.bgSprite.position.y = y;

        this.barSprite.position.x = this.bgSprite.position.x - this.config.width * this.bgSprite.anchor.x;
        this.barSprite.position.y = y;
        if (this.flipped){
          this.barSprite.position.x = this.bgSprite.position.x;
        }
    }
};


Bar.prototype.setPercent = function(newValue){
    if(newValue < 0) newValue = 0;
    if(newValue > 100) newValue = 100;

    var newWidth =  (newValue * this.config.width) / 100;

    this.setWidth(newWidth);
};

Bar.prototype.setWidth = function(newWidth){
    this.game.add.tween(this.barSprite).to( { width: newWidth }, this.config.animationDuration, Phaser.Easing.Linear.None, true);
};

Bar.prototype.setFixedToCamera = function(fixedToCamera) {
    this.bgSprite.fixedToCamera = fixedToCamera;
    this.barSprite.fixedToCamera = fixedToCamera;
};

Bar.prototype.setAnchor = function(xAnchor, yAnchor) {
    this.bgSprite.anchor.set(xAnchor, yAnchor);
    this.barSprite.position.x = this.bgSprite.position.x - this.config.width * this.bgSprite.anchor.x;    
    this.barSprite.anchor.y = yAnchor;
    if (this.flipped){
      this.barSprite.anchor.x = 1;
      this.barSprite.position.x = this.bgSprite.position.x;
    }
};

Bar.prototype.kill = function() {
    this.bgSprite.kill();
    this.barSprite.kill();
};