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
// initialize variables
newGame();
