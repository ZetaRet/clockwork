window.package("zetaret.global.packages.clockwork.graphics").internal(
function GraphicBitmapFill() {
	var o = this,
		a = arguments;
	o.bitmapData = null;
	o.matrix = null;
	o.repeat = null;
	o.smooth = null;
	o.alpha = 1;
	o.stroke = false;
	o.imgid = "";
	o.super(a, true);
	o.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.PATTERN;
	var m = {};
	m.toCommandData = function() {
		var d = [o.bitmapData, o.repeat, o.alpha, o.matrix, o.stroke, o.imgid];
		return [o.command, d];
	};
	o.superize(a, m, true, true);
	return o;
});
ProtoSS.staticProps(zetaret.global.packages.clockwork.graphics.GraphicBitmapFill, {
REPEAT: "repeat",
REPEAT_X: "repeat-x",
REPEAT_Y: "repeat-y",
NO_REPEAT: "no-repeat"
});