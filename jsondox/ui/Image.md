> __Author: Zeta Ret, Ivo Yankulovski__  
> __image model__  
# canvas image wrapper based on id, url, HTMLImageElement, caching and pattern mechanism using custom positioning of the outer frame  
> *Requires: protoss.all.js*  
> *Version: 1.1.0*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::Image  
> Inherits: [zetaret.global.packages.clockwork.ui::Shape](Shape.md)  
> Interfaces: zetaret.global.packages.clockwork.ui.interfaces::IImage  

### *Properties*  

#  
__imageId__ String  
default '',   

#  
__imageData__ CanvasImageSource  
default null,   

#  
__imageUrl__ String  
default '',   

#  
__imageTag__ HTMLImageElement  
default null,   

#  
__imageLoadEvent__ String  
default 'load',   

#  
__imageErrorEvent__ String  
default 'error',   

#  
__imageX__ Number  
default 0,   

#  
__imageY__ Number  
default 0,   

#  
__imageWidth__ Number  
default 0,   

#  
__imageHeight__ Number  
default 0,   

#  
__cacheAssets__ Boolean  
default false,   

#  
__patternEnabled__ Boolean  
default false,   

#  
__pattern__ CanvasPattern  
default null,   

#  
__patternStyle__ String  
default '',   

#  
__imageDrawHandler__ Function  
default null,   

#  
__imageHandlerScope__ Object  
default null,   

#  
__rebuild__ Boolean  
default false,   

#  
__autoInvalidateStage__ Boolean  
default false,   

#  
__imgCrossOrigin__ String  
default null,   


##  
### *Methods*  

##  
__Image() : *void*__  
  
> *return __void__*  

##  
__setImageId(*String* id, *Number* width, *Number* height) : *zetaret.global.packages.clockwork.ui::Image*__  
  
- __id*__ - __*String*__,   
- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::Image__*  

##  
__setImageUrl(*String* url, *String* id) : *zetaret.global.packages.clockwork.ui::Image*__  
  
- __url*__ - __*String*__,   
- __id*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.ui::Image__*  

##  
__onImageLoaded(*Event* e) : *void*__  
  
- __e*__ - __*Event*__,   
> *return __void__*  

##  
__onImageError(*Event* e) : *void*__  
  
- __e*__ - __*Event*__,   
> *return __void__*  

##  
__loadImageFromUrl() : *zetaret.global.packages.clockwork.ui::Image*__  
  
> *return __zetaret.global.packages.clockwork.ui::Image__*  

##  
__setImageData(*CanvasImageSource* idata) : *zetaret.global.packages.clockwork.ui::Image*__  
  
- __idata*__ - __*CanvasImageSource*__,   
> *return __zetaret.global.packages.clockwork.ui::Image__*  

##  
__setDefaults() : *zetaret.global.packages.clockwork.ui::Image*__  
  
> *return __zetaret.global.packages.clockwork.ui::Image__*  

##  
__clearDefaults() : *zetaret.global.packages.clockwork.ui::Image*__  
  
> *return __zetaret.global.packages.clockwork.ui::Image__*  

##  
__clearImage(*Boolean* keepurl, *Boolean* keepid) : *zetaret.global.packages.clockwork.ui::Image*__  
  
- keepurl - __*Boolean*__,   
- keepid - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.ui::Image__*  

##  
__buildImage() : *zetaret.global.packages.clockwork.ui::Image*__  
  
> *return __zetaret.global.packages.clockwork.ui::Image__*  

##  
__drawImage() : *zetaret.global.packages.clockwork.ui::Image*__  
  
> *return __zetaret.global.packages.clockwork.ui::Image__*  

##  
__destruct() : *void*__  
  
> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator