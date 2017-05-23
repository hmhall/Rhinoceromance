// Mistakes into Miracles
//initialize game

var game = new Phaser.Game(1280, 720, Phaser.AUTO);
//add states
game.state.add("Preloader", Preloader);
game.state.add("Mainmenu", Mainmenu);
game.state.add("StatTraining", StatTraining);
game.state.add("MiniGames",MiniGames);
game.state.add("DateNight", DateNight);
game.state.add("Gameover",Gameover);
game.state.start("Preloader");

var day=1;

var player = {};
player.charm=10;
player.fitness=10;
player.smarts=10;
player.style=10;
player.stress=0;

var actiontaken=0;
