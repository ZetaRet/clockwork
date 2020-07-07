declare namespace zetaret.global.packages.clockwork.graphics {
	export interface GraphicsCTOR {
		new(): Graphics
	}
	export interface Graphics {
		invalid: boolean;
		cachedIntArray: Array<number>;
		cachedDirect: Array<object>;
		direct: boolean;
		fillPath: boolean;
		autoStroke: boolean;
		autoFill: boolean;
		autoPath: boolean;
		autoOP: boolean;
		autoCacheGradients: boolean;
		gradientCacheId: string;
		gradientCache: Array<object>;
		graphicsMediator: zetaret.global.packages.clockwork.mediators.GraphicContext2DMediator;
		commands: Array<GraphicType>;
		graphicsData: Array<object>;
		cacheMap: object;

		enableGradientCache(id: string): Graphics
		addCommand(command: GraphicType): Graphics
		updateLastCommand(p: object): Graphics
		getCommand(type: GraphicType, startIndex?: number): GraphicType
		copyFrom(graphics: Graphics): Graphics
		beginBitmapFill(bitmap: BitmapType, matrix?: SVGMatrix, repeat?: string, smooth?: boolean, alpha?: number): Graphics
		beginFill(color: FillType, alpha?: number): Graphics
		beginGradientFill(type: string, gradient: Array<object>, colors: Array<object>, alphas?: Array<object>, ratios?: Array<object>, matrix?: SVGMatrix, spreadMethod?: string, interpolationMethod?: string, focalPointRatio?: number, alpha?: number): Graphics
		beginPath(): Graphics
		endPath(): Graphics
		strokePath(): Graphics
		stroke(): Graphics
		arc(x: number, y: number, r: number, startAngle: number, endAngle: number, anticlockwise?: boolean): Graphics
		arcTo(x1: number, y1: number, x2: number, y2: number, r: number): Graphics
		cubicCurveTo(cx1: number, cy1: number, cx2: number, cy2: number, ax: number, ay: number): Graphics
		curveTo(cx: number, cy: number, ax: number, ay: number): Graphics
		drawCircle(cx: number, cy: number, radius: number): Graphics
		drawEllipse(x: number, y: number, width: number, height: number, rx: number, ry: number): Graphics
		drawEllipse2(x: number, y: number, rx: number, ry: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): Graphics
		drawGraphicsData(graphicsData: Array<GraphicType>): Graphics
		drawPath(commands: Array<GraphicType>, data?: object, winding?: string): Graphics
		drawRect(x: number, y: number, width: number, height: number): Graphics
		drawRect2(x: number, y: number, width: number, height: number): Graphics
		drawRoundRect(x: number, y: number, width: number, height: number, rtl: number, rtr: number, rbl: number, rbr: number): Graphics
		drawRoundRect2(x: number, y: number, width: number, height: number, rtl: number, rtr: number, rbl: number, rbr: number): Graphics
		drawOuterRect(x: number, y: number, w: number, h: number, s: number): Graphics
		drawOuterArc(hs: number, x: number, y: number, r: number, startAngle: number, endAngle: number, anticlockwise?: boolean): Graphics
		dropShadow(color: ColorType, blur: number, offsetX: number, offsetY: number, composite?: string): Graphics
		setComposite(alpha: number, blend: string): Graphics
		drawMask(): Graphics
		drawLayer(): Graphics
		drawRestore(): Graphics
		drawRadient(x: number, y: number, r: number, colors: Array<object>, facet: number, stroke: number, offset?: number, circum?: number, gdata?: object, gradienth?: Function, pathh?: Function, alpha?: number, ldata?: object, edata?: object): Graphics
		endFill(stroke?: boolean, resetColor?: boolean, resetColorTransform?: boolean, resetStroke?: boolean): Graphics
		lineBitmapStyle(bitmap: BitmapType, matrix?: SVGMatrix, repeat?: string, smooth?: boolean, alpha?: number): Graphics
		lineGradientStyle(type: string, gradient: Array<object>, colors: Array<object>, alphas?: Array<object>, ratios?: Array<object>, matrix?: SVGMatrix, spreadMethod?: string, interpolationMethod?: string, focalPointRatio?: number, alpha?: number): Graphics
		lineStyle(thickness: number, color: FillType, alpha?: number, pixelHinting?: boolean, scaleMode?: string, caps?: string, joints?: string, miterLimit?: string): Graphics
		lineTo(x: number, y: number): Graphics
		moveTo(x: number, y: number): Graphics
		textStyle(color: FillType, font?: string, alpha?: number, stroke?: boolean, align?: string, baseline?: string, direction?: string): Graphics
		text(data: string, x: number, y: number, width?: number, stroke?: boolean): Graphics
		readCustomCommand(c: GraphicType): GraphicType
		readGraphicsData(cached?: boolean): Array<object>
		toIntArray(ctxrenderer?: zetaret.global.packages.clockwork.context.ContextRenderer): Array<number>
		toDirect(ctxrenderer?: zetaret.global.packages.clockwork.context.ContextRenderer): Array<object>
		filterGraphicsData(types: Array<object>, cached?: boolean): Array<object>
		getGraphicsDimensions(): Array<object>
		clearCache(): Graphics
		clearGradientCache(): Graphics
		clearGraphicsData(): Graphics
		clear(): Graphics
		invalidate(): Graphics
		clone(): Graphics
	}
	export interface GraphicsStatic {
		EMPTY_ARRAY: []
	}
}