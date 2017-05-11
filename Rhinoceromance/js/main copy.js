// Mistakes into Miracles
var Preloader={
	preload: function() { // preload assets
		console.log('Preloader: preload');
		this.load.atlas("atlas","assets/img/spritesheet.png","assets/img/sprites.json");
		this.load.image("elephant","assets/img/legfaceman.png");
		this.load.image("gorilla","assets/img/handfeetman.png");
		this.load.image("snake","assets/img/windyman.png");
		this.load.image("sudan","assets/img/sudan.png");
		this.load.image("heart","assets/img/heart.png");
		this.load.image("brokenheart","assets/img/broken_heart.png");
		this.state.start("Mainmenu");
	},
	create: function() {
		console.log('Preloader: create');
		game.state.start('Mainmenu');
	}
};
var Mainmenu={
	create: function(){ //creates everything needed for main menu
		console.log('Mainmenu: create');
		var startbutton = game.add.button(game.world.centerX/2, 50, "atlas", this.start, this, "jumping", "idle1", "damaged"); //add button
		this.add.text(150,game.world.height/2,"Click the funny little man to start",{fontSize: "32px", fill: "white" });
	},
	start: function(){ //changes state when the button is pressed
		console.log('Mainmenu: start');
		this.state.start("StatTraining");
	}
};
var StatTraining={
	create: function(){ //creates everything needed for the current main game state
		console.log("StatTraining: create");
		var elephantbutton = game.add.button(700, 0, "elephant", function(){if(day<30){elephantcount++;day++;}}, this); //buttons increase scores/days when pressed
		elephantbutton.scale.setTo(.5,.5);
		var snakebutton = game.add.button(700, 200, "snake", function(){if(day<30){snakecount++;day++;}}, this);
		snakebutton.scale.setTo(.5,.5);
		var gorillabutton = game.add.button(700, 500, "gorilla", function(){if(day<30){gorillacount++;day++;}}, this);
		gorillabutton.scale.setTo(.25,.25);
		var sudansprite = game.add.sprite(300,300,"sudan");
		sudansprite.scale.setTo(.5,.5);

		this.elephanttext=game.add.text(50, 50, "Leg face man points: 0", { fontSize: '32px', fill: 'white' }); //displays each stat
		this.snaketext=game.add.text(50, 250, "Long mover points: 0", { fontSize: '32px', fill: 'white' });
		this.gorillatext=game.add.text(50, 550, "Small hands frenchman points: 0", { fontSize: '32px', fill: 'white' });
		this.daytext=game.add.text(game.world.width/2, 600, "Day: 0", { fontSize: '32px', fill: 'white' });

		this.timefordate=false;

	},
	update: function(){
		this.elephanttext.text="Leg face man points: "+elephantcount; //updates each text object
		this.snaketext.text="Long mover points: "+snakecount;
		this.gorillatext.text="Small hands frenchman points: "+gorillacount;
		this.daytext.text="Day: "+day;
		if(day==30&&!this.timefordate){ //creates heart button at day 30 exactly once
			this.timefordate=true;
			this.datebutton=game.add.button(700,600,"heart",function(){this.state.start("DateNight");},this); //when clicked, moves to DateNight
			this.datebutton.scale.setTo(.075,.075);
		}
	}
};
var DateNight={
	create: function(){ //creates everything needed for the current main game state
		console.log("DateNight: create");
		this.elephantbutton = game.add.button(700, 0, "elephant", function(){this.resolveDate(1);}, this); //dumb workaround to deal with the way buttons are implemented, but it works
		this.elephantbutton.scale.setTo(.5,.5);
		this.snakebutton = game.add.button(700, 200, "snake", function(){this.resolveDate(2);}, this);
		this.snakebutton.scale.setTo(.5,.5);
		this.gorillabutton = game.add.button(700, 500, "gorilla", function(){this.resolveDate(3);}, this);
		this.gorillabutton.scale.setTo(.25,.25);

		this.elephanttext=game.add.text(50, 50, "Click the leg face man to impress your date with a leg on your face\nLeg face man points: "+elephantcount, { fontSize: '24px', fill: 'white' }); 
		this.snaketext=game.add.text(50, 250, "Click the long mover to seduce your date with your windy body\nLong mover points: "+snakecount, { fontSize: '24px', fill: 'white' });
		this.gorillatext=game.add.text(50, 550, "Click the small hands frenchman to caress your date with your handfeet\nSmall hands frenchman points: "+gorillacount, { fontSize: '24px', fill: 'white' });
	},
	update: function(){
		
	},
	resolveDate: function(dateChoice){
		console.log("DateNight: resolveDate "+dateChoice);
		switch(dateChoice){ //resolves date differently depending on which date was chosen
			case 1:
				this.elephantbutton.inputEnabled=false; //disables button
				this.snakebutton.destroy(); //destroy all buttons not chosen
				this.gorillabutton.destroy();
				this.snaketext.destroy();
				this.gorillatext.destroy();
				if(elephantcount>=15){
					this.elephanttext.text="Your date is impressed by the virility of your leg face...\nYou live happily ever after";
					this.endbutton=game.add.button(700,600,"heart",function(){this.state.start("Gameover");},this);
					this.endbutton.scale.setTo(.075,.075);
				}
				else{
					this.elephanttext.text="Your date is disgusted by your leg face...\nYou die alone and your species goes extinct";
					this.endbutton=game.add.button(700,600,"brokenheart",function(){this.state.start("Gameover");},this);
					this.endbutton.scale.setTo(.075,.075);
				}
				break;
			case 2:
				this.snakebutton.inputEnabled=false; //disables button
				this.elephantbutton.destroy(); //destroy all buttons not chosen
				this.gorillabutton.destroy();
				this.elephanttext.destroy();
				this.gorillatext.destroy();
				if(snakecount>=15){
					this.snaketext.text="Your date is aroused by the windiness of your slithery body...\nYou live happily ever after";
					this.endbutton=game.add.button(700,600,"heart",function(){this.state.start("Gameover");},this);
					this.endbutton.scale.setTo(.075,.075);
				}
				else{
					this.snaketext.text="Your date is put off by your writhing contortions...\nYou die alone and your species goes extinct";
					this.endbutton=game.add.button(700,600,"brokenheart",function(){this.state.start("Gameover");},this);
					this.endbutton.scale.setTo(.075,.075);
				}
				break;
			case 3:
				this.gorillabutton.inputEnabled=false; //disables button
				this.elephantbutton.destroy(); //destroy all buttons not chosen
				this.snakebutton.destroy();
				this.elephanttext.destroy();
				this.snaketext.destroy();
				if(gorillacount>=15){
					this.gorillatext.text="Your date is touched by the heartfelt caress of your handfeet...\nYou live happily ever after";
					this.endbutton=game.add.button(700,600,"heart",function(){this.state.start("Gameover");},this);
					this.endbutton.scale.setTo(.075,.075);
				}
				else{
					this.gorillatext.text="Your date thinks your handfeet are creepy...\nYou die alone and your species goes extinct";
					this.endbutton=game.add.button(700,600,"brokenheart",function(){this.state.start("Gameover");},this);
					this.endbutton.scale.setTo(.075,.075);
				}
				break;
		}
	}
};
var Gameover={
	create: function(){ //creates everything needed for the current gameover state
		console.log("Gameover: create");
		var restartbutton = game.add.button(game.world.centerX/2, 50, "atlas", this.restart, this, "jumping", "idle1", "damaged"); //add button
		this.add.text(150,game.world.height/2,"Game over\nClick the funny little man to restart",{fontSize: "32px", fill: "white" });
	},
	restart: function(){  //returns to main menu when a TBD button is pressed
		console.log("Gameover: restart");
		game.state.start("Mainmenu");
	}
};

//initialize game
var game = new Phaser.Game(1000, 800, Phaser.AUTO);
//add states
game.state.add("Preloader", Preloader);
game.state.add("Mainmenu", Mainmenu);
game.state.add("StatTraining", StatTraining);
game.state.add("DateNight", DateNight);
game.state.add("Gameover",Gameover);
game.state.start("Preloader");

var day=0;
var snakecount=0;
var gorillacount=0;
var elephantcount=0;
