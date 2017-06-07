//Mistakes into Miracles
var StatTraining={
	create: function(){ //creates everything needed for the current state
		//let pentas = new drawStats();
		console.log("StatTraining: create");

		let apartmentbg=game.add.sprite(0,0,"apartment"); //add background
		apartmentbg.scale.setTo(.79,.79);

		this.sudansprite = game.add.sprite(game.world.width/2,game.world.height/2+100,"base"); //add Sudan's sprite
		this.sudansprite.scale.setTo(.75,.75);
		this.sudansprite.anchor.x=.5;
		this.sudansprite.anchor.y=.5;

		//this.song = game.add.audio("statTraining");
		//this.song.play('', 0, 1, true);

		this.buttonArray=[]; //holds the buttons so they can be easily disabled

		this.setupButtons("icons"); 

		//sets up a graphic to display the stats, and displays them
		let statwindow = game.add.sprite(20,100,"statwindow");
		statwindow.scale.setTo(.75,.75);
		this.charmtext=game.add.text(35, 120, "Charm: 10", { fontSize: '32px', fill: 'white' });
		this.fitnesstext=game.add.text(35, 170, "Fitness: 10", { fontSize: '32px', fill: 'white' });
		this.smartstext=game.add.text(35, 220, "Smarts: 10", { fontSize: '32px', fill: 'white' });
		this.styletext=game.add.text(35, 270, "Style: 10", { fontSize: '32px', fill: 'white' });
		//this.stresstext=game.add.text(35, 320, "Stress: 0", { fontSize: '32px', fill: 'white' });


		//does the same for the days
		let daywindow=game.add.sprite(125,50,"daytimer");
		daywindow.anchor.x=.5;
		daywindow.anchor.y=.5;
		this.daytext=game.add.text(daywindow.x, daywindow.y, "Day 0", { fontSize: '32px', fill: 'white' });
		this.daytext.anchor.x=.5;
		this.daytext.anchor.y=.5;
		
		this.stressBar = new Bar (this.game); 
		
		let fortuneButton = this.add.button(950,50,"buttonsheet",this.toggleFortune,this,"miniover","miniout","minidown");
		fortuneButton.scale.setTo(.3);
		fortuneButton.anchor.set(0.5);	

	},
	update: function(){
		
		this.stressBar.setPercent(100-player.stress*10);
		
		this.daytext.text="Day: "+day; //updates text
		this.charmtext.text="Charm: "+player.charm;
		this.fitnesstext.text="Fitness: "+player.fitness;
		this.smartstext.text="Smarts: "+player.smarts;
		this.styletext.text="Style: "+player.style;
		//this.stresstext.text="Stress: "+player.stress;
		
		if (player.stress < 0) stress=0; //ensures stress is never below 0
		if (player.stress > 9) /*this.song.stop(0);*/ this.state.start("Gameover"); //lose game if stress hits 10 and stops music
		
	},
	toggleFortune: function() { //opens/closes the daily fortune menu when button is pressed
		console.log(fortuneShow);
	if (!fortuneShow){
		console.log("tween");
		for (xB=0;xB<this.buttonArray.length;xB++) this.buttonArray[xB].inputEnabled = false;
		
		fortuneGroup = game.add.group();
		fMask = game.add.image(1011.2,0,"mask");
		fortuneGroup.add(fMask);
		let ySpacing = 75;
		let xSpacing = 60;
		let fortuneX = 1111.2;
		let fortuneY = 420;
		for (fDay=day;fDay<day+3;fDay++){
			for (stat=0;stat<4;stat++){
				
				switch(fortune[fDay][stat][0]){
				case -1:
				let luckn=game.add.sprite(fortuneX,fortuneY,"luckn");fortuneGroup.add(luckn);break;
				case 0:
				let luck0=game.add.sprite(fortuneX,fortuneY,"luck0");fortuneGroup.add(luck0);break;
				case 1:
				let luck1=game.add.sprite(fortuneX,fortuneY,"luck1");fortuneGroup.add(luck1);break;
				case 2:
				let luck2=game.add.sprite(fortuneX,fortuneY,"luck2");fortuneGroup.add(luck2);break;
				}
				fortuneY+=ySpacing; 
			}
			fortuneY=420;
			fortuneX+=xSpacing;

		}
		fortuneGroup.scale.set(1.5,1.5)
		game.add.tween(fortuneGroup.scale).to( {x: 1, y: 1}, 500, Phaser.Easing.Back.InOut, true, 0, 0).yoyo(false);
	}else{
		console.log("destroying");
		fortuneGroup.destroy();
		
		for (xB=0;xB<this.buttonArray.length;xB++) this.buttonArray[xB].inputEnabled = true;
	};
		//let fortuneTab = this.game 
		fortuneShow = !fortuneShow;
	},
	actionButtonPressed: function(actiontype){ //handles stat and sprite changes when the action buttons are pressed
		console.log("StatTraining: actionButtonPressed");
		switch(actiontype){
			case "charm1": 
				player.charm+=modCharm;
				player.stress+=(stressCharm-1);
				this.sudansprite.loadTexture("charming");
				break;
			case "charm2": 
				player.charm+=(modCharm+1);
				player.stress+=stressCharm;
				this.sudansprite.loadTexture("charming");
				break;
			case "charm3": 
				player.charm+=(modCharm+2);
				player.stress+=(stressCharm+1);
				this.sudansprite.loadTexture("charming");
				break;
			case "fitness1": 
				player.fitness+=modFitness;
				player.stress+=(stressFitness-1);
				this.sudansprite.loadTexture("exercising");
				break;
			case "fitness2": 
				player.fitness+=(modFitness+1);
				player.stress+=stressFitness;
				this.sudansprite.loadTexture("exercising");
				break;
			case "fitness3": 
				player.fitness+=(modFitness+2);
				player.stress+=(stressFitness+1);
				this.sudansprite.loadTexture("exercising");
				break;
			case "style1": 
				player.style+=modStyle;
				player.stress+=(stressStyle-1);
				this.sudansprite.loadTexture("stylin");
				break;
			case "style2": 
				player.style+=(modStyle+1);
				player.stress+=stressStyle;
				this.sudansprite.loadTexture("stylin");
				break;
			case "style3": 
				player.style+=(modStyle+2);
				player.stress+=(stressStyle+1);
				this.sudansprite.loadTexture("stylin");
				break;
			case "smarts1": 
				player.smarts+=modSmarts;
				player.stress+=(stressSmarts-1);
				this.sudansprite.loadTexture("studying");
				break;
			case "smarts2": 
				player.smarts+=(modSmarts+1);
				player.smarts+=stressSmarts;
				this.sudansprite.loadTexture("studying");
				break;
			case "smarts3": 
				player.smarts+=(modSmarts+2);
				player.stress+=(stressSmarts+1);
				this.sudansprite.loadTexture("studying");
				break;
			case "rest1": 
				player.stress-=3;
				this.sudansprite.loadTexture("resting");
				break;
			case "rest2": 
				player.charm-=1;
				player.fitness-=1;
				player.smarts-=1;
				player.style-=1;
				player.stress=0;
				this.sudansprite.loadTexture("resting");
				break;

		} 
		this.nextbutton=game.add.button(1100,350,"nextbutton",this.resetDay,this,"over","out","down");
		this.nextbutton.scale.setTo(.75,.75);
	},
	resetDay: function(){ //resets the state of the game to the beginning of the day
		this.sudansprite.loadTexture("base");
		day++;
		this.nextbutton.destroy();
		if(day>=30){ //on day 30, instead of the regular icons, we have a button to go to the DateNight
			//this.song.stop(0); // stops music on day 30
			let heartbutton=game.add.button(1050,250,"heart",function(){this.state.start("DateNight");},this); //when clicked, moves to DateNight
			heartbutton.scale.setTo(.075,.075);
		}
		else
			this.setupButtons("icons");
	},
	setupButtons: function(actionoptions){ //sets up the buttons that correspond to the current actionoptions
		console.log("StatTraining: setupButtons "+actionoptions);

		modCharm=fortune[day][0][1];
		modFitness=fortune[day][1][1];
		modSmarts=fortune[day][2][1];
		modStyle= fortune[day][3][1];
		stressCharm=fortune[day][0][2];
		stressFitness=fortune[day][1][2];
		stressSmarts=fortune[day][2][2];
		stressStyle= fortune[day][3][2];

		var buttonGroup=game.add.group();

		switch(actionoptions){
			case "icons":
				this.buttonArray[0]=game.add.button(1150, 150, "charm", function(){buttonGroup.destroy(); this.setupButtons("charm");},this); 
				this.buttonArray[0].anchor.x=.5;
				this.buttonArray[0].anchor.y=.5;
				buttonGroup.add(this.buttonArray[0]);

				this.buttonArray[1]=game.add.button(1150, 250, "fitness", function(){buttonGroup.destroy(); this.setupButtons("fitness");},this); 
				this.buttonArray[1].anchor.x=.5;
				this.buttonArray[1].anchor.y=.5;
				buttonGroup.add(this.buttonArray[1]);

				this.buttonArray[2]=game.add.button(1150, 350, "smarts", function(){buttonGroup.destroy(); this.setupButtons("smarts");},this); 
				this.buttonArray[2].anchor.x=.5;
				this.buttonArray[2].anchor.y=.5;
				buttonGroup.add(this.buttonArray[2]);

				this.buttonArray[3]=game.add.button(1150, 450, "style", function(){buttonGroup.destroy(); this.setupButtons("style");},this); 
				this.buttonArray[3].anchor.x=.5;
				this.buttonArray[3].anchor.y=.5;
				buttonGroup.add(this.buttonArray[3]);

				if(player.stress!=0){
					this.buttonArray[4]=game.add.button(1150, 550, "rest", function(){buttonGroup.destroy(); this.setupButtons("rest");},this); 
					this.buttonArray[4].anchor.x=.5;
					this.buttonArray[4].anchor.y=.5;
					buttonGroup.add(this.buttonArray[4]);
				}
				break;
			case "charm":
				this.buttonArray[0]=game.add.button(1150, 150, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("charm1");},this,"over", "out", "down"); 
				this.buttonArray[0].anchor.x=.5;
				this.buttonArray[0].anchor.y=.5;
				this.buttonArray[0].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[0]);
				buttontext1=game.add.text(this.buttonArray[0].x,this.buttonArray[0].y, "Relaxed",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[1]=game.add.button(1150, 250, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("charm2");},this,"over", "out", "down"); 
				this.buttonArray[1].anchor.x=.5;
				this.buttonArray[1].anchor.y=.5;
				this.buttonArray[1].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[1]);
				buttontext1=game.add.text(this.buttonArray[1].x,this.buttonArray[1].y, "Moderate",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[2]=game.add.button(1150, 350, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("charm3");},this,"over", "out", "down"); 
				this.buttonArray[2].anchor.x=.5;
				this.buttonArray[2].anchor.y=.5;
				this.buttonArray[2].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[2]);
				buttontext1=game.add.text(this.buttonArray[2].x,this.buttonArray[2].y, "Intense",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[3]=game.add.button(1150, 450, "buttonsheet", function(){buttonGroup.destroy(); this.setupButtons("icons");},this,"over", "out", "down"); 
				this.buttonArray[3].anchor.x=.5;
				this.buttonArray[3].anchor.y=.5;
				this.buttonArray[3].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[3]);
				buttontext1=game.add.text(this.buttonArray[3].x,this.buttonArray[3].y, "Back",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);
				break;

			case "fitness":
				this.buttonArray[0]=game.add.button(1150, 150, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("fitness1");},this,"over", "out", "down"); 
				this.buttonArray[0].anchor.x=.5;
				this.buttonArray[0].anchor.y=.5;
				this.buttonArray[0].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[0]);
				buttontext1=game.add.text(this.buttonArray[0].x,this.buttonArray[0].y, "Relaxed",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[1]=game.add.button(1150, 250, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("fitness2");},this,"over", "out", "down"); 
				this.buttonArray[1].anchor.x=.5;
				this.buttonArray[1].anchor.y=.5;
				this.buttonArray[1].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[1]);
				buttontext1=game.add.text(this.buttonArray[1].x,this.buttonArray[1].y, "Moderate",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[2]=game.add.button(1150, 350, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("fitness3");},this,"over", "out", "down"); 
				this.buttonArray[2].anchor.x=.5;
				this.buttonArray[2].anchor.y=.5;
				this.buttonArray[2].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[2]);
				buttontext1=game.add.text(this.buttonArray[2].x,this.buttonArray[2].y, "Intense",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[3]=game.add.button(1150, 450, "buttonsheet", function(){buttonGroup.destroy(); this.setupButtons("icons");},this,"over", "out", "down"); 
				this.buttonArray[3].anchor.x=.5;
				this.buttonArray[3].anchor.y=.5;
				this.buttonArray[3].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[3]);
				buttontext1=game.add.text(this.buttonArray[3].x,this.buttonArray[3].y, "Back",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);
				break;
			case "smarts":
				this.buttonArray[0]=game.add.button(1150, 150, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("smarts1");},this,"over", "out", "down"); 
				this.buttonArray[0].anchor.x=.5;
				this.buttonArray[0].anchor.y=.5;
				this.buttonArray[0].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[0]);
				buttontext1=game.add.text(this.buttonArray[0].x,this.buttonArray[0].y, "Relaxed",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[1]=game.add.button(1150, 250, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("smarts2");},this,"over", "out", "down"); 
				this.buttonArray[1].anchor.x=.5;
				this.buttonArray[1].anchor.y=.5;
				this.buttonArray[1].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[1]);
				buttontext1=game.add.text(this.buttonArray[1].x,this.buttonArray[1].y, "Moderate",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[2]=game.add.button(1150, 350, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("smarts3");},this,"over", "out", "down"); 
				this.buttonArray[2].anchor.x=.5;
				this.buttonArray[2].anchor.y=.5;
				this.buttonArray[2].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[2]);
				buttontext1=game.add.text(this.buttonArray[2].x,this.buttonArray[2].y, "Intense",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[3]=game.add.button(1150, 450, "buttonsheet", function(){buttonGroup.destroy(); this.setupButtons("icons");},this,"over", "out", "down"); 
				this.buttonArray[3].anchor.x=.5;
				this.buttonArray[3].anchor.y=.5;
				this.buttonArray[3].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[3]);
				buttontext1=game.add.text(this.buttonArray[3].x,this.buttonArray[3].y, "Back",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);
				break;
			case "style":
				this.buttonArray[0]=game.add.button(1150, 150, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("style1");},this,"over", "out", "down"); 
				this.buttonArray[0].anchor.x=.5;
				this.buttonArray[0].anchor.y=.5;
				this.buttonArray[0].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[0]);
				buttontext1=game.add.text(this.buttonArray[0].x,this.buttonArray[0].y, "Relaxed",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[1]=game.add.button(1150, 250, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("style2");},this,"over", "out", "down"); 
				this.buttonArray[1].anchor.x=.5;
				this.buttonArray[1].anchor.y=.5;
				this.buttonArray[1].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[1]);
				buttontext1=game.add.text(this.buttonArray[1].x,this.buttonArray[1].y, "Moderate",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[2]=game.add.button(1150, 350, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("style3");},this,"over", "out", "down"); 
				this.buttonArray[2].anchor.x=.5;
				this.buttonArray[2].anchor.y=.5;
				this.buttonArray[2].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[2]);
				buttontext1=game.add.text(this.buttonArray[2].x,this.buttonArray[2].y, "Intense",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[3]=game.add.button(1150, 450, "buttonsheet", function(){buttonGroup.destroy(); this.setupButtons("icons");},this,"over", "out", "down"); 
				this.buttonArray[3].anchor.x=.5;
				this.buttonArray[3].anchor.y=.5;
				this.buttonArray[3].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[3]);
				buttontext1=game.add.text(this.buttonArray[3].x,this.buttonArray[3].y, "Back",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);
				break;
			case "rest":
				this.buttonArray[0]=game.add.button(1150, 150, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("rest1");},this,"over", "out", "down"); 
				this.buttonArray[0].anchor.x=.5;
				this.buttonArray[0].anchor.y=.5;
				this.buttonArray[0].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[0]);
				buttontext1=game.add.text(this.buttonArray[0].x,this.buttonArray[0].y, "Light Rest",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[1]=game.add.button(1150, 300, "buttonsheet", function(){buttonGroup.destroy(); this.actionButtonPressed("rest2");},this,"over", "out", "down"); 
				this.buttonArray[1].anchor.x=.5;
				this.buttonArray[1].anchor.y=.5;
				this.buttonArray[1].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[1]);
				buttontext1=game.add.text(this.buttonArray[1].x,this.buttonArray[1].y, "Sleep All Day",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);

				this.buttonArray[2]=game.add.button(1150, 450, "buttonsheet", function(){buttonGroup.destroy(); this.setupButtons("icons");},this,"over", "out", "down"); 
				this.buttonArray[2].anchor.x=.5;
				this.buttonArray[2].anchor.y=.5;
				this.buttonArray[2].scale.setTo(.5,.5);
				buttonGroup.add(this.buttonArray[2]);
				buttontext1=game.add.text(this.buttonArray[2].x,this.buttonArray[2].y, "Back",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;
				buttonGroup.add(buttontext1);
				break;
		}

	}
};
		var fortuneShow = false;
