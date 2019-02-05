window.package("zetaret.global.packages.clockwork.controllers").internal(
function MouseController() {
	var o = this,a=arguments;
	o.controllerId="mouse";
	o.stage=null;
	o.interaction=null;
	o.defaultInteractiveMap={};
	o.mouseEventClass=null;
	o.mouseEventTarget=null;
	o.mouseEvents=[];
	o.mouseTargets=[];
	o.mouseIterated=[];
	o.mouseDownTargets=[];
	o.mouseOverTargets=[];
	o.mouseTargetsById={};
	o.mouseIteratedById={};
	o.mouseDownTargetsById={};
	o.mouseEnabledKey="mouseEnabled";
	o.mouseChildrenKey="mouseChildren";
	o.mouseCustomEvent=null;
	o.lastMouseMoveEvent=null;
	o.lastMouseDownEvent=null;
	o.mouseDownEventType="mousedown";
	o.mouseUpEventType="mouseup";
	o.mouseWheelEventType="wheel";
	o.clickEventType="click";
	o.mouseMoveEventType="mousemove";
	o.mouseEnterEventType="mouseover";
	o.mouseLeaveEventType="mouseout";
	o.mouseUpOutsideEventType="mouseupoutside";
	o.mouseWheelOutsideEventType="wheeloutside";
	o.mouseCursorHandlers={};
	o.defaultMouseCursor="auto";
	o.mouseCursor="";
	o.useMouseOverBuffer=true;
	o.useMergedCursors=false;
	o.preventNative=true;
	o.preventNativeOnAny=false;
	o.ignoreMask=false;
	o.interactiveMode=false;
	o.autoPreventCapture=true;
	o.autoPreventTypes={};
	o.autoTransformInteraction=false;
	o.mouseCapabilities={};
	o.defaultEvents=["click","dblclick","mousemove","mousedown","mouseout","mouseup","wheel","touchstart","touchend","touchmove","touchcancel"];
	o.systemXY=false;
	o.systemXKey="_systemX";
	o.systemYKey="_systemY";
	o.super(a, true);
	var m = {};
	m.init=function(stage, interaction, target){
		stage.controllers.push(o);
		if(stage.controllers.indexOf(interaction)<0)
			stage.controllers.push(interaction);
		o.stage=stage;
		o.interaction=interaction;
		o.mouseEventTarget=target;
		o.mouseEventClass=zetaret.global.packages.clockwork.events.MouseEvent;
		o.initCapabilities();
		return o;
	};
	m.initCapabilities=function(){
		if(o.systemXY){
			o.mouseCapabilities.oxkey=o.systemXKey;
			o.mouseCapabilities.oykey=o.systemYKey;
		} else {
			o.mouseCapabilities.ff=navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
			if(o.mouseCapabilities.ff){
				o.mouseCapabilities.oxkey="layerX";
				o.mouseCapabilities.oykey="layerY";
			}
		}
		return o;
	};
	m.initDefaultEvents=function(){
		var de=o.defaultEvents,l=de.length;
		while(l--)o.addMouseEvent(de[l]);
		return o;
	};
	m.preventCaptureTypes=function(types){
		var l=types.length;
		while(l--)o.autoPreventTypes[types[l]]=true;
		return o;
	};
	m.getInteractionData=function(id){
		if(!id)id={};
		id[o.mouseEnabledKey]=true;
		id[o.mouseChildrenKey]=true;
		return id;
	};
	m.addInteractionData=function(dobj){
		return o.getInteractionData(o.interaction.getInteractMap(dobj));
	};
	m.addMouseEvent=function(type){
		var mtype="mouseEventHandler_"+type,h=o[mtype]||o.mouseEventHandler;
		o.mouseEvents.push(type);
		o.mouseEventTarget.addEventListener(type, function(e){
			return h.apply(o,arguments);
		});
		return o;
	};
	m.bubbleEventHandler=function(child,parent,customEvent){
		parent.dispatchEvent(customEvent, o.stage);
		if(!customEvent.identifier){
			o.mouseTargets.push(parent);
			o.mouseIterated.push(parent);
		} else {
			o.mouseTargetsById[customEvent.identifier].push(parent);
			o.mouseIteratedById[customEvent.identifier].push(parent);
		}
		if(!customEvent.bubbles||customEvent.eventPhase===ZetaRet_Event.NULL_PHASE||customEvent.eventPhase===ZetaRet_Event.NO_PHASE)
			return false;
		return true;
	};
	m.maskVerify=function(child,x,y){
		var interc=o.interaction,found=false,ch,l;
		if(child.mask){
			found=interc.hitTestPoint(child.mask.target, x, y);
			if(!found){
				ch=child.mask.children;
				if(ch){
					l=ch.length;
					while(l--){
						found=o.maskVerify(ch[l], x, y);
						if(found)break;
					}
				}
			}
			if(!found)return false;
		}
		found=interc.hitTestPoint(child.target, x, y);
		if(!found){
			ch=child.children;
			if(ch){
				l=ch.length;
				while(l--){
					found=o.maskVerify(ch[l], x, y);
					if(found)break;
				}
			}
		}
		return found;
	};
	m.restoreInteraction=function(){
		o.interaction.computeTransform=false;
	};
	m.stageIterator=function(child, f, customEvent, parent, list, type, childo){
		var stage=o.stage,interc=o.interaction,
			mek=o.mouseEnabledKey,mck=o.mouseChildrenKey,im=o.interactiveMode,
			chi=child[interc.interactIDKey],chimap=chi?interc.interactiveVars[chi]:o.defaultInteractiveMap,chimek=chimap[mek],chimck=chimap[mck];
		customEvent.currentTarget=stage;
		if(!child.visible||(chi && !chimek && !chimck))return false;
		if(!o.ignoreMask && child.mask && !o.maskVerify(child.mask, customEvent.ox, customEvent.oy))return false;
		if(o.autoTransformInteraction && child.localTransform){
			interc.computeTransform=true;
			stage.iterateExitHandler=o.restoreInteraction;
		}
		if(chi || im){
			if(chimek || im){
				if(interc.hitTestPoint(child, customEvent.ox, customEvent.oy)){
					if(type===o.clickEventType && o.mouseDownTargets.indexOf(child)===-1){
						stage.bubblePhase=zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP;
						return false;
					}
					if(!customEvent.identifier)o.mouseTargets.push(child);
					else o.mouseTargetsById[customEvent.identifier].push(child);
					customEvent.currentTarget=child;
					child.dispatchEvent(customEvent, stage);
					if(o.autoPreventCapture && o.autoPreventTypes[customEvent.type] && customEvent.eventPhase===ZetaRet_Event.CAPTURE_PHASE){
						customEvent.preventCapture();
					}
					if(customEvent.eventPhase===ZetaRet_Event.NO_PHASE){
						stage.bubblePhase=!customEvent.defaultPrevented ? zetaret.global.packages.clockwork.controllers.ChildController.BUBBLENEXT : zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP;
					} else if (customEvent.eventPhase===ZetaRet_Event.NULL_PHASE){
						stage.bubblePhase=zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP;
					} else if (customEvent.eventPhase===ZetaRet_Event.BUBBLE_PHASE){
						stage.bubblePhase=zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP;
						if(customEvent.bubbles && stage.bubbleMechanics===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLE)
							stage.childToRoot(child,o.bubbleEventHandler,customEvent,o);
					} else if (customEvent.eventPhase===ZetaRet_Event.CAPTURE_PHASE){
						if(customEvent.bubbles && stage.bubbleMechanics===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLE)
							stage.childToRoot(child,o.bubbleEventHandler,customEvent,o);
						if(customEvent.defaultPrevented)stage.bubblePhase=zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP;
					}
				}
			}
			if(!chimck){
				return false;
			}
			return !customEvent.defaultPrevented;
		}
		return true;
	};
	m.mouseEventHandler_touchstart=function(e){

		return o;
	};
	m.mouseEventHandler_touchend=function(e){

		return o;
	};
	m.mouseEventHandler_touchmove=function(e){

		return o;
	};
	m.mouseEventHandler_touchcancel=function(e){

		return o;
	};
	m.removeMouseId=function(id){
		delete o.mouseTargetsById[id];
		delete o.mouseDownTargetsById[id];
		delete o.mouseIteratedById[id];
		return o;
	};
	m.computeSystemXY=function(event){
		event[o.systemXKey]=0;
		event[o.systemYKey]=0;
		return o;
	};
	m.mouseEventHandler=function(e, data, id, customEvent, overEvent, outEvent){
		if(id && !o.mouseTargetsById[id]){
			o.mouseTargetsById[id]=[];
			o.mouseDownTargetsById[id]=[];
			o.mouseIteratedById[id]=[];
		}
		var etype=e.type,stage=o.stage,mouseTargets=[],mtbi=o.mouseTargetsById,
			oldMouseTargets=id?mtbi[id]:o.mouseTargets,
			mt,l=0,i,mouseIterated=[],
			k,mdtbi=o.mouseDownTargetsById,mcap=o.mouseCapabilities,
			mlet=o.mouseLeaveEventType,mmet=o.mouseMoveEventType,umob=o.useMouseOverBuffer,muet=o.mouseUpEventType;
		e._capabilities=mcap;
		if(o.systemXY)o.computeSystemXY(e);
		if(!customEvent){
			customEvent=new o.mouseEventClass();
			customEvent.type=e.type;
			customEvent.eventPhase=ZetaRet_Event.CAPTURE_PHASE;
			customEvent.bubbles=true;
			customEvent.setNativeEvent(e);
			if(id)customEvent.identifier=id;
		}

		if(etype===mmet){
			o.lastMouseMoveEvent=e;
		} else if(etype===o.mouseDownEventType){
			if(o.lastMouseDownEvent && e.button!==o.lastMouseDownEvent.button && o.mouseDownTargets.length>0)return o;
			if(id)mdtbi[id]=mouseTargets;
			else o.mouseDownTargets=mouseTargets;
			o.lastMouseDownEvent=e;
		} else if(etype===mlet){
			o.lastMouseMoveEvent=null;
			o.lastMouseDownEvent=null;
		}

		if(id)o.mouseIteratedById[id]=mouseIterated;
		else o.mouseIterated=mouseIterated;
		if(id)mtbi[id]=mouseTargets;
		else o.mouseTargets=mouseTargets;

		o.mouseCustomEvent=customEvent;
		if(o.autoTransformInteraction)o.interaction.computeTransform=false;
		if(etype!==mlet)stage.iterateInversed(stage.root,o.stageIterator,customEvent,null,mouseIterated,o,etype);

		var omt=oldMouseTargets;
		mt=mouseTargets;
		if(!umob){
			if(o.useMergedCursors){
				if(id){
					omt=omt.concat(o.mouseTargets);
					for(k in mtbi){
						if(k!==id)
							omt=omt.concat(mtbi[k]);
					}
				} else {
					for(k in mtbi){
						omt=omt.concat(mtbi[k]);
					}
				}
			}
		} else {
			omt=null;
			if(o.useMergedCursors){
				if(id){
					mt=mt.concat(o.mouseTargets);
					for(k in mtbi){
						if(k!==id)
							mt=mt.concat(mtbi[k]);
					}
				} else {
					for(k in mtbi){
						mt=mt.concat(mtbi[k]);
					}
				}
			}
		}

		var uomt=omt?omt.unique():null,luomt=uomt?uomt.length:0,
			umt=mt.unique(),lumt=umt.length,
			mto=null,umdt=null,mot=o.mouseOverTargets;
		if(umob)luomt=mot.length;
		if(luomt>0 && (etype===mlet || etype===mmet)){
			if(outEvent===undefined){
				outEvent=new o.mouseEventClass();
				outEvent.type=mlet;
				outEvent.eventPhase=ZetaRet_Event.CAPTURE_PHASE;
				outEvent.setNativeEvent(e);
				if(id)outEvent.identifier=id;
			}
			if(!umob){
				if(uomt){
					for(i=0;i<luomt;i++){
						mto=uomt[i];
						if(lumt===0 || umt.indexOf(mto)<0){mto.dispatchEvent(outEvent, stage);}
					}
				}
			} else {
				for(i=0;i<mot.length;i++){
					mto=mot[i];
					if(umt.indexOf(mto)<0){mto.dispatchEvent(outEvent, stage);mot.splice(i,1);i--;}
				}
			}
		}
		if(etype===muet || etype===o.mouseWheelEventType || etype===mlet){
			if(id)umdt=mdtbi[id];
			else umdt=o.mouseDownTargets;
			umdt=umdt.unique();
			l=umdt.length;
			if(l>0){
				var outsideEvent=new o.mouseEventClass();
				outsideEvent.type=etype===muet||mlet?o.mouseUpOutsideEventType:o.mouseWheelOutsideEventType;
				outsideEvent.eventPhase=ZetaRet_Event.CAPTURE_PHASE;
				outsideEvent.setNativeEvent(e);
				if(id)outsideEvent.identifier=id;
				for(i=0;i<l;i++){
					mto=umdt[i];
					if(lumt===0 || umt.indexOf(mto)<0){mto.dispatchEvent(outsideEvent, stage);}
				}
				if(etype===mlet||(etype==muet && e.button!==0)){
					if(id)mdtbi[id]=[];
					else o.mouseDownTargets=[];
				}
			}
		} else if(etype===o.clickEventType){
			if(id)mdtbi[id]=[];
			else o.mouseDownTargets=[];
		}
		if(lumt>0 && etype===mmet){
			if(overEvent===undefined){
				overEvent=new o.mouseEventClass();
				overEvent.type=o.mouseEnterEventType;
				overEvent.eventPhase=ZetaRet_Event.CAPTURE_PHASE;
				overEvent.setNativeEvent(e);
				if(id)overEvent.identifier=id;
			}
			if(umob){
				for(i=0;i<lumt;i++){
					mto=umt[i];
					if(mot.indexOf(mto)<0){mto.dispatchEvent(overEvent, stage);mot.push(mto);}
				}
			} else {
				for(i=0;i<lumt;i++){
					mto=umt[i];
					if(luomt===0 || uomt.indexOf(mto)<0){mto.dispatchEvent(overEvent, stage);}
				}
			}
		}
		if(umob)lumt=mot.length;
		if(lumt===0 && o.mouseCursor!==o.defaultMouseCursor)o.setMouseCursor(o.defaultMouseCursor);
		if(o.preventNative || (o.preventNativeOnAny && o.any()))e.preventDefault();
		return o;
	};
	m.setMouseCursor=function(id){
		if(!id)id=o.defaultMouseCursor;
		o.mouseCursor=id;
		if(o.mouseCursorHandlers[id]){
			o.mouseCursorHandlers[id].call(o,id);
			return true;
		}
		return false;
	};
	m.any=function(){
		return o.mouseTargets.length>0 || o.mouseOverTargets.length>0 || o.mouseDownTargets.length>0;
	};
	m.hasMouse=function(){
		return (o.lastMouseMoveEvent||o.lastMouseDownEvent)?true:false;
	};
	o.superize(a, m, true, true);
	return o;
}
);
