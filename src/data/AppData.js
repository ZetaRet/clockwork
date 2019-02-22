window.package("zetaret.global.packages.clockwork.data").internal(
function AppData() {
	var o = this,
		a = arguments;
	o.capabilities={};
	o.environment={};
	o.interactionData={};
	o.stageData={};
	o.mousec=null;
	o.mouseEvent=null;
	o.keybc=null;
	o.kpmap=null;
	o.interc=null;
	o.stage=null;
	o.zcl=null;
	o.debug=false;
	o.super(a);
	var m = {};
	m.initCapabilities=function(){
		var lowq = false;
		try {
			eval('"use strict"; class __zxcvbnm_classtest{}');
		} catch (e) {
			lowq = true;
		}
		o.capabilities.lowq=lowq;
		o.capabilities.c2dStrokeTest=CanvasRenderingContext2D.prototype.isPointInStroke?true:false;
		o.capabilities.c2dPatternTransform=CanvasPattern.prototype.setTransform?true:false;
		o.kpmap={32:' ',111:'/',106:'*',109:'-',110:'.',107:'+',46:'',35:'',34:'',33:'',36:'',45:'',
		37:'',38:'',39:'',40:'',
		112:'',113:'',114:'',115:'',116:'',117:'',118:'',119:'',120:'',121:'',122:'',123:''};
		return o;
	};
	m.detectEnvironment=function(){
		if(!o.capabilities.c2dPatternTransform)CanvasPattern.prototype.setTransform=function(m){};
		if(!o.capabilities.c2dStrokeTest)CanvasRenderingContext2D.prototype.isPointInStroke=function(x,y){return false;};
		return o;
	};
	m.initClockwork=function(){
		var zcl=new zetaret.global.packages.clockwork.Clockwork();
		o.zcl=zcl;
		zcl.useXeltoSS=o.capabilities.lowq?false:true;
		XeltoSS.InitXeltoSSPrototypes();
		return o;
	};
	m.initClasses=function(xlist, scrcntnr){
		if (o.zcl.useXeltoSS){
			o.zcl.scriptContainer=scrcntnr||document.getElementById('xeltoss_script_container');
			o.zcl.initTokens().initOperators().initKeywords();
			o.zcl.runXeltoSS(xlist);
		}
		return o;
	};
	m.initStage=function(cntxt,cnvscntnr,stagedata){
		if(!stagedata)stagedata={};
		o.stageData=stagedata;
		if(!stagedata.clearColor)stagedata.clearColor="#EAEAEA";
		var cc=new zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer(),stage;
		cc.setContext(cntxt||document.getElementById("canvas").getContext('2d', {
			alpha: false
		})).setDefaultContext()
		.generateIntLookup(zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer.TYPES, zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES);
		cc.clearColor=stagedata.clearColor;
		if(o.debug)console.log(cc);
		stage=new zetaret.global.packages.clockwork.controllers.Stage2DController();
		o.stage=stage;
		stage.initHtml(cnvscntnr||document.getElementById('canvas-container')).initStage(cc).initRendererMediator()
		.setBubbleMechanics(zetaret.global.packages.clockwork.controllers.ChildController.BUBBLE);
		if(o.debug)console.log(stage.rendererMediator);
		stage.createContext("__interactive__");
		stage.createContext("__cache__");
		if(o.debug)console.log(stage);
		return o;
	};
	m.initInteraction=function(cnvs,interdata){
		if(!interdata)interdata={};
		o.interactionData=interdata;
		if(!interdata.overCursorClass)interdata.overCursorClass="canvas-over";
		var mousec,interc,keybc,stage=o.stage;
		interc=new zetaret.global.packages.clockwork.controllers.InteractionController();
		o.interc=interc;
		interc.TYPES=zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES;
		interc.allowStrokeTest=o.capabilities.c2dStrokeTest;
		interc.setInteractiveContext(stage.getContext("__interactive__")).setContextRenderer(stage.renderer).initInteractiveMediator().configPathTypes();
		stage.htmlContainer.appendChild(interc.interactiveContext.canvas);
		interc.drawDebug=true;
		interc.setInteractID(stage.root.target, {
			mouseEnabled: true,
			mouseChildren: true
		});
		if(o.debug)console.log(interc);

		mousec=new zetaret.global.packages.clockwork.controllers.MouseController();
		o.mousec=mousec;
		mousec.autoTransformInteraction=true;
		mousec.init(stage, interc, cnvs||document.getElementById("canvas")).initDefaultEvents().preventCaptureTypes(["mousemove"]);
		mousec.mouseCursorHandlers.auto = function(id) {
			stage.renderer.defaultContext.canvas.classList.remove(interdata.overCursorClass);
		};
		mousec.mouseCursorHandlers.pointer=function(id) {
			stage.renderer.defaultContext.canvas.classList.add(interdata.overCursorClass);
		};
		if(o.debug)console.log(mousec);

		keybc=new zetaret.global.packages.clockwork.controllers.KeyboardController();
		o.keybc=keybc;
		keybc.init(stage, interc, document).initDefaultEvents();
		keybc.addInteractionData(stage.root.target);
		if(o.debug)console.log(keybc);
		return o;
	};
	m.remouse=function(){
		var customEvent=o.mouseEvent,mousec=o.mousec;
		if (mousec.lastMouseMoveEvent) {
			customEvent.type="mousemove";
			customEvent.bubbles=true;
			customEvent.cancelBubble=false;
			customEvent.cancelable=false;
			customEvent.currentTarget=null;
			customEvent.defaultPrevented=false;
			customEvent.targetMap=null;
			customEvent.identifier=null;
			customEvent.eventPhase=ZetaRet_Event.CAPTURE_PHASE;
			customEvent.setNativeEvent(mousec.lastMouseMoveEvent);
			customEvent.updateTargetOffset();
			mousec.mouseEventHandler(mousec.lastMouseMoveEvent,null,null,customEvent);
		}
		return o;
	};
	m.render=function(){
		o.stage.clearStage();
		o.stage.renderStage();
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});
