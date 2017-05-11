//Mistakes into Miracles
var Gameover={
	create: function(){ //creates everything needed for the current gameover state
		console.log("Gameover: create");
		var restartbutton = game.add.button(game.world.centerX/2, 50, "atlas", this.restart, this, "jumping", "idle1", "damaged"); //add button
		this.add.text(150,game.world.height/2,"Game over\nClick the funny little man to restart",{fontSize: "32px", fill: "white" });
	},
	restart: function(){  //returns to main menu
		console.log("Gameover: restart");
		game.state.start("Mainmenu");
	}
};