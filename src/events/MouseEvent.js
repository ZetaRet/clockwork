window.package("zetaret.global.packages.clockwork.events").internal(
function MouseEvent(type, target) {
	var o = this,a=arguments;
	o.x=0;
	o.y=0;
	o.ox=0;
	o.oy=0;
	o.lx=0;
	o.ly=0;
	o.keys=null;
	o.super(a,true);
	var m = {};
	m.getX=function(){
		return o.x;
	};
	m.getY=function(){
		return o.y;
	};
	m.getLocalX=function(){
		return o.lx;
	};
	m.getLocalY=function(){
		return o.ly;
	};
	m.getOffsetX=function(){
		return o.ox;
	};
	m.getOffsetY=function(){
		return o.oy;
	};
	m.getKeys=function(){
		return o.keys;
	};
	m.getXY=function(){
		return [o.x,o.y,o.lx,o.ly,o.ox,o.oy];
	};
	m.setNativeEvent=function(e){
		o.nativeEvent=e;
		o.x=e.clientX;
		o.y=e.clientY;
		o.ox=e._capabilities&&e._capabilities.oxkey?e[e._capabilities.oxkey]:e.offsetX;
		o.oy=e._capabilities&&e._capabilities.oykey?e[e._capabilities.oykey]:e.offsetY;
		o.lx=e.pageX;
		o.ly=e.pageY;
		return o;
	};
	o.superize(a, m, true, true);
	return o;
}
);
ProtoSS.eventProps(zetaret.global.packages.clockwork.events.MouseEvent,["x","y","ox","oy","lx","ly","keys"]);
