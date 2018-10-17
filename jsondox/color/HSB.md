> __Author: Zeta Ret, Ivo Yankulovski__  
> __HSB color model__  
# color object based on hue, saturation, brightness geometries, converters and formatters  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.color::HSB  
> Inherits:   
> Interfaces:   

### *Properties*  

#
__Hue__ Number  
default hue||0,   

#
__Saturation__ Number  
default saturation||0,   

#
__Brightness__ Number  
default brightness||0,   

#
__ColorUtil__ Object  
default zetaret.global.packages.clockwork.color.utils.ColorUtil,   


##
### *Methods*  

##
__HSB(*Number* hue, *Number* saturation, *Number* brightness) : *void*__  
  
- hue - __*Number*__,   
- saturation - __*Number*__,   
- brightness - __*Number*__,   
> *return __void__*  

##
__Normalize() : *zetaret.global.packages.clockwork.color::HSB*__  
  
> *return __zetaret.global.packages.clockwork.color::HSB__*  

##
__FromRGB(*zetaret.global.packages.clockwork.color.RGB* rgb) : *zetaret.global.packages.clockwork.color::HSB*__  
  
- __rgb*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::HSB__*  

##
__FromHSL(*zetaret.global.packages.clockwork.color.HSL* hsl) : *zetaret.global.packages.clockwork.color::HSB*__  
  
- __hsl*__ - __*zetaret.global.packages.clockwork.color.HSL*__,   
> *return __zetaret.global.packages.clockwork.color::HSB__*  

##
__FromHSB(*zetaret.global.packages.clockwork.color.HSB* hsb) : *zetaret.global.packages.clockwork.color::HSB*__  
  
- __hsb*__ - __*zetaret.global.packages.clockwork.color.HSB*__,   
> *return __zetaret.global.packages.clockwork.color::HSB__*  

##
__FromColor(*Number* color) : *zetaret.global.packages.clockwork.color::HSB*__  
  
- __color*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::HSB__*  

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
