window.package("zetaret.global.packages.clockwork.color").internal(
function HSB(hue, saturation, brightness) {
	var o = this,
		a = arguments;
	o.Hue = hue || 0;
	o.Saturation = saturation || 0;
	o.Brightness = brightness || 0;
	o.ColorUtil = zetaret.global.packages.clockwork.color.utils.ColorUtil;
	var m = {};
	m.Normalize = function() {
		o.Hue = o.ColorUtil.ToPercent(o.Hue);
		o.Saturation = o.ColorUtil.ToPercent(o.Saturation);
		o.Brightness = o.ColorUtil.ToPercent(o.Brightness);
		return o;
	};
	m.FromHSL = function(hsl) {
		o.FromHSB(o.ColorUtil.HSL2HSB(hsl.Hue, hsl.Saturation, hsl.Luminosity));
		return o;
	};
	m.FromHSB = function(hsb) {
		o.Hue = hsb.Hue;
		o.Saturation = hsb.Saturation;
		o.Brightness = hsb.Brightness;
		return o;
	};
	m.FromRGB = function(rgb) {
		o.FromHSB(rgb.ToHSB());
		return o;
	};
	m.FromColor = function(color) {
		o.FromHSB(o.ColorUtil.Color2HSB(color));
		return o;
	};
	m.ToRGB = function() {
		return o.ColorUtil.HSB2RGB(o.Hue, o.Saturation, o.Brightness);
	};
	m.ToColor = function() {
		return o.ColorUtil.HSB2Color(o);
	};
	m.ToHSB = function() {
		return new zetaret.global.packages.color.HSB(o.Hue, o.Saturation, o.Brightness);
	};
	m.ToHSL = function() {
		return o.ColorUtil.HSB2HSL(o.Hue, o.Saturation, o.Brightness);
	};
	m.toString = function() {
		return 'Hue:' + o.Hue + ',Saturation:' + o.Saturation + ',Brightness:' + o.Brightness;
	};
	o.superize(a, m, true, true);
	return o;
});