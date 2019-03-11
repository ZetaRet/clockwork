window.package("zetaret.global.packages.clockwork.graphics").internal(
function GraphicText() {
	var o = this,
		a = arguments;
	o.color = 0;
	o.alpha = 1;
	o.stroke = false;
	o.font = "";
	o.textAlign = "";
	o.textBaseline = "";
	o.direction = "";
	o.super(a, true);
	o.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.TEXT;
	var m = {};
	m.toCommandData = function() {
		var d = [o.command, [o.color, o.font, o.alpha, o.stroke, o.textAlign, o.textBaseline, o.direction]];
		return d;
	};
	o.superize(a, m, true, true);
	return o;
});
ProtoSS.staticProps(zetaret.global.packages.clockwork.graphics.GraphicText, {
RTL: "rtl",
LTR: "ltr",
TOP: "top",
HANGING: "hanging",
MIDDLE: "middle",
ALPHABETIC: "alphabetic",
IDEOGRAPHIC: "ideographic",
BOTTOM: "bottom"
});