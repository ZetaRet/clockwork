> __Author: Zeta Ret, Ivo Yankulovski__  
> __page controller__  
# display object container with page controller capabilities, queue, cache, maps and data per page  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.controllers::PageController  
> Inherits: [zetaret.global.packages.clockwork.events::EventDispatcher](../events/EventDispatcher.md)  

### *Properties*  

#  
__Container__ [zetaret.global.packages.clockwork.ui.DisplayObjectContainer](../ui/DisplayObjectContainer.md)  
default container,   

#  
__Pages__ Array  
default [],   

#  
__PageIndex__ Number  
default -1,   

#  
__CurrentPage__ [zetaret.global.packages.clockwork.ui.PageBase](../ui/PageBase.md)  
default null,   

#  
__DispatchFirstPageInit__ Boolean  
default false,   

#  
__DataMap__ Object  
default {},   

#  
__ChangeHandler__ Function  
default null,   

#  
__BeforeDestroyMethod__ String  
default 'BeforeDestroy',   

#  
__InitMethod__ String  
default 'InitMethod',   

#  
__PageClassSuffix__ String  
default '_page',   

#  
__CachedPages__ Object  
default {},   

#  
__CachePages__ Boolean  
default false,   

#  
__AnimateFirstPage__ Boolean  
default false,   

#  
__RecreateIds__ Object  
default {},   

#  
__pageKey__ Number  
default 0,   

#  
__dataKey__ Number  
default 1,   

#  
__pagePackage__ String  
default '',   

#  
__mAnimating__ Boolean  
default false,   

#  
__mQueue__ Number  
default -1,   

#  
__mQueueSuffix__ String  
default '',   

#  
__mQueueCallback__ Function  
default null,   


##  
### *Methods*  

##  
__PageController(*zetaret.global.packages.clockwork.ui.DisplayObjectContainer* container, *Array* pages) : *void*__  
  
- container - __*zetaret.global.packages.clockwork.ui.DisplayObjectContainer*__,   
- pages - __*Array*__,   
> *return __void__*  

##  
__get_PageId() : *String*__  
  
> *return __String__*  

##  
__get_PageClass() : *String*__  
  
> *return __String__*  

##  
__onComplete(*zetaret.global.packages.clockwork.ui.PageBase* oldPage) : *void*__  
  
- oldPage - __*zetaret.global.packages.clockwork.ui.PageBase*__,   
> *return __void__*  

##  
__AddPageById(*String* id, *Object* data, *Number* index) : *zetaret.global.packages.clockwork.controllers::PageController*__  
  
- __id*__ - __*String*__,   
- __data*__ - __*Object*__,   
- __index*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.controllers::PageController__*  

##  
__SetPages(*Array* pages) : *zetaret.global.packages.clockwork.controllers::PageController*__  
  
- __pages*__ - __*Array*__,   
> *return __zetaret.global.packages.clockwork.controllers::PageController__*  

##  
__DestroyPage() : *zetaret.global.packages.clockwork.controllers::PageController*__  
  
> *return __zetaret.global.packages.clockwork.controllers::PageController__*  

##  
__GetPage(*String* id, *String* suffix) : *zetaret.global.packages.clockwork.ui::PageBase*__  
  
- __id*__ - __*String*__,   
- suffix - __*String*__,   
> *return __zetaret.global.packages.clockwork.ui::PageBase__*  

##  
__ShowPage(*Number|String* indexOrId, *String* suffix, *Function* callback) : *zetaret.global.packages.clockwork.ui::PageBase*__  
  
- __indexOrId*__ - __*Number|String*__,   
- suffix - __*String*__,   
- callback - __*Function*__,   
> *return __zetaret.global.packages.clockwork.ui::PageBase__*  

##  
___constructor() : *void*__  
  
> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
