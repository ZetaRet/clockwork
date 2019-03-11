> __Author: Zeta Ret, Ivo Yankulovski__  
> __2D stage controller__  
# precise display graph processor of child-parent structures rendering transformations with context and mediator facility  
> *Requires: protoss.all.js*  
> *Version: 1.13*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.controllers::Stage2DController  
> Inherits: [zetaret.global.packages.clockwork.controllers::ChildController](ChildController.md)  

### *Properties*  

#  
__stageId__ String  
default 'stage',   

#  
__renderer__ zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer  
default null,   

#  
__rendererMediator__ zetaret.global.packages.clockwork.mediators.GraphicContext2DMediator  
default null,   

#  
__htmlContainer__ HTMLElement  
default null,   

#  
__childLock__ Boolean  
default false,   

#  
__childcontainercls__ zetaret.global.packages.clockwork.ui.DisplayObjectContainer  
default null,   

#  
__displayobjectcls__ zetaret.global.packages.clockwork.ui.DisplayObject  
default null,   

#  
__invalidate__ Boolean  
default false,   

#  
__invalidateRect__ Object  
default null,   

#  
__invalidateList__ Array  
default null,   

#  
__inversed__ Boolean  
default false,   

#  
__prebufferlist__ Boolean  
default false,   

#  
__prebufferinvert__ Boolean  
default false,   

#  
__cnvs__ Object  
default {},   

#  
__ctxParams__ Object  
default null,   

#  
__defaultLocalTransform__ Array  
default [1,0,0,1,0,0],   

#  
__t__ Array  
default [1,0,0,1,0,0],   

#  
__ct__ Array  
default [1,1,1,1,0,0,0,0],   

#  
__selfinvalidate__ Boolean  
default false,   

#  
__selftransform__ Boolean  
default false,   

#  
__precision__ Number  
default 15,   

#  
__precisionNum__ Number  
default 1000000000000000,   

#  
__usePrecision__ Boolean  
default false,   

#  
__controllers__ Array  
default [],   

#  
__stageWidth__ Number  
default 0,   

#  
__stageHeight__ Number  
default 0,   

#  
__errors__ Array  
default [],   

#  
__renderErrors__ Boolean  
default false,   

#  
__renderIndex__ Number  
default 0,   


##  
### *Methods*  

##  
__Stage2DController() : *void*__  

> *return __void__*  

##  
__setPrecision(*Number* precision, *Boolean* use) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __precision*__ - __*Number*__,   
- use - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__precise16(*Number* n) : *Number*__  

- __n*__ - __*Number*__,   
> *return __Number__*  

##  
__precise15(*Number* n) : *Number*__  

- __n*__ - __*Number*__,   
> *return __Number__*  

##  
__precise14(*Number* n) : *Number*__  

- __n*__ - __*Number*__,   
> *return __Number__*  

##  
__precise12(*Number* n) : *Number*__  

- __n*__ - __*Number*__,   
> *return __Number__*  

##  
__precise10(*Number* n) : *Number*__  

- __n*__ - __*Number*__,   
> *return __Number__*  

##  
__precise8(*Number* n) : *Number*__  

- __n*__ - __*Number*__,   
> *return __Number__*  

##  
__precise6(*Number* n) : *Number*__  

- __n*__ - __*Number*__,   
> *return __Number__*  

##  
__precise4(*Number* n) : *Number*__  

- __n*__ - __*Number*__,   
> *return __Number__*  

##  
__precise2(*Number* n) : *Number*__  

- __n*__ - __*Number*__,   
> *return __Number__*  

##  
__preciseR(*Number* n) : *Number*__  

- __n*__ - __*Number*__,   
> *return __Number__*  

##  
__preciseC(*Number* n) : *Number*__  

- __n*__ - __*Number*__,   
> *return __Number__*  

##  
__preciseF(*Number* n) : *Number*__  

- __n*__ - __*Number*__,   
> *return __Number__*  

##  
__preciseSinCosReport() : *Object*__  

> *return __Object__*  

##  
__initRendererMediator() : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__initStage(*zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer* renderer, *zetaret.global.packages.clockwork.ui.DisplayObjectContainer* childcontainercls, *zetaret.global.packages.clockwork.ui.DisplayObject* displayobjectcls) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __renderer*__ - __*zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer*__,   
- childcontainercls - __*zetaret.global.packages.clockwork.ui.DisplayObjectContainer*__,   
- displayobjectcls - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__initHtml(*HTMLElement* container) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __container*__ - __*HTMLElement*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__getDisplayObject() : *zetaret.global.packages.clockwork.ui::DisplayObject*__  

> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__getContainer(*zetaret.global.packages.clockwork.ui.DisplayObject* child) : *zetaret.global.packages.clockwork.ui::DisplayObjectContainer*__  

- __child*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObjectContainer__*  

##  
__transformize(*Number* a2, *Number* b2, *Number* c2, *Number* d2, *Number* e2, *Number* f2) : *Array*__  

- __a2*__ - __*Number*__,   
- __b2*__ - __*Number*__,   
- __c2*__ - __*Number*__,   
- __d2*__ - __*Number*__,   
- __e2*__ - __*Number*__,   
- __f2*__ - __*Number*__,   
> *return __Array__*  

##  
__colorTransformize(*Number* r, *Number* g, *Number* b, *Number* a, *Number* ro, *Number* go, *Number* bo, *Number* ao) : *Array*__  

