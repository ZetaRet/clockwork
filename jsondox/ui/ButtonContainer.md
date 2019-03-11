> __Author: Zeta Ret, Ivo Yankulovski__  
> __button container model__  
# display object container with button functionality applied to children  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::ButtonContainer  
> Inherits: [zetaret.global.packages.clockwork.data::ChildContainer](../data/ChildContainer.md), [zetaret.global.packages.clockwork.ui::Button](Button.md)  

### *Properties*  

#  
__addButtonShapeCls__ Function  
default zetaret.global.packages.clockwork.ui.Shape, default ProtoSS class used in addButtonShape method to create button children  


##  
### *Methods*  

##  
__ButtonContainer() : *void*__  
ProtoSS model extending both ChildContainer and Button, works with ChildController/MouseController/DragController/InteractionController super types  
> *return __void__*  

##  
__addButtonShape(*String* name, *Boolean* nocfg, *Boolean* listeners, *Boolean* interaction, *Boolean* mouseEnabled, *Boolean* mouseChildren) : *Object*__  
  
- name - __*String*__,   
- nocfg - __*Boolean*__,   
- listeners - __*Boolean*__,   
- interaction - __*Boolean*__,   
- mouseEnabled - __*Boolean*__,   
- mouseChildren - __*Boolean*__,   
> *return __Object__*  

##  
__configButtonShape(*zetaret.global.packages.clockwork.ui.DisplayObject* btnsh, *Boolean* listeners, *Boolean* interaction, *Boolean* mouseEnabled, *Boolean* mouseChildren) : *zetaret.global.packages.clockwork.ui::ButtonContainer*__  
  
- btnsh - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- listeners - __*Boolean*__,   
- interaction - __*Boolean*__,   
- mouseEnabled - __*Boolean*__,   
- mouseChildren - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.ui::ButtonContainer__*  

##  
__getBounds(*Array* tm) : *Object*__  
  
- __tm*__ - __*Array*__,   
> *return __Object__*  

##  
### *Protected Methods*  

##  
__ButtonContainerStatis(*Object* s, *zetaret.global.packages.clockwork.ui.ButtonContainer* c) : *void*__  
statis invoker, called once by protoss superize mechanics, static flags of the statis embed only allowed methods in the final compilation  
- __s*__ - __*Object*__, statis map  
- __c*__ - __*zetaret.global.packages.clockwork.ui.ButtonContainer*__, invoked constructor  
> *return __void__*  

##  
__drag(*zetaret.global.packages.clockwork.ui.DisplayObject* target, *Boolean* dx, *zetaret.global.packages.clockwork.ui.DisplayObject* dtarget, *Function* handler, *Object* hscope) : *zetaret.global.packages.clockwork.controllers::DragController*__  
uses zetaret.global.packages.clockwork.ui.ButtonContainerStatis.statis.drag flag and zetaret.global.packages.clockwork.utils.ControlUtils.configDrag method reference  
- target - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- dx - __*Boolean*__,   
- dtarget - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- handler - __*Function*__,   
- hscope - __*Object*__,   
> *return __zetaret.global.packages.clockwork.controllers::DragController__*  

##  
### *Static Properties*  

#  
__statis__ Object  
default {drag=true},   

##  
### *Static Methods*  

##  
__ButtonContainerStatis(*Object* s, *zetaret.global.packages.clockwork.ui.ButtonContainer* c) : *void*__  
statis invoker of the ButtonContainer constructor  
- __s*__ - __*Object*__, statis map  
- __c*__ - __*zetaret.global.packages.clockwork.ui.ButtonContainer*__, invoked constructor  
> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator