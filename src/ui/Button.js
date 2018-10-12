window.package("zetaret.global.packages.clockwork.ui").internal(
function Button() {
	var o = this,a=arguments;
	o.selected=false;
	o.state=null;
	o.istate="";
	o.isButton=false;
	o.mousec=null;
	o.buttonEvent=null;
	o.autoStageButton=false;
	o.autoInteraction=false;
	o.interactionQueue=null;
	o.super(a, true);
	var m = {};
	m.setInteraction=function(mousec){
		if(!mousec && o.stage){
			mousec=o.stage.getController(zetaret.global.packages.clockwork.controllers.MouseController,true);
		}
		o.mousec=mousec;
		if(mousec && mousec.interaction)
			mousec.interaction.setInteractID(o, {mouseEnabled:false,mouseChildren:true});
		return o;
	};
	m.addButtonEvent=function(type, cls){
		if(!cls)cls=zetaret.global.packages.clockwork.events.MouseEvent;
		var e=new cls();
		e.type=type;
		e.currentTarget=o;
		o.buttonEvent=e;
		return o;
	};
	m.buttonMode=function(autostage, autointeract){
		o.isButton=true;
		o.autoStageButton=autostage?true:false;
		o.autoInteraction=autointeract?true:false;
		o.addEventListener("mouseover", o.onover);
		o.addEventListener("mouseout", o.onout);
		o.addEventListener("mousemove", o.buttonDefaultStop);
		o.addEventListener("mousedown", o.buttonDefaultStop);
		o.addEventListener("mouseup", o.buttonDefaultStop);
		o.addEventListener("click", o.buttonDefaultStop);
		o.addEventListener("dblclick", o.buttonDefaultStop);
		o.addEventListener("wheel", o.buttonDefaultStop);
		if(o.autoStageButton){
			o.addEventListener("addedToStage",o.onAddedToStage);
			if(o.stage)o.onAddedToStage();
		}
		return o;
	};
	m.doInteractionQueue=function(){
		var iq=o.interactionQueue,l=iq?iq.length:0,i;
		if(l>0 && o.mousec && o.mousec.interaction){
			for(i=0;i<l;i++){
				o.mousec.interaction.setInteractID(iq[i].data, {mouseEnabled:iq[i].mouseEnabled,mouseChildren:iq[i].mouseChildren});
			}
			o.interactionQueue=null;
		}
		return o;
	};
	m.configButton=function(btn){
		btn.addEventListener("mousemove", o.buttonDefaultStop);
		btn.addEventListener("mousedown", o.buttonDefaultStop);
		btn.addEventListener("mouseup", o.buttonDefaultStop);
		btn.addEventListener("click", o.buttonDefaultStop);
		btn.addEventListener("dblclick", o.buttonDefaultStop);
		btn.addEventListener("wheel", o.buttonDefaultStop);
	
		if(o.mousec && o.mousec.interaction){
			o.mousec.interaction.setInteractID(btn, {mouseEnabled:false,mouseChildren:true});
		} else if(o.autoInteraction){
			if(!o.interactionQueue)o.interactionQueue=[];
			o.interactionQueue.push({data:btn,mouseEnabled:false,mouseChildren:true});
		}
		
		return o;
	};
	m.onAddedToStage=function(e,s){
		if(o.autoInteraction){
			if(!o.mousec){
				o.setInteraction();
			}
			o.doInteractionQueue();
		}
	};
	m.onAddedToStage._p=1;
	m.buttonDefaultPrevent=function(e,s){
		e.preventCapture();
	};
	m.buttonDefaultStop=function(e,s){
		e.stopPropagation();
	};
	m.onover=function(e,s){
		if(!e)e=o.buttonEvent;
		e.stopPropagation();
		if (o.selected)o.setState(zetaret.global.packages.clockwork.ui.Button.OVERSELECT);
		else o.setState(zetaret.global.packages.clockwork.ui.Button.OVER);
		if(o.mousec)o.mousec.setMouseCursor("pointer");
	};
	m.onover._p=1;
	m.onout=function(e,s){
		if(!e)e=o.buttonEvent;
		e.stopPropagation();
		if (o.selected)o.setState(zetaret.global.packages.clockwork.ui.Button.SELECTED);
		else o.setState(zetaret.global.packages.clockwork.ui.Button.NULL);
		if(o.mousec)o.mousec.setMouseCursor("auto");
	};
	m.onout._p=1;
	m.over=function(e){
		if(!e)e=o.buttonEvent;
		if (o.selected)o.setState(zetaret.global.packages.clockwork.ui.Button.OVERSELECT);
		else o.setState(zetaret.global.packages.clockwork.ui.Button.OVER);
		o.dispatchEvent(e,o.state,true);
		return o;
	};
	m.out=function(e){
		if(!e)e=o.buttonEvent;
		if (o.selected)o.setState(zetaret.global.packages.clockwork.ui.Button.SELECTED);
		else o.setState(zetaret.global.packages.clockwork.ui.Button.NULL);
		o.dispatchEvent(e,o.state,true);
		return o;
	};
	m.up=function(e){
		if(!e)e=o.buttonEvent;
		o.dispatchEvent(e,o.state,true);
		return o;
	};
	m.down=function(e){
		if(!e)e=o.buttonEvent;
		o.dispatchEvent(e,o.state,true);
		return o;
	};
	m.click=function(e){
		if(!e)e=o.buttonEvent;
		o.dispatchEvent(e,o.state,true);
		return o;
	};
	m.move=function(e){
		if(!e)e=o.buttonEvent;
		o.dispatchEvent(e,o.state,true);
		return o;
	};
	m.enter=function(e){
		if(!e)e=o.buttonEvent;
		o.dispatchEvent(e,o.state,true);
		return o;
	};
	m.leave=function(e){
		if(!e)e=o.buttonEvent;
		o.dispatchEvent(e,o.state,true);
		return o;
	};
	m.select=function(){
		o.selected=true;
		o.setState(zetaret.global.packages.clockwork.ui.Button.SELECTED);
		return o;
	};
	m.unselect=function(){
		o.selected=false;
		o.setState(zetaret.global.packages.clockwork.ui.Button.NULL);
		return o;
	};
	m.getState=function(){
		return o.state;
	};
	m.setState=function(state){
		o.state=state;
		o.dispatch(zetaret.global.packages.clockwork.ui.Button.STATE_CHANGE);
		return o;
	};
	o.superize(a, m, true, true);
	return o;
}
);
ProtoSS.eventProps(zetaret.global.packages.clockwork.ui.Button, ["over","out","up","down","click","dblclick","wheel","move","enter","leave","state","selected"]);
ProtoSS.staticProps(zetaret.global.packages.clockwork.ui.Button, {SELECTED:"selected",UNSELECTED:"unselected",OVERSELECT:"over,selected",OVERUNSELECT:"over,unselect",NULL:null,NONE:"none",cloneprops:["state","selected"]});
