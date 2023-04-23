> __Author: Zeta Ret__  
> __contex mediator for Canvas2DRenderer__  
# cache, clear and reset mechanisms, transform/style/composite/color/gradient/pattern polyfills, shader/filter instruction availability  
> *Requires: protoss.all.js*  
> *Version: 1.12*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator  

### *Properties*  

#  
__cnvs2drender__ zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer  
default null,   

#  
__renderlist__ Array  
default null,   

#  
__context__ CanvasRenderingContext2D  
default null,   

#  
__inverse__ Boolean  
default false,   

#  
__patternCache__ Object  
default {},   

#  
__assetCache__ Object  
default {},   

#  
__gradientCache__ Object  
default {},   


##  
### *Methods*  

##  
__GraphicContext2DMediator() : *void*__  
  
> *return __void__*  

##  
__setRenderList(*Array* list) : *zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator*__  
  
- __list*__ - __*Array*__,   
> *return __zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator__*  

##  
__invalidateList() : *zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator*__  
  
> *return __zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator__*  

##  
__clear() : *zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator*__  
  
> *return __zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator__*  

##  
__render() : *zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator*__  
  
> *return __zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator__*  

##  
__setContextRenderer(*zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer* cnvs2drender) : *zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator*__  
  
- __cnvs2drender*__ - __*zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer*__,   
> *return __zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator__*  

##  
__configureSetters() : *void*__  
  
> *return __void__*  

##  
__unconfigureContext() : *zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator*__  
  
> *return __zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator__*  

##  
__configureContext(*CanvasRenderingContext2D* ctx) : *zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator*__  
  
- __ctx*__ - __*CanvasRenderingContext2D*__,   
> *return __zetaret.global.packages.clockwork.mediators::GraphicContext2DMediator__*  

##  
__setShadowStyle(*Number|String* color, *Number* blur, *Number* offsetX, *Number* offsetY, *String* composite) : *CanvasRenderingContext2D*__  
  
- __color*__ - __*Number|String*__,   
- __blur*__ - __*Number*__,   
- __offsetX*__ - __*Number*__,   
- __offsetY*__ - __*Number*__,   
- composite - __*String*__,   
> *return __CanvasRenderingContext2D__*  

##  
__setImageStyle(*Boolean* smooth) : *CanvasRenderingContext2D*__  
  
- __smooth*__ - __*Boolean*__,   
> *return __CanvasRenderingContext2D__*  

##  
__setComposite(*Number* alpha, *String* blend) : *CanvasRenderingContext2D*__  
  
- __alpha*__ - __*Number*__,   
- __blend*__ - __*String*__,   
> *return __CanvasRenderingContext2D__*  

##  
__setLineStyle(*Number|String|CanvasGradient|CanvasPattern* colorStyle, *Number* alpha, *Number* width, *String* cap, *String* join, *Number* miterLimit, *Number* dashOffset) : *CanvasRenderingContext2D*__  
  
- __colorStyle*__ - __*Number|String|CanvasGradient|CanvasPattern*__,   
- __alpha*__ - __*Number*__,   
- __width*__ - __*Number*__,   
- __cap*__ - __*String*__,   
- __join*__ - __*String*__,   
- __miterLimit*__ - __*Number*__,   
- __dashOffset*__ - __*Number*__,   
> *return __CanvasRenderingContext2D__*  

##  
__setTextStyle(*Number|String|CanvasGradient|CanvasPattern* color, *String* font, *Number* alpha, *Boolean* stroke, *String* align, *String* baseline, *String* direction) : *CanvasRenderingContext2D*__  
  
- __color*__ - __*Number|String|CanvasGradient|CanvasPattern*__,   
- __font*__ - __*String*__,   
- __alpha*__ - __*Number*__,   
- __stroke*__ - __*Boolean*__,   
- __align*__ - __*String*__,   
- __baseline*__ - __*String*__,   
- __direction*__ - __*String*__,   
> *return __CanvasRenderingContext2D__*  

##  
__setColor(*Number|String|CanvasGradient|CanvasPattern* colorStyle) : *CanvasRenderingContext2D*__  
  
- __colorStyle*__ - __*Number|String|CanvasGradient|CanvasPattern*__,   
> *return __CanvasRenderingContext2D__*  

##  
__setColorAlpha(*Number|String|CanvasGradient|CanvasPattern* colorStyle, *Boolean* fill, *Boolean* stroke, *Boolean* shadow) : *CanvasRenderingContext2D*__  
  
- __colorStyle*__ - __*Number|String|CanvasGradient|CanvasPattern*__,   
- fill - __*Boolean*__,   
- stroke - __*Boolean*__,   
- shadow - __*Boolean*__,   
> *return __CanvasRenderingContext2D__*  

##  
__setFillStyle(*Number|String|CanvasGradient|CanvasPattern* colorStyle, *Number* alpha) : *CanvasRenderingContext2D*__  
  
- __colorStyle*__ - __*Number|String|CanvasGradient|CanvasPattern*__,   
- __alpha*__ - __*Number*__,   
> *return __CanvasRenderingContext2D__*  

