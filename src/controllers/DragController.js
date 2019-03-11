window.package("zetaret.global.packages.clockwork.controllers").internal(
function DragController() {
	var o = this,
		a = arguments;
	o.dragging = false;
	o.enabled = false;
	o.target = null;
	o.downHandler = null;
	o.dragHandler = null;
	o.upHandler = null;
	o.downArgs = null;
	o.dragArgs = null;
	o.upArgs = null;
	o.lastEvent = null;
	o.downEvent = null;
	o.moveEvent = null;
	o.upEvent = null;
	o.stage = null;
	o.useDocumentStage = true;
	o.mouseCapabilities = null;
	o.super(a, true);
	var m = {};
	m.setEnabled = function(value) {
		if (value != o.enabled) {
			o.enabled = value;
			if (value) o.target.addEventListener("mousedown", o.StartDragging);
			else o.UnsetupDragging();
		}
		return o;
	};
	m.init = function(target, downHandler, dragHandler, upHandler, downArgs, dragArgs, upArgs) {
		o.target = target;
		o.downHandler = downHandler;
		o.dragHandler = dragHandler;
		o.upHandler = upHandler;
		o.downArgs = downArgs;
		o.dragArgs = dragArgs;
		o.upArgs = upArgs;
		o.setEnabled(true);
		if (o.useDocumentStage) o.stage = document;
		return o;
	};
	m.StartDragging = function(event, d) {
		o.lastEvent = event;
		o.downEvent = event;
		o.InitDrag();
		return o;
	};
	m.StartDragging._p = 1;
	m.OnDragging = function(event, d) {
		var e = new zetaret.global.packages.clockwork.events.MouseEvent();
		e._capabilities = o.mouseCapabilities;
		e.type = event.type;
		e.eventPhase = ZetaRet_Event.CAPTURE_PHASE;
		e.setNativeEvent(event);
		o.lastEvent = e;
		o.moveEvent = e;
		o.Drag();
		return o;
	};
	m.OnDragging._p = 1;
	m.StopDragging = function(event, d) {
		var e = new zetaret.global.packages.clockwork.events.MouseEvent();
		e._capabilities = o.mouseCapabilities;
		e.type = event.type;
		e.eventPhase = ZetaRet_Event.CAPTURE_PHASE;
		e.setNativeEvent(event);
		o.upEvent = e;
		o.StopDrag();
		return o;
	};
	m.StopDragging._p = 1;
	m.UnsetupDragging = function() {
		o.lastEvent = null;
		if (!o.stage) o.stage = o.target.stage;
		if (o.stage) {
			o.stage.removeEventListener("mousemove", o.OnDragging);
			o.stage.removeEventListener("mouseup", o.StopDragging);
		}
		o.target.removeEventListener("mousedown", o.StartDragging);
		o.EndDrag();
		return o;
	};
	m.StartDrag = function() {
		if (o.dragging)
			return false;
		o.dragging = true;
		if (o.downHandler != null)
			o.downHandler.apply(o.target, o.downArgs);
		return true;
	};
	m.Drag = function() {
		if (!o.dragging)
			return false;
		if (o.dragHandler != null)
			o.dragHandler.apply(o.target, o.dragArgs);
		return true;
	};
	m.EndDrag = function() {
		if (!o.dragging)
			return false;
		o.dragging = false;
		if (o.upHandler != null)
			o.upHandler.apply(o.target, o.upArgs);
		return true;
	};
	m.InitDrag = function() {
		if (!o.stage) o.stage = o.target.stage;
		if (o.stage) {
			o.stage.addEventListener("mousemove", o.OnDragging);
			o.stage.addEventListener("mouseup", o.StopDragging);
			if (o.target.stage) {
				o.target.stage.renderer.context.canvas.addEventListener("mouseout", o.StopDragging);
				o.mouseCapabilities = o.target.stage.getController(zetaret.global.packages.clockwork.controllers.MouseController, true).mouseCapabilities;
			}
		}
		o.StartDrag();
	};
	m.StopDrag = function() {
		if (!o.stage) o.stage = o.target.stage;
		if (o.stage) {
			o.stage.removeEventListener("mousemove", o.OnDragging);
			o.stage.removeEventListener("mouseup", o.StopDragging);
			if (o.target.stage) {
				o.target.stage.renderer.context.canvas.removeEventListener("mouseout", o.StopDragging);
				o.mouseCapabilities = o.target.stage.getController(zetaret.global.packages.clockwork.controllers.MouseController, true).mouseCapabilities;
			}
		}
		o.EndDrag();
	};
	m.Setup = function() {
		o.setEnabled(true);
		return o;
	};
	m.Unsetup = function() {
		o.setEnabled(false);
		return o;
	};
	m.Destroy = function() {
		if (o.stage) {
			o.stage.removeEventListener("mousemove", o.OnDragging);
			o.stage.removeEventListener("mouseup", o.StopDragging);
			o.stage = null;
		}
		if (o.target) {
			o.target.removeEventListener("mousedown", o.StartDragging);
			if (o.target.stage) o.target.stage.renderer.context.canvas.removeEventListener("mouseout", o.StopDragging);
			o.target = null;
		}
		o.dragging = false;
		o.downHandler = null;
		o.dragHandler = null;
		o.upHandler = null;
		o.downArgs = null;
		o.dragArgs = null;
		o.upArgs = null;
		o.lastEvent = null;
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});
zetaret.global.packages.clockwork.controllers.DragController.prototype.resetddxy = function(scope) {
	if (!scope) scope = this;
	scope.dx = 0;
	scope.dy = 0;
	scope.ddx = scope.x;
	scope.ddy = scope.y;
};
zetaret.global.packages.clockwork.controllers.DragController.prototype.setdxy = function(scope) {
	if (!scope) scope = this;
	scope.dx = scope.x - scope.ddx;
	scope.dy = scope.y - scope.ddy;
};