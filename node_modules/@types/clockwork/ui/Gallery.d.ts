declare namespace zetaret.global.packages.clockwork.ui {
	export interface GalleryCTOR {
		new(): Gallery
	}
	export interface Gallery extends DisplayObjectContainer {
		galleryItems: Array<object>;
		currentItem: zetaret.global.packages.clockwork.ui.GalleryItem;
		rotateGallery: boolean;

		addGalleryItem(): zetaret.global.packages.clockwork.ui.GalleryItem
		setGalleryItem(item: zetaret.global.packages.clockwork.ui.GalleryItem): zetaret.global.packages.clockwork.ui.Gallery
		nextGalleryItem(): zetaret.global.packages.clockwork.ui.Gallery
		prevGalleryItem(): zetaret.global.packages.clockwork.ui.Gallery
		destruct(): void
	}
}