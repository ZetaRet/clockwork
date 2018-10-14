window.package("zetaret.global.packages.clockwork.ui").internal(
function LabelButton() {
	var o = this,a=arguments;
	o.label=null;
	o.super(a, null);
	var m = {};
	m.initLabelButton=function(name){
		o.name=name;
		o.buttonMode(true,true);
		o.addButtonShape("bg");
		o.label=new zetaret.global.packages.clockwork.ui.TextField();
		o.label.name="label";
		o.label.autoRenderText=true;
		o.addChild(o.label);
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("initLabelButton"));
		return o;
	};
	m.destruct=function(){
		o.callProtoX(ZetaRet_EventDispatcher,"destruct");
		if(o.label){
			o.label.destruct();
			o.label=null;
		}
	};
	o.superize(a, m, true, true);
	return o;
});
