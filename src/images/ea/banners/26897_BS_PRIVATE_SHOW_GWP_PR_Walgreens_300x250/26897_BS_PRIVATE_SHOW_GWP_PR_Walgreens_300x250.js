//#region ==================== ANIMATION ====================

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

//#endregion ==================== ANIMATION ====================



//#region ==================== FUNCTIONS ====================

//-------------------- FUNCTION: consoleLog(message) --------------------

function consoleLog(message) {
    //	alert(message);
    console.log(message);
}

//#endregion ==================== FUNCTIONS ====================



//#region ==================== BLUR ====================

// register the plugin
// gsap.registerPlugin(PixiPlugin);

// give the plugin a reference to the PIXI object
// PixiPlugin.registerPIXI(PIXI);

// blur on both the x and y axis to a blur amount of 15
// gsap.to(this.mc_LOGO_BSPS_ds, { pixi: { blurX: 15, blurY: 15 }, duration: 0 });
// gsap.to(this.mc_LOGO_BSPS_ds_pixi, { pixi: { blurX: 15, blurY: 15 } });
// Tweenlite.to(this.mc_LOGO_BSPS_ds_pixi, { pixi: { blurX: 15, blurY: 15 } });


//#endregion ==================== BLUR ====================



// TweenMax.set([this.mc_gwp, this.mc_bg02, this.mc_copy01, this.mc_copy01_01, this.mc_copy01_02, this.mc_legal, this.mc_cta], { alpha: 0 })

//var tl = new TimelineLite({delay:2.5, repeat:3, repeatDelay:2, paused:true});
//var tl = new TimelineLite({delay:.25});
// var tl = new TimelineLite({delay:0.25});
// var tl = new TimelineMax({delay:0.25});
// var tl = new TimelineMax({paused:true});
var tl = new TimelineMax({ delay: 0 });

