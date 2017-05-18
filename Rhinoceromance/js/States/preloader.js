//Mistakes into Miracles
var Preloader={
	preload: function() { // preload assets
		console.log('Preloader: preload');
<<<<<<< HEAD
		this.load.atlas("buttonsheet","assets/img/buttonsheet.png","assets/img/buttonsheet.json");
		this.load.atlas("nextbutton","assets/img/nextbutton.png","assets/img/nextbutton.json");
		this.load.image("sudan","assets/img/sudan.png");
		this.load.image("heart","assets/img/heart.png");
		this.load.image("brokenheart","assets/img/broken_heart.png");
		this.load.image("apartment","assets/img/bg.png");
		this.load.image("base","assets/img/base.png");
		this.load.image("exercising","assets/img/exercise.png");
		this.load.image("resting","assets/img/rest.png");
		this.load.image("studying","assets/img/study.png");
		this.load.image("stylin","assets/img/stylin.png");
		this.load.image("statwindow","assets/img/statwindow.png");
		this.load.image("daytimer","assets/img/daytimer.png");
=======
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
>>>>>>> 33c673bcf865b710aeea6f7ba5299e5bb1c80806
	},
	create: function() {
		console.log('Preloader: create');
		game.state.start('Mainmenu');
	}
};