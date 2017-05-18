//Mistakes into Miracles
var Preloader={
	preload: function() { // preload assets
		console.log('Preloader: preload');
		this.load.atlas("buttonsheet","assets/img/buttonsheet.png","assets/img/buttonsheet.json");
		this.load.image("sudan","assets/img/sudan.png");
		this.load.image("heart","assets/img/heart.png");
		this.load.image("brokenheart","assets/img/broken_heart.png");
		this.load.image("apartment","assets/img/bg.png");
		this.load.image("base","assets/img/base.png");
		this.load.image("statwindow","assets/img/statwindow.png");
		this.load.image("daytimer","assets/img/daytimer.png");
	},
	create: function() {
		console.log('Preloader: create');
		game.state.start('Mainmenu');
	}
};