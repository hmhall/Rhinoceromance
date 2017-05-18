// Mistakes into Miracles
//initialize game

var game = new Phaser.Game(1000, 800, Phaser.AUTO);
//add states
game.state.add("Preloader", Preloader);
game.state.add("Mainmenu", Mainmenu);
game.state.add("StatTraining", StatTraining);
game.state.add("MiniGames",MiniGames);
game.state.add("DateNight", DateNight);
game.state.add("Gameover",Gameover);
game.state.start("Preloader");

var day=1;
var charm=10;
var fitness=10;
var smarts=10;
var style=10;
var stress=0;
var money=0;

var actiontaken=0;
