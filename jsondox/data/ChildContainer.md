> __Author: Zeta Ret, Ivo Yankulovski__  
> __base parent-child container model__  
# configuration properties and crud operations on child objects  
> *Requires: protoss.all.js*  
> *Version: 1.05*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.data::ChildContainer  

### *Properties*  

#  
__children__ Array  
default [],   

#  
__target__ Object  
default null,   

#  
__autochild__ Boolean  
default true,   

#  
__namecache__ Object  
default null,   

#  
__autosetstage__ Boolean  
default true,   

#  
__recursiveStage__ Boolean  
default true,   

#  
__stageEvents__ Boolean  
default true,   


##  
### *Methods*  

##  
__ChildContainer() : *void*__  
  
> *return __void__*  

##  
__getChildren() : *Array*__  
  
> *return __Array__*  

##  
__numChildren() : *Number*__  
  
> *return __Number__*  

##  
__addChild(*Object* child) : *zetaret.global.packages.clockwork.data::ChildContainer*__  
  
- __child*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.data::ChildContainer__*  

##  
__addChildAt(*Object* child, *Number* index) : *zetaret.global.packages.clockwork.data::ChildContainer*__  
  
- __child*__ - __*Object*__,   
- __index*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::ChildContainer__*  

##  
__containsChild(*Object* child) : *Boolean*__  
  
- __child*__ - __*Object*__,   
> *return __Boolean__*  

##  
__removeChild(*Object* child) : *zetaret.global.packages.clockwork.data::ChildContainer*__  
  
- __child*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.data::ChildContainer__*  

##  
__removeChildAt(*Number* index) : *Object*__  
  
- __index*__ - __*Number*__,   
> *return __Object__*  

##  
__getChildIndex(*Object* child) : *Number*__  
  
- __child*__ - __*Object*__,   
> *return __Number__*  

##  
__getChildByName(*String* name, *Boolean* cache) : *Object*__  
  
- __name*__ - __*String*__,   
- cache - __*Boolean*__,   
> *return __Object__*  

##  
__getChildByType(*Object* type, *Boolean* strict) : *Object*__  
  
- __type*__ - __*Object*__,   
- strict - __*Boolean*__,   
> *return __Object__*  

##  
__getChildIndexByName(*String* name) : *Number*__  
  
- __name*__ - __*String*__,   
> *return __Number__*  

##  
__swapChildren(*Object* child1, *Object* child2) : *zetaret.global.packages.clockwork.data::ChildContainer*__  
  
- __child1*__ - __*Object*__,   
- __child2*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.data::ChildContainer__*  

##  
__swapChildrenAt(*Number* index1, *Number* index2) : *zetaret.global.packages.clockwork.data::ChildContainer*__  
  
- __index1*__ - __*Number*__,   
- __index2*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::ChildContainer__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator