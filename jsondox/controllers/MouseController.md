> __Author: Zeta Ret, Ivo Yankulovski__  
> __mouse controller__  
# interacts with stage, default mouse event control and maps, support of bubble events and inversed stage iterator, custom cursors, deep mask verification  
> *Requires: protoss.all.js*  
> *Version: 1.07*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.controllers::MouseController  
> Inherits:   
> Interfaces:   

### *Properties*  

#  
__controllerId__ String  
default 'mouse',   

#  
__stage__ [zetaret.global.packages.clockwork.controllers.Stage2DController](Stage2DController.md)  
default null,   

#  
__interaction__ [zetaret.global.packages.clockwork.controllers.InteractionController](InteractionController.md)  
default null,   

#  
__defaultInteractiveMap__ Object  
default {},   

#  
__mouseEventTarget__ HTMLCanvasElement  
default null,   

#  
__mouseEvents__ Array  
default [],   

#  
__mouseTargets__ Array  
default [],   

#  
__mouseIterated__ Array  
default [],   

#  
__mouseDownTargets__ Array  
default [],   

#  
__mouseOverTargets__ Array  
default [],   

#  
__mouseTargetsById__ Object  
default {},   

#  
__mouseIteratedById__ Object  
default {},   

#  
__mouseDownTargetsById__ Object  
default {},   

#  
__mouseEnabledKey__ String  
default 'mouseEnabled',   

#  
__mouseChildrenKey__ String  
default 'mouseChildren',   

#  
__mouseCustomEvent__ zetaret.global.packages.clockwork.events.MouseEvent  
default null,   

#  
__lastMouseMoveEvent__ zetaret.global.packages.clockwork.events.MouseEvent  
default null,   

#  
__lastMouseDownEvent__ zetaret.global.packages.clockwork.events.MouseEvent  
default null,   

#  
__mouseDownEventType__ String  
default 'mousedown',   

#  
__mouseUpEventType__ String  
default 'mouseup',   

#  
__mouseWheelEventType__ String  
default 'wheel',   

#  
__clickEventType__ String  
default 'click',   

#  
__mouseMoveEventType__ String  
default 'mousemove',   

#  
__mouseEnterEventType__ String  
default 'mouseover',   

#  
__mouseLeaveEventType__ String  
default 'mouseout',   

#  
__mouseUpOutsideEventType__ String  
default 'mouseupoutside',   

#  
__mouseWheelOutsideEventType__ String  
default 'wheeloutside',   

#  
__mouseCursorHandlers__ Object  
default {},   

#  
__defaultMouseCursor__ String  
default 'auto',   

#  
__mouseCursor__ String  
default '',   

#  
__useMouseOverBuffer__ Boolean  
default true,   

#  
__useMergedCursors__ Boolean  
default false,   

#  
__preventNative__ Boolean  
default true,   

#  
__preventNativeOnAny__ Boolean  
default false,   

#  
__ignoreMask__ Boolean  
default false,   

#  
__interactiveMode__ Boolean  
default false,   

#  
__autoPreventCapture__ Boolean  
default true,   

#  
__autoPreventTypes__ Object  
default {},   

#  
__autoTransformInteraction__ Boolean  
default false,   

#  
__mouseCapabilities__ Object  
default {},   

#  
__defaultEvents__ Array  
default ['click','dblclick','mousemove','mousedown','mouseout','mouseup','wheel','touchstart','touchend','touchmove','touchcancel'],   

#  
__systemXY__ Boolean  
default false,   

#  
__systemXKey__ String  
default '_systemX',   

#  
__systemYKey__ String  
default '_systemY',   


##  
### *Methods*  

##  
__MouseController() : *void*__  
  
> *return __void__*  

##  
__init(*[/Stage2DController](Stage2DController.md)* stage, *[/InteractionController](InteractionController.md)* interaction, *HTMLCanvasElement* target) : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
- __stage*__ - __*[/Stage2DController](Stage2DController.md)*__,   
- __interaction*__ - __*[/InteractionController](InteractionController.md)*__,   
- __target*__ - __*HTMLCanvasElement*__,   
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__initCapabilities() : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__initDefaultEvents() : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__preventCaptureTypes(*Array* types) : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
- __types*__ - __*Array*__,   
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__getInteractionData(*Object* id) : *Object*__  
  
- __id*__ - __*Object*__,   
> *return __Object__*  

##  
__addInteractionData(*Object* dobj) : *Object*__  
  
- __dobj*__ - __*Object*__,   
> *return __Object__*  

##  
__addMouseEvent(*String* type) : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
- __type*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__bubbleEventHandler(*Object* child, *Object* parent, *zetaret.global.packages.clockwork.events.MouseEvent* customEvent) : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
- __child*__ - __*Object*__,   
- __parent*__ - __*Object*__,   
- __customEvent*__ - __*zetaret.global.packages.clockwork.events.MouseEvent*__,   
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__maskVerify(*Object* child, *Number* x, *Number* y) : *Boolean*__  
  
- __child*__ - __*Object*__,   
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
> *return __Boolean__*  

##  
__restoreInteraction() : *void*__  
  
> *return __void__*  

##  
__stageIterator(*Object* child, *Function* f, *zetaret.global.packages.clockwork.events.MouseEvent* customEvent, *Object* parent, *Array* list, *String* type, *Object* childo) : *Boolean*__  
  
- __child*__ - __*Object*__,   
- __f*__ - __*Function*__,   
- __customEvent*__ - __*zetaret.global.packages.clockwork.events.MouseEvent*__,   
- parent - __*Object*__,   
- list - __*Array*__,   
- type - __*String*__,   
- childo - __*Object*__,   
> *return __Boolean__*  

##  
__mouseEventHandler_touchstart(*MouseEvent* e) : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
- __e*__ - __*MouseEvent*__,   
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__mouseEventHandler_touchend(*MouseEvent* e) : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
- __e*__ - __*MouseEvent*__,   
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__mouseEventHandler_touchmove(*MouseEvent* e) : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
- __e*__ - __*MouseEvent*__,   
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__mouseEventHandler_touchcancel(*MouseEvent* e) : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
- __e*__ - __*MouseEvent*__,   
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__removeMouseId(*Object* id) : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
- __id*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__computeSystemXY(*Object* event) : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
- __event*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__mouseEventHandler(*MouseEvent* e, *Object* data, *String* id, *zetaret.global.packages.clockwork.events.MouseEvent* customEvent, *zetaret.global.packages.clockwork.events.MouseEvent* overEvent, *zetaret.global.packages.clockwork.events.MouseEvent* outEvent) : *zetaret.global.packages.clockwork.controllers::MouseController*__  
  
- __e*__ - __*MouseEvent*__,   
- data - __*Object*__,   
- id - __*String*__,   
- customEvent - __*zetaret.global.packages.clockwork.events.MouseEvent*__,   
- overEvent - __*zetaret.global.packages.clockwork.events.MouseEvent*__,   
- outEvent - __*zetaret.global.packages.clockwork.events.MouseEvent*__,   
> *return __zetaret.global.packages.clockwork.controllers::MouseController__*  

##  
__setMouseCursor(*String* id) : *Boolean*__  
  
- __id*__ - __*String*__,   
> *return __Boolean__*  

##  
__any() : *Boolean*__  
  
> *return __Boolean__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
