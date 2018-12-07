> __Author: Zeta Ret, Ivo Yankulovski__  
> __DisplayObject model__  
# display model used by the Stage2DController to manipulate Context2D rendering  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.11*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::DisplayObject  
> Inherits: [zetaret.global.packages.clockwork.events::EventDispatcher](../events/EventDispatcher.md)  
> Interfaces: zetaret.global.packages.clockwork.ui.interfaces::IDisplayObject  

### *Properties*  

#  
__name__ String  
default undefined, name of display object  

#  
__x__ Number  
default 0,   

#  
__y__ Number  
default 0,   

#  
__sx__ Number  
default 1,   

#  
__sy__ Number  
default 1,   

#  
__rx__ Number  
default 0,   

#  
__ry__ Number  
default 0,   

#  
__skx__ Number  
default 0,   

#  
__sky__ Number  
default 0,   

#  
__sw__ Number  
default 1,   

#  
__sh__ Number  
default 1,   

#  
__skw__ Number  
default 1,   

#  
__skh__ Number  
default 1,   

#  
__width__ Number  
default 0,   

#  
__height__ Number  
default 0,   

#  
__transform__ Array  
default [1,0,0,1,0,0],   

#  
__visible__ Boolean  
default true,   

#  
__alpha__ Number  
default 1,   

#  
__colortransform__ Array  
default [1,1,1,1,0,0,0,0],   

#  
__blend__ String  
default '',   

#  
__opaqueBackground__ String  
default null,   

#  
__target__ zetaret.global.packages.clockwork.ui.DisplayObject  
default this,   

#  
__lists__ Array  
default null,   

#  
__invalidateTransform__ Boolean  
default false,   

#  
__forceSelfInvalidate__ Boolean  
default false,   

#  
__skipct__ Boolean  
default false,   

#  
__skipalpha__ Boolean  
default false,   

#  
__skipt__ Boolean  
default false,   

#  
__notransform__ Boolean  
default false,   

#  
__canrender__ Boolean  
default false,   

#  
__cacheLevel__ String  
default null,   

#  
__cacheLevelData__ Object  
default null,   

#  
__cacheRedraw__ Boolean  
default false,   

#  
__cacheBox__ Boolean  
default false,   

#  
__localTransform__ Boolean  
default false,   

#  
__layer__ Boolean  
default false,   

#  
__stage__ zetaret.global.packages.clockwork.controllers.Stage2DController  
default null,   

#  
__mask__ zetaret.global.packages.clockwork.ui.DisplayObject  
default null,   

#  
__cachetransforms__ Boolean  
default false,   

#  
__cachedtransform__ Array  
default null,   

#  
__cachedcolortransform__ Array  
default null,   

#  
__cachedbounds__ Array  
default null,   


##  
### *Methods*  

##  
__DisplayObject(*Array* at, *Array* act) : *void*__  
  
- at - __*Array*__,   
- act - __*Array*__,   
> *return __void__*  

##  
__addToList(*zetaret.global.packages.clockwork.data.ChildContainer* list, *String* id) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __list*__ - __*zetaret.global.packages.clockwork.data.ChildContainer*__,   
- id - __*String*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__removeList(*zetaret.global.packages.clockwork.data.ChildContainer* list, *String* id) : *Boolean*__  
  
- __list*__ - __*zetaret.global.packages.clockwork.data.ChildContainer*__,   
- id - __*String*__,   
> *return __Boolean__*  

##  
__setDisplayTarget(*zetaret.global.packages.clockwork.ui.DisplayObject* target) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __target*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__syncDisplayTarget() : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__getRoot() : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__getParent() : *zetaret.global.packages.clockwork.data::ChildContainer*__  
  
> *return __zetaret.global.packages.clockwork.data::ChildContainer__*  

##  
__setX(*Number* x) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __x*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__setY(*Number* y) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __y*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__getX() : *Number*__  
  
> *return __Number__*  

##  
__getY() : *Number*__  
  
> *return __Number__*  

##  
__setVisible(*Boolean* val) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __val*__ - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__getVisible() : *Boolean*__  
  
> *return __Boolean__*  

##  
__isVisible() : *Boolean*__  
  
> *return __Boolean__*  

##  
__getScaleX() : *Number*__  
  
> *return __Number__*  

##  
__setScaleX(*Number* sx) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __sx*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__getScaleY() : *Number*__  
  
> *return __Number__*  

##  
__setScaleY(*Number* sy) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __sy*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__getRotation() : *Number*__  
  
> *return __Number__*  

##  
__setRotation(*Number* r, *Boolean* radians) : *Number*__  
  
- __r*__ - __*Number*__,   
- radians - __*Boolean*__,   
> *return __Number__*  

##  
__setSkew(*Number* skewx, *Number* skewy, *Number* radians) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __skewx*__ - __*Number*__,   
- __skewy*__ - __*Number*__,   
- radians - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__moveTo(*Number* x, *Number* y) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__scale(*Number* sx, *Number* sy) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __sx*__ - __*Number*__,   
- __sy*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__rotate(*Number* r, *Boolean* radians) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __r*__ - __*Number*__,   
- radians - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__skew(*Number* skewx, *Number* skewy, *Boolean* radians) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __skewx*__ - __*Number*__,   
- __skewy*__ - __*Number*__,   
- radians - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__translate(*Number* x, *Number* y) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__setTransform(*Number* a, *Number* b, *Number* c, *Number* d, *Number* e, *Number* f) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __a*__ - __*Number*__,   
- __b*__ - __*Number*__,   
- __c*__ - __*Number*__,   
- __d*__ - __*Number*__,   
- __e*__ - __*Number*__,   
- __f*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__getTransform() : *Array*__  
  
> *return __Array__*  

##  
__updateTransform() : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
calculate Math.cos and Math.sin of x and y rotation, transform rotate matrix using scale x and y, calculate Math.tan of x and y skew, and cross transform by multiplication the product of rotation scale matrix, set translation properties without scale, transform[0-3] values are initially multiplied by scale width 'sw', skew width 'skw', skew height 'skh' and scale height 'sh'  
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__, self, convert local transform properties in place of 'transform' Array, used properties: x, y, rx, ry, sx, sy, skx, sky, sw, sh, skw, skh*  

##  
__transformize(*Number* a2, *Number* b2, *Number* c2, *Number* d2, *Number* e2, *Number* f2) : *Array*__  
  
- __a2*__ - __*Number*__,   
- __b2*__ - __*Number*__,   
- __c2*__ - __*Number*__,   
- __d2*__ - __*Number*__,   
- __e2*__ - __*Number*__,   
- __f2*__ - __*Number*__,   
> *return __Array__*  

##  
__transformizeParent(*Number* a1, *Number* b1, *Number* c1, *Number* d1, *Number* e1, *Number* f1) : *Array*__  
  
- __a1*__ - __*Number*__,   
- __b1*__ - __*Number*__,   
- __c1*__ - __*Number*__,   
- __d1*__ - __*Number*__,   
- __e1*__ - __*Number*__,   
- __f1*__ - __*Number*__,   
> *return __Array__*  

##  
__setColorTransform(*Number* r, *Number* g, *Number* b, *Number* a, *Number* ro, *Number* go, *Number* bo, *Number* ao) : *Array*__  
sets new color channels in place of current 'colortransform' property  
- __r*__ - __*Number*__, red multiplier in 'colortransform'[0]  
- __g*__ - __*Number*__, green multiplier in 'colortransform'[1]  
- __b*__ - __*Number*__, blue multiplier in 'colortransform'[2]  
- __a*__ - __*Number*__, alpha multiplier in 'colortransform'[3]  
- __ro*__ - __*Number*__, red offset in 'colortransform'[4]  
- __go*__ - __*Number*__, green offset in 'colortransform'[5]  
- __bo*__ - __*Number*__, blue offset in 'colortransform'[6]  
- __ao*__ - __*Number*__, alpha offset in 'colortransform'[7]  
> *return __Array__, current DisplayObject's 'colortransform' array*  

##  
__getColorTransform() : *Array*__  
method getter for 'colortransform'  
> *return __Array__, reference to 'colortransform' property*  

