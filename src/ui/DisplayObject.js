window.package("zetaret.global.packages.clockwork.ui").internal(
function DisplayObject(at, act) {
	var o = this,
		a = arguments;
	o.name = undefined;
	o.x = 0;
	o.y = 0;
	o.sx = 1;
	o.sy = 1;
	o.rx = 0;
	o.ry = 0;
	o.skx = 0;
	o.sky = 0;
	o.sw = 1;
	o.sh = 1;
	o.skw = 1;
	o.skh = 1;
	o.width = 0;
	o.height = 0;
	o.transform = at || [1, 0, 0, 1, 0, 0];
	o.visible = true;
	o.alpha = 1;
	o.colortransform = act || [1, 1, 1, 1, 0, 0, 0, 0];
	o.blend = "";
	o.opaqueBackground = null;
	o.target = o;
	o.lists = null;
	o.invalidateTransform = false;
	o.forceSelfInvalidate = false;
	o.skipct = false;
	o.skipalpha = false;
	o.skipt = false;
	o.notransform = false;
	o.canrender = false;
	o.cacheLevel = null;
	o.cacheLevelData = null;
	o.cacheRedraw = false;
	o.cacheBox = false;
	o.localTransform = false;
	o.layer = false;
	o.stage = null;
	o.mask = null;
	o.cachetransforms = false;
	o.cachedtransform = null;
	o.cachedcolortransform = null;
	o.cachedbounds = null;
	o.super(a, null);
	var m = {};
	m.addToList = function(list, id) {
		if (!o.lists) o.lists = [];
		var l = o.lists,
			i = l.indexOf(list);
		if (i !== -1) l.splice(i, 1);
		l.push(list);
		if (id) l[id] = list;
		return o;
	};
	m.removeList = function(list, id) {
		if (!o.lists) return false;
		var l = o.lists,
			i = l.indexOf(list);
		if (i !== -1) {
			l.splice(i, 1);
			if (id && l[id]) delete l[id];
			return true;
		}
		return false;
	};
	m.setDisplayTarget = function(target) {
		o.target = target;
		return o;
	};
	m.syncDisplayTarget = function() {
		var t = o.target;
		if (o !== t) {
			var syncp = ["transform", "colortransform", "x", "y", "rx", "ry", "sx", "sy", "skx", "sky", "alpha", "visible", "width", "height"],
				l = syncp.length,
				p;
			while (l--) {
				p = syncp[l];
				o[p] = t[p];
			}
		}
		return o;
	};
	m.getRoot = function() {
		var l = o.lists,
			ll = l ? l.length : 0,
			r, sr = o.stage ? o.stage.root : null;
		if (sr && ll > 0 && l.parent) {
			r = l.parent.getRoot() || l.parent;
			if (sr === r)
				return r;
		}
		return null;
	};
	m.getParent = function() {
		return o.lists ? o.lists.parent : null;
	};
	m.setX = function(x) {
		o.x = x;
		o.invalidateTransform = true;
		return o;
	};
	m.setY = function(y) {
		o.y = y;
		o.invalidateTransform = true;
		return o;
	};
	m.getX = function() {
		return o.x;
	};
	m.getY = function() {
		return o.y;
	};
	m.setVisible = function(val) {
		o.visible = val;
		return o;
	};
	m.getVisible = function() {
		return o.visible;
	};
	m.isVisible = function() {
		if (!o.visible) return false;
		var l = o.lists,
			ll = l ? l.length : 0,
			r;
		if (ll > 0 && l.parent) {
			r = l.parent.isVisible();
			if (!r) return false;
		}
		return true;
	};
	m.getScaleX = function() {
		return o.sx;
	};
	m.setScaleX = function(sx) {
		o.sx = sx;
		o.invalidateTransform = true;
		return o;
	};
	m.getScaleY = function() {
		return o.sy;
	};
	m.setScaleY = function(sy) {
		o.sy = sy;
		o.invalidateTransform = true;
		return o;
	};
	m.getRotation = function() {
		return o.rx;
	};
	m.setRotation = function(r, radians) {
		if (!radians) r *= Math.PI / 180;
		o.rx = r;
		o.ry = r;
		o.invalidateTransform = true;
		return r;
	};
	m.setSkew = function(skewx, skewy, radians) {
		o.skx = radians ? skewx : skewx * Math.PI / 180;
		o.sky = radians ? skewy : skewy * Math.PI / 180;
		o.invalidateTransform = true;
		return o;
	};
	m.moveTo = function(x, y) {
		o.x = x;
		o.y = y;
		o.invalidateTransform = true;
		return o;
	};
	m.scale = function(sx, sy) {
		o.sx *= sx;
		o.sy *= sy;
		o.invalidateTransform = true;
		return o;
	};
	m.rotate = function(r, radians) {
		if (!radians) r *= Math.PI / 180;
		o.rx += r;
		o.ry += r;
		o.invalidateTransform = true;
		return o;
	};
	m.skew = function(skewx, skewy, radians) {
		o.skx += radians ? skewx : skewx * Math.PI / 180;
		o.sky += radians ? skewy : skewy * Math.PI / 180;
		o.invalidateTransform = true;
		return o;
	};
	m.translate = function(x, y) {
		o.x += x;
		o.y += y;
		o.invalidateTransform = true;
		return o;
	};
	m.setTransform = function(a, b, c, d, e, f) {
		var t = o.transform;
		t[0] = a;
		t[1] = b;
		t[2] = c;
		t[3] = d;
		t[4] = e;
		t[5] = f;
		return o;
	};
	m.getTransform = function() {
		return o.transform;
	};
	m.updateTransform = function() {
		var cos1, sin1, cos2, sin2, sx = o.sx,
			sy = o.sy,
			rx = o.rx,
			ry = o.ry,
			skx = o.skx,
			sky = o.sky,
			t = o.transform,
			sktanx, sktany, t0, t1, t2, t3;
		if (ry === 0) {
			cos1 = 1;
			sin1 = 0;
		} else {
			cos1 = Math.cos(ry);
			sin1 = Math.sin(ry);
		}
		if (rx !== ry) {
			cos2 = Math.cos(rx);
			sin2 = Math.sin(rx);
		} else {
			cos2 = cos1;
			sin2 = sin1;
		}
		if (sky === 0) sktanx = 0;
		else sktanx = Math.tan(sky);
		if (skx === 0) sktany = 0;
		else sktany = Math.tan(skx);
		t0 = t[0] = o.sw * cos1 * sx;
		t1 = t[1] = o.skw * sin1 * sx;
		t2 = t[2] = -o.skh * sin2 * sy;
		t3 = t[3] = o.sh * cos2 * sy;
		if (sktanx !== 0) {
			t[0] += t2 * sktanx;
			t[1] += t3 * sktanx;
		}
		if (sktany !== 0) {
			t[2] += t0 * sktany;
			t[3] += t1 * sktany;
		}
		t[4] = o.x;
		t[5] = o.y;

		o.invalidateTransform = false;
		return o;
	};
	m.transformize = function(a2, b2, c2, d2, e2, f2) {
		var t = o.transform,
			a1 = t[0],
			b1 = t[1],
			c1 = t[2],
			d1 = t[3],
			e1 = t[4],
			f1 = t[5],
			newt = [];
		newt[0] = a1 * a2 + c1 * b2;
		newt[1] = b1 * a2 + d1 * b2;
		newt[2] = a1 * c2 + c1 * d2;
		newt[3] = b1 * c2 + d1 * d2;
		newt[4] = a1 * e2 + c1 * f2 + e1;
		newt[5] = b1 * e2 + d1 * f2 + f1;
		return newt;
	};
	m.transformizeParent = function(a1, b1, c1, d1, e1, f1) {
		var t = o.transform,
			a2 = t[0],
			b2 = t[1],
			c2 = t[2],
			d2 = t[3],
			e2 = t[4],
			f2 = t[5],
			newt = [];
		newt[0] = a1 * a2 + c1 * b2;
		newt[1] = b1 * a2 + d1 * b2;
		newt[2] = a1 * c2 + c1 * d2;
		newt[3] = b1 * c2 + d1 * d2;
		newt[4] = a1 * e2 + c1 * f2 + e1;
		newt[5] = b1 * e2 + d1 * f2 + f1;
		return newt;
	};
	m.setColorTransform = function(r, g, b, a, ro, go, bo, ao) {
		var ct = o.colortransform;
		ct[0] = r;
		ct[1] = g;
		ct[2] = b;
		ct[3] = a;
		ct[4] = ro;
		ct[5] = go;
		ct[6] = bo;
		ct[7] = ao;
		return o;
	};
	m.getColorTransform = function() {
		return o.colortransform;
	};
	m.colorTransformize = function(r, g, b, a, ro, go, bo, ao) {
		var ct = o.colortransform,
			newct = [r * ct[0], g * ct[1], b * ct[2], o.alpha * a * ct[3], ro + ct[4], go + ct[5], bo + ct[6], ao + ct[7]];
		return newct;
	};
	m.rotatePoint = function(p, invertSigma) {
		var cx = o.x,
			cy = o.y,
			rx = invertSigma ? o.rx : o.ry,
			ry = invertSigma ? o.ry : o.rx,
			px = p.x,
			py = p.y;
		p.x = cx + (px - cx) * Math.cos(rx) - (py - cy) * Math.sin(ry);
		p.y = cy + (px - cx) * Math.sin(rx) + (py - cy) * Math.cos(ry);
		return o;
	};
	m.getSkewAngle = function() {
		var br = o.getBounds(o.transform),
			a, b, d = Math.sqrt(br.width * br.width + br.height * br.height);
		a = Math.asin(br.width / d);
		b = Math.asin(br.height / d);
		return [a, b];
	};
	m.getStageTransform = function(disableLocalTransform) {
		var zct, oct, stage = o.stage,
			dtop, t;
		if (!stage) return null;
		oct = stage.ct;
		zct = o.colorTransformize(oct[0], oct[1], oct[2], oct[3], oct[4], oct[5], oct[6], oct[7]);
		dtop = {
			t: o.transform,
			ct: zct
		};
		if (disableLocalTransform) dtop.dlt = true;
		stage.childToRoot(o, stage.rooterTransform2, dtop);
		t = dtop.t;
		dtop.t = stage.transformize(t[0], t[1], t[2], t[3], t[4], t[5]);
		return dtop;
	};
	m.globalToLocal = function(x, y) {
		var tm = o.cachedtransform || o.getStageTransform().t;
		return zetaret.global.packages.clockwork.ui.DisplayObject.deltaTransformPoint([x, y], tm, true);
	};
	m.localToGlobal = function(x, y) {
		var tm = o.cachedtransform || o.getStageTransform().t;
		return zetaret.global.packages.clockwork.ui.DisplayObject.deltaTransformPoint([x, y], tm);
	};
	m.getBounds = function(tm) {
		if (!tm) tm = o.cachedtransform || o.getStageTransform().t;
		var b = {};
		b.width = o.width;
		b.height = o.height;
		b.x = 0;
		b.y = 0;
		b = zetaret.global.packages.clockwork.ui.DisplayObject.getTransformArea(b, tm);
		b.sx = 0;
		b.sy = 0;
		b.swidth = b.width;
		b.sheight = b.height;
		return b;
	};
	m.setMask = function(mask) {
		o.mask = mask;
		mask.cachetransforms = true;
		mask.visible = false;
		return o;
	};
	m.setCache = function(id, box, local) {
		o.cacheLevel = id;
		o.cacheBox = box;
		o.cacheRedraw = true;
		o.localTransform = local;
		return o;
	};
	m.render = function(stage, renderer, ctx, t, ct) {
		if (o.skipt) {
			ctx.fillRect(o.x, o.y, o.width * o.sx, o.height * o.sy);
		} else if (o.notransform) {
			var r = o.getBounds(t);
			ctx.fillRect(r.x, r.y, r.width, r.height);
		} else {
			ctx.fillRect(0, 0, o.width, o.height);
		}
		return o;
	};
	m.invalidateStage = function() {
		o.invalidateTransform = true;
		if (o.stage) o.stage.invalidate = true;
		return o;
	};
	m.clone = function() {
		var c = new o.constructor();
		var cloneprops = o.constructor.cloneprops,
			cl, i, ck;
		c.name = o.name;
		c.x = o.x;
		c.y = o.y;
		c.sx = o.sx;
		c.sy = o.sy;
		c.rx = o.rx;
		c.ry = o.ry;
		c.skx = o.skx;
		c.sky = o.sky;
		c.width = o.width;
		c.height = o.height;
		c.transform = o.transform.concat();
		c.visible = o.visible;
		c.alpha = o.alpha;
		c.colortransform = o.colortransform.concat();
		c.blend = o.blend;
		c.opaqueBackground = o.opaqueBackground;
		c.invalidateTransform = o.invalidateTransform;
		c.forceSelfInvalidate = o.forceSelfInvalidate;
		c.skipct = o.skipct;
		c.skipalpha = o.skipalpha;
		c.skipt = o.skipt;
		c.notransform = o.notransform;
		c.canrender = o.canrender;
		c.cacheLevel = o.cacheLevel;
		c.cacheLevelData = o.cacheLevelData;
		c.cacheRedraw = o.cacheRedraw;
		c.cacheBox = o.cacheBox;
		c.localTransform = o.localTransform;
		c.layer = o.layer;
		c.stage = o.stage;
		c.cachetransforms = o.cachetransforms;
		if (cloneprops) {
			cl = cloneprops.length;
			for (i = 0; i < cl; i++) {
				ck = cloneprops[i];
				c[ck] = o[ck];
			}
		}
		return c;
	};
	o.superize(a, m, true, true);
	return o;
});
ProtoSS.eventProps(zetaret.global.packages.clockwork.ui.DisplayObject, [
	"x", "y", "sx", "sy", "rx", "ry", "width", "height",
	"translate", "scale", "rotation", "visible","transform", "alpha", "colortransform", "target", "lists"
]);
ProtoSS.staticProps(zetaret.global.packages.clockwork.ui.DisplayObject, {
invertTransform: function(tm) {
	var n = tm[0] * tm[3] - tm[1] * tm[2],
		inv = [];
	inv[0] = tm[3] / n;
	inv[1] = -tm[1] / n;
	inv[2] = -tm[2] / n;
	inv[3] = tm[0] / n;
	inv[4] = (tm[2] * tm[5] - tm[3] * tm[4]) / n;
	inv[5] = -(tm[0] * tm[5] - tm[1] * tm[4]) / n;
	return inv;
},
deltaTransformPoint: function(p, tm, inverse) {
	var op = [0, 0];
	if (!tm) return op;
	if (inverse) {
		tm = zetaret.global.packages.clockwork.ui.DisplayObject.invertTransform(tm);
	}

	op[0] = p[0] * tm[0] + p[1] * tm[2] + tm[4];
	op[1] = p[0] * tm[1] + p[1] * tm[3] + tm[5];
	return op;
},
getTransformArea: function(rect, matrix) {
	var x = 0,
		y = 0,
		xx = 0,
		yy = 0,
		point = [];
	point[0] = rect.x;
	point[1] = rect.y;
	var tl = zetaret.global.packages.clockwork.ui.DisplayObject.deltaTransformPoint(point, matrix);
	x = tl[0];
	y = tl[1];
	xx = x;
	yy = y;
	point[0] = rect.width;
	var tr = zetaret.global.packages.clockwork.ui.DisplayObject.deltaTransformPoint(point, matrix);
	point[1] = rect.height;
	var br = zetaret.global.packages.clockwork.ui.DisplayObject.deltaTransformPoint(point, matrix);
	point[0] = rect.x;
	var bl = zetaret.global.packages.clockwork.ui.DisplayObject.deltaTransformPoint(point, matrix);

	if (x > tr[0]) x = tr[0];
	if (x > br[0]) x = br[0];
	if (x > bl[0]) x = bl[0];

	if (xx < tr[0]) xx = tr[0];
	if (xx < br[0]) xx = br[0];
	if (xx < bl[0]) xx = bl[0];

	if (y > tr[1]) y = tr[1];
	if (y > br[1]) y = br[1];
	if (y > bl[1]) y = bl[1];

	if (yy < tr[1]) yy = tr[1];
	if (yy < br[1]) yy = br[1];
	if (yy < bl[1]) yy = bl[1];

	rect.x = x;
	rect.y = y;
	rect.width = xx - x;
	rect.height = yy - y;

	return rect;
},
invalidateGlobal: function(dobj) {
	dobj.invalidateTransform = true;
	if (dobj.stage) dobj.stage.invalidate = true;
	return dobj;
},
getUnionBounds: function(ch, tm, transformself, target) {
	if (!tm && transformself) return null;
	var chl = ch.length,
		r = null,
		rr, rx, ry, rrx, rry, ctm = tm,
		cho;
	while (chl--) {
		cho = ch[chl];
		if (!cho.lists || !cho.lists.parent) continue;
		if (target) cho = cho.target;
		if (cho.notransform) continue;
		if (transformself) ctm = cho.transformizeParent(tm[0], tm[1], tm[2], tm[3], tm[4], tm[5]);
		rr = cho.getBounds(ctm);
		if (!r) r = rr;
		else {
			rx = r.x + r.width;
			ry = r.y + r.height;
			if (rr.width > 0) {
				rrx = rr.x + rr.width;
				if (rr.x < r.x) r.x = rr.x;
				if (rrx > rx) rx = rrx;
			}
			if (rr.height > 0) {
				rry = rr.y + rr.height;
				if (rr.y < r.y) r.y = rr.y;
				if (rry > ry) ry = rry;
			}
			r.width = rx - r.x;
			r.height = ry - r.y;
		}
	}
	if (r) {
		r.swidth = r.width;
		r.sheight = r.height;
	}
	return r;
}
});