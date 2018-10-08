window.package("zetaret.global.packages.clockwork.mediators").internal(
function GraphicContext2DMediator() {
	var o = this,a=arguments;
	o.cnvs2drender=null;
	o.renderlist=null;
	o.context=null;
	o.inverse=false;
	o.patternCache={};
	o.assetCache={};
	o.gradientCache={};
	o.super(a, true);
	var m = {};
	m.setRenderList=function(list){
		o.renderlist=list;
		return o;
	};
	m.invalidateList=function(){
		var list=o.renderlist,l=list.length;
		if(o.inverse){
			while(l--)list[l].invalidate();
		} else {
			for(var i=0;i<l;i++)list[i].invalidate();
		}
		return o;
	};
	m.clear=function(){
		o.cnvs2drender.clear();
		return o;
	};
	m.render=function(){
		var render=o.cnvs2drender,list=o.renderlist,l=list.length,a=[];
		if(o.inverse){
			while(l--)a=a.concat(list[l].toDirect());
		} else {
			for(var i=0;i<l;i++)a=a.concat(list[l].toDirect());
		}
		render.directRender(a);
		return o;
	};
	m.setContextRenderer=function(cnvs2drender){
		o.cnvs2drender=cnvs2drender;
		return o;
	};
	m.configureSetters=function(){
		o.cnvs2drender.setSetters(["fillStyle","strokeStyle","globalAlpha","colortransform","globalCompositeOperation","imageSmoothingEnabled","imageSmoothingQuality","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","lineWidth","lineCap","lineJoin","miterLimit","lineDashOffset","font","textAlign","textBaseline","direction","filter","currentTransform"],true);
	};
	m.unconfigureContext=function(){
		var c=o.context;
		delete c.patternCache;
		delete c.assetCache;
		delete c.gradientCache;
		delete c.setShadowStyle;
		delete c.setImageStyle;
		delete c.setLineStyle;
		delete c.setTextStyle;
		delete c.setColor;
		delete c.setColorAlpha;
		delete c.setFillStyle;
		delete c.setComposite;
		delete c.setLinearGradientStyle;
		delete c.setRadialGradientStyle;
		delete c.setPatternStyle;
		delete c.clearStyle;
		delete c.clearReset;
		delete c.resetShadow;
		delete c.resetText;
		delete c.resetStroke;
		delete c.resetColor;
		delete c.filterImageData;
		delete c.shaderFill;
		delete c.skew;
		delete c.resetTransform;
		delete c.cacheAsset;
		delete c.setColorTransform;
		delete c.resetColorTransform;
		delete c.flushGradientCache;
		o.context=null;
		return o;
	};
	m.configureContext=function(ctx){
		var c=ctx||o.cnvs2drender.context;
		o.context=c;
		c.patternCache=o.patternCache;
		c.assetCache=o.assetCache;
		c.gradientCache=o.gradientCache;
		c.setShadowStyle=o.setShadowStyle;
		c.setImageStyle=o.setImageStyle;
		c.setLineStyle=o.setLineStyle;
		c.setTextStyle=o.setTextStyle;
		c.setColor=o.setColor;
		c.setColorAlpha=o.setColorAlpha;
		c.setFillStyle=o.setFillStyle;
		c.setComposite=o.setComposite;
		c.setLinearGradientStyle=o.setLinearGradientStyle;
		c.setRadialGradientStyle=o.setRadialGradientStyle;
		c.setPatternStyle=o.setPatternStyle;
		c.clearStyle=o.clearStyle;
		c.clearReset=o.clearReset;
		c.resetShadow=o.resetShadow;
		c.resetText=o.resetText;
		c.resetStroke=o.resetStroke;
		c.resetColor=o.resetColor;
		c.filterImageData=o.filterImageData;
		c.shaderFill=o.shaderFill;
		c.skew=o.skew;
		c.cacheAsset=o.cacheAsset;
		c.setColorTransform=o.setColorTransform;
		c.resetColorTransform=o.resetColorTransform;
		c.flushGradientCache=o.flushGradientCache;
		if(!c.resetTransform)c.resetTransform=o.resetTransform;
		return o;
	};
	m.setShadowStyle=function(color, blur, offsetX, offsetY, composite){
		var c=o.context,ct=c.colortransform;
		if(ct && color.constructor===Number){
			var r=color >> 16 & 0xff,
				g=color >> 8 & 0xff,
				b=color & 0xff;
				color="rgb("+Math.round(r*ct[0]+ct[4])+","+Math.round(g*ct[1]+ct[5])+","+Math.round(b*ct[2]+ct[6])+")";
		}
		c.shadowColor=color;
		c.shadowBlur=blur;
		c.shadowOffsetX=offsetX;
		c.shadowOffsetY=offsetY;
		if(composite!==undefined)c.globalCompositeOperation=composite;
		return c;
	};
	m.setImageStyle=function(smooth){
		var c=o.context;
		c.imageSmoothingEnabled=smooth;
		return c;
	};
	m.setComposite=function(alpha, blend){
		var c=o.context,ct=c.colortransform;
		c.globalAlpha=ct ? alpha*(ct[3]+ct[7]/0xff) : alpha;
		c.globalCompositeOperation=blend;
		return c;
	};
	m.setLineStyle=function(colorStyle, alpha, width, cap, join, miterLimit, dashOffset){
		var c=o.context,ct=c.colortransform;
		if(ct && colorStyle.constructor===Number){
			var a=colorStyle >> 24 & 0xff,
				r=colorStyle >> 16 & 0xff,
				g=colorStyle >> 8 & 0xff,
				b=colorStyle & 0xff;
				colorStyle="rgb("+Math.round(r*ct[0]+ct[4])+","+Math.round(g*ct[1]+ct[5])+","+Math.round(b*ct[2]+ct[6])+")";
				alpha=alpha*(a*ct[3]+ct[7])/0xff;
		} else {
			alpha=ct ? alpha*(ct[3]+ct[7]/0xff) : alpha;
		}
		c.strokeStyle=colorStyle;
		c.lineWidth=width;
		c.lineCap=cap;
		c.lineJoin=join;
		c.miterLimit=miterLimit;
		c.lineDashOffset=dashOffset;
		c.globalAlpha=alpha;
		return c;
	};
	m.setTextStyle=function(color, font, alpha, stroke, align, baseline, direction){
		var c=o.context,ct=c.colortransform;
		if(ct && color.constructor===Number){
			var a=color >> 24 & 0xff,
				r=color >> 16 & 0xff,
				g=color >> 8 & 0xff,
				b=color & 0xff;
				color="rgb("+Math.round(r*ct[0]+ct[4])+","+Math.round(g*ct[1]+ct[5])+","+Math.round(b*ct[2]+ct[6])+")";
				alpha=alpha*(a*ct[3]+ct[7])/0xff;
		} else {
			alpha=ct ? alpha*(ct[3]+ct[7]/0xff) : alpha;
		}
		if(!stroke)c.fillStyle=color;
		else c.strokeStyle=color;
		c.font=font;
		c.textAlign=align;
		c.textBaseline=baseline;
		c.direction=direction;
		c.globalAlpha=alpha;
		return c;
	};
	m.setColor=function(colorStyle){
		var c=o.context,ct=c.colortransform;
		if(ct && colorStyle.constructor===Number){
			var r=colorStyle >> 16 & 0xff,
				g=colorStyle >> 8 & 0xff,
				b=colorStyle & 0xff;
			colorStyle="rgb("+Math.round(r*ct[0]+ct[4])+","+Math.round(g*ct[1]+ct[5])+","+Math.round(b*ct[2]+ct[6])+")";
		}
		c.fillStyle=colorStyle;
		return c;
	};
	m.setColorAlpha=function(colorStyle,fill,stroke,shadow){
		var c=o.context,ct=c.colortransform;
		if(ct && colorStyle.constructor===Number){
			var a=colorStyle >> 24 & 0xff,
				r=colorStyle >> 16 & 0xff,
				g=colorStyle >> 8 & 0xff,
				b=colorStyle & 0xff;
			colorStyle="rgba("+Math.round(r*ct[0]+ct[4])+","+Math.round(g*ct[1]+ct[5])+","+Math.round(b*ct[2]+ct[6])+","+(a*ct[3]+ct[7])/0xff+")";
		}
		if(fill)c.fillStyle=colorStyle;
		if(stroke)c.strokeStyle=colorStyle;
		if(shadow)c.shadowStyle=colorStyle;
		return c;
	};
	m.setFillStyle=function(colorStyle, alpha){
		var c=o.context,ct=c.colortransform;
		if(ct && colorStyle.constructor===Number){
			var a=colorStyle >> 24 & 0xff,
				r=colorStyle >> 16 & 0xff,
				g=colorStyle >> 8 & 0xff,
				b=colorStyle & 0xff;
			colorStyle="rgb("+Math.round(r*ct[0]+ct[4])+","+Math.round(g*ct[1]+ct[5])+","+Math.round(b*ct[2]+ct[6])+")";
			alpha=alpha*(a*ct[3]+ct[7])/0xff;
		} else {
			alpha=ct ? alpha*(ct[3]+ct[7]/0xff) : alpha;
		}
		c.fillStyle=colorStyle;
		c.globalAlpha=alpha;
		return c;
	};
	m.setLinearGradientStyle=function(gradient, colors, alpha, stroke, gid){
		var c=o.context,gc=o.gradientCache,l=colors.length,i,ct=c.colortransform,co,cov;
		if(gid===true)gid=gradient+"|"+colors+"|"+ct;
		var gro=gc[gid];
		if(!gro){
			gro=c.createLinearGradient.apply(c,gradient);
			for(i=0;i<l;i++){
				co=colors[i];
				cov=co[1];
				if(ct && cov.constructor===Number){
					var r=cov >> 16 & 0xff,
						g=cov >> 8 & 0xff,
						b=cov & 0xff;
					cov="rgb("+Math.round(r*ct[0]+ct[4])+","+Math.round(g*ct[1]+ct[5])+","+Math.round(b*ct[2]+ct[6])+")";
				}
				gro.addColorStop(co[0],cov);
			}
			if(gid)gc[gid]=gro;
		}
		if(!stroke)c.fillStyle=gro;
		else c.strokeStyle=gro;
		c.globalAlpha=ct ? alpha*(ct[3]+ct[7]/0xff) : alpha;
		return c;
	};
	m.setRadialGradientStyle=function(gradient, colors, alpha, stroke, gid){
		var c=o.context,gc=o.gradientCache,l=colors.length,i,ct=c.colortransform,co,cov;
		if(gid===true)gid=gradient+"|"+colors+"|"+ct;
		var gro=gc[gid];
		if(!gro){
			gro=c.createRadialGradient.apply(c,gradient);
			for(i=0;i<l;i++){
				co=colors[i];
				cov=co[1];
				if(ct && cov.constructor===Number){
					var r=cov >> 16 & 0xff,
						g=cov >> 8 & 0xff,
						b=cov & 0xff;
					cov="rgb("+Math.round(r*ct[0]+ct[4])+","+Math.round(g*ct[1]+ct[5])+","+Math.round(b*ct[2]+ct[6])+")";
				}
				gro.addColorStop(co[0],cov);
			}
			if(gid)gc[gid]=gro;
		}
		if(!stroke)c.fillStyle=gro;
		else c.strokeStyle=gro;
		c.globalAlpha=ct ? alpha*(ct[3]+ct[7]/0xff) : alpha;
		return c;
	};
	m.setPatternStyle=function(asset, repetition, alpha, matrix, stroke, imgid){
		var img,c=o.context;
		if(asset.constructor===String)img=c.assetCache[asset];
		else img=asset;
		if(img){
			if(!imgid)imgid=img.id;
			var patid=imgid+repetition,pat=c.patternCache[patid]||c.createPattern(img, repetition),ct=c.colortransform;
			c.patternCache[patid]=pat;
			if(img.patternCache)img.patternCache[patid]=pat;
			if (matrix)pat.setTransform(matrix);
			if(!stroke)c.fillStyle=pat;
			else c.strokeStyle=pat;
			c.globalAlpha=ct ? alpha*(ct[3]+ct[7]/0xff) : alpha;
		}
		return c;
	};
	m.clearStyle=function(){
		var c=o.context;
		c.globalCompositeOperation="source-over";
		c.shadowColor="rgba(0, 0, 0, 0)";
		c.shadowBlur=0;
		c.shadowOffsetX=0;
		c.shadowOffsetY=0;
		c.fillStyle="#000";
		c.font="10px sans-serif";
		c.textAlign="start";
		c.textBaseline="alphabetic";
		c.direction="inherit";
		c.strokeStyle="#000";
		c.lineWidth=1;
		c.lineCap="butt";
		c.lineJoin="miter";
		c.miterLimit=10;
		c.lineDashOffset=0;
		c.globalAlpha=1;
		c.colortransform=null;
		return c;
	};
	m.resetShadow=function(){
		var c=o.context;
		c.shadowColor="rgba(0, 0, 0, 0)";
		c.shadowBlur=0;
		c.shadowOffsetX=0;
		c.shadowOffsetY=0;
		return c;
	};
	m.resetText=function(){
		var c=o.context;
		c.font="10px sans-serif";
		c.textAlign="start";
		c.textBaseline="alphabetic";
		c.direction="inherit";
		return c;
	};
	m.resetStroke=function(){
		var c=o.context;
		c.strokeStyle="#000";
		c.lineWidth=1;
		c.lineCap="butt";
		c.lineJoin="miter";
		c.miterLimit=10;
		c.lineDashOffset=0;
		return c;
	};
	m.resetColor=function(resetct){
		var c=o.context;
		c.fillStyle="#000";
		c.globalCompositeOperation="source-over";
		c.globalAlpha=1;
		if(resetct)c.colortransform=null;
		return c;
	};
	m.resetTransform=function(){
		var c=o.context;
		c.setTransform(1,0,0,1,0,0);
		return c;
	};
	m.clearReset=function(){
		var c=o.context;
		c.setTransform(1,0,0,1,0,0);
		c.globalCompositeOperation="source-over";
		c.shadowColor="rgba(0, 0, 0, 0)";
		c.shadowBlur=0;
		c.shadowOffsetX=0;
		c.shadowOffsetY=0;
		c.fillStyle="#000";
		c.font="10px sans-serif";
		c.textAlign="start";
		c.textBaseline="alphabetic";
		c.direction="inherit";
		c.strokeStyle="#000";
		c.lineWidth=1;
		c.lineCap="butt";
		c.lineJoin="miter";
		c.miterLimit=10;
		c.lineDashOffset=0;
		c.globalAlpha=1;
		c.colortransform=null;
		return c;
	};
	m.filterImageData=function(filter, filterParams, data, x, y, dx, dy, dw, dh){
		var c=o.context,fdata,fscope=c;
		if(filterParams){
			fscope=filterParams.scope||c;
		}
		if(!data)data=c.getImageData(x, y, dw, dh);
		fdata=filter.call(fscope, filterParams, data, dx, dy, dw, dh);
		c.putImageData(fdata,x,y,dx,dy,dw,dh);
		return c;
	};
	m.shaderFill=function(shader, byteCode, precisionHint, sx, sy, sw, sh, data, x, y, dx, dy, dw, dh){
		var c=o.context,cdata,sdata;
		cdata=c.getImageData(sx, sy, sw, sh);
		sdata=shader.call(c, cdata, byteCode, precisionHint, data, dx, dy, dw, dh);
		c.putImageData(sdata,x,y,dx,dy,dw,dh);
		return c;
	};
	m.skew=function(x, y){
		var c=o.context;
		c.transform(1,x,y,1,0,0);
		return c;
	};
	m.cacheAsset=function(id, asset){
		var c=o.context;
		c.assetCache[id]=asset;
		return c;
	};
	m.setColorTransform=function(r,g,b,a,ro,go,bo,ao){
		var c=o.context;
		c.colortransform=[r,g,b,a,ro,go,bo,ao];
		return c;
	};
	m.resetColorTransform=function(){
		var c=o.context;
		c.colortransform=[1,1,1,1,0,0,0,0];
		return c;
	};
	m.flushGradientCache=function(){
		var c=o.context;
		o.gradientCache={};
		c.gradientCache=o.gradientCache;
		return c;
	};
	for(var mk in m)m[mk]._p=1;
	o.superize(a, m, true, true);
	return o;
}
);
