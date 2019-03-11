> __Author: Zeta Ret, Ivo Yankulovski__  
> __event model used in event dispatchers__  
# bubbles, phase, target and native capabilities support  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.events::Event  
> Inherits: ZetaRet_Event  
> Interfaces: zetaret.global.packages.clockwork.events.interfaces::IEvent  

### *Properties*  

#  
__type__ String  
default null,   

#  
__bubbles__ Boolean  
default false,   

#  
__cancelBubble__ Boolean  
default false,   

#  
__cancelable__ Boolean  
default false,   

#  
__currentTarget__ /interfaces.IEventTarget  
default null,   

#  
__target__ /interfaces.IEventTarget  
default null,   

#  
__defaultPrevented__ Boolean  
default false,   

#  
__targetMap__ Object  
default null,   

#  
__eventPhase__ String  
default null,   

#  
__time__ Number  
default 0,   

#  
__creator__ Object  
default null,   

#  
__nativeEvent__ Object|Event  
default null, native browser dom event or custom object  

#  
__identifier__ String  
default null,   

#  
___capabilities__ Object  
default null,   


##  
### *Methods*  

##  
__Event(*String* type, */interfaces.IEventTarget* target) : *void*__  

- __type*__ - __*String*__,   
- target - __*/interfaces.IEventTarget*__,   
> *return __void__*  

##  
__preventBubble() : *zetaret.global.packages.clockwork.events::Event*__  

> *return __zetaret.global.packages.clockwork.events::Event__*  

##  
__preventDefault() : *zetaret.global.packages.clockwork.events::Event*__  

> *return __zetaret.global.packages.clockwork.events::Event__*  

##  
__preventCapture() : *zetaret.global.packages.clockwork.events::Event*__  

> *return __zetaret.global.packages.clockwork.events::Event__*  

##  
__stopPropagation() : *zetaret.global.packages.clockwork.events::Event*__  

> *return __zetaret.global.packages.clockwork.events::Event__*  

##  
__stopImmediatePropagation() : *zetaret.global.packages.clockwork.events::Event*__  

> *return __zetaret.global.packages.clockwork.events::Event__*  

##  
__setEventPhase(*String* phase) : *zetaret.global.packages.clockwork.events::Event*__  

- __phase*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.events::Event__*  

##  
__setEventType(*String* type) : *zetaret.global.packages.clockwork.events::Event*__  

- __type*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.events::Event__*  

##  
__setEventTarget(*/interfaces.IEventTarget* target) : *zetaret.global.packages.clockwork.events::Event*__  

- __target*__ - __*/interfaces.IEventTarget*__,   
> *return __zetaret.global.packages.clockwork.events::Event__*  

##  
__setEventCurrentTarget(*/interfaces.IEventTarget* target) : *zetaret.global.packages.clockwork.events::Event*__  

- __target*__ - __*/interfaces.IEventTarget*__,   
> *return __zetaret.global.packages.clockwork.events::Event__*  

##  
__addToTargetMap(*/interfaces.IEventTarget* target) : *zetaret.global.packages.clockwork.events::Event*__  

- __target*__ - __*/interfaces.IEventTarget*__,   
> *return __zetaret.global.packages.clockwork.events::Event__*  

##  
__setNativeEvent(*Object|Event* e) : *zetaret.global.packages.clockwork.events::Event*__  

- __e*__ - __*Object|Event*__,   
> *return __zetaret.global.packages.clockwork.events::Event__*  

##  
__clone() : *zetaret.global.packages.clockwork.events::Event*__  
executes cloning and returns new instance of the same constructor, checks constructor.eventprops for additional cloning instructions  
> *return __zetaret.global.packages.clockwork.events::Event__*  

##  
### *Static Properties*  

#  
__BUBBLE_PHASE__ String  
default 'bubblePhase',   

#  
__CAPTURE_PHASE__ String  
default 'capturePhase',   

#  
__NO_PHASE__ String  
default 'noPhase',   

#  
__NULL_PHASE__ String  
default 'nullPhase',   

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator