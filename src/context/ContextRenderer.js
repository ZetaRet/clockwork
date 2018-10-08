window.package("zetaret.global.packages.clockwork.context").internal(
function ContextRenderer() {
	var o = this,a=arguments;
	o.context=null;
	o.defaultContext=null;
	o.intlookup={};
	o.invalid=false;
	o.invalidArea=[];
	o.setters={};
	o.externalRenderer=null;
	o.externalEnabled=false;
	o.type="";
	o.super(a, true);
	var m = {};
	m.setExternalRenderer=function(renderer){
		o.externalRenderer=renderer;
		return o;
	};
	m.setSetters=function(settersar,v){
		var l=settersar.length,s=o.setters;
		while(l--)s[settersar[l]]=v;
		return o;
	};
	m.setContext=function(context){
		o.context=context;
		return o;
	};
	m.setDefaultContext=function(){
		o.defaultContext=o.context;
		return o;
	};
	m.getContext=function(){
		return o.context;
	};
	m.clear=function(){
		return o;
	};
	m.invalidate=function(){
		o.invalid=true;
		return o;
	};
	m.invalidateRect=function(x,y,width,height){
		o.invalid=true;
		o.invalidArea.push([x,y,width,height]);
		return o;
	};
	m.clearInvalid=function(){
		m.invalid=false;
		m.invalidArea=[];
		return o;
	};
	m.generateIntLookup=function(ctxtypes, graphictypes){
		var lookup={};
		for(var k in ctxtypes){
			if(graphictypes[k]!==undefined)lookup[graphictypes[k]]=ctxtypes[k];
		}
		o.intlookup=lookup;
		return o;
	};
	m.directRender=function(data){
		var c=o.context,l=data.length,s=o.setters,n,a,i;
		for(i=0;i<l;i+=2){
			n=data[i];
			a=data[i+1];
			if(!s[n])c[n].apply(c,a);
			else c[n]=a;
		}
		return o;
	};
	m.intArrayToDirect=function(data){
		var il=o.intlookup,l=data.length,i=0,dir=[],diri=0,cl,n,a,t;
		while(i<l){
			cl=data[i];
			i++;
			n=il[data[i]];
			i++;
			cl--;
			a=[];
			t=0;
			while(t<cl){
				a[t]=data[i+(t++)];
			}
			i+=cl;
			dir[diri++]=n;
			dir[diri++]=a;
		}
		return dir;
	};
	m.intArrayRender=function(data){
		var c=o.context,il=o.intlookup,l=data.length,i=0,s=o.setters,cl,n,a,t;
		while(i<l){
			cl=data[i];
			i++;
			n=il[data[i]];
			i++;
			cl--;
			a=[];
			t=0;
			while(t<cl){
				a[t]=data[i+(t++)];
			}
			i+=cl;
			if(!s[n])c[n].apply(c,a);
			else c[n]=a;
		}
		return o;
	};
	o.superize(a, m, true, true);
	return o;
}
);
