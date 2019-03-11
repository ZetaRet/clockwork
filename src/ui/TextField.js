window.package("zetaret.global.packages.clockwork.ui").internal(
function TextField() {
	var o = this,
		a = arguments;
	o.textColor = 0;
	o.textFont = "10px Arial";
	o.textAlpha = 1;
	o.text = "";
	o.isHtml = false;
	o.maxChars = -1;
	o.autoSize = false;
	o.multiline = false;
	o.wordWrap = false;
	o.textRuns = [];
	o.autoRenderText = false;
	o.textWidth = -1;
	o.textX = 0;
	o.textY = 0;
	o.textAlign = "left";
	o.textBaseline = "alphabetic";
	o.textDirection = "inherit";
	o.strokedText = false;
	o.backgroundColor = "white";
	o.backgroundBorder = "black";
	o.backgroundDraw = null;
	o.background = false;
	o.border = false;
	o.styleList = null;
	o.super(a, null);
	var m = {};
	m.setText = function(v) {
		o.text = v;
		o.isHtml = false;
		if (o.autoRenderText) o.renderText();
		return o;
	};
	m.setHtmlText = function(v) {
		o.text = v;
		o.isHtml = true;
		if (o.autoRenderText) o.renderText();
		return o;
	};
	m.setStyleList = function(list) {
		o.styleList = list;
		return o;
	};
	m.addStyle = function(style) {
		var i = o.styleList.indexOf(style);
		if (i === -1) o.styleList.push(style);
		return o;
	};
	m.removeStyle = function(style) {
		var i = o.styleList.indexOf(style);
		if (i >= 0) o.styleList.splice(i, 1);
		return o;
	};
	m.applyStyles = function() {
		var sl = o.styleList,
			i, l = sl.length;
		o.resetStyle();
		for (i = 0; i < l; i++) {
			o.setStyle(sl[i], true);
		}
		if (o.autoRenderText) o.renderText();
		return o;
	};
	m.setStyle = function(s, ignore) {
		if (s.color !== undefined) o.textColor = s.color;
		if (s.alpha !== undefined) o.textAlpha = s.alpha;
		if (s.font !== undefined) o.textFont = s.font;
		if (s.stroked !== undefined) o.strokedText = s.stroked;
		if (s.align !== undefined) o.textAlign = s.align;
		if (s.baseline !== undefined) o.textBaseline = s.baseline;
		if (s.direction !== undefined) o.textDirection = s.direction;
		if (s.width !== undefined) o.textWidth = s.width;
		if (s.x !== undefined) o.textX = s.x;
		if (s.y !== undefined) o.textY = s.y;
		if (s.bg !== undefined) o.background = s.bg;
		if (s.border !== undefined) o.border = s.border;
		if (s.bgDraw !== undefined) o.backgroundDraw = s.bgDraw;
		if (s.bgColor !== undefined) o.backgroundColor = s.bgColor;
		if (s.bgBorder !== undefined) o.backgroundBorder = s.bgBorder;
		if (s.autoRenderText !== undefined) o.autoRenderText = s.autoRenderText;
		if (!ignore && o.autoRenderText) o.renderText();
		return o;
	};
	m.resetStyle = function() {
		o.textColor = 0;
		o.textAlpha = 1;
		o.textFont = "10px Arial";
		o.strokedText = false;
		o.textAlign = "left";
		o.textBaseline = "alphabetic";
		o.textDirection = "inherit";
		o.textWidth = -1;
		o.textX = 0;
		o.textY = 0;
		o.background = false;
		o.border = false;
		o.backgroundDraw = null;
		o.backgroundColor = "white";
		o.backgroundBorder = "black";
		return o;
	};
	m.renderText = function() {
		var g = o.graphics || o.resetGraphics().graphics;
		g.clear();
		if (o.background) g.beginFill(o.backgroundColor, zetaret.global.packages.clockwork.ui.TextField.BG_ALPHA);
		if (o.border) o.lineStyle(zetaret.global.packages.clockwork.ui.TextField.BORDER_THICKNESS, o.backgroundBorder, zetaret.global.packages.clockwork.ui.TextField.BORDER_ALPHA);
		if (o.backgroundDraw) o.backgroundDraw.call(o, o.backgroundColor, o.backgroundBorder);
		else if (o.border || o.background) {
			g.drawRect2(o.textX, o.textY, o.width, o.height);
			if (o.background) g.endFill();
			if (o.border) g.stroke();
		}
		g.textStyle(o.textColor, o.textFont, o.textAlpha, o.strokedText, o.textAlign, o.textBaseline, o.textDirection);
		g.text(o.text, o.textX, o.textY, o.textWidth < 0 ? undefined : o.textWidth, o.strokedText);
		return o;
	};
	m.destruct = function() {
		if (o.graphics) {
			o.graphics.clear();
			o.graphics = null;
		}
		o.textRuns = null;
		o.styleList = null;
	};
	o.superize(a, m, true, true);
	return o;
});
ProtoSS.staticProps(zetaret.global.packages.clockwork.ui.TextField, {
BORDER_THICKNESS: 1,
BORDER_ALPHA: 1,
BG_ALPHA: 1
});