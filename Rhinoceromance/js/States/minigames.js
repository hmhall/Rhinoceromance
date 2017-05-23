//Mistakes into Miracles
var MiniGames={
	create: function(){ //creates everything needed for the current state
		console.log('MiniGames: create');
		var testbutton=game.add.button(game.world.width/2, 50, "buttonsheet", this.endminigame, this, "over", "out", "down"); //add button
		switch(actiontaken){
			case 2:
				this.add.text(0, 50,"This button represents the mini\n game that will correspond to the Charm test",{fontSize: "32px", fill: "white" });
				player.charm+=2;
				player.stress++;
				break;
			case 4:
				this.add.text(0, 50,"This button represents the mini\n game that will correspond to the Fitness test",{fontSize: "32px", fill: "white" });
				player.fitness+=2;
				player.stress++;
				break;
			case 6:
				this.add.text(0, 50,"This button represents the mini\n game that will correspond to the Smarts test",{fontSize: "32px", fill: "white" });
				player.smarts+=2;
				player.stress++;
				break;
			case 8:
				this.add.text(0, 50,"This button represents the mini\n game that will correspond to the Style test",{fontSize: "32px", fill: "white" });
				player.style+=2;
				player.stress++;
				break;
		}
	},
	endminigame: function(){
		console.log("MiniGames: endminigame");
		this.state.start("StatTraining");
	}
}