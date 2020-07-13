declare namespace zetaret.global.packages.clockwork.ui {
	export interface WindowCTOR {
		new(): Window
	}
	export interface Window extends DisplayObjectContainer {
		title: string;
		windowId: string;
		parentWindow: zetaret.global.packages.clockwork.ui.Window;
		windowWidth: number;
		windowHeight: number;
		bg: zetaret.global.packages.clockwork.ui.Shape;
		header: zetaret.global.packages.clockwork.ui.ButtonContainer;
		sidebar: zetaret.global.packages.clockwork.ui.SimpleScrollpane;
		body: zetaret.global.packages.clockwork.ui.SimpleScrollpane;
		details: zetaret.global.packages.clockwork.ui.SimpleScrollpane;
		footer: zetaret.global.packages.clockwork.ui.ButtonContainer;
		topcontainer: zetaret.global.packages.clockwork.ui.DisplayObjectContainer;
		autoInvalidateStage: boolean;

		initWindow(width: number, height: number, header?: boolean, footer?: boolean, sidebar?: boolean, details?: boolean): zetaret.global.packages.clockwork.ui.Window
		destruct(): void
	}
}