window.package("zetaret.global.packages.clockwork.color").internal(
function HSL(hue,saturation,luminosity) {
	var o = this,a=arguments;
	o.Hue=hue||0;
	o.Saturation=saturation||0;
	o.Luminosity=luminosity||0;
	o.ColorUtil=zetaret.global.packages.clockwork.color.utils.ColorUtil;
	var m = {};
	m.Normalize=function(){
		o.Hue=o.ColorUtil.ToPercent(o.Hue);
		o.Saturation=o.ColorUtil.ToPercent(o.Saturation);
		o.Luminosity=o.ColorUtil.ToPercent(o.Luminosity);
		return o;
	};
	m.FromHSL=function(hsl){
		o.Hue=hsl.Hue;
		o.Saturation=hsl.Saturation;
		o.Luminosity=hsl.Luminosity;
		return o;
	};
	m.FromHSB=function(hsb){
		o.FromHSL(o.ColorUtil.HSB2HSL(hsb.Hue, hsb.Saturation, hsb.Brightness));
		return o;
	};
	m.FromRGB=function(rgb){
		o.FromHSL(rgb.ToHSL());
		return o;
	};
	m.FromColor=function(color){
		o.FromHSL(o.ColorUtil.Color2HSL(color));
		return o;
	};
	m.ToRGB=function(){
		return o.ColorUtil.HSL2RGB(o.Hue, o.Saturation, o.Luminosity);
	};
	m.ToColor=function(){
		return o.ColorUtil.HSL2Color(o);
	};
	m.ToHSB=function(){
		return o.ColorUtil.HSL2HSB(o.Hue, o.Saturation, o.Luminosity);
	};
	m.ToHSL=function(){
		return new zetaret.global.packages.color.HSL(o.Hue, o.Saturation, o.Luminosity);
	};
	m.toString=function(){
		return 'Hue:'+o.Hue+',Saturation:'+o.Saturation+',Luminosity:'+o.Luminosity;
	};
	o.superize(a, m, true, true);
	return o;
}
);
