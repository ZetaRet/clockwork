> __Author: Zeta Ret, Ivo Yankulovski__  
> __canvas graphics api__  
# draw paths/shapes/lines/curves/text, composite layers and gradients, compute dimensions and execute crud operations on graphics data commands, manage invalidation and cache clearance  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.17*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.graphics::Graphics  
> Inherits:   
> Interfaces: zetaret.global.packages.clockwork.graphics.interfaces::IGraphics  

### *Properties*  

#
__invalid__ Boolean  
default false,   

#
__cachedIntArray__ Array  
default null,   

#
__cachedDirect__ Array  
default null,   

#
__direct__ Boolean  
default true,   

#
__fillPath__ Boolean  
default true,   

#
__autoStroke__ Boolean  
default true,   

#
__autoFill__ Boolean  
default true,   

#
__autoPath__ Boolean  
default true,   

#
__autoOP__ Boolean  
default true,   

#
__autoCacheGradients__ Boolean  
default false,   

#
__gradientCacheId__ String  
default null,   

#
__gradientCache__ Array  
default null,   

#
__graphicsMediator__ zetaret.global.packages.clockwork.mediators.GraphicContext2DMediator  
default null,   

#
__commands__ Array  
default [],   

#
__graphicsData__ Array  
default [],   

#
__cacheMap__ Object  
default null,   


##
### *Methods*  

##
__Graphics() : *void*__  
  
> *return __void__*  

##
__enableGradientCache(*String* id) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __id*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__addCommand(*/interfaces.IGraphicCommand|/interfaces.IGraphicData* command) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __command*__ - __*/interfaces.IGraphicCommand|/interfaces.IGraphicData*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__updateLastCommand(*Object* p) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __p*__ - __*Object*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__getCommand(*/interfaces.IGraphicCommand|/interfaces.IGraphicData* type, *Number* startIndex) : */interfaces.IGraphicCommand|/interfaces.IGraphicData*__  
  
- __type*__ - __*/interfaces.IGraphicCommand|/interfaces.IGraphicData*__,   
- startIndex - __*Number*__,   
> *return __/interfaces.IGraphicCommand|/interfaces.IGraphicData__*  

