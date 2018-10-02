# Zeta Ret Clockwork
## ProtoSS OOP Framework

![Zeta Ret Clockwork Cover](https://zetaret.com/images/clockwork1.jpg)

Based on [ProtoSS](https://github.com/ZetaRet/protoss), this library brings the classic OOP from C-suit/Java/ActionScript into JavaScript. 
The entire library - Interfaces for each class, variety of implementations, UI controls (Buttons, Dialogs, Scrollbars, Windows, Panels, Lists, Trees, Menus, etc.), popular design patterns (MVC, factories, decorators, state machine, composite, builder, facade, injectors, observer, filter, command, visitor, double/multiple dispatch, etc.), http communication api, data binding outside MVC scope. Ambiguity testing, super class name resolve and transpile (transcompiler source-to-source) compatibility from ProtoSS classes to descriptors and instruction sets.

Every ProtoSS Class consists of IClass interface and Class.Header, including packages and namespaces, and can be used independently outside its bundle or the entire Clockwork Library. 
Bundling into a single assembly called Caliber, since every Class is multiplied by 3 (Class, IClass, Class.Header) a certain mechanism is required to compile the entire library of used classes into one solid monolith library.

PHP Bundling enforces the compilation at real time, including a JSON auto documentation strategy based on a single JSON descriptor template of the JS Class which generates MarkDown and HTML output readable files.

Zeta Ret Clockwork is ProtoSS based environment framework and supports:  
* desktop browsers: IE 11, Edge, Chrome, Firefox, Safari, Opera  
* mobile browsers: Chrome, Safari  
* minimum mobile platforms: iOS9, Android 4.4  
* minimum virtual machines: ES5 JavaScript  

JavaScript polyfills are included for minimum requirements on mobile and IE11 to support missing prototypes, security restrictions or class functionality. 

Our Stage renderer does not define nor constitute the demonstrated rendering but it is rather a set and settings environment which works as one of the most famous stage renderers known to developers using child-parent node containers and inversible iterator mechanics wherever required. The use of fractal mathematics during transformation of colors and geometry creates an illusion to the observer based on well-known effects. Such fractal stage system may be configured and extended differently in order to reveal various rendering capabilities outside the standard 2D context i.e. simulation of molecule rendering in non-inversed trees, portal based rendering of the same DisplayObject and Graphics in many nodes of the stage, support canvas texture for WebGL Context, or 3D rendering based on vectors and cached rectangular canvases as textures.  
"Basically this is cosmic system, where birth and dead of objects are transitions from level to level."  

Clockwork means a mechanism with a spring and toothed gearwheels, used to drive a mechanical clock, very smooth and regular using repetitive and predictable precision. In horology, "caliber" refers to the specific internal mechanism of a watch or clock, also known as a movement. Although the term originally was only used to refer to the size of a movement, it is now used to designate a specific model.

In development: July, 2017

## Demos
Canvas Live Demo based on OOP ProtoSS in ES6 Class Standard [ProtoSS + XeltoSS]:  
:alien: Zeta Ret Clockwork demo: https://clockwork.lovesvn.com/demo/  

Author: Zeta Ret, Ivo Yankulovski, https://zetaret.com/