window.package("zetaret.global.packages.clockwork.ui").internal(
function Checkbox() {
	var o = this,a=arguments;
	o.checked=false;
	o.value=null;
	o.bg=new zetaret.global.packages.clockwork.ui.Shape();
	o.checkBtn=new zetaret.global.packages.clockwork.ui.ButtonContainer();
	o.txt=new zetaret.global.packages.clockwork.ui.TextField();
	o.bgcheck=false;
	o.autoInvalidateStage=true;
	o.super(a, null);
	var m = {};
	m.initBox=function(check, label){
		o.bg.name="bg";
		o.addChild(o.bg);
		if(o.bgcheck)o.bg.addEventListener("click",o.onCheckClick);
		if(check){
			o.checkBtn.name="close";
			o.checkBtn.buttonMode(true,true);
			o.checkBtn.addButtonShape("bg");
			o.checkBtn.addButtonShape("check");
			o.addChild(o.checkBtn);
			o.checkBtn.addEventListener("click",o.onCheckClick);
		}
		if(label){
			o.txt.name="label";
			o.txt.autoRenderText=true;
			o.addChild(o.txt);
		}
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("initBox"));
		if(o.autoInvalidateStage && o.stage)o.stage.invalidate=true;
		return o;
	};
	m.onCheckClick=function(e,d){
		o.checked=!o.checked;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("change"));
		if(o.autoInvalidateStage && o.stage)o.stage.invalidate=true;
	};
	m.onCheckClick._p=1;
	m.check=function(val){
		if(o.checked!==val){
			o.checked=val;
			if(o.autoInvalidateStage && o.stage)o.stage.invalidate=true;
			o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("check"));
			return true;
		}
		return false;
	};
	m.change=function(){
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("change"));
		return o;
	};
	m.destruct=function(){
		if(o.bg.graphics){
			o.bg.graphics.clear();
			o.bg.graphics=null;
		}
		o.bg.destruct();
		o.txt.destruct();
		var cbg=o.checkBtn.getChildByName('bg');
		if(cbg){
			if(cbg.graphics)cbg.graphics.clear();
			cbg.destruct();
		}
		var cch=o.checkBtn.getChildByName('check');
		if(cch){
			if(cch.graphics)cch.graphics.clear();
			cch.destruct();
		}
		o.bg=null;
		o.txt=null;
		o.checkBtn=null;
	};
	o.superize(a, m, true, true);
	return o;
});
