window.package("zetaret.global.packages.clockwork.ui").internal(
function HTMLElement() {
	var o = this,
		a = arguments;
	o.element = null;
	o.cachedStyle = {};
	o.ctxreset = true;
	o.pointer = false;
	o.zindex = true;
	o.transformPrefix = "";
	o.transformSuffix = "";
	o.transformX = "0%";
	o.transformY = "0%";
	o.transformZ = "0px";
	o.super(a, null);
	o.canrender = true;
	var m = {};
	m.createElement = function(tag) {
		o.element = document.createElement(tag);
		o.setStyle({
			display: "none"
		});
		o.addEventListener("addedToStage", o.onAddedToStage);
		o.addEventListener("removedFromStage", o.onRemovedFromStage);
		return o.element;
	};
	m.onAddedToStage = function(e, stage) {
		stage.htmlContainer.appendChild(o.element);
	};
	m.onAddedToStage._p = 1;
	m.onRemovedFromStage = function(e, stage) {
		o.removeElement();
	};
	m.onRemovedFromStage._p = 1;
	m.setAttribute = function(attributes) {
		var e = o.element,
			a;
		if (e.setAttribute) {
			for (a in attributes) {
				e.setAttribute(a, attributes[a]);
			}
		}
		return o;
	};
	m.setStyle = function(style) {
		var e = o.element,
			s;
		if (e.setStyle) {
			for (s in style) {
				if (o.cachedStyle[s] !== style[s]) {
					e.setStyle(s, style[s]);
					o.cachedStyle[s] = style[s];
				}
			}
		} else if (e.style) {
			for (s in style) {
				if (o.cachedStyle[s] !== style[s]) {
					e.style[s] = style[s];
					o.cachedStyle[s] = style[s];
				}
			}
		}
		return o;
	};
	m.removeElement = function() {
		var e = o.element;
		if (e) {
			if (e.parentNode) {
				try {
					e.parentNode.removeChild(e);
				} catch (e) {}
			}
		}
		o.cachedStyle = {};
		return e;
	};
	m.clearElement = function() {
		o.element = null;
		o.removeEventListener("addedToStage", o.onAddedToStage);
		o.removeEventListener("removedFromStage", o.onRemovedFromStage);
		return o;
	};
	m.render = function(stage, renderer, ctx, t, ct) {
		var alpha = ct[3] + ct[7] / 0xff,
			s;
		s = {
			"position": "absolute",
			"display": "block",
			"top": "0",
			"left": "0",
			"transform": o.transformPrefix + "matrix(" + t.join(',') + ")" + o.transformSuffix,
			"opacity": alpha,
			"transform-origin": o.transformX + " " + o.transformY + " " + o.transformZ
		};
		if (o.zindex) s["z-index"] = stage.renderIndex;
		if (!o.pointer) s["pointer-events"] = "none";
		o.setStyle(s);
		if (o.ctxreset) {
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.globalAlpha = 1;
			ctx.colortransform = null;
		}
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});