> __Author: Zeta Ret, Ivo Yankulovski__  
> __basic app data capsule__  
# application data wrapper with capabilities, stage, interaction, controllers  
> *Requires: protoss.all.js*  
> *Version: 1.01*  
> *Date: 2018 - Today*  

__required*__

## zetaret.global.packages.clockwork.data::AppData  
> Inherits:   
> Interfaces:   

### *Properties*  

#  
__capabilities__ Object  
default {},   

#  
__environment__ Object  
default {},   

#  
__interactionData__ Object  
default {},   

#  
__stageData__ Object  
default {},   

#  
__mousec__ zetaret.global.packages.clockwork.controllers.MouseController  
default null,   

#  
__mouseEvent__ zetaret.global.packages.clockwork.events.MouseEvent  
default null,   

#  
__keybc__ zetaret.global.packages.clockwork.controllers.KeyboardController  
default null,   

#  
__kpmap__ Object  
default null,   

#  
__interc__ zetaret.global.packages.clockwork.controllers.InteractionController  
default null,   

#  
__stage__ zetaret.global.packages.clockwork.controllers.Stage2DController  
default null,   

#  
__zcl__ zetaret.global.packages.clockwork.Clockwork  
default null,   

#  
__debug__ Boolean  
default false,   


##  
### *Methods*  

##  
__AppData() : *void*__  
  
> *return __void__*  

##  
__initCapabilities() : *zetaret.global.packages.clockwork.data::AppData*__  
  
> *return __zetaret.global.packages.clockwork.data::AppData__*  

##  
__detectEnvironment() : *zetaret.global.packages.clockwork.data::AppData*__  
  
> *return __zetaret.global.packages.clockwork.data::AppData__*  

##  
__initClockwork() : *zetaret.global.packages.clockwork.data::AppData*__  
  
> *return __zetaret.global.packages.clockwork.data::AppData__*  

##  
__initClasses(*Array* xlist, *HTMLElement* scrcntnr) : *zetaret.global.packages.clockwork.data::AppData*__  
  
- __xlist*__ - __*Array*__,   
- scrcntnr - __*HTMLElement*__,   
> *return __zetaret.global.packages.clockwork.data::AppData__*  

##  
__initStage(*CanvasRenderingContext2D* cntxt, *HTMLElement* cnvscntnr, *Object* stagedata) : *zetaret.global.packages.clockwork.data::AppData*__  
  
- cntxt - __*CanvasRenderingContext2D*__,   
- cnvscntnr - __*HTMLElement*__,   
- stagedata - __*Object*__,   
> *return __zetaret.global.packages.clockwork.data::AppData__*  

##  
__initInteraction(*HTMLCanvasElement* cnvs, *Object* interdata) : *zetaret.global.packages.clockwork.data::AppData*__  
  
- cnvs - __*HTMLCanvasElement*__,   
- interdata - __*Object*__,   
> *return __zetaret.global.packages.clockwork.data::AppData__*  

##  
__remouse() : *zetaret.global.packages.clockwork.data::AppData*__  
  
> *return __zetaret.global.packages.clockwork.data::AppData__*  

##  
__render() : *zetaret.global.packages.clockwork.data::AppData*__  
  
> *return __zetaret.global.packages.clockwork.data::AppData__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
