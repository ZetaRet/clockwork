declare namespace zetaret.global.packages.clockwork.context {
	export interface ContextRendererCTOR {
		new(): ContextRenderer
	}
	export interface ContextRenderer extends zetaret.global.packages.clockwork.events.EventDispatcher {
		context: CanvasRenderingContext2D;
		defaultContext: CanvasRenderingContext2D;
		intlookup: object;
		invalid: boolean;
		invalidArea: Array<object>;
		setters: object;
		externalRenderer: zetaret.global.packages.clockwork.context.ContextRenderer;
		externalEnabled: boolean;
		type: string;

		setExternalRenderer(renderer: zetaret.global.packages.clockwork.context.ContextRenderer): zetaret.global.packages.clockwork.context.ContextRenderer
		setSetters(settersar: Array<object>, v: object): zetaret.global.packages.clockwork.context.ContextRenderer
		setContext(context: CanvasRenderingContext2D): zetaret.global.packages.clockwork.context.ContextRenderer
		setDefaultContext(): zetaret.global.packages.clockwork.context.ContextRenderer
		getContext(): CanvasRenderingContext2D
		clear(): zetaret.global.packages.clockwork.context.ContextRenderer
		invalidate(): zetaret.global.packages.clockwork.context.ContextRenderer
		invalidateRect(x: number, y: number, width: number, height: number): zetaret.global.packages.clockwork.context.ContextRenderer
		clearInvalid(): zetaret.global.packages.clockwork.context.ContextRenderer
		generateIntLookup(ctxtypes: object, graphictypes: object): zetaret.global.packages.clockwork.context.ContextRenderer
		directRender(data: Array<object>): zetaret.global.packages.clockwork.context.ContextRenderer
		intArrayToDirect(data: Array<object>): Array<object>
		intArrayRender(data: Array<object>): zetaret.global.packages.clockwork.context.ContextRenderer
	}
}