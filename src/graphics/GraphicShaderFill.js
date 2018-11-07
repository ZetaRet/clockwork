window.package("zetaret.global.packages.clockwork.graphics").internal(
function GraphicShaderFill() {
	var o = this,a=arguments;
	o.matrix=null;
	o.shader=null;
	o.data=null;
	o.xoffset=0;
	o.yoffset=0;
	o.x=0;
	o.y=0;
	o.width=0;
	o.height=0;
	o.byteCode=null;
	o.precisionHint="";
	o.super(a, true);
	o.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.SHADER;
	var m = {};
	m.toCommandData=function(){
		if(o.data)o.data.shaderMatrix=matrix;
		var d=[o.shader, o.byteCode, o.precisionHint, o.x, o.y, o.width, o.height, o.data, o.x, o.y, o.xoffset, o.yoffset, o.width, o.height];
		return [o.command, d];
	};
	o.superize(a, m, true, true);
	return o;
}
);
