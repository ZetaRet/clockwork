window.package("zetaret.global.packages.clockwork.ui").internal(
function SimpleScrollpane(){
	var o = this, a = arguments;
	o.vscrollbar=new zetaret.global.packages.clockwork.ui.Scrollbar();
	o.hscrollbar=new zetaret.global.packages.clockwork.ui.Scrollbar();
	o.super(a, null);
	var m = {};
	m.initScrollpane=function(width, height){
		o.callProtoX(zetaret.global.packages.clockwork.ui.Scrollpane,"initScrollpane",arguments);
		o.addChild(o.vscrollbar);
		o.vscrollbar.horizontal=false;
		o.vscrollbar.initBar(0.25*height,height);
		o.vscrollbar.moveTo(width,0);
		o.vscrollbar.addEventListener("change",o.onVScroll);
		o.addChild(o.hscrollbar);
		o.hscrollbar.horizontal=true;
		o.hscrollbar.initBar(0.25*width,width);
		o.hscrollbar.moveTo(0,height);
		o.hscrollbar.addEventListener("change",o.onHScroll);
		o.container.addEventListener("wheel",o.onWheel);
		o.bg.addEventListener("wheel",o.onWheel);
		return o;
	};
	m.onWheel=function(e,s){
		e.preventDefault();
		var t=e.nativeEvent.deltaY/100;
		if(Math.abs(t)<1)t=t<0?-1:1;
		if(o.isVScroll())o.vscrollbar.setScroll(o.vscrollbar.position+o.vscrollbar.wheelsize*t);
		else if(o.isHScroll())o.hscrollbar.setScroll(o.hscrollbar.position+o.hscrollbar.wheelsize*t);
	};
	m.onWheel._p=1;
	m.onVScroll=function(e,d){
		o.setScrollP(undefined,o.vscrollbar.percentage);
	};
	m.onVScroll._p=1;
	m.onHScroll=function(e,d){
		o.setScrollP(o.hscrollbar.percentage);
	};
	m.onHScroll._p=1;
	m.destruct=function(){
		o.callProtoX(zetaret.global.packages.clockwork.ui.Scrollpane,"destruct",arguments);
		o.vscrollbar.destruct();
		o.vscrollbar=null;
		o.hscrollbar.destruct();
		o.hscrollbar=null;
	};
	o.superize(a, m, true, true);
	return o;
});
