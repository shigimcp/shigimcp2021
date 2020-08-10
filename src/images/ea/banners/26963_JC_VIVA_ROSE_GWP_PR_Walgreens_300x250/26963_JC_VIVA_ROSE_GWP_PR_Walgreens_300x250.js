//==================== ANIMATION ====================

var staggerDuration = 0.75;
var staggerDelay = 0.0625;

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



//==================== OBJECTS ====================

var bg = sym.$("bg");
var bg02 = sym.$("bg02");

var cta = sym.$("cta");

//var image = sym.$("image");

var bottle = sym.$("bottle");
//var bottle_ds = sym.$("bottle_ds");

var gwp = sym.$("gwp");
//var gwp_ds = sym.$("gwp_ds");

var logo = sym.$("logo");
var logo_ds = sym.$("logo_ds");

var logo_walgreens = sym.$("logo_walgreens");

var copy01 = sym.$("copy01");

var legal = sym.$("legal");



//==================== FUNCTIONS ====================

//-------------------- FUNCTION: consoleLog(message) --------------------

function consoleLog(message) {
//	alert(message);
	console.log(message);
}


//-------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------

function randRange(min, max) {
	var thisIndex = min + Math.round(Math.random()*(max-min));
//	console.log("thisIndex = " + thisIndex);
	return thisIndex;
}


//-------------------- FUNCTIONS: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------

var numParticle = 75;

var minFactor = 0.1875;
var maxFactor = 0.9375;


function addParticle(thisContainer){

	for (var i = 0; i < numParticle; i++){

		var f =  randRange(1,3);

//		console.log("f = " + f);
		
		switch(f) {
			case 1:
				thisContainer.append('<div class="particle"><img src="images/flower01.png"></div>');
				break;
			case 2:
				thisContainer.append('<div class="particle"><img src="images/flower02.png"></div>');
				break;
			case 3:
				thisContainer.append('<div class="particle"><img src="images/flower03.png"></div>');
				break;
			default:
				thisContainer.append('<div class="particle"><img src="images/flower01.png"></div>');
		}
	}

	positionParticle(thisContainer);
}


function positionParticle(thisContainer){

	thisContainer.children().each(function(){

		var thisX = randRange(-thisContainer.width()*minFactor, thisContainer.width()*maxFactor);
		var thisY = randRange(-thisContainer.height()*minFactor, thisContainer.height()*maxFactor);

//		console.log("thisX, thisY = " + thisX + ", " + thisY);

		TweenLite.set(this, {x:thisX, y:thisY});

//		particleAnim(this);
	});
}


//function particleAnim(thisParticle){ 
////	TweenMax.to(thisParticle, animDuration04, {x:randRange(-100, 100), rotationY:0, alpha:1, repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(.0625, 1.5)});
////	TweenMax.to(thisParticle, animDuration01, {x:0, alpha:1, repeat:1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(.0625, 1.5)});
//	TweenMax.to(thisParticle, animDuration01, {alpha:1, repeat:1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(0, 1.5)});
//};


addParticle(bg02);



//==================== SVG ====================

//-------------------- logo --------------------
$("#Stage_logo").append("<svg version='1.1' baseProfile='full' id='logo_svg' width='130' height='225' xml:space='preserve'><defs><pattern id='logo_vr_pattern' patternUnits='userSpaceOnUse' x='0' y='0' width='130' height='200'><image xlink:href='images/logo.jpg' width='130' height='200' /></pattern><mask id='logo_vr_mask'><image xlink:href='images/logo_ko.png' width='130' height='200' /></mask></defs><g mask='url(#logo_vr_mask)'><rect id='logo_vr_img' width='130' height='200' fill='url(#logo_vr_pattern)' /></g><image id='logo_jc_svg' xlink:href='images/LOGO_JC.svg' x='15' y='205' width='100' height='17' /></svg>");

