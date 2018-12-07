> __Author: Zeta Ret, Ivo Yankulovski__  
> __skin model__  
# component to skin and decorate objects  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::SkinnableComponent  
> Inherits:   
> Interfaces:   

### *Properties*  

#  
__skinId__ String  
default '',   

#  
__skin__ Object  
default null,   

#  
__toskin__ Array  
default [],   

#  
__skintarget__ Object  
default this,   

#  
__skindata__ Object  
default {},   


##  
### *Methods*  

##  
__SkinnableComponent() : *void*__  
  
> *return __void__*  

##  
__setSkin(*String* skinid, *Object* skin, *Object* toskin, *Object* skindata) : *zetaret.global.packages.clockwork.ui::SkinnableComponent*__  
  
- __skinid*__ - __*String*__,   
- __skin*__ - __*Object*__,   
- __toskin*__ - __*Object*__,   
- skindata - __*Object*__,   
> *return __zetaret.global.packages.clockwork.ui::SkinnableComponent__*  

##  
__setSkinTarget(*Object* target) : *zetaret.global.packages.clockwork.ui::SkinnableComponent*__  
  
- __target*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.ui::SkinnableComponent__*  

##  
__onUpdateSkin(*zetaret.global.packages.clockwork.events.Event* e, *Object* d) : *void*__  
  
- e - __*zetaret.global.packages.clockwork.events.Event*__,   
- d - __*Object*__,   
> *return __void__*  

##  
__skinme() : *zetaret.global.packages.clockwork.ui::SkinnableComponent*__  
  
> *return __zetaret.global.packages.clockwork.ui::SkinnableComponent__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
