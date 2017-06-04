function newGame(){
	day = 0;
	nMax = 30;
	fortune = new Array();
	for (let nDay=0; nDay<nMax;nDay++){
		fortune[nDay] = new Array();
		for (stat=0;stat<4;stat++){
			fortune[nDay][stat] = Math.floor((Math.random()*4)-1);

		}
	}

	player = {};
	player.charm=10;
	player.fitness=10;
	player.smarts=10;
	player.style=10;
	player.stress=0;
	player.arrive = false;
	player.order = false;
	player.etiquette = false;
	player.topic = false;

	actiontaken=0;

}