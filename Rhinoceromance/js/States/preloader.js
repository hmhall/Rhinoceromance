//Mistakes into Miracles
var Preloader={
	preload: function() { // preload assets
		console.log('Preloader: preload');
		this.load.atlas("atlas","assets/img/spritesheet.png","assets/img/sprites.json");
		this.load.image("elephant","assets/img/legfaceman.png");
		this.load.image("gorilla","assets/img/handfeetman.png");
		this.load.image("snake","assets/img/windyman.png");
		this.load.image("sudan","assets/img/sudan.png");
		this.load.image("heart","assets/img/heart.png");
		this.load.image("brokenheart","assets/img/broken_heart.png");
		this.state.start("Mainmenu");
	},
	create: function() {
		console.log('Preloader: create');
		game.state.start('Mainmenu');
	}
};