##  
__setLinearGradientStyle(*Array* gradient, *Array* colors, *Number* alpha, *Boolean* stroke, *Boolean|String* gid) : *CanvasRenderingContext2D*__  
  
- __gradient*__ - __*Array*__,   
- __colors*__ - __*Array*__,   
- __alpha*__ - __*Number*__,   
- stroke - __*Boolean*__,   
- gid - __*Boolean|String*__,   
> *return __CanvasRenderingContext2D__*  

##  
__setRadialGradientStyle(*Array* gradient, *Array* colors, *Number* alpha, *Boolean* stroke, *Boolean|String* gid) : *CanvasRenderingContext2D*__  
  
- __gradient*__ - __*Array*__,   
- __colors*__ - __*Array*__,   
- __alpha*__ - __*Number*__,   
- stroke - __*Boolean*__,   
- gid - __*Boolean|String*__,   
> *return __CanvasRenderingContext2D__*  

##  
__setPatternStyle(*String|CanvasImageSource* asset, *String* repetition, *Number* alpha, *SVGMatrix* matrix, *Boolean* stroke, *String* imgid) : *CanvasRenderingContext2D*__  
  
- __asset*__ - __*String|CanvasImageSource*__,   
- __repetition*__ - __*String*__,   
- __alpha*__ - __*Number*__,   
- matrix - __*SVGMatrix*__,   
- stroke - __*Boolean*__,   
- imgid - __*String*__,   
> *return __CanvasRenderingContext2D__*  

##  
__clearStyle() : *CanvasRenderingContext2D*__  
  
> *return __CanvasRenderingContext2D__*  

##  
__resetShadow() : *CanvasRenderingContext2D*__  
  
> *return __CanvasRenderingContext2D__*  

##  
__resetText() : *CanvasRenderingContext2D*__  
  
> *return __CanvasRenderingContext2D__*  

##  
__resetStroke() : *CanvasRenderingContext2D*__  
  
> *return __CanvasRenderingContext2D__*  

##  
__resetColor(*Boolean* resetct) : *CanvasRenderingContext2D*__  
  
- resetct - __*Boolean*__,   
> *return __CanvasRenderingContext2D__*  

##  
__resetTransform() : *CanvasRenderingContext2D*__  
  
> *return __CanvasRenderingContext2D__*  

##  
__clearReset() : *CanvasRenderingContext2D*__  
  
> *return __CanvasRenderingContext2D__*  

##  
__filterImageData(*Function* filter, *Object* filterParams, *ImageData|Object* data, *Number* x, *Number* y, *Number* dx, *Number* dy, *Number* dw, *Number* dh) : *CanvasRenderingContext2D*__  
  
- __filter*__ - __*Function*__,   
- __filterParams*__ - __*Object*__,   
- __data*__ - __*ImageData|Object*__,   
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __dx*__ - __*Number*__,   
- __dy*__ - __*Number*__,   
- __dw*__ - __*Number*__,   
- __dh*__ - __*Number*__,   
> *return __CanvasRenderingContext2D__*  

##  
__shaderFill(*Function* shader, *Object* byteCode, *String* precisionHint, *Number* sx, *Number* sy, *Number* sw, *Number* sh, *ImageData|Object* data, *Number* x, *Number* y, *Number* dx, *Number* dy, *Number* dw, *Number* dh) : *CanvasRenderingContext2D*__  
  
- __shader*__ - __*Function*__,   
- __byteCode*__ - __*Object*__,   
- __precisionHint*__ - __*String*__,   
- __sx*__ - __*Number*__,   
- __sy*__ - __*Number*__,   
- __sw*__ - __*Number*__,   
- __sh*__ - __*Number*__,   
- __data*__ - __*ImageData|Object*__,   
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
- __dx*__ - __*Number*__,   
- __dy*__ - __*Number*__,   
- __dw*__ - __*Number*__,   
- __dh*__ - __*Number*__,   
> *return __CanvasRenderingContext2D__*  

##  
__skew(*Number* x, *Number* y) : *CanvasRenderingContext2D*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
> *return __CanvasRenderingContext2D__*  

##  
__cacheAsset(*String* id, *Object* asset) : *CanvasRenderingContext2D*__  
  
- __id*__ - __*String*__,   
- __asset*__ - __*Object*__,   
> *return __CanvasRenderingContext2D__*  

##  
__setColorTransform(*Number* r, *Number* g, *Number* b, *Number* a, *Number* ro, *Number* go, *Number* bo, *Number* ao) : *CanvasRenderingContext2D*__  
  
- __r*__ - __*Number*__,   
- __g*__ - __*Number*__,   
- __b*__ - __*Number*__,   
- __a*__ - __*Number*__,   
- __ro*__ - __*Number*__,   
- __go*__ - __*Number*__,   
- __bo*__ - __*Number*__,   
- __ao*__ - __*Number*__,   
> *return __CanvasRenderingContext2D__*  

##  
__resetColorTransform() : *CanvasRenderingContext2D*__  
  
> *return __CanvasRenderingContext2D__*  

##  
__flushGradientCache() : *CanvasRenderingContext2D*__  
  
> *return __CanvasRenderingContext2D__*  

