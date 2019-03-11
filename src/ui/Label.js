window.package("zetaret.global.packages.clockwork.ui").internal(
function Label() {
	var o = this,
		a = arguments;
	o.label = new zetaret.global.packages.clockwork.ui.TextField();
	o.autoInvalidate = true;
	o.super(a, null);
	var m = {};
	m.setLabel = function(v) {
		o.label.setText(v);
		if (o.autoInvalidate && o.stage) o.stage.invalidate = true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("change"));
		return o;
	};
	m.initLabel = function(style) {
		o.addChild(o.label);
		o.label.autoRenderText = true;
		if (style) o.label.setStyle(style);
		if (o.autoInvalidate && o.stage) o.stage.invalidate = true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("initLabel"));
		return o;
	};
	m.destruct = function() {
		o.label.destruct();
		o.label = null;
	};
	o.superize(a, m, true, true);
	return o;
});