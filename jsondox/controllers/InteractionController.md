> __Author: Zeta Ret, Ivo Yankulovski__  
> __interaction controller__  
# independent interaction context with maps and types  
> *Requires: protoss.all.js*  
> *Version: 1.07*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.controllers::InteractionController  

### *Properties*  

#  
__controllerId__ String  
default 'interaction',   

#  
__interactiveContext__ CanvasRenderingContext2D  
default null,   

#  
__interactiveMediator__ zetaret.global.packages.clockwork.mediators.GraphicContext2DMediator  
default null,   

#  
__interactiveMap__ Object  
default {},   

#  
__interactiveVars__ Object  
default {},   

#  
__interactivePointers__ Object  
default {},   

#  
__TYPES__ Object  
default null,   

#  
__pathTypes__ Array  
default [],   

#  
__ctxrenderer__ zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer  
default null,   

#  
__interactCount__ Number  
default 0,   

#  
__interactIDKey__ String  
default '__interactid',   

#  
__idradix__ Number  
default 36,   

#  
__idlength__ Number  
default 8,   

#  
__idaffix__ String  
default ',   

#  
__pixelTestBlend__ String  
default 'source-in',   

#  
__pixelMaskColor__ String  
default '#FFFF00',   

#  
__pixelTestColor__ String  
default '#AA00AA',   

#  
__pixelTestSize__ Number  
default 2,   

#  
__pixelSearchInt__ Number  
default 0xAA,   

#  
__useSetPixels__ Boolean  
default false,   

#  
__useSearchPixels__ Boolean  
default false,   

#  
__autoRevertBlend__ Boolean  
default false,   

#  
__autoClean__ Boolean  
default true,   

#  
__splitSearch__ Number  
default 10,   

#  
__interlace__ Boolean  
default false,   

#  
__drawDebug__ Boolean  
default false,   

#  
__drawDebugFill__ String  
default '#FF0000',   

#  
__debugChannel__ Number  
default 0,   

#  
__debugPixel__ Number  
default 0xff,   

#  
__pixelTest__ Boolean  
default false,   

#  
__allowStrokeTest__ Boolean  
default false,   

#  
__requireClean__ Boolean  
default false,   

#  
__computeTransform__ Boolean  
default false,   


##  
### *Methods*  

##  
__InteractionController() : *void*__  

> *return __void__*  

##  
__initInteractiveMediator() : *zetaret.global.packages.clockwork.controllers::InteractionController*__  

> *return __zetaret.global.packages.clockwork.controllers::InteractionController__*  

##  
__configPathTypes() : *zetaret.global.packages.clockwork.controllers::InteractionController*__  

> *return __zetaret.global.packages.clockwork.controllers::InteractionController__*  

##  
__clearPathTypes() : *zetaret.global.packages.clockwork.controllers::InteractionController*__  

> *return __zetaret.global.packages.clockwork.controllers::InteractionController__*  

##  
__setContextRenderer(*zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer* ctxrenderer) : *zetaret.global.packages.clockwork.controllers::InteractionController*__  

- __ctxrenderer*__ - __*zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer*__,   
> *return __zetaret.global.packages.clockwork.controllers::InteractionController__*  

##  
__setInteractiveContext(*CanvasRenderingContext2D* ctx) : *zetaret.global.packages.clockwork.controllers::InteractionController*__  

- __ctx*__ - __*CanvasRenderingContext2D*__,   
> *return __zetaret.global.packages.clockwork.controllers::InteractionController__*  

##  
__clearInteractiveContext() : *zetaret.global.packages.clockwork.controllers::InteractionController*__  

> *return __zetaret.global.packages.clockwork.controllers::InteractionController__*  

##  
__setInteractID(*Object* dobj, *Object* vars, *Object* pointers) : *Object*__  

- __dobj*__ - __*Object*__,   
- vars - __*Object*__,   
- pointers - __*Object*__,   
> *return __Object__*  

##  
__unsetInteractID(*Object* dobj) : *zetaret.global.packages.clockwork.controllers::InteractionController*__  

- __dobj*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.controllers::InteractionController__*  

##  
__getInteractMap(*Object* dobj) : *Object*__  

- __dobj*__ - __*Object*__,   
> *return __Object__*  

##  
__getInteractVar(*Object* dobj, *String* key) : *Object*__  

- __dobj*__ - __*Object*__,   
- __key*__ - __*String*__,   
> *return __Object__*  

##  
__setInteractiveMap(*String* iid, *Array* path) : *zetaret.global.packages.clockwork.controllers::InteractionController*__  

- __iid*__ - __*String*__,   
- __path*__ - __*Array*__,   
> *return __zetaret.global.packages.clockwork.controllers::InteractionController__*  

##  
__unsetInteractiveMap(*String* iid, *Object* vars, *Object* pointers) : *zetaret.global.packages.clockwork.controllers::InteractionController*__  

- __iid*__ - __*String*__,   
- vars - __*Object*__,   
- pointers - __*Object*__,   
> *return __zetaret.global.packages.clockwork.controllers::InteractionController__*  

##  
__updateInteractId(*Object* dobj, *Object* vars) : *Boolean*__  

- __dobj*__ - __*Object*__,   
- vars - __*Object*__,   
> *return __Boolean__*  

##  
__hitTestPoint(*Object* dobj, *Number* x, *Number* y, *Boolean* mapped, *Array* tm) : *Boolean*__  

- __dobj*__ - __*Object*__,   
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- mapped - __*Boolean*__,   
- tm - __*Array*__,   
> *return __Boolean__*  

##  
__hitTestObject(*Object* dobj, *Object* dobj2, *Boolean* mapped) : *Boolean*__  

- __dobj*__ - __*Object*__,   
- __dobj2*__ - __*Object*__,   
- mapped - __*Boolean*__,   
> *return __Boolean__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator