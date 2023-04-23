> __Author: Zeta Ret__  
> __static object type__  
# access of enumerated color utils used for direct reference in inheritance or color data models  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.colors.utils::ColorUtil  
>Static Package Object  


##  
### *Static Properties*  

#  
__ALPHA__ Number  
default 24,   

#  
__RED__ Number  
default 16,   

#  
__GREEN__ Number  
default 8,   

#  
__BLUE__ Number  
default 0,   

#  
__EIGHT__ Number  
default 8,   

#  
__FIVE__ Number  
default 5,   

#  
__FOUR__ Number  
default 4,   

#  
__THREE__ Number  
default 3,   

#  
__TWICE__ Number  
default 2,   

#  
__ONE__ Number  
default 1,   

#  
__HALF__ Number  
default 0.5,   

#  
__TWO\_THIRDS__ Number  
default 2/3,   

#  
__ONE\_THIRD__ Number  
default 1/3,   

#  
__ZERO__ Number  
default 0,   

#  
__HEX__ Number  
default 0xff,   

#  
__HALF\_HEX__ Number  
default 0x80,   

#  
__FOURTH\_HEX__ Number  
default 0x40,   

#  
__HUE\_SECTION__ Number  
default 1/6,   

#  
__HUE\_SECTIONS__ Number  
default 6,   

#  
__MAX\_CHANNEL__ Number  
default 0xff,   

#  
__MIN\_CHANNEL__ Number  
default 0,   

#  
__MAX\_PERCENT__ Number  
default 1,   

#  
__MIN\_PERCENT__ Number  
default 0,   

#  
__ColorTransform\_Normal__ Object  
default default,   

#  
__ColorTransform\_Darkness__ Object  
default default,   

#  
__ColorTransform\_Lightness__ Object  
default default,   

#  
__ColorTransform\_Inverse__ Object  
default default,   

##  
### *Static Methods*  

##  
__Blend\_Normal(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_ColorReplace(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Alpha(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base, *Number* alpha) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __alpha*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Add(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_AlphaMethod(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base, *Function* method, *Number* alpha) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __method*__ - __*Function*__,   
- __alpha*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Average(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_ColorBurn(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Darken(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Difference(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_DodgeColor(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Exclusion(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Glow(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_HardLight(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_HardMix(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Lighten(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_LinearBurn(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_LinearDodge(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_LinearLight(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Multiply(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Negation(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Overlay(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Phoenix(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_PinLight(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Reflect(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Screen(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_SoftLight(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_VividLight(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Color(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Hue(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Luminosity(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Blend\_Saturation(*zetaret.global.packages.clockwork.color.RGB* blender, *zetaret.global.packages.clockwork.color.RGB* base) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__Alpha(*Number* blender, *Number* base, *Number* alpha) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
- __alpha*__ - __*Number*__,   
> *return __Number__*  

##  
__Add(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Average(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__ColorBurn(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Darken(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Difference(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__DodgeColor(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Exclusion(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Glow(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__HardLight(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__HardMix(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Lighten(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__LinearBurn(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__LinearDodge(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__LinearLight(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Multiply(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Negation(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Overlay(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Phoenix(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__PinLight(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Reflect(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Screen(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__SoftLight(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Subtract(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__VividLight(*Number* blender, *Number* base) : *Number*__  
  
- __blender*__ - __*Number*__,   
- __base*__ - __*Number*__,   
> *return __Number__*  

##  
__Color\_HSL(*zetaret.global.packages.clockwork.color.HSL* blender, *zetaret.global.packages.clockwork.color.HSL* base) : *zetaret.global.packages.clockwork.color::HSL*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.HSL*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.HSL*__,   
> *return __zetaret.global.packages.clockwork.color::HSL__*  

##  
__Hue\_HSL(*zetaret.global.packages.clockwork.color.HSL* blender, *zetaret.global.packages.clockwork.color.HSL* base) : *zetaret.global.packages.clockwork.color::HSL*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.HSL*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.HSL*__,   
> *return __zetaret.global.packages.clockwork.color::HSL__*  

##  
__Luminosity\_HSL(*zetaret.global.packages.clockwork.color.HSL* blender, *zetaret.global.packages.clockwork.color.HSL* base) : *zetaret.global.packages.clockwork.color::HSL*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.HSL*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.HSL*__,   
> *return __zetaret.global.packages.clockwork.color::HSL__*  

##  
__Saturation\_HSL(*zetaret.global.packages.clockwork.color.HSL* blender, *zetaret.global.packages.clockwork.color.HSL* base) : *zetaret.global.packages.clockwork.color::HSL*__  
  
- __blender*__ - __*zetaret.global.packages.clockwork.color.HSL*__,   
- __base*__ - __*zetaret.global.packages.clockwork.color.HSL*__,   
> *return __zetaret.global.packages.clockwork.color::HSL__*  

##  
__GetAlpha(*Number* color) : *Number*__  
  
- __color*__ - __*Number*__,   
> *return __Number__*  

##  
__GetBlue(*Number* color) : *Number*__  
  
- __color*__ - __*Number*__,   
> *return __Number__*  

##  
__GetGreen(*Number* color) : *Number*__  
  
- __color*__ - __*Number*__,   
> *return __Number__*  

##  
__GetRed(*Number* color) : *Number*__  
  
- __color*__ - __*Number*__,   
> *return __Number__*  

##  
__SetAlpha(*Number* color, *Number* alpha) : *Number*__  
  
- __color*__ - __*Number*__,   
- __alpha*__ - __*Number*__,   
> *return __Number__*  

##  
__SetBlue(*Number* color, *Number* blue, *Number* alpha) : *Number*__  
  
- __color*__ - __*Number*__,   
- __blue*__ - __*Number*__,   
- alpha - __*Number*__,   
> *return __Number__*  

##  
__SetGreen(*Number* color, *Number* green, *Number* alpha) : *Number*__  
  
- __color*__ - __*Number*__,   
- __green*__ - __*Number*__,   
- alpha - __*Number*__,   
> *return __Number__*  

##  
__SetRed(*Number* color, *Number* red, *Number* alpha) : *Number*__  
  
- __color*__ - __*Number*__,   
- __red*__ - __*Number*__,   
- alpha - __*Number*__,   
> *return __Number__*  

##  
__Color\_Process(*Number* startColor, *Number* endColor, *Number* time, *Number* alpha) : *Number*__  
  
- __startColor*__ - __*Number*__,   
- __endColor*__ - __*Number*__,   
- __time*__ - __*Number*__,   
- alpha - __*Number*__,   
> *return __Number__*  

##  
__InitColorTransformConsts() : *void*__  
  
> *return __void__*  

##  
__ColorTransform\_Equal(*zetaret.global.packages.clockwork.color.ColorTransform* transform1, *zetaret.global.packages.clockwork.color.ColorTransform* transform2) : *Boolean*__  
  
- transform1 - __*zetaret.global.packages.clockwork.color.ColorTransform*__,   
- transform2 - __*zetaret.global.packages.clockwork.color.ColorTransform*__,   
> *return __Boolean__*  

##  
__ColorTransform\_Clone(*zetaret.global.packages.clockwork.color.ColorTransform* transform) : *zetaret.global.packages.clockwork.color::ColorTransform*__  
  
- __transform*__ - __*zetaret.global.packages.clockwork.color.ColorTransform*__,   
> *return __zetaret.global.packages.clockwork.color::ColorTransform__*  

##  
__ColorTransform\_GenerateNormal() : *zetaret.global.packages.clockwork.color::ColorTransform*__  
  
> *return __zetaret.global.packages.clockwork.color::ColorTransform__*  

##  
__ColorTransform\_GenerateDarkness() : *zetaret.global.packages.clockwork.color::ColorTransform*__  
  
> *return __zetaret.global.packages.clockwork.color::ColorTransform__*  

##  
__ColorTransform\_GenerateLightness() : *zetaret.global.packages.clockwork.color::ColorTransform*__  
  
> *return __zetaret.global.packages.clockwork.color::ColorTransform__*  

##  
__ColorTransform\_GenerateInverse() : *zetaret.global.packages.clockwork.color::ColorTransform*__  
  
> *return __zetaret.global.packages.clockwork.color::ColorTransform__*  

##  
__ColorTransform\_Process(*zetaret.global.packages.clockwork.color.ColorTransform* start, *zetaret.global.packages.clockwork.color.ColorTransform* end, *Number* time) : *zetaret.global.packages.clockwork.color::ColorTransform*__  
  
- __start*__ - __*zetaret.global.packages.clockwork.color.ColorTransform*__,   
- __end*__ - __*zetaret.global.packages.clockwork.color.ColorTransform*__,   
- __time*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::ColorTransform__*  

##  
__ColorTransform\_TransformSetter(*zetaret.global.packages.clockwork.ui.DisplayObject* target, *String* parameter, *zetaret.global.packages.clockwork.color.ColorTransform* colorTransform) : *void*__  
  
- __target*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- __parameter*__ - __*String*__,   
- __colorTransform*__ - __*zetaret.global.packages.clockwork.color.ColorTransform*__,   
> *return __void__*  

##  
__ColorTransform\_Tint(*Number* color, *Number* percent) : *zetaret.global.packages.clockwork.color::ColorTransform*__  
  
- __color*__ - __*Number*__,   
- __percent*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::ColorTransform__*  

##  
__ColorTransform\_ProcessTint(*zetaret.global.packages.clockwork.ui.DisplayObject* target, *Number* color, *Number* time, *Number* percent) : *zetaret.global.packages.clockwork.color::ColorTransform*__  
  
- __target*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- __color*__ - __*Number*__,   
- __time*__ - __*Number*__,   
- __percent*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::ColorTransform__*  

##  
__TintObject(*zetaret.global.packages.clockwork.ui.DisplayObject* target, *Number* color, *Number* percent) : *zetaret.global.packages.clockwork.color::ColorTransform*__  
  
- __target*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- __color*__ - __*Number*__,   
- __percent*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::ColorTransform__*  

##  
__Color2HSB(*Number* color) : *retun zetaret.global.packages.clockwork.color::HSB*__  
  
- __color*__ - __*Number*__,   
> *return __retun zetaret.global.packages.clockwork.color::HSB__*  

##  
__Color2HSL(*Number* color) : *retun zetaret.global.packages.clockwork.color::HSL*__  
  
- __color*__ - __*Number*__,   
> *return __retun zetaret.global.packages.clockwork.color::HSL__*  

##  
__Color2RGB(*Number* color) : *retun zetaret.global.packages.clockwork.color::RGB*__  
  
- __color*__ - __*Number*__,   
> *return __retun zetaret.global.packages.clockwork.color::RGB__*  

##  
__FromARGB(*Number* alpha, *Number* red, *Number* green, *Number* blue) : *Number*__  
  
- __alpha*__ - __*Number*__,   
- __red*__ - __*Number*__,   
- __green*__ - __*Number*__,   
- __blue*__ - __*Number*__,   
> *return __Number__*  

##  
__FromRGB(*Number* red, *Number* green, *Number* blue) : *Number*__  
  
- __red*__ - __*Number*__,   
- __green*__ - __*Number*__,   
- __blue*__ - __*Number*__,   
> *return __Number__*  

##  
__HSB2Color(*zetaret.global.packages.clockwork.color.HSB* hsb) : *Number*__  
  
- __hsb*__ - __*zetaret.global.packages.clockwork.color.HSB*__,   
> *return __Number__*  

##  
__HSB2HSL(*Number* hue, *Number* saturation, *Number* brightness) : *zetaret.global.packages.clockwork.color::HSL*__  
  
- __hue*__ - __*Number*__,   
- __saturation*__ - __*Number*__,   
- __brightness*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::HSL__*  

##  
__HSB2RGB(*Number* hue, *Number* saturation, *Number* brightness) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __hue*__ - __*Number*__,   
- __saturation*__ - __*Number*__,   
- __brightness*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__HSL2Color(*zetaret.global.packages.clockwork.color.HSL* hsl) : *Number*__  
  
- __hsl*__ - __*zetaret.global.packages.clockwork.color.HSL*__,   
> *return __Number__*  

##  
__HSL2HSB(*Number* hue, *Number* saturation, *Number* luminosity) : *zetaret.global.packages.clockwork.color::HSB*__  
  
- __hue*__ - __*Number*__,   
- __saturation*__ - __*Number*__,   
- __luminosity*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::HSB__*  

##  
__HSL2RGB(*Number* hue, *Number* saturation, *Number* luminosity) : *zetaret.global.packages.clockwork.color::RGB*__  
  
- __hue*__ - __*Number*__,   
- __saturation*__ - __*Number*__,   
- __luminosity*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::RGB__*  

##  
__RGB2Color(*zetaret.global.packages.clockwork.color.RGB* rgb) : *Number*__  
  
- __rgb*__ - __*zetaret.global.packages.clockwork.color.RGB*__,   
> *return __Number__*  

##  
__RGB2HSB(*Number* red, *Number* green, *Number* blue) : *zetaret.global.packages.clockwork.color::HSB*__  
  
- __red*__ - __*Number*__,   
- __green*__ - __*Number*__,   
- __blue*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::HSB__*  

##  
__RGB2HSL(*Number* red, *Number* green, *Number* blue) : *zetaret.global.packages.clockwork.color::HSL*__  
  
- __red*__ - __*Number*__,   
- __green*__ - __*Number*__,   
- __blue*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.color::HSL__*  

##  
__BaseValueOnTime(*Number* start, *Number* end, *Number* time) : *Number*__  
  
- __start*__ - __*Number*__,   
- __end*__ - __*Number*__,   
- __time*__ - __*Number*__,   
> *return __Number__*  

##  
__HexToPercent(*Number* value) : *Number*__  
  
- __value*__ - __*Number*__,   
> *return __Number__*  

##  
__PercentToHex(*Number* value) : *Number*__  
  
- __value*__ - __*Number*__,   
> *return __Number__*  

##  
__ToHex(*Number* value) : *Number*__  
  
- __value*__ - __*Number*__,   
> *return __Number__*  

##  
__ToPercent(*Number* value) : *Number*__  
  
- __value*__ - __*Number*__,   
> *return __Number__*  

