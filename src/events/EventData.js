window.package("zetaret.global.packages.clockwork.events").internal(
function EventData(type, target) {
	var o = this,
		a = arguments;
	o.data = null;
	o.super(a, true);
	var m = {};
	m.getData = function() {
		return o.data;
	};
	o.superize(a, m, true, true);
	return o;
});