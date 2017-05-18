//Mistakes into Miracles
var Mainmenu={
	create: function(){ //creates everything needed for main menu
		console.log('Mainmenu: create');
		var startbutton = game.add.button(game.world.width/2, 50, "buttonsheet", this.start, this, "over", "out", "down"); //add button
		this.add.text(game.world.width/2, 50,"Click the button to start",{fontSize: "32px", fill: "white" });
	},
	start: function(){ //changes state when the button is pressed
		console.log('Mainmenu: start');
		this.state.start("StatTraining");
	}
};