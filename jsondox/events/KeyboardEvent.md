> __Author: Zeta Ret__  
> __keyboard event model used in keyboard controller__  
# key, code, and numeric keyCode properties and methods, overrides setNativeEvent to use DOM KeyboardEvent  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.events::KeyboardEvent  
> Inherits: [zetaret.global.packages.clockwork.events::Event](Event.md)  
> Interfaces: zetaret.global.packages.clockwork.events.interfaces::IKeyboardEvent  

### *Properties*  

#  
__key__ String  
default '',   

#  
__code__ String  
default '',   

#  
__keyCode__ Number  
default 0,   


##  
### *Methods*  

##  
__KeyboardEvent(*String* type, */interfaces.IEventTarget* target) : *void*__  
  
- __type*__ - __*String*__,   
- target - __*/interfaces.IEventTarget*__,   
> *return __void__*  

##  
__getKey() : *String*__  
  
> *return __String__*  

##  
__getCode() : *String*__  
  
> *return __String__*  

##  
__getKeyCode() : *String*__  
  
> *return __String__*  

##  
__setNativeEvent(*KeyboardEvent* e) : *zetaret.global.packages.clockwork.events::KeyboardEvent*__  
  
- __e*__ - __*KeyboardEvent*__,   
> *return __zetaret.global.packages.clockwork.events::KeyboardEvent__*  

