window.package("zetaret.global.packages.clockwork.color.utils").internal({
	name: "ColorUtil",
	ALPHA: 24,
	RED: 16,
	GREEN: 8,
	BLUE: 0,
	EIGHT: 8,
	FIVE: 5,
	FOUR: 4,
	THREE: 3,
	TWICE: 2,
	ONE: 1,
	HALF: 0.5,
	TWO_THIRDS: 2 / 3,
	ONE_THIRD: 1 / 3,
	ZERO: 0,
	HEX: 0xff,
	HALF_HEX: 0x80,
	FOURTH_HEX: 0x40,
	HUE_SECTION: 1 / 6,
	HUE_SECTIONS: 6,
	MAX_CHANNEL: 0xff,
	MIN_CHANNEL: 0,
	MAX_PERCENT: 1,
	MIN_PERCENT: 0,
	Blend_Normal: function(blender, base) {
		return base.ToRGB();
	},
	Blend_ColorReplace: function(blender, base) {
		return this.Blend_Color(blender, base);
	},
	Blend_Alpha: function(blender, base, alpha) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Alpha(blender.Red, base.Red, alpha),
			this.Alpha(blender.Green, base.Green, alpha),
			this.Alpha(blender.Blue, base.Blue, alpha));
	},
	Blend_Add: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Add(blender.Red, base.Red),
			this.Add(blender.Green, base.Green),
			this.Add(blender.Blue, base.Blue));
	},
	Blend_AlphaMethod: function(blender, base, method, alpha) {
		return this.Blend_Alpha(method(blender, base), base, alpha);
	},
	Blend_Average: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Average(blender.Red, base.Red),
			this.Average(blender.Green, base.Green),
			this.Average(blender.Blue, base.Blue));
	},
	Blend_ColorBurn: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.ColorBurn(blender.Red, base.Red),
			this.ColorBurn(blender.Green, base.Green),
			this.ColorBurn(blender.Blue, base.Blue));
	},
	Blend_Darken: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Darken(blender.Red, base.Red),
			this.Darken(blender.Green, base.Green),
			this.Darken(blender.Blue, base.Blue));
	},
	Blend_Difference: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Difference(blender.Red, base.Red),
			this.Difference(blender.Green, base.Green),
			this.Difference(blender.Blue, base.Blue));
	},
	Blend_DodgeColor: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.DodgeColor(blender.Red, base.Red),
			this.DodgeColor(blender.Green, base.Green),
			this.DodgeColor(blender.Blue, base.Blue));
	},
	Blend_Exclusion: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Exclusion(blender.Red, base.Red),
			this.Exclusion(blender.Green, base.Green),
			this.Exclusion(blender.Blue, base.Blue));
	},
	Blend_Glow: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Glow(blender.Red, base.Red),
			this.Glow(blender.Green, base.Green),
			this.Glow(blender.Blue, base.Blue));
	},
	Blend_HardLight: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.HardLight(blender.Red, base.Red),
			this.HardLight(blender.Green, base.Green),
			this.HardLight(blender.Blue, base.Blue));
	},
	Blend_HardMix: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.HardMix(blender.Red, base.Red),
			this.HardMix(blender.Green, base.Green),
			this.HardMix(blender.Blue, base.Blue));
	},
	Blend_Lighten: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Lighten(blender.Red, base.Red),
			this.Lighten(blender.Green, base.Green),
			this.Lighten(blender.Blue, base.Blue));
	},
	Blend_LinearBurn: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.LinearBurn(blender.Red, base.Red),
			this.LinearBurn(blender.Green, base.Green),
			this.LinearBurn(blender.Blue, base.Blue));
	},
	Blend_LinearDodge: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.LinearDodge(blender.Red, base.Red),
			this.LinearDodge(blender.Green, base.Green),
			this.LinearDodge(blender.Blue, base.Blue));
	},
	Blend_LinearLight: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.LinearLight(blender.Red, base.Red),
			this.LinearLight(blender.Green, base.Green),
			this.LinearLight(blender.Blue, base.Blue));
	},
	Blend_Multiply: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Multiply(blender.Red, base.Red),
			this.Multiply(blender.Green, base.Green),
			this.Multiply(blender.Blue, base.Blue));
	},
	Blend_Negation: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Negation(blender.Red, base.Red),
			this.Negation(blender.Green, base.Green),
			this.Negation(blender.Blue, base.Blue));
	},
	Blend_Overlay: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Overlay(blender.Red, base.Red),
			this.Overlay(blender.Green, base.Green),
			this.Overlay(blender.Blue, base.Blue));
	},
	Blend_Phoenix: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Phoenix(blender.Red, base.Red),
			this.Phoenix(blender.Green, base.Green),
			this.Phoenix(blender.Blue, base.Blue));
	},
	Blend_PinLight: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.PinLight(blender.Red, base.Red),
			this.PinLight(blender.Green, base.Green),
			this.PinLight(blender.Blue, base.Blue));
	},
	Blend_Reflect: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Reflect(blender.Red, base.Red),
			this.Reflect(blender.Green, base.Green),
			this.Reflect(blender.Blue, base.Blue));
	},
	Blend_Screen: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.Screen(blender.Red, base.Red),
			this.Screen(blender.Green, base.Green),
			this.Screen(blender.Blue, base.Blue));
	},
	Blend_SoftLight: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.SoftLight(blender.Red, base.Red),
			this.SoftLight(blender.Green, base.Green),
			this.SoftLight(blender.Blue, base.Blue));
	},
	Blend_VividLight: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.RGB(this.VividLight(blender.Red, base.Red),
			this.VividLight(blender.Green, base.Green),
			this.VividLight(blender.Blue, base.Blue));
	},
	Blend_Color: function(blender, base) {
		return this.Color_HSL(blender.ToHSL(), base.ToHSL()).ToRGB();
	},
	Blend_Hue: function(blender, base) {
		return this.Hue_HSL(blender.ToHSL(), base.ToHSL()).ToRGB();
	},
	Blend_Luminosity: function(blender, base) {
		return this.Luminosity_HSL(blender.ToHSL(), base.ToHSL()).ToRGB();
	},
	Blend_Saturation: function(blender, base) {
		return this.Saturation_HSL(blender.ToHSL(), base.ToHSL()).ToRGB();
	},
	Alpha: function(blender, base, alpha) {
		return alpha * base + (this.ONE - alpha) * blender;
	},
	Add: function(blender, base) {
		return Math.min(this.HEX, blender + base);
	},
	Average: function(blender, base) {
		return (blender + base) * this.HALF;
	},
	ColorBurn: function(blender, base) {
		if (blender == this.ZERO)
			return blender;
		return Math.max(this.ZERO, this.HEX - ((this.HEX - base) << this.EIGHT) / blender);
	},
	Darken: function(blender, base) {
		return (blender < base ? blender : base);
	},
	Difference: function(blender, base) {
		return Math.abs(blender - base);
	},
	DodgeColor: function(blender, base) {
		if (blender == this.HEX)
			return blender;
		return Math.min(this.HEX, (base << this.EIGHT) / (this.HEX - blender));
	},
	Exclusion: function(blender, base) {
		return blender + base - this.TWICE * blender * base / this.HEX;
	},
	Glow: function(blender, base) {
		if (base == this.HEX)
			return base;
		return Math.min(this.HEX, (blender * blender / (this.HEX - base)));
	},
	HardLight: function(blender, base) {
		if (blender < this.HALF_HEX)
			return blender * base / this.HEX;
		return this.HEX - ((this.HEX - base) * (this.HEX - blender)) / this.HEX;
	},
	HardMix: function(blender, base) {
		if (this.VividLight(blender, base) < this.HALF_HEX)
			return this.ZERO;
		return this.HEX;
	},
	Lighten: function(blender, base) {
		return (blender > base ? blender : base);
	},
	LinearBurn: function(blender, base) {
		blender += base;
		return (blender < this.HEX ? this.ZERO : blender - this.HEX);
	},
	LinearDodge: function(blender, base) {
		return Math.min(this.HEX, blender + base);
	},
	LinearLight: function(blender, base) {
		if (blender < this.HALF_HEX) {
			blender *= this.TWICE;
			if (blender == this.ZERO)
				return blender;
			return Math.max(this.ZERO, this.HEX - ((this.HEX - base) << this.EIGHT) / blender);
		}
		blender = this.TWICE * (blender - this.HALF_HEX);
		return Math.min(this.HEX, blender + base);
	},
	Multiply: function(blender, base) {
		return blender * base / this.HEX;
	},
	Negation: function(blender, base) {
		return this.HEX - Math.abs(this.HEX - blender - base);
	},
	Overlay: function(blender, base) {
		if (base < this.HALF_HEX)
			return blender * base / this.HEX;
		return this.HEX - ((this.HEX - blender) * (this.HEX - base)) / this.HEX;
	},
	Phoenix: function(blender, base) {
		return Math.min(blender, base) - Math.max(blender, base) + this.HEX;
	},
	PinLight: function(blender, base) {
		if (blender < this.HALF_HEX) {
			blender *= this.TWICE;
			return (blender < base ? blender : base);
		}
		blender = this.TWICE * (blender - this.HALF_HEX);
		return (blender > base ? blender : base);
	},
	Reflect: function(blender, base) {
		if (blender == this.HEX)
			return blender;
		return Math.min(this.HEX, (base * base / (this.HEX - blender)));
	},
	Screen: function(blender, base) {
		return this.HEX - ((this.HEX - blender) * (this.HEX - base)) / this.HEX;
	},
	SoftLight: function(blender, base) {
		if (blender < this.HALF_HEX)
			return this.TWICE * (base >> this.ONE + this.FOURTH_HEX) * blender / this.HEX;
		return this.HEX - this.TWICE * (this.HEX - (blender >> this.ONE + this.FOURTH_HEX)) * (this.HEX - blender) / this.HEX;
	},
	Subtract: function(blender, base) {
		blender += base;
		return (blender < this.HEX ? this.ZERO : blender - this.HEX);
	},
	VividLight: function(blender, base) {
		if (blender < this.HALF_HEX) {
			if (blender == this.ZERO)
				return blender;
			return Math.max(this.ZERO, this.HEX - ((this.HEX - base) << this.EIGHT) / blender);
		}
		blender = this.TWICE * (blender - this.HALF_HEX);
		if (blender == this.HEX)
			return blender;
		return Math.min(this.HEX, (base << this.EIGHT) / (this.HEX - blender));
	},
	Color_HSL: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.HSL(blender.Hue, blender.Saturation, base.Luminosity);
	},
	Hue_HSL: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.HSL(blender.Hue, base.Saturation, base.Luminosity);
	},
	Luminosity_HSL: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.HSL(base.Hue, base.Saturation, blender.Luminosity);
	},
	Saturation_HSL: function(blender, base) {
		return new zetaret.global.packages.clockwork.color.HSL(base.Hue, blender.Saturation, base.Luminosity);
	},
	GetAlpha: function(color) {
		return (color >> this.ALPHA & this.HEX);
	},
	GetBlue: function(color) {
		return (color & this.HEX);
	},
	GetGreen: function(color) {
		return (color >> this.GREEN & this.HEX);
	},
	GetRed: function(color) {
		return (color >> this.RED & this.HEX);
	},
	SetAlpha: function(color, alpha) {
		return this.FromARGB(alpha, this.GetRed(color), this.GetGreen(color), this.GetBlue(color));
	},
	SetBlue: function(color, blue, alpha) {
		if (alpha)
			return this.FromARGB(this.GetAlpha(color), this.GetRed(color), this.GetGreen(color), blue);
		return this.FromRGB(this.GetRed(color), this.GetGreen(color), blue);
	},
	SetGreen: function(color, green, alpha) {
		if (alpha)
			return this.FromARGB(this.GetAlpha(color), this.GetRed(color), green, this.GetBlue(color));
		return this.FromRGB(this.GetRed(color), this.GetBlue(color), green);
	},
	SetRed: function(color, red, alpha) {
		if (alpha)
			return this.FromARGB(this.GetAlpha(color), red, this.GetGreen(color), this.GetBlue(color));
		return this.FromRGB(red, this.GetGreen(color), this.GetBlue(color));
	},
	Color_Process: function(startColor, endColor, time, alpha) {
		if (isNaN(time)) time = 0;
		var r1 = this.GetRed(startColor),
			g1 = this.GetGreen(startColor),
			b1 = this.GetBlue(startColor),
			r2 = this.GetRed(endColor),
			g2 = this.GetGreen(endColor),
			b2 = this.GetBlue(endColor);
		r1 = this.BaseValueOnTime(r1, r2, time);
		g1 = this.BaseValueOnTime(g1, g2, time);
		b1 = this.BaseValueOnTime(b1, b2, time);
		if (alpha) {
			var a1 = this.GetAlpha(startColor),
				a2 = this.GetAlpha(endColor);
			a1 = this.BaseValueOnTime(a1, a2, time);
			return this.FromARGB(a1, r1, g1, b1);
		}
		return this.FromRGB(r1, g1, b1);
	},
	InitColorTransformConsts: function() {
		this.ColorTransform_Normal = new zetaret.global.packages.clockwork.color.ColorTransform();
		this.ColorTransform_Darkness = new zetaret.global.packages.clockwork.color.ColorTransform(1, 1, 1, 1, -255, -255, -255, 0);
		this.ColorTransform_Lightness = new zetaret.global.packages.clockwork.color.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
		this.ColorTransform_Inverse = new zetaret.global.packages.clockwork.color.ColorTransform(-1, -1, -1, 1, 255, 255, 255, 0);
	},
	ColorTransform_Normal: {
		redMultiplier: 1,
		greenMultiplier: 1,
		blueMultiplier: 1,
		alphaMultiplier: 1,
		redOffset: 0,
		greenOffset: 0,
		blueOffset: 0,
		alphaOffset: 0
	},
	ColorTransform_Darkness: {
		redMultiplier: 1,
		greenMultiplier: 1,
		blueMultiplier: 1,
		alphaMultiplier: 1,
		redOffset: -255,
		greenOffset: -255,
		blueOffset: -255,
		alphaOffset: 0
	},
	ColorTransform_Lightness: {
		redMultiplier: 1,
		greenMultiplier: 1,
		blueMultiplier: 1,
		alphaMultiplier: 1,
		redOffset: 255,
		greenOffset: 255,
		blueOffset: 255,
		alphaOffset: 0
	},
	ColorTransform_Inverse: {
		redMultiplier: -1,
		greenMultiplier: -1,
		blueMultiplier: -1,
		alphaMultiplier: 1,
		redOffset: 255,
		greenOffset: 255,
		blueOffset: 255,
		alphaOffset: 0
	},
	ColorTransform_Equal: function(transform1, transform2) {
		if (transform1.redMultiplier != transform2.redMultiplier ||
			transform1.greenMultiplier != transform2.greenMultiplier ||
			transform1.blueMultiplier != transform2.blueMultiplier ||
			transform1.alphaMultiplier != transform2.alphaMultiplier ||
			transform1.redOffset != transform2.redOffset ||
			transform1.greenOffset != transform2.greenOffset ||
			transform1.blueOffset != transform2.blueOffset ||
			transform1.alphaOffset != transform2.alphaOffset)
			return false;
		return true;
	},
	ColorTransform_Clone: function(transform) {
		return new zetaret.global.packages.clockwork.color.ColorTransform(transform.redMultiplier,
			transform.greenMultiplier,
			transform.blueMultiplier,
			transform.alphaMultiplier,
			transform.redOffset,
			transform.greenOffset,
			transform.blueOffset,
			transform.alphaOffset);
	},
	ColorTransform_GenerateNormal: function() {
		return new zetaret.global.packages.clockwork.color.ColorTransform();
	},
	ColorTransform_GenerateDarkness: function() {
		return new zetaret.global.packages.clockwork.color.ColorTransform(1, 1, 1, 1, -255, -255, -255, 0);
	},
	ColorTransform_GenerateLightness: function() {
		return new zetaret.global.packages.clockwork.color.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
	},
	ColorTransform_GenerateInverse: function() {
		return new zetaret.global.packages.clockwork.color.ColorTransform(-1, -1, -1, 1, 255, 255, 255, 0);
	},
	ColorTransform_Process: function(start, end, time) {
		if (isNaN(time)) time = this.ZERO;
		return new zetaret.global.packages.clockwork.color.ColorTransform(this.BaseValueOnTime(start.redMultiplier, end.redMultiplier, time),
			this.BaseValueOnTime(start.greenMultiplier, end.greenMultiplier, time),
			this.BaseValueOnTime(start.blueMultiplier, end.blueMultiplier, time),
			this.BaseValueOnTime(start.alphaMultiplier, end.alphaMultiplier, time),
			this.BaseValueOnTime(start.redOffset, end.redOffset, time),
			this.BaseValueOnTime(start.greenOffset, end.greenOffset, time),
			this.BaseValueOnTime(start.blueOffset, end.blueOffset, time),
			this.BaseValueOnTime(start.alphaOffset, end.alphaOffset, time));
	},
	ColorTransform_TransformSetter: function(target, parameter, colorTransform) {
		target.colortransform = colorTransform.toArr();
	},
	ColorTransform_Tint: function(color, percent) {
		var p = 1 - percent;
		return new zetaret.global.packages.clockwork.color.ColorTransform(p, p, p, this.ONE,
			percent * this.GetRed(color),
			percent * this.GetGreen(color),
			percent * this.GetBlue(color),
			percent * this.GetAlpha(color));
	},
	ColorTransform_ProcessTint: function(target, color, time, percent) {
		return this.ColorTransform_Process(target, this.ColorTransform_Tint(color, percent), time);
	},
	TintObject: function(target, color, percent) {
		target.colortransform = this.ColorTransform_Tint(color, percent).toArr();
	},
	Color2HSB: function(color) {
		return this.RGB2HSB(this.GetRed(color), this.GetGreen(color), this.GetBlue(color));
	},
	Color2HSL: function(color) {
		return this.RGB2HSL(this.GetRed(color), this.GetGreen(color), this.GetBlue(color));
	},
	Color2RGB: function(color) {
		return new zetaret.global.packages.clockwork.color.RGB(this.GetRed(color), this.GetGreen(color), this.GetBlue(color));
	},
	FromARGB: function(alpha, red, green, blue) {
		return ((alpha << this.ALPHA) | (red << this.RED) | (green << this.GREEN) | blue);
	},
	FromRGB: function(red, green, blue) {
		return ((red << this.RED) | (green << this.GREEN) | blue);
	},
	HSB2Color: function(hsb) {
		return this.RGB2Color(hsb.ToRGB());
	},
	HSB2HSL: function(hue, saturation, brightness) {
		return this.HSB2RGB(hue, saturation, brightness).ToHSL();
	},
	HSB2RGB: function(hue, saturation, brightness) {
		var r, g, b;
		hue *= this.HUE_SECTIONS;
		var hi = Math.floor(hue);
		if (hi == this.HUE_SECTIONS)
			hi = this.ZERO;

		var f = hue - hi,
			p = brightness * (this.ONE - saturation),
			q = brightness * (this.ONE - f * saturation),
			t = brightness * (this.ONE - (this.ONE - f) * saturation);

		switch (hi) {
			case this.ZERO:
				r = brightness;
				g = t;
				b = p;
				break;
			case this.ONE:
				r = q;
				g = brightness;
				b = p;
				break;
			case this.TWICE:
				r = p;
				g = brightness;
				b = t;
				break;
			case this.THREE:
				r = p;
				g = q;
				b = brightness;
				break;
			case this.FOUR:
				r = t;
				g = p;
				b = brightness;
				break;
			case this.FIVE:
				r = brightness;
				g = p;
				b = q;
				break;
		}

		return new zetaret.global.packages.clockwork.color.RGB(this.PercentToHex(r), this.PercentToHex(g), this.PercentToHex(b));
	},
	HSL2Color: function(hsl) {
		return this.RGB2Color(hsl.ToRGB());
	},
	HSL2HSB: function(hue, saturation, luminosity) {
		return this.HSL2RGB(hue, saturation, luminosity).ToHSB();
	},
	HSL2RGB: function(hue, saturation, luminosity) {
		var r, g, b, q;

		if (saturation === 0) {
			r = luminosity;
			g = luminosity;
			b = luminosity;
		} else {
			if (luminosity < this.HALF_HEX) q = luminosity * (this.ONE + saturation);
			else q = luminosity + saturation - (luminosity * saturation);

			var p = this.TWICE * luminosity - q,
				t = [];
			t[0] = hue + this.ONE_THIRD;
			t[1] = hue;
			t[2] = hue - this.ONE_THIRD;
			var i, c = [];
			for (i = this.ZERO; i < this.THREE; ++i) {
				if (t[i] < this.ZERO)
					t[i] = t[i] + this.ONE;
				else if (t[i] > this.ONE)
					t[i] = t[i] - this.ONE;
				if (t[i] < this.HUE_SECTION)
					c[i] = p + (q - p) * this.HUE_SECTIONS * t[i];
				else if (t[i] < (this.HALF))
					c[i] = q;
				else if (t[i] < (this.TWO_THIRDS))
					c[i] = p + (q - p) * this.HUE_SECTIONS * (this.TWO_THIRDS - t[i]);
				else
					c[i] = p;
			}

			r = c[0];
			g = c[1];
			b = c[2];
		}

		return new zetaret.global.packages.clockwork.color.RGB(this.ToHex(this.PercentToHex(r)), this.ToHex(this.PercentToHex(g)), this.ToHex(this.PercentToHex(b)));
	},
	RGB2Color: function(rgb) {
		return this.FromRGB(rgb.Red, rgb.Green, rgb.Blue);
	},
	RGB2HSB: function(red, green, blue) {
		var hue, sat, bri, r = this.HexToPercent(red),
			g = this.HexToPercent(green),
			b = this.HexToPercent(blue),
			max = Math.max(r, g, b),
			min = Math.min(r, g, b);
		bri = max;
		if (max == min) hue = this.ZERO;
		else {
			if (max == r && g >= b)
				hue = ((g - b) / (max - min)) / this.HUE_SECTIONS;
			else if (max == r)
				hue = ((g - b) / (max - min)) / this.HUE_SECTIONS + this.ONE;
			else if (max == g)
				hue = ((b - r) / (max - min)) / this.HUE_SECTIONS + this.ONE_THIRD;
			else if (max == b)
				hue = ((r - g) / (max - min)) / this.HUE_SECTIONS + this.TWO_THIRDS;
		}
		if (max === 0)
			sat = this.ZERO;
		else
			sat = this.ONE - min / max;

		return new zetaret.global.packages.clockwork.color.HSB(hue, sat, bri);
	},
	RGB2HSL: function(red, green, blue) {
		var hue, sat, lum, r = this.HexToPercent(red),
			g = this.HexToPercent(green),
			b = this.HexToPercent(blue),
			max = Math.max(r, g, b),
			min = Math.min(r, g, b);
		lum = (max + min) * this.HALF;
		if (max == min) {
			hue = 0;
			sat = 0;
		} else {
			var delta = max - min;
			if (max == r && g >= b)
				hue = ((g - b) / delta) / this.HUE_SECTIONS;
			else if (max == r)
				hue = ((g - b) / delta) / this.HUE_SECTIONS + this.ONE;
			else if (max == g)
				hue = ((b - r) / delta) / this.HUE_SECTIONS + this.ONE_THIRD;
			else if (max == b)
				hue = ((r - g) / delta) / this.HUE_SECTIONS + this.TWO_THIRDS;

			if (lum <= this.HALF) sat = delta / (max + min);
			else sat = delta / (this.TWICE - (max + min));
		}
		return new zetaret.global.packages.clockwork.color.HSL(hue, sat, lum);
	},
	BaseValueOnTime: function(start, end, time) {
		return (end - start) * time + start;
	},
	HexToPercent: function(value) {
		return value / this.HEX;
	},
	PercentToHex: function(value) {
		return value * this.HEX;
	},
	ToHex: function(value) {
		if (value < this.MIN_CHANNEL)
			return this.MIN_CHANNEL;
		else if (value > this.MAX_CHANNEL)
			return this.MAX_CHANNEL;
		return Math.round(value);
	},
	ToPercent: function(value) {
		if (value < this.MIN_PERCENT)
			return this.MIN_PERCENT;
		else if (value > this.MAX_PERCENT)
			return this.MAX_PERCENT;
		return value;
	}
});