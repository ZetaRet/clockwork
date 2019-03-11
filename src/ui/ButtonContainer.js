window.package("zetaret.global.packages.clockwork.ui").internal(
function ButtonContainer() {
	var o = this,
		a = arguments;
	o.addButtonShapeCls = zetaret.global.packages.clockwork.ui.Shape;
	o.super(a, null);
	var m = {};
	m.addButtonShape = function(name, nocfg, listeners, interaction, mouseEnabled, mouseChildren) {
		var btnsh = new o.addButtonShapeCls();
		if (name) btnsh.name = name;
		btnsh.resetGraphics();
		o.addChild(btnsh);
		if (!nocfg) {
			if (listeners === undefined) listeners = true;
			if (interaction === undefined) interaction = true;
			if (mouseEnabled === undefined) mouseEnabled = true;
			if (mouseChildren === undefined) mouseChildren = false;
			o.configButtonShape(btnsh, listeners, interaction, mouseEnabled, mouseChildren);
		}
		return btnsh;
	};
	m.configButtonShape = function(btnsh, listeners, interaction, mouseEnabled, mouseChildren) {
		if (listeners) {
			btnsh.addEventListener("mousemove", o.buttonDefaultPrevent);
			btnsh.addEventListener("mousedown", o.buttonDefaultPrevent);
			btnsh.addEventListener("mouseup", o.buttonDefaultPrevent);
			btnsh.addEventListener("click", o.buttonDefaultPrevent);
			btnsh.addEventListener("dblclick", o.buttonDefaultPrevent);
			btnsh.addEventListener("wheel", o.buttonDefaultPrevent);
		}
		if (interaction) {
			if (o.mousec && o.mousec.interaction) {
				o.mousec.interaction.setInteractID(btnsh, {
					mouseEnabled: mouseEnabled,
					mouseChildren: mouseChildren
				});
			} else if (o.autoInteraction) {
				if (!o.interactionQueue) o.interactionQueue = [];
				o.interactionQueue.push({
					data: btnsh,
					mouseEnabled: mouseEnabled,
					mouseChildren: mouseChildren
				});
			}
		}
		return o;
	};
	m.getBounds = function(tm) {
		return zetaret.global.packages.clockwork.ui.DisplayObject.getUnionBounds(o.children, tm || o.cachedtransform || o.getStageTransform().t, true);
	};
	var s = o.superize(a, m, true, true);
	o.statis(a, a.callee.packobj.ButtonContainerStatis, s, true, true);
	return o;
}
).internal(
function ButtonContainerStatis(s, c) {
	if (zetaret.global.packages.clockwork.ui.ButtonContainerStatis.statis.drag) s.drag = zetaret.global.packages.clockwork.utils.ControlUtils.configDrag;
});
ProtoSS.staticProps(zetaret.global.packages.clockwork.ui.ButtonContainerStatis, {
statis: {
	drag: true
}
});