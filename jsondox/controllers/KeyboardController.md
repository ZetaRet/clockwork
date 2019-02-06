> __Author: Zeta Ret, Ivo Yankulovski__  
> __keyboard controller__  
# interacts with stage, down/press/up event control, focus, default keyboard maps, support of bubble events and inversed stage iterator  
> *Requires: protoss.all.js*  
> *Version: 1.08*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.controllers::KeyboardController  
> Inherits:   
> Interfaces:   

### *Properties*  

#  
__controllerId__ String  
default 'keyboard',   

#  
__stage__ [zetaret.global.packages.clockwork.controllers.Stage2DController](Stage2DController.md)  
default null,   

#  
__interaction__ [zetaret.global.packages.clockwork.controllers.InteractionController](InteractionController.md)  
default null,   

#  
__defaultInteractiveMap__ Object  
default {},   

#  
__keyboardEventTarget__ HTMLDocument  
default null,   

#  
__keyboardEvents__ Array  
default [],   

#  
__keyboardTargets__ Array  
default [],   

#  
__keyboardIterated__ Array  
default [],   

#  
__keysDown__ Object  
default {},   

#  
__keyboardMap__ Object  
default {},   

#  
__charMap__ Object  
default {},   

#  
__asciiMap__ Object  
default {},   

#  
__keyboardEnabledKey__ String  
default 'keyboardEnabled',   

#  
__keyboardChildrenKey__ String  
default 'keyboardChildren',   

#  
__keyboardFocusKey__ String  
default 'keyboardFocus',   

#  
__keyboardCustomEvent__ zetaret.global.packages.clockwork.events.KeyboardEvent  
default null,   

#  
__preventNative__ Boolean  
default false,   

#  
__defaultEvents__ Array  
default ['keydown','keypress','keyup'],   

#  
__invalidateStage__ Boolean  
default true,   


##  
### *Methods*  

##  
__KeyboardController() : *void*__  
  
> *return __void__*  

##  
__init(*[/Stage2DController](Stage2DController.md)* stage, *[/InteractionController](InteractionController.md)* interaction, *HTMLDocument* target) : *zetaret.global.packages.clockwork.controllers::KeyboardController*__  
  
- __stage*__ - __*[/Stage2DController](Stage2DController.md)*__,   
- __interaction*__ - __*[/InteractionController](InteractionController.md)*__,   
- __target*__ - __*HTMLDocument*__,   
> *return __zetaret.global.packages.clockwork.controllers::KeyboardController__*  

##  
__initCapabilities() : *zetaret.global.packages.clockwork.controllers::KeyboardController*__  
  
> *return __zetaret.global.packages.clockwork.controllers::KeyboardController__*  

##  
__initDefaultEvents() : *zetaret.global.packages.clockwork.controllers::KeyboardController*__  
  
> *return __zetaret.global.packages.clockwork.controllers::KeyboardController__*  

##  
__getInteractionData(*Object* id) : *Object*__  
  
- id - __*Object*__,   
> *return __Object__*  

##  
__setKeyboardFocus(*Object* dobj, *Object* focus) : *Boolean*__  
  
- __dobj*__ - __*Object*__,   
- focus - __*Object*__,   
> *return __Boolean__*  

##  
__addInteractionData(*Object* dobj) : *Object*__  
  
- __dobj*__ - __*Object*__,   
> *return __Object__*  

##  
__addKeyboardEvent(*String* type) : *zetaret.global.packages.clockwork.controllers::KeyboardController*__  
  
- __type*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.controllers::KeyboardController__*  

##  
__bubbleEventHandler(*Object* child, *Object* parent, *zetaret.global.packages.clockwork.events.KeyboardEvent* customEvent) : *Boolean*__  
  
- __child*__ - __*Object*__,   
- __parent*__ - __*Object*__,   
- __customEvent*__ - __*zetaret.global.packages.clockwork.events.KeyboardEvent*__,   
> *return __Boolean__*  

##  
__stageIterator(*Object* child, *Function* f, *zetaret.global.packages.clockwork.events.KeyboardEvent* customEvent, *Object* parent, *Array* list, *String* type, *Object* childo) : *Boolean*__  
  
- __child*__ - __*Object*__,   
- __f*__ - __*Function*__,   
- __customEvent*__ - __*zetaret.global.packages.clockwork.events.KeyboardEvent*__,   
- parent - __*Object*__,   
- list - __*Array*__,   
- type - __*String*__,   
- childo - __*Object*__,   
> *return __Boolean__*  

##  
__keyboardEventHandler(*KeyboardEvent* e) : *zetaret.global.packages.clockwork.controllers::KeyboardController*__  
  
- __e*__ - __*KeyboardEvent*__,   
> *return __zetaret.global.packages.clockwork.controllers::KeyboardController__*  

##  
__setKeyboard(*Object* keymap, *Object* chmap, *Object* ascmap) : *zetaret.global.packages.clockwork.controllers::KeyboardController*__  
  
- keymap - __*Object*__,   
- chmap - __*Object*__,   
- ascmap - __*Object*__,   
> *return __zetaret.global.packages.clockwork.controllers::KeyboardController__*  

##  
__keyDown(*String* key) : *Boolean*__  
  
- __key*__ - __*String*__,   
> *return __Boolean__*  

##  
__keyUp(*String* key) : *Boolean*__  
  
- __key*__ - __*String*__,   
> *return __Boolean__*  

##  
__getKeys(*Array* keys, *Boolean* isor) : *Boolean*__  
  
- __keys*__ - __*Array*__,   
- isor - __*Boolean*__,   
> *return __Boolean__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
