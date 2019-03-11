window.package("zetaret.global.packages.clockwork.graphics").internal(
function Graphics() {
	var o = this,
		a = arguments;
	o.invalid = false;
	o.cachedIntArray = null;
	o.cachedDirect = null;
	o.direct = true;
	o.fillPath = true;
	o.autoStroke = true;
	o.autoFill = true;
	o.autoPath = true;
	o.autoOP = true;
	o.autoCacheGradients = false;
	o.gradientCacheId = null;
	o.gradientCache = null;
	o.graphicsMediator = null;
	o.commands = [];
	o.graphicsData = null;
	o.cacheMap = null;
	o.super(a, true);
	var m = {};
	m.enableGradientCache = function(id) {
		o.gradientCacheId = id;
		o.gradientCache = [];
		return o;
	};
	m.addCommand = function(command) {
		o.commands.push(command);
		return o;
	};
	m.updateLastCommand = function(p) {
		var c = o.commands[o.commands.length - 1];
		if (c) {
			for (var k in p) c[k] = p[k];
		}
		return o;
	};
	m.getCommand = function(type, startIndex) {
		var c = o.commands,
			l = c.length,
			cc;
		if (!startIndex) startIndex = 0;
		for (var i = startIndex; i < l; i++) {
			cc = c[i];
			if (cc.is(type)) {
				return cc;
			}
		}
		return null;
	};
	m.copyFrom = function(graphics) {
		o.commands = o.commands.concat(graphics.commands);
		return o;
	};
	m.beginBitmapFill = function(bitmap, matrix, repeat, smooth, alpha) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicBitmapFill();
		c.bitmapData = bitmap;
		if (matrix !== undefined) c.matrix = matrix;
		c.repeat = repeat || zetaret.global.packages.clockwork.graphics.GraphicBitmapFill.REPEAT;
		if (smooth !== undefined) c.smooth = smooth;
		if (alpha !== undefined) c.alpha = alpha;
		o.commands.push(c);
		return o;
	};
	m.beginFill = function(color, alpha) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicFill();
		c.color = color;
		if (alpha !== undefined) c.alpha = alpha;
		o.commands.push(c);
		return o;
	};
	m.beginGradientFill = function(type, gradient, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio, alpha) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicGradientFill();
		if (o.gradientCache) {
			c.gid = o.gradientCacheId ? (o.gradientCacheId + o.gradientCache.length) : true;
			o.gradientCache.push(c);
		}
		c.type = type;
		c.gradient = gradient;
		c.colors = colors;
		c.alphas = alphas;
		c.ratios = ratios;
		if (alpha !== undefined) c.alpha = alpha;
		if (matrix !== undefined) c.matrix = matrix;
		if (spreadMethod !== undefined) c.spreadMethod = spreadMethod;
		if (interpolationMethod !== undefined) c.interpolationMethod = interpolationMethod;
		if (focalPointRatio !== undefined) c.focalPointRatio = focalPointRatio;
		o.commands.push(c);
		return o;
	};
	m.beginPath = function() {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY;
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.PATH;
		o.commands.push(c);
		return o;
	};
	m.endPath = function() {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY;
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.CLOSE_PATH;
		o.commands.push(c);
		return o;
	};
	m.strokePath = function() {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY;
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.CLOSE_PATH;
		o.commands.push(c);
		c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY;
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.STROKE;
		o.commands.push(c);
		return o;
	};
	m.stroke = function() {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY;
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.STROKE;
		o.commands.push(c);
		return o;
	};
	m.arc = function(x, y, r, startAngle, endAngle, anticlockwise) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = [x, y, r, startAngle, endAngle, anticlockwise];
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.ARC;
		o.commands.push(c);
		return o;
	};
	m.arcTo = function(x1, y1, x2, y2, r) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = [x1, y1, x2, y2, r];
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.ARC_TO;
		o.commands.push(c);
		return o;
	};
	m.cubicCurveTo = function(cx1, cy1, cx2, cy2, ax, ay) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = [cx1, cy1, cx2, cy2, ax, ay];
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.CUBIC_CURVE_TO;
		o.commands.push(c);
		return o;
	};
	m.curveTo = function(cx, cy, ax, ay) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = [cx, cy, ax, ay];
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.CURVE_TO;
		o.commands.push(c);
		return o;
	};
	m.drawCircle = function(cx, cy, radius) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicPath();
		c.arc(cx, cy, radius, 0, 2 * Math.PI, false);
		o.commands.push(c);
		return o;
	};
	m.drawEllipse = function(x, y, width, height, rx, ry) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicPath();
		var kappa = 4 * (Math.sqrt(2) - 1) / 3,
			ox = (width / 2) * kappa * (rx || 1),
			oy = (height / 2) * kappa * (ry || 1),
			xe = x + width,
			ye = y + height,
			xm = x + width / 2,
			ym = y + height / 2;
		c.moveTo(x, ym);
		c.cubicCurveTo(x, ym - oy, xm - ox, y, xm, y);
		c.cubicCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
		c.cubicCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
		c.cubicCurveTo(xm - ox, ye, x, ym + oy, x, ym);
		o.commands.push(c);
		return o;
	};
	m.drawEllipse2 = function(x, y, rx, ry, rotation, startAngle, endAngle, anticlockwise) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicPath();
		c.ellipse(x, y, rx, ry, rotation, startAngle, endAngle, anticlockwise);
		o.commands.push(c);
		return o;
	};
	m.drawGraphicsData = function(graphicsData) {
		o.commands = o.commands.concat(graphicsData);
		return o;
	};
	m.drawPath = function(commands, data, winding) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicPath();
		c.commands = commands;
		if (data !== undefined) c.data = data;
		if (winding !== undefined) c.winding = winding;
		o.commands.push(c);
		return o;
	};
	m.drawRect = function(x, y, width, height) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicPath();
		c.moveTo(x, y);
		c.lineTo(x + width, y);
		c.lineTo(x + width, y + height);
		c.lineTo(x, y + height);
		c.lineTo(x, y);
		o.commands.push(c);
		return o;
	};
	m.drawRect2 = function(x, y, width, height) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicPath();
		c.rect(x, y, width, height);
		o.commands.push(c);
		return o;
	};
	m.drawRoundRect = function(x, y, width, height, rtl, rtr, rbl, rbr) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicPath();
		if (!rtl) rtl = 0;
		if (!rtr) rtr = 0;
		if (!rbl) rbl = 0;
		if (!rbr) rbr = 0;
		c.moveTo(x + rtl, y);
		c.lineTo(x + width - rtr, y);
		c.curveTo(x + width, y, x + width, y + rtr);
		c.lineTo(x + width, y + height - rtr);
		c.curveTo(x + width, y + height, x + width - rbr, y + height);
		c.lineTo(x + rbl, y + height);
		c.curveTo(x, y + height, x, y + height - rbl);
		c.lineTo(x, y + rtl);
		c.curveTo(x, y, x + rtl, y);
		o.commands.push(c);
		return o;
	};
	m.drawRoundRect2 = function(x, y, width, height, rtl, rtr, rbl, rbr) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicPath();
		if (!rtl) rtl = 0;
		if (!rtr) rtr = 0;
		if (!rbl) rbl = 0;
		if (!rbr) rbr = 0;
		c.moveTo(x + rtl, y);
		c.arcTo(x + width, y, x + width, y + height, rtl);
		c.arcTo(x + width, y + height, x, y + height, rtr);
		c.arcTo(x, y + height, x, y, rbl);
		c.arcTo(x, y, x + width, y, rbr);
		o.commands.push(c);
		return o;
	};
	m.drawOuterRect = function(x, y, w, h, s) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicPath();
		c.moveTo(x + s, y + s);
		c.lineTo(x + w - s, y + s);
		c.lineTo(x + w - s, y + h - s);
		c.lineTo(x + s, y + h - s);
		c.lineTo(x, y + h);
		c.lineTo(x + w, y + h);
		c.lineTo(x + w, y);
		c.lineTo(x, y);
		c.lineTo(x, y + h);
		c.lineTo(x + s, y + h - s);
		o.commands.push(c);
		return o;
	};
	m.drawOuterArc = function(hs, x, y, r, startAngle, endAngle, anticlockwise) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicPath(),
			r1 = r - hs,
			r2 = r + hs;
		c.arc(x, y, r1, startAngle, endAngle, anticlockwise);
		c.arc(x, y, r2, endAngle, startAngle, !anticlockwise ? true : false);
		o.commands.push(c);
		return o;
	};
	m.dropShadow = function(color, blur, offsetX, offsetY, composite) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = [color, blur, offsetX, offsetY, composite];
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.SHADOW;
		o.commands.push(c);
		return o;
	};
	m.setComposite = function(alpha, blend) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = [alpha, blend];
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.COMPOSITE;
		o.commands.push(c);
		return o;
	};
	m.drawMask = function() {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY;
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.CLIP;
		o.commands.push(c);
		return o;
	};
	m.drawLayer = function() {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY;
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.SAVE;
		o.commands.push(c);
		return o;
	};
	m.drawRestore = function() {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY;
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.RESTORE;
		o.commands.push(c);
		return o;
	};
	m.drawRadient = function(x, y, r, colors, facet, stroke, offset, circum, gdata, gradienth, pathh, alpha, ldata, edata) {
		if (!facet) facet = 0;
		facet++;
		if (!circum) circum = 2 * Math.PI;
		var cl = colors.length,
			radiance = cl * facet,
			phase = circum / radiance,
			endphase,
			start = (offset || 0) * Math.PI / 180,
			xs, xe, ys, ye, i, j, radianceError,
			startColor, endColor, sr, sg, sb, er, eg, eb,
			gradient, gcolors, alphas, ratios, path,
			gtype, gspread, gintm, gmx, gfpr,
			lpxhint, lscale, ljoint, lmiter,
			r1 = r - stroke / 2,
			r2 = r + stroke / 2,
			useStroke = gdata && gdata.useStroke;
		radianceError = (edata ? edata.radianceError : null) || 0.5 * Math.PI / 180;
		gtype = (gdata ? gdata.type : null) || "linear";
		gspread = (gdata ? gdata.spreadMethod : null) || undefined;
		gintm = (gdata ? gdata.interpolationMethod : null) || undefined;
		gmx = (gdata ? gdata.matrix : null) || undefined;
		gfpr = (gdata ? gdata.focalPointRatio : null) || undefined;
		lpxhint = (ldata ? ldata.pixelHinting : null) || undefined;
		lscale = (ldata ? ldata.scaleMode : null) || undefined;
		ljoint = (ldata ? ldata.joints : null) || undefined;
		lmiter = (ldata ? ldata.miterLimit : null) || undefined;

		if (useStroke) o.lineStyle(stroke, "#000", alpha, lpxhint, lscale, ljoint, lmiter);

		for (i = 0; i < cl; i++) {
			startColor = colors[i];
			endColor = colors[(i + 1) % cl];
			sr = startColor >> 16 & 0xff;
			sg = startColor >> 8 & 0xff;
			sb = startColor & 0xff;
			er = endColor >> 16 & 0xff;
			eg = endColor >> 8 & 0xff;
			eb = endColor & 0xff;

			for (j = 0; j < facet; j++) {
				startColor = (sr + j * (er - sr) / facet) << 16 | (sg + j * (eg - sg) / facet) << 8 | (sb + j * (eb - sb) / facet);
				endColor = (sr + (j + 1) * (er - sr) / facet) << 16 | (sg + (j + 1) * (eg - sg) / facet) << 8 | (sb + (j + 1) * (eb - sb) / facet);

				path = new zetaret.global.packages.clockwork.graphics.GraphicPath();
				path.autoClose = true;
				path.closeAfter = true;
				endphase = start + (gdata && gdata.phaser ? gdata.phaser(i, j, start, phase, circum, radiance, facet, cl) : phase);
				if (gradienth) {
					gradient = gradienth(i, cl, j, facet, x, y, r, start, endphase, phase, radiance);
				} else {
					xs = x + Math.cos(start) * r;
					xe = x + Math.cos(endphase) * r;
					ys = y + Math.sin(start) * r;
					ye = y + Math.sin(endphase) * r;
					gradient = [xs, ys, xe, ye];
				}
				gcolors = [startColor, endColor];
				alphas = [1, 1];
				ratios = [0, 1];
				if (useStroke) o.lineGradientStyle(gtype, gradient, gcolors, alphas, ratios, gmx, gspread, gintm, gfpr, alpha);
				else o.beginGradientFill(gtype, gradient, gcolors, alphas, ratios, gmx, gspread, gintm, gfpr, alpha);
				if (pathh) pathh(path, x, y, r, start, endphase + radianceError, r1, r2, stroke);
				else {
					if (useStroke) path.arc(x, y, r, start, endphase + radianceError);
					else {
						path.arc(x, y, r1, start, endphase + radianceError);
						path.arc(x, y, r2, endphase + radianceError, start, true);
					}
				}
				o.commands.push(path);
				start = endphase;
			}
		}

		return o;
	};
	m.endFill = function(stroke, resetColor, resetColorTransform, resetStroke) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicEndFill();
		c.resetColorTransform = resetColorTransform;
		c.stroke = stroke;
		if (resetColor !== undefined) c.resetColor = resetColor;
		if (resetColorTransform !== undefined) c.resetColorTransform = resetColorTransform;
		if (resetStroke !== undefined) c.resetStroke = resetStroke;
		o.commands.push(c);
		return o;
	};
	m.lineBitmapStyle = function(bitmap, matrix, repeat, smooth, alpha) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicBitmapFill();
		c.bitmapData = bitmap;
		if (matrix !== undefined) c.matrix = matrix;
		if (repeat !== undefined) c.repeat = repeat;
		if (smooth !== undefined) c.smooth = smooth;
		if (alpha !== undefined) c.alpha = alpha;
		c.stroke = true;
		o.commands.push(c);
		return o;
	};
	m.lineGradientStyle = function(type, gradient, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio, alpha) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicGradientFill();
		if (o.gradientCache) {
			c.gid = o.gradientCacheId ? (o.gradientCacheId + o.gradientCache.length) : true;
			o.gradientCache.push(c);
		}
		c.type = type;
		c.gradient = gradient;
		c.colors = colors;
		c.alphas = alphas;
		c.ratios = ratios;
		if (alpha !== undefined) c.alpha = alpha;
		if (matrix !== undefined) c.matrix = matrix;
		if (spreadMethod !== undefined) c.spreadMethod = spreadMethod;
		if (interpolationMethod !== undefined) c.interpolationMethod = interpolationMethod;
		if (focalPointRatio !== undefined) c.focalPointRatio = focalPointRatio;
		c.stroke = true;
		o.commands.push(c);
		return o;
	};
	m.lineStyle = function(thickness, color, alpha, pixelHinting, scaleMode, caps, joints, miterLimit) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicStroke();
		c.thickness = thickness;
		c.color = color;
		if (alpha !== undefined) c.alpha = alpha;
		if (pixelHinting !== undefined) c.pixelHinting = pixelHinting;
		if (scaleMode !== undefined) c.scaleMode = scaleMode;
		if (caps !== undefined) c.caps = caps;
		if (joints !== undefined) c.joints = joints;
		if (miterLimit !== undefined) c.miterLimit = miterLimit;
		o.commands.push(c);
		return o;
	};
	m.lineTo = function(x, y) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = [x, y];
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.LINE_TO;
		o.commands.push(c);
		return o;
	};
	m.moveTo = function(x, y) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = [x, y];
		c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.MOVE_TO;
		o.commands.push(c);
		return o;
	};
	m.textStyle = function(color, font, alpha, stroke, align, baseline, direction) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicText();
		c.color = color;
		if (font !== undefined) c.font = font;
		if (alpha !== undefined) c.alpha = alpha;
		if (stroke !== undefined) c.stroke = stroke;
		if (align !== undefined) c.textAlign = align;
		if (baseline !== undefined) c.textBaseline = baseline;
		if (direction !== undefined) c.direction = direction;
		o.commands.push(c);
		return o;
	};
	m.text = function(data, x, y, width, stroke) {
		var c = new zetaret.global.packages.clockwork.graphics.GraphicData();
		c.data = [data, x, y, width];
		if (stroke) c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.STROKE_TEXT;
		else c.command = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.FILL_TEXT;
		o.commands.push(c);
		return o;
	};
	m.readCustomCommand = function(c) {
		return c;
	};
	m.readGraphicsData = function(cached) {
		if (cached && o.graphicsData) return o.graphicsData;

		var data = [],
			cs = o.commands,
			cl = cs.length,
			c, d, i;
		var oPath = false,
			rPath = false,
			cPath = false,
			stroke = false,
			fill = false,
			concatd = false,
			autoclose = false,
			closeafter = false;

		for (i = 0; i < cl; i++) {
			c = cs[i];
			if (c.is(zetaret.global.packages.clockwork.graphics.GraphicData)) {
				d = [c.command, c.data];
				data.push(d);
				if (c.command === zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.CLOSE_PATH && oPath && o.autoPath) {
					oPath = false;
					if (fill && o.autoFill) {
						fill = false;
						data.push([zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.END_FILL, zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY]);
					}
					if (stroke && o.autoStroke) {
						stroke = false;
						data.push([zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.STROKE, zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY]);
					}
				} else if (c.command === zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.PATH) {
					oPath = true;
				} else if (c.command === zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.STROKE) {
					stroke = false;
				} else if (c.command === zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.END_FILL) {
					fill = false;
				}
			} else if (c.is(zetaret.global.packages.clockwork.graphics.GraphicPath)) {
				if (o.autoPath) rPath = true;
				d = c.toCommandData();
				concatd = true;
				autoclose = c.autoClose;
				closeafter = c.closeAfter;
			} else if (c.is(zetaret.global.packages.clockwork.graphics.GraphicFill)) {
				d = c.toCommandData();
				data.push(d);
				if (o.fillPath || o.autoPath) rPath = true;
				fill = true;
			} else if (c.is(zetaret.global.packages.clockwork.graphics.GraphicEndFill) || c.is(zetaret.global.packages.clockwork.graphics.GraphicSolidFill) || c.is(zetaret.global.packages
					.clockwork.graphics.GraphicShaderFill)) {
				if (o.fillPath || o.autoPath) cPath = true;
				d = c.toCommandData();
				concatd = true;
				fill = false;
				if (c.stroke) stroke = false;
			} else if (c.is(zetaret.global.packages.clockwork.graphics.GraphicStroke)) {
				d = c.toCommandData();
				data.push(d);
				if (o.autoPath) rPath = true;
				stroke = true;
			} else if (c.is(zetaret.global.packages.clockwork.graphics.GraphicBitmapFill)) {
				d = c.toCommandData();
				data.push(d);
				if (o.fillPath || o.autoPath) rPath = true;
				if (c.stroke) stroke = true;
				else fill = true;
			} else if (c.is(zetaret.global.packages.clockwork.graphics.GraphicGradientFill)) {
				c.computeGradient();
				d = c.toCommandData();
				data.push(d);
				if (o.fillPath || o.autoPath) rPath = true;
				if (c.stroke) stroke = true;
				else fill = true;
			} else if (c.is(zetaret.global.packages.clockwork.graphics.GraphicText)) {
				d = c.toCommandData();
				data.push(d);
			} else {
				d = o.readCustomCommand(c);
				data = data.concat(d);
			}

			if (rPath) {
				if (!oPath) data.push([zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.PATH, zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY]);
				oPath = true;
				rPath = false;
			} else if (cPath) {
				if (oPath) data.push([zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.CLOSE_PATH, zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY]);
				oPath = false;
				cPath = false;
			}
			if (concatd) {
				concatd = false;
				data = data.concat(d);
			}
			if (autoclose && oPath && o.autoPath) {
				autoclose = false;
				oPath = false;
				if (!closeafter) data.push([zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.CLOSE_PATH, zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY]);
				if (fill && o.autoFill) {
					fill = false;
					data.push([zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.END_FILL, zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY]);
				}
				if (stroke && o.autoStroke) {
					stroke = false;
					data.push([zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.STROKE, zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY]);
				}
				if (closeafter) data.push([zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.CLOSE_PATH, zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY]);

			}
		}
		if (oPath && o.autoPath) {
			data.push([zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.CLOSE_PATH, zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY]);
			if (fill && o.autoFill) data.push([zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.END_FILL, zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY]);
			if (stroke && o.autoStroke) data.push([zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.STROKE, zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY]);
		}
		if (o.autoOP) {
			data.push([zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES.NO_OP, zetaret.global.packages.clockwork.graphics.Graphics.EMPTY_ARRAY]);
		}
		o.graphicsData = data;
		return data;
	};
	m.toIntArray = function(ctxrenderer) {
		if (o.cachedIntArray) return o.cachedIntArray;
		var a = [],
			grd = o.readGraphicsData(true),
			l = grd.length,
			c, i;
		for (i = 0; i < l; i++) {
			c = grd[i];
			a.push(1 + c[1].length);
			a.push(c[0]);
			a = a.concat(c[1]);
		}
		o.cachedIntArray = a;
		return a;
	};
	m.toDirect = function(ctxrenderer) {
		if (o.cachedDirect) return o.cachedDirect;
		var a = [],
			grd = o.readGraphicsData(true),
			l = grd.length,
			c, il = ctxrenderer.intlookup,
			i;
		for (i = 0; i < l; i++) {
			c = grd[i];
			a.push(il[c[0]]);
			a.push(c[1]);
		}
		o.cachedDirect = a;
		return a;
	};
	m.filterGraphicsData = function(types, cached) {
		var f = [],
			grd = o.readGraphicsData(true),
			l = grd.length,
			c, i, cid, cm = o.cacheMap;
		if (cached) {
			cid = types.join(',');
			if (!cm) {
				cm = {};
				o.cacheMap = cm;
			}
			if (cm[cid]) return cm[cid];
			cm[cid] = f;
		}
		for (i = 0; i < l; i++) {
			c = grd[i];
			if (types.indexOf(c[0]) >= 0)
				f.push(c);
		}
		return f;
	};
	m.getGraphicsDimensions = function() {
		var pt = [],
			t = zetaret.global.packages.clockwork.graphics.GraphicCommand.TYPES,
			c, cid, minx = 0,
			miny = 0,
			maxx = 0,
			maxy = 0,
			x, y, w, h, start,
			grd, i, l, ar;

		pt.push(t.MOVE_TO);
		pt.push(t.LINE_TO);
		pt.push(t.CURVE_TO);
		pt.push(t.CUBIC_CURVE_TO);
		pt.push(t.RECT);
		pt.push(t.FILL_RECT);
		pt.push(t.ELLIPSE);
		pt.push(t.ARC);
		pt.push(t.ARC_TO);

		grd = o.filterGraphicsData(pt);
		l = grd.length;

		for (i = 0; i < l; i++) {
			c = grd[i];
			cid = c[0];
			ar = c[1];
			w = 0;
			h = 0;
			switch (cid) {
				case t.MOVE_TO:
				case t.LINE_TO:
					x = ar[0];
					y = ar[1];
					break;
				case t.CURVE_TO:
					x = ar[2];
					y = ar[3];
					break;
				case t.CUBIC_CURVE_TO:
					x = ar[4];
					y = ar[5];
					break;
				case t.RECT:
				case t.FILL_RECT:
					x = ar[0];
					y = ar[1];
					w = ar[2];
					h = ar[3];
					break;
				case t.ELLIPSE:
					x = ar[0] - ar[2];
					y = ar[1] - ar[3];
					w = ar[0] + ar[2];
					h = ar[1] + ar[3];
					break;
				case t.ARC:
					x = ar[0] - ar[2];
					y = ar[1] - ar[2];
					w = ar[0] + ar[2];
					h = ar[1] + ar[2];
					break;
				case t.ARC_TO:
					if (ar[0] < ar[2]) {
						x = ar[0];
						w = ar[2] - ar[0];
					} else {
						x = ar[2];
						w = ar[0] - ar[2];
					}
					if (ar[1] < ar[3]) {
						y = ar[1];
						h = ar[3] - ar[1];
					} else {
						y = ar[3];
						h = ar[1] - ar[3];
					}
					break;
			}
			if (!start) {
				start = true;
				minx = x;
				maxx = x + w;
				miny = y;
				maxy = y + h;
			} else {
				if (x < minx) minx = x;
				if (y < miny) miny = y;
				if (maxx < (x + w)) maxx = x + w;
				if (maxy < (y + h)) maxy = y + h;
			}
		}

		return [minx, miny, maxx, maxy, Math.abs(maxx - minx), Math.abs(maxy - miny)];
	};
	m.clearCache = function() {
		o.cachedIntArray = null;
		o.cachedDirect = null;
		o.cacheMap = null;
		if (o.gradientCacheId) o.clearGradientCache();
		return o;
	};
	m.clearGradientCache = function() {
		var gc = o.gradientCache,
			gm = o.graphicsMediator,
			gmgc = gm ? gm.gradientCache : null,
			gcl = gc ? gc.length : 0;
		if (gcl && gmgc) {
			while (gcl--) {
				if (gc[gcl].gid) delete gmgc[gc[gcl].gid];
			}
			o.gradientCache = [];
		}
		o.graphicsMediator = null;
		return o;
	};
	m.clearGraphicsData = function() {
		o.graphicsData = null;
		return o;
	};
	m.clear = function() {
		o.commands = [];
		o.invalid = false;
		o.cachedIntArray = null;
		o.cachedDirect = null;
		o.cacheMap = null;
		o.graphicsData = null;
		if (o.gradientCacheId) o.clearGradientCache();
		return o;
	};
	m.invalidate = function() {
		o.invalid = true;
		return o;
	};
	m.clone = function() {
		var c = new o.constructor();
		c.invalid = o.invalid;
		if (o.cachedIntArray) c.cachedIntArray = o.cachedIntArray.concat();
		if (o.cachedDirect) c.cachedDirect = o.cachedDirect.concat();
		if (o.graphicsData) c.graphicsData = o.graphicsData.concat();
		c.direct = o.direct;
		c.commands = o.commands.concat();
		c.fillPath = o.fillPath;
		c.autoStroke = o.autoStroke;
		c.autoFill = o.autoFill;
		c.autoPath = o.autoPath;
		c.autoOP = o.autoOP;
		return c;
	};
	o.superize(a, m, true, true);
	return o;
});
ProtoSS.staticProps(zetaret.global.packages.clockwork.graphics.Graphics, {
EMPTY_ARRAY: []
});