//Mistakes into Miracles
var Gameover={
	create: function(){ //creates everything needed for the current gameover state
		console.log("Gameover: create");
		var startbutton = game.add.button(game.world.width/2, 50, "buttonsheet", this.restart, this, "over", "out", "down"); //add button
		this.add.text(game.world.width/2, 50,"Click the button to restart",{fontSize: "32px", fill: "white" });
	},
	restart: function(){  //returns to main menu
		console.log("Gameover: restart");
		game.state.start("Mainmenu");
	}
};