//==================== ANIMATION ====================

var staggerDuration = .125;
var staggerDelay = 0.0375;

var animDuration00 = .125;
var animDuration01 = .5;
var animDuration02 = 1;
var animDuration03 = 1.5;
var animDuration04 = 2;
var animDuration05 = 2.5;
var animDuration06 = 3;
var animDuration07 = 3.5;
var animDuration08 = 4;
var animDuration09 = 4.5;
var animDuration10 = 5;



//==================== OBJECTS ====================

var stage = sym.$("Stage");
var border = sym.$("border");
var logo = sym.$("logo");
var cta = sym.$("cta");

var bg = sym.$("bg");
var bg_lt = sym.$("bg_lt");
var bg_dk = sym.$("bg_dk");

var image = sym.$("image");
//var image01 = sym.$("image01");
//var image02 = sym.$("image02");
//var image03 = sym.$("image03");

var bottle = sym.$("bottle");
var bottle_lt = sym.$("bottle_lt");

var LOGO_RED_ea_w = sym.$("LOGO_RED_ea_w");
var LOGO_RED_red_r = sym.$("LOGO_RED_red_r");
var LOGO_RED_always_r = sym.$("LOGO_RED_always_r");

var logo_red_r = sym.$("logo_red_r");
var logo_red_ds_k = sym.$("logo_red_ds_k");
var logo_red_ds_w = sym.$("logo_red_ds_w");
var logo_red_ds_r = sym.$("logo_red_ds_r");

var copy01 = sym.$("copy01");
var copy02 = sym.$("copy02");

var container01 = sym.$("container01");
var container02 = sym.$("container02");



//==================== FUNCTIONS ====================

//-------------------- FUNCTION: consoleLog(message) --------------------

function consoleLog(message) {
//	alert(message);
	console.log(message);
}


//-------------------- FUNCTION: nextPos(thisObj, thisX, thisY, thisScale) --------------------

function nextPos(thisObj, thisX, thisY, thisScale, thisAlpha) {
    console.log("PING!!! FUNCTION: nextPos triggered!");
    console.log("thisObj: " + thisObj + ", thisX: " + thisX + ", thisY: " + thisY + ", thisScale: " + thisScale + ", thisAlpha: " + thisAlpha);

	TweenLite.set(thisObj, {x:thisX, y:thisY, scale:thisScale, alpha:thisAlpha});
}


//-------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------

function randRange(min, max) {
	thisIndex = min + Math.round(Math.random()*(max-min));
//	console.log("thisIndex = " + thisIndex);
	return thisIndex;
}


//-------------------- FUNCTION: randRange2(min:Number, max:Number) - real numbers --------------------

function randRange2(min, max) {
	thisIndex = min + Math.random()*(max-min);
//	console.log("thisIndex = " + thisIndex);
	return thisIndex;
}


//-------------------- FUNCTIONS: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------

var numParticle = 50;

var container01W = container01.width();
var container01H = container01.height();

var container02W = container02.width();
var container02H = container02.height();

console.log("container01W x container01H = " + container01W + " x " + container01H);
console.log("container02W x container02H = " + container02W + " x " + container02H);

TweenMax.set("img", {xPercent:"-50%", yPercent:"-50%"})


function addParticle(thisContainer){   
	for (i = 0; i < numParticle; i++){ 
		thisContainer.append('<div class="particle"><img src="images/flash01.jpg"></div>');
	}

	positionParticle(thisContainer);
}


function positionParticle(thisContainer){
	thisContainer.children().each(function(){
//		console.log("PING!!! found this " + this + " in " + thisContainer);

		var thisX = randRange(-thisContainer.width()*1, thisContainer.width()*1);
		var thisY = randRange(-thisContainer.height()*1, thisContainer.height()*1);
		var thisScale = randRange(25, 75) / 100;

//		console.log("thisX, thisY, thisScale = " + thisX + ", " + thisY + ", " + thisScale);

		TweenLite.set(this, {x:thisX, y:thisY, alpha:0, scale:thisScale});

		particleAnim(this);
	});
}


function particleAnim(thisParticle){ 
//	TweenMax.to(thisParticle, animDuration04, {x:randRange(-100, 100), rotationY:0, alpha:1, repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(.0625, 1.5)});
//	TweenMax.to(thisParticle, animDuration01, {x:0, alpha:1, repeat:1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(.0625, 1.5)});
	TweenMax.to(thisParticle, animDuration01, {alpha:1, repeat:1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(0, 1.5)});
};



////==================== OBJECTS - text shadows ====================
//
//TweenMax.to([copy01_ds, copy02_01_ds, copy02_02_ds, copy05_01_ds, copy05_02_ds, copy05_03_ds, copy05_04_ds, copy05_ds02.find("div")], 0, {
////	color:"none",
//	textShadow:"0px 0px 30px rgba(255, 255, 255, 1), 0px 0px 30px rgba(255, 255, 255, 1), 0px 0px 30px rgba(255, 255, 255, 1), 0px 0px 30px rgba(255, 255, 255, 1), 0px 0px 30px rgba(255, 255, 255, 1), 0px 0px 50px rgba(255, 255, 255, 1), 0px 0px 50px rgba(255, 255, 255, 1), 0px 0px 50px rgba(255, 255, 255, 1), 0px 0px 50px rgba(255, 255, 255, 1), 0px 0px 50px rgba(255, 255, 255, 1)"
//});



