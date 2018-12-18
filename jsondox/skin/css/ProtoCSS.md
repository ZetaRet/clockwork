> __Author: Zeta Ret, Ivo Yankulovski__  
> __Prototype CSS__  
# dynamic programming of style tag in the DOM, create selectors [classes, tags, ids] in real time, bind style ids and update DOM  
> *Requires: protoss.all.js*  
> *Version: 1.00*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.skin.css::ProtoCSS  
> Inherits:   
> Interfaces:   

### *Properties*  

#  
__cssElement__ HTMLStyleElement  
default null,   

#  
__cssContainer__ HTMLElement  
default null,   

#  
__cssContainerAppendMethod__ String  
default 'appendChild',   

#  
__css__ Object  
default {},   

#  
__cssIds__ Object  
default {},   

#  
__autoUpdate__ Boolean  
default true,   


##  
### *Methods*  

##  
__ProtoCSS() : *void*__  
  
> *return __void__*  

##  
__createCSSElement() : *zetaret.global.packages.clockwork.skin.css::ProtoCSS*__  
  
> *return __zetaret.global.packages.clockwork.skin.css::ProtoCSS__*  

##  
__updateCSS() : *zetaret.global.packages.clockwork.skin.css::ProtoCSS*__  
  
> *return __zetaret.global.packages.clockwork.skin.css::ProtoCSS__*  

##  
__updateRule(*String* id, *Object* rules) : *zetaret.global.packages.clockwork.skin.css::ProtoCSS*__  
  
- __id*__ - __*String*__,   
- __rules*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.skin.css::ProtoCSS__*  

##  
__style(*String|Array* selectors, *Object* rules, *String* id) : *String*__  
  
- __selectors*__ - __*String|Array*__,   
- __rules*__ - __*Object*__,   
- id - __*String*__,   
> *return __String__*  

##  
__hasCSSId(*String* id) : *Boolean*__  
  
- __id*__ - __*String*__,   
> *return __Boolean__*  

##  
__bindClassToCSSId(*String* cls, *String* id) : *Boolean*__  
  
- __cls*__ - __*String*__,   
- __id*__ - __*String*__,   
> *return __Boolean__*  

##  
__idToCSS() : *Object*__  
  
> *return __Object__*  

##  
__cssToArray() : *Array*__  
  
> *return __Array__*  

##  
__cssToString() : *String*__  
  
> *return __String__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
