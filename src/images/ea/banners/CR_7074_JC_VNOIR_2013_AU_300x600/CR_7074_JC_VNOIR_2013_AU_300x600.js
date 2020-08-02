//==================== IMPORT CLASSES ====================
import com.greensock.TweenLite;
import com.greensock.easing.Cubic;
import com.greensock.plugins.*;
import com.greensock.OverwriteManager;

TweenPlugin.activate([TintPlugin]);

OverwriteManager.init(3);
OverwriteManager.mode = OverwriteManager.CONCURRENT;



//==================== FLOWERS ====================
var flowerDuration: Number = 4;
var flowerIndex: Number;

function flowerIn() {
    //	trace("PING!!! flowerIn()");

    var n: Number = 0;

    for (var i in mc_empty) {
        //		trace("i = " + i + "n = " + n);
        //		trace("PING!!! i in mc_empty " + mc_empty.getInstanceAtDepth(n));
        //		trace(mc_empty.getChildByName(i));

        TweenLite.to(mc_empty.getInstanceAtDepth(n), 1, { _xscale: 100, _yscale: 100, _alpha: 100, delay: .1 + (.0375 * n), ease: Cubic.easeOut });

        n = n + 1;
    }
}

//setInterval(flowerIn, 225);


for (var i: Number = 0; i < 35; i++) {

    //-------------------- PLACE FLOWERS --------------------

    randRange(1, 5);
    //	trace("flowerIndex = " + flowerIndex);

    var thisFlower: String;

    switch (flowerIndex) {
        case 1:
            thisFlower = "thisFlower" + i.toString();
            mc_empty.attachMovie("mc_flower01", thisFlower, mc_empty.getNextHighestDepth());
            //			trace("flowerIndex = " + flowerIndex);
            //			trace("thisFlower = " + thisFlower);
            break;
        case 2:
            thisFlower = "thisFlower" + i.toString();
            mc_empty.attachMovie("mc_flower02", thisFlower, mc_empty.getNextHighestDepth());
            //			trace("flowerIndex = " + flowerIndex);
            //			trace("thisFlower = " + thisFlower);
            break;
        case 3:
            thisFlower = "thisFlower" + i.toString();
            mc_empty.attachMovie("mc_flower03", thisFlower, mc_empty.getNextHighestDepth());
            //			trace("flowerIndex = " + flowerIndex);
            //			trace("thisFlower = " + thisFlower);
            break;
        case 4:
            thisFlower = "thisFlower" + i.toString();
            mc_empty.attachMovie("mc_flower04", thisFlower, mc_empty.getNextHighestDepth());
            //			trace("flowerIndex = " + flowerIndex);
            //			trace("thisFlower = " + thisFlower);
            break;
        case 5:
            thisFlower = "thisFlower" + i.toString();
            mc_empty.attachMovie("mc_flower05", thisFlower, mc_empty.getNextHighestDepth());
            //			trace("flowerIndex = " + flowerIndex);
            //			trace("thisFlower = " + thisFlower);
            break;
    }


    //-------------------- POSITION FLOWERS --------------------

    //	trace("i = " + i);
    //	trace(mc_empty.getInstanceAtDepth(i));
    //	trace(randRange(1,3));



    var thisMultiplier: Number = randRange(-1, 1);

    var thisDisplacementX: Number = randRange(-150, 150);
    var thisDisplacementY: Number = randRange(-300, 300);

    //	trace("Stage.width = " + Stage.width + "     Stage.height = " + Stage.height);
    //	trace("thisDisplacementX = " + thisDisplacementX + "     thisDisplacementY = " + thisDisplacementY);

    mc_empty.getInstanceAtDepth(i)._x = thisDisplacementX;
    mc_empty.getInstanceAtDepth(i)._y = thisDisplacementY;

    //	mc_empty.getInstanceAtDepth(i)._x = thisDisplacementX + mc_empty.getInstanceAtDepth(i-1)._width;
    //	mc_empty.getInstanceAtDepth(i)._y = thisDisplacementY + mc_empty.getInstanceAtDepth(i-1)._height;



    //	if(i % 2 == 0) {
    ////		trace("i = " + i + " it is even" + "     randRange(-1, 1) = " + randRange(-1, 1));
    //
    ////		mc_empty.getInstanceAtDepth(i)._x = mc_empty.getInstanceAtDepth(i-1)._x + ((mc_empty.getInstanceAtDepth(i-1)._width) * thisMultiplier);
    ////		mc_empty.getInstanceAtDepth(i)._y = mc_empty.getInstanceAtDepth(i-1)._y + ((mc_empty.getInstanceAtDepth(i-1)._height) * thisMultiplier);
    //
    ////		mc_empty.getInstanceAtDepth(i)._x = mc_empty.getInstanceAtDepth(i-1)._x + mc_empty.getInstanceAtDepth(i-1)._width;
    ////		mc_empty.getInstanceAtDepth(i)._y = mc_empty.getInstanceAtDepth(i-1)._y + mc_empty.getInstanceAtDepth(i-1)._height;
    //
    ////		mc_empty.getInstanceAtDepth(i)._x = randRange(-150, 150) + (mc_empty.getInstanceAtDepth(i-1)._width * thisMultiplier);
    ////		mc_empty.getInstanceAtDepth(i)._y = randRange(-100, 100) + (mc_empty.getInstanceAtDepth(i-1)._height * thisMultiplier);
    //
    ////		mc_empty.getInstanceAtDepth(i)._x = thisDisplacementX + (mc_empty.getInstanceAtDepth(i-1)._width);
    ////		mc_empty.getInstanceAtDepth(i)._y = thisDisplacementY + (mc_empty.getInstanceAtDepth(i-1)._height);
    //
    //		mc_empty.getInstanceAtDepth(i)._x = mc_empty.getInstanceAtDepth(i-1)._x + ((mc_empty.getInstanceAtDepth(i-1)._width) + thisDisplacementX);
    //		mc_empty.getInstanceAtDepth(i)._y = mc_empty.getInstanceAtDepth(i-1)._y + ((mc_empty.getInstanceAtDepth(i-1)._height) + thisDisplacementY);
    //
    //	} else {
    ////		trace("i = " + i + " it is odd");
    //
    ////		mc_empty.getInstanceAtDepth(i)._x = mc_empty.getInstanceAtDepth(i-1)._x - ((mc_empty.getInstanceAtDepth(i-1)._width) * thisMultiplier);
    ////		mc_empty.getInstanceAtDepth(i)._y = mc_empty.getInstanceAtDepth(i-1)._y - ((mc_empty.getInstanceAtDepth(i-1)._height) * thisMultiplier);
    //
    ////		mc_empty.getInstanceAtDepth(i)._x = mc_empty.getInstanceAtDepth(i-1)._x - mc_empty.getInstanceAtDepth(i-1)._width;
    ////		mc_empty.getInstanceAtDepth(i)._y = mc_empty.getInstanceAtDepth(i-1)._y - mc_empty.getInstanceAtDepth(i-1)._height;
    //
    ////		mc_empty.getInstanceAtDepth(i)._x = randRange(-150, 150) - (mc_empty.getInstanceAtDepth(i-1)._width * thisMultiplier);
    ////		mc_empty.getInstanceAtDepth(i)._y = randRange(-100, 100) - (mc_empty.getInstanceAtDepth(i-1)._height * thisMultiplier);
    //
    ////		mc_empty.getInstanceAtDepth(i)._x = thisDisplacementX - (mc_empty.getInstanceAtDepth(i-1)._width);
    ////		mc_empty.getInstanceAtDepth(i)._y = thisDisplacementY - (mc_empty.getInstanceAtDepth(i-1)._height);
    //
    //		mc_empty.getInstanceAtDepth(i)._x = mc_empty.getInstanceAtDepth(i-1)._x - ((mc_empty.getInstanceAtDepth(i-1)._width) - thisDisplacementX);
    //		mc_empty.getInstanceAtDepth(i)._y = mc_empty.getInstanceAtDepth(i-1)._y - ((mc_empty.getInstanceAtDepth(i-1)._height) - thisDisplacementY);
    //	}



    //	if(thisMultiplier == 0) {
    //		thisMultiplier = randRange(-1, 1);
    ////		trace("PING! thisMultiplier = " + thisMultiplier);
    //	} else {
    //		trace("PING! thisMultiplier = " + thisMultiplier);
    ////		mc_empty.getInstanceAtDepth(i)._x = mc_empty.getInstanceAtDepth(i-1)._x + (mc_empty.getInstanceAtDepth(i-1)._width * thisMultiplier);
    ////		mc_empty.getInstanceAtDepth(i)._y = mc_empty.getInstanceAtDepth(i-1)._y + (mc_empty.getInstanceAtDepth(i-1)._height * thisMultiplier);
    //		mc_empty.getInstanceAtDepth(i)._x = randRange(-150, 150) + (mc_empty.getInstanceAtDepth(i-1)._width * thisMultiplier);
    //		mc_empty.getInstanceAtDepth(i)._y = randRange(-100, 100) + (mc_empty.getInstanceAtDepth(i-1)._height * thisMultiplier);
    //	}



    mc_empty.getInstanceAtDepth(i)._xscale = mc_empty.getInstanceAtDepth(i)._yscale = randRange2(80, 100);
    mc_empty.getInstanceAtDepth(i)._rotation = randRange(-10, 10);
    mc_empty.getInstanceAtDepth(i)._alpha = 0;

    //	trace(mc_empty.getInstanceAtDepth(i)._xscale);
    //	trace("x = " + mc_empty.getInstanceAtDepth(i)._x);
    //	trace("y = " + mc_empty.getInstanceAtDepth(i)._y);
    //	trace("");
}



