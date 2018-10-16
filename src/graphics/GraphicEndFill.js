window.package("zetaret.global.packages.clockwork.graphics").internal(
function GraphicEndFill() {
	var o = this,a=arguments;
	o.resetColorTransform=false;
	o.fillRule=zetaret.global.packages.clockwork.graphics.GraphicEndFill.NONZERO;
	o.stroke=false;
	o.resetColor=false;
	o.resetStroke=false;
	o.commandResetColor=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.RESET_COLOR;
	o.commandResetStroke=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.RESET_STROKE;
	o.commandStroke=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.STROKE;
	o.super(a, true);
	o.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.END_FILL;
	var m = {};
	m.toCommandData=function(){
		var d=[];
		d[0]=[o.command,[o.fillRule]];
		if(o.stroke)d.push([o.commandStroke,null]);
		if(o.resetColor)d.push([o.commandResetColor,[o.resetColorTransform]]);
		if(o.resetStroke)d.push([o.commandResetColor, null]);
		return d;
	};
	o.superize(a, m, true, true);
	return o;
}
);
ProtoSS.staticProps(zetaret.global.packages.clockwork.graphics.GraphicEndFill,{NONZERO:"nonzero", EVENODD:"evenodd"});
