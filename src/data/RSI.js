window.package("zetaret.global.packages.clockwork.data").internal(
function RSI() {
	var o = this,
		a = arguments;
	o.residualImage = null;
	o.residualMod = false;
	o.residualImagex = "";
	o.rsiself = null;
	o.rsikeys = null;
	o.timestamp = 0;
	o.autoTimestamp = false;
	o.super(a, true);
	var m = {};
	m.transferResidualImage = function(obj, keys, scope, timestamp) {
		var kl = keys.length,
			k;
		o.residualImage = o.residualMod ? obj : obj.constructor;
		o.residualImagex = obj.constructor.getSuperName2();
		o.rsiself = scope || o;
		o.rsikeys = keys;
		while (kl--) {
			k = keys[kl];
			o[k] = obj[k];
		}
		if (o.autoTimestamp || timestamp === true) o.timestamp = (new Date()).getTime();
		else if (timestamp > 0) o.timestamp = timestamp;
		return o;
	};
	m.clearRSI = function() {
		o.residualImage = null;
		o.rsiself = null;
	};
	o.superize(a, m, true, true);
	return o;
});