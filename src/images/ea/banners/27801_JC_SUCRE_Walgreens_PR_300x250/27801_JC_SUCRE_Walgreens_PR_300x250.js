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
var bottle = sym.$("bottle");
var cta = sym.$("cta");

var logo = sym.$("logo");
var logo_jc = sym.$("logo_jc");
var logo_walgreens = sym.$("logo_walgreens");

var hashtag = sym.$("hashtag");

var lockup = sym.$("lockup");
var lockup_ds = sym.$("lockup_ds");

var stripeW = sym.$("stripeW");
var stripeW01 = sym.$("stripeW01");
var stripeW02 = sym.$("stripeW02");
var stripeW03 = sym.$("stripeW03");
var stripeW04 = sym.$("stripeW04");
var stripeW05 = sym.$("stripeW05");

var stripeP = sym.$("stripeP");
var stripeP01 = sym.$("stripeP01");
var stripeP02 = sym.$("stripeP02");
var stripeP03 = sym.$("stripeP03");
var stripeP04 = sym.$("stripeP04");
var stripeP05 = sym.$("stripeP05");



//==================== FUNCTIONS ====================

//-------------------- FUNCTION: consoleLog(message) --------------------

function consoleLog(message) {
//	alert(message);
	console.log(message);
}



//==================== SVG ====================

//-------------------- bottle --------------------
$("#Stage_bottle").append("<svg version='1.1' baseProfile='full' id='bottle_svg' width='110' height='180' xml:space='preserve'><defs><mask id='mask_bottle'><image xlink:href='images/bottle_ko.png' width='110' height='180' /></mask></defs><g mask='url(#mask_bottle)'><image id='bottle_svg' xlink:href='images/bottle.jpg' width='110' height='180' /></g></svg>");

//-------------------- lockup --------------------
$("#Stage_lockup").append("<svg version='1.1' baseProfile='full' id='logo_svg' width='100' height='140' xml:space='preserve'><defs><mask id='logo_mask'><image xlink:href='images/logo_ko.png' x='20' y='25' width='100' height='140' /></mask><mask id='cta_mask'><image xlink:href='images/cta_ko.png' x='20' y='200' width='100' height='35' /></mask></defs><g mask='url(#logo_mask)'><image id='logo_svg' xlink:href='images/logo.jpg' x='20' y='25' width='100' height='140' /></g><image id='logo_jc_svg' xlink:href='images/LOGO_JC.svg' x='33' y='170' width='75' height='13' /><image id='hashtag_svg' xlink:href='images/hashtag.svg' x='26' y='188' width='88' height='8' /><g mask='url(#cta_mask)'><image id='cta_svg' xlink:href='images/cta.jpg' x='20' y='200' width='100' height='35' /></g></svg>");

//-------------------- lockup_ds --------------------
$("#Stage_lockup_ds").append("<svg version='1.1' baseProfile='full' id='lockup_ds_svg' width='140' height='250' xml:space='preserve'><defs><filter id='lockup_ds' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'><feGaussianBlur in='SourceGraphic' stdDeviation='25' result='lockup_blur' /><feOffset dx='0' dy='0' result='lockup_blurOffset'/><feComponentTransfer><feFuncA type='linear' slope='3'/></feComponentTransfer></filter></defs><g filter='url(#lockup_ds)'><image id='logo_ds_svg' xlink:href='images/logo_ko.png' x='20' y='25' width='100' height='140' /></g></svg>");



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

	.fromTo([bottle], animDuration02, {scale:1.5, autoAlpha:0}, {scale:1, autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0")
	.fromTo([bg], animDuration02, {scale:0.75, autoAlpha:0}, {scale:1, autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0")


//==================== FRAME 02 ====================

	.call(consoleLog, ["FRAME 02 BEGIN!!!"], "frame02")

	.to([bg, bottle], animDuration04, {x:-70, ease:Power3.easeOut}, "frame02 +=0.5")

	.staggerFromTo(stripeW.find("div"), animDuration02, {cycle: {y: [-250, 250]}, ease:Power3.easeOut}, {y:0, ease:Power3.easeOut}, staggerDelay * 3, "frame02 +=0.5")
	.staggerFromTo(stripeP.find("div"), animDuration02, {cycle: {y: [250, -250]}, ease:Power3.easeOut}, {y:0, ease:Power3.easeOut}, staggerDelay * 3, "frame02 +=0.5")

	.fromTo([lockup, lockup_ds], animDuration06, {autoAlpha:0, ease:Power3.easeOut}, {autoAlpha:1, ease:Power3.easeOut}, "frame02 +=1.25")

	.call(consoleLog, ["FRAME 02 END!!!"], "frame02 +=1.25")
;


sym.$("border").click(function(){
	// tl.play();
	tl.restart();
	// tl.invalidate().restart();
})





//tl.duration(1.5);
//tl.duration(15);

console.log("timing = " + tl.duration() + " secs");