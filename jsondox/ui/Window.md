> __Author: Zeta Ret, Ivo Yankulovski__  
> __window model__  
# display object container with background shape, header/footer button container, sidebar/body/details scrollpanes and properties  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::Window  
> Inherits: [zetaret.global.packages.clockwork.ui::DisplayObjectContainer](DisplayObjectContainer.md)  
> Interfaces: zetaret.global.packages.clockwork.ui.interfaces::IWindow  

### *Properties*  

#  
__title__ String  
default '',   

#  
__windowId__ String  
default '',   

#  
__parentWindow__ zetaret.global.packages.clockwork.ui.Window  
default null,   

#  
__windowWidth__ Number  
default 0,   

#  
__windowHeight__ Number  
default 0,   

#  
__bg__ zetaret.global.packages.clockwork.ui.Shape  
default new,   

#  
__header__ zetaret.global.packages.clockwork.ui.ButtonContainer  
default new,   

#  
__sidebar__ zetaret.global.packages.clockwork.ui.SimpleScrollpane  
default new,   

#  
__body__ zetaret.global.packages.clockwork.ui.SimpleScrollpane  
default new,   

#  
__details__ zetaret.global.packages.clockwork.ui.SimpleScrollpane  
default new,   

#  
__footer__ zetaret.global.packages.clockwork.ui.ButtonContainer  
default new,   

#  
__topcontainer__ zetaret.global.packages.clockwork.ui.DisplayObjectContainer  
default new,   

#  
__autoInvalidateStage__ Boolean  
default true,   


##  
### *Methods*  

##  
__Window() : *void*__  

> *return __void__*  

##  
__initWindow(*Number* width, *Number* height, *Boolean* header, *Boolean* footer, *Boolean* sidebar, *Boolean* details) : *zetaret.global.packages.clockwork.ui::Window*__  

- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
- header - __*Boolean*__,   
- footer - __*Boolean*__,   
- sidebar - __*Boolean*__,   
- details - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.ui::Window__*  

##  
__destruct() : *void*__  

> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator