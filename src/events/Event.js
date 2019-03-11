window.package("zetaret.global.packages.clockwork.events").internal(
function Event(type, target) {
	var o = this,
		a = arguments;
	o.identifier = null;
	o._capabilities = null;
	o.super(a, true);
	var m = {};
	o.superize(a, m, true, true);
	return o;
});

window.internal(
function ZetaRet_Event(type, target) {
	var o = this,
		a = arguments;
	o.type = type;
	o.bubbles = false;
	o.cancelBubble = false;
	o.cancelable = false;
	o.currentTarget = null;
	o.target = target;
	o.defaultPrevented = false;
	o.targetMap = null;
	o.eventPhase = null;
	o.time = 0;
	o.creator = null;
	o.nativeEvent = null;
	o.super(a);
	var m = {};
	m.preventBubble = function() {
		o.bubbles = false;
		return o;
	};
	m.preventDefault = function() {
		o.defaultPrevented = true;
		return o;
	};
	m.preventCapture = function() {
		o.setEventPhase(ZetaRet_Event.BUBBLE_PHASE);
		return o;
	};
	m.stopPropagation = function() {
		o.setEventPhase(ZetaRet_Event.NO_PHASE);
		return o;
	};
	m.stopImmediatePropagation = function() {
		o.setEventPhase(ZetaRet_Event.NULL_PHASE);
		return o;
	};
	m.setEventPhase = function(phase) {
		o.eventPhase = phase;
		return o;
	};
	m.setEventType = function(type) {
		o.type = type;
		return o;
	};
	m.setEventTarget = function(target) {
		o.target = target;
		return o;
	};
	m.setEventCurrentTarget = function(target) {
		o.currentTarget = target;
		return o;
	};
	m.addToTargetMap = function(target) {
		o.targetMap = o.targetMap || [];
		o.targetMap[o.targetMap.length] = target;
		return o;
	};
	m.setNativeEvent = function(e) {
		o.nativeEvent = e;
		return o;
	};
	m.clone = function() {
		var c = new o.constructor(o.type);
		var cloneprops = o.constructor.eventprops,
			cl, i, ck;
		c.bubbles = o.bubbles;
		c.cancelBubble = o.cancelBubble;
		c.cancelable = o.cancelable;
		c.currentTarget = o.currentTarget;
		c.target = o.target;
		c.defaultPrevented = o.defaultPrevented;
		c.targetMap = o.targetMap;
		c.eventPhase = o.eventPhase;
		c.time = o.time;
		c.creator = o.creator;
		c.nativeEvent = o.nativeEvent;
		if (cloneprops) {
			cl = cloneprops.length;
			for (i = 0; i < cl; i++) {
				ck = cloneprops[i];
				c[ck] = o[ck];
			}
		}
		return c;
	};
	o.superize(a, m, true, true);
	return o;
});
ZetaRet_Event.BUBBLE_PHASE = "bubblePhase";
ZetaRet_Event.CAPTURE_PHASE = "capturePhase";
ZetaRet_Event.NO_PHASE = "noPhase";
ZetaRet_Event.NULL_PHASE = "nullPhase";