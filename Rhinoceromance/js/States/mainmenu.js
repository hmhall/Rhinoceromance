//Mistakes into Miracles
var Mainmenu={
	create: function(){ //creates everything needed for main menu
		console.log('Mainmenu: create');
		this.stage.backgroundColor = "#CEF6F5";
		this.keypress = game.add.audio('keypress');

		var titletY = new Typewriter();
		titletY.init(Mainmenu, {
			x: 100,
			y: 600,
			fontFamily: "blackFont",
			fontSize: 32,
			maxWidth: 800,
			sound: this.keypress,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel fermentum arcu, et mattis odio. Ut a vulputate eros. Sed sit amet commodo purus, eget pharetra arcu. Praesent vitae purus at ex sagittis vulputate. Sed euismod felis non nulla tempus sollicitudin at gravida odio. Pellentesque mollis, turpis a rhoncus viverra, enim arcu bibendum turpis, quis euismod ipsum dolor a enim. Mauris efficitur ultrices faucibus. Phasellus quis eros sollicitudin, congue mi ut, maximus purus. Aenean ultrices imperdiet purus at laoreet. Maecenas lacinia dictum consectetur. Donec mi nulla, tempus non feugiat vitae, tempus sed purus. Fusce nec egestas lacus. Nam lacinia tempus leo, quis ultrices turpis condimentum at. Integer iaculis mi ut metus porta posuere. Ut et efficitur est."
		});
		titletY.start();

		var startbutton = game.add.button(game.world.width/2, 50, "buttonsheet", this.start, this, "over", "out", "down"); //add button
		this.add.text(game.world.width/2, 50,"Click the button to start",{fontSize: "32px", fill: "white" });
	},
	start: function(){ //changes state when the button is pressed
		console.log('Mainmenu: start');
		this.keypress.stop();
		this.state.start("StatTraining");

		

	}
};