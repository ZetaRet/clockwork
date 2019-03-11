window.package("zetaret.global.packages.clockwork.ui").internal(
function MenuButton() {
	var o = this,
		a = arguments;
	o.tf = new zetaret.global.packages.clockwork.ui.TextField();
	o.super(a, null);
	var m = {};
	m.setText = function(txt) {
		o.tf.setText(txt).renderText();
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("change"));
		return o;
	};
	m.initMenuButton = function() {
		o.addChild(o.tf);
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("initMenuButton"));
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});