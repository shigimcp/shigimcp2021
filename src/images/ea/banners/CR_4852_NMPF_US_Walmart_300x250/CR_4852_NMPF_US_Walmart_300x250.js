"use strict";


//===================================================
//==================== FUNCTIONS ====================
//===================================================

//-------------------- FUNCTION: consoleLog(message) --------------------

function consoleLog(message) {
//	alert(message);
//	trace(message);
	console.log(message);
}


//-------------------- PARTICLE SYSTEM (REF: https://codepen.io/jamiejefferson/pen/rJtjw, particle01c.js) --------------------

//thisEmitter.alpha = 0;

//var thisEmitterSize = 100;
var dotPool = [];
var dotIndex = 0;
var dotQuantity = 200;
//var dotSizeMax = 30;
//var dotSizeMin = 10;
//var speed = 0.5;
//var gravity = -1;
//var speed = (100 + Math.random() * 250) * 0.625;
//var gravity = -250;
var speed = 0.25;
var gravity = -200;


function placeDots() {

//	console.log("PING!!!! FUNCTION: placeDots() triggered!");

	for (var i = dotQuantity - 1; i >= 0; i--) {

		var dot = new lib.MC_sparkle();
		thisEmitter.addChild(dot);

		TweenLite.set(dot, {scaleX:0.25, scaleY:0.25});

		dotPool[i] = dot;
	}
}

var explosion = new TimelineMax({repeat: -1})
//var explosion = new TimelineMax({paused:true, repeat: -1})
	.call(shootDot, [thisEmitter], null, 2/dotQuantity)
;


function shootDot(thisEmitter) {

	var angle = Math.random() * Math.PI*2;
	var dot = dotPool[dotIndex++];
	var thisScale = getRandom(0.5, 1.5);

	console.log("thisScale = " + thisScale);

//	TweenLite.set(dot, {scaleX:0.25, scaleY:0.25});

//	TweenLite.to(dot, 1 + Math.random(), {
	TweenLite.to(dot, speed + Math.random(), {
		alpha: 0,

		scaleX: thisScale,
		scaleY: thisScale,

		physics2D: {
			angle: angle * 180 / Math.PI, 				//translate radians to degrees
//			angle: angle * 90 / Math.PI, 					//translate radians to degrees
//			velocity: (100 + Math.random() * 250) * speed, 	//initial velocity
			velocity: (50 + Math.random() * 500) * speed, 	//initial velocity
//			gravity: 500 * gravity 						//you could increase/decrease this to give gravity more or less pull
//			velocity: speed,
			gravity: gravity
		}

		//if you'd rather not do physics, you could just animate out directly by using the following 2 lines instead of the physics2D:
		//x:Math.cos(angle) * length * 6, 
		//y:Math.sin(angle) * length * 6

	}, 0);
}


function getRandom(min, max) {
	return min + Math.random() * (max - min);
}




//===================================================
//==================== ANIMATION ====================
//===================================================

var staggerDuration = 0.125;
var staggerDelay = 0.0375;

var animDuration00 = 0.125;
var animDuration01 = 0.5;
var animDuration02 = 1;
var animDuration03 = 1.5;
var animDuration04 = 2;
var animDuration05 = 2.5;
var animDuration06 = 3;
var animDuration07 = 3.5;
var animDuration08 = 4;
var animDuration09 = 4.5;
var animDuration10 = 5;


//=================================================
//==================== OBJECTS ====================
//=================================================

var thisEmitter = this.emitter;

var starspin = this.mc_starspin;
var starspinArray = this.mc_starspin.children;

//console.log("starspinArray = " + starspinArray + "     starspinArray.length = " + starspinArray.length + "     starspinArray[0] = " + starspinArray[0]);

var logo = this.mc_logo;
var image = this.mc_image;
var bottle = this.mc_bottle;
var tag = this.mc_tag;
var shop = this.btn_shop;




//=======================================================
//==================== MAIN TIMELINE ====================
//=======================================================

//var tl = new TimelineLite({delay:2.5, repeat:3, repeatDelay:2});
//var tl = new TimelineLite({delay:.25});
//var tl = new TimelineLite({delay:0.25});
//var tl = new TimelineMax({delay:0});
var tl = new TimelineMax({delay:0.25});

tl


//==================== FRAME 01 ====================

	.call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

	.call(placeDots, [], "frame01 +=0")
	.add(explosion, 0)

	.fromTo([starspin], animDuration03, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame01 +=0")
	.set(starspinArray, {alpha:0.25}, "frame01 +=0")
//	.staggerTo(starspinArray, animDuration06, {cycle:{rotation:["35", "-35"]}, ease:Power0.easeNone, delay:0.5}, "frame01 +=0")
	.staggerTo(starspinArray, animDuration06, {cycle:{rotation:["20", "-20"]}, ease:Power0.easeNone, delay:0.5}, "frame01 +=0")

	.fromTo([image], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame01 +=1.25")
	.fromTo([logo], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame01 +=1.5")

	.fromTo([bottle], animDuration01, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame01 +=2.5")
	.fromTo([tag], animDuration01, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame01 +=2.75")

	.to([starspin], animDuration03, {alpha:0}, "frame01 +=3")

	.fromTo([shop], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame01 +=3.5")

	.call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=3.5")


////==================== FRAME 02 ====================
//
//	.call(consoleLog, ["FRAME 02 BEGIN!!!"], "frame02")
//
//	.fromTo([image], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame02 +=0")
//	.fromTo([logo], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame02 +=0.25")
//
//	.fromTo([bottle], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame02 +=1")
//	.fromTo([tag], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame02 +=1.25")
//	.fromTo([shop], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame02 +=1.75")
//
//	.call(consoleLog, ["FRAME 02 END!!!"], "frame02 +=2")
;





//tl.duration(1.5);

console.log("timing = " + tl.duration() + " secs");



this.stop();
