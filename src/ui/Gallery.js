window.package("zetaret.global.packages.clockwork.ui").internal(
function Gallery() {
	var o = this,
		a = arguments;
	o.galleryItems = [];
	o.currentItem = null;
	o.rotateGallery = false;
	o.super(a, null);
	var m = {};
	m.addGalleryItem = function() {
		var git = new zetaret.global.packages.clockwork.ui.GalleryItem();
		o.galleryItems.push(git);
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("addGalleryItem"));
		return git;
	};
	m.setGalleryItem = function(item) {
		if (o.currentItem) {
			o.removeChild(o.currentItem);
			o.currentItem.deactivate();
		}
		o.currentItem = item;
		o.addChild(item);
		o.currentItem.activate();
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("change"));
		return o;
	};
	m.nextGalleryItem = function() {
		var index = -1;
		if (!o.galleryItems || !o.galleryItems.length)
			return o;
		if (!o.currentItem) index = 0;
		else {
			index = o.galleryItems.indexOf(o.currentItem);
			if (index < 0) index = 0;
			else if (index == (o.galleryItems.length - 1)) {
				if (!o.rotateGallery) index = -1;
				else index = 0;
			} else index++;
		}
		if (index >= 0) o.setGalleryItem(o.galleryItems[index]);
		return o;
	};
	m.prevGalleryItem = function() {
		var index = -1;
		if (!o.galleryItems || !o.galleryItems.length)
			return o;
		if (!o.currentItem) index = o.galleryItems.length - 1;
		else {
			index = o.galleryItems.indexOf(o.currentItem);
			if (index < 0) index = o.galleryItems.length - 1;
			else if (index == 0) {
				if (!o.rotateGallery) index = -1;
				else index = o.galleryItems.length - 1;
			} else index--;
		}
		if (index >= 0) o.setGalleryItem(o.galleryItems[index]);
		return o;
	};
	m.destruct = function() {
		var i, l = o.galleryItems.length;
		if (o.galleryItems && l) {
			for (i = 0; i < l; i++) {
				o.galleryItems[i].destruct();
			}
		}
		o.galleryItems = null;
	};
	o.superize(a, m, true, true);
	return o;
});