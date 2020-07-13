declare namespace zetaret.global.packages.clockwork.ui {
	export interface ProgressLoaderCTOR {
		new(): ProgressLoader
	}
	export interface ProgressLoader extends DisplayObjectContainer {
		progress: number;
		size: number;
		horizontal: boolean;
		bg: zetaret.global.packages.clockwork.ui.Shape;
		slide: zetaret.global.packages.clockwork.ui.Shape;
		autoInvalidate: boolean;

		setProgress(v: number): zetaret.global.packages.clockwork.ui.ProgressLoader
		initProgress(size: number): zetaret.global.packages.clockwork.ui.ProgressLoader
		destruct(): void
	}
}