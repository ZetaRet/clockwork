window.package("zetaret.global.packages.clockwork.controllers").internal(
function PageController(container, pages) {
	var o = this,a=arguments;
	o.Container=container;
	o.Pages=[];
	o.PageIndex=-1;
	o.CurrentPage=null;
	o.DispatchFirstPageInit=false;
	o.DataMap={};
	o.ChangeHandler=null;
	o.BeforeDestroyMethod="BeforeDestroy";
	o.InitMethod="InitMethod";
	o.PageClassSuffix="_page";
	o.CachedPages={};
	o.CachePages=false;
	o.AnimateFirstPage=false;
	o.RecreateIds={};
	o.pageKey=0;
	o.dataKey=1;
	o.pagePackage="";
	o.mAnimating=false;
	o.mQueue=-1;
	o.mQueueSuffix='';
	o.mQueueCallback=null;
	o.super(a, null);
	var m = {};
	m.get_PageId=function(){
		return o.Pages[o.PageIndex];
	};
	m.get_PageClass=function(){
		return o.PageId+o.PageClassSuffix;
	};
	m.onComplete=function(oldPage){
		if (oldPage){
			o.Container.removeChild(oldPage);
		}
		o.mAnimating=false;
		var queue=o.mQueue,
			suffix=o.mQueueSuffix,
			callback=o.mQueueCallback;
		o.mQueue=-1;
		o.mQueueSuffix='';
		o.mQueueCallback=null;
		if (o.CurrentPage)
			o.CurrentPage.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("pageInit"));
		if (queue>=0){
			o.ShowPage(queue, suffix, callback);
		}
	};
	m.onComplete._x=1;
	m.AddPageById=function(id, data, index){
		if (index===undefined || index===-1)
			index=o.Pages.length;
		o.DataMap[id]=data;
		o.Pages.splice(index, 0, id);
		return o;
	};
	m.SetPages=function(pages){
		var l=pages.length,i,pageItem;
		for(i=0;i<l;i++){
			pageItem=pages[i];
			pages[i]=(!pageItem || pageItem.is(String)) ? pageItem : pageItem[o.pageKey];
			o.DataMap[pages[i]]=(!pageItem || pageItem.is(String)) ? null : pageItem[o.dataKey];
		}
		o.Pages=pages;
		return o;
	};
	m.DestroyPage=function(){
		if (o.CurrentPage){
			if (o.CurrentPage[o.BeforeDestroyMethod])
				o.CurrentPage[o.BeforeDestroyMethod]();
			o.CurrentPage=null;
		}
		return o;
	};
	m.GetPage=function(id, suffix){
		if (!id)
			return null;
		if(!suffix)suffix='';
		var page=o.CachedPages[id];
		if (!page){
			page=new (ProtoSS.getDefinitionByName((o.pagePackage?o.pagePackage+"::":"")+id+o.PageClassSuffix))();
			page.name=id+suffix;
			if (o.CachePages)
				o.CachedPages[id]=page;
		}
		if (page[o.InitMethod])
			page[o.InitMethod].apply(page, o.DataMap[id]);
		return page;
	};
	m.ShowPage=function(indexOrId, suffix, callback){
		var index=indexOrId.is(Number) ? indexOrId : o.Pages.indexOf(indexOrId);
		if (o.mAnimating){
			o.mQueue=index;
			o.mQueueSuffix=suffix;
			o.mQueueCallback=callback;
			return o.CurrentPage;
		}
		if (index===o.PageIndex && o.CurrentPage && !o.RecreateIds[o.CurrentPage.name])
			return o.CurrentPage;
		var oldPage=o.CurrentPage;
		if (oldPage && oldPage[o.BeforeDestroyMethod])
			oldPage[o.BeforeDestroyMethod]();
		var newPage=o.GetPage(o.Pages[index], suffix, index);
		o.PageIndex=index;
		o.CurrentPage=newPage;
		if (newPage){
			o.Container.addChild(newPage);
		}
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("beforeChange"));
		if (oldPage || o.AnimateFirstPage){
			o.mAnimating=true;
			if(o.ChangeHandler)
				o.ChangeHandler.call(o, newPage, oldPage, o.onCompleteX||o.onComplete);
			else
				(o.onCompleteX||o.onComplete).call(o,oldPage);
		} else {
			if (o.DispatchFirstPageInit)
				o.CurrentPage.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("pageInit"));
		}
		if (callback)
			callback.call(o,newPage);
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("change"));
		return newPage;
	};
	m._constructor=function(){
		if(pages)o.SetPages(pages);
	};
	o.superize(a, m, true, true);
	m._constructor.call(o);
	return o;
});
