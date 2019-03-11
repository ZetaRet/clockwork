> __Author: Zeta Ret, Ivo Yankulovski__  
> __mouse event model used in mouse controller__  
# x/y, local x/y, offset x/y properties and methods, overrides setNativeEvent to use DOM MouseEvent  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.events::MouseEvent  
> Inherits: [zetaret.global.packages.clockwork.events::Event](Event.md)  
> Interfaces: zetaret.global.packages.clockwork.events.interfaces::IMouseEvent  

### *Properties*  

#  
__x__ Number  
default 0,   

#  
__y__ Number  
default 0,   

#  
__ox__ Number  
default 0,   

#  
__oy__ Number  
default 0,   

#  
__lx__ Number  
default 0,   

#  
__ly__ Number  
default 0,   

#  
__keys__ Object  
default null,   


##  
### *Methods*  

##  
__MouseEvent(*String* type, */interfaces.IEventTarget* target) : *void*__  
  
- __type*__ - __*String*__,   
- target - __*/interfaces.IEventTarget*__,   
> *return __void__*  

##  
__getX() : *Number*__  
  
> *return __Number__*  

##  
__getY() : *Number*__  
  
> *return __Number__*  

##  
__getLocalX() : *Number*__  
  
> *return __Number__*  

##  
__getLocalY() : *Number*__  
  
> *return __Number__*  

##  
__getOffsetX() : *Number*__  
  
> *return __Number__*  

##  
__getOffsetY() : *Number*__  
  
> *return __Number__*  

##  
__getKeys() : *Object*__  
  
> *return __Object__*  

##  
__getMouseIn(*HTMLElement* el) : *Object*__  
  
- __el*__ - __*HTMLElement*__,   
> *return __Object__*  

##  
__updateTargetOffset() : *zetaret.global.packages.clockwork.events::MouseEvent*__  
  
> *return __zetaret.global.packages.clockwork.events::MouseEvent__*  

##  
__getXY() : *Array*__  
  
> *return __Array__*  

##  
__setNativeEvent(*MouseEvent* e) : *zetaret.global.packages.clockwork.events::MouseEvent*__  
  
- __e*__ - __*MouseEvent*__,   
> *return __zetaret.global.packages.clockwork.events::MouseEvent__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
