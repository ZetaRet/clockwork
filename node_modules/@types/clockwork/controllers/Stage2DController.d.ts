declare namespace zetaret.global.packages.clockwork.controllers {
	export interface Stage2DControllerCTOR {
		new(): Stage2DController
	}
	export interface Stage2DController extends zetaret.global.packages.clockwork.controllers.ChildController {
		stageId: string;
		renderer: zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer;
		rendererMediator: zetaret.global.packages.clockwork.mediators.GraphicContext2DMediator;
		htmlContainer: HTMLElement;
		childLock: boolean;
		childcontainercls: zetaret.global.packages.clockwork.ui.DisplayObjectContainer;
		displayobjectcls: zetaret.global.packages.clockwork.ui.DisplayObject;
		invalidate: boolean;
		invalidateRect: object;
		invalidateList: Array<object>;
		inversed: boolean;
		prebufferlist: boolean;
		prebufferinvert: boolean;
		cnvs: object;
		ctxParams: object;
		defaultLocalTransform: Array<object>;
		t: Array<object>;
		ct: Array<object>;
		selfinvalidate: boolean;
		selftransform: boolean;
		precision: number;
		precisionNum: number;
		usePrecision: boolean;
		controllers: Array<object>;
		stageWidth: number;
		stageHeight: number;
		errors: Array<object>;
		renderErrors: boolean;
		renderIndex: number;

		setPrecision(precision: number, use?: boolean): zetaret.global.packages.clockwork.controllers.Stage2DController
		precise16(n: number): number
		precise15(n: number): number
		precise14(n: number): number
		precise12(n: number): number
		precise10(n: number): number
		precise8(n: number): number
		precise6(n: number): number
		precise4(n: number): number
		precise2(n: number): number
		preciseR(n: number): number
		preciseC(n: number): number
		preciseF(n: number): number
		preciseSinCosReport(): object
		initRendererMediator(): zetaret.global.packages.clockwork.controllers.Stage2DController
		initStage(renderer: zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer, childcontainercls?: zetaret.global.packages.clockwork.ui.DisplayObjectContainer, displayobjectcls?: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.controllers.Stage2DController
		initHtml(container: HTMLElement): zetaret.global.packages.clockwork.controllers.Stage2DController
		getDisplayObject(): zetaret.global.packages.clockwork.ui.DisplayObject
		getContainer(child: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.ui.DisplayObjectContainer
		transformize(a2: number, b2: number, c2: number, d2: number, e2: number, f2: number): Array<object>
		colorTransformize(r: number, g: number, b: number, a: number, ro: number, go: number, bo: number, ao: number): Array<object>
		rooterTransform(child: zetaret.global.packages.clockwork.ui.DisplayObject, parent: zetaret.global.packages.clockwork.ui.DisplayObjectContainer, dtop: object): zetaret.global.packages.clockwork.controllers.Stage2DController
		rooterTransform2(child: zetaret.global.packages.clockwork.ui.DisplayObject, parent: zetaret.global.packages.clockwork.ui.DisplayObjectContainer, dtop: object): zetaret.global.packages.clockwork.controllers.Stage2DController
		invalidateStageChild(child: zetaret.global.packages.clockwork.ui.DisplayObject, f?: Function, d?: object, parent?: zetaret.global.packages.clockwork.ui.DisplayObjectContainer, list?: Array<object>, mode?: string, childo?: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.controllers.Stage2DController
		invalidateStageChild2(child: zetaret.global.packages.clockwork.ui.DisplayObject, f?: Function, d?: object, parent?: zetaret.global.packages.clockwork.ui.DisplayObjectContainer, list?: Array<object>, mode?: string, childo?: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.controllers.Stage2DController
		renderStageChild(child: zetaret.global.packages.clockwork.ui.DisplayObject, f?: Function, d?: object, parent?: zetaret.global.packages.clockwork.ui.DisplayObjectContainer, list?: Array<object>, mode?: string, childo?: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.controllers.Stage2DController
		restoreContext(child: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.controllers.Stage2DController
		renderStage(data?: object, parent?: zetaret.global.packages.clockwork.ui.DisplayObjectContainer): zetaret.global.packages.clockwork.controllers.Stage2DController
		setStageProperty(child: zetaret.global.packages.clockwork.ui.DisplayObject, f?: Function, d?: object, parent?: zetaret.global.packages.clockwork.ui.DisplayObjectContainer, list?: Array<object>, mode?: string, childo?: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.controllers.Stage2DController
		delStageProperty(child: zetaret.global.packages.clockwork.ui.DisplayObject, f?: Function, d?: object, parent?: zetaret.global.packages.clockwork.ui.DisplayObjectContainer, list?: Array<object>, mode?: string, childo?: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.controllers.Stage2DController
		setStageToChildren(child: zetaret.global.packages.clockwork.ui.DisplayObject, stageEvents?: boolean, removestage?: boolean): zetaret.global.packages.clockwork.controllers.Stage2DController
		clearStage(): zetaret.global.packages.clockwork.controllers.Stage2DController
		resetStage(): zetaret.global.packages.clockwork.controllers.Stage2DController
		createContext(id: string, ctxp?: object): CanvasRenderingContext2D
		getContext(id: string): CanvasRenderingContext2D
		changeContext(id: string, ctx?: CanvasRenderingContext2D): zetaret.global.packages.clockwork.controllers.Stage2DController
		clearCacheContext(id: string): void
		getController(type: Function, strict?: boolean): object
	}
}