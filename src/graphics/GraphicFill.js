window.package("zetaret.global.packages.clockwork.graphics").internal(
function GraphicFill() {
	var o = this,a=arguments;
	o.color=0;
	o.alpha=1;
	o.super(a, true);
	o.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.BEGIN_FILL;
	var m = {};
	m.toCommandData=function(){
		return [o.command,[o.color, o.alpha]];
	};
	o.superize(a, m, true, true);
	return o;
}
);
