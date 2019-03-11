> __Author: Zeta Ret, Ivo Yankulovski__  
> __graphic text command object__  
# created by textStyle of Graphics model, described by color and font settings  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.graphics::GraphicText  
> Interfaces: zetaret.global.packages.clockwork.graphics.interfaces::IGraphicText  

### *Properties*  

#  
__color__ Number|String|CanvasGradient|CanvasPattern  
default 0,   

#  
__alpha__ alpha  
default 1,   

#  
__stroke__ Boolean  
default false,   

#  
__font__ String  
default '',   

#  
__textAlign__ String  
default '',   

#  
__textBaseline__ String  
default '',   

#  
__direction__ String  
default '',   

#  
__command__ Number  
default zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.TEXT,   


##  
### *Methods*  

##  
__GraphicText() : *void*__  
  
> *return __void__*  

##  
__toCommandData() : *Array*__  
  
> *return __Array__*  

##  
### *Static Properties*  

#  
__RTL__ String  
default 'rtl',   

#  
__LTR__ String  
default 'ltr',   

#  
__TOP__ String  
default 'top',   

#  
__HANGING__ String  
default 'hanging',   

#  
__MIDDLE__ String  
default 'middle',   

#  
__ALPHABETIC__ String  
default 'alphabetic',   

#  
__IDEOGRAPHIC__ String  
default 'ideographic',   

#  
__BOTTOM__ String  
default 'bottom',   

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator