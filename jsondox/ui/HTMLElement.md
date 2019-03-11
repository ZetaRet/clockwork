> __Author: Zeta Ret, Ivo Yankulovski__  
> __ProtoSS HTMLElement model__  
# self rendering html element outside canvas represented as normal stage child in the display list  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::HTMLElement  
> Inherits: [zetaret.global.packages.clockwork.ui::DisplayObject](DisplayObject.md)  

### *Properties*  

#  
__element__ HTMLElement  
default null,   

#  
__cachedStyle__ Object  
default {},   

#  
__ctxreset__ Boolean  
default true, auto reset native context transform, alpha and color transform during self rendering  

#  
__pointer__ Boolean  
default false, allow native dom pointer over html element or traverse through canvas display list interaction controller  

#  
__zindex__ Boolean  
default true, auto compute html element css z-index based on canvas stage index of child, disable to use custom z-index i.e. negative values under the canvas element  

#  
__transformPrefix__ String  
default '',   

#  
__transformSuffix__ String  
default '',   

#  
__transformX__ String  
default '0%',   

#  
__transformY__ String  
default '0%',   

#  
__transformZ__ String  
default '0px',   


##  
### *Methods*  

##  
__HTMLElement() : *void*__  
canrender is auto set to true and uses overriden render method  
> *return __void__*  

##  
__createElement(*String* tag) : *zetaret.global.packages.clockwork.ui::HTMLElement*__  
  
- __tag*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.ui::HTMLElement__*  

##  
__onAddedToStage(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* stage) : *void*__  
  
- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__onRemovedFromStage(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* stage) : *void*__  
  
- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__setAttribute(*Object* attributes) : *zetaret.global.packages.clockwork.ui::HTMLElement*__  
  
- __attributes*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.ui::HTMLElement__*  

##  
__setStyle(*Object* style) : *zetaret.global.packages.clockwork.ui::HTMLElement*__  
  
- __style*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.ui::HTMLElement__*  

##  
__removeElement() : *HTMLElement*__  
  
> *return __HTMLElement__*  

##  
__clearElement() : *zetaret.global.packages.clockwork.ui::HTMLElement*__  
  
> *return __zetaret.global.packages.clockwork.ui::HTMLElement__*  

##  
__render(*zetaret.global.packages.clockwork.controllers.Stage2DController* stage, *zetaret.global.packages.clockwork.context.ContextRenderer* renderer, *CanvasRenderingContext2D* ctx, *Array* t, *Array* ct) : *zetaret.global.packages.clockwork.ui::HTMLElement*__  
  
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
- __renderer*__ - __*zetaret.global.packages.clockwork.context.ContextRenderer*__,   
- __ctx*__ - __*CanvasRenderingContext2D*__,   
- __t*__ - __*Array*__,   
- __ct*__ - __*Array*__,   
> *return __zetaret.global.packages.clockwork.ui::HTMLElement__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator