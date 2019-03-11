window.package("zetaret.global.packages.clockwork.context.c2d").internal(
function Canvas2DRenderer() {
	var o = this,
		a = arguments;
	o.clearColor = null;
	o.clearAlpha = 1;
	o.defaultBlend = "source-over";
	o.super(a, true);
	o.type = "2d";
	var m = {};
	m.clear = function() {
		var ctx = o.context;
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		if (o.clearColor) {
			ctx.fillStyle = o.clearColor;
			ctx.globalAlpha = o.clearAlpha;
			ctx.globalCompositeOperation = o.defaultBlend;
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		} else {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		}
		return o;
	};
	m.renderGraphics = function(graphics) {
		var d = graphics.readGraphicsData(true);
		o.renderGraphicData(d);
		return o;
	};
	m.renderGraphicData = function(gdata) {
		var dl = gdata.length,
			ctx = o.context,
			il = o.intlookup,
			i, s = o.setters,
			c, cm;
		for (i = 0; i < dl; i++) {
			c = gdata[i];
			cm = il[c[0]];
			if (!s[cm]) ctx[cm].apply(ctx, c[1]);
			else ctx[cm] = c[1];
		}
		return o;
	};
	o.superize(a, m, true, true);
	return o;
});
ProtoSS.staticProps(zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer, {
TYPES: {
NO_OP: "clearReset",
MOVE_TO: "moveTo",
LINE_TO: "lineTo",
CURVE_TO: "quadraticCurveTo",
TRANSFORM: "transform",
SET_TRANSFORM: "setTransform",
CUBIC_CURVE_TO: "bezierCurveTo",
PATH: "beginPath",
CLOSE_PATH: "closePath",
DASH: "setLineDash",
CLIP: "clip",
RESET_TRANSFORM: "resetTransform",
TRANSLATE: "translate",
SCALE: "scale",
ROTATE: "rotate",
SKEW: "skew",
FILL_RECT: "fillRect",
STROKE_RECT: "strokeRect",
CLEAR_RECT: "clearRect",
RECT: "rect",
ELLIPSE: "ellipse",
ARC: "arc",
ARC_TO: "arcTo",
BEGIN_FILL: "setFillStyle",
END_FILL: "fill",
STROKE: "stroke",
BITMAP_FILL: "createPattern",
GRADIENT_FILL: "createLinearGradient",
RADIAL_GRADIENT_FILL: "createRadialGradient",
SOLID_FILL: "setColor",
TEXT: "setTextStyle",
LINE: "setLineStyle",
SHADOW: "setShadowStyle",
FILL_TEXT: "fillText",
STROKE_TEXT: "strokeText",
IMAGE: "setImageStyle",
IMAGE_RECT: "drawImage",
COMPOSITE: "setComposite",
LINEAR_GRADIENT: "setLinearGradientStyle",
RADIAL_GRADIENT: "setRadialGradientStyle",
PATTERN: "setPatternStyle",
BLEND: "globalCompositeOperation",
FILTER: "filter",
ALPHA: "globalAlpha",
STYLE: "fillStyle",
CLEAR_STYLE: "clearStyle",
CLEAR_SHADOW: "clearShadow",
CLEAR_TEXT: "clearText",
CLEAR_STROKE: "clearStroke",
CLEAR_COLOR: "clearColor",
SAVE: "save",
RESTORE: "restore",
IMAGE_DATA: "putImageData",
IMAGE_DATA_FILTER: "filterImageData",
SHADER: "shaderFill",
SET_COLOR_TRANSFORM: "setColorTransform",
RESET_COLOR_TRANSFORM: "resetColorTransform",
RESET_COLOR: "resetColor",
RESET_STROKE: "resetStroke",
RESET_TEXT: "resetText",
RESET_SHADOW: "resetShadow"
}
});
