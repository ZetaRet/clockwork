window.package("zetaret.global.packages.clockwork.data").internal(
function Matrix(rows, columns) {
	var o = this,
		a = arguments;
	o.rows = rows;
	o.columns = columns || rows;
	o.data = null;
	o.super(a, true);
	var m = {};
	m.setDimensions = function(rows, columns) {
		o.rows = rows;
		o.columns = columns || rows;
		return o;
	};
	m.getAt = function(row, column) {
		return o.data[o.columns * row + column];
	};
	m.fill = function(n) {
		var d = o.data || [],
			t = o.rows * o.columns;
		o.data = d;
		while (t--) d[t] = n;
		return o;
	};
	m.rnd = function() {
		var d = o.data || [],
			t = o.rows * o.columns;
		o.data = d;
		while (t--) d[t] = Math.random();
		return o;
	};
	m.identity = function(i, j) {
		if (!i) i = 1;
		if (!j) j = 0;
		var cc = o.columns,
			d = o.data || [],
			z = cc * o.rows,
			r, c;
		o.data = d;
		while (z--) {
			c = z % cc;
			r = Math.floor(z / cc);
			d[z] = (c === r) ? i : j;
		}
		return o;
	};
	m.toSquareMatrix = function(n) {
		var co = o.columns,
			ro = o.rows,
			s = new o.constructor(ro, co);
		s.data = [];
		s.copy(o);
		if (!n) n = 0;
		if (co !== ro) s.expand(n, co > ro ? co - ro : 0, co < ro ? ro - co : 0, 0, 0);
		return s;
	};
	m.expand = function(n, bottom, left, top, right) {
		if (!top) top = 0;
		if (!bottom) bottom = 0;
		if (!right) right = 0;
		if (!left) left = 0;
		var cc = o.columns,
			rr = o.rows,
			nc = cc + right + left,
			nr = rr + top + bottom,
			d = o.data,
			c, r;
		o.data = [];
		o.columns = nc;
		o.rows = nr;
		o.fill(n);
		var t = o.data;
		for (c = 0; c < cc; c++)
			for (r = 0; r < rr; r++)
				t[(top + r) * nc + (right + c)] = d[r * cc + c];
		return o;
	};
	m.shrink = function(bottom, left, top, right) {
		if (!top) top = 0;
		if (!bottom) bottom = 0;
		if (!right) right = 0;
		if (!left) left = 0;
		var cc = o.columns,
			rr = o.rows,
			nc = cc - right - left,
			nr = rr - top - bottom,
			d = o.data,
			c, r;
		o.data = [];
		o.columns = nc;
		o.rows = nr;
		var t = o.data;
		for (c = 0; c < nc; c++)
			for (r = 0; r < nr; r++)
				t[r * nc + c] = d[(r + top) * cc + (c + right)];
		return o;
	};
	m.op = function(v) {
		var d = o.data,
			z = d.length;
		while (z--) d[z] += v;
		return o;
	};
	m.scalar = function(s) {
		var d = o.data,
			z = d.length;
		while (z--) d[z] *= s;
		return o;
	};
	m.scalarF = function(s, f) {
		var d = o.data,
			z = d.length;
		while (z--) d[z] = f(d[z] * s);
		return o;
	};
	m.invert = function() {
		var dv = o.determinant();
		if (dv === 0) return null;
		return o.adjugate().scalar(1 / dv).transpose2();
	};
	m.diagonal = function(n) {
		var d = o.data,
			z = d.length,
			cc = o.columns,
			rr = o.rows,
			c, r, g = new o.constructor(rr, cc);
		g.data = [];
		if (!n) n = 0;
		var gd = g.data;
		while (z--) {
			c = z % cc;
			r = Math.floor(z / cc);
			gd[z] = (c === r) ? d[z] : n;
		}
		return g;
	};
	m.upper = function(n) {
		var d = o.data,
			z = d.length,
			cc = o.columns,
			rr = o.rows,
			c, r, u = new o.constructor(rr, cc);
		u.data = [];
		if (!n) n = 0;
		var ud = u.data;
		while (z--) {
			c = z % cc;
			r = Math.floor(z / cc);
			ud[z] = (c >= r) ? d[z] : n;
		}
		return u;
	};
	m.lower = function(n) {
		var d = o.data,
			z = d.length,
			cc = o.columns,
			rr = o.rows,
			c, r, l = new o.constructor(rr, cc);
		l.data = [];
		if (!n) n = 0;
		var ld = l.data;
		while (z--) {
			c = z % cc;
			r = Math.floor(z / cc);
			ld[z] = (c <= r) ? d[z] : n;
		}
		return l;
	};
	m.reflect = function(rx, ry, keep) {
		var d = o.data,
			z = 0,
			cc = o.columns,
			rr = o.rows,
			c, r, nr, nc, newd;
		if (rx && ry) {
			o.data = d.reverse();
			if (!keep) o.data = o.data.concat();
		} else {
			newd = [];
			for (r = 0; r < rr; r++) {
				for (c = 0; c < cc; c++) {
					nr = ry ? rr - r - 1 : r;
					nc = rx ? cc - c - 1 : c;
					newd[z++] = d[nr * cc + nc];
				}
			}
			if (keep)
				while (z--) d[z] = newd[z];
			else o.data = newd;
		}
		return o;
	};
	m.skew = function(rot, n) {
		var inv = rot < 0 ? true : false;
		var rr = o.rows,
			cc = o.columns,
			d = o.data,
			c, r, z = d.length,
			sm = new o.constructor(rr + Math.round((cc - 1) * (inv ? -rot : rot)), cc),
			rr2 = sm.rows,
			invf = inv ? rr2 - rr : 0;
		sm.fill(n || 0);
		var smd = sm.data;
		while (z--) {
			c = z % cc;
			r = Math.floor(z / cc) + Math.round(c * rot) + invf;
			smd[r * cc + c] = d[z];
		}
		return sm;
	};
	m.shear = function(rot, n) {
		var inv = rot < 0 ? true : false;
		var rr = o.rows,
			cc = o.columns,
			d = o.data,
			c, r, z = d.length,
			sm = new o.constructor(rr, cc + Math.round((rr - 1) * (inv ? -rot : rot))),
			cc2 = sm.columns,
			invf = inv ? cc2 - cc : 0;
		sm.fill(n || 0);
		var smd = sm.data;
		while (z--) {
			r = Math.floor(z / cc);
			c = z % cc + Math.round(r * rot) + invf;
			smd[r * cc2 + c] = d[z];
		}
		return sm;
	};
	m.translate = function(x, y, keep) {
		if (!x) x = 0;
		if (!y) y = 0;
		var d = o.data,
			z = 0,
			cc = o.columns,
			rr = o.rows,
			c, r, nr, nc, newd = [];
		x %= cc;
		y %= rr;
		if (x < 0) x += cc;
		if (y < 0) y += rr;
		for (r = 0; r < rr; r++) {
			for (c = 0; c < cc; c++) {
				nr = (r + y) % rr;
				nc = (c + x) % cc;
				newd[z++] = d[nr * cc + nc];
			}
		}
		if (keep)
			while (z--) d[z] = newd[z];
		else o.data = newd;
		return o;
	};
	m.add = function(v) {
		var d = o.data,
			t = v.data,
			z = d.length;
		while (z--) d[z] += t[z] || 0;
		return o;
	};
	m.subtract = function(v) {
		var d = o.data,
			t = v.data,
			z = d.length;
		while (z--) d[z] -= t[z] || 0;
		return o;
	};
	m.multiply = function(v) {
		var d = o.data,
			t = v.data,
			z = d.length;
		while (z--) d[z] *= t[z] || 0;
		return o;
	};
	m.divide = function(v) {
		var d = o.data,
			t = v.data,
			z = d.length;
		while (z--) d[z] /= t[z] || 0;
		return o;
	};
	m.squareMultiply = function(v) {
		var co = o.columns,
			ro = o.rows,
			s = new o.constructor(ro, co),
			d = o.data,
			t = v.data,
			z = d.length,
			cc, c, r, i, rco;
		s.fill(0);
		var sd = s.data;
		for (i = 0; i < z; i++) {
			c = i % co;
			r = Math.floor(i / co);
			rco = r * co;
			for (cc = 0; cc < co; cc++)
				sd[i] += d[rco + cc] * t[cc * co + c];
		}
		return s;
	};
	m.power = function(n) {
		n--;
		var co = o.columns,
			ro = o.rows,
			s = new o.constructor(ro, co),
			d = o.data,
			z = d.length,
			cc, c, r, i, rco;
		s.copy(o);
		var sd = s.data;
		while (n--) {
			var sdc = sd.concat();
			s.fill(0);
			for (i = 0; i < z; i++) {
				c = i % co;
				r = Math.floor(i / co);
				rco = r * co;
				for (cc = 0; cc < co; cc++)
					sd[i] += sdc[rco + cc] * d[cc * co + c];
			}
		}
		return s;
	};
	m.transpose = function() {
		var cc = o.columns,
			rr = o.rows,
			t = new o.constructor(cc, rr),
			d = o.data,
			r, c, z = 0;
		t.data = [];
		var td = t.data;
		for (c = 0; c < cc; c++)
			for (r = 0; r < rr; r++)
				td[z++] = d[r * cc + c];
		return t;
	};
	m.transpose2 = function(keep) {
		var cc = o.columns,
			rr = o.rows,
			t = [],
			d = o.data,
			r, c, z = 0;
		for (c = 0; c < cc; c++)
			for (r = 0; r < rr; r++)
				t[z++] = d[r * cc + c];
		if (keep)
			while (z--) d[z] = t[z];
		else o.data = t;
		return o;
	};
	m.transform = function(f, mode, t) {
		var cc = o.columns,
			rr = o.rows,
			d = o.data,
			z = d.length,
			r, c;
		if (!mode) {
			while (z--) {
				c = z % cc;
				r = Math.floor(z / cc);
				f(d, z, c, r, cc, rr, t);
			}
		} else if (mode === 1) {
			var l = z;
			z = 0;
			while (z < l) {
				c = z % cc;
				r = Math.floor(z / cc);
				f(d, z, c, r, cc, rr, t);
				z++;
			}
		} else if (mode === 2) {
			for (c = 0; c < cc; c++)
				for (r = 0; r < rr; r++)
					f(d, r * cc + c, c, r, cc, rr, t);
		} else if (mode === 3) {
			for (r = 0; r < rr; r++)
				for (c = 0; c < cc; c++)
					f(d, r * cc + c, c, r, cc, rr, t);
		}
		return o;
	};
	m.rank = function() {
		return o.rows;
	};
	m.det = function() {
		var dv = o.determinant();
		if (dv > 0) return 1;
		else if (dv < 0) return -1;
		return 0;
	};
	m.determinant = function() {
		var cc = o.columns,
			rr = o.rows,
			d = o.data,
			mz = d.length;
		if (mz === 9) return d[0] * d[4] * d[8] + d[1] * d[5] * d[6] + d[2] * d[3] * d[7] - d[0] * d[5] * d[7] - d[1] * d[3] * d[8] - d[2] * d[4] * d[6];
		else if (mz === 4) return d[0] * d[3] - d[1] * d[2];
		else if (mz === 1) return d[0];
		var det = new o.constructor(rr - 1, cc - 1),
			c, z = cc,
			iz = 0,
			dz = 0,
			s = 1;
		det.fill(0);
		var dt = det.data,
			detv = 0;
		while (iz < cc) {
			c = z % cc;
			if (c !== iz) dt[dz++] = d[z];
			z++;
			if (z === mz) {
				detv += s * d[iz] * det.determinant();
				det.fill(0);
				z = cc;
				iz++;
				dz = 0;
				s = -s;
			}
		}
		return detv;
	};
	m.adjugate = function() {
		var cc = o.columns,
			rr = o.rows,
			d = o.data,
			mz = d.length;
		var adj = new o.constructor(rr, cc),
			det = new o.constructor(rr - 1, cc - 1),
			c, r, z = 0,
			iz = 0,
			izr = 0,
			izc = 0,
			dz = 0,
			s = 1;
		adj.data = [];
		det.data = [];
		var at = adj.data,
			dt = det.data,
			dv = 0;
		while (iz < mz) {
			c = z % cc;
			r = Math.floor(z / cc);
			if (c !== izc && r !== izr) dt[dz++] = d[z];
			z++;
			if (z === mz) {
				dv = det.determinant();
				at[iz++] = (dv === 0 ? 0 : s * dv);
				det.fill(0);
				z = 0;
				izc = iz % cc;
				izr = Math.floor(iz / cc);
				dz = 0;
				if (izc > 0) s = -s;
			}
		}
		return adj;
	};
	m.trace = function() {
		var cc = o.columns,
			d = o.data,
			z = cc,
			t = 0;
		while (z--) t += d[z + cc * z];
		return t;
	};
	m.copy = function(v) {
		var t = v.data,
			z = t.length,
			d = o.data || [];
		o.data = d;
		while (z--) d[z] = t[z];
		return o;
	};
	m.copy2 = function(v, x, y, vx, vy, vcl, vrl) {
		var cc = o.columns,
			t = v.data,
			d = o.data || [],
			c, r, cc2 = v.columns;
		o.data = d;
		if (!vx) vx = 0;
		if (!vy) vy = 0;
		if (!vcl) vcl = v.columns;
		if (!vrl) vrl = v.rows;
		if (!x) x = 0;
		if (!y) y = 0;
		for (c = vx; c < vcl; c++)
			for (r = vy; r < vrl; r++)
				d[(y + r - vy) * cc + (x + c - vx)] = t[r * cc2 + c];
		return o;
	};
	m.equals = function(v) {
		var t = v.data,
			z = t.length,
			d = o.data;
		while (z--)
			if (d[z] !== t[z]) return false;
		return true;
	};
	m.clone = function() {
		var c = new o.constructor(o.rows, o.columns);
		c.copy(o);
		return c;
	};
	o.superize(a, m, true, true);
	return o;
});