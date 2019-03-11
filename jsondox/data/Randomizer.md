> __Author: Zeta Ret, Ivo Yankulovski__  
> __pseudo-random generator__  
# RNG with time/int/number/range getters and cloning capability  
> *Requires: protoss.all.js*  
> *Version: 1.04*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork.data::Randomizer  

### *Properties*  

#  
__Seed__ Number  
default seed||0,   

#  
__Count__ Number  
default count||0,   

#  
__SEED_CONST__ Number  
default 2147483647,   

#  
__TIME_CONST__ Number  
default 1034.256,   

#  
__NUMBER_SEED_CONST__ Number  
default 16807,   

#  
__OVERFLOW_CONST__ Number  
default 0,   

#  
__randomSeedCount__ Number  
default 0,   


##  
### *Methods*  

##  
__Randomizer(*Number* seed, *Number* count) : *void*__  
  
- seed - __*Number*__,   
- count - __*Number*__,   
> *return __void__*  

##  
__setRandomSeed() : *zetaret.global.packages.clockwork.data::Randomizer*__  
  
> *return __zetaret.global.packages.clockwork.data::Randomizer__*  

##  
__GetTime() : *Number*__  
  
> *return __Number__*  

##  
__GenerateSeed() : *Number*__  
  
> *return __Number__*  

##  
__GetInt() : *Number*__  
  
> *return __Number__*  

##  
__GetNumber() : *Number*__  
  
> *return __Number__*  

##  
__GetRange(*Number* min, *Number* max) : *Number*__  
  
- __min*__ - __*Number*__,   
- __max*__ - __*Number*__,   
> *return __Number__*  

##  
__GetRangeMethod(*Number* min, *Number* max, *Function* method) : *Number*__  
  
- __min*__ - __*Number*__,   
- __max*__ - __*Number*__,   
- __method*__ - __*Function*__,   
> *return __Number__*  

##  
__Clone() : *zetaret.global.packages.clockwork.data::Randomizer*__  
  
> *return __zetaret.global.packages.clockwork.data::Randomizer__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator