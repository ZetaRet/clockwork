window.package("zetaret.global.packages.clockwork.color").internal(
function RGB(red,green,blue) {
	var o = this,a=arguments;
	o.Red=red||0;
	o.Green=green||0;
	o.Blue=blue||0;
	o.ColorUtil=zetaret.global.packages.clockwork.color.utils.ColorUtil;
	o.super(a,true);
	var m = {};
	m.Normalize=function(){
		o.Red=o.ColorUtil.ToHex(o.Red);
		o.Green=o.ColorUtil.ToHex(o.Green);
		o.Blue=o.ColorUtil.ToHex(o.Blue);
		return o;
	};
	m.FromRGB=function(rgb){
		o.Red=rgb.Red;
		o.Green=rgb.Green;
		o.Blue=rgb.Blue;
		return o;
	};
	m.FromHSL=function(hsl){
		o.FromRGB(hsl.ToRGB());
		return o;
	};
	m.FromHSB=function(hsb){
		o.FromRGB(hsb.ToRGB());
		return o;
	};
	m.FromColor=function(color){
		o.Red=o.ColorUtil.GetRed(color);
		o.Green=o.ColorUtil.GetGreen(color);
		o.Blue=o.ColorUtil.GetBlue(color);
		return o;
	};
	m.ToColor=function(){
		return o.ColorUtil.FromRGB(o.Red, o.Green, o.Blue);
	};
	m.ToHSB=function(){
		return o.ColorUtil.RGB2HSB(o.Red, o.Green, o.Blue);
	};
	m.ToHSL=function(){
		return o.ColorUtil.RGB2HSL(o.Red, o.Green, o.Blue);
	};
	m.ToRGB=function(){
		return new zetaret.global.packages.color.RGB(o.Red, o.Green, o.Blue);
	};
	m.toString=function(){
		return 'Red:'+o.Red+',Green:'+o.Green+',Blue:'+o.Blue;
	};
	o.superize(a, m, true, true);
	return o;
}
);
