window.package("zetaret.global.packages.clockwork.ui").internal(
function FlawlessButton() {
	var o = this,
		a = arguments;
	o.bgshadow = null;
	o.bg = null;
	o.cachesuf = "";
	o.cacheid = "flawlessbtn";
	o.shadowcacheid = "flawlessbtnshadow";
	o.normalGradient = null;
	o.normalLineGradient = null;
	o.normalTextColor = null;
	o.normalTextFont = null;
	o.overGradient = null;
	o.overLineGradient = null;
	o.overTextColor = null;
	o.overTextFont = null;
	o.downGradient = null;
	o.downLineGradient = null;
	o.downTextColor = null;
	o.downTextFont = null;
	o.text = "";
	o.textYOffset = 5;
	o.textXOffset = 0;
	o.textDownYOffset = 1;
	o.textDownXOffset = 1;
	o.textOverYOffset = 0;
	o.textOverXOffset = 0;
	o.strokeSize = 1;
	o.borderTL = 4;
	o.borderTR = 4;
	o.borderBL = 4;
	o.borderBR = 4;
	o.shadowBlur = 4;
	o.shadowOffsetX = 2;
	o.shadowOffsetY = 2;
	o.shadowFill = "black";
	o.shadowBlend = "black";
	o.shadowAlpha = 0.6;
	o.super(a, null);
	var m = {};
	m.renderNormal = function() {
		var w = o.width,
			h = o.height;
		o.bg.graphics.clear().beginGradientFill("linear", [0, 0, 0, h], o.normalGradient, null, [0, 1])
			.drawRoundRect(0, 0, w, h, o.borderTL, o.borderTR, o.borderBL, o.borderBR).endFill()
			.lineStyle(o.strokeSize, "white").lineGradientStyle("linear", [0, 0, 0, h], o.normalLineGradient, null, [0, 1])
			.drawRoundRect(o.strokeSize, o.strokeSize, w - 2 * o.strokeSize, h - 2 * o.strokeSize, o.borderTL - o.strokeSize, o.borderTR - o.strokeSize, o.borderBL - o.strokeSize, o.borderBR -
				o.strokeSize).stroke()
			.textStyle(o.normalTextColor, o.normalTextFont, 1, undefined, "center").text(o.text, Math.round(w / 2) + o.textXOffset, Math.round(h / 2) + o.textYOffset, w);
		var bgs = o.bgshadow;
		bgs.graphics.clear();
		bgs.visible = false;
		o.cacheRedraw = true;
		o.stage.invalidate = true;
	};
	m.renderOver = function() {
		var w = o.width,
			h = o.height;
		o.bg.graphics.clear().beginGradientFill("linear", [0, 0, 0, h], o.overGradient, null, [0, 1])
			.drawRoundRect(0, 0, w, h, o.borderTL, o.borderTR, o.borderBL, o.borderBR).endFill()
			.lineStyle(o.strokeSize, "white").lineGradientStyle("linear", [0, 0, 0, h], o.overLineGradient, null, [0, 1])
			.drawRoundRect(o.strokeSize, o.strokeSize, w - 2 * o.strokeSize, h - 2 * o.strokeSize, o.borderTL - o.strokeSize, o.borderTR - o.strokeSize, o.borderBL - o.strokeSize, o.borderBR -
				o.strokeSize).stroke()
			.textStyle(o.overTextColor, o.overTextFont || o.normalTextFont, 1, undefined, "center").text(o.text, Math.round(w / 2) + o.textXOffset + o.textOverXOffset, Math.round(h / 2) +
				o.textYOffset + o.textOverYOffset, w);
		var bgs = o.bgshadow;
		bgs.graphics.clear();
		bgs.visible = false;
		o.cacheRedraw = true;
		o.stage.invalidate = true;
	};
	m.renderDown = function() {
		var w = o.width,
			h = o.height;
		o.bg.graphics.clear().beginGradientFill("linear", [0, 0, 0, h], o.downGradient, null, [0, 1])
			.drawRoundRect(0, 0, w, h, o.borderTL, o.borderTR, o.borderBL, o.borderBR).endFill()
			.lineStyle(o.strokeSize, "white").lineGradientStyle("linear", [0, 0, 0, h], o.downLineGradient, null, [0, 1])
			.drawRoundRect(o.strokeSize, o.strokeSize, w - 2 * o.strokeSize, h - 2 * o.strokeSize, o.borderTL - o.strokeSize, o.borderTR - o.strokeSize, o.borderBL - o.strokeSize, o.borderBR -
				o.strokeSize).stroke()
			.textStyle(o.downTextColor, o.downTextFont || o.normalTextFont, 1, undefined, "center").text(o.text, Math.round(w / 2) + o.textXOffset + o.textDownXOffset, Math.round(h / 2) +
				o.textYOffset + o.textDownYOffset, w);
		var bgs = o.bgshadow;
		bgs.alpha = o.shadowAlpha;
		bgs.graphics.clear()
			.dropShadow(o.shadowBlend, o.shadowBlur, o.shadowOffsetX, o.shadowOffsetY, "source-out").beginFill(o.shadowFill, 1).drawRoundRect(0, 0, w, h, o.borderTL, o.borderTR, o.borderBL,
				o.borderBR).endFill();
		bgs.cacheRedraw = true;
		bgs.visible = true;
		o.cacheRedraw = true;
		o.stage.invalidate = true;
	};
	m.craft = function(width, height, style) {
		if (style) {
			for (var k in style) o[k] = style[k];
		}
		o.width = width;
		o.height = height;
		o.cachesuf = String(zetaret.global.packages.clockwork.ui.FlawlessButton.cache.ids++);
		o.setCache(o.cacheid + o.cachesuf, true, true);
		o.buttonMode().setInteraction();
		o.bg = o.addButtonShape("bg");
		o.bgshadow = o.addButtonShape("bgshadow", false, false, true, false, false).setCache(o.shadowcacheid + o.cachesuf, true, true);
		o.renderNormal();
		o.initListeners();
		return o;
	};
	m.mouseOver = function(e, stage) {
		if (!o.istate) {
			o.renderOver();
		}
	};
	m.mouseOver._p = 1;
	m.mouseOut = function(e, stage) {
		if (!o.istate) {
			o.renderNormal();
		}
	};
	m.mouseOut._p = 1;
	m.mouseDown = function(e, stage) {
		o.istate = "mdown";
		o.renderDown();
	};
	m.mouseDown._p = 1;
	m.mouseUp = function(e, stage) {
		o.istate = "";
		o.renderOver();
	};
	m.mouseUp._p = 1;
	m.mouseUpOutside = function(e, stage) {
		o.istate = "";
		o.renderNormal();
	};
	m.mouseUpOutside._p = 1;
	m.initListeners = function() {
		o.addEventListener("mouseover", o.mouseOver);
		o.addEventListener("mouseout", o.mouseOut);
		o.addEventListener("mousedown", o.mouseDown);
		o.addEventListener("mouseup", o.mouseUp);
		o.addEventListener("mouseupoutside", o.mouseUpOutside);
	};
	m.destruct = function() {
		o.events = {};
		if (o.inset) {
			if (o.inset.graphics) {
				o.inset.graphics.clear();
				o.inset.graphics = null;
			}
			o.inset = null;
		}
		if (o.bg) {
			if (o.bg.graphics) {
				o.bg.graphics.clear();
				o.bg.graphics = null;
			}
			o.bg = null;
		}
		if (o.stage) {
			o.stage.clearCacheContext(o.cacheLevel);
			o.stage.clearCacheContext(o.bgshadow.cacheLevel);
		}
	};
	o.superize(a, m, true, true);
	return o;
});
ProtoSS.staticProps(zetaret.global.packages.clockwork.ui.FlawlessButton, {
cache: {
	ids: 0
}
});