//Mistakes into Miracles
var Boot={
	boot: function(){
		console.log('Boot: boot');
		game.load.image('loading', 'assets/img/loading.png');
	},
	create: function() {
		console.log('Boot: create');
		game.state.start('Preloader');
	}
};