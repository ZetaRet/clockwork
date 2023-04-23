> __Author: Zeta Ret__  
> __flawless button model__  
# normal/over/down state button with gradient/color/font configuration, states are cached as canvases and may use the same canvas id across multiple instances of the same flawless button, inset shadow and border radius  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.1.0*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::FlawlessButton  
> Inherits: [zetaret.global.packages.clockwork.ui::ButtonContainer](ButtonContainer.md)  

### *Properties*  

#  
__bgshadow__ zetaret.global.packages.clockwork.ui.Shape  
default null,   

#  
__bg__ zetaret.global.packages.clockwork.ui.Shape  
default null,   

#  
__cachesuf__ String  
default '',   

#  
__cacheid__ String  
default 'flawlessbtn',   

#  
__shadowcacheid__ String  
default 'flawlessbtnshadow',   

#  
__normalGradient__ Array  
default null,   

#  
__normalLineGradient__ Array  
default null,   

#  
__normalTextColor__ Number|String|CanvasGradient|CanvasPattern  
default null,   

#  
__normalTextFont__ String  
default null,   

#  
__overGradient__ Array  
default null,   

#  
__overLineGradient__ Array  
default null,   

#  
__overTextColor__ Number|String|CanvasGradient|CanvasPattern  
default null,   

#  
__overTextFont__ String  
default null,   

#  
__downGradient__ Array  
default null,   

#  
__downLineGradient__ Array  
default null,   

#  
__downTextColor__ Number|String|CanvasGradient|CanvasPattern  
default null,   

#  
__downTextFont__ String  
default null,   

#  
__text__ String  
default '',   

#  
__textYOffset__ Number  
default 5,   

#  
__textXOffset__ Number  
default 0,   

#  
__textDownYOffset__ Number  
default 1,   

#  
__textDownXOffset__ Number  
default 1,   

#  
__textOverYOffset__ Number  
default 0,   

#  
__textOverXOffset__ Number  
default 0,   

#  
__strokeSize__ Number  
default 1,   

#  
__borderTL__ Number  
default 4,   

#  
__borderTR__ Number  
default 4,   

#  
__borderBL__ Number  
default 4,   

#  
__borderBR__ Number  
default 4,   

#  
__shadowBlur__ Number  
default 4,   

#  
__shadowOffsetX__ Number  
default 2,   

#  
__shadowOffsetY__ Number  
default 2,   

#  
__shadowFill__ Number|String|CanvasGradient|CanvasPattern  
default 'black',   

#  
__shadowBlend__ Number|String|CanvasGradient|CanvasPattern  
default 'black',   

#  
__shadowAlpha__ Number  
default 0.6,   


##  
### *Methods*  

##  
__FlawlessButton() : *void*__  
  
> *return __void__*  

##  
__renderNormal() : *void*__  
  
> *return __void__*  

##  
__renderOver() : *void*__  
  
> *return __void__*  

##  
__renderDown() : *void*__  
  
> *return __void__*  

##  
__craft(*Number* width, *Number* height, *Object* style) : *zetaret.global.packages.clockwork.ui::FlawlessButton*__  
  
- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
- __style*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.ui::FlawlessButton__*  

##  
__mouseOver(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* stage) : *void*__  
  
- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__mouseOut(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* stage) : *void*__  
  
- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__mouseDown(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* stage) : *void*__  
  
- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__mouseUp(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* stage) : *void*__  
  
- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__mouseUpOutside(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* stage) : *void*__  
  
- __e*__ - __*zetaret.global.packages.clockwork.events.Event*__,   
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__initListeners() : *void*__  
  
> *return __void__*  

##  
__destruct() : *void*__  
  
> *return __void__*  

