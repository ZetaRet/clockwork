window.package("zetaret.global.packages.clockwork.skin.css").internal(
function ProtoCSS() {
	var o=this,a=arguments;
	o.cssElement=null;
	o.cssContainer=null;
	o.cssContainerAppendMethod='appendChild';
	o.css={};
	o.cssIds={};
	o.autoUpdate=true;
	o.super(a);
	var m={};
	m.createCSSElement=function(){
		o.cssElement=document.createElement('style');
		(o.cssContainer||document.body)[o.cssContainerAppendMethod](o.cssElement);
		return o;
	};
	m.updateCSS=function(){
		o.cssElement.innerText=o.cssToString();
		return o;
	};
	m.updateRule=function(id, rules){
		var k,r=o.cssIds[id];
		if(r){
			for(k in rules)r[k]=rules[k];
			if(o.autoUpdate)o.updateCSS();
		}
		return o;
	};
	m.style=function(selectors, rules, id){
		if(!id)id=o.rndstr(13);
		o.cssIds[id]=rules;
		if(selectors && selectors.constructor===String)selectors=selectors.split(',');
		var l=selectors ? selectors.length : 0, i;
		if(l>0){
			for(i=0;i<l;i++)o.css[selectors[i].trim()]=id;
			if(o.autoUpdate)o.updateCSS();
		}
		return id;
	};
	m.hasCSSId=function(id){
		return o.cssIds[id]?true:false;
	};
	m.bindClassToCSSId=function(cls, id){
		if(o.cssIds[id]){
			o.css['.'+cls]=id;
			if(o.autoUpdate)o.updateCSS();
			return true;
		}
		return false;
	};
	m.idToCSS=function(){
		var str,r,k,kk,idtocss={};
		for(k in o.cssIds){
			r=o.cssIds[k];
			str=[];
			for(kk in r)str.push(kk+':'+r[kk]);
			idtocss[k]='{'+str.join(';')+'}';
		}
		return idtocss;
	};
	m.cssToArray=function(){
		var out=[],str={},id,k,idtocss=o.idToCSS();
		for(k in o.css){
			id=o.css[k];
			if(!str[id])str[id]=[];
			str[id].push(k);
		}
		for(k in idtocss){
			if(str[id])out.push(str[id].join(',')+idtocss[k]);
		}
		return out;
	};
	m.cssToString=function(){
		return o.cssToArray().join('');
	};
	m.destroy=function(){
		var e=o.cssElement;
		if(e && e.parentNode){
			try{
			e.parentNode.removeChild(e);
			}catch(e){}
		}
		o.cssElement=null;
		o.cssContainer=null;
		o.css=null;
		o.cssIds=null;
	};
	o.superize(a, m, true, true);
	return o;
});
