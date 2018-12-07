> __Author: Zeta Ret, Ivo Yankulovski__  
> __menu model__  
# button container of MenuButton instances, label cache and background  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::Menu  
> Inherits: [zetaret.global.packages.clockwork.ui::ButtonContainer](ButtonContainer.md)  
> Interfaces:   

### *Properties*  

#  
__menulist__ zetaret.global.packages.clockwork.ui.List  
default new, instance of List containing [MenuButton](MenuButton.md)  

#  
__menubg__ zetaret.global.packages.clockwork.ui.Shape  
default new, instance of background Shape  

#  
__menulabels__ Object  
default {},   

#  
__autoInvalidate__ Boolean  
default true,   


##  
### *Methods*  

##  
__Menu() : *void*__  
  
> *return __void__*  

##  
__setBackground() : *zetaret.global.packages.clockwork.ui::Shape*__  
  
> *return __zetaret.global.packages.clockwork.ui::Shape__*  

##  
__addbtn(*String* id, *Function* handler) : *zetaret.global.packages.clockwork.ui::MenuButton*__  
  
- __id*__ - __*String*__,   
- handler - __*Function*__,   
> *return __zetaret.global.packages.clockwork.ui::MenuButton__*  

##  
__addMenuButton(*zetaret.global.packages.clockwork.ui.MenuButton* mb) : *zetaret.global.packages.clockwork.ui::Menu*__  
  
- __mb*__ - __*zetaret.global.packages.clockwork.ui.MenuButton*__,   
> *return __zetaret.global.packages.clockwork.ui::Menu__*  

##  
__initMenu() : *zetaret.global.packages.clockwork.ui::Menu*__  
  
> *return __zetaret.global.packages.clockwork.ui::Menu__*  

##  
__destruct() : *void*__  
  
> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