##
__copyFrom(*zetaret.global.packages.clockwork.graphics.Graphics* graphics) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __graphics*__ - __*zetaret.global.packages.clockwork.graphics.Graphics*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__beginBitmapFill(*String|CanvasImageSource* bitmap, *SVGMatrix* matrix, *String* repeat, *Boolean* smooth, *Number* alpha) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __bitmap*__ - __*String|CanvasImageSource*__,   
- matrix - __*SVGMatrix*__,   
- repeat - __*String*__,   
- smooth - __*Boolean*__,   
- alpha - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__beginFill(*Number|String|CanvasGradient|CanvasPattern* color, *Number* alpha) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __color*__ - __*Number|String|CanvasGradient|CanvasPattern*__,   
- alpha - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__beginGradientFill(*String* type, *Array* gradient, *Array* colors, *Array* alphas, *Array* ratios, *SVGMatrix* matrix, *String* spreadMethod, *String* interpolationMethod, *Number* focalPointRatio, *Number* alpha) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __type*__ - __*String*__,   
- __gradient*__ - __*Array*__,   
- __colors*__ - __*Array*__,   
- alphas - __*Array*__,   
- ratios - __*Array*__,   
- matrix - __*SVGMatrix*__,   
- spreadMethod - __*String*__,   
- interpolationMethod - __*String*__,   
- focalPointRatio - __*Number*__,   
- alpha - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__beginPath() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__endPath() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__strokePath() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__stroke() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__arc(*Number* x, *Number* y, *Number* r, *Number* startAngle, *Number* endAngle, *Boolean* anticlockwise) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __r*__ - __*Number*__,   
- __startAngle*__ - __*Number*__,   
- __endAngle*__ - __*Number*__,   
- anticlockwise - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__arcTo(*Number* x1, *Number* y1, *Number* x2, *Number* y2, *Number* r) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __x1*__ - __*Number*__,   
- __y1*__ - __*Number*__,   
- __x2*__ - __*Number*__,   
- __y2*__ - __*Number*__,   
- __r*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__cubicCurveTo(*Number* cx1, *Number* cy1, *Number* cx2, *Number* cy2, *Number* ax, *Number* ay) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __cx1*__ - __*Number*__,   
- __cy1*__ - __*Number*__,   
- __cx2*__ - __*Number*__,   
- __cy2*__ - __*Number*__,   
- __ax*__ - __*Number*__,   
- __ay*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__curveTo(*Number* cx, *Number* cy, *Number* ax, *Number* ay) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __cx*__ - __*Number*__,   
- __cy*__ - __*Number*__,   
- __ax*__ - __*Number*__,   
- __ay*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawCircle(*Number* cx, *Number* cy, *Number* radius) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __cx*__ - __*Number*__,   
- __cy*__ - __*Number*__,   
- __radius*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawEllipse(*Number* x, *Number* y, *Number* width, *Number* height, *Number* rx, *Number* ry) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
- __rx*__ - __*Number*__,   
- __ry*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawEllipse2(*Number* x, *Number* y, *Number* rx, *Number* ry, *Number* rotation, *Number* startAngle, *Number* endAngle, *Boolean* anticlockwise) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __rx*__ - __*Number*__,   
- __ry*__ - __*Number*__,   
- __rotation*__ - __*Number*__,   
- __startAngle*__ - __*Number*__,   
- __endAngle*__ - __*Number*__,   
- anticlockwise - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawGraphicsData(*Array* graphicsData) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __graphicsData*__ - __*Array*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawPath(*Array* commands, *Object* data, *String* winding) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __commands*__ - __*Array*__,   
- data - __*Object*__,   
- winding - __*String*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawRect(*Number* x, *Number* y, *Number* width, *Number* height) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawRect2(*Number* x, *Number* y, *Number* width, *Number* height) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawRoundRect(*Number* x, *Number* y, *Number* width, *Number* height, *Number* rtl, *Number* rtr, *Number* rbl, *Number* rbr) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
- __rtl*__ - __*Number*__,   
- __rtr*__ - __*Number*__,   
- __rbl*__ - __*Number*__,   
- __rbr*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawRoundRect2(*Number* x, *Number* y, *Number* width, *Number* height, *Number* rtl, *Number* rtr, *Number* rbl, *Number* rbr) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __width*__ - __*Number*__,   
- __height*__ - __*Number*__,   
- __rtl*__ - __*Number*__,   
- __rtr*__ - __*Number*__,   
- __rbl*__ - __*Number*__,   
- __rbr*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawOuterRect(*Number* x, *Number* y, *Number* w, *Number* h, *Number* s) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __w*__ - __*Number*__,   
- __h*__ - __*Number*__,   
- __s*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawOuterArc(*Number* hs, *Number* x, *Number* y, *Number* r, *Number* startAngle, *Number* endAngle, *Boolean* anticlockwise) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __hs*__ - __*Number*__,   
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __r*__ - __*Number*__,   
- __startAngle*__ - __*Number*__,   
- __endAngle*__ - __*Number*__,   
- anticlockwise - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__dropShadow(*Number|String* color, *Number* blur, *Number* offsetX, *Number* offsetY, *String* composite) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __color*__ - __*Number|String*__,   
- __blur*__ - __*Number*__,   
- __offsetX*__ - __*Number*__,   
- __offsetY*__ - __*Number*__,   
- composite - __*String*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__setComposite(*Number* alpha, *String* blend) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __alpha*__ - __*Number*__,   
- __blend*__ - __*String*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawMask() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawLayer() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawRestore() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__drawRadient(*Number* x, *Number* y, *Number* r, *Array* colors, *Number* facet, *Number* stroke, *Number* offset, *Number* circum, *Object* gdata, *Function* gradienth, *Function* pathh, *Number* alpha, *Object* ldata, *Object* edata) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __r*__ - __*Number*__,   
- __colors*__ - __*Array*__,   
- __facet*__ - __*Number*__,   
- __stroke*__ - __*Number*__,   
- offset - __*Number*__,   
- circum - __*Number*__,   
- gdata - __*Object*__,   
- gradienth - __*Function*__,   
- pathh - __*Function*__,   
- alpha - __*Number*__,   
- ldata - __*Object*__,   
- edata - __*Object*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__endFill(*Boolean* stroke, *Boolean* resetColor, *Boolean* resetColorTransform, *Boolean* resetStroke) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- stroke - __*Boolean*__,   
- resetColor - __*Boolean*__,   
- resetColorTransform - __*Boolean*__,   
- resetStroke - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__lineBitmapStyle(*String|CanvasImageSource* bitmap, *SVGMatrix* matrix, *String* repeat, *Boolean* smooth, *Number* alpha) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __bitmap*__ - __*String|CanvasImageSource*__,   
- matrix - __*SVGMatrix*__,   
- repeat - __*String*__,   
- smooth - __*Boolean*__,   
- alpha - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__lineGradientStyle(*String* type, *Array* gradient, *Array* colors, *Array* alphas, *Array* ratios, *SVGMatrix* matrix, *String* spreadMethod, *String* interpolationMethod, *Number* focalPointRatio, *Number* alpha) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __type*__ - __*String*__,   
- __gradient*__ - __*Array*__,   
- __colors*__ - __*Array*__,   
- alphas - __*Array*__,   
- ratios - __*Array*__,   
- matrix - __*SVGMatrix*__,   
- spreadMethod - __*String*__,   
- interpolationMethod - __*String*__,   
- focalPointRatio - __*Number*__,   
- alpha - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__lineStyle(*Number* thickness, *Number|String|CanvasGradient|CanvasPattern* color, *Number* alpha, *Boolean* pixelHinting, *String* scaleMode, *String* caps, *String* joints, *String* miterLimit) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __thickness*__ - __*Number*__,   
- __color*__ - __*Number|String|CanvasGradient|CanvasPattern*__,   
- alpha - __*Number*__,   
- pixelHinting - __*Boolean*__,   
- scaleMode - __*String*__,   
- caps - __*String*__,   
- joints - __*String*__,   
- miterLimit - __*String*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__lineTo(*Number* x, *Number* y) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__moveTo(*Number* x, *Number* y) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__textStyle(*Number|String|CanvasGradient|CanvasPattern* color, *String* font, *Number* alpha, *Boolean* stroke, *String* align, *String* baseline, *String* direction) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __color*__ - __*Number|String|CanvasGradient|CanvasPattern*__,   
- font - __*String*__,   
- alpha - __*Number*__,   
- stroke - __*Boolean*__,   
- align - __*String*__,   
- baseline - __*String*__,   
- direction - __*String*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__text(*String* data, *Number* x, *Number* y, *Number* width, *Boolean* stroke) : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
- __data*__ - __*String*__,   
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- width - __*Number*__,   
- stroke - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__readCustomCommand(*/interfaces.IGraphicCommand|/interfaces.IGraphicData* c) : */interfaces.IGraphicCommand|/interfaces.IGraphicData*__  
  
- __c*__ - __*/interfaces.IGraphicCommand|/interfaces.IGraphicData*__,   
> *return __/interfaces.IGraphicCommand|/interfaces.IGraphicData__*  

##
__readGraphicsData(*Boolean* cached) : *Array*__  
  
- cached - __*Boolean*__,   
> *return __Array__*  

##
__toIntArray(*zetaret.global.packages.clockwork.context.ContextRenderer* ctxrenderer) : *Array*__  
  
- ctxrenderer - __*zetaret.global.packages.clockwork.context.ContextRenderer*__,   
> *return __Array__*  

##
__toDirect(*zetaret.global.packages.clockwork.context.ContextRenderer* ctxrenderer) : *Array*__  
  
- ctxrenderer - __*zetaret.global.packages.clockwork.context.ContextRenderer*__,   
> *return __Array__*  

##
__filterGraphicsData(*Array* types, *Boolean* cached) : *Array*__  
  
- __types*__ - __*Array*__,   
- cached - __*Boolean*__,   
> *return __Array__*  

##
__getGraphicsDimensions() : *Array*__  
  
> *return __Array__*  

##
__clearCache() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__clearGradientCache() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__clearGraphicsData() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__clear() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__invalidate() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##
__clone() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

---
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
