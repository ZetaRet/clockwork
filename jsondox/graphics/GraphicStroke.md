> __Author: Zeta Ret, Ivo Yankulovski__  
> __graphic stroke command object__  
# created by lineStyle of Graphics model, described by line settings  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.graphics::GraphicStroke  
> Interfaces: zetaret.global.packages.clockwork.graphics.interfaces::IGraphicStroke  

### *Properties*  

#  
__color__ Number|String|CanvasGradient|CanvasPattern  
default 0,   

#  
__alpha__ Number  
default 1,   

#  
__caps__ String  
default '',   

#  
__fill__ Number|String|CanvasGradient|CanvasPattern  
default null,   

#  
__joints__ String  
default '',   

#  
__miterLimit__ Number  
default 0,   

#  
__pixelHinting__ Boolean  
default false,   

#  
__scaleMode__ String  
default '',   

#  
__thickness__ Number  
default 0,   

#  
__offset__ Number  
default 0,   

#  
__command__ Number  
default zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.LINE,   


##  
### *Methods*  

##  
__GraphicStroke() : *void*__  
  
> *return __void__*  

##  
__toCommandData() : *Array*__  
  
> *return __Array__*  

##  
### *Static Properties*  

#  
__NONE__ String  
default 'none',   

#  
__ROUND__ String  
default 'round',   

#  
__SQUARE__ String  
default 'square',   

#  
__MITER__ String  
default 'miter',   

#  
__BEVEL__ String  
default 'bevel',   

#  
__HORIZONTAL__ String  
default 'horizontal',   

#  
__VERTICAL__ String  
default 'vertical',   

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator