window.package("zetaret.global.packages.clockwork.utils").internal(
{
	name:"ControlUtils",
	version:"1.01",
	configDrag:function(target, dx, dtarget, handler, hscope){
		if(!target)target=this;
		if(!dtarget)dtarget=target;
		var ds=new zetaret.global.packages.clockwork.controllers.DragController(),
			stage,ix,iy;
		if(dx)ds.resetddxy(dtarget);
		ds.init(target, function(){
			ix=dtarget.x;
			iy=dtarget.y;
			stage=dtarget.stage;
		}, function(){
			var ddx=ds.lastEvent.ox-ds.downEvent.ox,
				ddy=ds.lastEvent.oy-ds.downEvent.oy;
			if(handler){
				handler.call(hscope||dtarget,ix,iy,ddx,ddy,ds);
			} else {
				dtarget.x=ix+ddx; 
				dtarget.y=iy+ddy;
				if(dx)ds.setdxy(dtarget);
				dtarget.invalidateTransform=true;
			}
			if(stage)stage.invalidate=true;
		});
		return ds;
	}
});