- __r*__ - __*Number*__,   
- __g*__ - __*Number*__,   
- __b*__ - __*Number*__,   
- __a*__ - __*Number*__,   
- __ro*__ - __*Number*__,   
- __go*__ - __*Number*__,   
- __bo*__ - __*Number*__,   
- __ao*__ - __*Number*__,   
> *return __Array__*  

##  
__rooterTransform(*zetaret.global.packages.clockwork.ui.DisplayObject* child, *zetaret.global.packages.clockwork.ui.DisplayObjectContainer* parent, *Object* dtop) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __child*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- __parent*__ - __*zetaret.global.packages.clockwork.ui.DisplayObjectContainer*__,   
- __dtop*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__rooterTransform2(*zetaret.global.packages.clockwork.ui.DisplayObject* child, *zetaret.global.packages.clockwork.ui.DisplayObjectContainer* parent, *Object* dtop) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __child*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- __parent*__ - __*zetaret.global.packages.clockwork.ui.DisplayObjectContainer*__,   
- __dtop*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__invalidateStageChild(*zetaret.global.packages.clockwork.ui.DisplayObject* child, *Function* f, *Object* d, *zetaret.global.packages.clockwork.ui.DisplayObjectContainer* parent, *Array* list, *String* mode, *zetaret.global.packages.clockwork.ui.DisplayObject* childo) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __child*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- f - __*Function*__,   
- d - __*Object*__,   
- parent - __*zetaret.global.packages.clockwork.ui.DisplayObjectContainer*__,   
- list - __*Array*__,   
- mode - __*String*__,   
- childo - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__invalidateStageChild2(*zetaret.global.packages.clockwork.ui.DisplayObject* child, *Function* f, *Object* d, *zetaret.global.packages.clockwork.ui.DisplayObjectContainer* parent, *Array* list, *String* mode, *zetaret.global.packages.clockwork.ui.DisplayObject* childo) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __child*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- f - __*Function*__,   
- d - __*Object*__,   
- parent - __*zetaret.global.packages.clockwork.ui.DisplayObjectContainer*__,   
- list - __*Array*__,   
- mode - __*String*__,   
- childo - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__renderStageChild(*zetaret.global.packages.clockwork.ui.DisplayObject* child, *Function* f, *Object* d, *zetaret.global.packages.clockwork.ui.DisplayObjectContainer* parent, *Array* list, *String* mode, *zetaret.global.packages.clockwork.ui.DisplayObject* childo) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __child*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- f - __*Function*__,   
- d - __*Object*__,   
- parent - __*zetaret.global.packages.clockwork.ui.DisplayObjectContainer*__,   
- list - __*Array*__,   
- mode - __*String*__,   
- childo - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__restoreContext(*zetaret.global.packages.clockwork.ui.DisplayObject* child) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __child*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__renderStage(*Object* data, *zetaret.global.packages.clockwork.ui.DisplayObjectContainer* parent) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- data - __*Object*__,   
- parent - __*zetaret.global.packages.clockwork.ui.DisplayObjectContainer*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__setStageProperty(*zetaret.global.packages.clockwork.ui.DisplayObject* child, *Function* f, *Object* d, *zetaret.global.packages.clockwork.ui.DisplayObjectContainer* parent, *Array* list, *String* mode, *zetaret.global.packages.clockwork.ui.DisplayObject* childo) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __child*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- f - __*Function*__,   
- d - __*Object*__,   
- parent - __*zetaret.global.packages.clockwork.ui.DisplayObjectContainer*__,   
- list - __*Array*__,   
- mode - __*String*__,   
- childo - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__delStageProperty(*zetaret.global.packages.clockwork.ui.DisplayObject* child, *Function* f, *Object* d, *zetaret.global.packages.clockwork.ui.DisplayObjectContainer* parent, *Array* list, *String* mode, *zetaret.global.packages.clockwork.ui.DisplayObject* childo) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __child*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- f - __*Function*__,   
- d - __*Object*__,   
- parent - __*zetaret.global.packages.clockwork.ui.DisplayObjectContainer*__,   
- list - __*Array*__,   
- mode - __*String*__,   
- childo - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__setStageToChildren(*zetaret.global.packages.clockwork.ui.DisplayObject* child, *Boolean* stageEvents, *Boolean* removestage) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __child*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- stageEvents - __*Boolean*__,   
- removestage - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__clearStage() : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__resetStage() : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__createContext(*String* id, *Object* ctxp) : *CanvasRenderingContext2D*__  

- __id*__ - __*String*__,   
- ctxp - __*Object*__,   
> *return __CanvasRenderingContext2D__*  

##  
__getContext(*String* id) : *CanvasRenderingContext2D*__  

- __id*__ - __*String*__,   
> *return __CanvasRenderingContext2D__*  

##  
__changeContext(*String* id, *CanvasRenderingContext2D* ctx) : *zetaret.global.packages.clockwork.controllers::Stage2DController*__  

- __id*__ - __*String*__,   
- ctx - __*CanvasRenderingContext2D*__,   
> *return __zetaret.global.packages.clockwork.controllers::Stage2DController__*  

##  
__clearCacheContext(*String* id) : *void*__  

- __id*__ - __*String*__,   
> *return __void__*  

##  
__getController(*Function* type, *Boolean* strict) : *Object*__  

- __type*__ - __*Function*__,   
- strict - __*Boolean*__,   
> *return __Object__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator