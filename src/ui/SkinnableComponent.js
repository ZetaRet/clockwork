window.package("zetaret.global.packages.clockwork.ui").internal(
function SkinnableComponent() {
	var o = this,a=arguments;
	o.skinId="";
	o.skin=null;
	o.toskin=[];
	o.skintarget=this;
	o.skindata={};
	o.super(a, null);
	var m = {};
	m.setSkin=function(skinid, skin, toskin, skindata){
		o.skinId=skinid;
		o.skin=skin;
		o.skindata=skindata;
		if(toskin)o.toskin=toskin;
		return o;
	};
	m.setSkinTarget=function(target){
		o.skintarget=target;
		target.addEventListener("updateSkin",o.onUpdateSkin);
		return o;
	};
	m.onUpdateSkin=function(e,d){
		o.skinme();
	};
	m.onUpdateSkin._p=1;
	m.skinme=function(){
		var ts=o.toskin,i,l=ts.length,s,st=o.skintarget,sd=o.skindata;
		if(o.skin){
			for(i=0;i<l;i++){
				s=ts[i];
				o.skin[s](st[s], st, sd, o);
				st[s].dispatchEvent(new zetaret.global.packages.clockwork.events.Event("updateSkin"));
			}
		}
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});
