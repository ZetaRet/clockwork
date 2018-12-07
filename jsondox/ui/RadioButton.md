> __Author: Zeta Ret, Ivo Yankulovski__  
> __radio button model__  
# button container bound to skin capabilities with background, button and text  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::RadioButton  
> Inherits: [zetaret.global.packages.clockwork.ui::ButtonContainer](ButtonContainer.md)  
> Interfaces: zetaret.global.packages.clockwork.ui.interfaces::IRadioButton  

### *Properties*  

#  
__checked__ Boolean  
default false,   

#  
__value__ Object  
default null,   

#  
__radioGroup__ Array  
default null,   

#  
__bg__ zetaret.global.packages.clockwork.ui.Shape  
default new,   

#  
__checkBtn__ zetaret.global.packages.clockwork.ui.ButtonContainer  
default new,   

#  
__txt__ zetaret.global.packages.clockwork.ui.TextField  
default new,   

#  
__bgcheck__ Boolean  
default false,   

#  
__autoInvalidateStage__ Boolean  
default true,   


##  
### *Methods*  

##  
__RadioButton() : *void*__  
  
> *return __void__*  

##  
__createRadioGroup(*Array* btns) : *zetaret.global.packages.clockwork.ui::RadioButton*__  
  
- __btns*__ - __*Array*__,   
> *return __zetaret.global.packages.clockwork.ui::RadioButton__*  

##  
__configureRadioGroupButton(*zetaret.global.packages.clockwork.ui.RadioButton* button) : *zetaret.global.packages.clockwork.ui::RadioButton*__  
  
- __button*__ - __*zetaret.global.packages.clockwork.ui.RadioButton*__,   
> *return __zetaret.global.packages.clockwork.ui::RadioButton__*  

##  
__onRadioChange(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* d) : *void*__  
  
- e - __*zetaret.global.packages.clockwork.events.Event*__,   
- d - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__initBox(*Boolean* check, *Boolean* label) : *zetaret.global.packages.clockwork.ui::RadioButton*__  
  
- check - __*Boolean*__,   
- label - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.ui::RadioButton__*  

##  
__onCheckClick(*zetaret.global.packages.clockwork.events.Event* e, *zetaret.global.packages.clockwork.controllers.Stage2DController* d) : *void*__  
  
- e - __*zetaret.global.packages.clockwork.events.Event*__,   
- d - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
> *return __void__*  

##  
__check(*Boolean* val) : *Boolean*__  
  
- val - __*Boolean*__,   
> *return __Boolean__*  

##  
__change() : *zetaret.global.packages.clockwork.ui::RadioButton*__  
  
> *return __zetaret.global.packages.clockwork.ui::RadioButton__*  

##  
__destruct() : *void*__  
  
> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
