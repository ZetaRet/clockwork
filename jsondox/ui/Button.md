> __Author: Zeta Ret, Ivo Yankulovski__  
> __button model__  
# display object model with button functionality and predefined button methods  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::Button  
> Inherits: [zetaret.global.packages.clockwork.ui::DisplayObject](DisplayObject.md)  
> Interfaces: zetaret.global.packages.clockwork.ui.interfaces::IButton  

### *Properties*  

#  
__selected__ Boolean  
default false,   

#  
__state__ String  
default null,   

#  
__istate__ String  
default '',   

#  
__isButton__ Boolean  
default false,   

#  
__mousec__ zetaret.global.packages.clockwork.controllers.MouseController  
default null,   

#  
__buttonEvent__ zetaret.global.packages.clockwork.events.MouseEvent  
default null,   

#  
__autoStageButton__ Boolean  
default false,   

#  
__autoInteraction__ Boolean  
default false,   

#  
__interactionQueue__ Array  
default null,   


##  
### *Methods*  

##  
__Button() : *void*__  

> *return __void__*  

##  
__setInteraction(*zetaret.global.packages.clockwork.controllers.MouseController* mousec) : *zetaret.global.packages.clockwork.ui::Button*__  

- mousec - __*zetaret.global.packages.clockwork.controllers.MouseController*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__addButtonEvent(*String* type, *Function* cls) : *zetaret.global.packages.clockwork.ui::Button*__  

- __type*__ - __*String*__,   
- cls - __*Function*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__buttonMode(*Boolean* autostage, *Boolean* autointeract) : *zetaret.global.packages.clockwork.ui::Button*__  

- autostage - __*Boolean*__,   
- autointeract - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__doInteractionQueue() : *zetaret.global.packages.clockwork.ui::Button*__  

> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__configButton(*zetaret.global.packages.clockwork.ui.DisplayObject* btn) : *zetaret.global.packages.clockwork.ui::Button*__  

- __btn*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__onAddedToStage(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* stage) : *void*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__buttonDefaultPrevent(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* stage) : *void*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__buttonDefaultStop(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* stage) : *void*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__onover(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* stage) : *void*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__onout(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* stage) : *void*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__over(*zetaret.global.packages.clockwork.events.Event* e) : *zetaret.global.packages.clockwork.ui::Button*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__out(*zetaret.global.packages.clockwork.events.Event* e) : *zetaret.global.packages.clockwork.ui::Button*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__up(*zetaret.global.packages.clockwork.events.Event* e) : *zetaret.global.packages.clockwork.ui::Button*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__down(*zetaret.global.packages.clockwork.events.Event* e) : *zetaret.global.packages.clockwork.ui::Button*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__click(*zetaret.global.packages.clockwork.events.Event* e) : *zetaret.global.packages.clockwork.ui::Button*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__move(*zetaret.global.packages.clockwork.events.Event* e) : *zetaret.global.packages.clockwork.ui::Button*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__enter(*zetaret.global.packages.clockwork.events.Event* e) : *zetaret.global.packages.clockwork.ui::Button*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__leave(*zetaret.global.packages.clockwork.events.Event* e) : *zetaret.global.packages.clockwork.ui::Button*__  

- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__select() : *zetaret.global.packages.clockwork.ui::Button*__  

> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__unselect() : *zetaret.global.packages.clockwork.ui::Button*__  

> *return __zetaret.global.packages.clockwork.ui::Button__*  

##  
__getState() : *String*__  

> *return __String__*  

##  
__setState(*String* state) : *zetaret.global.packages.clockwork.ui::Button*__  

- __state*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.ui::Button__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator