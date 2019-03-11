window.package("zetaret.global.packages.clockwork.events").internal(
function KeyboardEvent(type, target) {
	var o = this,
		a = arguments;
	o.key = "";
	o.code = "";
	o.keyCode = 0;
	o.super(a, true);
	var m = {};
	m.getKey = function() {
		return o.key;
	};
	m.getCode = function() {
		return o.code;
	};
	m.getKeyCode = function() {
		return o.keyCode;
	};
	m.setNativeEvent = function(e) {
		o.nativeEvent = e;
		o.key = e.key;
		o.code = e.code;
		o.keyCode = e.keyCode || e.which;
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});