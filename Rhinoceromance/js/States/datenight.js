//Mistakes into Miracles
var DateNight={
	create: function(){ //creates everything needed for the current main game state
		console.log("DateNight: create");
		var cannery = game.add.sprite(0,0,"cannery");
		this.textarray=[];
		this.textindex=0;
		this.readInText();
		this.datetext=game.add.text(25, 650, "Thank you for playing our first build!", {fontSize: "32px", fill: "black"});

		game.input.onDown.add(this.advancetext,this);
	},
	update: function(){
		
	},
	resolveDate: function(dateChoice){
		console.log("DateNight: resolveDate "+dateChoice);
		
	},
	advancetext:function(){
		console.log("DateNight: advancetext")
		this.datetext.text=this.textarray[this.textindex];
		this.textindex++;
	},
	readInText:function(){ //temporary function until I talk to Matt about reading in text
		this.textarray[0]="according to all known laws of aviation";
		this.textarray[1]="there is no way a bee should be able to fly";
		this.textarray[2]="its wings are too small to get its fat little body off the ground";
		this.textarray[3]="the bee, of course, flies anyway";
		this.textarray[4]="beacause bees don't care what humans think is impossible";
	}
};