//==================== RANDOM NUMBER in range ====================

function randRange(min: Number, max: Number) {
    flowerIndex = min + Math.round(Math.random() * (max - min));
    //	trace("flowerIndex = " + flowerIndex);
    return flowerIndex;
}

function randRange2(min: Number, max: Number) {
    flowerIndex = min + Math.random() * (max - min);
    //	trace("flowerIndex = " + flowerIndex);
    return flowerIndex;
}



//==================== ANIMATION ====================
//var animDuration01:Number = 1;
//var animDuration02:Number = 1.5;
//var animDuration03:Number = 2;

var animDuration01: Number = .5;
var animDuration02: Number = 1;
var animDuration03: Number = 1.5;
var animDuration04: Number = 2;
var animDuration05: Number = 2.5;
var animDuration06: Number = 3;
var animDuration07: Number = 3.5;

var animDelayFR1: Number = .5;
var animDelayFR2: Number = animDelayFR1 + animDuration02 + .75;
//var animDelayFR2:Number = 0;
var animDelayFR3: Number = animDelayFR2 + animDuration02 + .75;
var animDelayFR4: Number = animDelayFR3 + animDuration02 + .75;
var animDelayFR5: Number = animDelayFR4 + animDuration02 + .75;

//-------------------- GRADIENT MASK --------------------
mc_mask.cacheAsBitmap = true;
mc_model.cacheAsBitmap = true;
mc_model.setMask(mc_mask);


