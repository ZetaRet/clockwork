> __Author: Zeta Ret, Ivo Yankulovski__  
> __shape model__  
# basic overrides of DisplayObject methods and Graphics properties availability  
> *Requires: ProtoSS, protoss.all.js*  
> *Version: 1.11*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.ui::Shape  
> Inherits: [zetaret.global.packages.clockwork.ui::DisplayObject](DisplayObject.md)  
> Interfaces: zetaret.global.packages.clockwork.ui.interfaces::IShape  

### *Properties*  

#  
__stroke__ Number|String|CanvasGradient|CanvasPattern  
default null,   

#  
__color__ Number|String|CanvasGradient|CanvasPattern  
default null,   

#  
__graphics__ zetaret.global.packages.clockwork.graphics.Graphics  
default null,   

#  
__clonegraphics__ Boolean  
default false,   

#  
__autoBoundGraphics__ Boolean  
default true,   


##  
### *Methods*  

##  
__Shape(*Array* at, *Array* act) : *void*__  
constructor  
- at - __*Array*__,   
- act - __*Array*__,   
> *return __void__*  

##  
__render(*zetaret.global.packages.clockwork.controllers.Stage2DController* stage, *zetaret.global.packages.clockwork.context.ContextRenderer* renderer, *CanvasRenderingContext2D* ctx, *Array* t, *Array* ct) : *zetaret.global.packages.clockwork.ui::Shape*__  

- __stage*__ - __*zetaret.global.packages.clockwork.controllers.Stage2DController*__,   
- __renderer*__ - __*zetaret.global.packages.clockwork.context.ContextRenderer*__,   
- __ctx*__ - __*CanvasRenderingContext2D*__,   
- __t*__ - __*Array*__,   
- __ct*__ - __*Array*__,   
> *return __zetaret.global.packages.clockwork.ui::Shape__*  

##  
__getBounds(*Array* tm) : *Object*__  

- __tm*__ - __*Array*__,   
> *return __Object__*  

##  
__clone() : *zetaret.global.packages.clockwork.ui::Shape*__  

> *return __zetaret.global.packages.clockwork.ui::Shape__*  

##  
### *Protected Methods*  

##  
__ShapeStatis(*Object* s, *zetaret.global.packages.clockwork.ui.Shape* c) : *void*__  
statis invoker, called once by protoss superize mechanics, static flags of the statis embed only allowed methods in the final compilation  
- __s*__ - __*Object*__, statis map  
- __c*__ - __*zetaret.global.packages.clockwork.ui.Shape*__, invoked constructor  
> *return __void__*  

##  
__resetGraphics() : *zetaret.global.packages.clockwork.ui::Shape*__  
uses zetaret.global.packages.clockwork.ui.ShapeStatis.statis.graphics flag  
> *return __zetaret.global.packages.clockwork.ui::Shape__*  

##  
__setGraphics(*zetaret.global.packages.clockwork.graphics.Graphics* graphics) : *zetaret.global.packages.clockwork.ui::Shape*__  
uses zetaret.global.packages.clockwork.ui.ShapeStatis.statis.graphics flag  
- __graphics*__ - __*zetaret.global.packages.clockwork.graphics.Graphics*__,   
> *return __zetaret.global.packages.clockwork.ui::Shape__*  

##  
__getGraphics() : *zetaret.global.packages.clockwork.graphics::Graphics*__  
uses zetaret.global.packages.clockwork.ui.ShapeStatis.statis.graphics flag  
> *return __zetaret.global.packages.clockwork.graphics::Graphics__*  

##  
__drag(*zetaret.global.packages.clockwork.ui.DisplayObject* target, *Boolean* dx, *zetaret.global.packages.clockwork.ui.DisplayObject* dtarget, *Function* handler, *Object* hscope) : *zetaret.global.packages.clockwork.controllers::DragController*__  
uses zetaret.global.packages.clockwork.ui.ShapeStatis.statis.drag flag and zetaret.global.packages.clockwork.utils.ControlUtils.configDrag method reference  
- target - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- dx - __*Boolean*__,   
- dtarget - __*zetaret.global.packages.clockwork.ui.DisplayObject*__,   
- handler - __*Function*__,   
- hscope - __*Object*__,   
> *return __zetaret.global.packages.clockwork.controllers::DragController__*  

##  
__setupInteraction(*Boolean* mouse, *Boolean* keyboard) : *Object*__  
uses zetaret.global.packages.clockwork.ui.ShapeStatis.statis.interaction flag  
- mouse - __*Boolean*__,   
- keyboard - __*Boolean*__,   
> *return __Object__*  

##  
### *Static Properties*  

#  
__statis__ Object  
default {drag=true, graphics=true, interaction=true},   

##  
### *Static Methods*  

##  
__ShapeStatis(*Object* s, *zetaret.global.packages.clockwork.ui.Shape* c) : *void*__  
statis invoker of the Shape constructor  
- __s*__ - __*Object*__, statis map  
- __c*__ - __*zetaret.global.packages.clockwork.ui.Shape*__, invoked constructor  
> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator