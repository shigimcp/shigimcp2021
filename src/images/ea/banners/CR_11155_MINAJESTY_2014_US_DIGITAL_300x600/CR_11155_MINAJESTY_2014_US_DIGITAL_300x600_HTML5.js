(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,75);


(lib.IMAGE = function() {
	this.initialize(img.IMAGE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mc_tag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,3.6).lineTo(-3.3,-3.6).lineTo(3.2,-3.6).lineTo(3.2,-2.9).lineTo(-2.4,-2.9).lineTo(-2.4,-0.5).lineTo(2.3,-0.5).lineTo(2.3,0.2).lineTo(-2.4,0.2).lineTo(-2.4,2.8).lineTo(3.3,2.8).lineTo(3.3,3.6).closePath();
	this.shape.setTransform(224.25,5.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3,2.7).curveTo(-4,1.7,-4,0).curveTo(-4,-1.8,-2.9,-2.8).curveTo(-1.8,-3.8,0.1,-3.8).curveTo(1.4,-3.8,2.4,-3.3).curveTo(3.5,-2.8,3.9,-1.7).lineTo(3.2,-1.4).curveTo(2.4,-3.1,0.1,-3.1).curveTo(-1.4,-3.1,-2.3,-2.3).curveTo(-3.1,-1.4,-3.1,0.1).curveTo(-3.1,1.4,-2.3,2.2).curveTo(-1.4,3,0.2,3).curveTo(2.3,3,3.3,1.3).lineTo(4,1.7).curveTo(2.9,3.8,0.1,3.8).curveTo(-1.9,3.8,-3,2.7).closePath();
	this.shape_1.setTransform(212.275,5.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.9,3.6).lineTo(-2.9,-2.9).lineTo(-2.9,3.6).lineTo(-3.8,3.6).lineTo(-3.8,-3.6).lineTo(-2.5,-3.6).lineTo(2.9,2.3).lineTo(2.9,-3.6).lineTo(3.8,-3.6).lineTo(3.8,3.6).closePath();
	this.shape_2.setTransform(199.775,5.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.3,3.6).lineTo(2.4,1.7).lineTo(-2.3,1.7).lineTo(-3.3,3.6).lineTo(-4.3,3.6).lineTo(-0.5,-3.6).lineTo(0.6,-3.6).lineTo(4.3,3.6).closePath().moveTo(2,1).lineTo(0,-3).lineTo(-1.9,1).lineTo(2,1).closePath();
	this.shape_3.setTransform(187.275,5.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.5,3.6).lineTo(0.2,0.4).lineTo(-2.7,0.4).lineTo(-2.7,3.6).lineTo(-3.6,3.6).lineTo(-3.6,-3.6).lineTo(0.6,-3.6).curveTo(3.5,-3.6,3.5,-1.6).curveTo(3.5,-0.6,2.7,-0.1).curveTo(2.1,0.3,1.2,0.4).lineTo(3.6,3.6).closePath().moveTo(-2.7,-0.4).lineTo(0.4,-0.4).curveTo(1.5,-0.4,2,-0.6).curveTo(2.6,-0.9,2.6,-1.6).curveTo(2.6,-2.4,2,-2.6).curveTo(1.5,-2.9,0.4,-2.9).lineTo(-2.7,-2.9).closePath();
	this.shape_4.setTransform(175.175,5.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.9,2.7).curveTo(-3.9,1.7,-3.9,0).curveTo(-3.9,-1.8,-2.8,-2.8).curveTo(-1.7,-3.8,0.2,-3.8).curveTo(1.5,-3.8,2.5,-3.3).curveTo(3.4,-2.8,3.8,-1.8).lineTo(3.1,-1.4).curveTo(2.7,-2.3,1.8,-2.7).curveTo(1.1,-3.1,0.2,-3.1).curveTo(-1.3,-3.1,-2.2,-2.3).curveTo(-3,-1.4,-3,0.1).curveTo(-3,1.4,-2.2,2.2).curveTo(-1.3,3,0.3,3).curveTo(1.4,3,2.2,2.5).curveTo(3.1,1.9,3.1,0.9).lineTo(0.2,0.9).lineTo(0.2,0.1).lineTo(3.9,0.1).lineTo(3.9,3.7).lineTo(3.2,3.7).lineTo(3.2,2.6).curveTo(2.1,3.8,0.2,3.8).curveTo(-1.8,3.8,-2.9,2.7).closePath();
	this.shape_5.setTransform(162.825,5.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.3,3.6).lineTo(2.4,1.7).lineTo(-2.3,1.7).lineTo(-3.3,3.6).lineTo(-4.3,3.6).lineTo(-0.5,-3.6).lineTo(0.6,-3.6).lineTo(4.3,3.6).closePath().moveTo(2,1).lineTo(0,-3).lineTo(-1.9,1).lineTo(2,1).closePath();
	this.shape_6.setTransform(150.675,5.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.5,3.6).lineTo(0.2,0.4).lineTo(-2.7,0.4).lineTo(-2.7,3.6).lineTo(-3.6,3.6).lineTo(-3.6,-3.6).lineTo(0.6,-3.6).curveTo(3.5,-3.6,3.5,-1.6).curveTo(3.5,-0.6,2.7,-0.1).curveTo(2.1,0.3,1.2,0.4).lineTo(3.6,3.6).closePath().moveTo(-2.7,-0.4).lineTo(0.4,-0.4).curveTo(1.5,-0.4,2,-0.6).curveTo(2.6,-0.9,2.6,-1.6).curveTo(2.6,-2.4,2,-2.6).curveTo(1.5,-2.9,0.4,-2.9).lineTo(-2.7,-2.9).closePath();
	this.shape_7.setTransform(138.575,5.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,3.6).lineTo(-3.3,-3.6).lineTo(3.3,-3.6).lineTo(3.3,-2.9).lineTo(-2.4,-2.9).lineTo(-2.4,-0.6).lineTo(2.4,-0.6).lineTo(2.4,0.2).lineTo(-2.4,0.2).lineTo(-2.4,3.6).closePath();
	this.shape_8.setTransform(127.225,5.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.4,3.6).lineTo(-0.4,0.7).lineTo(-4.2,-3.6).lineTo(-3,-3.6).lineTo(0,-0.1).lineTo(3.1,-3.6).lineTo(4.2,-3.6).lineTo(0.5,0.7).lineTo(0.5,3.6).closePath();
	this.shape_9.setTransform(108.25,5.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.5,3.6).lineTo(0.2,0.4).lineTo(-2.7,0.4).lineTo(-2.7,3.6).lineTo(-3.6,3.6).lineTo(-3.6,-3.6).lineTo(0.6,-3.6).curveTo(3.5,-3.6,3.5,-1.6).curveTo(3.5,-0.6,2.7,-0.1).curveTo(2.1,0.3,1.2,0.4).lineTo(3.6,3.6).closePath().moveTo(-2.7,-0.4).lineTo(0.4,-0.4).curveTo(1.5,-0.4,2,-0.6).curveTo(2.6,-0.9,2.6,-1.6).curveTo(2.6,-2.4,2,-2.6).curveTo(1.5,-2.9,0.4,-2.9).lineTo(-2.7,-2.9).closePath();
	this.shape_10.setTransform(96.125,5.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.5,3.6).lineTo(-0.5,-2.9).lineTo(-3.9,-2.9).lineTo(-3.9,-3.6).lineTo(3.9,-3.6).lineTo(3.9,-2.9).lineTo(0.4,-2.9).lineTo(0.4,3.6).closePath();
	this.shape_11.setTransform(84.1,5.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,3.6).lineTo(-3.3,-3.6).lineTo(-2.4,-3.6).lineTo(-2.4,2.8).lineTo(3.3,2.8).lineTo(3.3,3.6).closePath();
	this.shape_12.setTransform(73.1,5.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.5,3.1).curveTo(-3.7,2.3,-3.7,0.5).lineTo(-3.7,-3.7).lineTo(-2.9,-3.7).lineTo(-2.9,0.5).curveTo(-2.9,3,-0,3).curveTo(2.9,3,2.9,0.5).lineTo(2.9,-3.7).lineTo(3.7,-3.7).lineTo(3.7,0.5).curveTo(3.7,2.3,2.5,3.1).curveTo(1.6,3.7,-0,3.7).curveTo(-1.6,3.7,-2.5,3.1).closePath();
	this.shape_13.setTransform(60.825,5.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.5,3.2).curveTo(-3.1,2.9,-3.7,2.1).lineTo(-3.1,1.5).curveTo(-2.6,2.2,-2.1,2.5).curveTo(-1.2,3,0.2,3).curveTo(1.2,3,1.9,2.7).curveTo(2.9,2.3,2.8,1.6).curveTo(2.8,0.8,1.9,0.6).lineTo(-0.3,0.2).curveTo(-1.8,0.1,-2.5,-0.2).curveTo(-3.5,-0.7,-3.5,-1.6).curveTo(-3.5,-2.8,-2.5,-3.3).curveTo(-1.7,-3.8,-0,-3.8).curveTo(1.3,-3.8,2.2,-3.3).curveTo(3.1,-2.9,3.6,-2.3).lineTo(2.9,-1.8).curveTo(2.5,-2.3,2,-2.6).curveTo(1.2,-3.1,-0.1,-3.1).curveTo(-2.5,-3.1,-2.6,-1.8).curveTo(-2.6,-1.1,-1.6,-0.8).lineTo(0.6,-0.5).curveTo(2.1,-0.4,2.8,-0).curveTo(3.7,0.5,3.7,1.6).curveTo(3.8,2.5,2.8,3.1).curveTo(1.9,3.8,0.1,3.8).curveTo(-1.5,3.8,-2.5,3.2).closePath();
	this.shape_14.setTransform(48.55,5.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,3.6).lineTo(-3.3,-3.6).lineTo(3.2,-3.6).lineTo(3.2,-2.9).lineTo(-2.4,-2.9).lineTo(-2.4,-0.5).lineTo(2.3,-0.5).lineTo(2.3,0.2).lineTo(-2.4,0.2).lineTo(-2.4,2.8).lineTo(3.3,2.8).lineTo(3.3,3.6).closePath();
	this.shape_15.setTransform(30.65,5.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.9,3.6).lineTo(2.9,0.2).lineTo(-2.9,0.2).lineTo(-2.9,3.6).lineTo(-3.7,3.6).lineTo(-3.7,-3.6).lineTo(-2.9,-3.6).lineTo(-2.9,-0.6).lineTo(2.9,-0.6).lineTo(2.9,-3.6).lineTo(3.7,-3.6).lineTo(3.7,3.6).closePath();
	this.shape_16.setTransform(18.375,5.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.5,3.6).lineTo(-0.5,-2.9).lineTo(-4,-2.9).lineTo(-4,-3.6).lineTo(3.9,-3.6).lineTo(3.9,-2.9).lineTo(0.4,-2.9).lineTo(0.4,3.6).closePath();
	this.shape_17.setTransform(6.15,5.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_tag, new cjs.Rectangle(0,0,233.3,14), null);


(lib.mc_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LOGO
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#ED5C86").beginStroke().moveTo(3.5,16.3).lineTo(3.5,5.3).lineTo(13.8,-16.2).lineTo(15.2,-16.2).lineTo(5,5.3).lineTo(5,16.3).closePath().moveTo(0.7,16.3).lineTo(0.7,5.3).lineTo(11,-16.2).lineTo(12.3,-16.2).lineTo(2.1,5.3).lineTo(2.1,16.3).closePath().moveTo(-2.2,16.3).lineTo(-2.2,5.3).lineTo(8.1,-16.2).lineTo(9.5,-16.2).lineTo(-0.7,5.3).lineTo(-0.7,16.3).closePath().moveTo(-4.9,16.3).lineTo(-4.9,5.3).lineTo(-15.2,-16.2).lineTo(-13.8,-16.2).lineTo(-4.2,3.8).lineTo(5.3,-16.2).lineTo(6.7,-16.2).lineTo(-3.6,5.3).lineTo(-3.6,16.3).closePath().moveTo(-12.3,-16.2).lineTo(-11,-16.2).lineTo(-3.1,-0).lineTo(-3.9,1.5).closePath().moveTo(-9.5,-16.2).lineTo(-8.1,-16.2).lineTo(-1.8,-3.2).lineTo(-2.5,-1.6).closePath().moveTo(-6.7,-16.2).lineTo(-5.3,-16.2).lineTo(-0.4,-6.2).lineTo(-1.1,-4.7).closePath();
	this.shape.setTransform(234.8,17.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#ED5C86").beginStroke().moveTo(3.6,16.3).lineTo(3.6,-9.2).lineTo(2.1,-9.2).lineTo(2.1,16.3).lineTo(0.7,16.3).lineTo(0.7,-9.2).lineTo(-0.7,-9.2).lineTo(-0.7,16.3).lineTo(-2.1,16.3).lineTo(-2.1,-9.2).lineTo(-3.6,-9.2).lineTo(-3.6,16.3).lineTo(-5,16.3).lineTo(-5,-9.2).lineTo(-10.6,-9.2).lineTo(-10.6,-10.6).lineTo(10.6,-10.6).lineTo(10.6,-9.2).lineTo(4.9,-9.2).lineTo(4.9,16.3).closePath().moveTo(-10.6,-12).lineTo(-10.6,-13.4).lineTo(10.6,-13.4).lineTo(10.6,-12).closePath().moveTo(-10.6,-14.8).lineTo(-10.6,-16.2).lineTo(10.6,-16.2).lineTo(10.6,-14.8).closePath();
	this.shape_1.setTransform(206.95,17.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#ED5C86").beginStroke().moveTo(-7.4,16.5).curveTo(-10.5,15.4,-12.9,13.3).lineTo(-11.8,12.4).curveTo(-9.7,14.3,-6.7,15.3).curveTo(-3.6,16.2,-0.3,16.3).curveTo(2.5,16.2,4.6,15.5).curveTo(6.8,14.7,8.2,13.3).curveTo(9.6,12.1,10.3,10.2).curveTo(11.1,8.4,11.1,6.4).curveTo(11.1,3.7,10,1.4).curveTo(8.9,-0.7,6.7,-2.2).curveTo(4.4,-3.5,1.3,-3.5).lineTo(-1.1,-3.5).curveTo(-2.6,-3.5,-3.2,-4.3).curveTo(-3.9,-5,-3.9,-6.3).curveTo(-3.9,-9.2,0.3,-9.2).curveTo(4.2,-9.2,6.3,-8).lineTo(5.1,-7.1).curveTo(3.8,-7.7,0.3,-7.8).curveTo(-1.2,-7.7,-2,-7.4).curveTo(-2.5,-7,-2.5,-6.3).curveTo(-2.6,-5.7,-2.2,-5.3).curveTo(-1.9,-4.9,-1.1,-4.9).lineTo(1.4,-4.9).curveTo(4.1,-4.9,6.1,-4).curveTo(8.3,-3.1,9.6,-1.5).curveTo(11.1,0,11.8,2.1).curveTo(12.5,4,12.5,6.4).curveTo(12.5,8.2,12,9.9).curveTo(11.4,11.7,10.3,13).curveTo(9.2,14.5,7.8,15.5).curveTo(6.3,16.5,4.2,17.1).curveTo(2.2,17.6,-0.3,17.6).curveTo(-4,17.6,-7.4,16.5).closePath().moveTo(-6.1,13.9).curveTo(-9,13.1,-10.7,11.5).lineTo(-9.6,10.6).curveTo(-7.9,12,-5.6,12.7).curveTo(-3,13.4,-0.3,13.4).curveTo(3.9,13.4,6,11.4).curveTo(8.3,9.4,8.3,6.4).curveTo(8.2,3.2,6.4,1.3).curveTo(4.5,-0.7,1.2,-0.7).lineTo(-1.1,-0.7).curveTo(-3.9,-0.7,-5.3,-2.3).curveTo(-6.8,-3.9,-6.8,-6.3).curveTo(-6.8,-8.8,-5,-10.4).curveTo(-3.2,-12,0.3,-12).curveTo(2.8,-12,5,-11.4).curveTo(6.9,-10.9,8.5,-9.7).lineTo(7.4,-8.9).curveTo(4.9,-10.6,0.3,-10.6).curveTo(-2.6,-10.6,-4,-9.4).curveTo(-5.4,-8.3,-5.4,-6.3).curveTo(-5.4,-4.5,-4.3,-3.3).curveTo(-3.4,-2.1,-1.1,-2.1).lineTo(1.2,-2.1).curveTo(5.2,-2.1,7.4,0.4).curveTo(9.7,2.8,9.6,6.4).curveTo(9.6,10,7,12.4).curveTo(4.5,14.9,-0.3,14.8).curveTo(-3.4,14.9,-6.1,13.9).closePath().moveTo(-4.9,11.4).curveTo(-7.1,10.8,-8.5,9.7).lineTo(-7.4,8.9).curveTo(-4.8,10.6,-0.3,10.6).curveTo(2.7,10.6,4,9.4).curveTo(5.4,8.3,5.4,6.4).curveTo(5.4,4.4,4.4,3.2).curveTo(3.4,2.1,1.1,2.1).lineTo(-1.1,2.1).curveTo(-5.1,2.1,-7.4,-0.3).curveTo(-9.6,-2.6,-9.6,-6.3).curveTo(-9.6,-10,-7,-12.4).curveTo(-4.3,-14.8,0.3,-14.8).curveTo(3.6,-14.8,6.2,-14).curveTo(8.8,-13.1,10.7,-11.5).lineTo(9.6,-10.6).curveTo(8,-11.9,5.6,-12.7).curveTo(3,-13.4,0.3,-13.4).curveTo(-3.8,-13.4,-6,-11.4).curveTo(-8.2,-9.5,-8.2,-6.3).curveTo(-8.2,-3.2,-6.4,-1.3).curveTo(-4.5,0.8,-1.1,0.7).lineTo(1.1,0.7).curveTo(4,0.7,5.4,2.3).curveTo(6.8,3.9,6.8,6.4).curveTo(6.8,8.9,5,10.4).curveTo(3.3,12,-0.3,12).curveTo(-2.8,12,-4.9,11.4).closePath().moveTo(-6.2,8).lineTo(-5.1,7.2).curveTo(-3.7,7.7,-0.3,7.7).curveTo(1.4,7.8,2,7.4).curveTo(2.6,7,2.5,6.4).curveTo(2.5,5.7,2.2,5.3).curveTo(1.9,5,1.1,4.9).lineTo(-1.1,4.9).curveTo(-3.7,5,-5.9,4).curveTo(-8.1,3.2,-9.5,1.6).curveTo(-11,0.1,-11.7,-2).curveTo(-12.5,-4,-12.4,-6.3).curveTo(-12.5,-8.2,-11.9,-9.9).curveTo(-11.4,-11.6,-10.3,-13).curveTo(-9.3,-14.3,-7.7,-15.5).curveTo(-6.2,-16.5,-4.1,-17).curveTo(-2.1,-17.7,0.3,-17.6).curveTo(4.1,-17.7,7.4,-16.5).curveTo(10.7,-15.4,12.9,-13.3).lineTo(11.8,-12.4).curveTo(9.8,-14.3,6.7,-15.2).curveTo(3.7,-16.2,0.3,-16.2).curveTo(-2.3,-16.2,-4.6,-15.5).curveTo(-6.7,-14.7,-8.1,-13.3).curveTo(-9.6,-11.9,-10.3,-10.2).curveTo(-11.1,-8.4,-11.1,-6.3).curveTo(-11.1,-3.7,-9.9,-1.4).curveTo(-8.8,0.9,-6.5,2.2).curveTo(-4.1,3.5,-1.1,3.5).lineTo(1.1,3.5).curveTo(2.6,3.5,3.3,4.3).curveTo(3.9,5,4,6.4).curveTo(3.9,9.2,-0.3,9.2).curveTo(-4.4,9.2,-6.2,8).closePath();
	this.shape_2.setTransform(181.35,17.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#ED5C86").beginStroke().moveTo(-4,16.3).lineTo(-4,-16.2).lineTo(12.5,-16.2).lineTo(12.5,-14.8).lineTo(-2.6,-14.8).lineTo(-2.6,-13.4).lineTo(12.5,-13.4).lineTo(12.5,-12).lineTo(-2.6,-12).lineTo(-2.6,-10.6).lineTo(12.5,-10.6).lineTo(12.5,-9.2).lineTo(-2.6,-9.2).lineTo(-2.6,-3.5).lineTo(5.2,-3.5).lineTo(5.2,-2.1).lineTo(-2.6,-2.1).lineTo(-2.6,-0.7).lineTo(5.2,-0.7).lineTo(5.2,0.7).lineTo(-2.6,0.7).lineTo(-2.6,2.1).lineTo(5.2,2.1).lineTo(5.2,3.5).lineTo(-2.6,3.5).lineTo(-2.6,9.2).lineTo(12.5,9.2).lineTo(12.5,10.6).lineTo(-2.6,10.6).lineTo(-2.6,12).lineTo(12.5,12).lineTo(12.5,13.4).lineTo(-2.6,13.4).lineTo(-2.6,14.8).lineTo(12.5,14.8).lineTo(12.5,16.3).closePath().moveTo(-6.8,16.3).lineTo(-6.8,-16.2).lineTo(-5.4,-16.2).lineTo(-5.4,16.3).closePath().moveTo(-9.6,16.3).lineTo(-9.6,-16.2).lineTo(-8.2,-16.2).lineTo(-8.2,16.3).closePath().moveTo(-12.5,16.3).lineTo(-12.5,-16.2).lineTo(-11.1,-16.2).lineTo(-11.1,16.3).closePath();
	this.shape_3.setTransform(153.575,17.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#ED5C86").beginStroke().moveTo(-7.4,16.9).lineTo(-7.4,15.6).lineTo(-5,15.6).curveTo(-2.7,15.5,-0.7,14.7).curveTo(1.3,13.8,2.8,12.2).curveTo(4.3,10.6,5.1,8.6).curveTo(6,6.5,6,4.2).lineTo(6,-16.9).lineTo(7.4,-16.9).lineTo(7.4,4.2).curveTo(7.4,6.7,6.4,9.2).curveTo(5.5,11.4,3.8,13.2).curveTo(2.2,14.8,-0.2,15.9).curveTo(-2.6,17,-5,16.9).closePath().moveTo(-7.4,14.1).lineTo(-7.4,12.7).lineTo(-5,12.7).curveTo(-1.6,12.7,0.8,10.2).curveTo(3.1,7.7,3.1,4.2).lineTo(3.1,-16.9).lineTo(4.5,-16.9).lineTo(4.5,4.2).curveTo(4.5,7,3.3,9.2).curveTo(2,11.4,-0.2,12.8).curveTo(-2.4,14.1,-5,14.1).closePath().moveTo(-7.4,11.3).lineTo(-7.4,9.9).lineTo(-5,9.9).curveTo(-2.8,9.9,-1.2,8.2).curveTo(0.3,6.5,0.3,4.2).lineTo(0.3,-16.9).lineTo(1.7,-16.9).lineTo(1.7,4.2).curveTo(1.7,7.2,-0.2,9.2).curveTo(-2.2,11.3,-5,11.3).closePath().moveTo(-7.4,8.5).lineTo(-7.4,7).lineTo(-5,7).curveTo(-4,7.1,-3.2,6.2).curveTo(-2.5,5.4,-2.5,4.2).lineTo(-2.5,-16.9).lineTo(-1.1,-16.9).lineTo(-1.1,4.2).curveTo(-1.1,6.1,-2.2,7.2).curveTo(-3.3,8.4,-5,8.5).closePath();
	this.shape_4.setTransform(130.125,18.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#ED5C86").beginStroke().moveTo(16.6,16.3).lineTo(3.8,-16.2).lineTo(5.3,-16.2).lineTo(18.2,16.3).closePath().moveTo(13.6,16.3).lineTo(0.8,-16.2).lineTo(2.3,-16.2).lineTo(15.1,16.3).closePath().moveTo(10.6,16.3).lineTo(-2.3,-16.2).lineTo(-0.8,-16.2).lineTo(12.1,16.3).closePath().moveTo(7.5,16.3).lineTo(-4.6,-14.3).lineTo(-16.7,16.3).lineTo(-18.2,16.3).lineTo(-5.3,-16.2).lineTo(-3.8,-16.2).lineTo(9,16.3).closePath().moveTo(-9.1,16.3).lineTo(-1.3,-3.3).lineTo(-0.6,-1.4).lineTo(-7.5,16.3).closePath().moveTo(-12.1,16.3).lineTo(-2.8,-7.2).lineTo(-2.1,-5.3).lineTo(-10.6,16.3).closePath().moveTo(-15.2,16.3).lineTo(-4.4,-11).lineTo(-3.6,-9.2).lineTo(-13.6,16.3).closePath().moveTo(-5.2,12.3).lineTo(-4.6,11).lineTo(4.6,11).lineTo(5.2,12.3).closePath().moveTo(-4.1,9.5).lineTo(-3.5,8.1).lineTo(3.5,8.1).lineTo(4.1,9.5).closePath().moveTo(-3,6.7).lineTo(-2.4,5.3).lineTo(2.4,5.3).lineTo(3,6.7).closePath();
	this.shape_5.setTransform(102.975,17.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#ED5C86").beginStroke().moveTo(14.1,16.3).lineTo(-5.8,-16.2).lineTo(-4.2,-16.2).lineTo(14.3,13.9).lineTo(14.3,-16.2).lineTo(15.8,-16.2).lineTo(15.8,16.3).closePath().moveTo(10.8,16.3).lineTo(-9.1,-16.2).lineTo(-7.5,-16.2).lineTo(12.5,16.3).closePath().moveTo(7.5,16.3).lineTo(-12.5,-16.2).lineTo(-10.8,-16.2).lineTo(9.1,16.3).closePath().moveTo(4.2,16.3).lineTo(-14.4,-14).lineTo(-14.4,16.3).lineTo(-15.8,16.3).lineTo(-15.8,-16.2).lineTo(-14.1,-16.2).lineTo(5.8,16.3).closePath().moveTo(-7.3,16.3).lineTo(-7.3,-0.6).lineTo(-5.9,1.8).lineTo(-5.9,16.3).closePath().moveTo(-10.1,16.3).lineTo(-10.1,-5.2).lineTo(-8.7,-2.9).lineTo(-8.7,16.3).closePath().moveTo(-13,16.3).lineTo(-13,-9.9).lineTo(-11.5,-7.5).lineTo(-11.5,16.3).closePath().moveTo(11.5,7.5).lineTo(11.5,-16.2).lineTo(12.9,-16.2).lineTo(12.9,9.9).closePath().moveTo(8.7,2.9).lineTo(8.7,-16.2).lineTo(10.1,-16.2).lineTo(10.1,5.2).closePath().moveTo(5.9,-1.7).lineTo(5.9,-16.2).lineTo(7.3,-16.2).lineTo(7.3,0.6).closePath();
	this.shape_6.setTransform(66.475,17.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#ED5C86").beginStroke().moveTo(3.5,16.3).lineTo(3.5,-16.2).lineTo(5,-16.2).lineTo(5,16.3).closePath().moveTo(0.7,16.3).lineTo(0.7,-16.2).lineTo(2.2,-16.2).lineTo(2.2,16.3).closePath().moveTo(-2.1,16.3).lineTo(-2.1,-16.2).lineTo(-0.7,-16.2).lineTo(-0.7,16.3).closePath().moveTo(-4.9,16.3).lineTo(-4.9,-16.2).lineTo(-3.5,-16.2).lineTo(-3.5,16.3).closePath();
	this.shape_7.setTransform(42,17.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#ED5C86").beginStroke().moveTo(15.2,16.3).lineTo(15.2,-13.5).lineTo(4,7.7).lineTo(2.4,7.7).lineTo(-10.2,-16.2).lineTo(-8.7,-16.2).lineTo(3.2,6.3).lineTo(15,-16.2).lineTo(16.7,-16.2).lineTo(16.7,16.3).closePath().moveTo(12.4,16.3).lineTo(12.4,-6.3).lineTo(13.8,-9).lineTo(13.8,16.3).closePath().moveTo(9.6,16.3).lineTo(9.6,-1).lineTo(11,-3.6).lineTo(11,16.3).closePath().moveTo(6.8,16.3).lineTo(6.8,4.4).lineTo(8.2,1.8).lineTo(8.2,16.3).closePath().moveTo(-8.2,16.3).lineTo(-8.2,1.9).lineTo(-6.8,4.6).lineTo(-6.8,16.3).closePath().moveTo(-11,16.3).lineTo(-11,-3.4).lineTo(-9.6,-0.8).lineTo(-9.6,16.3).closePath().moveTo(-13.8,16.3).lineTo(-13.8,-8.8).lineTo(-12.4,-6.1).lineTo(-12.4,16.3).closePath().moveTo(-16.7,16.3).lineTo(-16.7,-16.2).lineTo(-15.1,-16.2).lineTo(-2.4,7.7).lineTo(-4,7.7).lineTo(-15.2,-13.5).lineTo(-15.2,16.3).closePath().moveTo(-0.8,7.7).lineTo(-13.4,-16.2).lineTo(-11.8,-16.2).lineTo(0.8,7.7).closePath().moveTo(2.1,2.3).lineTo(11.9,-16.2).lineTo(13.5,-16.2).lineTo(2.9,3.7).closePath().moveTo(0.5,-0.8).lineTo(8.6,-16.2).lineTo(10.3,-16.2).lineTo(1.3,0.7).closePath();
	this.shape_8.setTransform(16.675,17.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#ED5C86").beginStroke().moveTo(-4.7,10.9).lineTo(-4.7,10).lineTo(-3.2,10).curveTo(-1.8,10,-0.4,9.5).curveTo(0.9,8.9,1.8,7.9).curveTo(2.8,6.8,3.3,5.5).curveTo(3.9,4.3,3.8,2.7).lineTo(3.8,-10.9).lineTo(4.7,-10.9).lineTo(4.7,2.7).curveTo(4.7,4.4,4.2,5.9).curveTo(3.6,7.2,2.5,8.5).curveTo(1.4,9.7,-0.1,10.2).curveTo(-1.5,10.9,-3.2,10.9).closePath().moveTo(-4.7,9.1).lineTo(-4.7,8.2).lineTo(-3.2,8.2).curveTo(-1,8.2,0.5,6.6).curveTo(2,5,2,2.7).lineTo(2,-10.9).lineTo(2.9,-10.9).lineTo(2.9,2.7).curveTo(2.9,4.4,2.1,5.9).curveTo(1.4,7.3,-0.1,8.2).curveTo(-1.6,9.1,-3.2,9.1).closePath().moveTo(-4.7,7.3).lineTo(-4.7,6.3).lineTo(-3.2,6.3).curveTo(-1.8,6.3,-0.8,5.3).curveTo(0.2,4.3,0.2,2.7).lineTo(0.2,-10.9).lineTo(1.1,-10.9).lineTo(1.1,2.7).curveTo(1.1,4.6,-0.1,6).curveTo(-1.3,7.3,-3.2,7.3).closePath().moveTo(-4.7,5.4).lineTo(-4.7,4.5).lineTo(-3.2,4.5).curveTo(-2.5,4.5,-2,4.1).curveTo(-1.6,3.5,-1.6,2.7).lineTo(-1.6,-10.9).lineTo(-0.7,-10.9).lineTo(-0.7,2.7).curveTo(-0.7,3.8,-1.4,4.7).curveTo(-2.2,5.4,-3.2,5.4).closePath();
	this.shape_9.setTransform(206.6,50);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#ED5C86").beginStroke().moveTo(10.7,10.5).lineTo(2.5,-10.5).lineTo(3.4,-10.5).lineTo(11.7,10.5).closePath().moveTo(8.8,10.5).lineTo(0.5,-10.5).lineTo(1.5,-10.5).lineTo(9.7,10.5).closePath().moveTo(6.8,10.5).lineTo(-1.4,-10.5).lineTo(-0.5,-10.5).lineTo(7.8,10.5).closePath().moveTo(4.9,10.5).lineTo(-2.9,-9.2).lineTo(-10.7,10.5).lineTo(-11.7,10.5).lineTo(-3.4,-10.5).lineTo(-2.5,-10.5).lineTo(5.9,10.5).closePath().moveTo(-5.8,10.5).lineTo(-0.9,-2.2).lineTo(-0.3,-0.9).lineTo(-4.8,10.5).closePath().moveTo(-7.8,10.5).lineTo(-1.8,-4.7).lineTo(-1.3,-3.5).lineTo(-6.8,10.5).closePath().moveTo(-9.8,10.5).lineTo(-2.8,-7.1).lineTo(-2.3,-5.9).lineTo(-8.8,10.5).closePath().moveTo(-3.3,8).lineTo(-2.9,7.1).lineTo(3,7.1).lineTo(3.4,8).closePath().moveTo(-2.6,6.2).lineTo(-2.2,5.2).lineTo(2.3,5.2).lineTo(2.6,6.2).closePath().moveTo(-1.9,4.3).lineTo(-1.6,3.4).lineTo(1.6,3.4).lineTo(1.9,4.3).closePath();
	this.shape_10.setTransform(189.15,49.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#ED5C86").beginStroke().moveTo(9.1,10.5).lineTo(-3.7,-10.5).lineTo(-2.7,-10.5).lineTo(9.2,9).lineTo(9.2,-10.5).lineTo(10.1,-10.5).lineTo(10.1,10.5).closePath().moveTo(7,10.5).lineTo(-5.9,-10.5).lineTo(-4.8,-10.5).lineTo(8,10.5).closePath().moveTo(4.8,10.5).lineTo(-8.1,-10.5).lineTo(-7,-10.5).lineTo(5.9,10.5).closePath().moveTo(2.7,10.5).lineTo(-9.2,-9).lineTo(-9.2,10.5).lineTo(-10.1,10.5).lineTo(-10.1,-10.5).lineTo(-9.1,-10.5).lineTo(3.7,10.5).closePath().moveTo(-4.7,10.5).lineTo(-4.7,-0.4).lineTo(-3.8,1.1).lineTo(-3.8,10.5).closePath().moveTo(-6.5,10.5).lineTo(-6.5,-3.4).lineTo(-5.6,-1.8).lineTo(-5.6,10.5).closePath().moveTo(-8.3,10.5).lineTo(-8.3,-6.4).lineTo(-7.4,-4.8).lineTo(-7.4,10.5).closePath().moveTo(7.4,4.8).lineTo(7.4,-10.5).lineTo(8.3,-10.5).lineTo(8.3,6.4).closePath().moveTo(5.6,1.8).lineTo(5.6,-10.5).lineTo(6.5,-10.5).lineTo(6.5,3.4).closePath().moveTo(3.8,-1.1).lineTo(3.8,-10.5).lineTo(4.7,-10.5).lineTo(4.7,0.4).closePath();
	this.shape_11.setTransform(165.65,49.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#ED5C86").beginStroke().moveTo(2.3,10.5).lineTo(2.3,-10.5).lineTo(3.2,-10.5).lineTo(3.2,10.5).closePath().moveTo(0.5,10.5).lineTo(0.5,-10.5).lineTo(1.4,-10.5).lineTo(1.4,10.5).closePath().moveTo(-1.3,10.5).lineTo(-1.3,-10.5).lineTo(-0.4,-10.5).lineTo(-0.4,10.5).closePath().moveTo(-3.2,10.5).lineTo(-3.2,-10.5).lineTo(-2.3,-10.5).lineTo(-2.3,10.5).closePath();
	this.shape_12.setTransform(149.9,49.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#ED5C86").beginStroke().moveTo(9.8,10.5).lineTo(9.8,-8.8).lineTo(2.6,5).lineTo(1.5,5).lineTo(-6.6,-10.5).lineTo(-5.6,-10.5).lineTo(2.1,4.1).lineTo(9.7,-10.5).lineTo(10.7,-10.5).lineTo(10.7,10.5).closePath().moveTo(8,10.5).lineTo(8,-4.1).lineTo(8.9,-5.8).lineTo(8.9,10.5).closePath().moveTo(6.2,10.5).lineTo(6.2,-0.7).lineTo(7.1,-2.4).lineTo(7.1,10.5).closePath().moveTo(4.4,10.5).lineTo(4.4,2.8).lineTo(5.3,1.1).lineTo(5.3,10.5).closePath().moveTo(-5.2,10.5).lineTo(-5.2,1.2).lineTo(-4.3,2.9).lineTo(-4.3,10.5).closePath().moveTo(-7.1,10.5).lineTo(-7.1,-2.2).lineTo(-6.2,-0.6).lineTo(-6.2,10.5).closePath().moveTo(-8.9,10.5).lineTo(-8.9,-5.7).lineTo(-8,-4).lineTo(-8,10.5).closePath().moveTo(-10.7,10.5).lineTo(-10.7,-10.5).lineTo(-9.7,-10.5).lineTo(-1.5,5).lineTo(-2.6,5).lineTo(-9.8,-8.8).lineTo(-9.8,10.5).closePath().moveTo(-0.5,5).lineTo(-8.6,-10.5).lineTo(-7.6,-10.5).lineTo(0.5,5).closePath().moveTo(1.4,1.5).lineTo(7.6,-10.5).lineTo(8.7,-10.5).lineTo(1.9,2.4).closePath().moveTo(0.3,-0.6).lineTo(5.6,-10.5).lineTo(6.6,-10.5).lineTo(0.8,0.4).closePath();
	this.shape_13.setTransform(133.575,49.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#ED5C86").beginStroke().moveTo(2.3,10.5).lineTo(2.3,-10.5).lineTo(3.2,-10.5).lineTo(3.2,10.5).closePath().moveTo(0.5,10.5).lineTo(0.5,-10.5).lineTo(1.4,-10.5).lineTo(1.4,10.5).closePath().moveTo(-1.4,10.5).lineTo(-1.4,-10.5).lineTo(-0.5,-10.5).lineTo(-0.5,10.5).closePath().moveTo(-3.2,10.5).lineTo(-3.2,-10.5).lineTo(-2.3,-10.5).lineTo(-2.3,10.5).closePath();
	this.shape_14.setTransform(114.475,49.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#ED5C86").beginStroke().moveTo(8.7,10.5).lineTo(3.4,0).lineTo(8.7,-10.5).lineTo(9.7,-10.5).lineTo(4.4,0).lineTo(9.7,10.5).closePath().moveTo(6.6,10.5).lineTo(1.3,0).lineTo(6.6,-10.5).lineTo(7.6,-10.5).lineTo(2.3,0).lineTo(7.6,10.5).closePath().moveTo(4.6,10.5).lineTo(-0.8,0).lineTo(4.6,-10.5).lineTo(5.6,-10.5).lineTo(0.3,0).lineTo(5.6,10.5).closePath().moveTo(2.6,10.5).lineTo(-2.8,0).lineTo(2.6,-10.5).lineTo(3.6,-10.5).lineTo(-1.8,0).lineTo(3.6,10.5).closePath().moveTo(-4.2,10.5).lineTo(-4.2,-10.5).lineTo(-3.3,-10.5).lineTo(-3.3,10.5).closePath().moveTo(-6.1,10.5).lineTo(-6.1,-10.5).lineTo(-5.2,-10.5).lineTo(-5.2,10.5).closePath().moveTo(-7.9,10.5).lineTo(-7.9,-10.5).lineTo(-7,-10.5).lineTo(-7,10.5).closePath().moveTo(-9.7,10.5).lineTo(-9.7,-10.5).lineTo(-8.8,-10.5).lineTo(-8.8,10.5).closePath();
	this.shape_15.setTransform(99.85,49.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#ED5C86").beginStroke().moveTo(-3.4,10.5).curveTo(-5.4,9.6,-7,8.1).curveTo(-8.5,6.5,-9.5,4.4).curveTo(-10.3,2.3,-10.4,0).curveTo(-10.3,-2.2,-9.5,-4.4).curveTo(-8.5,-6.5,-7,-8).curveTo(-5.4,-9.6,-3.4,-10.5).curveTo(-1.3,-11.4,1,-11.4).curveTo(3.9,-11.4,6.4,-10).curveTo(8.9,-8.6,10.3,-6.4).lineTo(9.6,-5.9).curveTo(8.1,-8,5.9,-9.2).curveTo(3.6,-10.4,1,-10.4).curveTo(-1.2,-10.4,-3.1,-9.6).curveTo(-4.9,-8.8,-6.4,-7.4).curveTo(-7.8,-6,-8.6,-4).curveTo(-9.5,-2.1,-9.5,0).curveTo(-9.5,2.1,-8.6,4.1).curveTo(-7.8,5.9,-6.4,7.4).curveTo(-4.9,8.9,-3.1,9.7).curveTo(-1.2,10.5,1,10.5).curveTo(3.6,10.5,5.9,9.2).curveTo(8.1,8.1,9.6,5.9).lineTo(10.3,6.4).curveTo(8.8,8.7,6.3,10.1).curveTo(3.8,11.4,1,11.4).curveTo(-1.3,11.4,-3.4,10.5).closePath().moveTo(-3.7,8.3).curveTo(-5.9,7,-7.2,4.8).curveTo(-8.5,2.5,-8.6,0).curveTo(-8.5,-2.6,-7.2,-4.8).curveTo(-6,-6.9,-3.7,-8.3).curveTo(-1.7,-9.5,1,-9.5).curveTo(3.5,-9.5,5.5,-8.4).curveTo(7.6,-7.3,8.9,-5.3).lineTo(8.1,-4.9).curveTo(7,-6.5,5,-7.6).curveTo(3.1,-8.6,1,-8.6).curveTo(-0.7,-8.6,-2.4,-7.9).curveTo(-4.1,-7.2,-5.1,-6.1).curveTo(-6.3,-4.9,-7,-3.3).curveTo(-7.7,-1.7,-7.7,0).curveTo(-7.7,1.7,-7,3.4).curveTo(-6.2,5.1,-5.1,6.1).curveTo(-4.1,7.2,-2.4,8).curveTo(-0.7,8.7,1,8.7).curveTo(3.2,8.7,5,7.6).curveTo(7,6.6,8.1,4.9).lineTo(8.9,5.4).curveTo(7.5,7.4,5.5,8.5).curveTo(3.4,9.6,1,9.6).curveTo(-1.6,9.6,-3.7,8.3).closePath().moveTo(-2.9,6.7).curveTo(-4.6,5.7,-5.7,3.9).curveTo(-6.7,2.1,-6.7,0).curveTo(-6.7,-2,-5.7,-3.9).curveTo(-4.7,-5.6,-2.9,-6.7).curveTo(-1.1,-7.7,1,-7.7).curveTo(2.9,-7.7,4.6,-6.8).curveTo(6.3,-6,7.4,-4.3).lineTo(6.6,-3.8).curveTo(5.7,-5.2,4.2,-6).curveTo(2.6,-6.8,1,-6.8).curveTo(-0.9,-6.8,-2.5,-5.9).curveTo(-4.1,-4.9,-4.9,-3.4).curveTo(-5.8,-1.8,-5.8,0).curveTo(-5.8,1.9,-4.9,3.4).curveTo(-4,5,-2.5,5.9).curveTo(-0.9,6.8,1,6.8).curveTo(2.7,6.8,4.2,6).curveTo(5.7,5.2,6.6,3.8).lineTo(7.4,4.4).curveTo(6.3,5.9,4.6,6.8).curveTo(2.8,7.8,1,7.8).curveTo(-1.1,7.8,-2.9,6.7).closePath().moveTo(-1.3,5.5).curveTo(-2.4,5,-3.2,4.2).curveTo(-3.8,3.5,-4.4,2.3).curveTo(-4.9,1.2,-4.9,0).curveTo(-4.9,-1.1,-4.4,-2.3).curveTo(-3.9,-3.4,-3.2,-4.2).curveTo(-2.4,-5,-1.3,-5.4).curveTo(-0.2,-5.9,1,-5.9).curveTo(2.5,-5.9,3.8,-5.2).curveTo(5,-4.5,5.8,-3.3).lineTo(5.1,-2.8).curveTo(4.4,-3.8,3.3,-4.4).curveTo(2.2,-5,1,-5).curveTo(-1.1,-5,-2.5,-3.5).curveTo(-4,-2,-4,0).curveTo(-4,2.1,-2.5,3.6).curveTo(-1.1,5,1,5).curveTo(2.3,5,3.3,4.4).curveTo(4.4,3.8,5.1,2.8).lineTo(5.8,3.4).curveTo(5,4.6,3.8,5.2).curveTo(2.5,5.9,1,5.9).curveTo(-0.2,5.9,-1.3,5.5).closePath();
	this.shape_16.setTransform(78.05,49.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#ED5C86").beginStroke().moveTo(2.3,10.5).lineTo(2.3,-10.5).lineTo(3.2,-10.5).lineTo(3.2,10.5).closePath().moveTo(0.5,10.5).lineTo(0.5,-10.5).lineTo(1.4,-10.5).lineTo(1.4,10.5).closePath().moveTo(-1.4,10.5).lineTo(-1.4,-10.5).lineTo(-0.5,-10.5).lineTo(-0.5,10.5).closePath().moveTo(-3.2,10.5).lineTo(-3.2,-10.5).lineTo(-2.3,-10.5).lineTo(-2.3,10.5).closePath();
	this.shape_17.setTransform(62.575,49.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#ED5C86").beginStroke().moveTo(9.1,10.5).lineTo(-3.7,-10.5).lineTo(-2.7,-10.5).lineTo(9.3,9).lineTo(9.3,-10.5).lineTo(10.2,-10.5).lineTo(10.2,10.5).closePath().moveTo(7,10.5).lineTo(-5.9,-10.5).lineTo(-4.8,-10.5).lineTo(8.1,10.5).closePath().moveTo(4.8,10.5).lineTo(-8,-10.5).lineTo(-7,-10.5).lineTo(5.9,10.5).closePath().moveTo(2.7,10.5).lineTo(-9.3,-9).lineTo(-9.3,10.5).lineTo(-10.2,10.5).lineTo(-10.2,-10.5).lineTo(-9.1,-10.5).lineTo(3.8,10.5).closePath().moveTo(-4.7,10.5).lineTo(-4.7,-0.4).lineTo(-3.8,1.1).lineTo(-3.8,10.5).closePath().moveTo(-6.5,10.5).lineTo(-6.5,-3.4).lineTo(-5.6,-1.8).lineTo(-5.6,10.5).closePath().moveTo(-8.3,10.5).lineTo(-8.3,-6.4).lineTo(-7.4,-4.8).lineTo(-7.4,10.5).closePath().moveTo(7.4,4.8).lineTo(7.4,-10.5).lineTo(8.3,-10.5).lineTo(8.3,6.4).closePath().moveTo(5.6,1.8).lineTo(5.6,-10.5).lineTo(6.5,-10.5).lineTo(6.5,3.4).closePath().moveTo(3.8,-1.1).lineTo(3.8,-10.5).lineTo(4.7,-10.5).lineTo(4.7,0.4).closePath();
	this.shape_18.setTransform(46.825,49.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_logo, new cjs.Rectangle(0,0,250,70.2), null);


(lib.mc_image = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.IMAGE();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_image, new cjs.Rectangle(0,0,300,600), null);


(lib.mc_empty = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_bottle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bottle();
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bottle, new cjs.Rectangle(0,-1,95,75), null);


(lib.mc_block = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#00FF00").beginStroke().moveTo(-50,50).lineTo(-50,-50).lineTo(50,-50).lineTo(50,50).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_block, new cjs.Rectangle(-50,-50,100,100), null);


(lib.mc_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bg, new cjs.Rectangle(0,0,300,600), null);


(lib.btn_shop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Walmart
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,3.6).lineTo(-0.7,-2.4).lineTo(-4,-2.4).lineTo(-4,-3.6).lineTo(3.9,-3.6).lineTo(3.9,-2.4).lineTo(0.7,-2.4).lineTo(0.7,3.6).closePath();
	this.shape.setTransform(48.45,10.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2,3.6).lineTo(-0.1,0.8).lineTo(-2.3,0.8).lineTo(-2.3,3.6).lineTo(-3.8,3.6).lineTo(-3.8,-3.6).lineTo(0.6,-3.6).curveTo(2,-3.6,2.7,-3.2).curveTo(3.6,-2.7,3.6,-1.5).curveTo(3.6,-0.5,3,0.1).curveTo(2.4,0.6,1.5,0.7).lineTo(3.8,3.6).closePath().moveTo(-2.3,-0.4).lineTo(0.4,-0.4).curveTo(1.3,-0.4,1.7,-0.6).curveTo(2.1,-0.8,2.1,-1.4).curveTo(2.1,-2,1.7,-2.3).curveTo(1.3,-2.5,0.4,-2.5).lineTo(-2.3,-2.5).closePath();
	this.shape_1.setTransform(39.725,10.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.9,3.6).lineTo(2.1,2).lineTo(-2.1,2).lineTo(-2.8,3.6).lineTo(-4.3,3.6).lineTo(-0.8,-3.6).lineTo(0.9,-3.6).lineTo(4.4,3.6).closePath().moveTo(1.5,0.7).lineTo(-0,-2.5).lineTo(-1.5,0.7).lineTo(1.5,0.7).closePath();
	this.shape_2.setTransform(30.35,10.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.9,3.6).lineTo(2.9,-1.9).lineTo(0.5,3.6).lineTo(-0.6,3.6).lineTo(-2.9,-1.9).lineTo(-2.9,3.6).lineTo(-4.2,3.6).lineTo(-4.2,-3.6).lineTo(-2.3,-3.6).lineTo(-0,1.7).lineTo(2.3,-3.6).lineTo(4.2,-3.6).lineTo(4.2,3.6).closePath();
	this.shape_3.setTransform(20.55,10.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,3.6).lineTo(-3.4,-3.6).lineTo(-1.9,-3.6).lineTo(-1.9,2.4).lineTo(3.4,2.4).lineTo(3.4,3.6).closePath();
	this.shape_4.setTransform(11.65,10.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.9,3.6).lineTo(2.1,2).lineTo(-2.1,2).lineTo(-2.9,3.6).lineTo(-4.3,3.6).lineTo(-0.8,-3.6).lineTo(0.8,-3.6).lineTo(4.3,3.6).closePath().moveTo(1.5,0.7).lineTo(0,-2.5).lineTo(-1.5,0.7).lineTo(1.5,0.7).closePath();
	this.shape_5.setTransform(2.7,10.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.4,3.6).lineTo(0,-1.5).lineTo(0,-1.5).lineTo(-1.4,3.6).lineTo(-2.8,3.6).lineTo(-4.9,-3.6).lineTo(-3.5,-3.6).lineTo(-2.1,1.4).lineTo(-2,1.4).lineTo(-0.7,-3.6).lineTo(0.7,-3.6).lineTo(2.1,1.3).lineTo(3.5,-3.6).lineTo(4.9,-3.6).lineTo(2.7,3.6).closePath();
	this.shape_6.setTransform(-7.15,10.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.7,3.6).lineTo(-3.7,-3.6).lineTo(0.4,-3.6).curveTo(1.8,-3.6,2.5,-3.4).curveTo(3.7,-2.9,3.6,-1.4).curveTo(3.7,0,2.5,0.5).curveTo(1.8,0.8,0.4,0.8).lineTo(-2.2,0.8).lineTo(-2.2,3.6).closePath().moveTo(-2.2,-0.4).lineTo(0.7,-0.4).curveTo(1.4,-0.4,1.8,-0.6).curveTo(2.2,-0.8,2.3,-1.4).curveTo(2.2,-2.1,1.8,-2.3).curveTo(1.4,-2.4,0.7,-2.4).lineTo(-2.2,-2.4).closePath();
	this.shape_7.setTransform(-20.35,10.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,2.5).curveTo(-4.3,1.5,-4.3,0).curveTo(-4.3,-1.6,-3.4,-2.6).curveTo(-2.2,-3.8,-0,-3.8).curveTo(2.2,-3.8,3.4,-2.6).curveTo(4.3,-1.6,4.3,0).curveTo(4.3,1.5,3.4,2.5).curveTo(2.3,3.8,-0,3.8).curveTo(-2.3,3.8,-3.5,2.5).closePath().moveTo(-2.1,-2).curveTo(-2.9,-1.3,-2.9,-0).curveTo(-2.9,1.4,-2,2).curveTo(-1.2,2.6,-0,2.6).curveTo(1.2,2.6,2,2).curveTo(2.9,1.4,2.9,-0).curveTo(2.9,-1.3,2.1,-2).curveTo(1.3,-2.6,-0,-2.6).curveTo(-1.3,-2.6,-2.1,-2).closePath();
	this.shape_8.setTransform(-29.875,10.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.4,3.6).lineTo(2.4,0.5).lineTo(-2.4,0.5).lineTo(-2.4,3.6).lineTo(-3.9,3.6).lineTo(-3.9,-3.6).lineTo(-2.4,-3.6).lineTo(-2.4,-0.8).lineTo(2.4,-0.8).lineTo(2.4,-3.6).lineTo(3.9,-3.6).lineTo(3.9,3.6).closePath();
	this.shape_9.setTransform(-39.625,10.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.9,3).curveTo(-3.6,2.4,-3.8,1.7).lineTo(-2.5,1.3).curveTo(-1.8,2.6,0.3,2.6).curveTo(1.2,2.6,1.8,2.3).curveTo(2.4,2,2.4,1.6).curveTo(2.4,0.9,0.8,0.7).lineTo(-0.9,0.4).curveTo(-2.2,0.3,-2.9,-0.3).curveTo(-3.6,-0.8,-3.6,-1.6).curveTo(-3.6,-3,-2.1,-3.6).curveTo(-1.3,-3.8,-0.2,-3.8).curveTo(3,-3.8,3.7,-1.9).lineTo(2.3,-1.4).curveTo(1.9,-2.6,-0.2,-2.6).curveTo(-1,-2.6,-1.5,-2.4).curveTo(-2.1,-2.2,-2.1,-1.7).curveTo(-2.1,-1.4,-1.9,-1.3).curveTo(-1.5,-1,-0.5,-0.9).lineTo(1.2,-0.7).curveTo(3.8,-0.3,3.8,1.4).curveTo(3.8,2.7,2.7,3.3).curveTo(1.8,3.8,0.2,3.8).curveTo(-1.8,3.8,-2.9,3).closePath();
	this.shape_10.setTransform(-48.825,10.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// BUTTON
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FF4F84").beginStroke().moveTo(-70,10).lineTo(-70,-10).lineTo(70,-10).lineTo(70,10).closePath();
	this.shape_11.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(4));

	// HIT
	this.mc_block = new lib.mc_block();
	this.mc_block.name = "mc_block";
	this.mc_block.setTransform(0,10,1.4,0.2);
	this.mc_block._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_block).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,0,140,20);


// stage content:
(lib.CR_11155_MINAJESTY_2014_US_DIGITAL_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		TweenLite.fromTo(this.mc_image, 5, {alpha:0}, {alpha:1, delay:0, ease:Cubic.easeOut});
		
		
		//stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn_shop
	this.btn_shop = new lib.btn_shop();
	this.btn_shop.name = "btn_shop";
	this.btn_shop.setTransform(150,550);
	new cjs.ButtonHelper(this.btn_shop, 0, 1, 2, false, new lib.btn_shop(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_shop).wait(1));

	// mc_tag
	this.mc_tag = new lib.mc_tag();
	this.mc_tag.name = "mc_tag";
	this.mc_tag.setTransform(116.6,526.2,1,1,0,0,0,59.1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.mc_tag).wait(1));

	// mc_bottle
	this.mc_bottle = new lib.mc_bottle();
	this.mc_bottle.name = "mc_bottle";
	this.mc_bottle.setTransform(89.5,527.5,1,1,0,0,0,77.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_bottle).wait(1));

	// mc_logo
	this.mc_logo = new lib.mc_logo();
	this.mc_logo.name = "mc_logo";
	this.mc_logo.setTransform(25.5,63,1,1,0,0,0,0,25);

	this.timeline.addTween(cjs.Tween.get(this.mc_logo).wait(1));

	// mc_empty1
	this.mc_empty1 = new lib.mc_empty();
	this.mc_empty1.name = "mc_empty1";

	this.timeline.addTween(cjs.Tween.get(this.mc_empty1).wait(1));

	// mc_loadSWF
	this.mc_loadSWF = new lib.mc_empty();
	this.mc_loadSWF.name = "mc_loadSWF";

	this.timeline.addTween(cjs.Tween.get(this.mc_loadSWF).wait(1));

	// mc_image
	this.mc_image = new lib.mc_image();
	this.mc_image.name = "mc_image";
	this.mc_image.setTransform(80,220,1,1,0,0,0,80,220);

	this.timeline.addTween(cjs.Tween.get(this.mc_image).wait(1));

	// mc_empty2
	this.mc_empty2 = new lib.mc_empty();
	this.mc_empty2.name = "mc_empty2";

	this.timeline.addTween(cjs.Tween.get(this.mc_empty2).wait(1));

	// mc_bg
	this.mc_bg = new lib.mc_bg();
	this.mc_bg.name = "mc_bg";

	this.timeline.addTween(cjs.Tween.get(this.mc_bg).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,150.10000000000002,300);
// library properties:
lib.properties = {
	id: '45A2D185DEBE4854A737F3CE82FD6355',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/IMAGE.jpg", id:"IMAGE"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['45A2D185DEBE4854A737F3CE82FD6355'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;