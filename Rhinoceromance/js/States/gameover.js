//Mistakes into Miracles
var Gameover={
	create: function(){ //creates everything needed for the current gameover state
		console.log("Gameover: create");
		game.add.tileSprite(0, 0, 1280, 720, "badend");
		var startbutton = game.add.button(game.world.width/2, 125, "buttonsheet", this.restart, this, "over", "out", "down"); //add button
		//this.add.text(game.world.width/2, 50,"Click the button to restart",{fontSize: "32px", fill: "white" });

		//this.song = game.add.audio("gameOver");
		//this.song.play('', 0, 1, true);

	},
	restart: function(){  //returns to main menu
		console.log("Gameover: restart");
		//this.song.stop(0);
		game.state.start("Mainmenu");
		newGame();
		
	}
};