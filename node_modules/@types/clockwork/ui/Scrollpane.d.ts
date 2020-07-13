declare namespace zetaret.global.packages.clockwork.ui {
	export interface ScrollpaneCTOR {
		new(): Scrollpane
	}
	export interface Scrollpane extends DisplayObjectContainer {
		container: zetaret.global.packages.clockwork.ui.DisplayObjectContainer;
		bg: zetaret.global.packages.clockwork.ui.Shape;
		bgcolor: zetaret.global.packages.clockwork.graphics.FillType;
		maskobj: zetaret.global.packages.clockwork.ui.Shape;
		autoInvalidate: boolean;
		maskWidth: number;
		maskHeight: number;
		scrollWidth: number;
		scrollHeight: number;
		xoffset: number;
		yoffset: number;
		xyRound: boolean;

		initScrollpane(width: number, height: number): zetaret.global.packages.clockwork.ui.Scrollpane
		setScrollSize(width: number, height: number): zetaret.global.packages.clockwork.ui.Scrollpane
		setOffset(x: number, y: number): zetaret.global.packages.clockwork.ui.Scrollpane
		setScrollMask(width: number, height: number): zetaret.global.packages.clockwork.ui.Scrollpane
		isHScroll(): boolean
		isVScroll(): boolean
		setScroll(): zetaret.global.packages.clockwork.ui.Scrollpane
		setScrollP(): zetaret.global.packages.clockwork.ui.Scrollpane
		addContent(dobj: zetaret.global.packages.clockwork.ui.DisplayObject): void
		destruct(): void
	}
}