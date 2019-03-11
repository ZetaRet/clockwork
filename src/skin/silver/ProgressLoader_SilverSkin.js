window.package("zetaret.global.packages.clockwork.skin.silver").internal(
function ProgressLoader_SilverSkin() {
	var o = this,
		a = arguments;
	o.super(a, null);
	var m = {};
	m.initSkin = function(target, skindata) {
		var skinc = new zetaret.global.packages.clockwork.ui.SkinnableComponent();
		skinc.setSkin("silver", o, ["bg", "slide"], skindata)
			.setSkinTarget(target).skinme();
		target.addEventListener("change", o.onChange);
		target.addEventListener("updateSkin", o.onUpdateSkin);
		return skinc;
	};
	m.onChange = function(e, d) {
		e.target.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("updateSkin"));
	};
	m.onChange._p = 1;
	m.onUpdateSkin = function(e, d) {

	};
	m.onUpdateSkin._p = 1;
	m.bg = function(skin, target, sdata, scomp) {
		skin.graphics.clear().
		beginFill("#3f3f3f").drawRect(0, 0, target.horizontal ? target.size : 10, target.horizontal ? 10 : target.size).endFill();
		return o;
	};
	m.slide = function(skin, target, sdata, scomp) {
		var ssize = target.size * target.progress;
		skin.graphics.clear();
		if (ssize > 0)
			skin.graphics.beginFill("#7c7c7c").drawRect(0, 0, target.horizontal ? ssize : 10, target.horizontal ? 10 : ssize).endFill();
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});