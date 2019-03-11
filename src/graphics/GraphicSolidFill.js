window.package("zetaret.global.packages.clockwork.graphics").internal(
function GraphicSolidFill() {
	var o = this,
		a = arguments;
	o.color = 0;
	o.super(a, true);
	o.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.SOLID_FILL;
	var m = {};
	m.toCommandData = function() {
		return [o.command, [o.color]];
	};
	o.superize(a, m, true, true);
	return o;
});