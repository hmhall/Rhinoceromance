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

		//creates buttons for each action that have text created on top of them
		var charmbutton = game.add.button(850, 100, "buttonsheet", function(){this.actionButtonPressed(1);},this,"over", "out", "down"); 
		charmbutton.scale.setTo(.5,.5);
		charmbutton.anchor.x=.5;
		charmbutton.anchor.y=.5;
		var charmbuttontext=game.add.text(charmbutton.x,charmbutton.y, "Go out for a drink",{ fontSize: '22px', fill: 'white'});
		charmbuttontext.anchor.x=.5;
		charmbuttontext.anchor.y=.5;

		var fitnessbutton = game.add.button(850, 200, "buttonsheet", function(){this.actionButtonPressed(2);},this,"over", "out", "down"); 
		fitnessbutton.scale.setTo(.5,.5);
		fitnessbutton.anchor.x=.5;
		fitnessbutton.anchor.y=.5;
		var fitnessbuttontext=game.add.text(fitnessbutton.x,fitnessbutton.y, "Work out",{ fontSize: '22px', fill: 'white'});
		fitnessbuttontext.anchor.x=.5;
		fitnessbuttontext.anchor.y=.5;

		var smartsbutton = game.add.button(850, 300, "buttonsheet", function(){this.actionButtonPressed(3);},this,"over", "out", "down"); 
		smartsbutton.scale.setTo(.5,.5);
		smartsbutton.anchor.x=.5;
		smartsbutton.anchor.y=.5;
		var smartsbuttontext=game.add.text(smartsbutton.x,smartsbutton.y, "Read a book",{ fontSize: '22px', fill: 'white'});
		smartsbuttontext.anchor.x=.5;
		smartsbuttontext.anchor.y=.5;

		var stylebutton = game.add.button(850, 400, "buttonsheet", function(){this.actionButtonPressed(4);},this,"over", "out", "down"); 
		stylebutton.scale.setTo(.5,.5);
		stylebutton.anchor.x=.5;
		stylebutton.anchor.y=.5;
		var stylebuttontext=game.add.text(stylebutton.x,stylebutton.y, "Craft your look",{ fontSize: '22px', fill: 'white'});
		stylebuttontext.anchor.x=.5;
		stylebuttontext.anchor.y=.5;

		var stressbutton = game.add.button(850, 500, "buttonsheet", function(){this.actionButtonPressed(5);},this,"over", "out", "down"); 
		stressbutton.scale.setTo(.5,.5);
		stressbutton.anchor.x=.5;
		stressbutton.anchor.y=.5;
		var stressbuttontext=game.add.text(stressbutton.x,stressbutton.y, "Take a day off",{ fontSize: '22px', fill: 'white'});
		stressbuttontext.anchor.x=.5;
		stressbuttontext.anchor.y=.5;

		var moneybutton = game.add.button(850, 600, "buttonsheet", function(){this.actionButtonPressed(6);},this,"over", "out", "down"); 
		moneybutton.scale.setTo(.5,.5);
		moneybutton.anchor.x=.5;
		moneybutton.anchor.y=.5;
		var moneybuttontext=game.add.text(moneybutton.x,moneybutton.y, "Go to work",{ fontSize: '22px', fill: 'white'});
		moneybuttontext.anchor.x=.5;
		moneybuttontext.anchor.y=.5;

		
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
		this.moneytext.text="Money: $"+money;

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
			this.nextbutton=game.add.button(750,650,"nextbutton",this.resetDay,this,"over","out","down");
			this.nextbutton.scale.setTo(.75,.75);
			actiontaken=-1;
		}
	},
	actionButtonPressed: function(actiontype){
		console.log("StatTraining: actionButtonPressed");
		if(actiontaken==0){
			actiontaken=actiontype;
			this.state.start("MiniGames");
		}
	},
	resetDay: function(button){
		this.sudansprite.loadTexture("base");
		day++;
		this.nextbutton.destroy();
		actiontaken=0;
	}
};
