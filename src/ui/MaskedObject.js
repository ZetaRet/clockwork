window.package("zetaret.global.packages.clockwork.ui").internal(
function MaskedObject() {
	var o = this,
		a = arguments;
	o.container = new zetaret.global.packages.clockwork.ui.DisplayObjectContainer();
	o.maskobj = new zetaret.global.packages.clockwork.ui.Shape();
	o.maskcontainer = new zetaret.global.packages.clockwork.ui.DisplayObjectContainer();
	o.autoInvalidate = true;
	o.super(a, null);
	var m = {};
	m.initMask = function() {
		o.addChild(o.container);
		o.addChild(o.maskcontainer);
		o.maskobj.resetGraphics();
		o.maskcontainer.addChild(o.maskobj);
		o.container.setMask(o.maskcontainer);
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("initMask"));
		return o;
	};
	m.addContent = function(dobj) {
		o.container.addChild(dobj);
		if (o.autoInvalidate && o.stage) o.stage.invalidate = true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("contentAdded"));
		return o;
	};
	m.destruct = function() {
		if (o.maskobj.graphics) {
			o.maskobj.graphics.clear();
			o.maskobj.graphics = null;
		}
		o.container = null;
		o.maskobj = null;
		o.maskcontainer = null;
	};
	o.superize(a, m, true, true);
	return o;
});