##  
__colorTransformize(*Number* r, *Number* g, *Number* b, *Number* a, *Number* ro, *Number* go, *Number* bo, *Number* ao) : *Array*__  
compute result color transformation array, usually used by context renderer/mediator or self rendering methods  
- __r*__ - __*Number*__, red multiplies with 'colortransform'[0]  
- __g*__ - __*Number*__, green multiplies with 'colortransform'[1]  
- __b*__ - __*Number*__, blue multiplies with 'colortransform'[2]  
- __a*__ - __*Number*__, alpha multiplies with 'colortransform'[3] and 'alpha' property  
- __ro*__ - __*Number*__, red offsets 'colortransform'[4]  
- __go*__ - __*Number*__, green offsets 'colortransform'[5]  
- __bo*__ - __*Number*__, blue offsets 'colortransform'[6]  
- __ao*__ - __*Number*__, alpha offsets 'colortransform'[7]  
> *return __Array__, new Array definition of color transformation, usually used in vertical computation of parent-child structures*  

##  
__rotatePoint(*Object* p, *Boolean* invertSigma) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __p*__ - __*Object*__,   
- invertSigma - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__getSkewAngle() : *Array*__  
  
> *return __Array__*  

##  
__getStageTransform(*Boolean* disableLocalTransform) : *Object*__  
  
- disableLocalTransform - __*Boolean*__,   
> *return __Object__*  

##  
__globalToLocal(*Number* x, *Number* y) : *Array*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
> *return __Array__*  

##  
__localToGlobal(*Number* x, *Number* y) : *Array*__  
  
- __x*__ - __*Number*__,   
- __y*__ - __*Number*__,   
> *return __Array__*  

##  
__getBounds(*Array* tm) : *Object*__  
  
- __tm*__ - __*Array*__,   
> *return __Object__*  

##  
__setMask(*zetaret.global.packages.clockwork.ui.DisplayObject* mask) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __mask*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__setCache(*String* id, *Boolean* box, *Boolean* local) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __id*__ - __*String*__,   
- __box*__ - __*Boolean*__,   
- __local*__ - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__render(*zetaret.global.packages.clockwork.controllers.Stage2DController* stage, *zetaret.global.packages.clockwork.context.ContextRenderer* renderer, *CanvasRenderingContext2D* ctx, *Array* t, *Array* ct) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
- __renderer*__ - __*zetaret.global.packages.clockwork.context.ContextRenderer*__,   
- __ctx*__ - __*CanvasRenderingContext2D*__,   
- __t*__ - __*Array*__,   
- __ct*__ - __*Array*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__invalidateStage() : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__clone() : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
Clone this DisplayObject using direct copy/concat of properties. If 'cloneprops' is available to the constructor of this object then it will apply the new assignments.  
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__, new instance of this 'constructor' DisplayObject, subclasses may extend method or define 'cloneprops' to subclass constructor*  

##  
### *Static Methods*  

##  
__invertTransform(*Array* tm) : *Array*__  
  
- __tm*__ - __*Array*__,   
> *return __Array__*  

##  
__deltaTransformPoint(*Array* p, *Array* tm, *Boolean* inverse) : *Array*__  
  
- __p*__ - __*Array*__,   
- __tm*__ - __*Array*__,   
- inverse - __*Boolean*__,   
> *return __Array__*  

##  
__getTransformArea(*Object* rect, *Array* matrix) : *Object*__  
  
- __rect*__ - __*Object*__,   
- __matrix*__ - __*Array*__,   
> *return __Object__*  

##  
__invalidateGlobal(*zetaret.global.packages.clockwork.ui.DisplayObject* dobj) : *zetaret.global.packages.clockwork.ui::DisplayObject*__  
  
- __dobj*__ - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
> *return __zetaret.global.packages.clockwork.ui::DisplayObject__*  

##  
__getUnionBounds(*Array* ch, *Array* tm, *Boolean* transformself, *Boolean* target) : *Object*__  
  
- __ch*__ - __*Array*__,   
- __tm*__ - __*Array*__,   
- transformself - __*Boolean*__,   
- target - __*Boolean*__,   
> *return __Object__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
