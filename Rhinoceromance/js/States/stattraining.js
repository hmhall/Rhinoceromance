//Mistakes into Miracles
var StatTraining={
	create: function(){ //creates everything needed for the current state
		console.log("StatTraining: create");
		var apartmentbg=game.add.sprite(0,0,"apartment");
		apartmentbg.scale.setTo(.79,.79);

		this.sudansprite = game.add.sprite(game.world.width/2,game.world.height/2+100,"base");
		this.sudansprite.scale.setTo(.75,.75);
		this.sudansprite.anchor.x=.5;
		this.sudansprite.anchor.y=.5;

		this.buttonArray=[];

		//creates buttons for each action that have text created on top of them
		if(actiontaken<=0){
			this.setupButtons();


		}

		
		//sets up a graphic to display the stats, and displays them
		var statwindow = game.add.sprite(20,100,"statwindow");
		statwindow.scale.setTo(.75,.75);
		this.charmtext=game.add.text(35, 120, "Charm: 10", { fontSize: '32px', fill: 'white' });
		this.fitnesstext=game.add.text(35, 170, "Fitness: 10", { fontSize: '32px', fill: 'white' });
		this.smartstext=game.add.text(35, 220, "Smarts: 10", { fontSize: '32px', fill: 'white' });
		this.styletext=game.add.text(35, 270, "Style: 10", { fontSize: '32px', fill: 'white' });
		this.stresstext=game.add.text(35, 320, "Stress: 0", { fontSize: '32px', fill: 'white' });
		this.moneytext=game.add.text(35, 370, "Money: $0", { fontSize: '32px', fill: 'white' });


		//does the same for the days
		var daywindow=game.add.sprite(125,50,"daytimer");
		daywindow.anchor.x=.5;
		daywindow.anchor.y=.5;
		this.daytext=game.add.text(daywindow.x, daywindow.y, "Day 0", { fontSize: '32px', fill: 'white' });
		this.daytext.anchor.x=.5;
		this.daytext.anchor.y=.5;
		

		this.timefordate=false;

	},
	update: function(){
		this.daytext.text="Day: "+day;
		this.charmtext.text="Charm: "+charm;
		this.fitnesstext.text="Fitness: "+fitness;
		this.smartstext.text="Smarts: "+smarts;
		this.styletext.text="Style: "+style;
		this.stresstext.text="Stress: "+stress;

		if(day==30&&!this.timefordate){ //creates heart button at day 30 exactly once
			this.timefordate=true;
			this.datebutton=game.add.button(700,600,"heart",function(){this.state.start("DateNight");},this); //when clicked, moves to DateNight
			this.datebutton.scale.setTo(.075,.075);
		}
		if(actiontaken>0){
			switch(actiontaken){
				case 1:
					this.sudansprite.loadTexture("sudan");
					break;
				case 2:
					this.sudansprite.loadTexture("exercising");
					break;
				case 3:
					this.sudansprite.loadTexture("studying");
					break;
				case 4:
					this.sudansprite.loadTexture("stylin");
					break;
				case 5:
					this.sudansprite.loadTexture("resting");
					break;
				case 6:
					this.sudansprite.loadTexture("sudan");
					break;
			}
			this.nextbutton=game.add.button(1100,350,"nextbutton",this.resetDay,this,"over","out","down");
			this.nextbutton.scale.setTo(.75,.75);
			actiontaken=-1;
		}
	},
	actionButtonPressed: function(actiontype){ //starts minigame state if a button is pressed and it hadn't already been pressed
		console.log("StatTraining: actionButtonPressed");
		if(actiontaken==0){
			actiontaken=actiontype;
			this.state.start("MiniGames");
		}
	},
	resetDay: function(){ //resets the state of the game to the beginning of the day
		this.sudansprite.loadTexture("base");
		day++;
		this.nextbutton.destroy();
		actiontaken=0;
		for(var xi=0;xi<this.buttonArray.length;xi++)
			this.buttonArray[xi].destroy();
		this.setupButtons();
	},
	setupButtons: function(){ //generates 4 random buttons out of a possible 8 and displays them on the screen
		var currbutton;
		var actionoptions=[];
		var keeplooping=true;
		for (var xi=0; xi < 4; xi++) { //generates a random number then checks if it's already in the actionoptions array. If not, adds it to the array. If so, generates another and repeats
			while(keeplooping){
				keeplooping=false;
				currbutton=Math.floor((Math.random()*8)+1);
				for (var zi=0; zi < actionoptions.length; zi++) {
					if(actionoptions[zi]==currbutton)
						keeplooping=true;
				}
			}
			actionoptions[xi]=currbutton;
			keeplooping=true;
		}
		actionoptions.sort(function(a,b){return a-b}); //sorts array in ascending order
		for (var xi=0; xi < 4; xi++) { //generates buttons
			switch(actionoptions[xi]){
				case 1:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(1);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					var buttontext=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Go out for a drink",{ fontSize: '22px', fill: 'white'});
					buttontext.anchor.x=.5;
					buttontext.anchor.y=.5;
					break;
				case 2:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(2);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					var buttontext=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Go to a party",{ fontSize: '22px', fill: 'white'});
					buttontext.anchor.x=.5;
					buttontext.anchor.y=.5;
					break;
				case 3:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(3);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					var buttontext=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Do yoga",{ fontSize: '22px', fill: 'white'});
					buttontext.anchor.x=.5;
					buttontext.anchor.y=.5;
					break;
				case 4:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(4);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					var buttontext=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Lift weights",{ fontSize: '22px', fill: 'white'});
					buttontext.anchor.x=.5;
					buttontext.anchor.y=.5;
					break;
				case 5:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(5);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					var buttontext=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Read a book",{ fontSize: '22px', fill: 'white'});
					buttontext.anchor.x=.5;
					buttontext.anchor.y=.5;
					break;
				case 6:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(6);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					var buttontext=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Study",{ fontSize: '22px', fill: 'white'});
					buttontext.anchor.x=.5;
					buttontext.anchor.y=.5;
					break;
				case 7:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(7);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					var buttontext=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Try on new clothes",{ fontSize: '22px', fill: 'white'});
					buttontext.anchor.x=.5;
					buttontext.anchor.y=.5;
					break;
				case 8:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(8);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					var buttontext=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Manscape",{ fontSize: '22px', fill: 'white'});
					buttontext.anchor.x=.5;
					buttontext.anchor.y=.5;
					break;
			}
		}
		var stressbutton = game.add.button(1150, 500, "buttonsheet", function(){this.actionButtonPressed(5);},this,"over", "out", "down"); 
		stressbutton.scale.setTo(.5,.5);
		stressbutton.anchor.x=.5;
		stressbutton.anchor.y=.5;
		var stressbuttontext=game.add.text(stressbutton.x,stressbutton.y, "Take a day off",{ fontSize: '22px', fill: 'white'});
		stressbuttontext.anchor.x=.5;
		stressbuttontext.anchor.y=.5;
	}
};
