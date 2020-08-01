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

var bg01 = sym.$("bg01");
var bg02 = sym.$("bg02");

var image = sym.$("image");

var bottle = sym.$("bottle");
var gwp = sym.$("gwp");

var cta = sym.$("cta");
var logo = sym.$("logo");

var logo_walgreens = sym.$("logo_walgreens");

var LOGO_NMTG = sym.$("LOGO_NMTG");
//var LOGO_NMTG_nicki = sym.$("LOGO_NMTG_nicki");
//var LOGO_NMTG_trini = sym.$("LOGO_NMTG_trini");
//var LOGO_NMTG_girl = sym.$("LOGO_NMTG_girl");
//var LOGO_NMTG_new = sym.$("LOGO_NMTG_new");
var LOGO_NMTG_sp = sym.$("LOGO_NMTG_sp");
var LOGO_spot = sym.$("LOGO_spot");

var LOGO_NMTG_ds = sym.$("LOGO_NMTG_ds");

var copy01 = sym.$("copy01");
var copy01_01 = sym.$("copy01_01");
var copy01_02 = sym.$("copy01_02");

var copy02 = sym.$("copy02");

var legal = sym.$("legal");



//==================== FUNCTIONS ====================

//-------------------- FUNCTION: consoleLog(message) --------------------

function consoleLog(message) {
//	alert(message);
	console.log(message);
}



//==================== SVG ====================

//-------------------- bottle --------------------
$("#Stage_bottle").append("<svg version='1.1' baseProfile='full' id='bottle_svg' width='90' height='190' xml:space='preserve'><defs><pattern id='pattern_bottle' patternUnits='userSpaceOnUse' x='0' y='0' width='90' height='190'><image xlink:href='images/bottle.jpg' width='90' height='190' /></pattern><pattern id='pattern_bottle_ko' patternUnits='userSpaceOnUse' x='0' y='0' width='90' height='190'><image xlink:href='images/bottle_ko.png' width='90' height='190' /></pattern><mask id='mask_bottle'><rect class='class_maskBOTTLE' fill='url(#pattern_bottle_ko)' x='0' y='0' width='90' height='190' /></mask></defs><g mask='url(#mask_bottle)'><rect id='bottle_img' width='90' height='190' fill='url(#pattern_bottle)' /></g></svg>");

//-------------------- gwp --------------------
$("#Stage_gwp").append("<svg version='1.1' baseProfile='full' id='gwp_svg' width='170' height='190' xml:space='preserve'><defs><pattern id='pattern_gwp' patternUnits='userSpaceOnUse' x='0' y='0' width='170' height='190'><image xlink:href='images/gwp.jpg' width='170' height='190' /></pattern><pattern id='pattern_gwp_ko' patternUnits='userSpaceOnUse' x='0' y='0' width='170' height='190'><image xlink:href='images/gwp_ko.png' width='170' height='190' /></pattern><mask id='mask_gwp'><rect class='class_maskgwp' fill='url(#pattern_gwp_ko)' x='0' y='0' width='170' height='190' /></mask></defs><g mask='url(#mask_gwp)'><rect id='gwp_img' width='170' height='190' fill='url(#pattern_gwp)' /></g></svg>");

//-------------------- bg02 --------------------
$("#Stage_bg02").append("<svg version='1.1' baseProfile='full' id='bg02_svg' width='300' height='250' xml:space='preserve'><defs><pattern id='pattern_bg02' patternUnits='userSpaceOnUse' x='0' y='0' width='300' height='250'><image xlink:href='images/bg02.jpg' width='300' height='250' /></pattern><lineargradient id='maskGradUP' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='200'><stop offset='0' style='stop-color:#000000'/><stop offset='0.375' style='stop-color:#FFFFFF'/><stop offset='0.625' style='stop-color:#FFFFFF'/><stop offset='1' style='stop-color:#000000'/></lineargradient><mask id='mask_bgUP'><rect class='class_maskUP' fill='url(#maskGradUP)' x='0' y='0' width='300' height='250' /></mask><lineargradient id='maskGradDN' gradientUnits='userSpaceOnUse' x1='0' y1='50' x2='0' y2='250'><stop offset='0' style='stop-color:#000000'/><stop offset='0.375' style='stop-color:#FFFFFF'/><stop offset='0.625' style='stop-color:#FFFFFF'/><stop offset='1' style='stop-color:#000000'/></lineargradient><mask id='mask_bgDN'><rect class='class_maskDN' fill='url(#maskGradDN)' x='0' y='0' width='300' height='250' /></mask></defs><g mask='url(#mask_bgUP)'><rect id='bg02_imgUP' width='300' height='250' fill='url(#pattern_bg02)' /></g><g mask='url(#mask_bgDN)'><rect id='bg02_imgDN' width='300' height='250' fill='url(#pattern_bg02)' /></g></svg>");

