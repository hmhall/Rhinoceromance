//Mistakes into Miracles
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