tl

    //#region ==================== FRAME 01 ====================

    .call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

    // .to([this.mc_image], { x: -200, scale: 1.05882352941176, alpha: 1, ease: Power0.easeOut, duration: 0 }, "frame01")
    // .to([this.mc_LOGO_BSPS_ds_filter], { pixi: { blurX: 15, blurY: 15 }, duration: 0 }, "frame01")
    // .to([this.mc_LOGO_BSPS_ds_filter], { pixi: { blur: 15 }, duration: 0 }, "frame01")

    .fromTo([this.mc_bg01], { alpha: 0 }, { alpha: 1, ease: Power0.easeIn, repeat: 1, yoyo: true, duration: animDuration02 }, "frame01 +=0")

    .fromTo([this.mc_LOGO_BSPS.mc_LOGO_BSPS_britney, this.mc_LOGO_BSPS.mc_LOGO_BSPS_spears], { scale: 0.75, ease: "power3.out" }, { scale: 1, ease: "power3.out", duration: animDuration05 }, "frame01 +=0")
    .fromTo([this.mc_LOGO_BSPS.mc_LOGO_BSPS_britney], { alpha: 0, ease: "power3.out" }, { alpha: 1, ease: "power3.out", duration: animDuration04 }, "frame01 +=0")
    .fromTo([this.mc_LOGO_BSPS.mc_LOGO_BSPS_spears], { alpha: 0, ease: "power3.out" }, { alpha: 1, ease: "power3.out", duration: animDuration04 }, "frame01 +=0.25")

    .fromTo([this.mc_LOGO_BSPS.mc_LOGO_BSPS_private, this.mc_LOGO_BSPS.mc_LOGO_BSPS_show], { scale: 0.75, alpha: 0, ease: "back.inOut(2)" }, { scale: 1, alpha: 1, ease: "back.inOut(2)", duration: animDuration05 }, "frame01 +=0")

    .fromTo([this.mc_LOGO_BSPS.mc_LOGO_BSPS_new], { alpha: 0, ease: "power3.out" }, { alpha: 1, ease: "power3.out", duration: animDuration06 }, "frame01 +=2")

    .call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=2")

    //#endregion ==================== FRAME 01 ====================



    //#region ==================== FRAME 02 ====================

    .call(consoleLog, ["FRAME 02 BEGIN!!!"], "frame02")

    .to([this.mc_LOGO_BSPS, this.mc_LOGO_BSPS_ds], { y: 20, scale: 1.8, ease: "power3.out", duration: animDuration02 }, "frame02 -=1.5")
    .fromTo([this.mc_bottle], { y: 100, alpha: 0, ease: "power3.out" }, { y: 80, alpha: 1, ease: "power3.out", duration: animDuration02 }, "frame02 -=1.5")

    .call(consoleLog, ["FRAME 02 END!!!"], "frame02 -=1.5")

    //#endregion ==================== FRAME 02 ====================



    //#region ==================== FRAME 03 ====================

    .call(consoleLog, ["FRAME 03 BEGIN!!!"], "frame03")

    .to([this.mc_LOGO_BSPS, this.mc_LOGO_BSPS_ds], { x: 210, y: 35, scale: 1.6, ease: "power3.out", duration: animDuration02 }, "frame03 +=1")
    .to([this.mc_bottle], { x: 130, y: 90, scale: 0.95, ease: "power3.out", duration: animDuration02 }, "frame03 +=1")

    // .to([this.mc_image], { x: 0, scale: 1, ease: "power3.out", duration: animDuration02 }, "frame03 +=1")
    // .fromTo([this.mc_image], { x: -175, alpha: 0, ease: "power3.out" }, { x: 0, alpha: 1, ease: "power3.out", duration: animDuration02 }, "frame03 +=1")
    .fromTo([this.mc_image], { x: -200, scale: 1.05882352941176, ease: "power3.out" }, { x: 0, scale: 1, ease: "power3.out", duration: animDuration02 }, "frame03 +=1")

    .call(consoleLog, ["FRAME 03 END!!!"], "frame03 +=1")

    //#endregion ==================== FRAME 03 ====================



    // //==================== FRAME 03 ====================

    // 	.call(consoleLog, ["FRAME 04 BEGIN!!!"], "frame04")

    // 	.to([this.mc_LOGO_BSPS, this.mc_LOGO_BSPS_ds], {y:-75, ease:"power3.out", duration: animDuration02}, "frame04 +=1")

    // 	.to([this.mc_image], {y:-10, ease:"power3.out", duration: animDuration02}, "frame04 +=1")
    // 	.fromTo([this.mc_bg02], {y:250, ease:"power3.out"}, {y:0, ease:"power3.out", duration: 0.0125 }, "frame04 +=1")
    // 	.fromTo('#maskUP', {attr:{y1:250, y2:250}}, {attr:{y1:50, y2:210}, ease:"power3.out", duration: animDuration02 }, "frame04 +=1")

    // //	.to([this.mc_bottle], {x:122, y:-34, scale:0.35, ease:"power3.out", duration: animDuration02}, "frame04 +=1")
    // 	.to([this.mc_bottle], {y:-20, alpha:0, ease:"power3.out", duration: animDuration02}, "frame04 +=1")
    // 	.fromTo([this.mc_gwp], {x:-20, alpha:0, ease:"power3.out"}, {x:0, alpha:1, ease:"power3.out", duration: animDuration02}, "frame04 +=1")

    // 	.staggerFromTo(this.mc_copy01.find("div"), {alpha:0, ease:"power3.out"}, {alpha:1, ease:"power3.out", duration: staggerDuration * 1.25}, staggerDelay * 3, "frame04 +=1")

    // //	.fromTo([copy02], {y:-20, alpha:0, ease:"power3.out"}, {y:0, alpha:1, ease:"power3.out", duration: animDuration02}, "frame04 +=1.5")
    // 	.fromTo([this.mc_legal], {alpha:0, ease:"power3.out"}, {alpha:0.5, ease:"power3.out", duration: animDuration02}, "frame04 +=1.5")

    // 	.fromTo([this.mc_cta], {y:-20, alpha:0, ease:"power3.out"}, {y:0, alpha:1, ease:"power3.out", duration: animDuration02}, "frame04 +=2")

    // 	.call(consoleLog, ["FRAME 04 END!!!"], "frame04 +=2")
    ;



// sym.$("border").click(function () {
//     // tl.play();
//     tl.restart();
//     // tl.invalidate().restart();
// })



//stop();

//tl.duration(1.5);
//tl.duration(15);

// console.log("timing = " + tl.duration() + " secs");