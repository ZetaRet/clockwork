window.package("zetaret.global.packages.clockwork.ui").internal(
function Scrollpane() {
	var o = this,
		a = arguments;
	o.container = new zetaret.global.packages.clockwork.ui.DisplayObjectContainer();
	o.bg = new zetaret.global.packages.clockwork.ui.Shape();
	o.bgcolor = 0x00000000;
	o.maskobj = new zetaret.global.packages.clockwork.ui.Shape();
	o.autoInvalidate = true;
	o.maskWidth = 0;
	o.maskHeight = 0;
	o.scrollWidth = 0;
	o.scrollHeight = 0;
	o.xoffset = 0;
	o.yoffset = 0;
	o.xyRound = true;
	o.super(a, null);
	var m = {};
	m.initScrollpane = function(width, height) {
		o.bg.resetGraphics();
		o.addChild(o.bg);
		o.bg.setupInteraction(true);
		o.addChild(o.container);
		o.maskobj.resetGraphics();
		o.addChild(o.maskobj);
		o.container.setMask(o.maskobj);
		o.setScrollMask(width, height);
		if (o.autoInvalidate && o.stage) o.stage.invalidate = true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("initScrollpane"));
		return o;
	};
	m.setScrollSize = function(width, height) {
		o.scrollWidth = width;
		o.scrollHeight = height;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("scrollSizeChanged"));
		return o;
	};
	m.setOffset = function(x, y) {
		o.xoffset = x;
		o.yoffset = y;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("scrollOffsetChanged"));
		return o;
	};
	m.setScrollMask = function(width, height) {
		o.maskWidth = width;
		o.maskHeight = height;
		o.maskobj.graphics.clear();
		if (width > 0 && height > 0) {
			o.maskobj.graphics.drawRect(0, 0, width, height);
		}
		o.bg.graphics.clear();
		if (width > 0 && height > 0) {
			o.bg.graphics.beginFill(o.bgcolor).drawRect(0, 0, width, height).endFill();
		}
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("scrollMaskChanged"));
		return o;
	};
	m.isHScroll = function() {
		return o.maskWidth < o.scrollWidth;
	};
	m.isVScroll = function() {
		return o.maskHeight < o.scrollHeight;
	};
	m.setScroll = function(x, y) {
		if (x !== undefined) {
			o.container.x = o.xoffset - x;
			if (o.xyRound) o.container.x = Math.round(o.container.x);
		}
		if (y !== undefined) {
			o.container.y = o.yoffset - y;
			if (o.xyRound) o.container.y = Math.round(o.container.y);
		}
		if (o.autoInvalidate) {
			o.container.invalidateTransform = true;
			if (o.stage) o.stage.invalidate = true;
		}
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("scrollChanged"));
		return o;
	};
	m.setScrollP = function(x, y) {
		if (x !== undefined) {
			o.container.x = o.xoffset - x * (o.scrollWidth - o.maskWidth);
			if (o.xyRound) o.container.x = Math.round(o.container.x);
		}
		if (y !== undefined) {
			o.container.y = o.yoffset - y * (o.scrollHeight - o.maskHeight);
			if (o.xyRound) o.container.y = Math.round(o.container.y);
		}
		if (o.autoInvalidate) {
			o.container.invalidateTransform = true;
			if (o.stage) o.stage.invalidate = true;
		}
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("scrollChanged"));
		return o;
	};
	m.addContent = function(dobj) {
		o.container.addChild(dobj);
		if (o.autoInvalidate && o.stage) o.stage.invalidate = true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("contentAdded"));
	};
	m.destruct = function() {
		if (o.bg.graphics) {
			o.bg.graphics.clear();
			o.bg.graphics = null;
		}
		if (o.maskobj.graphics) {
			o.maskobj.graphics.clear();
			o.maskobj.graphics = null;
		}
		o.container = null;
		o.bg = null;
		o.maskobj = null;
	};
	o.superize(a, m, true, true);
	return o;
});