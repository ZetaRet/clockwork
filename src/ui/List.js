window.package("zetaret.global.packages.clockwork.ui").internal(
function List() {
	var o = this,a=arguments;
	o.listItems=[];
	o.xmargin=0;
	o.ymargin=0;
	o.xspace=0;
	o.yspace=0;
	o.xoffset=0;
	o.yoffset=0;
	o.listItemWidth=0;
	o.listItemHeight=0;
	o.xarrange=false;
	o.yarrange=false;
	o.xsize=0;
	o.ysize=0;
	o.super(a, null);
	var m = {};
	m.addListItem=function(li){
		var i=o.listItems.indexOf(li);
		if(i!==-1)o.listItems.splice(i,1);
		o.addChild(li);
		o.listItems.push(li);
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("listItemAdded"));
		return o;
	};
	m.removeListItem=function(li){
		var i=o.listItems.indexOf(li);
		if(i!==-1){
			o.listItems.splice(i,1);
			o.removeChild(li);
			o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("listItemRemoved"));
			return true;
		}
		return false;
	};
	m.setConfig=function(cfg){
		if(cfg.xmargin!==undefined)o.xmargin=cfg.xmargin;
		if(cfg.ymargin!==undefined)o.ymargin=cfg.ymargin;
		if(cfg.xspace!==undefined)o.xspace=cfg.xspace;
		if(cfg.yspace!==undefined)o.yspace=cfg.yspace;
		if(cfg.xoffset!==undefined)o.xoffset=cfg.xoffset;
		if(cfg.yoffset!==undefined)o.yoffset=cfg.yoffset;
		if(cfg.listItemWidth!==undefined)o.listItemWidth=cfg.listItemWidth;
		if(cfg.listItemHeight!==undefined)o.listItemHeight=cfg.listItemHeight;
		if(cfg.xarrange!==undefined)o.xarrange=cfg.xarrange;
		if(cfg.yarrange!==undefined)o.yarrange=cfg.yarrange;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("configChange"));
		return o;
	};
	m.readdListItems=function(){
		var i,li=o.listItems,l=li.length;
		for(i=0;i<l;i++){
			o.addChild(li[i]);
		}
		return o;
	};
	m.arrangeList=function(){
		var i,li=o.listItems,l=li.length,lit;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("beforeArrangeList"));
		for(i=0;i<l;i++){
			lit=li[i];
			lit.x=o.xmargin;
			if(o.xarrange){
				lit.x+=i*(o.xspace+o.listItemWidth||lit.width);
			}
			lit.y=o.ymargin;
			if(o.yarrange){
				lit.y+=i*(o.yspace+o.listItemHeight||lit.height);
			}
			lit.x+=o.xoffset;
			lit.y+=o.yoffset;
		}
		o.xsize=!lit?0:lit.x+(o.listItemWidth||lit.width);
		o.ysize=!lit?0:lit.y+(o.listItemHeight||lit.height);
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("afterArrangeList"));
		return o;
	};
	m.invalidateList=function(){
		var i,li=o.listItems,l=li.length,lit;
		for(i=0;i<l;i++){
			lit=li[i];
			lit.invalidateTransform=true;
		}
		if(o.stage)o.stage.invalidate=true;
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});
