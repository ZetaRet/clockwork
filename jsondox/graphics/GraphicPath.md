> __Author: Zeta Ret, Ivo Yankulovski__  
> __graphic path command object__  
# created by drawCircle/drawEllipse/drawEllipse2/drawPath/drawRect/drawRect2/drawRoundRect/drawRoundRect2/drawOuterRect/drawOuterArc/drawRadient of Graphics model, described by line settings  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.graphics::GraphicPath  
> Inherits:   
> Interfaces: zetaret.global.packages.clockwork.graphics.interfaces::IGraphicPath  

### *Properties*  

#  
__commands__ Array  
default [],   

#  
__data__ Array  
default [],   

#  
__winding__ String  
default '',   

#  
__closeAfter__ Boolean  
default false,   

#  
__autoClose__ Boolean  
default false,   

#  
__command__ Number  
default zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.PATH,   


##  
### *Methods*  

##  
__GraphicPath() : *void*__  
  
> *return __void__*  

##  
__cubicCurveTo(*Number* cx1, *Number* cy1, *Number* cx2, *Number* cy2, *Number* ax, *Number* ay) : *zetaret.global.packages.clockwork.graphics::GraphicPath*__  
  
- __cx1*__ - __*Number*__,   
- __cy1*__ - __*Number*__,   
- __cx2*__ - __*Number*__,   
- __cy2*__ - __*Number*__,   
- __ax*__ - __*Number*__,   
- __ay*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::GraphicPath__*  

##  
__curveTo(*Number* cx, *Number* cy, *Number* ax, *Number* ay) : *zetaret.global.packages.clockwork.graphics::GraphicPath*__  
  
- __cx*__ - __*Number*__,   
- __cy*__ - __*Number*__,   
- __ax*__ - __*Number*__,   
- __ay*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::GraphicPath__*  

##  
__lineTo(*Number* x, *Number* y) : *zetaret.global.packages.clockwork.graphics::GraphicPath*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::GraphicPath__*  

##  
__moveTo(*Number* x, *Number* y) : *zetaret.global.packages.clockwork.graphics::GraphicPath*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::GraphicPath__*  

##  
__arc(*Number* x, *Number* y, *Number* r, *Number* startAngle, *Number* endAngle, *Boolean* anticlockwise) : *zetaret.global.packages.clockwork.graphics::GraphicPath*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __r*__ - __*Number*__,   
- __startAngle*__ - __*Number*__,   
- __endAngle*__ - __*Number*__,   
- anticlockwise - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.graphics::GraphicPath__*  

##  
__arcTo(*Number* x1, *Number* y1, *Number* x2, *Number* y2, *Number* r) : *zetaret.global.packages.clockwork.graphics::GraphicPath*__  
  
- __x1*__ - __*Number*__,   
- __y1*__ - __*Number*__,   
- __x2*__ - __*Number*__,   
- __y2*__ - __*Number*__,   
- __r*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::GraphicPath__*  

##  
__rect(*Number* x, *Number* y, *Number* w, *Number* h) : *zetaret.global.packages.clockwork.graphics::GraphicPath*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __w*__ - __*Number*__,   
- __h*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::GraphicPath__*  

##  
__ellipse(*Number* x, *Number* y, *Number* rx, *Number* ry, *Number* rotation, *Number* startAngle, *Number* endAngle, *Boolean* anticlockwise) : *zetaret.global.packages.clockwork.graphics::GraphicPath*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __rx*__ - __*Number*__,   
- __ry*__ - __*Number*__,   
- __rotation*__ - __*Number*__,   
- __startAngle*__ - __*Number*__,   
- __endAngle*__ - __*Number*__,   
- anticlockwise - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.graphics::GraphicPath__*  

##  
__circle(*Number* x, *Number* y, *Number* r) : *zetaret.global.packages.clockwork.graphics::GraphicPath*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __r*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::GraphicPath__*  

##  
__toCommandData() : *Array*__  
  
> *return __Array__*  

##  
### *Static Properties*  

#  
__EVEN_ODD__ String  
default 'evenOdd',   

#  
__NON_ZERO__ String  
default 'nonZero',   

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
