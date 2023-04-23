> __Author: Zeta Ret__  
> __list model__  
# horizontal/vertical list display object container with auto arrange based on properties and configuration  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::List  
> Inherits: [zetaret.global.packages.clockwork.ui::DisplayObjectContainer](List.md)  
> Interfaces: zetaret.global.packages.clockwork.ui.interfaces::IList  

### *Properties*  

#  
__listItems__ Array  
default [],   

#  
__xmargin__ Number  
default 0,   

#  
__ymargin__ Number  
default 0,   

#  
__xspace__ Number  
default 0,   

#  
__yspace__ Number  
default 0,   

#  
__xoffset__ Number  
default 0,   

#  
__yoffset__ Number  
default 0,   

#  
__listItemWidth__ Number  
default 0,   

#  
__listItemHeight__ Number  
default 0,   

#  
__xarrange__ Boolean  
default false,   

#  
__yarrange__ Boolean  
default false,   

#  
__xsize__ Number  
default 0,   

#  
__ysize__ Number  
default 0,   


##  
### *Methods*  

##  
__List() : *void*__  
  
> *return __void__*  

##  
__addListItem(*Object* li) : *zetaret.global.packages.clockwork.ui::List*__  
  
- __li*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.ui::List__*  

##  
__removeListItem(*Object* li) : *Boolean*__  
  
- __li*__ - __*Object*__,   
> *return __Boolean__*  

##  
__setConfig(*Object* cfg) : *zetaret.global.packages.clockwork.ui::List*__  
  
- __cfg*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.ui::List__*  

##  
__readdListItems() : *zetaret.global.packages.clockwork.ui::List*__  
  
> *return __zetaret.global.packages.clockwork.ui::List__*  

##  
__arrangeList() : *zetaret.global.packages.clockwork.ui::List*__  
  
> *return __zetaret.global.packages.clockwork.ui::List__*  

##  
__invalidateList() : *zetaret.global.packages.clockwork.ui::List*__  
  
> *return __zetaret.global.packages.clockwork.ui::List__*  

