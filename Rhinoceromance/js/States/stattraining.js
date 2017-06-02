//Mistakes into Miracles
var StatTraining={
	create: function(){ //creates everything needed for the current state
		

		//let pentas = new drawStats();
		console.log("StatTraining: create");

		let apartmentbg=game.add.sprite(0,0,"apartment");
		apartmentbg.scale.setTo(.79,.79);

		this.sudansprite = game.add.sprite(game.world.width/2,game.world.height/2+100,"base");
		this.sudansprite.scale.setTo(.75,.75);
		this.sudansprite.anchor.x=.5;
		this.sudansprite.anchor.y=.5;

		this.buttonArray=[];
		this.buttontext=[];

		//creates buttons for each action that have text created on top of them
		if(actiontaken<=0){
			this.setupButtons();
		}

		
		//sets up a graphic to display the stats, and displays them
		let statwindow = game.add.sprite(20,100,"statwindow");
		statwindow.scale.setTo(.75,.75);
		this.charmtext=game.add.text(35, 120, "Charm: 10", { fontSize: '32px', fill: 'white' });
		this.fitnesstext=game.add.text(35, 170, "Fitness: 10", { fontSize: '32px', fill: 'white' });
		this.smartstext=game.add.text(35, 220, "Smarts: 10", { fontSize: '32px', fill: 'white' });
		this.styletext=game.add.text(35, 270, "Style: 10", { fontSize: '32px', fill: 'white' });
		this.stresstext=game.add.text(35, 320, "Stress: 0", { fontSize: '32px', fill: 'white' });


		//does the same for the days
		let daywindow=game.add.sprite(125,50,"daytimer");
		daywindow.anchor.x=.5;
		daywindow.anchor.y=.5;
		this.daytext=game.add.text(daywindow.x, daywindow.y, "Day 0", { fontSize: '32px', fill: 'white' });
		this.daytext.anchor.x=.5;
		this.daytext.anchor.y=.5;
		

		this.timefordate=false;
		this.stressBar = new Bar (this.game);


		//daily
		buttonGroup = game.add.group();

		let fortuneButton = this.add.button(950,50,"buttonsheet",this.toggleFortune,this,"miniover","miniout","minidown");
		fortuneButton.scale.setTo(.3);
		fortuneButton.anchor.set(0.5);

		let fortuneGroup = game.add.group();
		//let fMask = game.add.image(1011.2,0,"mask");
		//fortuneGroup.add();
		//this.buttonGroup.inputEnabled = false;
		

	},
	update: function(){
		this.stressBar.setPercent(100-player.stress*10);
		
		this.daytext.text="Day: "+day;
		this.charmtext.text="Charm: "+player.charm;
		this.fitnesstext.text="Fitness: "+player.fitness;
		this.smartstext.text="Smarts: "+player.smarts;
		this.styletext.text="Style: "+player.style;
		this.stresstext.text="Stress: "+player.stress;

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
					this.sudansprite.loadTexture("sudan");

					break;
				case 3:
					this.sudansprite.loadTexture("exercising");

					break;
				case 4:
					this.sudansprite.loadTexture("exercising");

					break;
				case 5:
					this.sudansprite.loadTexture("studying");

					break;
				case 6:
					this.sudansprite.loadTexture("studying");

					break;
				case 7:
					this.sudansprite.loadTexture("stylin");

					break;
				case 8:
					this.sudansprite.loadTexture("stylin");

					break;
				case 9:
					this.sudansprite.loadTexture("resting");

					break;
			}
			this.nextbutton=game.add.button(1100,350,"nextbutton",this.resetDay,this,"over","out","down");
			this.nextbutton.scale.setTo(.75,.75);
			actiontaken=-1;
			if (player.stress > 9|player.stress <0) this.state.start("Gameover");
		}
	},
	toggleFortune: function() {
		console.log(fortuneShow);
	if (!fortuneShow){
		console.log("tween");
		
	}else{
		console.log("destroying");

	};
		//let fortuneTab = this.game 
		fortuneShow = !fortuneShow;
	},
	actionButtonPressed: function(actiontype){ //starts minigame state if a minigame button is pressed, or simply increments stats
		console.log("StatTraining: actionButtonPressed");
		if(actiontaken==0){
			actiontaken=actiontype;
			if(actiontaken%2==0){
				this.state.start("MiniGames");
			}
			else{
				switch(actiontaken){
					case 1: 
						player.charm++;
						player.stress++;
						break;
					case 3: 
						player.fitness++;
						player.stress++;
						break;
					case 5: 
						player.smarts++;
						player.stress++;
						break;
					case 7: 
						player.style++;
						player.stress++;
						break;
					case 9:
						player.stress--;
						break;
				}
				for(let xi=0;xi<this.buttonArray.length;xi++){
					this.buttonArray[xi].destroy();
					this.buttontext[xi].destroy();
				}
			}
		}
	},
	resetDay: function(){ //resets the state of the game to the beginning of the day
		this.sudansprite.loadTexture("base");
		day++;
		this.nextbutton.destroy();
		actiontaken=0;
		for(let xi=0;xi<this.buttonArray.length;xi++){
			this.buttonArray[xi].destroy();
			this.buttontext[xi].destroy();
		}
		this.setupButtons();
	},
	setupButtons: function(){ //generates 4 random buttons out of a possible 8 and displays them on the screen
		let currbutton;
		let actionoptions=[];
		let keeplooping=true;
		for (let xi=0; xi < 4; xi++) { //generates a random number then checks if it's already in the actionoptions array. If not, adds it to the array. If so, generates another and repeats
			while(keeplooping){
				keeplooping=false;
				currbutton=Math.floor((Math.random()*8)+1);
				for (let zi=0; zi < actionoptions.length; zi++) {
					if(actionoptions[zi]==currbutton)
						keeplooping=true;
				}
			}
			actionoptions[xi]=currbutton;
			keeplooping=true;
		}
		actionoptions.sort(function(a,b){return a-b}); //sorts array in ascending order
		for (let xi=0; xi < 4; xi++) { //generates buttons

			switch(actionoptions[xi]){
				case 1:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(1);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					this.buttontext[xi]=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Go out for a drink",{ fontSize: '22px', fill: 'white'});
					this.buttontext[xi].anchor.x=.5;
					this.buttontext[xi].anchor.y=.5;
					break;
				case 2:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(2);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					this.buttontext[xi]=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Go to a party",{ fontSize: '22px', fill: 'white'});
					this.buttontext[xi].anchor.x=.5;
					this.buttontext[xi].anchor.y=.5;
					break;
				case 3:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(3);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					this.buttontext[xi]=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Do yoga",{ fontSize: '22px', fill: 'white'});
					this.buttontext[xi].anchor.x=.5;
					this.buttontext[xi].anchor.y=.5;
					break;
				case 4:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(4);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					this.buttontext[xi]=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Lift weights",{ fontSize: '22px', fill: 'white'});
					this.buttontext[xi].anchor.x=.5;
					this.buttontext[xi].anchor.y=.5;
					break;
				case 5:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(5);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					this.buttontext[xi]=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Read a book",{ fontSize: '22px', fill: 'white'});
					this.buttontext[xi].anchor.x=.5;
					this.buttontext[xi].anchor.y=.5;
					break;
				case 6:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(6);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					this.buttontext[xi]=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Study",{ fontSize: '22px', fill: 'white'});
					this.buttontext[xi].anchor.x=.5;
					this.buttontext[xi].anchor.y=.5;
					break;
				case 7:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(7);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					this.buttontext[xi]=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Try on new clothes",{ fontSize: '22px', fill: 'white'});
					this.buttontext[xi].anchor.x=.5;
					this.buttontext[xi].anchor.y=.5;
					break;
				case 8:
					this.buttonArray[xi]=game.add.button(1150, 100+xi*100, "buttonsheet", function(){this.actionButtonPressed(8);},this,"over", "out", "down"); 
					this.buttonArray[xi].scale.setTo(.5,.5);
					this.buttonArray[xi].anchor.x=.5;
					this.buttonArray[xi].anchor.y=.5;
					this.buttontext[xi]=game.add.text(this.buttonArray[xi].x,this.buttonArray[xi].y, "Manscape",{ fontSize: '22px', fill: 'white'});
					this.buttontext[xi].anchor.x=.5;
					this.buttontext[xi].anchor.y=.5;
					break;
			}
		}
		this.buttonArray[4] = game.add.button(1150, 500, "buttonsheet", function(){this.actionButtonPressed(9);},this,"over", "out", "down"); 
		this.buttonArray[4].scale.setTo(.5,.5);
		this.buttonArray[4].anchor.x=.5;
		this.buttonArray[4].anchor.y=.5;
		this.buttontext[4]=game.add.text(this.buttonArray[4].x,this.buttonArray[4].y, "Take a day off",{ fontSize: '22px', fill: 'white'});
		this.buttontext[4].anchor.x=.5;
		this.buttontext[4].anchor.y=.5;
	}
};
		var fortuneShow = false;
		var buttonGroup;