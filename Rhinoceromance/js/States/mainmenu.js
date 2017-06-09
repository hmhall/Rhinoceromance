//Mistakes into Miracles
var Mainmenu={
	create: function(){ //creates everything needed for main menu
		console.log('Mainmenu: create');
		this.stage.backgroundColor = "#CEF6F5";
		game.add.tileSprite(0, 0, 1280, 720, "loading");
		keypress = game.add.audio('keypress'); 

		mainMenuBGM = game.add.audio("mainMenuAudio",0.1,true);
		mainMenuBGM.play();

		//this.song.play('', 0, 1, true);

		var titletY = new Typewriter();
		titletY.init(Mainmenu, {
			x: 600,
			y: 300,
			//fontFamily: "blackFont",
			fontFamily: "custom",
			fontSize: 64,
			maxWidth: 650,
			time: 2,
			sound: keypress,
			dialogues: ["In this game, you play as the last male northern white rhino.", "Your goal is to court one of two female rhinos to save your species.", "Well, actually just one. The other is paid DLC, mostly because her route does not exist.", "In any case...", "Choose activities to perform to raise your stats, each with three levels of intensities.", "As you perform actions, your stress level will rise.", "The amount of stress depends on both your luck for the day, which you can check through your daily fortune, and the intensity of the activity.", "To lower stress, choose the rest activity.", "Remember to take care of yourself! All the stats in the world can't save you from a stress-induced heart attack.", "Good luck, the future of the northern white rhinoceros species is in your hands!",],
			dialogueEndFn: this.changeState
		});
		titletY.start();
		//titletY.destroy();
		//this.add.text(game.world.width/4, 50,"Rhinoceromance",{fontSize: "64px", fill: "white" });

		//var startbutton = game.add.button(game.world.width/4 + 50, 200, "buttonsheet", this.start, this, "over", "out", "down"); //add button
		//this.add.text(game.world.width/4 + 75, 260,"Click the button to start",{fontSize: "32px", fill: "white" });
	},
	start: function(){ //changes state when the button is pressed
		console.log('Mainmenu: start');

		//this.keypress.stop();
		//this.state.start("StatTraining");
	},
	changeState: function(){
		//this.song.stop(0);
		mainMenuBGM.stop();
		game.state.start("StatTraining", Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.In.SlideLeft);
	}	
};