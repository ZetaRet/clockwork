window.package("zetaret.global.packages.clockwork.graphics").internal(
function GraphicPath() {
	var o = this,a=arguments;
	o.commands=[];
	o.data=[];
	o.winding="";
	o.closeAfter=false;
	o.autoClose=false;
	o.super(a, true);
	o.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.PATH;
	var m = {};
	m.cubicCurveTo=function(cx1,cy1,cx2,cy2,ax,ay){
		var c=new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data=[cx1,cy1,cx2,cy2,ax,ay];
		c.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.CUBIC_CURVE_TO;
		o.commands.push(c);
		return o;
	};
	m.curveTo=function(cx,cy,ax,ay){
		var c=new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data=[cx,cy,ax,ay];
		c.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.CURVE_TO;
		o.commands.push(c);
		return o;
	};
	m.lineTo=function(x,y){
		var c=new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data=[x,y];
		c.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.LINE_TO;
		o.commands.push(c);
		return o;
	};
	m.moveTo=function(x,y){
		var c=new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data=[x,y];
		c.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.MOVE_TO;
		o.commands.push(c);
		return o;
	};
	m.arc=function(x,y,r,startAngle,endAngle,anticlockwise){
		var c=new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data=[x,y,r,startAngle,endAngle,anticlockwise];
		c.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.ARC;
		o.commands.push(c);
		return o;
	};
	m.arcTo=function(x1,y1,x2,y2,r){
		var c=new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data=[x1,y1,x2,y2,r];
		c.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.ARC_TO;
		o.commands.push(c);
		return o;
	};
	m.rect=function(x,y,w,h){
		var c=new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data=[x,y,w,h];
		c.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.RECT;
		o.commands.push(c);
		return o;
	};
	m.ellipse=function(x,y,rx,ry,rotation,startAngle,endAngle,anticlockwise){
		var c=new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data=[x,y,rx,ry,rotation,startAngle,endAngle,anticlockwise];
		c.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.ELLIPSE;
		o.commands.push(c);
		return o;
	};
	m.circle=function(x,y,r){
		var c=new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data=[x,y,r,0,Math.PI*2];
		c.command=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.ARC;
		o.commands.push(c);
		return o;
	};
	m.toCommandData=function(){
		var d=[],cs=o.commands,cl=cs.length,c;
		while(cl--){
			c=cs[cl];
			d[cl]=[c.command,c.data];
		}
		return d;
	};
	o.superize(a, m, true, true);
	return o;
}
);
ProtoSS.staticProps(zetaret.global.packages.clockwork.graphics.GraphicPath,{EVEN_ODD:"evenOdd",NON_ZERO:"nonZero"});
