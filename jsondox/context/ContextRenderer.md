> __Author: Zeta Ret, Ivo Yankulovski__  
> __base context renderer wrapper__  
# mapping, clear, invalidation and rendering capabilities  
> *Requires: protoss.all.js*  
> *Version: 1.06*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.context::ContextRenderer  
> Inherits: [zetaret.global.packages.clockwork.events::EventDispatcher](../events/EventDispatcher.md)  
> Interfaces:   

### *Properties*  

#  
__context__ CanvasRenderingContext2D  
default null,   

#  
__defaultContext__ CanvasRenderingContext2D  
default null,   

#  
__intlookup__ Object  
default null,   

#  
__invalid__ Boolean  
default false,   

#  
__invalidArea__ Array  
default [],   

#  
__setters__ Object  
default {},   

#  
__externalRenderer__ zetaret.global.packages.clockwork.context.ContextRenderer  
default null,   

#  
__externalEnabled__ Boolean  
default false,   

#  
__type__ String  
default '',   


##  
### *Methods*  

##  
__ContextRenderer() : *void*__  
  
> *return __void__*  

##  
__setExternalRenderer(*zetaret.global.packages.clockwork.context.ContextRenderer* renderer) : *zetaret.global.packages.clockwork.context::ContextRenderer*__  
  
- __renderer*__ - __*zetaret.global.packages.clockwork.context.ContextRenderer*__,   
> *return __zetaret.global.packages.clockwork.context::ContextRenderer__*  

##  
__setSetters(*Array* settersar, *Object* v) : *zetaret.global.packages.clockwork.context::ContextRenderer*__  
  
- __settersar*__ - __*Array*__,   
- __v*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.context::ContextRenderer__*  

##  
__setContext(*CanvasRenderingContext2D* context) : *zetaret.global.packages.clockwork.context::ContextRenderer*__  
  
- __context*__ - __*CanvasRenderingContext2D*__,   
> *return __zetaret.global.packages.clockwork.context::ContextRenderer__*  

##  
__setDefaultContext() : *zetaret.global.packages.clockwork.context::ContextRenderer*__  
  
> *return __zetaret.global.packages.clockwork.context::ContextRenderer__*  

##  
__getContext() : *CanvasRenderingContext2D*__  
  
> *return __CanvasRenderingContext2D__*  

##  
__clear() : *zetaret.global.packages.clockwork.context::ContextRenderer*__  
  
> *return __zetaret.global.packages.clockwork.context::ContextRenderer__*  

##  
__invalidate() : *zetaret.global.packages.clockwork.context::ContextRenderer*__  
  
> *return __zetaret.global.packages.clockwork.context::ContextRenderer__*  

##  
__invalidateRect(*Number* x, *Number* y, *Number* width, *Number* height) : *zetaret.global.packages.clockwork.context::ContextRenderer*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.context::ContextRenderer__*  

##  
__clearInvalid() : *zetaret.global.packages.clockwork.context::ContextRenderer*__  
  
> *return __zetaret.global.packages.clockwork.context::ContextRenderer__*  

##  
__generateIntLookup(*Object* ctxtypes, *Object* graphictypes) : *zetaret.global.packages.clockwork.context::ContextRenderer*__  
  
- __ctxtypes*__ - __*Object*__,   
- __graphictypes*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.context::ContextRenderer__*  

##  
__directRender(*Array* data) : *zetaret.global.packages.clockwork.context::ContextRenderer*__  
  
- __data*__ - __*Array*__,   
> *return __zetaret.global.packages.clockwork.context::ContextRenderer__*  

##  
__intArrayToDirect(*Array* data) : *Array*__  
  
- __data*__ - __*Array*__,   
> *return __Array__*  

##  
__intArrayRender(*Array* data) : *zetaret.global.packages.clockwork.context::ContextRenderer*__  
  
- __data*__ - __*Array*__,   
> *return __zetaret.global.packages.clockwork.context::ContextRenderer__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
