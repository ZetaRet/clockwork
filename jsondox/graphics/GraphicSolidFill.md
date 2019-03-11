> __Author: Zeta Ret, Ivo Yankulovski__  
> __graphic solid fill command object__  
# manually create and add this command, usually acts as GraphicEndFill with a single color value  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.graphics::GraphicSolidFill  
> Interfaces: zetaret.global.packages.clockwork.graphics.interfaces::IGraphicSolidFill  

### *Properties*  

#  
__color__ Number|String|CanvasGradient|CanvasPattern  
default 0,   

#  
__command__ Number  
default zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.SOLID_FILL,   


##  
### *Methods*  

##  
__GraphicSolidFill() : *void*__  
  
> *return __void__*  

##  
__toCommandData() : *Array*__  
  
> *return __Array__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator