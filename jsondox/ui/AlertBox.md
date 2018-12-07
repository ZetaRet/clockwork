> __Author: Zeta Ret, Ivo Yankulovski__  
> __alert box model__  
# dialog with yes/no/close buttons, background and icon label  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::AlertBox  
> Inherits: [zetaret.global.packages.clockwork.ui::Dialog](Dialog.md)  
> Interfaces:   

### *Properties*  

#  
__bg__ zetaret.global.packages.clockwork.ui.Shape  
default new,   

#  
__yesBtn__ zetaret.global.packages.clockwork.ui.LabelButton  
default new,   

#  
__noBtn__ zetaret.global.packages.clockwork.ui.LabelButton  
default new,   

#  
__closeBtn__ zetaret.global.packages.clockwork.ui.ButtonContainer  
default new,   

#  
__txt__ zetaret.global.packages.clockwork.ui.TextField  
default new,   

#  
__icon__ zetaret.global.packages.clockwork.ui.Image  
default new,   


##  
### *Methods*  

##  
__AlertBox() : *void*__  
  
> *return __void__*  

##  
__alert(*String* message) : *zetaret.global.packages.clockwork.ui::AlertBox*__  
  
- __message*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.ui::AlertBox__*  

##  
__initBox(*Boolean* yes, *Boolean* no, *Boolean* close, *Boolean* label, *Boolean* icon) : *zetaret.global.packages.clockwork.ui::AlertBox*__  
  
- yes - __*Boolean*__,   
- no - __*Boolean*__,   
- close - __*Boolean*__,   
- label - __*Boolean*__,   
- icon - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.ui::AlertBox__*  

##  
__defaultButtons() : *zetaret.global.packages.clockwork.ui::AlertBox*__  
  
> *return __zetaret.global.packages.clockwork.ui::AlertBox__*  

##  
__onCancel(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* d) : *void*__  
  
- e - __*zetaret.global.packages.clockwork.events.Event*__,   
- d - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__onOk(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* d) : *void*__  
  
- e - __*zetaret.global.packages.clockwork.events.Event*__,   
- d - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__destruct() : *void*__  
  
> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
