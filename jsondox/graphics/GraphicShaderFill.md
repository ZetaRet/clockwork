> __Author: Zeta Ret, Ivo Yankulovski__  
> __graphic shader fill command object__  
# custom command, described by graphic language byte code, data, dimensions and shader method  
> *Requires: protoss.all.js*  
> *Version: 1.04*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.graphics::GraphicShaderFill  
> Inherits:   
> Interfaces: zetaret.global.packages.clockwork.graphics.interfaces::IGraphicShaderFill  

### *Properties*  

#  
__matrix__ Object  
default null,   

#  
__shader__ Function  
default null,   

#  
__data__ Object  
default null,   

#  
__xoffset__ Number  
default 0,   

#  
__yoffset__ Number  
default 0,   

#  
__x__ Number  
default 0,   

#  
__y__ Number  
default 0,   

#  
__width__ Number  
default 0,   

#  
__height__ Number  
default 0,   

#  
__byteCode__ Object  
default null,   

#  
__precisionHint__ String  
default '',   

#  
__command__ Number  
default zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.SHADER,   


##  
### *Methods*  

##  
__GraphicShaderFill() : *void*__  
  
> *return __void__*  

##  
__toCommandData() : *Array*__  
  
> *return __Array__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
