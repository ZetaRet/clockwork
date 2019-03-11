window.package("zetaret.global.packages.clockwork.graphics").internal(
function GraphicStroke() {
	var o = this,
		a = arguments;
	o.color = 0;
	o.alpha = 1;
	o.caps = "";
	o.fill = null;
	o.joints = "";
	o.miterLimit = 0;
	o.pixelHinting = false;
	o.scaleMode = "";
	o.thickness = 0;
	o.offset = 0;
	o.super(a, true);
	o.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.LINE;
	var m = {};
	m.toCommandData = function() {
		return [o.command, [o.fill || o.color, o.alpha, o.thickness, o.caps, o.joints, o.miterLimit, o.offset]];
	};
	o.superize(a, m, true, true);
	return o;
});
ProtoSS.staticProps(zetaret.global.packages.clockwork.graphics.GraphicStroke, {
NONE: "none",
ROUND: "round",
SQUARE: "square",
MITER: "miter",
BEVEL: "bevel",
HORIZONTAL: "horizontal",
VERTICAL: "vertical"
});