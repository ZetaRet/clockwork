> __Author: Zeta Ret__  
> __base parent-child controller of hierarchy structures__  
# direct and inversed interator of complex structures using bubble mechanics  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.05*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.controllers::ChildController  
> Inherits: [zetaret.global.packages.clockwork.events::EventDispatcher](../events/EventDispatcher.md)  

### *Properties*  

#  
__root__ zetaret.global.packages.clockwork.data.ChildContainer  
default null,   

#  
__iterateExitHandler__ Function  
default null,   

#  
__bubbleMechanics__ String  
default '',   

#  
__bubblePhase__ String  
default '',   

#  
__childrenkey__ String  
default 'children',   

#  
__targetkey__ String  
default 'target',   

#  
__listskey__ String  
default 'lists',   

#  
__parentkey__ String  
default 'parent',   

#  
__useFractalRoot__ Boolean  
default false,   


##  
### *Methods*  

##  
__ChildController() : *void*__  
  
> *return __void__*  

##  
__setRoot(*zetaret.global.packages.clockwork.data.ChildContainer* root) : *zetaret.global.packages.clockwork.controllers::ChildController*__  
  
- __root*__ - __*zetaret.global.packages.clockwork.data.ChildContainer*__,   
> *return __zetaret.global.packages.clockwork.controllers::ChildController__*  

##  
__setBubblePhase(*String* bphase) : *zetaret.global.packages.clockwork.controllers::ChildController*__  
  
- __bphase*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.controllers::ChildController__*  

##  
__setBubbleMechanics(*String* bmech) : *zetaret.global.packages.clockwork.controllers::ChildController*__  
  
- __bmech*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.controllers::ChildController__*  

##  
__childToRoot(*Object* child, *Function* f, *Object* d, *Object* scope) : *zetaret.global.packages.clockwork.controllers::ChildController*__  
  
- __child*__ - __*Object*__,   
- __f*__ - __*Function*__,   
- d - __*Object*__,   
- scope - __*Object*__,   
> *return __zetaret.global.packages.clockwork.controllers::ChildController__*  

##  
__iterate(*Object* child, *Function* f, *Object* d, *zetaret.global.packages.clockwork.data.ChildContainer* parent, *Array* list, *Object* scope, *String* mode, *Boolean* skip) : *zetaret.global.packages.clockwork.controllers::ChildController*__  
  
- __child*__ - __*Object*__,   
- __f*__ - __*Function*__,   
- d - __*Object*__,   
- parent - __*zetaret.global.packages.clockwork.data.ChildContainer*__,   
- list - __*Array*__,   
- scope - __*Object*__,   
- mode - __*String*__,   
- skip - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.controllers::ChildController__*  

##  
__iterateInversed(*Object* child, *Function* f, *Object* d, *zetaret.global.packages.clockwork.data.ChildContainer* parent, *Array* list, *Object* scope, *String* mode, *Boolean* skip) : *zetaret.global.packages.clockwork.controllers::ChildController*__  
  
- __child*__ - __*Object*__,   
- __f*__ - __*Function*__,   
- d - __*Object*__,   
- parent - __*zetaret.global.packages.clockwork.data.ChildContainer*__,   
- list - __*Array*__,   
- scope - __*Object*__,   
- mode - __*String*__,   
- skip - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.controllers::ChildController__*  

