declare namespace zetaret.global.packages.clockwork.ui {
	export interface ImageCTOR {
		new(): Image
	}
	export interface Image extends Shape {
		imageId: string;
		imageData: CanvasImageSource;
		imageUrl: string;
		imageTag: HTMLImageElement;
		imageLoadEvent: string;
		imageErrorEvent: string;
		imageX: number;
		imageY: number;
		imageWidth: number;
		imageHeight: number;
		cacheAssets: boolean;
		patternEnabled: boolean;
		pattern: CanvasPattern;
		patternStyle: string;
		imageDrawHandler: Function;
		imageHandlerScope: object;
		rebuild: boolean;
		autoInvalidateStage: boolean;
		imgCrossOrigin: string;

		setImageId(id: string, width: number, height: number): zetaret.global.packages.clockwork.ui.Image
		setImageUrl(url: string, id: string): zetaret.global.packages.clockwork.ui.Image
		onImageLoaded(e: Event): void
		onImageError(e: Event): void
		loadImageFromUrl(): zetaret.global.packages.clockwork.ui.Image
		setImageData(idata: CanvasImageSource): zetaret.global.packages.clockwork.ui.Image
		setDefaults(): zetaret.global.packages.clockwork.ui.Image
		clearDefaults(): zetaret.global.packages.clockwork.ui.Image
		clearImage(keepurl?: boolean, keepid?: boolean): zetaret.global.packages.clockwork.ui.Image
		buildImage(): zetaret.global.packages.clockwork.ui.Image
		drawImage(): zetaret.global.packages.clockwork.ui.Image
		destruct(): void
	}
}