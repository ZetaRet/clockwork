> __Author: Zeta Ret, Ivo Yankulovski__  
> __page container model__  
# display object container with constructors/destructors and adjacent events/methods  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::PageBase  
> Inherits: [zetaret.global.packages.clockwork.data::ChildContainer](../data/ChildContainer.md), [zetaret.global.packages.clockwork.ui::DisplayObject](DisplayObject.md)  
> Interfaces:   

### *Properties*  

#  
__destroyed__ Boolean  
default false,   

#  
__autoDestroy__ Boolean  
default true,   

#  
__pageInited__ Boolean  
default false,   

#  
__Data__ Object  
default null,   


##  
### *Methods*  

##  
__PageBase() : *void*__  
  
> *return __void__*  

##  
__onPageInit(*zetaret.global.packages.clockwork.events.interfaces.IEvent* event) : *void*__  
  
- event - __*zetaret.global.packages.clockwork.events.interfaces.IEvent*__,   
> *return __void__*  

##  
__initPage() : *void*__  
  
> *return __void__*  

##  
__onInit(*zetaret.global.packages.clockwork.events.interfaces.IEvent* event) : *void*__  
  
- event - __*zetaret.global.packages.clockwork.events.interfaces.IEvent*__,   
> *return __void__*  

##  
__onDestroy(*zetaret.global.packages.clockwork.events.interfaces.IEvent* event) : *void*__  
  
- event - __*zetaret.global.packages.clockwork.events.interfaces.IEvent*__,   
> *return __void__*  

##  
__resizeStage(*Number* width, *Number* height) : *void*__  
  
- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
> *return __void__*  

##  
__onStageResize(*zetaret.global.packages.clockwork.events.interfaces.IEvent* event) : *void*__  
  
- event - __*zetaret.global.packages.clockwork.events.interfaces.IEvent*__,   
> *return __void__*  

##  
__Init(*Object* data) : *void*__  
  
- data - __*Object*__,   
> *return __void__*  

##  
__Build() : *void*__  
  
> *return __void__*  

##  
__UpdateSize() : *zetaret.global.packages.clockwork.ui::PageBase*__  
  
> *return __zetaret.global.packages.clockwork.ui::PageBase__*  

##  
__BeforeDestroy() : *void*__  
  
> *return __void__*  

##  
__Destroy() : *void*__  
  
> *return __void__*  

##  
___constructor() : *void*__  
  
> *return __void__*  

##  
___destructor() : *void*__  
  
> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