//-------------------- logo_ds --------------------
$("#Stage_logo_ds").append("<svg version='1.1' baseProfile='full' id='logo_ds_svg' width='130' height='225' xml:space='preserve'><defs><filter id='Finvert' x='0%' y='0%' width='100%' height='100%'><feColorMatrix in='SourceGraphic' type='matrix' values='-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0'/></filter><filter id='logo_ds01' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'><feGaussianBlur in='SourceGraphic' stdDeviation='50' result='logo_blur01' /><feOffset dx='0' dy='0' result='logo_blurOffset01'/><feComponentTransfer><feFuncA type='linear' slope='3'/></feComponentTransfer></filter><filter id='logo_ds02' x='-75%' y='-75%' width='350%' height='350%' xmlns='http://www.w3.org/2000/svg'><feGaussianBlur in='SourceGraphic' stdDeviation='12' result='logo_blur02' /><feOffset dx='0' dy='0' result='logo_blurOffset02'/><feComponentTransfer><feFuncA type='linear' slope='5'/></feComponentTransfer></filter></defs><g filter='url(#logo_ds01)'><image id='logo_ds_svg' xlink:href='images/logo_ko.png' width='130' height='200' /></g><g filter='url(#logo_ds02)'><image id='logo_jc_ds_svg' xlink:href='images/LOGO_JC.svg' x='15' y='205' width='100' height='17' filter='url(#Finvert)' /></g></svg>");

//-------------------- bottle --------------------
$("#Stage_bottle").append("<svg version='1.1' baseProfile='full' id='bottle_svg' width='190' height='245' xml:space='preserve'><defs><pattern id='pattern_bottle' patternUnits='userSpaceOnUse' x='0' y='0' width='190' height='245'><image xlink:href='images/bottle.jpg' width='190' height='245' /></pattern><pattern id='pattern_bottle_ko' patternUnits='userSpaceOnUse' x='0' y='0' width='190' height='245'><image xlink:href='images/bottle_ko.png' width='190' height='245' /></pattern><mask id='mask_bottle'><rect class='class_maskBOTTLE' fill='url(#pattern_bottle_ko)' x='0' y='0' width='190' height='245' /></mask></defs><g mask='url(#mask_bottle)'><rect id='bottle_img' width='190' height='245' fill='url(#pattern_bottle)' /></g></svg>");

//-------------------- gwp --------------------
$("#Stage_gwp").append("<svg version='1.1' baseProfile='full' id='gwp_svg' width='160' height='165' xml:space='preserve'><defs><pattern id='pattern_gwp' patternUnits='userSpaceOnUse' x='0' y='0' width='160' height='165'><image xlink:href='images/gwp.jpg' width='160' height='165' /></pattern><pattern id='pattern_gwp_ko' patternUnits='userSpaceOnUse' x='0' y='0' width='160' height='165'><image xlink:href='images/gwp_ko.png' width='160' height='165' /></pattern><mask id='mask_gwp'><rect class='class_maskgwp' fill='url(#pattern_gwp_ko)' x='0' y='0' width='160' height='165' /></mask></defs><g mask='url(#mask_gwp)'><rect id='gwp_img' width='160' height='165' fill='url(#pattern_gwp)' /></g></svg>");

//-------------------- copy01 --------------------
$("#Stage_copy01").append("<svg version='1.1' baseProfile='full' id='copy01_svg' width='100' height='10' xml:space='preserve'><defs><filter id='Finvert' x='0%' y='0%' width='100%' height='100%'><feColorMatrix in='SourceGraphic' type='matrix' values='-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0'/></filter><filter id='copy01_ds01' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'><feGaussianBlur in='SourceGraphic' stdDeviation='7' result='copy01_blur01' /><feOffset dx='0' dy='0' result='copy01_blurOffset01'/><feComponentTransfer><feFuncA type='linear' slope='5'/></feComponentTransfer></filter></defs><g filter='url(#copy01_ds01)'><image id='copy01_ds_svg' xlink:href='images/copy01.png' x='0%' y='-37.5%' width='100' height='10' filter='url(#Finvert)' /></g><g><image id='copy01_svg' xlink:href='images/copy01.png' x='0' y='-37.5%' width='100' height='10' /></g></svg>");

