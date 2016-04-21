(function () {
	"use strict";

	var stage;
	var canvas;

	function init() {
		// reference to canvas element
		canvas = document.getElementById("canvas");
		// create a stage container object
		stage = new createjs.Stage(canvas);
		// set frame rate
		createjs.Ticker.setFPS(60);
		// listen for frame changes and call the animation function
		createjs.Ticker.addEventListener("tick", aniamtionLoop);
	}

	// runs every frame
	function animationLoop() {
		// refresh the stage object
		stage.update();
	}

	function main() {
		var advertText = new createjs.Text("Click Here!", "40px Roboto", "#fffff");
		stage.addChild(advertText);
	}

	window.load = init;

})();