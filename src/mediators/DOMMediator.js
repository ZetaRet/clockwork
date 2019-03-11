window.package("zetaret.global.packages.clockwork.mediators").internal(
function DOMMediator(obj, domo) {
	var o = this,
		a = arguments;
	o.obj = obj;
	o.domo = domo;
	o.super(a, true);
	var m = {};
	m.eventize = function(e1, e2, cls, fname, h, obj, domo) {
		if (!obj) obj = o.obj;
		if (!domo) domo = o.domo;
		var f = function(e) {
			var ee = new cls();
			ee.type = e2;
			ee.setNativeEvent(e);
			if (h) h(obj, domo, ee);
			obj[fname](ee);
		};
		domo.addEventListener(e1, f);
		return f;
	};
	o.superize(a, m, true, true);
	return o;
});