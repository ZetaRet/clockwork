window.package("zetaret.global.packages.clockwork.ui").internal(
function AlertBox() {
	var o = this,
		a = arguments;
	o.bg = new zetaret.global.packages.clockwork.ui.Shape();
	o.yesBtn = new zetaret.global.packages.clockwork.ui.LabelButton();
	o.noBtn = new zetaret.global.packages.clockwork.ui.LabelButton();
	o.closeBtn = new zetaret.global.packages.clockwork.ui.ButtonContainer();
	o.txt = new zetaret.global.packages.clockwork.ui.TextField();
	o.icon = new zetaret.global.packages.clockwork.ui.Image();
	o.super(a, null);
	var m = {};
	m.alert = function(message) {
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("alert"));
		o.txt.setText(message).renderText();
		if (o.autoArrange) o.arrangeBox();
		if (o.autoShow) o.show();
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("updateSkin"));
		if (o.autoInvalidateStage && o.stage) o.stage.invalidate = true;
		return o;
	};
	m.initBox = function(yes, no, close, label, icon) {
		o.bg.name = "bg";
		o.addChild(o.bg);
		o.bg.setupInteraction(true);
		o.configButtonShape(o.bg, true);
		o.bg.drag(null, null, o);
		if (yes) {
			o.addChild(o.yesBtn);
			o.yesBtn.initLabelButton("yes");
		}
		if (no) {
			o.addChild(o.noBtn);
			o.noBtn.initLabelButton("no");
		}
		if (close) {
			o.closeBtn.name = "close";
			o.closeBtn.buttonMode(true, true);
			o.closeBtn.addButtonShape("bg");
			o.addChild(o.closeBtn);
		}
		if (label) {
			o.txt.name = "label";
			o.addChild(o.txt);
		}
		if (icon) {
			o.icon.name = "icon";
			o.addChild(o.icon);
		}
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("initBox"));
		if (o.autoInvalidateStage && o.stage) o.stage.invalidate = true;
		return o;
	};
	m.defaultButtons = function() {
		o.yesBtn.addEventListener("click", o.onOk);
		o.noBtn.addEventListener("click", o.onCancel);
		o.closeBtn.addEventListener("click", o.onCancel);
		return o;
	};
	m.onCancel = function(e, d) {
		o.hide();
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("cancel"));
	};
	m.onCancel._p = 1;
	m.onOk = function(e, d) {
		o.hide();
		o.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("ok"));
	};
	m.onOk._p = 1;
	m.destruct = function() {
		if (o.bg.graphics) {
			o.bg.graphics.clear();
			o.bg.graphics = null;
		}
		o.bg.destruct();
		o.bg = null;
		o.yesBtn.destruct();
		o.yesBtn = null;
		o.noBtn.destruct();
		o.noBtn = null;
		o.closeBtn.destruct();
		o.closeBtn = null;
		o.txt.destruct();
		o.txt = null;
		o.icon.destruct();
		o.icon = null;
	};
	o.superize(a, m, true, true);
	return o;
});