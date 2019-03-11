window.package("zetaret.global.packages.clockwork.ui").internal(
function Dialog() {
	var o = this,
		a = arguments;
	o.autoShow = true;
	o.autoArrange = true;
	o.autoInvalidateStage = true;
	o.super(a, null);
	o.visible = false;
	var m = {};
	m.arrangeBox = function() {
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("arrangeBox"));
		if (o.autoInvalidateStage && o.stage) o.stage.invalidate = true;
		return o;
	};
	m.show = function() {
		o.visible = true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("show"));
		if (o.autoInvalidateStage && o.stage) o.stage.invalidate = true;
		return o;
	};
	m.hide = function() {
		o.visible = false;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("hide"));
		if (o.autoInvalidateStage && o.stage) o.stage.invalidate = true;
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});