//-------------------- legal --------------------
$("#Stage_legal").append("<svg version='1.1' baseProfile='full' id='legal_svg' width='250' height='10' xml:space='preserve'><defs><filter id='Finvert' x='0%' y='0%' width='100%' height='100%'><feColorMatrix in='SourceGraphic' type='matrix' values='-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0'/></filter><filter id='legal_ds01' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'><feGaussianBlur in='SourceGraphic' stdDeviation='7' result='legal_blur01' /><feOffset dx='0' dy='0' result='legal_blurOffset01'/><feComponentTransfer><feFuncA type='linear' slope='5'/></feComponentTransfer></filter></defs><g filter='url(#legal_ds01)'><image id='legal_ds_svg' xlink:href='images/legal.png' x='0%' y='-37.5%' width='250' height='10' filter='url(#Finvert)' /></g><g><image id='legal_svg' xlink:href='images/legal.png' x='0' y='-37.5%' width='250' height='10' /></g></svg>");



//=======================================================
//==================== MAIN TIMELINE ====================
//=======================================================

//var tl = new TimelineLite({delay:2.5, repeat:3, repeatDelay:2});
//var tl = new TimelineLite({delay:.25});
//var tl = new TimelineLite({delay:0.25});
// var tl = new TimelineMax({delay:0.25});
var tl = new TimelineMax({delay:0});

tl


//==================== FRAME 01 ====================

	.call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

	.staggerFromTo(bg02.find("div"), staggerDuration * 0.875, {scale:0.25, autoAlpha:0, rotation:-45, ease:Power3.easeOut}, {scale:1, autoAlpha:1, rotation:0, ease:Power3.easeOut}, staggerDelay * 0.25, "frame01 +=0")
	.fromTo([bg], animDuration02, {autoAlpha:0}, {autoAlpha:1, ease:Power3.easeIn}, "frame01 +=0")

//	.fromTo([logo, logo_ds], animDuration03, {scale:0.75, autoAlpha:0, ease:Back.easeInOut.config(2)}, {scale:1, autoAlpha:1, ease:Back.easeInOut.config(2)}, "frame01")
	.fromTo([logo, logo_ds], animDuration02, {scale:0.75, autoAlpha:0, ease:Power3.easeOut}, {scale:1, autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0.5")

	.call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=0.5")


//==================== FRAME 02 ====================

	.call(consoleLog, ["FRAME 02 BEGIN!!!"], "frame02")

	.to([logo, logo_ds], animDuration02, {x:-60, y:-5, scale:0.85714285714286, ease:Power3.easeOut}, "frame02 +=0.5")
	.fromTo([bottle], animDuration02, {x:-20, autoAlpha:0, ease:Power3.easeOut}, {x:0, autoAlpha:1, ease:Power3.easeOut}, "frame02 +=0.5")

	.call(consoleLog, ["FRAME 02 END!!!"], "frame02 +=0.5")


//==================== FRAME 03 ====================

	.call(consoleLog, ["FRAME 03 BEGIN!!!"], "frame03")

	.to([logo, logo_ds], animDuration02, {x:-70, y:-25, ease:Power3.easeOut}, "frame03 +=1")
	.to([bottle], animDuration02, {scale:0.75, autoAlpha:0, ease:Power3.easeOut}, "frame03 +=1")

	.fromTo([gwp], animDuration02, {x:-20, autoAlpha:0, ease:Power3.easeOut}, {x:0, autoAlpha:1, ease:Power3.easeOut}, "frame03 +=1")

	.fromTo([copy01], animDuration02, {y:-20, autoAlpha:0, ease:Power3.easeOut}, {y:0, autoAlpha:1, ease:Power3.easeOut}, "frame03 +=1.5")
	.fromTo([legal], animDuration02, {autoAlpha:0, ease:Power3.easeOut}, {autoAlpha:1, ease:Power3.easeOut}, "frame03 +=1.5")

	.fromTo([cta], animDuration02, {y:-20, autoAlpha:0, ease:Power3.easeOut}, {y:0, autoAlpha:1, ease:Power3.easeOut}, "frame03 +=2")

	.call(consoleLog, ["FRAME 03 END!!!"], "frame03 +=2")
;


sym.$("border").click(function(){
	// tl.play();
	tl.restart();
	// tl.invalidate().restart();
})





//tl.duration(1.5);
//tl.duration(15);

console.log("timing = " + tl.duration() + " secs");