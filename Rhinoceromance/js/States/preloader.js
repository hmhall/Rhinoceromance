//Mistakes into Miracles
var Preloader={
	preload: function() { // preload assets
		console.log('Preloader: preload');
		this.load.path = 'assets/';
		
		this.load.atlas("buttonsheet","img/buttonsheet.png","img/buttonsheet.json");
		this.load.image("sudan","img/sudan.png");
		this.load.image("heart","img/heart.png");
		this.load.image("brokenheart","img/broken_heart.png");
		this.load.image("apartment","img/bg.png");
		this.load.image("base","img/base.png");
		this.load.image("statwindow","img/statwindow.png");
		this.load.image("daytimer","img/daytimer.png");

		this.load.audio("keypress", "audio/key.wav");

		this.load.bitmapFont('blackFont','font/black.png', 'font/black.fnt');
	},
	create: function() {
		console.log('Preloader: create');
		game.state.start('Mainmenu');
	}
};