> __Author: Zeta Ret, Ivo Yankulovski__  
> __aggregate an instance of event dispatcher__  
# subscribe, unsubscribe and observe pattern, event and data dispatching mechanism along with adjacent crud operations  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.events::EventDispatcher  
> Inherits: ZetaRet_EventDispatcher  
> Interfaces: zetaret.global.packages.clockwork.events.interfaces::IEventDispatcher, zetaret.global.packages.clockwork.events.interfaces::IEventTarget  

### *Properties*  

#  
__eventTarget__ /interfaces.IEventTarget  
default this,   

#  
__events__ Object  
default {},   


##  
### *Methods*  

##  
__EventDispatcher(*/interfaces.IEventTarget* target) : *void*__  
  
- target - __*/interfaces.IEventTarget*__,   
> *return __void__*  

##  
__setEventTarget(*/interfaces.IEventTarget* target) : *zetaret.global.packages.clockwork.events::EventDispatcher*__  
  
- __target*__ - __*/interfaces.IEventTarget*__,   
> *return __zetaret.global.packages.clockwork.events::EventDispatcher__*  

##  
__addEventListener(*String* event, *Function* callback) : *zetaret.global.packages.clockwork.events::EventDispatcher*__  
  
- __event*__ - __*String*__,   
- __callback*__ - __*Function*__,   
> *return __zetaret.global.packages.clockwork.events::EventDispatcher__*  

##  
__removeEventListener(*String* event, *Function* callback) : *zetaret.global.packages.clockwork.events::EventDispatcher*__  
  
- __event*__ - __*String*__,   
- callback - __*Function*__,   
> *return __zetaret.global.packages.clockwork.events::EventDispatcher__*  

##  
__hasEvent(*String* event) : *Boolean*__  
  
- __event*__ - __*String*__,   
> *return __Boolean__*  

##  
__dispatch(*String* event, *Object|/interfaces.IEventData* data) : *zetaret.global.packages.clockwork.events::EventDispatcher*__  
  
- __event*__ - __*String*__,   
- data - __*Object|/interfaces.IEventData*__,   
> *return __zetaret.global.packages.clockwork.events::EventDispatcher__*  

##  
__dispatchEvent(*/interfaces.IEvent* event, *Object|/interfaces.IEventData* data, *Boolean* settarget) : *zetaret.global.packages.clockwork.events::EventDispatcher*__  
  
- __event*__ - __*/interfaces.IEvent*__,   
- data - __*Object|/interfaces.IEventData*__,   
- settarget - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.events::EventDispatcher__*  

##  
__destruct() : *void*__  
  
> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
