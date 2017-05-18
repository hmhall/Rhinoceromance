//Mistakes into Miracles
var DateNight={
	create: function(){ //creates everything needed for the current main game state
		console.log("DateNight: create");
		var cannery = game.add.sprite(0,0,"cannery");
		cannery.scale.setTo(.79, .79);

		this.add.text(25, 650, "Thank you for playing our first build!", {fontSize: "32px", fill: "black"});
		this.add.text(25, 650, "(Date and minigames coming soon)", {fontSize: "32px", fill: "black"});

	},
	update: function(){
		
	},
	resolveDate: function(dateChoice){
		console.log("DateNight: resolveDate "+dateChoice);
		
	}
};