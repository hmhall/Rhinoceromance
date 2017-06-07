//Mistakes into Miracles
var DateNight={
	create: function(){ //creates everything needed for the current main game state
		console.log("DateNight: create");

		this.song = game.add.audio("dateState");
		this.song.play('', 0, 1, true);

		this.bg = game.add.sprite(0,0,"line");

		this.fatusprite = game.add.sprite(game.world.width/2,game.world.height/2+100,"fatu"); //add Fatu's sprite
		this.fatusprite.anchor.x=.5;
		this.fatusprite.anchor.y=.5;

		this.textarray=[]; //array that holds all the game text for this part
		this.storypart="fatu_start"; //keeps track of which part of the story we're on
		this.successes=0;

		this.readInText(); 
	},
	readInText:function(){ //contains all of the date text, and when called, fills textarray with the text for the current part of the story
		this.textarray=[];
		switch(DateNight.storypart){
			case "fatu_start":
				this.textarray[0]="I arrive at the concert venue.";
				this.textarray[1]="Before me stands Fatu. She looks happy to see me.";
				this.textarray[2]="Welp, I hope this last month has prepared me for tonight.";
				this.textarray[3]="Fatu: Hello Sudan!";
				this.textarray[4]="Sudan: Hello Fatu, you look gorgeous tonight.";
				this.textarray[5]="Fatu: Oh, you! Come on, let's get in line!";
				this.textarray[6]="Before us, the line loops around the side of the building.";
				this.textarray[7]="Sudan: I didn't expect the line to be this long, huh.";
				this.textarray[8]="Fatu: ...Really? You do know who we're here to see, right?";
				this.textarray[9]="Sudan: I know that much! It's the Beast Icon, of course.";
				this.textarray[10]="The Beast Icon - a recently-formed band that's been growing in popularity these past few months. I think I remember hearing about them, but where?";
				break;
			case "fatu_start_charm_success":
				this.textarray[0]="I sing one of their love songs to her.";
				this.textarray[1]="Fatu: Stop it! You're making me blush!";
				this.textarray[2]="Sudan: If that's the case, I don't think I want to stop.";
				this.textarray[3]="Fatu: Teehee!";
				this.textarray[4]="That's the only song I know, thank god she liked it.";
				break;
			case "fatu_start_charm_failure":
				this.textarray[0]="I begin singing one of their songs.";
				this.textarray[1]="Fatu: Please stop singing...";
				this.textarray[2]="Sudan: Oh s-sorry... was I not good?";
				this.textarray[3]="Fatu: ...Let's just drop the subject, okay?";
				this.textarray[4]="Damn, I don't think she enjoyed that... I hope I didn't set an awkward mood for the night...";
				break;
			case "fatu_start_style_success":
				this.textarray[0]="Their lead singer has been making quite a stir in the fasion scene lately.";
				this.textarray[1]="Come to think of it...";
				this.textarray[2]="Sudan: I just noticed... Are those the Ivory Collection skinny jeans the lead singer popularized last month?";
				this.textarray[3]="Fatu: Yeah, they are! You're the first person I've met who noticed! I can see you're a man of taste, Sudan!";
				this.textarray[3]="Sure is a good thing I know my fashion!";
				break;
			case "fatu_start_style_failure":
				this.textarray[0]="I don't know much about their music, but ever since they became popular there have been a lot of people dressing like them.";
				this.textarray[1]="Sudan: There sure are a lot of people here dressed like you. I might lose track of you haha...";
				this.textarray[2]="Fatu: What?! I'm clearly dressed better!";
				this.textarray[3]="Sudan: Uh...";
				this.textarray[3]="Uh oh. Better be careful saying stuff like that...";
				break;
			case "fatu_keyboardist":
				this.textarray[0]="We file into the concert venue. It's already packed.";
				this.textarray[1]="Looks like the opening act is a smaller, local band - one that I actually recognize. It's the band a few of my college friends made, back in the day.";
				this.textarray[2]="Good to see they're still doing their best.";
				this.textarray[3]="For some reason there's a holdup. The crowd is getting restless, and Fatu too.";
				this.textarray[4]="Fatu: Where the hell are they...?";
				this.textarray[5]="Through the crowd, I spot one of the band members leaing against a wall, looking completely exasperated. I motion for Fatu to follow me and head towards him.";
				this.textarray[6]="Sudan: Hey, Nathan!";
				this.textarray[7]="He looks surprised to see me";
				this.textarray[8]="Nathan: No way, Sudan? Never expected to see you here. You’re lookin great, man.";
				this.textarray[9]="Sudan: What's up?";
				this.textarray[10]="He explains that their keyboardist managed to get smashed before the show and had vanished somewhere into the audience, and that he was down here trying to look for him.";
				this.textarray[11]="Sudan: Damn, that’s rough…";
				this.textarray[12]="Nathan: Hey Sudan... You used to play piano, right?";
				this.textarray[13]="I see where he’s going with this and it makes me intensely nervous.";
				this.textarray[14]="Fatu does as well. She’s looking up at me with sparkling eyes.";
				this.textarray[15]="Sudan: ...Yeah, I did.";
				this.textarray[16]="Nathan: Could you possibly sub in for our keyboardist until he gets his drunk ass back here? It shouldn't be too hard; it's just a few common chord structures.";
				this.textarray[17]="What a mess. How am I gonna pull this off?";
				break;
			case "fatu_keyboardist_style_success":
				this.textarray[0]="Luckily, the crowd's loud enough that that no one seems to notice I'm mostly playing the wrong notes.";
				this.textarray[1]="And it certainly doesn't hurt that they're enthralled with my sweet dance moves and polished horn.";
				this.textarray[2]="I manage to hang in there until the actual keyboardist drags himself out of his drunken mess and onto the stage.";
				this.textarray[3]="I return to Fatu with a grin of victory amidst sounds of applause.";
				this.textarray[4]="Fatu: Wow Sudan, I didn't know you knew how to play the keyboard! You looked like a natural up there!";
				this.textarray[5]="Sudan: I used to play piano all the time in college. It's been a while since I played - I'm surprised I did so well.";
				this.textarray[6]="Fatu: Oh, stop being so modest!";
				break;
			case "fatu_keyboardist_style_failure":
				this.textarray[0]="I have no idea what the song is, and stop playing halfway through.";
				this.textarray[1]="The band makes it through on pure passion alone, but I'm completely overshadowed, and the crowd's reception is lukewarm.";
				this.textarray[2]="I slink off-stage as soon as I can...";
				this.textarray[3]="Fatu: You looked so confident going up there, I actually believed you knew what you were doing...";
				this.textarray[4]="Sudan: I'm sorry, it's been awhile since I last played piano and-";
				this.textarray[5]="Fatu: Please don't try to defend yourself, okay?";
				this.textarray[6]="Fatu looks embarrassed to be seen with me... That could've gone better.";
				break;
			case "fatu_keyboardist_smarts_success":
				this.textarray[0]="I recognize this brand of keyboard! If I just press these buttons, it should auto-play to match the song.";
				this.textarray[1]="I pretend to bang on the keys and let it do the work for me until the actual keyboardist shows up.";
				this.textarray[2]="Fatu: Wow Sudan, I didn't know you knew how to play the keyboard!";
				this.textarray[3]="Sudan: Me neither! I guess I just got lucky.";
				this.textarray[4]="Fatu: Haha well, either way, that was very brave of you to go up there.";
				break;
			case "fatu_keyboardist_smarts_failure":
				this.textarray[0]="Hmm... If I just press these buttons, it should auto-play to match the song...";
				this.textarray[1]="Wait...";
				this.textarray[2]="Oh no... I broke the keyboard...";
				this.textarray[3]="The band decides to go on without me and I exit the stage awkwardly.";
				this.textarray[4]="Fatu: I thought you were going to play the keyboard.";
				this.textarray[5]="Sudan: I was, but I may have broken it while fiddling with the buttons.";
				this.textarray[6]="Fatu: Why were you even fiddling with the buttons?";
				this.textarray[7]="Sudan: ...";
				this.textarray[8]="Fatu looks disappointed. Dammit, I made a fool out of myself.";
				break;
			case "fatu_mosh":
				this.textarray[0]="Some time passes. The Beast Icon begins playing. I can tell Fatu is clearly excited.";
				this.textarray[1]="Fatu: I'm having a great time tonight! Do you want to go into the mosh pit with me?";
				this.textarray[2]="Lowkey I kinda don't, but I don't want to look like a stick in the mud.";
				this.textarray[3]="Sudan: Yeah sure, sounds like fun!";
				break;
			case "fatu_mosh_fitness_success":
				this.textarray[0]="People are all around me flailing about, but that doesn't stop me. I'm having the time of my life!";
				this.textarray[1]="(15 minutes later)";
				this.textarray[2]="Sudan: Wow that was intense, but I had a lot of fun!";
				this.textarray[3]="Fatu: Same, I'm glad you were able to hang in there for so long. Most of the other people I know would have left after 30 seconds.";
				this.textarray[4]="She's impressed! I knew going in there would be worth it.";
				break;
			case "fatu_mosh_fitness_failure":
				this.textarray[0]="A flailing limb hits me full in the face. I stumble backwards to the edge of the crowd, breathing heavily.";
				this.textarray[1]="After a few seconds, Fatu emerges from the mass of people.";
				this.textarray[2]="Done already? I'm gonna go back in!";
				this.textarray[3]="Before I can say anything, she disappears.";
				this.textarray[4]="...I sure hope I can find her again.";
				break;
			case "fatu_mosh_smarts_success":
				this.textarray[0]="People are all around me, flailing about.";
				this.textarray[1]="I skillfully avoid every elbow and bodycheck, and I actually manage to have a good time!";
				this.textarray[2]="(15 minutes later)";
				this.textarray[3]="Sudan: That was fun! I don't think I got jabbed once!";
				this.textarray[4]="Fatu: Wow! There isn't a bruise on you... impressive!";
				this.textarray[5]="She's impressed! I knew going in there would be worth it.";
				break;
			case "fatu_mosh_smarts_failure":
				this.textarray[0]="I try to dodge the flailing limbs, but I am not fast nor skilled enough.";
				this.textarray[1]="After a few more knocks to the face, I make my way out of the crowd.";
				this.textarray[2]="A few seconds later, Fatu emerges from the mass of people.";
				this.textarray[3]="Fatu: Done already? I'm gonna go back in!";
				this.textarray[4]="Before I can say anything, she disappears.";
				this.textarray[5]="...I sure hope I can find her again.";
				break;
			case "fatu_dance":
				this.textarray[0]="One of the Beast Icon's few slower-paced songs comes on.";
				this.textarray[1]="Fatu looks like she wants to dance";
				break;
			case "fatu_dance_fitness_success":
				this.textarray[0]="I think back to the ballroom dancing classes my mother used to make me take when I was young.";
				this.textarray[1]="I gently grab Fatu's hand and pull her closer. As the two of us begin to dance, I do my best to lead her.";
				this.textarray[2]="As time goes on, I begin to notice other couples watching us. Both of us are having the time of our lives...";
				break;
			case "fatu_dance_fitness_failure":
				this.textarray[0]="I try to remember the ballroom dancing classes my mother used to make me take when I was young.";
				this.textarray[1]="I manage to get Fatu and myself into proper form, but I do a terrible job leading.";
				this.textarray[2]="After stepping on her foot for the fourth time, she pushes me away.";
				this.textarray[3]="Fatu: That's enough dancing for tonight. I'm gonna get some air.";
				this.textarray[4]="I don't blame her for leaving... I shouldn't have tried to show off.";
				break;
			case "fatu_dance_charm_success":
				this.textarray[0]="I gently grab Fatu's hands and pull her closer.";
				this.textarray[1]="She holds me and I hold her back as we begin to sway.";
				this.textarray[2]="Sometimes it's better not to say anything, and just let us enjoy the moment...";
				this.textarray[3]="I never want this to end...";
				break;
			case "fatu_dance_charm_failure":
				this.textarray[0]="I gently grab Fatu's hands and pull her closer.";
				this.textarray[1]="As we begin to sway, I start to make small talk.";
				this.textarray[2]="Sudan: Hey isn't this song about a double suicide? That's kinda fucked up.";
				this.textarray[3]="Sudan: W-wait, where are you going--?";
				this.textarray[4]="Me and my big mouth...";
				break;
			case "fatu_end_success":
				this.textarray[0]="The concert ends with an encore of Fatu's favorite song, \"Doin' the best I can.\"";
				this.textarray[1]="Eventually the cheering dies down, and people begin to filter out of the building.";
				this.textarray[2]="The night air is cold.";
				this.textarray[3]="Fatu looks up at me with a massive smile.";
				this.textarray[4]="The city lights sparkle behind her. She's beautiful.";
				this.textarray[5]="Fatu: Tonight was a good night. I had fun.";
				this.textarray[6]="Sudan: So did I...";
				this.textarray[7]="Sudan: I really like spending time with you.";
				this.textarray[8]="Fatu: I feel the same way...";
				this.textarray[9]="There's silence for a second, an expectant kind of silence.";
				this.textarray[10]="Fatu leans in for a kiss.";
				this.textarray[11]="We kiss, and the world seems to stop.";
				break;
			case "fatu_end_failure":
				this.textarray[0]="The concert ends with an encore of Fatu's favorite song, \"Doin' the best I can.\"";
				this.textarray[1]="Eventually the cheering dies down, and people begin to filter out of the building.";
				this.textarray[2]="The night air is cold.";
				this.textarray[3]="Fatu: Thanks for tonight!";
				this.textarray[4]="Fatu quickly turns away from me.";
				this.textarray[5]="Before I can say anything, she's calling someone on her phone...";
				this.textarray[6]="Fatu: Hey, could you pick me up? I'm at...";
				this.textarray[7]="What a disaster...";
				break;
		}
		var titletY = new Typewriter(); //creates a typewriter to display the text
		titletY.init(DateNight, {
			x: 100,
			y: 500,
			fontFamily: "blackFont",
			fontSize: 32,
			maxWidth: 800,
			sound: this.keypress,
			time: 2,
			dialogues: this.textarray,
			dialogueEndFn: this.onTextEnd
		});
		titletY.start();
	},
	onTextEnd: function(){ //function called when current text has been clicked through. Generates buttons based on the part of the story, or simply moves to the next story part
		switch(DateNight.storypart){
			case "fatu_start":
				let choicebutton1=game.add.button(440,360,"buttonsheet",function(){DateNight.statCheck("charm"); buttontext1.destroy(); choicebutton1.destroy(); buttontext2.destroy(); choicebutton2.destroy();},this,"over","out","down");
				choicebutton1.scale.setTo(.75,.75);
				choicebutton1.anchor.x=.5;
				choicebutton1.anchor.y=.5;
				var buttontext1=game.add.text(choicebutton1.x,choicebutton1.y,"That one catchy song your\nfriend always sings (Charm)",{ fontSize: '22px', fill: 'white'});
				buttontext1.anchor.x=.5;
				buttontext1.anchor.y=.5;

				let choicebutton2=game.add.button(840,360,"buttonsheet",function(){DateNight.statCheck("style"); buttontext1.destroy(); choicebutton1.destroy(); buttontext2.destroy(); choicebutton2.destroy();},this,"over","out","down");
				choicebutton2.scale.setTo(.75,.75);
				choicebutton2.anchor.x=.5;
				choicebutton2.anchor.y=.5;
				var buttontext2=game.add.text(choicebutton2.x,choicebutton2.y,"The fashion trend their\nlead singer started (Style)",{ fontSize: '22px', fill: 'white'});
				buttontext2.anchor.x=.5;
				buttontext2.anchor.y=.5;
				break;
			case "fatu_start_charm_success":
			case "fatu_start_charm_failure":
			case "fatu_start_style_success":
			case "fatu_start_style_failure":
				DateNight.fatusprite.loadTexture("fatu");
				DateNight.bg.loadTexture("concert");
				DateNight.storypart="fatu_keyboardist";
				DateNight.readInText();
				break;
			case "fatu_keyboardist":
				DateNight.fatusprite.loadTexture("fatusurprise");
				let choicebutton3=game.add.button(440,360,"buttonsheet",function(){DateNight.statCheck("smarts"); buttontext3.destroy(); choicebutton3.destroy(); buttontext4.destroy(); choicebutton4.destroy();},this,"over","out","down");
				choicebutton3.scale.setTo(.75,.75);
				choicebutton3.anchor.x=.5;
				choicebutton3.anchor.y=.5;
				var buttontext3=game.add.text(choicebutton3.x,choicebutton3.y,"Mess with the keyboard's\nsettings (Smarts)",{ fontSize: '22px', fill: 'white'});
				buttontext3.anchor.x=.5;
				buttontext3.anchor.y=.5;

				let choicebutton4=game.add.button(840,360,"buttonsheet",function(){DateNight.statCheck("style"); buttontext3.destroy(); choicebutton3.destroy(); buttontext4.destroy(); choicebutton4.destroy();},this,"over","out","down");
				choicebutton4.scale.setTo(.75,.75);
				choicebutton4.anchor.x=.5;
				choicebutton4.anchor.y=.5;
				var buttontext4=game.add.text(choicebutton4.x,choicebutton4.y,"Look so good no one notices\n you can't play (Style)",{ fontSize: '22px', fill: 'white'});
				buttontext4.anchor.x=.5;
				buttontext4.anchor.y=.5;
				break;
			case "fatu_keyboardist_style_success":
			case "fatu_keyboardist_style_failure":
			case "fatu_keyboardist_smarts_success":
			case "fatu_keyboardist_smarts_failure":
				DateNight.fatusprite.loadTexture("fatu");
				DateNight.storypart="fatu_mosh";
				DateNight.readInText();
				break;
			case "fatu_mosh":
				let choicebutton5=game.add.button(440,360,"buttonsheet",function(){DateNight.statCheck("fitness"); buttontext5.destroy(); choicebutton5.destroy(); buttontext6.destroy(); choicebutton6.destroy();},this,"over","out","down");
				choicebutton5.scale.setTo(.75,.75);
				choicebutton5.anchor.x=.5;
				choicebutton5.anchor.y=.5;
				var buttontext5=game.add.text(choicebutton5.x,choicebutton5.y,"Go hard (Fitness)",{ fontSize: '22px', fill: 'white'});
				buttontext5.anchor.x=.5;
				buttontext5.anchor.y=.5;

				let choicebutton6=game.add.button(840,360,"buttonsheet",function(){DateNight.statCheck("smarts"); buttontext5.destroy(); choicebutton5.destroy(); buttontext6.destroy(); choicebutton6.destroy();},this,"over","out","down");
				choicebutton6.scale.setTo(.75,.75);
				choicebutton6.anchor.x=.5;
				choicebutton6.anchor.y=.5;
				var buttontext6=game.add.text(choicebutton6.x,choicebutton6.y,"Just try not\nto get hurt (Smarts)",{ fontSize: '22px', fill: 'white'});
				buttontext6.anchor.x=.5;
				buttontext6.anchor.y=.5;
				break;
			case "fatu_mosh_fitness_success":
			case "fatu_mosh_fitness_failure":
			case "fatu_mosh_smarts_success":
			case "fatu_mosh_smarts_failure":
				DateNight.fatusprite.loadTexture("fatubashful");
				DateNight.storypart="fatu_dance";
				DateNight.readInText();
				break;
			case "fatu_dance":
				let choicebutton7=game.add.button(440,360,"buttonsheet",function(){DateNight.statCheck("charm"); buttontext7.destroy(); choicebutton7.destroy(); buttontext8.destroy(); choicebutton8.destroy();},this,"over","out","down");
				choicebutton7.scale.setTo(.75,.75);
				choicebutton7.anchor.x=.5;
				choicebutton7.anchor.y=.5;
				var buttontext7=game.add.text(choicebutton7.x,choicebutton7.y,"Sway softly (Charm)",{ fontSize: '22px', fill: 'white'});
				buttontext7.anchor.x=.5;
				buttontext7.anchor.y=.5;

				let choicebutton8=game.add.button(840,360,"buttonsheet",function(){DateNight.statCheck("fitness"); buttontext7.destroy(); choicebutton7.destroy(); buttontext8.destroy(); choicebutton8.destroy();},this,"over","out","down");
				choicebutton8.scale.setTo(.75,.75);
				choicebutton8.anchor.x=.5;
				choicebutton8.anchor.y=.5;
				var buttontext8=game.add.text(choicebutton8.x,choicebutton8.y,"Lead Fatu in\na dance (Fitness)",{ fontSize: '22px', fill: 'white'});
				buttontext8.anchor.x=.5;
				buttontext8.anchor.y=.5;
				break;
			case "fatu_dance_fitness_success":
			case "fatu_dance_fitness_failure":
			case "fatu_dance_charm_success":
			case "fatu_dance_charm_failure":
				if(DateNight.successes>=2){
					DateNight.bg.loadTexture("fatucharmedcg");
					DateNight.fatusprite.destroy();
					DateNight.storypart="fatu_end_success";				
				}
				else{
					DateNight.bg.loadTexture("line");
					DateNight.fatusprite.destroy();
					DateNight.storypart="fatu_end_failure";
				}
				DateNight.readInText();
				break;
			case "fatu_end_failure":
			case "fatu_end_success":
				this.song.stop(0);
				game.state.start("Mainmenu");
				newGame();
				break;
		}
	},
	statCheck: function(stat){ //called when the choice buttons are pressed. Determines success or failure based on stats and RNG
		console.log("DateNight: statCheck");
		switch(this.storypart){
			case "fatu_start":
				if(stat=="charm"){
					if(player.charm+Math.floor((Math.random()*50)+1)>50){
						this.fatusprite.loadTexture("fatubashful");
						this.storypart="fatu_start_charm_success";
						this.successes++;
					}
					else{
						this.fatusprite.loadTexture("fatudisappoint");
						this.storypart="fatu_start_charm_failure";
					}
				}
				else{
					if(player.style+Math.floor((Math.random()*30)+1)>30){
						this.fatusprite.loadTexture("fatusurprise");
						this.storypart="fatu_start_style_success";
						this.successes++;
					}
					else{
						this.fatusprite.loadTexture("fatuangry");
						this.storypart="fatu_start_style_failure";
					}
				}
				break;
			case "fatu_keyboardist":
				if(stat=="smarts"){
					if(player.charm+Math.floor((Math.random()*50)+1)>50){
						this.storypart="fatu_keyboardist_smarts_success";
						this.successes++;
					}
					else{
						this.fatusprite.loadTexture("fatudisappoint");
						this.storypart="fatu_keyboardist_smarts_failure";
					}
				}
				else{
					if(player.style+Math.floor((Math.random()*30)+1)>30){
						this.storypart="fatu_keyboardist_style_success";
						this.successes++;
					}
					else{
						this.fatusprite.loadTexture("fatuangry");
						this.storypart="fatu_keyboardist_style_failure";
					}
				}
				break;
			case "fatu_mosh":
				if(stat=="fitness"){
					if(player.charm+Math.floor((Math.random()*30)+1)>30){
						this.fatusprite.loadTexture("fatuhappy");
						this.storypart="fatu_mosh_fitness_success";
						this.successes++;
					}
					else{
						this.fatusprite.loadTexture("fatudisappoint");
						this.storypart="fatu_mosh_fitness_failure";
					}
				}
				else{
					if(player.smarts+Math.floor((Math.random()*50)+1)>50){
						DateNight.fatusprite.loadTexture("fatusurprise");
						this.storypart="fatu_mosh_smarts_success";
						this.successes++;
					}
					else{
						DateNight.fatusprite.loadTexture("fatudisappoint");
						this.storypart="fatu_mosh_smarts_failure";
					}
				}
				break;
			case "fatu_dance":
				if(stat=="fitness"){
					if(player.charm+Math.floor((Math.random()*30)+1)>30){
						this.fatusprite.loadTexture("fatuhappy");
						this.storypart="fatu_dance_fitness_success";
						this.successes++;
					}
					else{
						DateNight.fatusprite.loadTexture("fatuangry");
						this.storypart="fatu_dance_fitness_failure";
					}
				}
				else{
					if(player.charm+Math.floor((Math.random()*50)+1)>50){
						this.fatusprite.loadTexture("fatuhappy");
						this.storypart="fatu_dance_charm_success";
						this.successes++;
					}
					else{
						this.fatusprite.loadTexture("fatuangry");
						this.storypart="fatu_dance_charm_failure";
					}
				}
				break;
		}
		this.readInText();
	}
};