//==================== FRAME 01 ====================

flowerIn();
TweenLite.to(mc_bg, animDuration04, { _alpha: 100, _xscale: 100, _yscale: 100, delay: animDelayFR1 + .5, ease: Cubic.easeOut });
//TweenLite.to(mc_bg, animDuration04, {_alpha:100, _xscale:100, _yscale:100, delay:animDelayFR1 + .5, ease:Cubic.easeOut, onComplete:loadSWF});

TweenLite.to(mc_intro, animDuration03, { _alpha: 100, delay: animDelayFR1, ease: Cubic.easeOut });


//==================== FRAME 02 ====================

TweenLite.to(mc_intro, animDuration03, { _alpha: 0, delay: animDelayFR2, ease: Cubic.easeOut });
TweenLite.to(mc_logo, animDuration03, { _alpha: 100, delay: animDelayFR2, ease: Cubic.easeOut });


//==================== FRAME 03 ====================

TweenLite.to(mc_logo, animDuration03, { _alpha: 0, delay: animDelayFR3, ease: Cubic.easeOut });
TweenLite.to(mc_copy01, animDuration03, { _alpha: 100, delay: animDelayFR3, ease: Cubic.easeOut });


//==================== FRAME 04 ====================

TweenLite.to(mc_intro, 0, { _x: 76.25, _y: 366.25, _xscale: 51.25, _yscale: 51.25, tint: 0x000000, delay: animDelayFR4 - .5, ease: Cubic.easeOut });

TweenLite.to(mc_mask, animDuration03, { _y: 0, delay: animDelayFR4, ease: Cubic.easeOut });
TweenLite.to(mc_model, animDuration03, { _alpha: 100, delay: animDelayFR4, ease: Cubic.easeOut });

TweenLite.to(mc_intro, animDuration04, { _alpha: 100, delay: animDelayFR4, ease: Cubic.easeOut });
TweenLite.to(mc_logoK, animDuration04, { _alpha: 100, delay: animDelayFR4, ease: Cubic.easeOut });
TweenLite.to(mc_juicy, animDuration04, { _alpha: 100, delay: animDelayFR4, ease: Cubic.easeOut });
TweenLite.to(btn_shop, animDuration04, { _alpha: 100, delay: animDelayFR4, ease: Cubic.easeOut });




//setTimeout(loadSWF, animDelayFR2 * 1000)
//
//function loadSWF():Void {
//	loadMovie("CR_7074_JC_VNOIR_2013_AU_300x600b.swf", mc_loadswf);
////	loadMovie("img/CR_7074_JC_VNOIR_2013_AU_300x600b.swf", mc_loadswf);
//}


stop();