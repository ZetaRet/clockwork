> __Author: Zeta Ret, Ivo Yankulovski__  
> __scrolling container model__  
# rectangular masked display object container with background and horizontal/vertical support  
> *Requires: protoss.all.js*  
> *Version: 1.05*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::Scrollpane  
> Inherits: [zetaret.global.packages.clockwork.ui::DisplayObjectContainer](DisplayObjectContainer.md)  

### *Properties*  

#  
__container__ zetaret.global.packages.clockwork.ui.DisplayObjectContainer  
default new,   

#  
__bg__ zetaret.global.packages.clockwork.ui.Shape  
default new,   

#  
__bgcolor__ Number|String|CanvasGradient|CanvasPattern  
default 0x00000000,   

#  
__maskobj__ zetaret.global.packages.clockwork.ui.Shape  
default new,   

#  
__autoInvalidate__ Boolean  
default true,   

#  
__maskWidth__ Number  
default 0,   

#  
__maskHeight__ Number  
default 0,   

#  
__scrollWidth__ Number  
default 0,   

#  
__scrollHeight__ Number  
default 0,   

#  
__xoffset__ Number  
default 0,   

#  
__yoffset__ Number  
default 0,   

#  
__xyRound__ Boolean  
default true,   


##  
### *Methods*  

##  
__Scrollpane() : *void*__  
  
> *return __void__*  

##  
__initScrollpane(*Number* width, *Number* height) : *zetaret.global.packages.clockwork.ui::Scrollpane*__  
  
- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::Scrollpane__*  

##  
__setScrollSize(*Number* width, *Number* height) : *zetaret.global.packages.clockwork.ui::Scrollpane*__  
  
- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::Scrollpane__*  

##  
__setOffset(*Number* x, *Number* y) : *zetaret.global.packages.clockwork.ui::Scrollpane*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::Scrollpane__*  

##  
__setScrollMask(*Number* width, *Number* height) : *zetaret.global.packages.clockwork.ui::Scrollpane*__  
  
- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::Scrollpane__*  

##  
__isHScroll() : *Boolean*__  
  
> *return __Boolean__*  

##  
__isVScroll() : *Boolean*__  
  
> *return __Boolean__*  

##  
__setScroll() : *zetaret.global.packages.clockwork.ui::Scrollpane*__  
  
> *return __zetaret.global.packages.clockwork.ui::Scrollpane__*  

##  
__setScrollP() : *zetaret.global.packages.clockwork.ui::Scrollpane*__  
  
> *return __zetaret.global.packages.clockwork.ui::Scrollpane__*  

##  
__addContent(*zetaret.global.packages.clockwork.ui.DisplayObject* dobj) : *void*__  
  
- __dobj*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __void__*  

##  
__destruct() : *void*__  
  
> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator