> __Author: Zeta Ret__  
> __Zeta Ret Clockwork, ProtoSS OOP__  
# Interface Generator, Mass Class/Header Resolve, Function Decomposer, Class Parser, ProtoSS-XeltoSS Transformator  
> *Requires: ProtoSS, XeltoSS, protoss.all.js*  
> *Version: 1.0.4*  
> *Date: 2017 - Today*  

__required*__

## zetaret.global.packages.clockwork::Clockwork  
> Inherits: ProtoSS, XeltoSS  

### *Properties*  

#  
__useXeltoSS__ Boolean  
default false, Use XeltoSS Configuration to transform ProtoSS Function Class to XeltoSS ES6 Class  

#  
__calibers__ Object  
default {}, Package of settings, includes Array of Caliber ProtoSS Function  


##  
### *Methods*  

##  
__Clockwork() : *void*__  
constructor, creates Clockwork object based on ProtoSS and XeltoSS  
> *return __void__*  

##  
__unpackCaliber(*String* clbrname, *Object* toppack, *Boolean* xeltoss) : *Array*__  
Creates Array of Caliber ProtoSS Function from package of settings  
- __clbrname*__ - __*String*__, name of the caliber  
- toppack - __*Object*__, default package object  
- xeltoss - __*Boolean*__, execute runXeltoSS  
> *return __Array__, array of functions, headers are auto resolved*  

##  
__xeltossCaliber(*String* clbrname) : *zetaret.global.packages.clockwork::Clockwork*__  
Transforms the entire Caliber Package into XeltoSS ES6 Classes  
- __clbrname*__ - __*String*__, name of the caliber  
> *return __zetaret.global.packages.clockwork::Clockwork__, Clockwork Object, self*  

##  
__caliberClass(*String* name, *Array* supers, *Object* settings, *Boolean* defname, *null|Boolean|Object* superargs, *Boolean* supertype) : *Function*__  
Creates ProtoSS Function from Settings Object, includes shared memory, serial number, original settings, and adjacent methods  
- __name*__ - __*String*__, name of the caliber class  
- __supers*__ - __*Array*__, array of ProtoSS Function Classes to inherit  
- __settings*__ - __*Object*__, calibration settings object embedded in the final class  
- defname - __*Boolean*__, redefine function name using Object.defineProperty  
- superargs - __*null|Boolean|Object*__, arguments passed to inherited classes in super call  
- supertype - __*Boolean*__, switch between superList and superList2 prototype  
> *return __Function__, ProtoSS Function with unique serialnumber*  

##  
__runXeltoSS(*Array* xcls) : *void*__  
Transforms an Array of ProtoSS Function into XeltoSS ES6 Classes, reading __xeltoss_amaps, __xeltoss_emaps, __xeltoss_eamaps, __xeltoss_augmentmap, __xeltoss_embedmap, __xeltoss_prepare, supports debug state  
- __xcls*__ - __*Array*__, executes augmentKey/addEmbedMap using __xeltoss_amaps:Array and __xeltoss_emaps:Array, __xeltoss_eamaps:Array is mapped version of augmentKey/addEmbedMap, __xeltoss_augmentmap:Object is custom augmentKey, __xeltoss_embedmap:Object is custom addEmbedMap, __xeltoss_prepare is custom function using ProtoSS function scope  
> *return __void__*  

---  
### MarkDown - JsonDox 1.02 - Zeta Ret Zetadmin Documentation Generator