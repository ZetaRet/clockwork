window.package("zetaret.global.packages.clockwork.skin.silver").internal(
function Scrollbar_SilverSkin() {
	var o = this,
		a = arguments;
	o.super(a, null);
	var m = {};
	m.initSkin = function(target, skindata) {
		var skinc = new zetaret.global.packages.clockwork.ui.SkinnableComponent();
		skinc.setSkin("silver", o, ["bg", "bar"], skindata)
			.setSkinTarget(target).skinme();
		target.addEventListener("change", o.onChange);
		target.addEventListener("updateSkin", o.onUpdateSkin);
		return skinc;
	};
	m.onChange = function(e, d) {

	};
	m.onChange._p = 1;
	m.onUpdateSkin = function(e, d) {

	};
	m.onUpdateSkin._p = 1;
	m.bg = function(skin, target, sdata, scomp) {
		skin.graphics.clear().
		beginFill("#3f3f3f").drawRect(0, 0, target.horizontal ? target.size : sdata.scrollbar.bsize, target.horizontal ? sdata.scrollbar.bsize : target.size).endFill();
		return o;
	};
	m.bar = function(skin, target, sdata, scomp) {
		skin.graphics.clear().
		beginFill("#7c7c7c").drawRect(0, 0, target.horizontal ? target.barsize : sdata.scrollbar.bsize, target.horizontal ? sdata.scrollbar.bsize : target.barsize).endFill();
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});