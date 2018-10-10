window.package("zetaret.global.packages.clockwork.ui").internal(
function Image() {
	var o = this,a=arguments;
	o.imageId="";
	o.imageData=null;
	o.imageUrl="";
	o.imageTag=null;
	o.imageLoadEvent="load";
	o.imageErrorEvent="error";
	o.imageX=0;
	o.imageY=0;
	o.imageWidth=0;
	o.imageHeight=0;
	o.cacheAssets=false;
	o.patternEnabled=false;
	o.pattern=null;
	o.patternStyle="";
	o.imageDrawHandler=null;
	o.imageHandlerScope=null;
	o.rebuild=false;
	o.invalidateStage=false;
	o.imgCrossOrigin=null;
	o.super(a, null);
	var m = {};
	m.setImageId=function(id, width, height){
		o.imageId=id;
		o.imageWidth=width;
		o.imageHeight=height;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("imageDetailsChange"));
		return o;
	};
	m.setImageUrl=function(url, id){
		o.imageUrl=url;
		o.imageId=id;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("imageDetailsChange"));
		return o;
	};
	m.onImageLoaded=function(e){
		if(o.imageTag){
			o.setImageData(o.imageTag);
			if(o.rebuild)o.buildImage();
			o.drawImage();
			if(o.invalidateStage && o.stage)o.stage.invalidate=true;
			o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("imageLoaded"));
		}
	};
	m.onImageLoaded._p=1;
	m.onImageError=function(e){
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("imageError"));
	};
	m.onImageError._p=1;
	m.loadImageFromUrl=function(){
		var tag=document.createElement('img');
		o.imageTag=tag;
		tag.id=o.imageId;
		tag.src=o.imageUrl;
		if(o.imgCrossOrigin)tag.setAttribute('crossOrigin', o.imgCrossOrigin);
		tag.addEventListener(o.imageLoadEvent, o.onImageLoaded);
		tag.addEventListener(o.imageErrorEvent, o.onImageError);
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("loadImageFromUrl"));
		return o;
	};
	m.setImageData=function(idata){
		o.imageData=idata;
		if((o.patternEnabled || o.cacheAssets) && !idata.patternCache)
			idata.patternCache={};
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("imageDetailsChange"));
		return o;
	};
	m.setDefaults=function(){
		o.cacheAssets=true;
		o.rebuild=true;
		o.invalidateStage=true;
		return o;
	};
	m.clearDefaults=function(){
		o.cacheAssets=false;
		o.rebuild=false;
		o.invalidateStage=false;
		o.patternEnabled=false;
		o.patternStyle="";
		return o;
	};
	m.clearImage=function(keepurl,keepid){
		var ctx=o.stage?o.stage.renderer.context:null,k;
		o.pattern=null;
		if(o.imageData && o.imageData.patternCache){
			if(ctx){
				for(k in o.imageData.patternCache){
					delete ctx.patternCache[k];
				}
			}
			o.imageData.patternCache=null;
		}
		if(o.cacheAssets && o.imageId){
			if(ctx){
				delete ctx.assetCache[o.imageId];
			}
		}
		o.imageData=null;
		o.imageX=0;
		o.imageY=0;
		o.imageWidth=0;
		o.imageHeight=0;
		if(o.imageTag){
			o.imageTag.removeEventListener(o.imageLoadEvent, o.onImageLoaded);
			o.imageTag.removeEventListener(o.imageErrorEvent, o.onImageError);
			o.imageTag=null;
		}
		if(!keepurl)o.imageUrl="";
		if(!keepid)o.imageId="";
		if(o.invalidateStage && o.stage)o.stage.invalidate=true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("imageClear"));
		return o;
	};
	m.buildImage=function(){
		var ctx=o.stage?o.stage.renderer.context:null;
		if(o.cacheAssets){
			if(ctx)ctx.cacheAsset(o.imageId,o.imageData);
		}
		if(o.patternEnabled){
			if(ctx)o.pattern=ctx.createPattern(o.imageData,o.patternStyle);
		}
		if(o.imageData.is(HTMLImageElement)){
			o.imageWidth=o.imageData.naturalWidth;
			o.imageHeight=o.imageData.naturalHeight;
		}
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("imageBuild"));
		return o;
	};
	m.drawImage=function(){
		var g=o.graphics||o.resetGraphics().graphics;
		g.clear();
		if(o.imageDrawHandler){
			o.imageDrawHandler.call(o.imageHandlerScope||o,o,g);
		} else {
			g.beginBitmapFill(o.patternEnabled && o.pattern? o.pattern : o.imageData||o.imageId, undefined, o.patternStyle);
			g.drawRect(o.imageX,o.imageY,o.imageWidth,o.imageHeight);
			g.endFill();
		}
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("imageDraw"));
		return o;
	};
	m.destruct=function(){
		o.clearImage();
		o.clearDefaults();
	};
	o.superize(a, m, true, true);
	return o;
}
);
