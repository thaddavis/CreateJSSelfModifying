(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AiwFAQhXAYhqAAQi6AAiFhOQiDhOAAhuQAAhtCDhOQBPguBggTQgCgOAAgPQAAhYBWg+QAcgUAggOQBCgcBSAAQBSAABCAcQAgAOAcAUQAxAkAVAsQBRgOBcAAQD1AACsBnQCtBnAACRQAACSitBnQisBnj1AAQjsAAiqhgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-41.6,164,83.2);


(lib.WheelSmall1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3300").ss(1.5,2,1).p("AFEg/QAgAbAAAlQAAAlggAcQgeAbgtAAQgaAAgWgKQgOgGgNgLQgfgcAAglQAAglAfgbQAggdArAAQAtAAAeAdgAj5hcQAtAAAeAdQAhAbAAAlQAAAlghAcQgeAbgtAAQgqAAghgbQgfgcAAglQAAglAfgbQAEgEAEgDQAegWAlAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("ADJBTQgOgGgNgLQgfgcAAglQAAglAfgbQAggdArAAQAtAAAeAdQAgAbAAAlQAAAlggAcQgeAbgtAAQgaAAgWgKgAlEBCQgfgcAAglQAAglAfgbIAIgHQAegWAlAAQAtAAAeAdQAhAbAAAlQAAAlghAcQgeAbgtAAQgqAAghgbg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF3300").ss(1.5,2,1).p("AFWgfQAJAmgWAnQgNAXgTAOQgOAJgQAGQgmANghgTQgggTgKgoQgIgqAVgkQAWgnAogMQApgOAgATQAhASAHAqgAiagfQAJAmgXAnQgVAlgpAPQgnANgggTQghgTgIgoQgBgGAAgEQgFglASggQAXgnAogLQAogPAhATQAgASAIArg");
	this.shape_2.setTransform(0,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AktBcQghgTgIgoIgBgKQgFglASggQAXgnAogLQAogPAhATQAgASAIArQAJAmgXAnQgVAlgpAPQgQAFgPAAQgVAAgTgLgADEBcQgggTgKgoQgIgqAVgkQAWgnAogMQApgOAgATQAhASAHAqQAJAmgWAnQgNAXgTAOQgOAJgQAGQgQAFgOAAQgWAAgTgLg");
	this.shape_3.setTransform(0,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF3300").ss(1.5,2,1).p("ADEhbQAhgTAnAPQAnAMAXAmQANAXACAWQABARgDARQgHAnghAUQggASgogMQgpgPgVgjQgXgnAKgoQAIgqAggTgAjlhgQAnAMAXAnQAVAlgIApQgIApggASQghATgngNQgFgCgEgCQgjgOgTghQgXgnALgnQAIgqAggTQAhgTAnAPg");
	this.shape_4.setTransform(0,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("ADnBjQgpgPgVgjQgXgnAKgoQAIgqAggTQAhgTAnAPQAnAMAXAmQANAXACAWQABARgDARQgHAnghAUQgUALgWAAQgOAAgQgFgAkKBiIgJgEQgjgOgTghQgXgnALgnQAIgqAggTQAhgTAnAPQAnAMAXAnQAVAlgIApQgIApggASQgTALgWAAQgPAAgQgFg");
	this.shape_5.setTransform(0,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF3300").ss(1.5,2,1).p("AFagRQAOAmgTAhQgTAggoAJQgrAIgkgUQgngWgMgpQgPgnATghQATggApgIQAogJAnAWQAXAOANATQAJANAGAQgAiWgTQANAngTAfQgTAhgoAJQgGABgEAAQgmAFgggSQgngXgLgoQgOgnASghQATghApgHQAogJAnAXQAlAVAPAog");
	this.shape_6.setTransform(0.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("ADLBTQgngWgMgpQgPgnATghQATggApgIQAogJAnAWQAXAOANATQAJANAGAQQAOAmgTAhQgTAggoAJQgLADgMAAQgeAAgagPgAknBRQgngXgLgoQgOgnASghQATghApgHQAogJAnAXQAlAVAPAoQANAngTAfQgTAhgoAJIgKABIgQABQgdAAgZgOg");
	this.shape_7.setTransform(0.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF3300").ss(1.5,2,1).p("AFWgzQASAfgLAmQgPApgkAXQgmAWgqgLQgqgHgSghQgTggAOgnQAMgnAngXQAXgMAWgCQARgCARADQAoAIATAigAknhQQAlgVAqAHQApAIASAgQATAggNAnQgCAGgCADQgPAjgfAUQgoAWgogLQgpgHgTggQgUgiAOgmQANgnAngWg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("ADaBdQgqgHgSghQgTggAOgnQAMgnAngXQAXgMAWgCQARgCARADQAoAIATAiQASAfgLAmQgPApgkAXQgaAPgbAAQgNAAgOgEgAkZBcQgpgHgTggQgUgiAOgmQANgnAngWQAlgVAqAHQApAIASAgQATAggNAnIgEAJQgPAjgfAUQgaAPgbAAQgNAAgOgEg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF3300").ss(1.5,2,1).p("AFXAAQAAAsgdAeQgbAigmgBQgmAAgbggQgcgeAAgtQABgZAJgVQAHgPALgNQAbgfAmABQAlgBAcAdQAcAiABAqgAicAAQAAAsgeAeQgaAgglAAQgnABgcggQgageAAgtQAAgqAbghQAbggAlACQAlgBAcAeQAFAGABADQAYAeAAAlg");
	this.shape_10.setTransform(0.1,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AD5BrQgmAAgbggQgcgeAAgtQABgZAJgVQAHgPALgNQAbgfAmABQAlgBAcAdQAcAiABAqQAAAsgdAeQgbAhgkAAIgCAAgAk8BLQgageAAgtQAAgqAbghQAbggAlACQAlgBAcAeIAGAJQAYAeAAAlQAAAsgeAeQgaAgglAAIgDAAQglAAgbgfg");
	this.shape_11.setTransform(0.1,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF3300").ss(1.5,2,1).p("AFbgTQAQAngUAgQgTAhgpAIQgoAJgngWQgWgOgOgSQgJgOgGgQQgNgmAUggQASghAmgJQAsgIAmAVQAmAWALAogAiYgSQAPAngTAfQgTAjgqAIQgnAHgmgWQglgVgQgoQgOgmAUggQASggAogJQAIgBADgBQAmgFAhATQAmAWALAog");
	this.shape_12.setTransform(-0.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AkmBQQglgVgQgoQgOgmAUggQASggAogJIALgCQAmgFAhATQAmAWALAoQAPAngTAfQgTAjgqAIQgJACgJAAQgeAAgdgRgADMBQQgWgOgOgSQgJgOgGgQQgNgmAUggQASghAmgJQAsgIAmAVQAmAWALAoQAQAngUAgQgTAhgpAIQgMACgLAAQgcAAgcgPg");
	this.shape_13.setTransform(-0.1,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF3300").ss(1.5,2,1).p("ADZhdQArgIAmAVQAmAWALAoQAQAngTAgQgTAhgqAIQgnAJgogWQgVgOgOgSQgJgOgHgQQgNgmAUggQASghAngJgAiNAAQABAmggAdQgeAZgsAAQgrAAgigbQgggbACglQAAgkAegcQAGgFACgCQAegXAmAAQAsAAAeAdQAhAbgBAlg");
	this.shape_14.setTransform(-0.1,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("ADMBRQgVgOgOgSQgJgOgHgQQgNgmAUggQASghAngJQArgIAmAVQAmAWALAoQAQAngTAgQgTAhgqAIQgLACgMAAQgcAAgcgPgAlDBBQgggbACglQAAgkAegcIAIgHQAegXAmAAQAsAAAeAdQAhAbgBAlQABAmggAdQgeAZgsAAQgrAAgigbg");
	this.shape_15.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.6,-10.3,73.3,20.7);


(lib.wheel3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgEAKIgEgDIAAAAIAAgBQgEgCAAgEIAAAAIAAAAQABgEACgCIABAAIABgBIAEgCIADAAIAEAAIAEACIABABQADACAAADIABABIgBADIgDAEIAAAAIgCACIgEABIgDAAIgEAAg");
	this.shape.setTransform(-0.1,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D1908").s().p("AAAAPIgEgBQgEAAgEgDIgCgCQgCgEgBgEIAAgBIACgFIADgFIAAAAIABgBQAEgCAEgBIADAAIAEAAQAFABAEADIAAABQADACABAEIAAADIgBAGIgDAFIgBABQgFADgFAAIgCAAgAgMAAIAAAAIAAAAQAAAEAEACIAAABIAAAAIAEADIAEAAIADAAIAEgBIACgCIAAAAIADgEIABgDIgBgBQAAgDgDgCIgBgBIgEgCIgEAAIgDAAIgEACIgBABIgBAAQgCACgBAEg");
	this.shape_1.setTransform(-0.1,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AhOBNQgSgRgHgUQgIgTAAgVQAAgnAbgeIAGgGQAfgfAtAAIACAAQAugBAhAgQAhAfAAAsQAAAhgSAbIgBAAQgGAIgIAJQghAeguAAQgtAAghgegAAAAUIABAAIgIBDIAHAAQAmABAbgaIABAAIAIgKIg/gkIABgBIADgFIA/AlQAOgWAAgZQAAgTgIgRIhEAkQgBgCgDgDIBEglQgGgKgJgIQgbgaglAAIACBMIgDAAIgEAAIgBhMQgjABgZAZIAAgBIgCADIA3A0IgBAAIAAABIgDAFIg4g0QgTAWAAAeQAAAQAFAOIBEgZQABAEACAEIhEAYQAGANAMAMQAWAUAcAEIAKhDIAFABg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("Ag1BdQgogXgNgrQgGgYADgUQACgUALgSQAUgjAmgMIAIgDQAqgKAnAVIADACQAoAXAMArQANArgWAnQgRAdgdAOIgBAAQgJAEgLADQgNADgNAAQgdAAgcgQgAgKAQIACABIgqA3IAHAEQAiATAigJIAAAAIANgEIglg/IACAAQADgBACgCIAlBAQAWgMAMgWQAKgSACgSIhNgCQABgEgBgDIBNABQgBgKgDgMQgKgjgggUIglBEIgEgCIgDgBIAlhEQgegPghAIIgDABIAWBIIgBAAIAAABQgEAAgDACIgVhJQgcAKgQAbQgHANgDAPIBHAOQgBADAAAEIhHgOQgCAOAFARQAJAcAWASIAqg2IAEADg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3300").s().p("AABALIgDgBIgCgBIgEgDIgCgEIAAgBQgCgCACgEIAAAAIABgBQACgDADgBIACAAIAEABIADABIADACIADAFIABABQABACgBADIgBACIgCACIgEACIAAAAIgEAAg");
	this.shape_4.setTransform(-0.3,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D1908").s().p("AgFAOIgCgBIgEgDQgDgDgBgEIgBgCQAAgEABgDIABgBIADgFQADgCAEAAIAAgBIABAAQADAAAEACIADABIAEACQAEADABAFIABABQABACgBAEIgCAEIgEAEQgCACgDABIgCAAIgCAAQgDAAgEgCgAgJgGIgBABIAAAAQgCAEACACIAAABIACAEIAEADIACABIADABIAEAAIAAAAIAEgCIACgCIABgCQABgDgBgCIgBgBIgDgFIgDgCIgDgBIgEgBIgCAAQgDABgCADg");
	this.shape_5.setTransform(-0.3,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgFBvIAAgBIgVgDQgrgNgXgpQgYgoALgrQAGgXANgRQANgQASgLQAjgUAmAJIAIABQArAOAXAlIABADQAYApgMAqQgKAsgnAWQgZAPgcAAIgIAAgAAABbQAYABAWgNQARgKALgQIhCgoQADgCAAgDIBDAnQAFgKADgMQAIgjgRghIhCApIgCgEIgCgCIBBgpQgSgcghgKIgDAAIgSBJIAAgBIAAABQgEgCgDABIARhKQgcgGgbAQQgNAIgKALIA3AwQgDABgDAFIg1gwQgJAMgFARQgGAbAKAbIA/gaIADAGIABABIhAAaIAEAIQAUAhAjAKIAAAAIANADIAAhJIABAAQADACADgBg");
	this.shape_6.setTransform(0,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3300").s().p("AgBAMIAAAAIgDgBIgDgDIgBgDIgCgEIAAgEIABAAQAAgEAEgCIAAAAIAAgBQAEgCACACIACAAIADADIACADIADAEIAAAEIAAABQgBADgCACIgCABIgDABIgBAAIgDAAg");
	this.shape_7.setTransform(-0.4,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D1908").s().p("AgCAQIgBAAQgGgCgCgFIgBgBIgDgGQgBgDABgEIAAgCQADgFADgBIABgBIAFgCQADgBADACIAAgBIABABQAEABADAFIACACIACAEQACADgCAFIAAACQAAADgDACIgDAEIgGABIgBAAIgEgBgAADAMIADgBIACgBQACgCABgEIAAAAIAAgFIgDgEIgCgCIgDgDIgCgBQgCgBgEABIAAABIAAABQgEACAAADIgBABIAAADIACAFIABACIADADIADACIAAgBIAEABg");
	this.shape_8.setTransform(-0.4,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF3300").s().p("AAAAMIgCgBIgEgCIgCgCIgBgEIAAgDIAAgFIADgDIABAAQACgDADAAIAAgBIABAAQAEAAACAEIABABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAAADIAAAEIgCAFIgBAAIgFADIgBABIgBgBg");
	this.shape_9.setTransform(-0.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D1908").s().p("AgFARQgCgBgDgEIgBAAQgDgFAAgFIAAgCIAAgFQABgEADgDIACgCQAEgDAEAAIAAAAIAFACQADAAADADIAAAAIABABQACADABAFIAAADIAAAEQAAAEgEAEIgBACQgCACgEAAIgEACIgFgBgAAAgLQgDAAgCADIgBAAIgDADIAAAFIAAADIABAEIACACIAEACIACABIACAAIAFgDIABAAIACgFIAAgEIAAgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgBgBQgCgEgEAAIgBAAg");
	this.shape_10.setTransform(-0.4,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("Ag8BeIAAgBQgIgFgIgIQgeghgBguQAAguAfghQASgRATgIQATgIAUAAQAoAAAdAbIAHAGQAfAgAAAsIABADQAAAuggAgQgfAhgtAAQghAAgbgSgAgJAQIglA/QAWANAYABQAUgBARgIIglhEQAEAAACgCIAlBCQAKgGAJgIQAZgbABglIhNACIAAgEIgBgDIBNgCQgBgigZgZIgCgCIgzA3IgBgBIgBAAQgCgDgDAAIA1g4QgXgUgfAAQgOABgPAEIAYBFQgDAAgFADIgWhFQgOAHgMAMQgUAVgFAcIBEAKIAAAFIgBACIhEgJIAAAIQABAmAZAbIAAAAIAKAJIAkg/IABAAQACAEADAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-10.7,22.4,21.5);


(lib.wheel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.4,2,1).p("AADgKIgChNQAmABAaAZQAJAJAGAJIhEAmAAAhrQgBAAgBAAQgtABggAfQgDACgCAEQgbAeAAAnQAAAVAIATQAHAUARARQAhAfAuAAQAvAAAggfQAIgIAGgIIABAAQASgbAAgiQAAgsghgfQgggggvAAgAAQAAIBEgkQAIARAAATQAAAagNAVIg/glAALAQIA/AlQgEAEgEAFIgBAAQgaAagnAAQgEAAgEAAIAJhEAgMgHIg3g0QABgBABgBIAAAAQAZgYAigBIACBMAgSAGIhEAYQgFgOAAgQQAAgeATgXIA3A1AgGATIgJBEQgcgFgWgUQgMgMgGgNIBEgY");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D1908").s().p("AAAAPIgEgBQgEAAgEgDIgCgCQgCgEgBgEIAAgBIACgFIADgFIAAAAIABgBQAEgCAEgBIADAAIAEAAQAFABAEADIAAABQADACABAEIAAADIgBAGIgDAFIgBABQgFADgFAAIgCAAgAgMAAIAAAAIAAAAQAAAEAEACIAAABIAAAAIAEADIAEAAIADAAIAEgBIACgCIAAAAIADgEIABgDIgBgBQAAgDgDgCIgBgBIgEgCIgEAAIgDAAIgEACIgBABIgBAAQgCACgBAEg");
	this.shape_1.setTransform(-0.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheel2, new cjs.Rectangle(-12.2,-11.7,24.4,23.5), null);


(lib.bell1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AhOgGIAHAAICPgFIAGAAIABARIicAGg");
	this.shape.setTransform(0,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AhEgQQAPgwAzAAQAyAAASAvQANAggGAtIiPAFQgKgvAMgig");
	this.shape_1.setTransform(-0.1,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AhLgJQAGgzAygIQAygJAZAsQAUAeABArIiMAfQgSgtAGgjg");
	this.shape_2.setTransform(1.5,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("AhPAIIAIgCICMgeIAGgBIAFASIiaAhg");
	this.shape_3.setTransform(2.4,6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3300").s().p("AhOAAIACgTIAHABICOASIAGABIgCATg");
	this.shape_4.setTransform(-1.1,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AhLAyQgCgwASggQAXgtAxAIQAzAJAJAyQAIAjgOAqg");
	this.shape_5.setTransform(-0.5,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-7.5,15.9,15);


(lib.soundFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2.3,1,2).p("AgfhbQAUAHAPARQAcAcAAAnQAAAogcAcQgPAQgUAI");
	this.shape.setTransform(7.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgfAoIhBAAIAAhQIBBAAIBHhAQANBkgNBtgAA8gjQAPAAALALQALALAAANQAAAPgLAKQgLALgPAAQAHglgHgig");
	this.shape_1.setTransform(-2.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2.3,1,2).p("AgDiOQAVALATAaQAgAsAAA9QAAA+ggAsQgRAXgVAMQgBABgBABAhEhoQAWAIATATQAfAhAAAsQAAAugfAgQgTATgWAI");
	this.shape_2.setTransform(11.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgiAoIgxAAIgQAAIAAhQIAQAAIAxAAIBHhAQANBkgNBtgAA6goIAIABQAMADAJAIQANANAAAPQAAARgNAMQgJAIgMADIgIABQAIgqgIgng");
	this.shape_3.setTransform(-2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AjCBuIAAjbIGFAAIAADbg");
	this.shape_4.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-10.5,24.2,21);


(lib._15fifteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag0BiQgUgSgDgdIAegDQADAWAMALQAMALARAAQATAAAOgQQAOgPAAgZQAAgYgNgNQgOgOgVAAQgNAAgLAGQgLAGgHAJIgagEIAWh0IBxAAIAAAbIhaAAIgNA9QAVgOAWAAQAeAAAUAVQAVAUAAAhQAAAegSAXQgWAcglAAQggAAgTgRg");
	this.shape.setTransform(8.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag4BoQgVgSgEgeIAugGQACAQALAKQAJAJANAAQANAAALgMQAKgMAAgYQAAgXgKgKQgKgKgQAAQgTAAgRAQIglgGIAXh9IB7AAIAAAsIhXAAIgHApQAQgIAOAAQAfAAAWAWQAWAXAAAkQAAAdgSAYQgXAggqAAQghAAgWgSg");
	this.shape_2.setTransform(9.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._14fourteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape.setTransform(8.3,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_2.setTransform(9.4,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._13thirteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBjQgUgSgDgcIAcgEQAFAXALALQAMALARAAQATAAANgOQAOgNAAgVQAAgTgNgNQgMgMgTAAQgIAAgLACIACgXIAFAAQARAAAOgJQAPgKAAgTQAAgPgKgLQgLgKgPAAQgRAAgLAKQgLALgDAVIgcgGQAFgcASgQQASgPAbAAQATAAAPAIQAQAIAIAOQAJAOAAAPQAAAPgJAMQgHANgQAHQAUAEAMAPQALAOAAAXQAAAegWAUQgWAVggAAQgeAAgUgSg");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag3BpQgVgTgEgeIAtgGQACARAKAKQAJAJAOAAQANAAAKgLQAKgLAAgTQAAgRgKgLQgJgKgOAAQgIAAgMAEIAFgmQASABAKgJQAKgIAAgPQAAgMgHgHQgIgIgLAAQgMAAgIAJQgJAIgBAQIgrgIQAEgWAJgNQAJgNAQgHQAQgIAVAAQAhAAAVAWQARASAAAWQAAAggjATQAVAFAMAPQANAPAAAWQAAAggYAXQgXAWgiAAQghAAgWgTg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._12twelve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape.setTransform(8.5,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_2.setTransform(9,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._11eleven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgPAJQgRAKgNAEIAAgbQAYgLARgQQARgPAHgPIASAAIAADlg");
	this.shape.setTransform(7.7,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgiAMIAAgrQARgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_2.setTransform(8.1,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._10ten = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBdQgXgdABhAQgBgoAJgZQAIgYARgOQAQgNAYAAQASAAAPAIQANAHAJAOQAKAOAFAUQAEAUABAhQgBApgHAYQgJAZgQANQgRAOgZAAQggAAgTgYgAgehNQgPAWAAA3QAAA4AOATQAMATATAAQATAAAOgTQANgTAAg4QAAg4gNgSQgNgSgUgBQgSAAgMAQg");
	this.shape.setTransform(8.8,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag5BhQgVgbAAhGQAAhEAXgeQAVgZAiAAQAjAAAUAZQAYAeAABEQAABFgYAeQgUAZgjAAQgiAAgXgbgAgOhPQgHAFgDAOQgGASAAAqQABArAEAQQAEAQAHAFQAHAGAHAAQAJAAAGgGQAGgFAEgOQAFgSAAgrQAAgqgFgQQgEgQgGgFQgGgFgJAAQgIAAgGAFg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._09nine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgyBmQgRgPgDgbIAbgDQADAUAKAIQAKAJAPAAQAMAAAKgGQAJgGAHgKQAGgKAEgRQAEgQAAgSIAAgGQgIAOgPAIQgPAJgQAAQgcAAgUgWQgTgTAAgiQAAgiAUgWQAVgVAfAAQAVAAATAMQASAMAKAXQAJAVAAArQAAAqgJAbQgKAZgTAOQgTAOgYAAQgbAAgRgPgAgghOQgOAQAAAYQAAAWAOAOQANANATAAQATAAAMgNQANgOAAgYQAAgYgNgOQgNgPgSAAQgSAAgOAPg");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BtQgSgPgFgfIAtgEQACANAHAHQAHAHALAAQAOAAAKgOQAKgNADgqQgSAVgZAAQgdAAgVgWQgUgWAAgjQAAglAWgXQAWgXAiAAQAkABAXAdQAYAcAABBQAABCgZAeQgYAegngBQgdAAgRgPgAgahKQgJAJAAAYQAAAYAKAKQAJALAOAAQAMAAAKgKQAJgLAAgUQAAgXgLgMQgKgMgNAAQgNgBgIALg");
	this.shape_1.setTransform(-0.2,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._08eight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BhQgWgUABgeQgBgWAMgPQALgPAVgFQgRgGgJgNQgJgLABgRQgBgZATgRQASgRAdAAQAdAAATASQASARAAAZQAAAQgIALQgJANgQAGQAUAGALAPQALAQAAAVQABAdgVAUQgVAUgiAAQghAAgUgUgAghAOQgNANABAUQgBAMAGALQAGAMALAFQAMAHALAAQAUAAAOgNQANgNgBgUQAAgVgNgNQgOgNgTAAQgUAAgNANgAgahTQgKALAAAOQAAAQAKAKQAKALAQAAQARAAAKgKQAKgLAAgPQAAgPgKgKQgLgLgQAAQgQAAgKAKg");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BrQgagUAAgkQAAgUAJgRQALgPAVgKQgTgHgIgNQgIgNAAgRQAAgbATgSQATgSAjAAQAiAAATASQATASAAAbQAAASgJANQgJAMgQAHQAVAJALAPQAKAPAAAVQAAAhgWAVQgVAWgkgBQggAAgWgRgAgZAVQgIALAAAOQAAATAJALQALALAOAAQANAAAKgKQAKgLAAgUQAAgQgKgLQgKgLgOAAQgRABgIAMgAgVhPQgIAJAAANQAAAOAIAHQAIAJANgBQAMABAIgJQAIgHAAgOQAAgNgIgJQgHgHgNAAQgNAAgIAHg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._07seven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgpBxQAAgbALgmQAKgnATgiQASgkAVgYIhvAAIAAgbICTAAIAAAWQgWAXgVAmQgWAmgKApQgJAdgCAig");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AguB4QABgzAUg0QATgzAggpIhpAAIAAgsICfAAIAAAiQgUATgUAlQgVAjgKApQgKApAAAgg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._06six = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BbQgWgaAAg7QAAhCAZgdQAVgbAjAAQAcAAARAPQARAQADAaIgbACQgEgQgHgIQgMgMgQAAQgNAAgKAHQgNAKgIATQgHASgBAjQAKgPAPgIQAPgHAPAAQAcgBAUAVQAUAUAAAgQAAAWgKATQgJASgQAKQgRAKgUAAQgiAAgXgagAgdADQgNAOAAAWQAAAPAGAMQAGAOALAHQALAHALAAQASAAANgOQANgPAAgZQAAgYgNgNQgNgMgTAAQgSAAgNAMg");
	this.shape.setTransform(-0.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("Ag5BgQgXgdAAhBQAAhCAYgeQAZgdAnAAQAbAAATAPQASAQAFAdIgtAFQgCgNgHgHQgHgHgLAAQgOAAgKAOQgKANgDAqQARgVAZAAQAeAAAUAWQAVAWAAAjQAAAlgWAXQgWAWgiAAQgkAAgYgcgAgTAHQgJALAAAUQAAAXAKAMQALANAMAAQANAAAJgKQAJgLAAgXQAAgXgKgLQgJgKgOAAQgMAAgKAJg");
	this.shape_1.setTransform(0.1,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._05five = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag0BiQgUgSgDgdIAegDQADAWAMALQAMALARAAQATAAAOgQQAOgPAAgZQAAgYgNgNQgOgOgVAAQgNAAgLAGQgLAGgHAJIgagEIAWh0IBxAAIAAAbIhaAAIgNA9QAVgOAWAAQAeAAAUAVQAVAUAAAhQAAAegSAXQgWAcglAAQggAAgTgRg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("Ag4BoQgVgSgEgeIAugGQACAQALAKQAJAJANAAQANAAALgMQAKgMAAgYQAAgXgKgKQgKgKgPAAQgUAAgRAQIglgGIAXh9IB7AAIAAAsIhXAAIgHApQAQgIAOAAQAfAAAWAWQAWAXAAAkQAAAdgSAYQgXAggqAAQghAAgWgSg");
	this.shape_1.setTransform(0.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.Train2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bell1();
	this.instance.parent = this;
	this.instance.setTransform(114.7,-102.1,1.286,1.286,0,0,180);

	this.instance_1 = new lib.WheelSmall1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-171.8,98,1.286,1.286,0,0,180,0,0.1);

	this.instance_2 = new lib.wheel3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151.4,73.8,3.538,3.538,0,0,180);

	this.instance_3 = new lib.wheel3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(68.1,75.9,3.538,3.538,0,-20.9,159.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("AN8K6IlQACIkAACIinoGICAAAICWAAIHfH/AGgK6Ijon+AFVC9IGJH7AIsK8IknoEAt7q9IAANC");
	this.shape.setTransform(194.9,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5D1908").ss(1,2,1).p("AFNlpIAALeIC9AAIAAregAoJl+QCBEHAKH2IJ7AAIAAr9g");
	this.shape_1.setTransform(33.8,-67.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("Au7K1IAA1pId3AAIAAVpgAj/BsIIOAAIAAguIgYAAIAAo9IngAAIAAI9IgWAAgAE+BqIIPAAIAAgtIgYAAIAAo/InfAAIAAI/IgYAAgAtBBqIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IgZAAg");
	this.shape_2.setTransform(-170.8,-6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8C8484").s().p("AhhGxIAAthIAJAAQF1HEl1Gdg");
	this.shape_3.setTransform(233,-1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkEAhIAAhBIIIAAIAABBg");
	this.shape_4.setTransform(191.5,-35.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ak4MHIAAtgIJxAAIAANggAkHAmIIIAAIAAhCIoIAAgAhxiLIAAlUIDZAAIAAFUgAiPoQIg2j2IGHAAIhPEKg");
	this.shape_5.setTransform(191.8,-36);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3300").s().p("ATiMnIAAgNIAAtCIAAgRIIkAAIAANggAiWMnQFKs5lKr1IUhAAIAAYugACdE1IOdAAIAAiLIudAAgACUBkIJ9AAIAAr9IsHAAQCAEHAKH2gANhBaIC9AAIAArdIi9AAgA7pG2IAAguIAWAAIHhAAIAYAAIAAAugAyrG0IAAgtIAYAAIHeAAIAZAAIAAAtgEgkrAG0IAAgtIAYAAIHgAAIAXAAIAAAtgEAkCgLmImJAAIgmAAIAAhAIHZAAIAABAg");
	this.shape_6.setTransform(-19.3,-39.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D1908").s().p("EAi5AQjIAAhbI5zAAIAAlIIcbAAIAAE1IBHAAIAABugA98P1IAAh2ISEAAIAAB2gAnaPGIAAheIFPAAIAABegEgmnAPGIAAheIFQAAIAABegAjiM9IAAjNIJBAAIAADNgAl9M2IAAhWIBWAAIAABWgEglOAM2IAAhWIBVAAIAABWgAFNBxIAAiKIOcAAIAACKgEgkpgJOIAAhsIfhAAIAABsgAjBvUIAAhOIZnAAIAABOg");
	this.shape_7.setTransform(-36.9,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Train2, new cjs.Rectangle(-284.1,-125.5,569.5,251.1), null);


(lib.smokecloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);
	this.instance.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.1,scaleX:2.34,scaleY:2.34,x:-212.5,y:-124.6,alpha:0.031},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-10.4,41,20.8);


// stage content:
(lib.CCKCC25a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.five05.addEventListener("click", fl_ClickToGoToAndStopAtFrame_25.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_25()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.six06.addEventListener("click", fl_ClickToGoToAndStopAtFrame_26.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_26()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_2 = function() {
		this.seven07.addEventListener("click", fl_ClickToGoToAndStopAtFrame_27.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_27()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		this.eight08.addEventListener("click", fl_ClickToGoToAndStopAtFrame_28.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_28()
		{
			this.gotoAndStop(4);
		}
	}
	this.frame_4 = function() {
		this.nine09.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		this.ten10.addEventListener("click", fl_ClickToGoToAndStopAtFrame_30.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_30()
		{
			this.gotoAndStop(6);
		}
	}
	this.frame_6 = function() {
		this.eleven11.addEventListener("click", fl_ClickToGoToAndStopAtFrame_31.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_31()
		{
			this.gotoAndStop(7);
		}
	}
	this.frame_7 = function() {
		this.twelve12.addEventListener("click", fl_ClickToGoToAndStopAtFrame_32.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_32()
		{
			this.gotoAndStop(8);
		}
	}
	this.frame_8 = function() {
		this.thirteen13.addEventListener("click", fl_ClickToGoToAndStopAtFrame_33.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_33()
		{
			this.gotoAndStop(9);
		}
	}
	this.frame_9 = function() {
		this.fourteen14.addEventListener("click", fl_ClickToGoToAndStopAtFrame_34.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_34()
		{
			this.gotoAndStop(10);
		}
	}
	this.frame_10 = function() {
		this.fifteen15.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(11);
		}
	}
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(42).call(this.frame_52).wait(1));

	// Numbers All
	this.fifteen15 = new lib._15fifteen();
	this.fifteen15.parent = this;
	this.fifteen15.setTransform(455,140.1);
	new cjs.ButtonHelper(this.fifteen15, 0, 1, 2, false, new lib._15fifteen(), 3);

	this.fourteen14 = new lib._14fourteen();
	this.fourteen14.parent = this;
	this.fourteen14.setTransform(560,216.6);
	new cjs.ButtonHelper(this.fourteen14, 0, 1, 2, false, new lib._14fourteen(), 3);

	this.thirteen13 = new lib._13thirteen();
	this.thirteen13.parent = this;
	this.thirteen13.setTransform(508,282.1);
	new cjs.ButtonHelper(this.thirteen13, 0, 1, 2, false, new lib._13thirteen(), 3);

	this.twelve12 = new lib._12twelve();
	this.twelve12.parent = this;
	this.twelve12.setTransform(524.5,400.6);
	new cjs.ButtonHelper(this.twelve12, 0, 1, 2, false, new lib._12twelve(), 3);

	this.eleven11 = new lib._11eleven();
	this.eleven11.parent = this;
	this.eleven11.setTransform(305,401.6);
	new cjs.ButtonHelper(this.eleven11, 0, 1, 2, false, new lib._11eleven(), 3);

	this.ten10 = new lib._10ten();
	this.ten10.parent = this;
	this.ten10.setTransform(354,298.1);
	new cjs.ButtonHelper(this.ten10, 0, 1, 2, false, new lib._10ten(), 3);

	this.nine09 = new lib._09nine();
	this.nine09.parent = this;
	this.nine09.setTransform(316.5,134.6);
	new cjs.ButtonHelper(this.nine09, 0, 1, 2, false, new lib._09nine(), 3);

	this.eight08 = new lib._08eight();
	this.eight08.parent = this;
	this.eight08.setTransform(145.6,406.6);
	new cjs.ButtonHelper(this.eight08, 0, 1, 2, false, new lib._08eight(), 3);

	this.seven07 = new lib._07seven();
	this.seven07.parent = this;
	this.seven07.setTransform(145.1,163.6);
	new cjs.ButtonHelper(this.seven07, 0, 1, 2, false, new lib._07seven(), 3);

	this.six06 = new lib._06six();
	this.six06.parent = this;
	this.six06.setTransform(204,258.6);
	new cjs.ButtonHelper(this.six06, 0, 1, 2, false, new lib._06six(), 3);

	this.five05 = new lib._05five();
	this.five05.parent = this;
	this.five05.setTransform(88.6,254.6);
	new cjs.ButtonHelper(this.five05, 0, 1, 2, false, new lib._05five(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.five05},{t:this.six06},{t:this.seven07},{t:this.eight08},{t:this.nine09},{t:this.ten10},{t:this.eleven11},{t:this.twelve12},{t:this.thirteen13},{t:this.fourteen14},{t:this.fifteen15}]}).to({state:[]},11).wait(42));

	// Numbers
	this.six06_1 = new lib._06six();
	this.six06_1.parent = this;
	this.six06_1.setTransform(204,258.6);
	new cjs.ButtonHelper(this.six06_1, 0, 1, 2, false, new lib._06six(), 3);

	this.seven07_1 = new lib._07seven();
	this.seven07_1.parent = this;
	this.seven07_1.setTransform(145.1,163.6);
	new cjs.ButtonHelper(this.seven07_1, 0, 1, 2, false, new lib._07seven(), 3);

	this.eight08_1 = new lib._08eight();
	this.eight08_1.parent = this;
	this.eight08_1.setTransform(145.6,406.6);
	new cjs.ButtonHelper(this.eight08_1, 0, 1, 2, false, new lib._08eight(), 3);

	this.nine09_1 = new lib._09nine();
	this.nine09_1.parent = this;
	this.nine09_1.setTransform(316.5,134.6);
	new cjs.ButtonHelper(this.nine09_1, 0, 1, 2, false, new lib._09nine(), 3);

	this.ten10_1 = new lib._10ten();
	this.ten10_1.parent = this;
	this.ten10_1.setTransform(354,298.1);
	new cjs.ButtonHelper(this.ten10_1, 0, 1, 2, false, new lib._10ten(), 3);

	this.eleven11_1 = new lib._11eleven();
	this.eleven11_1.parent = this;
	this.eleven11_1.setTransform(305,401.6);
	new cjs.ButtonHelper(this.eleven11_1, 0, 1, 2, false, new lib._11eleven(), 3);

	this.twelve12_1 = new lib._12twelve();
	this.twelve12_1.parent = this;
	this.twelve12_1.setTransform(524.5,400.6);
	new cjs.ButtonHelper(this.twelve12_1, 0, 1, 2, false, new lib._12twelve(), 3);

	this.thirteen13_1 = new lib._13thirteen();
	this.thirteen13_1.parent = this;
	this.thirteen13_1.setTransform(508,282.1);
	new cjs.ButtonHelper(this.thirteen13_1, 0, 1, 2, false, new lib._13thirteen(), 3);

	this.fourteen14_1 = new lib._14fourteen();
	this.fourteen14_1.parent = this;
	this.fourteen14_1.setTransform(560,216.6);
	new cjs.ButtonHelper(this.fourteen14_1, 0, 1, 2, false, new lib._14fourteen(), 3);

	this.fifteen15_1 = new lib._15fifteen();
	this.fifteen15_1.parent = this;
	this.fifteen15_1.setTransform(455,140.1);
	new cjs.ButtonHelper(this.fifteen15_1, 0, 1, 2, false, new lib._15fifteen(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.six06_1}]},1).to({state:[{t:this.seven07_1}]},1).to({state:[{t:this.eight08_1}]},1).to({state:[{t:this.nine09_1}]},1).to({state:[{t:this.ten10_1}]},1).to({state:[{t:this.eleven11_1}]},1).to({state:[{t:this.twelve12_1}]},1).to({state:[{t:this.thirteen13_1}]},1).to({state:[{t:this.fourteen14_1}]},1).to({state:[{t:this.fifteen15_1}]},1).to({state:[]},1).wait(42));

	// Train
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("AGnk0Ij2AAIAAI+IgWAAIAAAtIEMAAAmOEJIgYAAIAAAtIIOAAIAAgtIgYAAIAAo/IneAAIAAI/IHeAAACxEKID2AA");
	this.shape.setTransform(104.7,254.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,2,1).p("AjuEKIgXAAIAAAtIIPAAIAAgtIgZAAIAAo+InfAAIAAI+IHfAAAsuEJIgYAAIAAAtIIOAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAAFREJIgZAAIAAAtIIQAAIAAgtIgZAAIAAo/IneAAIAAI/IHeAA");
	this.shape_1.setTransform(146.4,254.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,2,1).p("AjqGoIgWAAIAAAuIIOAAIAAguIgYAAIAAo9IngAAIAAI9IHgAAAspGoIgZAAIAAAtIIPAAIAAgtIgXAAIAApAInfAAIAAJAIHfAAAO7HXIAAshI93AAIAAMhAFVGoIgYAAIAAAtIIPAAIAAgtIgYAAIAApAInfAAIAAJAIHfAAAPwnVI/fAAIAABrIffAAg");
	this.shape_2.setTransform(145.9,239);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,2,1).p("AtJhmIgZAAIAAAtIIPAAIAAgtIgXAAIAApAInfAAIAAJAIHfAAAkKhlIgWAAIAAAtIIOAAIAAgtIgYAAIAAo/IngAAIAAI/IHgAAAw0IMIBVAAIAAhWIhVAAgAyNKcIFQAAIAAheIlQAAgAjiNuQAAgxgogjQgqglg2AAQg6AAgnAlQgpAjAAAxQAAAwApAjQAnAkA6AAQA2AAAqgkQAogjAAgwgApiLLISDAAIAAh3IyDAAgAvctZIAAVpId3AAIAA1pgAE1hmIgYAAIAAAtIIPAAIAAgtIgYAAIAApAInfAAIAAJAIHfAAAPyIMIAAhWIhWAAIAABWgAC2PBQAmAkA6AAQA3AAApgkQApgjAAgwQAAgxgpgjQgpglg3AAQg6AAgmAlQgqAjAAAxQAAAwAqAjgASOKcIAAheIlQAAIAABegAPQvkI/fAAIAABrIffAAg");
	this.shape_3.setTransform(149.1,291.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,2,1).p("AJPxsQFLL0lLM6IUiAAIAA4ugA4sAhIgZAAIAAAtIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAAvtAiIgWAAIAAAuIIPAAIAAguIgYAAIAAo+InhAAIAAI+IHhAAA8XKUIBVAAIAAhWIhVAAgA9wMkIFQAAIAAheIlQAAgAvFP2QAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAAxApAjQAnAjA6AAQA2AAAqgjQAogjAAgxgA1FNTISEAAIAAh2IyEAAgA6/rQIAAVpId3AAIAA1pgAmtAhIgYAAIAAAtIIOAAIAAgtIgYAAIAAo/IneAAIAAI/IHeAAAEPKUIAAhWIhWAAIAABWgAosRKQAmAjA6AAQA3AAApgjQApgjAAgxQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAAxAqAjgABbLGIAABeIFQAAIAAhegADttcI/fAAIAABsIffAAg");
	this.shape_4.setTransform(223,278);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,2,1).p("AZHvpIAALeIC9AAIAAregAcgi7IucAAIAACLIOcAAgAJPxsQDrIZhjI9QgPBVgWBXQgmCVg9CXIUiAAIAA4ugAX3kBIAAr+IsHAAQCAEIAKH2gA4sAhIgZAAIAAAtIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAAvtAiIgWAAIAAAuIIPAAIAAguIgYAAIAAo+InhAAIAAI+IHhAAA8XKUIBVAAIAAhWIhVAAgA9wMkIFQAAIAAheIlQAAgAvFP2QAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAAxApAjQAnAjA6AAQA2AAAqgjQAogjAAgxgA1FNTISEAAIAAh2IyEAAgA6/rQIAAVpId3AAIAA1pgAmtAhIgYAAIAAAtIIOAAIAAgtIgYAAIAAo/IneAAIAAI/IHeAAAEPKUIAAhWIhWAAIAABWgAosRKQAmAjA6AAQA3AAApgjQApgjAAgxQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAAxAqAjgABbLGIAABeIFQAAIAAhegADttcI/fAAIAABsIffAAg");
	this.shape_5.setTransform(223,278);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,2,1).p("AQQvpIAALeIC9AAIAAregATpgwIAAiLIucAAIAACLgAJGMmIZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgAAYHCIUiAAIAA4uI0iAAQDsIZhkI9QgOBVgXBXQgPA9gUA9QgbBXgjBYQgBABgBACgAPAkBIAAr+IsHAAQCAEIAKH2gEghjAAhIgZAAIAAAtIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAA4kAiIgWAAIAAAuIIPAAIAAguIgYAAIAAo+InhAAIAAI+IHhAAEglOAKUIBVAAIAAhWIhVAAgEgmnAMkIFQAAIAAheIlQAAgA38P2QAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAAxApAjQAnAjA6AAQA2AAAqgjQAogjAAgxgA98NTISEAAIAAh2IyEAAgEgj2gLQIAAVpId4AAIAA1pgAvkAhIgYAAIAAAtIIPAAIAAgtIgYAAIAAo/InfAAIAAI/IHfAAAknKUIAAhWIhWAAIAABWgAxjRKQAmAjA6AAQA3AAApgjQApgjAAgxQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAAxAqAjgAiLMkIAAheIlQAAIAABegAjiKbIJBAAIAAjNIpBAAgAlJtcI/gAAIAABsIfgAAg");
	this.shape_6.setTransform(279.7,278);

	this.instance = new lib.wheel2();
	this.instance.parent = this;
	this.instance.setTransform(467.9,355.3,3.538,3.538,0,0,180);

	this.instance_1 = new lib.wheel2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(384.6,357.4,3.538,3.538,0,-35,145);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,2,1).p("AKfvpIAALeIC9AAIAAregAN4gwIAAiLIubAAIAACLgADVMmIZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgEAiiAHnICWAAIHfH/EAk9APpIjon+EAnJAPrIkAACIinoGICAAAEAsZAPpIlQACIknoEEAjyAHsIGJH7AlYHCIUhAAIAA4uI0hAAQDrIZhjI9QgIAsgJAuQgGAagHAbQgDAPgEAOQgmCVg9CXgAJPkBIAAr+IsGAAQCAEIAKH2gEgnUAAhIgZAAIAAAtIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAA+VAiIgWAAIAAAuIIPAAIAAguIgYAAIAAo+InhAAIAAI+IHhAAEgq/AKUIBVAAIAAhWIhVAAgEgsYAMkIFQAAIAAheIlQAAgA9tP2QAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAAxApAjQAnAjA6AAQA2AAAqgjQAogjAAgxgEgjtANTISEAAIAAh2IyEAAgEgpngLQIAAVpId4AAIAA1pgA1VAhIgYAAIAAAtIIPAAIAAgtIgYAAIAAo/InfAAIAAI/IHfAAAqYKUIAAhWIhWAAIAABWgA3URKQAmAjA6AAQA3AAApgjQApgjAAgxQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAAxAqAjgAn8MkIAAheIlQAAIAABegApTKbIJCAAIAAjNIpCAAgAq6tcI/gAAIAABsIfgAAg");
	this.shape_7.setTransform(316.6,278);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,2,1).p("AKfvpIAALeIC9AAIAAregAN4gwIAAiLIubAAIAACLgAZEmfIojAAIAANhIIjAAIJzAAIAKAAQF1mdl1nEIgKAAIAANhADVMmIZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgAZEmfIAANhEAiiAHnICWAAIHfH/EAk9APpIjon+EAnJAPrIkAACIinoGICAAAEAsZAPpIlQACIknoEEAjyAHsIGJH7AlYHCIUhAAIAA4uI0hAAQDrIZhjI9QgIAwgLAxQgFAXgGAXQgDAPgEAOQgmCVg9CXgAJPkBIAAr+IsGAAQCAEIAKH2gEAi3gGfIpzAAEgnUAAhIgZAAIAAAtIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAA+VAiIgWAAIAAAuIIPAAIAAguIgYAAIAAo+InhAAIAAI+IHhAAEgq/AKUIBVAAIAAhWIhVAAgEgsYAMkIFQAAIAAheIlQAAgA9tP2QAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAAxApAjQAnAjA6AAQA2AAAqgjQAogjAAgxgEgjtANTISEAAIAAh2IyEAAgEgpngLQIAAVpId4AAIAA1pgA1VAhIgYAAIAAAtIIPAAIAAgtIgYAAIAAo/InfAAIAAI/IHfAAAqYKUIAAhWIhWAAIAABWgA3URKQAmAjA6AAQA3AAApgjQApgjAAgxQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAAxAqAjgAn8MkIAAheIlQAAIAABegApTKbIJCAAIAAjNIpCAAgAq6tcI/gAAIAABsIfgAAg");
	this.shape_8.setTransform(316.6,278);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,2,1).p("AcMsUIAAFUIDaAAIAAlUgAa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgEAhAgQ8ImIAAAKfvZIAALeIC9AAIAAregAN4ggIAAiLIubAAIAACLgAZEmPIojAAIAANhIIjAAIJzAAIAKAAQF1mdl1nEIgKAAIAANhADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgAZEmPIAANhEAiiAH3ICWAAIHfH/EAnJAP7IkAACIinoGICAAAEAk9AP5Ijon+EAsZAP5IlQACIknoEEAjyAH8IGJH7EAi3gGPIpzAAAJPjxIAAr+IsGAAQCAEIAKH2gAlYHSIUhAAIAA4uI0hAAQDrIZhjI9QgFAfgHAfQgIApgKApQgDAOgEAOQgmCVg9CXgA+VAyIgWAAIAAAuIIPAAIAAguIgYAAIAAo+InhAAIAAI+IHhAAEgnUAAxIgZAAIAAAtIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAEgq/AKkIBVAAIAAhWIhVAAgEgsYAM0IFQAAIAAheIlQAAgEgjtANjISEAAIAAh2IyEAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAAxApAjQAnAjA6AAQA2AAAqgjQAogjAAgxgEgpngLAIAAVpId4AAIAA1pgA1VAxIgYAAIAAAtIIPAAIAAgtIgYAAA1VAxIHfAAIAAo/InfAAgAqYKkIAAhWIhWAAIAABWgA3URaQAmAjA6AAQA3AAApgjQApgjAAgxQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAAxAqAjgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAgAq6tMI/gAAIAABsIfgAAg");
	this.shape_9.setTransform(316.6,276.4);

	this.instance_2 = new lib.Train2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(316.9,281.5,1,1,0,0,0,0.3,0);
	this.instance_2.alpha = 0.09;
	this.instance_2._off = true;

	this.instance_3 = new lib.bell1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(431.2,179.4,1.286,1.286,0,0,180);

	this.instance_4 = new lib.WheelSmall1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(144.8,379.4,1.286,1.286,0,0,180,0,0.1);

	this.instance_5 = new lib.wheel3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(467.9,355.3,3.538,3.538,0,0,180);

	this.instance_6 = new lib.wheel3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(384.6,357.4,3.538,3.538,0,-20.9,159.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,2,1).p("At7q9IAANCAEFC4ICWAAIHfH/AIsK8IkAACIinoGICAAAAGgK6Ijon+AN8K6IlQACIknoEAFVC9IGJH7");
	this.shape_10.setTransform(511.5,308.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5D1908").ss(1,2,1).p("AFNloIAALdIC9AAIAArdgAoJl+QCAEIAKH1IJ8AAIAAr9g");
	this.shape_11.setTransform(350.4,213.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("Au7K1IAA1pId3AAIAAVpgAj/BsIIOAAIAAgtIgYAAIAAo+IngAAIAAI+IgWAAgAE+BrIIPAAIAAgtIgYAAIAAo/InfAAIAAI/IgYAAgAtBBrIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IgZAAg");
	this.shape_12.setTransform(145.8,275.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8C8484").s().p("AhhGxIAAthIAJAAQF1HEl1Gdg");
	this.shape_13.setTransform(549.5,279.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AkDAhIAAhBIIHAAIAABBg");
	this.shape_14.setTransform(508.1,245.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D1908").s().p("EAi5AQjIAAhbI5zAAIAAlIIcbAAIAAE1IBHAAIAABugA98P1IAAh2ISEAAIAAB2gAnaPGIAAheIFPAAIAABegEgmnAPGIAAheIFQAAIAABegAjiM9IAAjNIJBAAIAADNgAl9M2IAAhWIBWAAIAABWgEglOAM2IAAhWIBVAAIAABWgAFNBxIAAiKIOcAAIAACKgEgkpgJOIAAhsIfgAAIAABsgAjCvUIAAhOIZoAAIAABOg");
	this.shape_15.setTransform(279.7,261.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF3300").s().p("ATjMnIAAgNIAAtCIAAgRIIjAAIAANggAiWMnQFKs5lKr1IUhAAIAAYugACdE1IOdAAIAAiLIudAAgACUBkIJ9AAIAAr9IsHAAQCAEIAKH1gANhBaIC9AAIAArdIi9AAgA7pG1IAAgtIAWAAIHhAAIAYAAIAAAtgAyrG0IAAgtIAYAAIHfAAIAYAAIAAAtgEgkrAG0IAAgtIAZAAIHfAAIAXAAIAAAtgEAkCgLmImJAAIgmAAIAAhAIHZAAIAABAg");
	this.shape_16.setTransform(297.2,242.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("Ak5MHIAAtgIJzAAIAANggAkGAmIIHAAIAAhCIoHAAgAhxiLIAAlUIDZAAIAAFUgAiPoQIg2j2IGHAAIhOEKg");
	this.shape_17.setTransform(508.4,245.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,2,1).p("At7q9IAANCAEFC4ICWAAIHfH/AGgK6Ijon+AIsK8IkAACIinoGICAAAAN8K6IlQACIknoEAFVC9IGJH7");
	this.shape_18.setTransform(511.5,308.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_8},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_9},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_18},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(2).to({alpha:0.238},0).wait(2).to({alpha:0.352},0).wait(2).to({alpha:0.48},0).wait(2).to({alpha:0.609},0).wait(2).to({alpha:0.672},0).wait(2).to({alpha:0.77},0).to({_off:true},2).wait(27));

	// Smoke
	this.instance_7 = new lib.smokecloud();
	this.instance_7.parent = this;
	this.instance_7.setTransform(509.2,158.8,1,1,0,0,0,2,-0.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26).to({_off:false},0).wait(27));

	// Sound Button
	this.instance_8 = new lib.soundFinal();
	this.instance_8.parent = this;
	this.instance_8.setTransform(52.1,40.5,1,1,0,0,0,12.1,10.5);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.soundFinal(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(53));

	// Border
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("Egx/glfMBj/AAAMAAABK/Mhj/AAAg");
	this.shape_19.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319,239,642,482);
// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;