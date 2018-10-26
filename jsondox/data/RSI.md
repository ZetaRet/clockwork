> __Author: Zeta Ret, Ivo Yankulovski__  
> __RSI data model__  
# residual self image data with transfer/clear methods, may replicate properties by keys to self object  
> *Requires: protoss.all.js*  
> *Version: 1.01*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.data::RSI  
> Inherits:   
> Interfaces:   

### *Properties*  

#
__residualImage__ Object|Function  
default null,   

#
__residualMod__ Boolean  
default false,   

#
__residualImagex__ String  
default '',   

#
__rsiself__ Object  
default null,   

#
__rsikeys__ Array  
default null,   

#
__timestamp__ Number  
default 0,   

#
__autoTimestamp__ Boolean  
default false,   


##
### *Methods*  

##
__RSI() : *void*__  
Create a subjective appearance of another object  
> *return __void__*  

##
__transferResidualImage(*Object* obj, *Array* keys, *Object* scope, *Boolean|Number* timestamp) : *zetaret.global.packages.clockwork.data::RSI*__  
  
- __obj*__ - __*Object*__,   
- keys - __*Array*__,   
- scope - __*Object*__,   
- timestamp - __*Boolean|Number*__,   
> *return __zetaret.global.packages.clockwork.data::RSI__*  

##
__clearRSI() : *void*__  
  
> *return __void__*  

---
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator
