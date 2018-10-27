window.package("zetaret.global.packages.clockwork.graphics").internal(
function GraphicGradientFill() {
	var o = this,a=arguments;
	o.alpha=1;
	o.alphas=null;
	o.colors=null;
	o.focalPointRatio=0;
	o.interpolationMethod="";
	o.matrix=null;
	o.ratios=null;
	o.spreadMethod="";
	o.type="";
	o.stroke=false;
	o.gid="";
	o.gradient=null;
	o.alphacolors=null;
	o.commandLinear=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.LINEAR_GRADIENT;
	o.commandRadial=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.RADIAL_GRADIENT;
	o.super(a, true);
	var m = {};
	m.computeGradient=function(){
		o.command=o.type===zetaret.global.packages.clockwork.graphics.GraphicGradientFill.RADIAL ? o.commandRadial : o.commandLinear;
		var ac=[],r=o.ratios,cs=o.colors,cl=cs.length,c,fp;
		while(cl--){
			c=cs[cl];
			fp=r[cl];
			ac[cl]=[fp,c];
		}
		ac.ratios=r;
		ac.alphas=o.alphas;
		ac.focalPointRatio=o.focalPointRatio;
		ac.interpolationMethod=o.interpolationMethod;
		ac.spreadMethod=o.spreadMethod;
		ac.matrix=o.matrix;
		o.alphacolors=ac;
		return o;
	};
	m.toCommandData=function(){
		var c=o.command;
		var d=[o.gradient, o.alphacolors, o.alpha, o.stroke, o.gid];
		return [c, d];
	};
	o.superize(a, m, true, true);
	return o;
}
);
ProtoSS.staticProps(zetaret.global.packages.clockwork.graphics.GraphicGradientFill,{RGB:"rgb",LINEAR:"linear",RADIAL:"radial",REFLECT:"reflect",PAD:"pad",REPEAT:"repeat"});
