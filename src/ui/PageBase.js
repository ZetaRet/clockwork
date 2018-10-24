window.package("zetaret.global.packages.clockwork.ui").internal(
function PageBase() {
	var o = this,a=arguments;
	o.destroyed=false;
	o.autoDestroy=true;
	o.pageInited=false;
	o.Data=null;
	o.super(a, null);
	var m = {};
	m.onPageInit=function(event){
		o.pageInited=true;
		o.initPage();
	};
	m.onPageInit._p=1;
	m.initPage=function(){
		
	};
	m.onInit=function(event){
		o.removeEventListener("addedToStage", o.onInit);
		if(o.stage)
			o.stage.addEventListener("resize", o.onStageResize);
		o.Init();
		o.onStageResize();
	};
	m.onInit._p=1;
	m.onDestroy=function(event){
		if (o.autoDestroy){
			if (o.destroyed)return;
			o.Destroy();
		}
	};
	m.onDestroy._p=1;
	m.resizeStage=function(width, height){
		
	};
	m.onStageResize=function(event){
		if(o.stage)
			o.resizeStage(o.stage.stageWidth, o.stage.stageHeight);
	};
	m.onStageResize._p=1;
	m.Init=function(data){
		o.Data=data;
		o.Build();
	};
	m.Build=function(){
		
	};
	m.UpdateSize=function(){
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("resize"));
		return o;
	};
	m.BeforeDestroy=function(){
		
	};
	m.Destroy=function(){
		if (o.stage)
			o.stage.removeEventListener("resize", o.onStageResize);
		o.destroyed=true;
		o._destructor();
	};
	m._constructor=function(){
		o.addEventListener("addedToStage", o.onInit);
		o.addEventListener("removedFromStage", o.onDestroy);
		o.addEventListener("pageInit", o.onPageInit);
	};
	m._destructor=function(){
		o.removeEventListener("addedToStage", o.onInit);
		o.removeEventListener("removedFromStage", o.onDestroy);
		o.removeEventListener("pageInit", o.onPageInit);
	};
	o.superize(a, m, true, true);
	m._constructor.call(o);
	return o;
}
);
