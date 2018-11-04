window.package("zetaret.global.packages.clockwork.ui").internal(
function Window() {
	var o = this,a=arguments;
	o.title="";
	o.windowId="";
	o.parentWindow=null;
	o.windowWidth=0;
	o.windowHeight=0;
	o.bg=new zetaret.global.packages.clockwork.ui.Shape();
	o.header=new zetaret.global.packages.clockwork.ui.ButtonContainer();
	o.sidebar=new zetaret.global.packages.clockwork.ui.SimpleScrollpane();
	o.body=new zetaret.global.packages.clockwork.ui.SimpleScrollpane();
	o.details=new zetaret.global.packages.clockwork.ui.SimpleScrollpane();
	o.footer=new zetaret.global.packages.clockwork.ui.ButtonContainer();
	o.topcontainer=new zetaret.global.packages.clockwork.ui.DisplayObjectContainer();
	o.autoInvalidateStage=true;
	o.super(a, null);
	var m = {};
	m.initWindow=function(width, height, header, footer, sidebar, details){
		o.windowWidth=width;
		o.windowHeight=height;
		o.bg.resetGraphics();
		o.addChild(o.bg);
		o.addChild(o.body);
		o.addChild(o.sidebar);
		if(!sidebar)o.sidebar.visible=false;
		o.addChild(o.details);
		if(!details)o.details.visible=false;
		o.addChild(o.footer);
		if(!footer)o.footer.visible=false;
		o.footer.buttonMode(true,true);
		o.addChild(o.header);
		if(!header)o.header.visible=false;
		o.header.buttonMode(true,true);
		o.addChild(o.topcontainer);
		if(o.autoInvalidateStage && o.stage)o.stage.invalidate=true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("initWindow"));
		return o;
	};
	m.destruct=function(){
		if(o.bg.graphics){
			o.bg.graphics.clear();
			o.bg.graphics=null;
		}
		o.bg=null;
		o.header=null;
		o.sidebar.destruct();
		o.sidebar=null;
		o.body.destruct();
		o.body=null;
		o.details.destruct();
		o.details=null;
		o.footer=null;
		o.topcontainer=null;
	};
	o.superize(a, m, true, true);
	return o;
});
