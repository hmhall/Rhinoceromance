//Mistakes into Miracles
var Mainmenu={
	create: function(){ //creates everything needed for main menu
		console.log('Mainmenu: create');
		var startbutton = game.add.button(game.world.centerX/2, 50, "atlas", this.start, this, "jumping", "idle1", "damaged"); //add button
		this.add.text(150,game.world.height/2,"Click the funny little man to start",{fontSize: "32px", fill: "white" });
	},
	start: function(){ //changes state when the button is pressed
		console.log('Mainmenu: start');
		this.state.start("StatTraining");
	}
};