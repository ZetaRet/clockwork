declare namespace zetaret.global.packages.clockwork.ui {
	export interface LabelCTOR {
		new(): Label
	}
	export interface Label extends DisplayObjectContainer {
		label: zetaret.global.packages.clockwork.ui.TextField;
		autoInvalidate: boolean;

		setLabel(v: string): zetaret.global.packages.clockwork.ui.Label
		initLabel(style: object): zetaret.global.packages.clockwork.ui.Label
		destruct(): void
	}
}