//==================== STAGGER PREP - Split the text into characters and wrap every character into span element, then convert the whitespaces to whitespace characters. ====================

copy01.html(copy01.html().replace('<p style="margin: 0px;">', "").replace("</p>", "").replace(/./g, "<div>$&</div>").replace(/\s/g, "&nbsp;"));
copy02.html(copy02.html().replace('<p style="margin: 0px;">', "").replace("</p>", "").replace(/./g, "<div>$&</div>").replace(/\s/g, "&nbsp;"));



////==================== EXTERNAL TIMELINE(S) ====================
//
//var tlArrows = new TimelineMax({repeat:25, repeatDelay:.25})
//	.staggerTo(cta_arrow.find("div"), staggerDuration, {alpha:1, ease:Power3.easeIn}, staggerDelay)
//	.staggerTo(cta_arrow.find("div"), staggerDuration, {alpha:.25, ease:Power3.easeOut}, staggerDelay)
//;



//==================== MAIN TIMELINE ====================

//var tl = new TimelineLite({delay:2.5, repeat:3, repeatDelay:2});
//var tl = new TimelineLite({delay:.25});
var tl = new TimelineLite();

tl


//==================== FRAME 01 ====================

	.call(consoleLog, ["FRAME 01 BEGIN!!!"], this, "frame01")

	.call(addParticle, [container01], this, "frame01")
	.to([logo_red_r], animDuration04, {scale:1, alpha:1, ease:Power3.easeOut}, "frame01")

//	.to([logo_red_r], animDuration02, {alpha:0, ease:Power3.easeOut, onComplete:nextPos, onCompleteParams:[logo_red_r, 0, 55, .625, 0]}, "frame01 +=0")

	.to([image], animDuration04, {scale:1, alpha:1, ease:Power3.easeOut}, "frame01 +=0")
//	.to([logo_red_r], animDuration04, {y:55, alpha:1, ease:Power3.easeOut}, "frame01 +=0")

	.to([logo_red_ds_w], animDuration04, {alpha:0, ease:Power3.easeOut}, "frame01 +=0")
	.to([logo_red_ds_k], animDuration04, {alpha:1, ease:Power3.easeOut}, "frame01 +=0")

	.call(consoleLog, ["FRAME 01 END!!!"], this, "frame01 +=0")


//==================== FRAME 02 ====================

	.call(consoleLog, ["FRAME 02 BEGIN!!!"], this, "frame02")

	.to([image, logo_red_r], animDuration02, {alpha:0, ease:Power3.easeOut, onComplete:nextPos, onCompleteParams:[logo_red_r, 0, 140, 1, 0]}, "frame02")

	.to([LOGO_RED_ea_w, LOGO_RED_always_r, LOGO_RED_red_r, logo_red_ds_k], 0, {alpha:0, ease:Power3.easeOut})
	.to([logo_red_r], 0, {alpha:1, ease:Power3.easeOut})

	.to([bg_dk], animDuration02, {scale:1, alpha:1, ease:Power3.easeOut}, "frame02")
	.to([bg, bg_lt], animDuration02, {alpha:1, ease:Power3.easeOut}, "frame02 +=0")
	.to([bg_lt], animDuration04, {alpha:0, ease:Power3.easeOut}, "frame02 +=.5")

	.to([bottle, bottle_lt], animDuration02, {alpha:1, ease:Power3.easeOut}, "frame02 +=.25")
	.to([bottle_lt], animDuration04, {alpha:0, ease:Power3.easeOut}, "frame02 +=.75")

//	.to([logo_red_ds_k], animDuration08, {alpha:1, ease:Power3.easeOut}, "frame02 +=.75")
	.to([LOGO_RED_ea_w], animDuration02, {alpha:1, ease:Power3.easeOut}, "frame02 +=.75")
	.to([LOGO_RED_always_r], animDuration02, {alpha:1, ease:Power3.easeOut}, "frame02 +=1")
	.to([LOGO_RED_red_r], animDuration02, {alpha:1, ease:Power3.easeOut}, "frame02 +=1.25")

	.staggerFromTo(copy01.find("div"), staggerDuration, {autoAlpha:0, rotationY:90}, {autoAlpha:1, rotationY:0}, staggerDelay, "frame02")
	.staggerFromTo(copy02.find("div"), staggerDuration, {autoAlpha:0, rotationY:90}, {autoAlpha:1, rotationY:0}, staggerDelay, "frame02 +=1.75")

	.to([cta], animDuration01, {alpha:1, ease:Power3.easeOut}, "frame02 +=3")

	.call(consoleLog, ["FRAME 02 END!!!"], this, "frame0202 +=3")
;





//tl.duration(1.5);

console.log("timing = " + tl.duration() + " secs");