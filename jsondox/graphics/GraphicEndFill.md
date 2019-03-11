> __Author: Zeta Ret, Ivo Yankulovski__  
> __graphic end fill command object__  
# created by endFill of Graphics model, described by reset flags and command ids  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.graphics::GraphicEndFill  
> Interfaces: zetaret.global.packages.clockwork.graphics.interfaces::IGraphicEndFill  

### *Properties*  

#  
__resetColorTransform__ Boolean  
default false,   

#  
__fillRule__ String  
default zetaret.global.packages.clockwork.graphics.GraphicEndFill.NONZERO,   

#  
__stroke__ Boolean  
default false,   

#  
__resetColor__ Boolean  
default false,   

#  
__resetStroke__ Boolean  
default false,   

#  
__commandResetColor__ Number  
default zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.RESET_COLOR,   

#  
__commandResetStroke__ Number  
default zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.RESET_STROKE,   

#  
__commandStroke__ Number  
default zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.STROKE,   

#  
__command__ Number  
default zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.END_FILL,   


##  
### *Methods*  

##  
__GraphicEndFill() : *void*__  
  
> *return __void__*  

##  
__toCommandData() : *Array*__  
  
> *return __Array__*  

##  
### *Static Properties*  

#  
__NONZERO__ String  
default 'nonzero',   

#  
__EVENODD__ String  
default 'evenodd',   

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator