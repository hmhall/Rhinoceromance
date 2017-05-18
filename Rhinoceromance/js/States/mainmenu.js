//Mistakes into Miracles
var Mainmenu={
	create: function(){ //creates everything needed for main menu
		console.log('Mainmenu: create');
		this.stage.backgroundColor = "#CEF6F5";
		this.keypress = game.add.audio('keypress');

		var titletY = new Typewriter();
		titletY.init(Mainmenu, {
			x: 100,
			y: 600,
			fontFamily: "blackFont",
			fontSize: 32,
			maxWidth: 800,
			sound: this.keypress,
			text: "In this game, you play as the last male northern white rhino. Your goal is to court one of two female rhinos to save your species. Chose activities to perform to raise your stats. As you perform stats, your stress level will rise. To lower stress, chose the rest activity. This is an early build, so some features like minigames, game overs, and the date are not yet included..."
		});
		titletY.start();

		this.add.text(game.world.width/4, 50, "Rhinoceromance", {fontSize: "64px", fill: "black"})

		var startbutton = game.add.button(game.world.width/4 + 50, 200, "buttonsheet", this.start, this, "over", "out", "down"); //add button
		this.add.text(game.world.width/4 + 75, 260,"Click the button to start",{fontSize: "32px", fill: "white" });
	},
	start: function(){ //changes state when the button is pressed
		console.log('Mainmenu: start');
		this.keypress.stop();
		this.state.start("StatTraining");

		

	}
};