> __Author: Zeta Ret, Ivo Yankulovski__  
> __RGB color model__  
# color object based on red, green, blue channel, converters and formatters  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.color::RGB  

### *Properties*  

#  
__Red__ Number  
default red||0,   

#  
__Green__ Number  
default green||0,   

#  
__Blue__ Number  
default blue||0,   

#  
__ColorUtil__ Object  
default zetaret.global.packages.clockwork.color.utils.ColorUtil,   


##  
### *Methods*  

##  
__RGB(*Number* red, *Number* green, *Number* blue) : *void*__  
  
- red - __*Number*__,   
- green - __*Number*__,   
- blue - __*Number*__,   
> *return __void__*  

##  
__Normalize() : *zetaret.global.packages.clockwork.color::RGB*__  
  
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__FromRGB(*zetaret.global.packages.clockwork.color.RGB* rgb) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __rgb*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__FromHSL(*zetaret.global.packages.clockwork.color.HSL* hsl) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __hsl*__ - __*zetaret.global.packages.clockwork.color.HSL*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__FromHSB(*zetaret.global.packages.clockwork.color.HSB* hsb) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __hsb*__ - __*zetaret.global.packages.clockwork.color.HSB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__FromColor(*Number* color) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __color*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__ToColor() : *Number*__  
  
> *return __Number__*  

##  
__ToHSB() : *zetaret.global.packages.clockwork.color::HSB*__  
  
> *return __zetaret.global.packages.clockwork.color::HSB__*  

##  
__ToHSL() : *zetaret.global.packages.clockwork.color::HSL*__  
  
> *return __zetaret.global.packages.clockwork.color::HSL__*  

##  
__ToRGB() : *zetaret.global.packages.clockwork.color::RGB*__  
  
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__toString() : *String*__  
  
> *return __String__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator