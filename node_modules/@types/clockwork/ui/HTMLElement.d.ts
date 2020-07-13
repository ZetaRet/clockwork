declare namespace zetaret.global.packages.clockwork.ui {
	export interface HTMLElementCTOR {
		new(): HTMLElement
	}
	export interface HTMLElement extends DisplayObject {
		element: globalThis.HTMLElement;
		cachedStyle: object;
		ctxreset: boolean;
		pointer: boolean;
		zindex: boolean;
		transformPrefix: string;
		transformSuffix: string;
		transformX: string;
		transformY: string;
		transformZ: string;

		createElement(tag: string): zetaret.global.packages.clockwork.ui.HTMLElement
		onAddedToStage(e: zetaret.global.packages.clockwork.events.Event, stage: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		onRemovedFromStage(e: zetaret.global.packages.clockwork.events.Event, stage: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		setAttribute(attributes: object): zetaret.global.packages.clockwork.ui.HTMLElement
		setStyle(style: object): zetaret.global.packages.clockwork.ui.HTMLElement
		removeElement(): globalThis.HTMLElement
		clearElement(): zetaret.global.packages.clockwork.ui.HTMLElement
		render(stage: zetaret.global.packages.clockwork.controllers.Stage2DController, renderer: zetaret.global.packages.clockwork.context.ContextRenderer, ctx: CanvasRenderingContext2D, t: Array<number>, ct: Array<number>): zetaret.global.packages.clockwork.ui.HTMLElement
	}
}