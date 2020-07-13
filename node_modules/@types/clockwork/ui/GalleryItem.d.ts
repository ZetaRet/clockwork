declare namespace zetaret.global.packages.clockwork.ui {
	export interface GalleryItemCTOR {
		new(): GalleryItem
	}
	export interface GalleryItem extends DisplayObjectContainer {
		title: zetaret.global.packages.clockwork.ui.TextField;
		image: zetaret.global.packages.clockwork.ui.Image;
		itemWidth: number;
		itemHeight: number;
		itemAlignX: number;
		itemAlignY: number;
		imageFit: number;

		onImageLoaded(e?: zetaret.global.packages.clockwork.events.Event, d?: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		fitImage(): zetaret.global.packages.clockwork.ui.GalleryItem
		setDefaults(): zetaret.global.packages.clockwork.ui.GalleryItem
		setImageUrl(url: string): zetaret.global.packages.clockwork.ui.GalleryItem
		activate(): zetaret.global.packages.clockwork.ui.GalleryItem
		deactivate(): zetaret.global.packages.clockwork.ui.GalleryItem
		destruct(): void
	}
}