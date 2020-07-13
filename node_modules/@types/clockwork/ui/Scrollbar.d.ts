declare namespace zetaret.global.packages.clockwork.ui {
	export interface ScrollbarCTOR {
		new(): Scrollbar
	}
	export interface Scrollbar extends DisplayObjectContainer {
		horizontal: boolean;
		size: number;
		position: number;
		barsize: number;
		wheelsize: number;
		percentage: number;
		bg: zetaret.global.packages.clockwork.ui.Shape;
		bar: zetaret.global.packages.clockwork.ui.Shape;
		xyRound: boolean;

		initBar(barsize: number, size: number): zetaret.global.packages.clockwork.ui.Scrollbar
		buttonDefaultPrevent(e: zetaret.global.packages.clockwork.events.Event, s: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		buttonDefaultStop(e: zetaret.global.packages.clockwork.events.Event, s: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		onBgClick(e: zetaret.global.packages.clockwork.events.Event, s: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		onWheel(e: zetaret.global.packages.clockwork.events.Event, s: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		onBarDrag(ix: number, iy: number, ddx: number, ddy: number, ds: zetaret.global.packages.clockwork.controllers.DragController): void
		getSize(): number
		setScrollP(p: number): zetaret.global.packages.clockwork.ui.Scrollbar
		setScroll(scroll: number): zetaret.global.packages.clockwork.ui.Scrollbar
		updateScroll(): zetaret.global.packages.clockwork.ui.Scrollbar
		destruct(): void
	}
}