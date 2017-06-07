//Mistakes into Miracles
var Boot={
	preload: function(){
		console.log('Boot: boot');
		this.load.image('loading', 'assets/img/loading.png');
		this.stage.backgroundColor = "#FFFFFF";
	},
	create: function() {
		console.log('Boot: create');
		game.state.start('Preloader');
	}
};