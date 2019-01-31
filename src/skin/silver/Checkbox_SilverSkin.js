window.package("zetaret.global.packages.clockwork.skin.silver").internal(
function Checkbox_SilverSkin() {
	var o = this,a=arguments;
	o.super(a, null);
	var m = {};
	m.initSkin=function(target, skindata){
		var skinc=new zetaret.global.packages.clockwork.ui.SkinnableComponent();
		skinc.setSkin("silver", o, ["bg","checkBtn","txt"], skindata)
			.setSkinTarget(target).skinme();
		target.addEventListener("change",o.onChange);
		target.addEventListener("updateSkin",o.onUpdateSkin);
		return skinc;
	};
	m.onChange=function(e,d){
		e.target.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("updateSkin"));
	};
	m.onChange._p=1;
	m.onUpdateSkin=function(e,d){

	};
	m.onUpdateSkin._p=1;
	m.bg=function(skin, target, sdata, scomp){
		if(skin){
		skin.graphics.clear();
		skin.graphics.beginFill(sdata.bgcolor,0)
			.drawRoundRect(0,0,sdata.closesize+sdata.margin+sdata.cbtxtx+sdata.cbtxtstyle.width,sdata.closesize,sdata.cbradius,sdata.cbradius,sdata.cbradius,sdata.cbradius)
			.endFill();
		}
		return o;
	};
	m.checkBtn=function(skin, target, sdata, scomp){
		var sh=skin.getChildByName("bg");
		var mc=Math.round(sdata.closesize*0.3);
		sh.graphics.clear();
		sh.graphics.beginFill(sdata.bgcolor)
			.drawRoundRect(0,0,sdata.closesize,sdata.closesize,sdata.cbradius,sdata.cbradius,sdata.cbradius,sdata.cbradius).endFill();
		if(target.checked){
			sh.graphics.lineStyle(sdata.cbradius,sdata.strokecolor).moveTo(mc,mc).lineTo(sdata.closesize-mc,sdata.closesize-mc)
			.moveTo(sdata.closesize-mc,mc).lineTo(mc,sdata.closesize-mc).stroke();
		}
		return o;
	};
	m.txt=function(skin, target, sdata, scomp){
		skin.setStyle(sdata.cbtxtstyle);
		skin.x=sdata.closesize+sdata.margin+sdata.cbtxtx;
		skin.y=sdata.cbtxty;
		skin.invalidateTransform=true;
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});
