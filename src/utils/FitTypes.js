window.package("zetaret.global.packages.clockwork.utils").internal({
	name: "FitTypes",
	version: "1.00",
	Normal: 0,
	Stretch: 1,
	TouchFromInside: 2,
	TouchFromOutside: 3,
	Fit: function(targetWidth, targetHeight, frameWidth, frameHeight,
		xAlign, yAlign, type, maxScale, minScale, scaleMultiplier,
		downscale, frameScale, minMaxMultiplier) {
		if (xAlign === undefined) xAlign = 0.5;
		if (yAlign === undefined) yAlign = 0.5;
		if (type === undefined) type = 2;
		if (maxScale === undefined) maxScale = -1;
		if (minScale === undefined) minScale = -1;
		if (scaleMultiplier === undefined) scaleMultiplier = 1;
		if (downscale === undefined) downscale = 0;
		if (frameScale === undefined) frameScale = 1;
		if (minMaxMultiplier === undefined) minMaxMultiplier = 1;
		var output = {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			scale, min, max, xScale, yScale;

		switch (type) {
			case zetaret.global.packages.clockwork.utils.FitTypes.TouchFromInside:
			case zetaret.global.packages.clockwork.utils.FitTypes.TouchFromOutside:
				xScale = frameWidth / ((targetWidth > 0) ? targetWidth : 1);
				yScale = frameHeight / ((targetHeight > 0) ? targetHeight : 1);
				min = xScale < yScale ? xScale : yScale;
				max = xScale > yScale ? xScale : yScale;

				if (type === zetaret.global.packages.clockwork.utils.FitTypes.TouchFromInside)
					scale = max + (min - max) * frameScale;
				else
					scale = min + (max - min) * frameScale;

				scale *= scaleMultiplier;
				scale = scale - downscale * (scale - (minScale >= 0 ? minScale : 1));
				if (minMaxMultiplier !== 1) {
					scale = (minMaxMultiplier < 1 ? minScale + (scale - minScale) * minMaxMultiplier : scale + (maxScale - scale) * (minMaxMultiplier - 1));
				}
				if (minScale >= 0 && scale < minScale)
					scale = minScale;
				if (maxScale >= 0 && scale > maxScale)
					scale = maxScale;
				output.width = targetWidth * scale;
				output.height = targetHeight * scale;
				break;
			case zetaret.global.packages.clockwork.utils.FitTypes.Stretch:
				output.width = frameWidth;
				output.height = frameHeight;
				break;
			default:
				output.width = targetWidth * scaleMultiplier;
				output.height = targetHeight * scaleMultiplier;
		}
		output.sx = output.width / targetWidth;
		output.sy = output.height / targetHeight;
		output.x = (frameWidth - output.width) * xAlign;
		output.y = (frameHeight - output.height) * yAlign;

		return output;
	}
});