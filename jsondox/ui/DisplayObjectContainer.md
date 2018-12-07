> __Author: Zeta Ret, Ivo Yankulovski__  
> __DisplayObject container model__  
# display container model used by the Stage2DController to manipulate Context2D rendering  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::DisplayObjectContainer  
> Inherits: [zetaret.global.packages.clockwork.data::ChildContainer](../data/ChildContainer.md), [zetaret.global.packages.clockwork.ui::DisplayObject](DisplayObject.md)  
> Interfaces:   

### *Properties*  

#  
__containerGroup__ String  
default '', name of this container group  


##  
### *Methods*  

##  
__DisplayObjectContainer() : *void*__  
ProtoSS model extending both ChildContainer and DisplayObject, works with ChildController super types  
> *return __void__*  

##  
__getBounds(*Array* tm) : *Object*__  
obtain all rectangular bounds of children using static zetaret.global.packages.clockwork.ui.DisplayObject.getUnionBounds  
- __tm*__ - __*Array*__,   
> *return __Object__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
