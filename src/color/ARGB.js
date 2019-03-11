window.package("zetaret.global.packages.clockwork.color").internal(
function ARGB(red, green, blue, alpha) {
	var o = this,
		a = arguments;
	o.Alpha = alpha || 0;
	o.super(a, true);
	var m = {};
	m.Normalize = function() {
		o.callSuper('Normalize', arguments);
		o.Alpha = o.ColorUtil.ToHex(o.Alpha);
		return o;
	};
	m.FromColor = function(color) {
		o.Alpha = o.ColorUtil.GetAlpha(color);
		o.callSuper('FromColor', arguments);
		return o;
	};
	m.ToColor = function() {
		return o.ColorUtil.FromARGB(o.Alpha, o.Red, o.Green, o.Blue);
	};
	m.toString = function() {
		return 'Red:' + o.Red + ',Green:' + o.Green + ',Blue:' + o.Blue + ',Alpha:' + o.Alpha;
	};
	o.superize(a, m, true, true);
	return o;
});