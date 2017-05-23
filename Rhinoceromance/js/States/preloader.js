//Mistakes into Miracles
var Preloader={
	preload: function() { // preload assets
		console.log('Preloader: preload');

		this.load.path = 'assets/';
		
		this.load.atlas("buttonsheet","img/buttonsheet.png","img/buttonsheet.json");
		this.load.atlas("nextbutton","img/nextbutton.png","img/nextbutton.json");
		this.load.image("sudan","img/sudan.png");
		this.load.image("heart","img/heart.png");
		this.load.image("brokenheart","img/broken_heart.png");
		this.load.image("apartment","img/bg.png");
		this.load.image("base","img/base.png");
		this.load.image("statwindow","img/statwindow.png");
		this.load.image("daytimer","img/daytimer.png");
		this.load.image("exercising","img/exercise.png");
		this.load.image("resting","img/rest.png");
		this.load.image("studying","img/study.png");
		this.load.image("stylin","img/stylin.png");
		this.load.image("cannery", "img/cannery.png");

		this.load.audio("keypress", "audio/keystroke.ogg");

		this.load.bitmapFont('blackFont','font/black.png', 'font/black.fnt');

	},
	create: function() {
		console.log('Preloader: create');
		game.state.start('Mainmenu');
	}
};