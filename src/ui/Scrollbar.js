window.package("zetaret.global.packages.clockwork.ui").internal(
function Scrollbar() {
	var o = this,
		a = arguments;
	o.horizontal = false;
	o.size = 0;
	o.position = 0;
	o.barsize = 0;
	o.wheelsize = 25;
	o.percentage = 0;
	o.bg = new zetaret.global.packages.clockwork.ui.Shape();
	o.bar = new zetaret.global.packages.clockwork.ui.Shape();
	o.xyRound = true;
	o.super(a, null);
	var m = {};
	m.initBar = function(barsize, size) {
		o.barsize = o.xyRound ? Math.round(barsize) : barsize;
		o.size = o.xyRound ? Math.round(size) : size;
		o.bg.resetGraphics();
		o.addChild(o.bg);
		o.bg.setupInteraction(true);
		o.bg.addEventListener("click", o.onBgClick);
		o.bar.resetGraphics();
		o.addChild(o.bar);
		o.bar.setupInteraction(true);
		o.bar.drag(null, null, null, o.onBarDrag, o);
		o.bg.addEventListener("wheel", o.buttonDefaultPrevent);
		o.bar.addEventListener("click", o.buttonDefaultPrevent);
		o.bar.addEventListener("wheel", o.buttonDefaultPrevent);
		o.addEventListener("wheel", o.onWheel);
		o.addEventListener("click", o.buttonDefaultStop);
		o.addEventListener("mousemove", o.buttonDefaultStop);
		o.addEventListener("mouseover", o.buttonDefaultStop);
		o.addEventListener("mouseout", o.buttonDefaultStop);
		o.addEventListener("mousedown", o.buttonDefaultStop);
		o.addEventListener("mouseup", o.buttonDefaultStop);
		o.addEventListener("dblclick", o.buttonDefaultStop);
		o.bg.addEventListener("mousemove", o.buttonDefaultPrevent);
		o.bar.addEventListener("mousemove", o.buttonDefaultPrevent);
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("initBar"));
		return o;
	};
	m.buttonDefaultPrevent = function(e, s) {
		e.preventCapture();
	};
	m.buttonDefaultStop = function(e, s) {
		e.stopPropagation();
	};
	m.onBgClick = function(e, s) {
		e.preventCapture();
		var lp = o.globalToLocal(e.ox, e.oy);
		if (o.horizontal) {
			o.setScrollP(lp[0] / o.size);
		} else {
			o.setScrollP(lp[1] / o.size);
		}
	};
	m.onBgClick._p = 1;
	m.onWheel = function(e, s) {
		e.stopPropagation();
		e.preventDefault();
		var t = e.nativeEvent.deltaY / 100;
		if (Math.abs(t) < 1) t = t < 0 ? -1 : 1;
		o.setScroll(o.position + o.wheelsize * t);
	};
	m.onWheel._p = 1;
	m.onBarDrag = function(ix, iy, ddx, ddy, ds) {
		if (o.horizontal) {
			o.setScroll(ix + ddx);
		} else {
			o.setScroll(iy + ddy);
		}
	};
	m.onBarDrag._p = 1;
	m.getSize = function() {
		return o.size - o.barsize;
	};
	m.setScrollP = function(p) {
		var s = o.getSize();
		o.percentage = Math.min(1, Math.max(0, p));
		o.position = s * o.percentage;
		o.updateScroll();
		return o;
	};
	m.setScroll = function(scroll) {
		var s = o.getSize();
		o.position = Math.max(0, Math.min(scroll, s));
		o.percentage = o.position / s;
		o.updateScroll();
		return o;
	};
	m.updateScroll = function() {
		if (o.horizontal) o.bar.x = o.xyRound ? Math.round(o.position) : o.position;
		else o.bar.y = o.xyRound ? Math.round(o.position) : o.position;
		o.bar.invalidateTransform = true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("change"));
		return o;
	};
	m.destruct = function() {
		if (o.bg.graphics) {
			o.bg.graphics.clear();
			o.bg.graphics = null;
		}
		if (o.bar.graphics) {
			o.bar.graphics.clear();
			o.bar.graphics = null;
		}
		o.bar = null;
		o.bg = null;
	};
	o.superize(a, m, true, true);
	return o;
});