window.package("zetaret.global.packages.clockwork.ui").internal(
function Menu() {
	var o = this,
		a = arguments;
	o.menulist = new zetaret.global.packages.clockwork.ui.List();
	o.menubg = new zetaret.global.packages.clockwork.ui.Shape();
	o.menulabels = {};
	o.autoInvalidate = true;
	o.super(a, null);
	var m = {};
	m.setBackground = function() {
		o.menubg.resetGraphics();
		o.addChild(o.menubg);
		o.menubg.setupInteraction(true);
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("setBackground"));
		return o.menubg;
	};
	m.addbtn = function(id, handler) {
		var btn = new zetaret.global.packages.clockwork.ui.MenuButton();
		btn.name = id;
		btn.buttonMode(true, true);
		btn.setText(o.menulabels[id] || id);
		o.addMenuButton(btn);
		if (handler)
			btn.addEventListener("click", handler);
		return btn;
	};
	m.addMenuButton = function(mb) {
		o.menulist.addListItem(mb);
		if (o.autoInvalidate && o.stage) o.stage.invalidate = true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("addMenuButton"));
		return o;
	};
	m.initMenu = function() {
		o.addChild(o.menulist);
		if (o.autoInvalidate && o.stage) o.stage.invalidate = true;
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("initMenu"));
		return o;
	};
	m.destruct = function() {
		o.menulist = null;
		if (o.menubg.graphics) {
			o.menubg.graphics.clear();
			o.menubg.graphics = null;
		}
		o.menubg = null;
	};
	o.superize(a, m, true, true);
	return o;
});