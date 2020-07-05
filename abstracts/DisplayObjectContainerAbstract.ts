import { zetaret } from "./../src";

export abstract class DisplayObjectContainerAbstract extends zetaret.global.packages.clockwork.ui.DisplayObjectContainer implements zetaret.global.packages.clockwork.ui.DisplayObjectContainer {
	containerGroup: string;

	children: Array<object>;
	autochild: boolean;
	namecache: object;
	autosetstage: boolean;
	recursiveStage: boolean;
	stageEvents: boolean;

	getChildren(): Array<object> { return super.getChildren.apply(arguments); }
	numChildren(): number { return super.numChildren.apply(arguments); }
	addChild(child: object): zetaret.global.packages.clockwork.data.ChildContainer { return super.addChild.apply(arguments); }
	addChildAt(child: object, indexo: number): zetaret.global.packages.clockwork.data.ChildContainer { return super.addChildAt.apply(arguments); }
	containsChild(child: object): boolean { return super.containsChild.apply(arguments); }
	removeChild(child: object): zetaret.global.packages.clockwork.data.ChildContainer { return super.removeChild.apply(arguments); }
	removeChildAt(index: number): object { return super.removeChildAt.apply(arguments); }
	getChildIndex(child: object): number { return super.getChildIndex.apply(arguments); }
	getChildByName(name: string, cache?: boolean): object { return super.getChildByName.apply(arguments); }
	getChildByType(type: object, strict?: boolean): object { return super.getChildByType.apply(arguments); }
	getChildIndexByName(name: string): number { return super.getChildIndexByName.apply(arguments); }
	swapChildren(child1: object, child2: object): zetaret.global.packages.clockwork.data.ChildContainer { return super.swapChildren.apply(arguments); }
	swapChildrenAt(index1: number, index2: number): zetaret.global.packages.clockwork.data.ChildContainer { return super.swapChildrenAt.apply(arguments); }

	name: string;
	x: number;
	y: number;
	sx: number;
	sy: number;
	rx: number;
	ry: number;
	skx: number;
	sky: number;
	sw: number;
	sh: number;
	skw: number;
	skh: number;
	width: number;
	height: number;
	transform: Array<number>;
	visible: boolean;
	alpha: number;
	colortransform: Array<number>;
	blend: string;
	opaqueBackground: string;
	target: zetaret.global.packages.clockwork.ui.DisplayObject | any;
	lists: Array<object>;
	invalidateTransform: boolean;
	forceSelfInvalidate: boolean;
	skipct: boolean;
	skipalpha: boolean;
	skipt: boolean;
	notransform: boolean;
	canrender: boolean;
	cacheLevel: string;
	cacheLevelData: object;
	cacheRedraw: boolean;
	cacheBox: boolean;
	localTransform: boolean;
	layer: boolean;
	stage: zetaret.global.packages.clockwork.controllers.Stage2DController;
	mask: zetaret.global.packages.clockwork.ui.DisplayObject;
	cachetransforms: boolean;
	cachedtransform: Array<object>;
	cachedcolortransform: Array<object>;
	cachedbounds: Array<object>;

	addToList(list: zetaret.global.packages.clockwork.data.ChildContainer, id?: string): zetaret.global.packages.clockwork.ui.DisplayObject { return super.addToList.apply(arguments); }
	removeList(list: zetaret.global.packages.clockwork.data.ChildContainer, id?: string): boolean { return super.removeList.apply(arguments); }
	setDisplayTarget(target: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setDisplayTarget.apply(arguments); }
	syncDisplayTarget(): zetaret.global.packages.clockwork.ui.DisplayObject { return super.syncDisplayTarget.apply(arguments); }
	getRoot(): zetaret.global.packages.clockwork.ui.DisplayObject { return super.getRoot.apply(arguments); }
	getParent(): zetaret.global.packages.clockwork.data.ChildContainer { return super.getParent.apply(arguments); }
	setX(x: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setX.apply(arguments); }
	setY(y: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setY.apply(arguments); }
	getX(): number { return super.getX.apply(arguments); }
	getY(): number { return super.getY.apply(arguments); }
	setVisible(val: boolean): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setVisible.apply(arguments); }
	getVisible(): boolean { return super.getVisible.apply(arguments); }
	isVisible(): boolean { return super.isVisible.apply(arguments); }
	getScaleX(): number { return super.getScaleX.apply(arguments); }
	setScaleX(sx: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setScaleX.apply(arguments); }
	getScaleY(): number { return super.getScaleY.apply(arguments); }
	setScaleY(sy: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setScaleY.apply(arguments); }
	getRotation(): number { return super.getRotation.apply(arguments); }
	setRotation(r: number, radians?: boolean): number { return super.setRotation.apply(arguments); }
	setSkew(skewx: number, skewy: number, radians?: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setSkew.apply(arguments); }
	moveTo(x: number, y: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.moveTo.apply(arguments); }
	scale(sx: number, sy: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.scale.apply(arguments); }
	rotate(r: number, radians?: boolean): zetaret.global.packages.clockwork.ui.DisplayObject { return super.rotate.apply(arguments); }
	skew(skewx: number, skewy: number, radians?: boolean): zetaret.global.packages.clockwork.ui.DisplayObject { return super.skew.apply(arguments); }
	translate(x: number, y: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.translate.apply(arguments); }
	setTransform(a: number, b: number, c: number, d: number, e: number, f: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setTransform.apply(arguments); }
	getTransform(): Array<number> { return super.getTransform.apply(arguments); }
	updateTransform(): zetaret.global.packages.clockwork.ui.DisplayObject { return super.updateTransform.apply(arguments); }
	transformize(a2: number, b2: number, c2: number, d2: number, e2: number, f2: number): Array<object> { return super.transformize.apply(arguments); }
	transformizeParent(a1: number, b1: number, c1: number, d1: number, e1: number, f1: number): Array<object> { return super.transformizeParent.apply(arguments); }
	setColorTransform(r: number, g: number, b: number, a: number, ro: number, go: number, bo: number, ao: number): Array<object> { return super.setColorTransform.apply(arguments); }
	getColorTransform(): Array<number> { return super.getColorTransform.apply(arguments); }
	colorTransformize(r: number, g: number, b: number, a: number, ro: number, go: number, bo: number, ao: number): Array<object> { return super.colorTransformize.apply(arguments); }
	rotatePoint(p: object, invertSigma?: boolean): zetaret.global.packages.clockwork.ui.DisplayObject { return super.rotatePoint.apply(arguments); }
	getSkewAngle(): Array<object> { return super.getSkewAngle.apply(arguments); }
	getStageTransform(disableLocalTransform?: boolean): object { return super.getStageTransform.apply(arguments); }
	globalToLocal(x: number, y: number): Array<object> { return super.globalToLocal.apply(arguments); }
	localToGlobal(x: number, y: number): Array<object> { return super.localToGlobal.apply(arguments); }
	getBounds(tm: Array<object>): object { return super.getBounds.apply(arguments); }
	setMask(mask: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setMask.apply(arguments); }
	setCache(id: string, box: boolean, local: boolean): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setCache.apply(arguments); }
	render(stage: zetaret.global.packages.clockwork.controllers.Stage2DController, renderer: zetaret.global.packages.clockwork.context.ContextRenderer, ctx: CanvasRenderingContext2D, t: Array<object>, ct: Array<object>): zetaret.global.packages.clockwork.ui.DisplayObject { return super.render.apply(arguments); }
	invalidateStage(): zetaret.global.packages.clockwork.ui.DisplayObject { return super.invalidateStage.apply(arguments); }
	clone(): zetaret.global.packages.clockwork.ui.DisplayObject { return super.clone.apply(arguments); }

	eventTarget: zetaret.global.packages.clockwork.events.EventTarget;
	events: object;

	setEventTarget(target: zetaret.global.packages.clockwork.events.EventTarget): zetaret.global.packages.clockwork.events.EventDispatcher { return super.setEventTarget.apply(arguments); }
	addEventListener(event: string, callback: Function): zetaret.global.packages.clockwork.events.EventDispatcher { return super.addEventListener.apply(arguments); }
	removeEventListener(event: string, callback?: Function): zetaret.global.packages.clockwork.events.EventDispatcher { return super.removeEventListener.apply(arguments); }
	hasEvent(event: string): boolean { return super.hasEvent.apply(arguments); }
	dispatch(event: string, data?: object | zetaret.global.packages.clockwork.events.EventData): zetaret.global.packages.clockwork.events.EventDispatcher { return super.dispatch.apply(arguments); }
	dispatchEvent(event: zetaret.global.packages.clockwork.events.Event, data?: object | zetaret.global.packages.clockwork.events.EventData, settarget?: boolean): zetaret.global.packages.clockwork.events.EventDispatcher { return super.dispatchEvent.apply(arguments); }
	destruct(): void { return super.destruct.apply(arguments); }
}