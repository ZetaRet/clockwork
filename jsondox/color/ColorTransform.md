> __Author: Zeta Ret, Ivo Yankulovski__  
> __color transform model__  
# red, green, blue, alpha multiplier/offset of color and adjacent methods  
> *Requires: protoss.all.js*  
> *Version: 1.00*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.color::ColorTransform  
> Inherits:   
> Interfaces:   

### *Properties*  

#
__redMultiplier__ Number  
default 0,   

#
__greenMultiplier__ Number  
default 0,   

#
__blueMultiplier__ Number  
default 0,   

#
__alphaMultiplier__ Number  
default 0,   

#
__redOffset__ Number  
default 0,   

#
__greenOffset__ Number  
default 0,   

#
__blueOffset__ Number  
default 0,   

#
__alphaOffset__ Number  
default 0,   

#
__color__ Number  
default 0,   


##
### *Methods*  

##
__ColorTransform(*Number* redMultiplier, *Number* greenMultiplier, *Number* blueMultiplier, *Number* alphaMultiplier, *Number* redOffset, *Number* greenOffset, *Number* blueOffset, *Number* alphaOffset) : *void*__  
  
- redMultiplier - __*Number*__,   
- greenMultiplier - __*Number*__,   
- blueMultiplier - __*Number*__,   
- alphaMultiplier - __*Number*__,   
- redOffset - __*Number*__,   
- greenOffset - __*Number*__,   
- blueOffset - __*Number*__,   
- alphaOffset - __*Number*__,   
> *return __void__*  

##
__identity() : *zetaret.global.packages.clockwork.color::ColorTransform*__  
  
> *return __zetaret.global.packages.clockwork.color::ColorTransform__*  

##
__nullify() : *zetaret.global.packages.clockwork.color::ColorTransform*__  
  
> *return __zetaret.global.packages.clockwork.color::ColorTransform__*  

##
__concat(*zetaret.global.packages.clockwork.color.ColorTransform* ct) : *zetaret.global.packages.clockwork.color::ColorTransform*__  
  
- __ct*__ - __*zetaret.global.packages.clockwork.color.ColorTransform*__,   
> *return __zetaret.global.packages.clockwork.color::ColorTransform__*  

##
__toArr() : *Array*__  
  
> *return __Array__*  

---
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
