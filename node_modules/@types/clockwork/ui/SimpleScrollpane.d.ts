declare namespace zetaret.global.packages.clockwork.ui {
	export interface SimpleScrollpaneCTOR {
		new(): SimpleScrollpane
	}
	export interface SimpleScrollpane extends Scrollpane {
		vscrollbar: zetaret.global.packages.clockwork.ui.Scrollbar;
		hscrollbar: zetaret.global.packages.clockwork.ui.Scrollbar;

		initScrollpane(width: number, height: number): zetaret.global.packages.clockwork.ui.SimpleScrollpane
		onWheel(e: zetaret.global.packages.clockwork.events.Event, s: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		onVScroll(e: zetaret.global.packages.clockwork.events.Event, s: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		onHScroll(e: zetaret.global.packages.clockwork.events.Event, s: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		destruct(): void
	}
}