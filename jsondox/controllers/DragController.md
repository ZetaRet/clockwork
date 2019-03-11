> __Author: Zeta Ret, Ivo Yankulovski__  
> __display object drag controller__  
# controller with tracking events on down/move/up with Stage2DController or HTMLDocument, setup/unsetup methods  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.controllers::DragController  

### *Properties*  

#  
__dragging__ Boolean  
default false,   

#  
__enabled__ Boolean  
default false,   

#  
__target__ zetaret.global.packages.clockwork.ui.DisplayObject  
default null,   

#  
__downHandler__ Function  
default null,   

#  
__dragHandler__ Function  
default null,   

#  
__upHandler__ Function  
default null,   

#  
__downArgs__ Object  
default null,   

#  
__dragArgs__ Object  
default null,   

#  
__upArgs__ Object  
default null,   

#  
__lastEvent__ MouseEvent|zetaret.global.packages.clockwork.events.MouseEvent  
default null,   

#  
__downEvent__ MouseEvent|zetaret.global.packages.clockwork.events.MouseEvent  
default null,   

#  
__moveEvent__ MouseEvent|zetaret.global.packages.clockwork.events.MouseEvent  
default null,   

#  
__upEvent__ MouseEvent|zetaret.global.packages.clockwork.events.MouseEvent  
default null,   

#  
__stage__ HTMLDocument|zetaret.global.packages.clockwork.controllers.Stage2DController  
default null,   

#  
__useDocumentStage__ Boolean  
default true,   

#  
__mouseCapabilities__ Object  
default null,   


##  
### *Methods*  

##  
__DragController() : *void*__  

> *return __void__*  

##  
__setEnabled(*Boolean* value) : *zetaret.global.packages.clockwork.controllers::DragController*__  

- value - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.controllers::DragController__*  

##  
__init(*zetaret.global.packages.clockwork.ui.DisplayObject* target, *Function* downHandler, *Function* dragHandler, *Function* upHandler, *Object* downArgs, *Object* dragArgs, *Object* upArgs) : *zetaret.global.packages.clockwork.controllers::DragController*__  

- __target*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- downHandler - __*Function*__,   
- dragHandler - __*Function*__,   
- upHandler - __*Function*__,   
- downArgs - __*Object*__,   
- dragArgs - __*Object*__,   
- upArgs - __*Object*__,   
> *return __zetaret.global.packages.clockwork.controllers::DragController__*  

##  
__StartDragging(*zetaret.global.packages.clockwork.events.MouseEvent* event, *zetaret.global.packages.clockwork.controllers.Stage2DController* d) : *zetaret.global.packages.clockwork.controllers::DragController*__  

- event - __*zetaret.global.packages.clockwork.events.MouseEvent*__,   
- d - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __zetaret.global.packages.clockwork.controllers::DragController__*  

##  
__OnDragging(*MouseEvent|zetaret.global.packages.clockwork.events.MouseEvent* event, *Object|zetaret.global.packages.clockwork.controllers.Stage2DController* d) : *zetaret.global.packages.clockwork.controllers::DragController*__  

- event - __*MouseEvent|zetaret.global.packages.clockwork.events.MouseEvent*__,   
- d - __*Object|zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __zetaret.global.packages.clockwork.controllers::DragController__*  

##  
__StopDragging(*MouseEvent|zetaret.global.packages.clockwork.events.MouseEvent* event, *Object|zetaret.global.packages.clockwork.controllers.Stage2DController* d) : *zetaret.global.packages.clockwork.controllers::DragController*__  

- event - __*MouseEvent|zetaret.global.packages.clockwork.events.MouseEvent*__,   
- d - __*Object|zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __zetaret.global.packages.clockwork.controllers::DragController__*  

##  
__UnsetupDragging() : *zetaret.global.packages.clockwork.controllers::DragController*__  

> *return __zetaret.global.packages.clockwork.controllers::DragController__*  

##  
__StartDrag() : *Boolean*__  

> *return __Boolean__*  

##  
__Drag() : *Boolean*__  

> *return __Boolean__*  

##  
__EndDrag() : *Boolean*__  

> *return __Boolean__*  

##  
__InitDrag() : *void*__  

> *return __void__*  

##  
__StopDrag() : *void*__  

> *return __void__*  

##  
__Setup() : *zetaret.global.packages.clockwork.controllers::DragController*__  

> *return __zetaret.global.packages.clockwork.controllers::DragController__*  

##  
__Unsetup() : *zetaret.global.packages.clockwork.controllers::DragController*__  

> *return __zetaret.global.packages.clockwork.controllers::DragController__*  

##  
__Destroy() : *zetaret.global.packages.clockwork.controllers::DragController*__  

> *return __zetaret.global.packages.clockwork.controllers::DragController__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator