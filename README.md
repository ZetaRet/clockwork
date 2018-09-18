# Zeta Ret Clockwork
## ProtoSS OOP Framework

![Zeta Ret Clockwork Cover](https://zetaret.com/images/clockwork1.jpg)

Based on [ProtoSS](https://github.com/ZetaRet/protoss), this library brings the classic OOP from C-suit/Java/ActionScript into JavaScript. 
The entire library - Interfaces for each class, variety of implementations, UI controls (Buttons, Dialogs, Scrollbars, Windows, Panels, Lists, Trees, Menus, etc.), popular design patterns (MVC, factories, decorators, state machine, composite, builder, facade, injectors, observer, filter, command, visitor, double/multiple dispatch, etc.), http communication api, data binding outside MVC scope. Ambiguity testing, super class name resolve and transpile (transcompiler source-to-source) compatibility from ProtoSS classes to descriptors and instruction sets.

Every ProtoSS Class consists of IClass interface and Class.Header, including packages and namespaces, and can be used independently outside its bundle or the entire Clockwork Library. 
Bundling into a single assembly called Caliber, since every Class is multiplied by 3 (Class, IClass, Class.Header) a certain mechanism is required to compile the entire library of used classes into one solid monolith library.

PHP Bundling enforces the compilation at real time, including a JSON auto documentation strategy based on a single JSON descriptor template of the JS Class which generates MarkDown and HTML output readable files.

Clockwork means a mechanism with a spring and toothed gearwheels, used to drive a mechanical clock, very smooth and regular using repetitive and predictable precision. In horology, "caliber" refers to the specific internal mechanism of a watch or clock, also known as a movement. Although the term originally was only used to refer to the size of a movement, it is now used to designate a specific model.

In development: July, 2017

## Demos
Canvas Live Demo based on OOP ProtoSS in ES6 Class Standard [ProtoSS + XeltoSS]:  
:alien: Zeta Ret Clockwork demo: https://clockwork.lovesvn.com/demo/  

Author: Zeta Ret, Ivo Yankulovski, https://zetaret.com/
