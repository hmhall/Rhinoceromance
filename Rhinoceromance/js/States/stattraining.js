//Mistakes into Miracles
var StatTraining={
	create: function(){ //creates everything needed for the current state
		console.log("StatTraining: create");
		elephantcount=0;
		snakecount=0;
		gorillacount=0;

		var elephantbutton = game.add.button(700, 0, "elephant", function(){if(day<30){elephantcount++;day++;}}, this); //buttons increase scores/days when pressed
		elephantbutton.scale.setTo(.5,.5);
		var snakebutton = game.add.button(700, 200, "snake", function(){if(day<30){snakecount++;day++;}}, this);
		snakebutton.scale.setTo(.5,.5);
		var gorillabutton = game.add.button(700, 500, "gorilla", function(){if(day<30){gorillacount++;day++;}}, this);
		gorillabutton.scale.setTo(.25,.25);
		var sudansprite = game.add.sprite(300,300,"sudan");

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