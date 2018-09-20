> __Author: Zeta Ret, Ivo Yankulovski__  
> __text field model__  
# basic text field properties and graphics api shortcuts, manage style lists based on css-like rules and execute text rendering  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.04*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::TextField  
> Inherits: zetaret.global.packages.clockwork.ui::Shape  
> Interfaces: zetaret.global.packages.clockwork.ui.interfaces::ITextField  

### *Properties*  

#
__textColor__ Number|String|CanvasGradient|CanvasPattern  
default 0,   

#
__textFont__ String  
default '10px Arial',   

#
__textAlpha__ Number  
default 1,   

#
__text__ String  
default '',   

#
__isHtml__ Boolean  
default false,   

#
__maxChars__ Number  
default -1,   

#
__autoSize__ Boolean  
default false,   

#
__multiline__ Boolean  
default false,   

#
__wordWrap__ Boolean  
default false,   

#
__textRuns__ Array  
default [],   

#
__autoRenderText__ Boolean  
default false,   

#
__textWidth__ Number  
default -1,   

#
__textX__ Number  
default 0,   

#
__textY__ Number  
default 0,   

#
__textAlign__ String  
default 'left',   

#
__textBaseline__ String  
default 'alphabetic',   

#
__textDirection__ String  
default 'inherit',   

#
__strokedText__ Boolean  
default false,   

#
__backgroundColor__ String  
default 'white',   

#
__backgroundBorder__ String  
default 'black',   

#
__backgroundDraw__ Function  
default null,   

#
__background__ Boolean  
default false,   

#
__border__ Boolean  
default false,   

#
__styleList__ Array  
default null,   


##
### *Methods*  

##
__TextField() : *void*__  
  
> *return __void__*  

##
__setText(*String* v) : *zetaret.global.packages.clockwork.ui::TextField*__  
  
- __v*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.ui::TextField__*  

##
__setHtmlText(*String* v) : *zetaret.global.packages.clockwork.ui::TextField*__  
  
- __v*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.ui::TextField__*  

##
__setStyleList(*Array* list) : *zetaret.global.packages.clockwork.ui::TextField*__  
  
- __list*__ - __*Array*__,   
> *return __zetaret.global.packages.clockwork.ui::TextField__*  

##
__addStyle(*Object* style) : *zetaret.global.packages.clockwork.ui::TextField*__  
  
- __style*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.ui::TextField__*  

##
__removeStyle(*Object* style) : *zetaret.global.packages.clockwork.ui::TextField*__  
  
- __style*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.ui::TextField__*  

##
__applyStyles() : *zetaret.global.packages.clockwork.ui::TextField*__  
  
> *return __zetaret.global.packages.clockwork.ui::TextField__*  

##
__setStyle(*Object* s, *Boolean* ignore) : *zetaret.global.packages.clockwork.ui::TextField*__  
  
- __s*__ - __*Object*__,   
- ignore - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.ui::TextField__*  

##
__resetStyle() : *zetaret.global.packages.clockwork.ui::TextField*__  
  
> *return __zetaret.global.packages.clockwork.ui::TextField__*  

##
__renderText() : *zetaret.global.packages.clockwork.ui::TextField*__  
  
> *return __zetaret.global.packages.clockwork.ui::TextField__*  

##
__destruct() : *void*__  
  
> *return __void__*  

##
### *Static Properties*  

#
__BORDER_THICKNESS__ Number  
default 1,   

#
__BORDER_ALPHA__ Number  
default 1,   

#
__BG_ALPHA__ Number  
default 1,   

---
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
