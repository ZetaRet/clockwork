> __Author: Zeta Ret, Ivo Yankulovski__  
> __graphic bitmap fill command object__  
# created by beginBitmapFill/lineBitmapStyle of Graphics model, described by flags, alpha, image data and command id  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.graphics::GraphicBitmapFill  
> Interfaces: zetaret.global.packages.clockwork.graphics.interfaces::IGraphicBitmapFill  

### *Properties*  

#  
__bitmapData__ String|CanvasImageSource  
default null,   

#  
__matrix__ SVGMatrix  
default null,   

#  
__repeat__ String  
default null,   

#  
__smooth__ Boolean  
default null,   

#  
__alpha__ Number  
default 1,   

#  
__stroke__ Boolean  
default false,   

#  
__imgid__ String  
default '',   

#  
__command__ Number  
default zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.PATTERN,   


##  
### *Methods*  

##  
__GraphicBitmapFill() : *void*__  
  
> *return __void__*  

##  
__toCommandData() : *Array*__  
  
> *return __Array__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator