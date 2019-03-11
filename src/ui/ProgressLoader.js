window.package("zetaret.global.packages.clockwork.ui").internal(
function ProgressLoader() {
	var o = this,
		a = arguments;
	o.progress = 0;
	o.size = 0;
	o.horizontal = true;
	o.bg = new zetaret.global.packages.clockwork.ui.Shape();
	o.slide = new zetaret.global.packages.clockwork.ui.Shape();
	o.autoInvalidate = true;
	o.super(a, null);
	var m = {};
	m.setProgress = function(v) {
		o.progress = v;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("change"));
		if (o.autoInvalidate && o.stage) o.stage.invalidate = true;
		return o;
	};
	m.initProgress = function(size) {
		o.size = size;
		o.bg.resetGraphics();
		o.slide.resetGraphics();
		o.addChild(o.bg);
		o.addChild(o.slide);
		if (o.autoInvalidate && o.stage) o.stage.invalidate = true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("initProgress"));
		return o;
	};
	m.destruct = function() {
		if (o.bg.graphics) {
			o.bg.graphics.clear();
			o.bg.graphics = null;
		}
		o.bg = null;
		if (o.slide.graphics) {
			o.slide.graphics.clear();
			o.slide.graphics = null;
		}
		o.slide = null;
	};
	o.superize(a, m, true, true);
	return o;
});