//-------------------- LOGO_NMTG_ds --------------------
$("#Stage_LOGO_NMTG_ds").append("<svg version='1.1' baseProfile='full' id='logo_ko_svg' width='225' height='79' xml:space='preserve' overflow='visible'><defs><pattern id='pattern_logo_ko1' patternUnits='userSpaceOnUse' x='0' y='0' width='225' height='79'><image xlink:href='images/LOGO_NMTG_ko_y.svg' width='225' height='79' result='LOGO_NMTG_ko' /></pattern><filter id='dropshadow01' x='-75%' y='-100%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'><feGaussianBlur in='SourceGraphic' stdDeviation='30' result='blur_logo01' /><feOffset dx='0' dy='0' result='blurOffset01'/><feComponentTransfer><feFuncA type='linear' slope='3' intercept='0'/></feComponentTransfer></filter><pattern id='pattern_logo_ko2' patternUnits='userSpaceOnUse' x='0' y='0' width='225' height='79'><image xlink:href='images/LOGO_NMTG_ko_w.svg' width='225' height='79' /></pattern><filter id='dropshadow02' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'><feGaussianBlur in='SourceGraphic' stdDeviation='25' result='blur_logo02'/><feOffset dx='0' dy='0' result='blurOffset02'/><feComponentTransfer><feFuncA type='linear' slope='4' intercept='0'/></feComponentTransfer></filter></defs><g id='LOGO_NMTG_ds1_svg' filter='url(#dropshadow01)'><rect id='logo_ko1' width='225' height='79' fill='url(#pattern_logo_ko1)' /></g><g id='LOGO_NMTG_ds2_svg' filter='url(#dropshadow02)'><rect id='logo_ko2' width='225' height='79' fill='url(#pattern_logo_ko2)' /></g></svg>");

////-------------------- BG01 / LOGO_NMTG_ds --------------------
//$("#Stage_bg01").append("<svg version='1.1' baseProfile='full' id='bg01_logo_ko_svg' width='300' height='350' xml:space='preserve' overflow='visible'><defs><pattern id='pattern_bg01' patternUnits='userSpaceOnUse' x='0' y='0' width='300' height='350'><image xlink:href='images/bg01.jpg' width='300' height='350' /></pattern><filter id='bg01_logo_ko_blend' x='0' y='0' width='300' height='350' filter units='userSpaceOnUse'><feImage x='0' y='0' width='300' height='350' xlink: href='images/bg01.jpg' result='bg01' /><feImage x='38' y='95' width='225' height='79' xlink: href='images/LOGO_NMTG_ko.svg' result='LOGO_NMTG_ko' /><feBlend mode='multiply' in='bg01' in2='SourceGraphic' /></ filter></ defs><g id='bg01_blend_svg' filter='url(#bg01_logo_ko_blend)'><rect id='bg01_blend' width='300' height='350' fill='url(#pattern_bg01)' /></g></svg>");



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

	.fromTo('#maskGradUP', animDuration03, {attr:{y1:250, y2:450}}, {attr:{y1:-200, y2:0}, ease:Power3.easeIn}, "frame01 +=0")
	.fromTo('#maskGradDN', animDuration03, {attr:{y1:-200, y2:0}}, {attr:{y1:250, y2:450}, ease:Power3.easeIn}, "frame01 +=0.25")

	.fromTo([LOGO_NMTG, LOGO_NMTG_ds], animDuration03, {scale:0.5, autoAlpha:0, ease:Back.easeInOut.config(2)}, {scale:1, autoAlpha:1, ease:Back.easeInOut.config(2)}, "frame01 +=0.5")
//	.fromTo([LOGO_NMTG], animDuration03, {scale:0.5, autoAlpha:0, ease:Back.easeInOut.config(2)}, {scale:1, autoAlpha:1, ease:Back.easeInOut.config(2)}, "frame01 +=0.5")
//	.fromTo([LOGO_NMTG_ds], animDuration03, {scale:0.5, autoAlpha:0, ease:Back.easeInOut.config(2)}, {scale:1, autoAlpha:0.75, ease:Back.easeInOut.config(2)}, "frame01 +=0.5")

	.call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=0.25")


//==================== FRAME 02 ====================

	.call(consoleLog, ["FRAME 02 BEGIN!!!"], "frame02")

	.to([LOGO_NMTG, LOGO_NMTG_ds], animDuration02, {y:-80, scale:0.77777777777778, ease:Power3.easeOut}, "frame02 +=1.5")
	.fromTo([bottle], animDuration02, {y:20, scale:1.5, autoAlpha:0, ease:Power3.easeOut}, {y:0, scale:1, autoAlpha:1, ease:Power3.easeOut}, "frame02 +=1.5")

	.call(consoleLog, ["FRAME 02 END!!!"], "frame02 +=1.5")


//==================== FRAME 03 ====================

	.call(consoleLog, ["FRAME 03 BEGIN!!!"], "frame03")

	.to([bottle], animDuration02, {y:-20, scale:0.75, autoAlpha:0, ease:Power3.easeOut}, "frame03 +=1")

	.to([LOGO_NMTG_ds], animDuration02, {autoAlpha:0, ease:Power3.easeOut}, "frame03 +=1")
	.fromTo([LOGO_spot], animDuration02, {autoAlpha:0, ease:Power3.easeOut}, {autoAlpha:1, ease:Power3.easeOut}, "frame03 +=1")
	.fromTo([gwp], animDuration02, {y:85, autoAlpha:0, ease:Power3.easeOut}, {y:0, autoAlpha:1, ease:Power3.easeOut}, "frame03 +=1")
	.fromTo([bg01], animDuration02, {y:0, ease:Power3.easeOut}, {y:-85, ease:Power3.easeOut}, "frame03 +=1")

	.fromTo([copy01], animDuration02, {x:-20, autoAlpha:0, ease:Power3.easeOut}, {x:0, autoAlpha:1, ease:Power3.easeOut}, "frame03 +=1.25")
	.fromTo([legal], animDuration02, {x:-20, autoAlpha:0, ease:Power3.easeOut}, {x:0, autoAlpha:0.75, ease:Power3.easeOut}, "frame03 +=1.25")

	.fromTo([cta], animDuration02, {y:20, autoAlpha:0, ease:Power3.easeOut}, {y:0, autoAlpha:1, ease:Power3.easeOut}, "frame03 +=2")

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