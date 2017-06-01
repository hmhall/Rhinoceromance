// Mistakes into Miracles
//initialize game

var game = new Phaser.Game(1280, 720, Phaser.AUTO);
//add states
game.state.add("Boot", Boot);
game.state.add("Preloader", Preloader);
game.state.add("Mainmenu", Mainmenu);
game.state.add("StatTraining", StatTraining);
game.state.add("MiniGames",MiniGames);
game.state.add("DateNight", DateNight);
game.state.add("Gameover",Gameover);
game.state.start("Boot");


var day=1;
var player = {};
player.charm=10;
player.fitness=10;
player.smarts=10;
player.style=10;
player.stress=0;
player.arrive = false;
player.order = false;
player.etiquette = false;
player.topic = false;

var actiontaken=0;
