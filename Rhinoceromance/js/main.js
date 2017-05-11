// Mistakes into Miracles
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
