//Mistakes into Miracles
var DateNight={
	create: function(){ //creates everything needed for the current main game state
		console.log("DateNight: create");

		var cannery = game.add.sprite(0,0,"cannery");
		this.textarray=[]; //array that holds all the game text for this part
		this.storypart="fatu_start"; //keeps track of which part of the story we're on

		this.readInText(); 
	},
	update: function(){
		
	},
	resolveDate: function(dateChoice){
		console.log("DateNight: resolveDate "+dateChoice);
		
	},
	readInText:function(){ 
		this.textarray[0]="I arrive at the concert venue.";
		this.textarray[1]="Before me stands Fatu.";
		this.textarray[2]="Sudan: I didn't expect the line to be this long, huh.";
		this.textarray[3]="Fatu: ...Really? You do know who we're here to see, right?";
		this.textarray[4]="Sudan: I know that much! It's the Beast Icon, of course.";
		this.textarray[5]="The Beast Icon - a recently-formed band that's been growing in popularity these past few months. I bet Fatu would be impressed if I knew something about them! Where would I know them from?";

		var titletY = new Typewriter(); //creates a typewriter to display the text
		titletY.init(DateNight, {
			x: 100,
			y: 500,
			fontFamily: "blackFont",
			fontSize: 32,
			maxWidth: 800,
			sound: this.keypress,
			time: 2,
			dialogues: this.textarray,
			dialogueEndFn: this.onTextEnd
		});
		titletY.start();
	},
	onTextEnd: function(){
		switch(DateNight.storypart){
			case "fatu_start":
				let choicebutton1=game.add.button(440,360,"buttonsheet",function(){DateNight.statCheck("charm"); buttontext1.destroy(); choicebutton1.destroy(); buttontext2.destroy(); choicebutton2.destroy();},this,"over","out","down");
				choicebutton1.scale.setTo(.75,.75);
				choicebutton1.anchor.x=.5;
				choicebutton1.anchor.y=.5;
				var buttontext1=game.add.text(choicebutton1.x,choicebutton1.y,"Your friends (Charm)",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;

				let choicebutton2=game.add.button(840,360,"buttonsheet",function(){DateNight.statCheck("smarts"); buttontext1.destroy(); choicebutton1.destroy(); buttontext2.destroy(); choicebutton2.destroy();},this,"over","out","down");
				choicebutton2.scale.setTo(.75,.75);
				choicebutton2.anchor.x=.5;
				choicebutton2.anchor.y=.5;
				var buttontext2=game.add.text(choicebutton2.x,choicebutton2.y,"A fashion magazine (Style)",{ fontSize: '22px', fill: 'white'});
				buttontext2.anchor.x=.5;
				buttontext2.anchor.y=.5;
				break;
			case "banana":
				console.log("banana");
				break;
		}
	},
	statCheck: function(stat){
		console.log("DateNight: statCheck");
		switch(this.storypart){
			case "fatu_start":
				if(stat=="charm"){
					if(player.charm+Math.floor((Math.random()*50)+1)>50)
						this.storypart="fatu_start_charm_success";
					else
						this.storypart="fatu_start_charm_failure";
				}
				else{
					if(player.style+Math.floor((Math.random()*30)+1)>30)
						this.storypart="fatu_start_smarts_success";
					else
						this.storypart="fatu_start_smarts_failure";
				}
				break;
			case "seinfeld":
				console.log("ya like jazz?");
				break;
		}
		this.readInText();
	}
};

