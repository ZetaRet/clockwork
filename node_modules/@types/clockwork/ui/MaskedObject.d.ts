declare namespace zetaret.global.packages.clockwork.ui {
	export interface MaskedObjectCTOR {
		new(): MaskedObject
	}
	export interface MaskedObject extends DisplayObjectContainer {
		container: zetaret.global.packages.clockwork.ui.DisplayObjectContainer;
		maskobj: zetaret.global.packages.clockwork.ui.Shape;
		maskcontainer: zetaret.global.packages.clockwork.ui.DisplayObjectContainer;
		autoInvalidate: boolean;

		initMask(): zetaret.global.packages.clockwork.ui.MaskedObject
		addContent(dobj: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.ui.MaskedObject
		destruct(): void
	}
}