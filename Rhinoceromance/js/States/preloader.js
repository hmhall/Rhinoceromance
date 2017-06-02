//Mistakes into Miracles
var Preloader={
	preload: function() { // preload assets
		console.log('Preloader: preload');

		var loadingBar = this.add.sprite(game.width/2, game.height/2, 'loading');
		loadingBar.anchor.set(0.5);
		game.load.setPreloadSprite(loadingBar);

		this.load.path = 'assets/';
		
		this.load.atlas("buttonsheet","img/buttonsheet.png","img/buttonsheet.json");
		this.load.atlas("nextbutton","img/nextbutton.png","img/nextbutton.json");
		this.load.image("bg","img/bg.png");
		this.load.image("sudan","img/sudan.png");
		this.load.image("fatu","img/fatu.png");
		this.load.image("fatuangry","img/fatuangry.png");
		this.load.image("fatubashful","img/fatubashful.png");
		this.load.image("fatucharmedcg","img/fatucharmedcg.png");
		this.load.image("fatudisappoint","img/fatudisappoint.png");
		this.load.image("fatuhappy","img/fatuhappy.png");
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
		this.load.image("concert", "img/concert.png");
		this.load.image("charm","img/charm.png");
		this.load.image("style","img/style.png");
		this.load.image("smarts","img/smarts.png");
		this.load.image("fitness","img/fitness.png");
		this.load.image("mask","img/mask.png");

		this.load.audio("keypress", "audio/keystroke.ogg");

		this.load.bitmapFont('blackFont','font/black.png', 'font/black.fnt');

	},
	create: function() {
		console.log('Preloader: create');
		game.state.start('Mainmenu');
	}
};