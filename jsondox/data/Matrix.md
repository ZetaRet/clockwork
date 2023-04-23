> __Author: Zeta Ret__  
> __rectangular array matrix__  
# MxN matrix data object with adjacent mathematical methods and transformations  
> *Requires: protoss.all.js*  
> *Version: 1.03*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.data::Matrix  

### *Properties*  

#  
__rows__ Number  
default rows,   

#  
__columns__ Number  
default columns||rows,   

#  
__data__ Array  
default null,   


##  
### *Methods*  

##  
__Matrix(*Number* rows, *Number* columns) : *void*__  
  
- __rows*__ - __*Number*__,   
- columns - __*Number*__,   
> *return __void__*  

##  
__setDimensions(*Number* rows, *Number* columns) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __rows*__ - __*Number*__,   
- columns - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__getAt(*Number* row, *Number* column) : *Number*__  
  
- __row*__ - __*Number*__,   
- __column*__ - __*Number*__,   
> *return __Number__*  

##  
__fill(*Number* n) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __n*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__rnd() : *zetaret.global.packages.clockwork.data::Matrix*__  
  
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__identity(*Number* i, *Number* j) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- i - __*Number*__,   
- j - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__toSquareMatrix(*Number* n) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- n - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__expand(*Number* n, *Number* bottom, *Number* left, *Number* top, *Number* right) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __n*__ - __*Number*__,   
- bottom - __*Number*__,   
- left - __*Number*__,   
- top - __*Number*__,   
- right - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__shrink(*Number* bottom, *Number* left, *Number* top, *Number* right) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- bottom - __*Number*__,   
- left - __*Number*__,   
- top - __*Number*__,   
- right - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__op(*Number* v) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __v*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__scalar(*Number* s) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __s*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__scalarF(*Number* s, *Function* f) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __s*__ - __*Number*__,   
- __f*__ - __*Function*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__invert() : *zetaret.global.packages.clockwork.data::Matrix*__  
  
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__diagonal(*Number* n) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __n*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__upper(*Number* n) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __n*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__lower(*Number* n) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __n*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__reflect(*Boolean* rx, *Boolean* ry, *Boolean* keep) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- rx - __*Boolean*__,   
- ry - __*Boolean*__,   
- keep - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__skew(*Number* rot, *Number* n) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __rot*__ - __*Number*__,   
- n - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__shear(*Number* rot, *Number* n) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __rot*__ - __*Number*__,   
- n - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__translate(*Number* x, *Number* y, *Boolean* keep) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- x - __*Number*__,   
- y - __*Number*__,   
- keep - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__add(*zetaret.global.packages.clockwork.data.Matrix* v) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __v*__ - __*zetaret.global.packages.clockwork.data.Matrix*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__subtract(*zetaret.global.packages.clockwork.data.Matrix* v) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __v*__ - __*zetaret.global.packages.clockwork.data.Matrix*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__multiply(*zetaret.global.packages.clockwork.data.Matrix* v) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __v*__ - __*zetaret.global.packages.clockwork.data.Matrix*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__divide(*zetaret.global.packages.clockwork.data.Matrix* v) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __v*__ - __*zetaret.global.packages.clockwork.data.Matrix*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__squareMultiply(*zetaret.global.packages.clockwork.data.Matrix* v) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __v*__ - __*zetaret.global.packages.clockwork.data.Matrix*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__power(*Number* n) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __n*__ - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__transpose() : *zetaret.global.packages.clockwork.data::Matrix*__  
  
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__transpose2(*Boolean* keep) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- keep - __*Boolean*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__transform(*Function* f, *Number* mode, *Object* t) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __f*__ - __*Function*__,   
- mode - __*Number*__,   
- t - __*Object*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__rank() : *Number*__  
  
> *return __Number__*  

##  
__det() : *Number*__  
  
> *return __Number__*  

##  
__determinant() : *Number*__  
  
> *return __Number__*  

##  
__adjugate() : *zetaret.global.packages.clockwork.data::Matrix*__  
  
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__trace() : *Number*__  
  
> *return __Number__*  

##  
__copy(*zetaret.global.packages.clockwork.data.Matrix* v) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __v*__ - __*zetaret.global.packages.clockwork.data.Matrix*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__copy2(*zetaret.global.packages.clockwork.data.Matrix* v, *Number* x, *Number* y, *Number* vx, *Number* vy, *Number* vcl, *Number* vrl) : *zetaret.global.packages.clockwork.data::Matrix*__  
  
- __v*__ - __*zetaret.global.packages.clockwork.data.Matrix*__,   
- x - __*Number*__,   
- y - __*Number*__,   
- vx - __*Number*__,   
- vy - __*Number*__,   
- vcl - __*Number*__,   
- vrl - __*Number*__,   
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

##  
__equals(*zetaret.global.packages.clockwork.data.Matrix* v) : *Boolean*__  
  
- __v*__ - __*zetaret.global.packages.clockwork.data.Matrix*__,   
> *return __Boolean__*  

##  
__clone() : *zetaret.global.packages.clockwork.data::Matrix*__  
  
> *return __zetaret.global.packages.clockwork.data::Matrix__*  

