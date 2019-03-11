window.package("zetaret.global.packages.clockwork.controllers").internal(
function InteractionController() {
	var o = this,
		a = arguments;
	o.controllerId = "interaction";
	o.interactiveContext = null;
	o.interactiveMediator = null;
	o.interactiveMap = {};
	o.interactiveVars = {};
	o.interactivePointers = {};
	o.TYPES = null;
	o.pathTypes = [];
	o.ctxrenderer = null;
	o.interactCount = 0;
	o.interactIDKey = "__interactid";
	o.idradix = 36;
	o.idlength = 8;
	o.idaffix = ":";
	o.pixelTestBlend = "source-in";
	o.pixelMaskColor = "#FFFF00";
	o.pixelTestColor = "#AA00AA";
	o.pixelTestSize = 2;
	o.pixelSearchInt = 0xAA;
	o.useSetPixels = false;
	o.useSearchPixels = false;
	o.autoRevertBlend = false;
	o.autoClean = true;
	o.splitSearch = 10;
	o.interlace = false;
	o.drawDebug = false;
	o.drawDebugFill = "#FF0000";
	o.debugChannel = 0;
	o.debugPixel = 0xff;
	o.pixelTest = false;
	o.allowStrokeTest = false;
	o.requireClean = false;
	o.computeTransform = false;
	o.super(a, true);
	var m = {};
	m.initInteractiveMediator = function() {
		var ccm = new zetaret.global.packages.clockwork.mediators.GraphicContext2DMediator();
		ccm.setContextRenderer(o.ctxrenderer).
		configureContext(o.interactiveContext);
		o.interactiveMediator = ccm;
		return o;
	};
	m.configPathTypes = function() {
		var pt = o.pathTypes,
			t = o.TYPES;
		pt.push(t.MOVE_TO);
		pt.push(t.LINE_TO);
		pt.push(t.CURVE_TO);
		pt.push(t.CUBIC_CURVE_TO);
		pt.push(t.PATH);
		pt.push(t.CLOSE_PATH);
		pt.push(t.RECT);
		pt.push(t.ELLIPSE);
		pt.push(t.ARC);
		pt.push(t.ARC_TO);
		if (o.allowStrokeTest) {
			pt.push(t.LINE);
			pt.push(t.STROKE);
		}
		return o;
	};
	m.clearPathTypes = function() {
		o.pathTypes = [];
		return o;
	};
	m.setContextRenderer = function(ctxrenderer) {
		o.ctxrenderer = ctxrenderer;
		return o;
	};
	m.setInteractiveContext = function(ctx) {
		o.interactiveContext = ctx;
		return o;
	};
	m.clearInteractiveContext = function() {
		var ctx = o.interactiveContext;
		o.requireClean = false;
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		if (!o.ctxrenderer.clearColor) {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		} else {
			ctx.fillStyle = o.ctxrenderer.clearColor;
			ctx.globalAlpha = 1;
			ctx.globalCompositeOperation = o.ctxrenderer.defaultBlend;
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		}
		return o;
	};
	m.setInteractID = function(dobj, vars, pointers) {
		var id = dobj[o.interactIDKey] || (o.rndstr(o.idlength) + o.idaffix + (o.interactCount++).toString(o.idradix));
		dobj[o.interactIDKey] = id;
		dobj.cachetransforms = true;
		if (vars) o.interactiveVars[id] = vars;
		if (pointers) o.interactivePointers[id] = pointers;
		return id;
	};
	m.unsetInteractID = function(dobj) {
		delete dobj[o.interactIDKey];
		return o;
	};
	m.getInteractMap = function(dobj) {
		return o.interactiveVars[dobj[o.interactIDKey]];
	};
	m.getInteractVar = function(dobj, key) {
		return o.interactiveVars[dobj[o.interactIDKey]][key];
	};
	m.setInteractiveMap = function(iid, path) {
		o.interactiveMap[iid] = path;
		return o;
	};
	m.unsetInteractiveMap = function(iid, vars, pointers) {
		delete o.interactiveMap[iid];
		if (vars) delete o.interactiveVars[iid];
		if (pointers) delete o.interactivePointers[iid];
		return o;
	};
	m.updateInteractId = function(dobj, vars) {
		var map = o.interactiveVars[dobj[o.interactIDKey]],
			k;
		if (!map || !vars) return false;
		for (k in vars) map[k] = vars[k];
		return true;
	};
	m.hitTestPoint = function(dobj, x, y, mapped, tm) {
		var ctx = o.interactiveContext,
			ctxr = o.ctxrenderer,
			found = false,
			cid, skip = false,
			debug = o.drawDebug,
			debugFill = o.drawDebugFill,
			clspth = o.TYPES.CLOSE_PATH,
			strk = o.TYPES.STROKE,
			path = mapped ? o.interactiveMap[dobj[o.interactIDKey]] : null,
			dbgc = o.debugChannel,
			dbgpx = o.debugPixel;
		if (!path) path = dobj.graphics ? dobj.graphics.filterGraphicsData(o.pathTypes, true) : null;
		if (path) {
			if (o.autoClean && o.requireClean) o.clearInteractiveContext();
			if (mapped) o.interactiveMap[dobj[o.interactIDKey]] = path;
			if (!tm) tm = o.computeTransform ? dobj.getStageTransform(true).t : dobj.cachedtransform || dobj.transform;
			ctx.setTransform.apply(ctx, tm);
			var pl = path.length,
				il = ctxr.intlookup,
				i, s = ctxr.setters,
				c, cm;
			if (debug) {
				o.requireClean = true;
				ctx.fillStyle = debugFill;
			}
			for (i = 0; i < pl; i++) {
				c = path[i];
				cid = c[0];
				if (cid === strk) {
					if (!debug) skip = true;
					else ctx.strokeStyle = debugFill;
				}
				if (!skip) {
					cm = il[cid];
					if (!s[cm]) ctx[cm].apply(ctx, c[1]);
					else ctx[cm] = c[1];
				}
				if (cid === clspth) {
					if (debug) ctx.fill();
					try {
						if (ctx.isPointInPath(x, y)) {
							found = true;
							break;
						}
					} catch (e) {}
				} else if (cid === strk) {
					try {
						if ((ctx.isPointInStroke && ctx.isPointInStroke(x, y)) || (debug && !ctx.isPointInStroke && ctx.getImageData(x, y, 1, 1).data[dbgc] == dbgpx)) {
							found = true;
							break;
						}
					} catch (e) {}
				}
				skip = false;
			}
			if (debug && o.pixelTest && ctx.getImageData(x, y, 1, 1).data[dbgc] == dbgpx) found = true;
		}
		return found;
	};
	m.hitTestObject = function(dobj, dobj2, mapped) {
		var ctx = o.interactiveContext,
			ctxr = o.ctxrenderer,
			path1 = mapped ? o.interactiveMap[dobj[o.interactIDKey]] : null,
			path2 = mapped ? o.interactiveMap[dobj2[o.interactIDKey]] : null;
		if (!path1) path1 = dobj.graphics ? dobj.graphics.filterGraphicsData(o.pathTypes, true) : null;
		if (!path2) path2 = dobj2.graphics ? dobj2.graphics.filterGraphicsData(o.pathTypes, true) : null;
		if (path1 && path2) {
			if (o.autoClean) o.clearInteractiveContext();

			if (mapped) o.interactiveMap[dobj[o.interactIDKey]] = path1;
			if (mapped) o.interactiveMap[dobj2[o.interactIDKey]] = path2;

			ctx.setTransform.apply(ctx, dobj.cachedtransform || dobj.transform);
			var pl = path1.length,
				il = ctxr.intlookup,
				i, s = ctxr.setters,
				c, cm;
			ctx.fillStyle = o.pixelMaskColor;
			for (i = 0; i < pl; i++) {
				c = path1[i];
				cm = il[c[0]];
				if (!s[cm]) ctx[cm].apply(ctx, c[1]);
				else ctx[cm] = c[1];
			}
			ctx.fill();
			ctx.globalCompositeOperation = o.pixelTestBlend;

			ctx.setTransform.apply(ctx, dobj2.cachedtransform || dobj2.transform);
			pl = path2.length;
			ctx.fillStyle = o.pixelTestColor;
			for (i = 0; i < pl; i++) {
				c = path2[i];
				cm = il[c[0]];
				if (!s[cm]) ctx[cm].apply(ctx, c[1]);
				else ctx[cm] = c[1];
			}
			ctx.fill();

			var maxsearch = ctx.canvas.height,
				splitSearch = o.interlace ? o.splitSearch : maxsearch,
				searchOffset = 0,
				ctxdata, cdl, found = false,
				sp = o.useSearchPixels,
				spi = o.pixelSearchInt;
			if (o.useSetPixels) {
				ctxdata = new Set(ctx.getImageData(0, searchOffset, ctx.canvas.width, maxsearch).data);
				found = ctxdata.size > o.pixelTestSize;
				if (found && sp) found = ctxdata.has(spi);
			} else {
				while (searchOffset < maxsearch) {
					ctxdata = ctx.getImageData(0, searchOffset, ctx.canvas.width, splitSearch).data;
					if (!sp) {
						cdl = ctxdata.length;
						for (i = 0; i < cdl; i += 4) {
							if (ctxdata[i]) {
								found = true;
								break;
							}
						}
					} else {
						found = ctxdata.indexOf(spi) >= 0;
					}
					if (found) break;
					searchOffset += splitSearch;
				}
			}
			if (o.autoRevertBlend) ctx.globalCompositeOperation = o.ctxrenderer.defaultBlend;
			o.requireClean = true;
			return found;
		}
		return false;
	};
	o.superize(a, m, true, true);
	return o;
});
