window.package("zetaret.global.packages.clockwork.ui").internal(
function GalleryItem() {
	var o = this,a=arguments;
	o.title=null;
	o.image=null;
	o.itemWidth=0;
	o.itemHeight=0;
	o.itemAlignX=0;
	o.itemAlignY=0;
	o.imageFit=0;
	o.super(a, null);
	var m = {};
	m.onImageLoaded=function(e,d){
		o.fitImage();
	};
	m.onImageLoaded._p=1;
	m.fitImage=function(){
		var fitdef=zetaret.global.packages.clockwork.utils.FitTypes.Fit(o.image.imageWidth, o.image.imageHeight, o.itemWidth, o.itemHeight, o.itemAlignX, o.itemAlignY, o.imageFit);
		o.image.x=fitdef.x;
		o.image.y=fitdef.y;
		o.image.sx=fitdef.sx;
		o.image.sy=fitdef.sy;
		o.image.invalidateTransform=true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("fitImage"));
		return o;
	};
	m.setDefaults=function(){
		o.title=new zetaret.global.packages.clockwork.ui.TextField();
		o.image=new zetaret.global.packages.clockwork.ui.Image();
		o.image.setDefaults();
		o.image.addEventListener("imageLoaded",o.onImageLoaded);
		return o;
	};
	m.setImageUrl=function(url){
		o.image.setImageUrl(url, o.rndstr(10)+'_image');
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("imageUrlChanged"));
		return o;
	};
	m.activate=function(){
		if(o.title)o.addChild(o.title);
		if(o.image){
			o.addChild(o.image);
			if(o.image.imageUrl)o.image.loadImageFromUrl();
			else {
				o.image.drawImage();
				o.fitImage();
			}
		}
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("activate"));
		return o;
	};
	m.deactivate=function(){
		if(o.title)o.removeChild(o.title);
		if(o.image){
			o.removeChild(o.image);
			if(o.image.imageUrl)o.image.clearImage(true,true);
		}
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("deactivate"));
		return o;
	};
	m.destruct=function(){
		if(o.title){
			o.title.destruct();
			o.title=null;
		}
		if(o.image){
			o.image.destruct();
			o.image=null;
		}
	};
	o.superize(a, m, true, true);
	return o;
});
