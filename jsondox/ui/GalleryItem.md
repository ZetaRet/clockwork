> __Author: Zeta Ret, Ivo Yankulovski__  
> __gallery item display model__  
# display object container with text, image and alignment rules  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::GalleryItem  
> Inherits: [zetaret.global.packages.clockwork.ui::DisplayObjectContainer](DisplayObjectContainer.md)  

### *Properties*  

#  
__title__ zetaret.global.packages.clockwork.ui.TextField  
default null,   

#  
__image__ zetaret.global.packages.clockwork.ui.Image  
default null,   

#  
__itemWidth__ Number  
default 0,   

#  
__itemHeight__ Number  
default 0,   

#  
__itemAlignX__ Number  
default 0,   

#  
__itemAlignY__ Number  
default 0,   

#  
__imageFit__ Number  
default 0,   


##  
### *Methods*  

##  
__GalleryItem() : *void*__  
  
> *return __void__*  

##  
__onImageLoaded(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* d) : *void*__  
  
- e - __*zetaret.global.packages.clockwork.events.Event*__,   
- d - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__fitImage() : *zetaret.global.packages.clockwork.ui::GalleryItem*__  
  
> *return __zetaret.global.packages.clockwork.ui::GalleryItem__*  

##  
__setDefaults() : *zetaret.global.packages.clockwork.ui::GalleryItem*__  
  
> *return __zetaret.global.packages.clockwork.ui::GalleryItem__*  

##  
__setImageUrl(*String* url) : *zetaret.global.packages.clockwork.ui::GalleryItem*__  
  
- __url*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.ui::GalleryItem__*  

##  
__activate() : *zetaret.global.packages.clockwork.ui::GalleryItem*__  
  
> *return __zetaret.global.packages.clockwork.ui::GalleryItem__*  

##  
__deactivate() : *zetaret.global.packages.clockwork.ui::GalleryItem*__  
  
> *return __zetaret.global.packages.clockwork.ui::GalleryItem__*  

##  
__destruct() : *void*__  
  
> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator