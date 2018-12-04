> __Author: Zeta Ret, Ivo Yankulovski__  
> __mouse event model used in mouse controller__  
# x/y, local x/y, offset x/y properties and methods, overrides setNativeEvent to use DOM MouseEvent  
> *Requires: protoss.all.js*  
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
__getXY() : *Array*__  
  
> *return __Array__*  

##
__setNativeEvent(*MouseEvent* e) : *zetaret.global.packages.clockwork.events::KeyboardEvent*__  
  
- __e*__ - __*MouseEvent*__,   
> *return __zetaret.global.packages.clockwork.events::KeyboardEvent__*  

---
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
