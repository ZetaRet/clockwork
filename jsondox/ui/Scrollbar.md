> __Author: Zeta Ret__  
> __scrollbar model__  
# draggable display object container with background and button shapes, supports horizontal/vertical view  
> *Requires: protoss.all.js*  
> *Version: 1.05*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::Scrollbar  
> Inherits: [zetaret.global.packages.clockwork.ui::DisplayObjectContainer](DisplayObjectContainer.md)  
> Interfaces: zetaret.global.packages.clockwork.ui.interfaces::IScrollbar  

### *Properties*  

#  
__horizontal__ Boolean  
default false,   

#  
__size__ Number  
default 0,   

#  
__position__ Number  
default 0,   

#  
__barsize__ Number  
default 0,   

#  
__wheelsize__ Number  
default 25,   

#  
__percentage__ Number  
default 0,   

#  
__bg__ zetaret.global.packages.clockwork.ui.Shape  
default new,   

#  
__bar__ zetaret.global.packages.clockwork.ui.Shape  
default new,   

#  
__xyRound__ Boolean  
default true,   


##  
### *Methods*  

##  
__Scrollbar() : *void*__  
  
> *return __void__*  

##  
__initBar(*Number* barsize, *Number* size) : *zetaret.global.packages.clockwork.ui::Scrollbar*__  
  
- __barsize*__ - __*Number*__,   
- __size*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::Scrollbar__*  

##  
__buttonDefaultPrevent(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* s) : *void*__  
  
- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __s*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__buttonDefaultStop(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* s) : *void*__  
  
- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __s*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__onBgClick(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* s) : *void*__  
  
- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __s*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__onWheel(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* s) : *void*__  
  
- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __s*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__onBarDrag(*Number* ix, *Number* iy, *Number* ddx, *Number* ddy, *zetaret.global.packages.clockwork.controllers.DragController* ds) : *void*__  
  
- __ix*__ - __*Number*__,   
- __iy*__ - __*Number*__,   
- __ddx*__ - __*Number*__,   
- __ddy*__ - __*Number*__,   
- __ds*__ - __*zetaret.global.packages.clockwork.controllers.DragController*__,   
> *return __void__*  

##  
__getSize() : *Number*__  
  
> *return __Number__*  

##  
__setScrollP(*Number* p) : *zetaret.global.packages.clockwork.ui::Scrollbar*__  
  
- __p*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::Scrollbar__*  

##  
__setScroll(*Number* scroll) : *zetaret.global.packages.clockwork.ui::Scrollbar*__  
  
- __scroll*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::Scrollbar__*  

##  
__updateScroll() : *zetaret.global.packages.clockwork.ui::Scrollbar*__  
  
> *return __zetaret.global.packages.clockwork.ui::Scrollbar__*  

##  
__destruct() : *void*__  
  
> *return __void__*  

