/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

	"use strict";

	var screenWidth = 468;
	var screenHeight = 60;

	var canvas = document.getElementById("canvas");
	canvas.setAttribute("width", screenWidth.toString());
	canvas.setAttribute("height", screenHeight.toString());

	var stage = new createjs.Stage(canvas);

	var advertText = {};
	var advertTextGrow = 3;

	var advertBanner = {};
	var urlLink = "http://gc200222770.computerstudi.es/portfolio/index.html"
	var urlText

	function init() {
		console.log("Initialization");

		stage.enableMouseOver(20);

		createjs.Ticker.setFPS(60);

		createjs.Ticker.addEventListener("tick", animationLoop);

		main();
	}

	function animationLoop() {
			advertText.rotate += 3

		stage.update();

	}

	function main() {
		advertBanner = new createjs.Bitmap('../Assets/images/advertBanner.jpg');
        advertBanner.regX = 468;
		advertBanner.regY = 60;
        advertBanner.scaleX = 1; /*Size */
        advertBanner.scaleY = 1;
        advertBanner.x = 468 * 0.5;
        advertBanner.y = 60 * 0.5; /*location*/
        stage.addChild(advertBanner);

        advertText = new createjs.Text("CLICK HERE!", "40px Roboto", "#iii");
        advertText.regX = 20 * 0.5;
        advertText.regY = 20 * 0.5;
       	advertText.x = 468 * 0.7;
        advertText.y = 60 * 0.5;/*location*/
        stage.addChild(advertText);

        advertBanner.on("click", function () {
            advertText.text = "Thanks";
            advertText.regX = advertText.getMeasuredWidth() * 0.5;
            advertText.regY = advertText.getMeasuredHeight() * 0.5;
            window.open(urlLink);
        });

        advertBanner.on('mouseover', function () {
            advertBanner.alpha = 0.5;
        })

        advertBanner.on('mouseout', function () {
            advertBanner.alpha = 1;
        })
    }


	window.onload = init;


})();