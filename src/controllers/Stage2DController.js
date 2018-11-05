window.package("zetaret.global.packages.clockwork.controllers").internal(
function Stage2DController() {
	var o = this,a=arguments;
	o.stageId="stage";
	o.renderer=null;
	o.rendererMediator=null;
	o.htmlContainer=null;
	o.childLock=false;
	o.childcontainercls=null;
	o.displayobjectcls=null;
	o.invalidate=false;
	o.invalidateRect=null;
	o.invalidateList=null;
	o.inversed=false;
	o.prebufferlist=false;
	o.prebufferinvert=false;
	o.cnvs={};
	o.ctxParams=null;
	o.defaultLocalTransform=[1,0,0,1,0,0];
	o.t=[1,0,0,1,0,0];
	o.ct=[1,1,1,1,0,0,0,0];
	o.selfinvalidate=false;
	o.selftransform=false;
	o.precision=15;
	o.precisionNum=1000000000000000;
	o.usePrecision=false;
	o.controllers=[];
	o.stageWidth=0;
	o.stageHeight=0;
	o.errors=[];
	o.renderErrors=false;
	o.renderIndex=0;
	o.super(a, true);
	var m = {};
	m.setPrecision=function(precision,use){
		o.precision=precision;
		o.precisionNum=Math.pow(10,precision);
		o.usePrecision=use;
		return o;
	};
	m.precise16=function(n){return Math.round(n*10000000000000000)/10000000000000000;};
	m.precise15=function(n){return Math.round(n*1000000000000000)/1000000000000000;};
	m.precise14=function(n){return Math.round(n*10000000000000)/10000000000000;};
	m.precise12=function(n){return Math.round(n*1000000000000)/1000000000000;};
	m.precise10=function(n){return Math.round(n*10000000000)/10000000000;};
	m.precise8=function(n){return Math.round(n*100000000)/100000000;};
	m.precise6=function(n){return Math.round(n*1000000)/1000000;};
	m.precise4=function(n){return Math.round(n*10000)/10000;};
	m.precise2=function(n){return Math.round(n*100)/100;};
	m.preciseR=function(n){
		var pr=o.precisionNum;
		return Math.round(n*pr)/pr;
	};
	m.preciseC=function(n){
		var pr=o.precisionNum;
		return Math.ceil(n*pr)/pr;
	};
	m.preciseF=function(n){
		var pr=o.precisionNum;
		return Math.floor(n*pr)/pr;
	};
	m.preciseSinCosReport=function(){
		var s30=Math.sin(30*Math.PI/180),
			s180=Math.sin(Math.PI),
			c60=Math.cos(60*Math.PI/180),
			c90=Math.cos(Math.PI/2);
		var r={},n,min,max;
		n=16;
		while(Math.round(c90*Math.pow(10,n))/Math.pow(10,n)!==0)n--;
		r.c90=n;
		min=n; max=n;
		n=16;
		while(Math.round(s180*Math.pow(10,n))/Math.pow(10,n)!==0)n--;
		r.s180=n;
		if(min>n)min=n; if(max<n)max=n;
		n=16;
		while(Math.round(s30*Math.pow(10,n))/Math.pow(10,n)!==0.5)n--;
		r.s30=n;
		if(min>n)min=n; if(max<n)max=n;
		n=16;
		while(Math.round(c60*Math.pow(10,n))/Math.pow(10,n)!==0.5)n--;
		r.c60=n;
		if(min>n)min=n; if(max<n)max=n;
		r.min=min; r.max=max;
		return r;
	};
	m.initRendererMediator=function(){
		var ccm=new zetaret.global.packages.clockwork.mediators.GraphicContext2DMediator();
		ccm.setContextRenderer(o.renderer).
			configureContext().
			configureSetters();
		o.rendererMediator=ccm;
		return o;
	};
	m.initStage=function(renderer, childcontainercls, displayobjectcls){
		o.renderer=renderer;
		if(!childcontainercls)childcontainercls=zetaret.global.packages.clockwork.ui.DisplayObjectContainer;
		if(!displayobjectcls)displayobjectcls=zetaret.global.packages.clockwork.ui.DisplayObject;
		o.childcontainercls=childcontainercls;
		o.displayobjectcls=displayobjectcls;
		o.root=o.getContainer(o.childLock?o.getDisplayObject():null);
		o.root.name="root";
		return o;
	};
	m.initHtml=function(container){
		o.htmlContainer=container;
		return o;
	};
	m.getDisplayObject=function(){
		var dobj=new o.displayobjectcls();
		dobj.stage=o;
		return dobj;
	};
	m.getContainer=function(child){
		var container=new o.childcontainercls();
		container.stage=o;
		if(child)container.target=child;
		return container;
	};
	m.transformize=function(a2,b2,c2,d2,e2,f2){
		var t=o.t;
		var a1=t[0],b1=t[1],c1=t[2],d1=t[3],e1=t[4],f1=t[5];
		var newt=[];
		newt[0]=a1*a2+c1*b2;
		newt[1]=b1*a2+d1*b2;
		newt[2]=a1*c2+c1*d2;
		newt[3]=b1*c2+d1*d2;
		newt[4]=a1*e2+c1*f2+e1;
		newt[5]=b1*e2+d1*f2+f1;
		return newt;
	};
	m.colorTransformize=function(r,g,b,a,ro,go,bo,ao){
		var ct=o.ct;
		var newct=[r*ct[0],g*ct[1],b*ct[2],a*ct[3],ro+ct[4],go+ct[5],bo+ct[6],ao+ct[7]];
		return newct;
	};
	m.rooterTransform=function(child, parent, dtop){
		if(parent.localTransform)return null;
		var t=dtop.t,ct=dtop.ct;
		var pt=parent.transform;
		var a1=pt[0],b1=pt[1],c1=pt[2],d1=pt[3],e1=pt[4],f1=pt[5],
			a2=t[0],b2=t[1],c2=t[2],d2=t[3],e2=t[4],f2=t[5];
		var newt=[];
		newt[0]=a1*a2+c1*b2;
		newt[1]=b1*a2+d1*b2;
		newt[2]=a1*c2+c1*d2;
		newt[3]=b1*c2+d1*d2;
		newt[4]=a1*e2+c1*f2+e1;
		newt[5]=b1*e2+d1*f2+f1;
		dtop.t=newt;
		var pct=parent.colortransform;
		var newct=[ct[0]*pct[0],ct[1]*pct[1],ct[2]*pct[2],parent.alpha*ct[3]*pct[3],ct[4]+pct[4],ct[5]+pct[5],ct[6]+pct[6],ct[7]+pct[7]];
		dtop.ct=newct;
		return o;
	};
	m.rooterTransform2=function(child, parent, dtop){
		if(!dtop.dlt && parent.localTransform)return null;
		var t=dtop.t,ct=dtop.ct;
		t=parent.transformize(t[0],t[1],t[2],t[3],t[4],t[5]);
		ct=parent.colorTransformize(ct[0],ct[1],ct[2],ct[3],ct[4],ct[5],ct[6],ct[7]);
		dtop.t=t;
		dtop.ct=ct;
		if(parent.localTransform && parent.notransform)return null;
		return o;
	};
	m.invalidateStageChild=function(child,f,d,parent,list,mode,childo){
		if(child.invalidateTransform){
			if(!child.forceSelfInvalidate){
				var cos1,sin1,cos2,sin2,rx=child.rx,ry=child.ry,sx=child.sx,sy=child.sy,t=child.transform;
				if (ry===0){
					cos1=1;
					sin1=0;
				} else {
					cos1=Math.cos(ry);
					sin1=Math.sin(ry);
				}
				if (rx!==ry){
					cos2=Math.cos(rx);
					sin2=Math.sin(rx);
				} else {
					cos2=cos1;
					sin2=sin1;
				}
				t[0]=cos1*sx;
				t[1]=sin1*sx;
				t[2]=-sin2*sy;
				t[3]=cos2*sy;
				t[4]=child.x;
				t[5]=child.y;
				child.invalidateTransform=false;
			} else child.updateTransform();
		}
		if(!child.visible)return null;
		return o;
	};
	m.invalidateStageChild2=function(child,f,d,parent,list,mode,childo){
		if(child.invalidateTransform)child.updateTransform();
		if(!child.visible)return null;
		return o;
	};
	m.renderStageChild=function(child,f,d,parent,list,mode,childo){
		o.renderIndex++;
		try{
		if(!childo)childo=child;
		if(child.invalidateTransform){
			try{
			if(!o.selfinvalidate && !child.forceSelfInvalidate){
				var cos1,sin1,cos2,sin2,rx=child.rx,ry=child.ry,sx=child.sx,sy=child.sy,tt=child.transform;
				if (ry===0){
					cos1=1;
					sin1=0;
				} else {
					cos1=Math.cos(ry);
					sin1=Math.sin(ry);
				}
				if (rx!==ry){
					cos2=Math.cos(rx);
					sin2=Math.sin(rx);
				} else {
					cos2=cos1;
					sin2=sin1;
				}
				tt[0]=cos1*sx;
				tt[1]=sin1*sx;
				tt[2]=-sin2*sy;
				tt[3]=cos2*sy;
				tt[4]=child.x;
				tt[5]=child.y;
				child.invalidateTransform=false;
			} else child.updateTransform();
			}catch(e){o.errors.push({error:e,type:"invalidate"});if(o.renderErrors)throw(e);}
		}
		if(!child.visible && !mode)return null;
		var gr=child.graphics;
		if(gr||child.canrender||child.mask||child.cacheLevel||child.layer||child.cachetransforms){
			var ot=o.t,oct=o.ct,t,ct,dtop,a,zt,zct,rendy=o.renderer,
				ctx=rendy.context,rm=o.rendererMediator,ctxc,cb,dlt=o.defaultLocalTransform,
				allowDraw=true,s=rendy.setters,
				clearReset=false,exith,prevblend;
			
			try{
			if(!child.notransform){
				if(o.selftransform){
					zct=child.colorTransformize(oct[0],oct[1],oct[2],oct[3],oct[4],oct[5],oct[6],oct[7]);
					dtop={t:child.transform,ct:zct};
					o.childToRoot(child, o.rooterTransform2, dtop);
					t=dtop.t;
					dtop.t=o.transformize(t[0],t[1],t[2],t[3],t[4],t[5]);
				} else {
					ct=child.colortransform;
					zct=[oct[0]*ct[0],oct[1]*ct[1],oct[2]*ct[2],child.alpha*oct[3]*ct[3],oct[4]+ct[4],oct[5]+ct[5],oct[6]+ct[6],oct[7]+ct[7]];
					dtop={t:child.transform,ct:zct};
					o.childToRoot(child, o.rooterTransform, dtop);
					zt=dtop.t;
					var a1=ot[0],b1=ot[1],c1=ot[2],d1=ot[3],e1=ot[4],f1=ot[5],
						a2=zt[0],b2=zt[1],c2=zt[2],d2=zt[3],e2=zt[4],f2=zt[5];
					t=[];
					t[0]=a1*a2+c1*b2;
					t[1]=b1*a2+d1*b2;
					t[2]=a1*c2+c1*d2;
					t[3]=b1*c2+d1*d2;
					t[4]=a1*e2+c1*f2+e1;
					t[5]=b1*e2+d1*f2+f1;
					dtop.t=t;
				}
				zt=dtop.t;
				zct=dtop.ct;
			} else {
				zt=child.transform;
				zct=child.colortransform.concat();
				zct[3]*=child.alpha;
			}
			}catch(e){o.errors.push({error:e,type:"transform"});if(o.renderErrors)throw(e);}
			
			if(child.mask){
				ctx.save();
				try{
				if(o.inversed)o.iterateInversed(child.mask,o.renderStageChild,d,null,null,null,"mask");
				else o.iterate(child.mask,o.renderStageChild,d,null,null,null,"mask");
				}catch(e){o.errors.push({error:e,type:"mask"});if(o.renderErrors)throw(e);}
				ctx.clip();
				exith=o.restoreContext;
			}
			if(child.blend){
				prevblend=ctx.globalCompositeOperation;
				ctx.globalCompositeOperation=child.blend;
			}
			if(child.cacheLevel){
				ctxc=ctx;
				ctx=o.cnvs[child.cacheLevel];
				if(!ctx)ctx=o.createContext(child.cacheLevel,child.opaqueBackground?{alpha:false}:child.cacheLevelData);
				
				if(child.cacheRedraw){
					child.cacheRedraw=false;
					o.renderer.setContext(ctx);
					if(rm)rm.configureContext();
					if(child.cacheBox){
						try{
						cb=child.getBounds(child.localTransform?dlt:zt);
						}catch(e){
							cb=null;
							o.errors.push({error:e,type:"boundary"});
						}
						child.cachedbounds=cb;
						if(child.localTransform&&cb){
							ctx.canvas.width=cb.width;
							ctx.canvas.height=cb.height;
						}
					}
					if(child.opaqueBackground){
						ctx.fillStyle=child.opaqueBackground;
						ctx.globalAlpha=rendy.clearAlpha;
						ctx.globalCompositeOperation=rendy.defaultBlend;
						ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
					} else {
						ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
					}
					
					try{
					if(o.inversed)o.iterateInversed(child,o.renderStageChild,d,null,null,null,null,true);
					else o.iterate(child,o.renderStageChild,d,null,null,null,null,true);
					}catch(e){o.errors.push({error:e,type:"cache"});if(o.renderErrors)throw(e);}
				}
				else {
					if(child.cacheBox){
						try{
						cb=child.cachedbounds||child.getBounds(child.localTransform?dlt:zt);
						}catch(e){
							cb=null;
							o.errors.push({error:e,type:"boundary"});
							if(o.renderErrors)throw(e);
						}
					}
					allowDraw=false;
				}
			} else if(child.layer){
				try{
				if(o.inversed)o.iterateInversed(child,o.renderStageChild,d,null,null,null,null,true);
				else o.iterate(child,o.renderStageChild,d,null,null,null,null,true);
				}catch(e){o.errors.push({error:e,type:"layer"});if(o.renderErrors)throw(e);}
			}
			
			if(allowDraw){
				if(!child.skipct)ctx.colortransform=zct;
				if(!child.skipalpha)ctx.globalAlpha=zct[3]+zct[7]/0xff;
				if(!child.skipt)ctx.setTransform.apply(ctx,child.localTransform?dlt:zt);
				if(child.cachetransforms){
					child.cachedtransform=zt;
					child.cachedcolortransform=zct;
				}
				try{
				if(child.canrender)child.render(o,rendy,ctx,zt,zct);
				else if(gr){
					if(gr.direct){
						a=gr.cachedDirect||gr.toDirect(rendy);
						var l=a.length,i,n;
						for(i=0;i<l;i+=2){
							n=a[i];
							if(!s[n])ctx[n].apply(ctx,a[i+1]);
							else ctx[n]=a[i+1];
						}
					} else {
						a=gr.cachedIntArray||gr.toIntArray(rendy);
						rendy.intArrayRender(a);
					}
					gr.graphicsMediator=rm;
				} else {
					clearReset=true;
				}
				}catch(e){o.errors.push({error:e,type:"render"});if(o.renderErrors)throw(e);}
			}
			if(ctxc){
				if(allowDraw){
					rendy.setContext(ctxc);
					if(rm)rm.configureContext();
				}
				if(!child.layer){
					if(child.localTransform){
						ctxc.setTransform.apply(ctxc,zt);
						ctxc.globalAlpha=zct[3]+zct[7]/0xff;
						clearReset=true;
					}
					else if(child.notransform)clearReset=true;
					try{
					if(!cb)ctxc.drawImage(ctx.canvas,child.dx||0,child.dy||0);
					else ctxc.drawImage(ctx.canvas,child.localTransform?cb.sx:cb.x,child.localTransform?cb.sy:cb.y,cb.swidth,cb.sheight,cb.x,cb.y,cb.width,cb.height);
					}catch(e){o.errors.push({error:e,type:"canvas"});if(o.renderErrors)throw(e);}
					ctx=ctxc;
				}
			}
			if(child.blend)ctx.globalCompositeOperation=prevblend||rendy.defaultBlend;
			if(clearReset){
				ctx.setTransform(1,0,0,1,0,0);
				ctx.globalAlpha=1;
				ctx.colortransform=null;
			}
			
			if(child.cacheLevel||child.layer){
				if(exith){
					try{
					exith.call(o,child);
					}catch(e){o.errors.push({error:e,type:"exit"});if(o.renderErrors)throw(e);}
				}
				if(list)list.push(child);
				return null;
			}
			if(exith)o.iterateExitHandler=exith;
		}
		}catch(e){o.errors.push({error:e,type:"context"});if(o.renderErrors)throw(e);}
		return o;
	};
	m.restoreContext=function(child){
		var ctx=o.renderer.context;
		ctx.restore();
		return o;
	};
	m.renderStage=function(data, parent){
		var list,l,i=0;
		o.renderIndex=0;
		if(o.prebufferlist){
			list=[];
			if(!o.inversed){
				o.iterate(o.root,o.selfinvalidate?o.invalidateStageChild2:o.invalidateStageChild,data,parent,list);
			} else {
				o.iterateInversed(o.root,o.selfinvalidate?o.invalidateStageChild2:o.invalidateStageChild,data,parent,list);
			}
			l=list.length;
			if(o.prebufferinvert)while(l--)o.renderStageChild(list[l]);
			else while(i<l)o.renderStageChild(list[i++]);
		} else {
			if(!o.inversed){
				o.iterate(o.root,o.renderStageChild,data,parent);
			} else {
				o.iterateInversed(o.root,o.renderStageChild,data,parent);
			}
		}
		o.invalidate=false;
		return o;
	};
	m.setStageProperty=function(child,f,stageEvents,parent,list,mode,childo){
		child.stage=o;
		if(stageEvents){
			child.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("addedToStage"),child.stage);
		}
		return o;
	};
	m.delStageProperty=function(child,f,stageEvents,parent,list,mode,childo){
		var rstage=child.stage;
		child.stage=null;
		if(stageEvents){
			child.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("removedFromStage"),rstage);
		}
		return o;
	};
	m.setStageToChildren=function(child,stageEvents,removestage){
		o.iterateInversed(child,!removestage?o.setStageProperty:o.delStageProperty,stageEvents);
		return o;
	};
	m.clearStage=function(){
		o.renderer.clear();
		return o;
	};
	m.resetStage=function(){
		o.clearStage();
		o.renderStage();
		o.invalidate=true;
		return o;
	};
	m.createContext=function(id, ctxp){
		var c=o.renderer.context.canvas.cloneNode();
		c.id+="_"+id;
		c=c.getContext("2d",ctxp||o.ctxParams);
		o.cnvs[id]=c;
		return c;
	};
	m.getContext=function(id){
		return o.cnvs[id];
	};
	m.changeContext=function(id,ctx){
		var c=o.cnvs[id]||ctx;
		if(c){
			o.renderer.setContext(c);
			if(o.rendererMediator)o.rendererMediator.configureContext();
		}
		return o;
	};
	m.clearCacheContext=function(id){
		delete o.cnvs[id];
	};
	m.getController=function(type,strict){
		var c=o.controllers,cl=c.length,i;
		for(i=0;i<cl;i++){
			if(strict && c[i].constructor===type)return c[i];
			else if(!strict && c[i].is(type))return c[i];
		}
		return null;
	};
	o.superize(a, m, true, true);
	return o;
}
);
