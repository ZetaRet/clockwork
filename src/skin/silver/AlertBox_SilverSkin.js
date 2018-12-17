window.package("zetaret.global.packages.clockwork.skin.silver").internal(
function AlertBox_SilverSkin() {
	var o = this,a=arguments;
	o.super(a, null);
	var m = {};
	m.initSkin=function(target, skindata){
		var skinc=new zetaret.global.packages.clockwork.ui.SkinnableComponent();
		skinc.setSkin("silver", o, ["bg","yesBtn","noBtn","closeBtn","txt","icon"], skindata)
			.setSkinTarget(target).skinme();
		target.addEventListener("updateSkin",o.onUpdateSkin);
		target.yesBtn.addEventListener("mouseover",function(e,d){
			o.onBtnHover(e.target, skindata);
			target.stage.invalidate=true;
		});
		target.yesBtn.addEventListener("mouseout",function(e,d){
			o.onBtnUnhover(e.target, skindata);
			target.stage.invalidate=true;
		});
		target.noBtn.addEventListener("mouseover",function(e,d){
			o.onBtnHover(e.target, skindata);
			target.stage.invalidate=true;
		});
		target.noBtn.addEventListener("mouseout",function(e,d){
			o.onBtnUnhover(e.target, skindata);
			target.stage.invalidate=true;
		});
		return skinc;
	};
	m.onBtnHover=function(btn, sdata){
		var txt=btn.getChildByType(zetaret.global.packages.clockwork.ui.TextField,true);
		txt.addStyle(sdata["btxtstyle:hover"]).applyStyles();
	};
	m.onBtnUnhover=function(btn, sdata){
		var txt=btn.getChildByType(zetaret.global.packages.clockwork.ui.TextField,true);
		txt.removeStyle(sdata["btxtstyle:hover"]).applyStyles();
	};
	m.onUpdateSkin=function(e,d){
		
	};
	m.onUpdateSkin._p=1;
	m.bg=function(skin, target, sdata, scomp){
		skin.resetGraphics();
		skin.graphics.beginFill(sdata.color).drawRoundRect(0,0,sdata.abwidth,sdata.abheight,sdata.radius,sdata.radius,sdata.radius,sdata.radius);
		return o;
	};
	m.yesBtn=function(skin, target, sdata, scomp){
		var sh=skin.getChildByName("bg"),
			txt=skin.getChildByType(zetaret.global.packages.clockwork.ui.TextField,true);
		sh.graphics.clear();
		sh.graphics.beginFill(sdata.bgcolor).drawRoundRect(0,0,sdata.bwidth,sdata.bheight,sdata.bradius,sdata.bradius,sdata.bradius,sdata.bradius);
		txt.setStyleList([]).addStyle(sdata.btxtstyle).applyStyles();
		skin.x=sdata.margin;
		skin.y=sdata.abheight-sdata.bheight-sdata.margin;
		skin.invalidateTransform=true;
		txt.x=sdata.btxtx;
		txt.y=sdata.btxty;
		txt.invalidateTransform=true;
		return o;
	};
	m.noBtn=function(skin, target, sdata, scomp){
		var sh=skin.getChildByName("bg"),
			txt=skin.getChildByType(zetaret.global.packages.clockwork.ui.TextField,true);
		sh.graphics.clear();
		sh.graphics.beginFill(sdata.bgcolor).drawRoundRect(0,0,sdata.bwidth,sdata.bheight,sdata.bradius,sdata.bradius,sdata.bradius,sdata.bradius);
		txt.setStyleList([]).addStyle(sdata.btxtstyle).applyStyles();
		skin.x=sdata.abwidth-sdata.bwidth-sdata.margin;
		skin.y=sdata.abheight-sdata.bheight-sdata.margin;
		skin.invalidateTransform=true;
		txt.x=sdata.btxtx;
		txt.y=sdata.btxty;
		txt.invalidateTransform=true;
		return o;
	};
	m.closeBtn=function(skin, target, sdata, scomp){
		var sh=skin.getChildByName("bg");
		sh.graphics.clear();
		sh.graphics.beginFill(sdata.bgcolor)
			.drawRoundRect(0,0,sdata.closesize,sdata.closesize,2,2,2,2).endFill()
			.lineStyle(2,sdata.strokecolor).moveTo(3,3).lineTo(sdata.closesize-3,sdata.closesize-3)
			.moveTo(sdata.closesize-3,3).lineTo(3,sdata.closesize-3).stroke();
		skin.x=sdata.abwidth-sdata.margin-sdata.closesize;
		skin.y=sdata.margin;
		skin.invalidateTransform=true;
		return o;
	};
	m.txt=function(skin, target, sdata, scomp){
		skin.setStyle(sdata.txtstyle);
		skin.x=sdata.txtx;
		skin.y=2*sdata.margin+sdata.closesize+sdata.txty;
		skin.invalidateTransform=true;
		return o;
	};
	m.icon=function(skin, target, sdata, scomp){
		
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});
