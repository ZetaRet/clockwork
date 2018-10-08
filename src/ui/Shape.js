window.package("zetaret.global.packages.clockwork.ui").internal(
function Shape(at,act) {
	var o = this,a=arguments;
	o.stroke=null;
	o.color=null;
	o.graphics=null;
	o.clonegraphics=false;
	o.autoBoundGraphics=true;
	o.super(a, true);
	var m = {};
	m.render=function(stage, renderer, ctx, t, ct){
		var c=o.color,s=o.stroke,a,r,g,b;
		if(c){
			if(ct && c.constructor===Number){
				a=c>>24;
				r=c>>16&0xff;
				g=c>>8&0xff;
				b=c&0xff;
				c="rgba("+Math.round(r*ct[0]+ct[4])+","+Math.round(g*ct[1]+ct[5])+","+Math.round(b*ct[2]+ct[6])+","+Math.round(a*ct[3]+ct[7])+")";
			}
			ctx.fillStyle=c;
		}
		if(s){
			if(ct && s.constructor===Number){
				a=s>>24;
				r=s>>16&0xff;
				g=s>>8&0xff;
				b=s&0xff;
				s="rgba("+Math.round(r*ct[0]+ct[4])+","+Math.round(g*ct[1]+ct[5])+","+Math.round(b*ct[2]+ct[6])+","+Math.round(a*ct[3]+ct[7])+")";
			}
			ctx.strokeStyle=s;
		}
		if(o.skipt)ctx.rect(o.x,o.y,o.width*o.sx,o.height*o.sy);
		else if(o.notransform){
			var br=o.getBounds(t);
			ctx.fillRect(br.x,br.y,br.width,br.height);
		}
		else ctx.rect(0,0,o.width,o.height);
		if(c)ctx.fill();
		if(s)ctx.stroke();
		return o;
	};
	m.getBounds=function(tm){
		if(!tm)tm=o.cachedtransform||o.getStageTransform().t;
		var b={},grd;
		if(o.autoBoundGraphics && o.graphics){
			grd=o.graphics.getGraphicsDimensions();
		}
		if(grd){
			b.width=grd[4];
			b.height=grd[5];
		} else {
			b.width=o.width;
			b.height=o.height;
		}
		
		if(!grd){
			b.x=0;
			b.y=0;
		} else {
			b.x=grd[0];
			b.y=grd[1];
		}
		b=zetaret.global.packages.clockwork.ui.DisplayObject.getTransformArea(b,tm);
		b.sx=0;
		b.sy=0;
		b.swidth=b.width;
		b.sheight=b.height;
		return b;
	};
	m.clone=function(){
		var c=o.callProtoX(zetaret.global.packages.clockwork.ui.DisplayObject,"clone");
		c.stroke=o.stroke;
		c.color=o.color;
		c.clonegraphics=o.clonegraphics;
		c.autoBoundGraphics=o.autoBoundGraphics;
		c.graphics=o.clonegraphics?o.graphics.clone():o.graphics;
		return c;
	};
	var s=o.superize(a, m, true, true);
	o.statis(a, a.callee.packobj.ShapeStatis, s, true, true);
	return o;
}
).internal(
function ShapeStatis(s,c){
	if(zetaret.global.packages.clockwork.ui.ShapeStatis.statis.graphics){
		s.resetGraphics=function(){
			if(!this.graphics)this.graphics=new zetaret.global.packages.clockwork.graphics.Graphics();
			else this.graphics.clear();
			return this;
		};
		s.setGraphics=function(graphics){
			this.graphics=graphics;
			return this;
		};
		s.getGraphics=function(){
			return this.graphics;
		};
	}
	if(zetaret.global.packages.clockwork.ui.ShapeStatis.statis.drag)
		s.drag=zetaret.global.packages.clockwork.utils.ControlUtils.configDrag;
	if(zetaret.global.packages.clockwork.ui.ShapeStatis.statis.interaction){
		s.setupInteraction=function(mouse, keyboard){
			var mousec,keyboardc;
			if(mouse){
				if(this.stage){
					mousec=this.stage.getController(zetaret.global.packages.clockwork.controllers.MouseController,true);
				}
				if(mousec && mousec.interaction){
					mousec.interaction.setInteractID(this, {mouseEnabled:true});
					this.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("setMouseInteraction"));
				}
			}
			if(keyboard){
				if(this.stage){
					keyboardc=this.stage.getController(zetaret.global.packages.clockwork.controllers.KeyboardController,true);
				}
				if(keyboardc){
					keyboardc.addInteractionData(this);
					this.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("setKeyboardInteraction"));
				}
			}
			return {mousec:mousec,keyboardc:keyboardc};
		};
	}
});
ProtoSS.staticProps(zetaret.global.packages.clockwork.ui.ShapeStatis,{statis:{drag:true,graphics:true,interaction:true}});
