//Mistakes into Miracles
var Preloader={
	preload: function() { // preload assets
		console.log('Preloader: preload');
		this.stage.backgroundColor = "#FFFFFF";
		var loadingBar = this.add.sprite(game.width/2, game.height/2, 'loading');
		loadingBar.anchor.set(0.5);
		game.load.setPreloadSprite(loadingBar);

		this.load.path = 'assets/';
		
		this.load.atlas("buttonsheet","img/buttonsheet.png","img/buttonsheet.json");
		this.load.atlas("nextbutton","img/nextbutton.png","img/nextbutton.json");
		this.load.atlas("fortunebutton","img/organic_buttons.png","img/organic_buttons.json");
		this.load.image("bg","img/bg.png");
		this.load.image("sudan","img/sudan.png");
		this.load.image("fatu","img/fatu.png");
		this.load.image("fatuangry","img/fatuangry.png");
		this.load.image("fatubashful","img/fatubashful.png");
		this.load.image("fatucharmedcg","img/fatucharmedcg.png");
		this.load.image("fatudisappoint","img/fatudisappoint.png");
		this.load.image("fatuhappy","img/fatuhappy.png");
		this.load.image("fatusurprise","img/fatusurprise.png");
		this.load.image("heart","img/heart.png");
		this.load.image("brokenheart","img/broken_heart.png");
		this.load.image("apartment","img/bg.png");
		this.load.image("base","img/base.png");
		this.load.image("statwindow","img/statwindow.png");
		this.load.image("daytimer","img/daytimer.png");
		this.load.image("exercising","img/exercise.png");
		this.load.image("resting","img/resting.png");
		this.load.image("studying","img/study.png");
		this.load.image("stylin","img/stylin.png");
		this.load.image("charming","img/charming.png");
		this.load.image("cannery", "img/cannery.png");
		this.load.image("concert", "img/concert.png");
		this.load.image("line", "img/line.png");
		this.load.image("charm","img/charm.png");
		this.load.image("style","img/style.png");
		this.load.image("smarts","img/smarts.png");
		this.load.image("fitness","img/fitness.png");
		this.load.image("mask","img/mask.png");
		this.load.image("rest","img/rest.png");
		//this.load.image("title","img/title.png");
		this.load.image("startbutton","img/startbutton.png");
		this.load.image("creditsbutton","img/credits.png");
		this.load.image("badend","img/badend.png");

		this.load.image("luckn","img/luckn.png");
		this.load.image("luck0","img/luck0.png");
		this.load.image("luck1","img/luck1.png");
		this.load.image("luck2","img/luck2.png");

		this.load.audio("keypress", "audio/keystroke.ogg");
		this.load.audio("buttonAudio", "audio/click.wav");
		this.load.audio("mainMenuAudio", "audio/POL-starry-night-short.wav");
		this.load.audio("statTrainingAudio", "audio/POL-cooking-mania-short.wav");
		this.load.audio("dateStateAudio", "audio/POL-jammy-jam-short.wav");
		this.load.audio("gameOverAudio", "audio/POL-sacred-temple-short.wav");

		this.load.bitmapFont('blackFont','font/black.png', 'font/black.fnt');

	},
	create: function() {
		console.log('Preloader: create');
		game.state.start('Mainmenu');
	}
};