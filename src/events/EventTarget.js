window.package("zetaret.global.packages.clockwork.events").internal(
function EventTarget(type, target) {
	var o = this,
		a = arguments;
	o.super(a, true);
	var m = {};
	o.superize(a, m, true, true);
	return o;
});