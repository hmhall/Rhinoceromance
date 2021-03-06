function newGame(){
// reset day
	day = 0;
// generate fortune for the round
	nMax = 33;
	fortune = new Array();
	for (let nDay=0; nDay<nMax;nDay++){
		fortune[nDay] = new Array();
		for (stat=0;stat<4;stat++){
			fortune[nDay][stat] = new Array();
			fortune[nDay][stat][0] = Math.floor((Math.random()*4)-1); 		
		}
	}
// assign the rest of arrays according to fortune
	for (tempDay=0; tempDay<fortune.length;tempDay++){
		for(tempStat=0; tempStat<fortune[tempDay].length;tempStat++){
			switch (fortune[tempDay][tempStat][0]){
				case -1: //-1 = 1 stat and 2 stress
				fortune[tempDay][tempStat][1]=1;
				fortune[tempDay][tempStat][2]=2;
				break;
				case 0: //0 = 1 stat and 1 stress
				fortune[tempDay][tempStat][1]=1;
				fortune[tempDay][tempStat][2]=1;
				break;
				case 1: // 1 = 1 stat and 0 stress
				fortune[tempDay][tempStat][1]=1;
				fortune[tempDay][tempStat][2]=0;
				break;
				case 2: // 2 = 2 stat and 1 stress
				fortune[tempDay][tempStat][1]=2;
				fortune[tempDay][tempStat][2]=1;
				break;
			}
		}
	}
// reset player stats
	player = {};
	player.charm=10;
	player.fitness=10;
	player.smarts=10;
	player.style=10;
	player.stress=0;
}
