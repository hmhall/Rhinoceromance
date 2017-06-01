//Mistakes into Miracles
var Boot={
	preload: function(){
		console.log('Boot: boot');
		this.load.image('loading', 'assets/img/loading.png');
	},
	create: function() {
		console.log('Boot: create');
		game.state.start('Preloader');
	}
};