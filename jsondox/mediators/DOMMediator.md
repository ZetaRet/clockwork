> __Author: Zeta Ret, Ivo Yankulovski__  
> __HTML Dom Mediator__  
# mediate events from HTMLElement into another object  
> *Requires: protoss.all.js*  
> *Version: 1.02*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.mediators::DOMMediator  
> Inherits: [zetaret.global.packages.clockwork.events::EventDispatcher](../events/EventDispatcher.md)  
> Interfaces:   

### *Properties*  

#
__obj__ Object  
default obj,   

#
__domo__ HTMLElement  
default domo,   


##
### *Methods*  

##
__DOMMediator(*Object* obj, *HTMLElement* domo) : *void*__  
  
- obj - __*Object*__,   
- domo - __*HTMLElement*__,   
> *return __void__*  

##
__eventize(*String* e1, *String* e2, *zetaret.global.packages.clockwork.events.Event|Function* cls, *String* fname, *Function* h, *Object* obj, *HTMLElement* domo) : *Function*__  
  
- __e1*__ - __*String*__,   
- __e2*__ - __*String*__,   
- __cls*__ - __*zetaret.global.packages.clockwork.events.Event|Function*__,   
- __fname*__ - __*String*__,   
- h - __*Function*__,   
- obj - __*Object*__,   
- domo - __*HTMLElement*__,   
> *return __Function__*  

---
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
