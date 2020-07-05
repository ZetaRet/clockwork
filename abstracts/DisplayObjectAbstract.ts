import { zetaret } from "./../src";

export abstract class DisplayObjectAbstract extends zetaret.global.packages.clockwork.ui.DisplayObject implements zetaret.global.packages.clockwork.ui.DisplayObject {
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

	addToList(list: zetaret.global.packages.clockwork.data.ChildContainer, id?: string): zetaret.global.packages.clockwork.ui.DisplayObject { return super.addToList.apply(this, arguments); }
	removeList(list: zetaret.global.packages.clockwork.data.ChildContainer, id?: string): boolean { return super.removeList.apply(this, arguments); }
	setDisplayTarget(target: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setDisplayTarget.apply(this, arguments); }
	syncDisplayTarget(): zetaret.global.packages.clockwork.ui.DisplayObject { return super.syncDisplayTarget.apply(this, arguments); }
	getRoot(): zetaret.global.packages.clockwork.ui.DisplayObject { return super.getRoot.apply(this, arguments); }
	getParent(): zetaret.global.packages.clockwork.data.ChildContainer { return super.getParent.apply(this, arguments); }
	setX(x: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setX.apply(this, arguments); }
	setY(y: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setY.apply(this, arguments); }
	getX(): number { return super.getX.apply(this, arguments); }
	getY(): number { return super.getY.apply(this, arguments); }
	setVisible(val: boolean): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setVisible.apply(this, arguments); }
	getVisible(): boolean { return super.getVisible.apply(this, arguments); }
	isVisible(): boolean { return super.isVisible.apply(this, arguments); }
	getScaleX(): number { return super.getScaleX.apply(this, arguments); }
	setScaleX(sx: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setScaleX.apply(this, arguments); }
	getScaleY(): number { return super.getScaleY.apply(this, arguments); }
	setScaleY(sy: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setScaleY.apply(this, arguments); }
	getRotation(): number { return super.getRotation.apply(this, arguments); }
	setRotation(r: number, radians?: boolean): number { return super.setRotation.apply(this, arguments); }
	setSkew(skewx: number, skewy: number, radians?: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setSkew.apply(this, arguments); }
	moveTo(x: number, y: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.moveTo.apply(this, arguments); }
	scale(sx: number, sy: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.scale.apply(this, arguments); }
	rotate(r: number, radians?: boolean): zetaret.global.packages.clockwork.ui.DisplayObject { return super.rotate.apply(this, arguments); }
	skew(skewx: number, skewy: number, radians?: boolean): zetaret.global.packages.clockwork.ui.DisplayObject { return super.skew.apply(this, arguments); }
	translate(x: number, y: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.translate.apply(this, arguments); }
	setTransform(a: number, b: number, c: number, d: number, e: number, f: number): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setTransform.apply(this, arguments); }
	getTransform(): Array<number> { return super.getTransform.apply(this, arguments); }
	updateTransform(): zetaret.global.packages.clockwork.ui.DisplayObject { return super.updateTransform.apply(this, arguments); }
	transformize(a2: number, b2: number, c2: number, d2: number, e2: number, f2: number): Array<object> { return super.transformize.apply(this, arguments); }
	transformizeParent(a1: number, b1: number, c1: number, d1: number, e1: number, f1: number): Array<object> { return super.transformizeParent.apply(this, arguments); }
	setColorTransform(r: number, g: number, b: number, a: number, ro: number, go: number, bo: number, ao: number): Array<object> { return super.setColorTransform.apply(this, arguments); }
	getColorTransform(): Array<number> { return super.getColorTransform.apply(this, arguments); }
	colorTransformize(r: number, g: number, b: number, a: number, ro: number, go: number, bo: number, ao: number): Array<object> { return super.colorTransformize.apply(this, arguments); }
	rotatePoint(p: object, invertSigma?: boolean): zetaret.global.packages.clockwork.ui.DisplayObject { return super.rotatePoint.apply(this, arguments); }
	getSkewAngle(): Array<object> { return super.getSkewAngle.apply(this, arguments); }
	getStageTransform(disableLocalTransform?: boolean): object { return super.getStageTransform.apply(this, arguments); }
	globalToLocal(x: number, y: number): Array<object> { return super.globalToLocal.apply(this, arguments); }
	localToGlobal(x: number, y: number): Array<object> { return super.localToGlobal.apply(this, arguments); }
	getBounds(tm: Array<object>): object { return super.getBounds.apply(this, arguments); }
	setMask(mask: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setMask.apply(this, arguments); }
	setCache(id: string, box: boolean, local: boolean): zetaret.global.packages.clockwork.ui.DisplayObject { return super.setCache.apply(this, arguments); }
	render(stage: zetaret.global.packages.clockwork.controllers.Stage2DController, renderer: zetaret.global.packages.clockwork.context.ContextRenderer, ctx: CanvasRenderingContext2D, t: Array<object>, ct: Array<object>): zetaret.global.packages.clockwork.ui.DisplayObject { return super.render.apply(this, arguments); }
	invalidateStage(): zetaret.global.packages.clockwork.ui.DisplayObject { return super.invalidateStage.apply(this, arguments); }
	clone(): zetaret.global.packages.clockwork.ui.DisplayObject { return super.clone.apply(this, arguments); }

	eventTarget: zetaret.global.packages.clockwork.events.EventTarget;
	events: object;

	setEventTarget(target: zetaret.global.packages.clockwork.events.EventTarget): zetaret.global.packages.clockwork.events.EventDispatcher { return super.setEventTarget.apply(this, arguments); }
	addEventListener(event: string, callback: Function): zetaret.global.packages.clockwork.events.EventDispatcher { return super.addEventListener.apply(this, arguments); }
	removeEventListener(event: string, callback?: Function): zetaret.global.packages.clockwork.events.EventDispatcher { return super.removeEventListener.apply(this, arguments); }
	hasEvent(event: string): boolean { return super.hasEvent.apply(this, arguments); }
	dispatch(event: string, data?: object | zetaret.global.packages.clockwork.events.EventData): zetaret.global.packages.clockwork.events.EventDispatcher { return super.dispatch.apply(this, arguments); }
	dispatchEvent(event: zetaret.global.packages.clockwork.events.Event, data?: object | zetaret.global.packages.clockwork.events.EventData, settarget?: boolean): zetaret.global.packages.clockwork.events.EventDispatcher { return super.dispatchEvent.apply(this, arguments); }
	destruct(): void { return super.destruct.apply(this, arguments); }
}