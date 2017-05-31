//Mistakes into Miracles
var DateNight={
	create: function(){ //creates everything needed for the current main game state
		console.log("DateNight: create");
		var cannery = game.add.sprite(0,0,"cannery");
		this.textarray=[];
		this.readInText();

		var titletY = new Typewriter();
		titletY.init(Mainmenu, {
			x: 100,
			y: 500,
			fontFamily: "blackFont",
			fontSize: 32,
			maxWidth: 800,
			sound: this.keypress,
			dialogues: this.textarray,
			dialogueEndFn: this.changeState
		});
		titletY.start();
	},
	update: function(){
		
	},
	resolveDate: function(dateChoice){
		console.log("DateNight: resolveDate "+dateChoice);
		
	},
	readInText:function(){ //temporary function until we figure out reading in text
		this.textarray[0]="according to all known laws of aviation";
		this.textarray[1]="there is no way a bee should be able to fly";
		this.textarray[2]="its wings are too small to get its fat little body off the ground";
		this.textarray[3]="the bee, of course, flies anyway";
		this.textarray[4]="beacause bees don't care what humans think is impossible";
		
	}
};