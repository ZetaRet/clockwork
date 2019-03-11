window.package("zetaret.global.packages.clockwork.color").internal(
function ColorTransform(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
	var o = this,
		a = arguments;
	o.redMultiplier = redMultiplier || 0;
	o.greenMultiplier = greenMultiplier || 0;
	o.blueMultiplier = blueMultiplier || 0;
	o.alphaMultiplier = alphaMultiplier || 0;
	o.redOffset = redOffset || 0;
	o.greenOffset = greenOffset || 0;
	o.blueOffset = blueOffset || 0;
	o.alphaOffset = alphaOffset || 0;
	o.color = 0;
	o.super(a, true);
	var m = {};
	m.identity = function() {
		o.redMultiplier = 1;
		o.greenMultiplier = 1;
		o.blueMultiplier = 1;
		o.alphaMultiplier = 1;
		o.redOffset = 0;
		o.greenOffset = 0;
		o.blueOffset = 0;
		o.alphaOffset = 0;
		o.color = 0;
		return o;
	};
	m.nullify = function() {
		o.redMultiplier = 0;
		o.greenMultiplier = 0;
		o.blueMultiplier = 0;
		o.alphaMultiplier = 0;
		o.redOffset = 0;
		o.greenOffset = 0;
		o.blueOffset = 0;
		o.alphaOffset = 0;
		o.color = 0;
		return o;
	};
	m.concat = function(ct) {
		o.redMultiplier *= ct.redMultiplier;
		o.greenMultiplier *= ct.greenMultiplier;
		o.blueMultiplier *= ct.blueMultiplier;
		o.alphaMultiplier *= ct.alphaMultiplier;
		o.redOffset += ct.redOffset;
		o.greenOffset += ct.greenOffset;
		o.blueOffset += ct.blueOffset;
		o.alphaOffset += ct.alphaOffset;
		return o;
	};
	m.toArr = function() {
		return [o.redMultiplier, o.greenMultiplier, o.blueMultiplier, o.alphaMultiplier, o.redOffset, o.greenOffset, o.blueOffset, o.alphaOffset];
	};
	o.superize(a, m, true, true);
	return o;
});