declare namespace zetaret.global.packages.clockwork.graphics {
	export interface GraphicStrokeCTOR {
		new(): GraphicStroke
	}
	export interface GraphicStroke extends GraphicCommand {
		color: FillType;
		alpha: number;
		caps: string;
		fill: FillType;
		joints: string;
		miterLimit: number;
		pixelHinting: boolean;
		scaleMode: string;
		thickness: number;
		offset: number;
		command: number;

		toCommandData(): Array<object>
	}
	export interface GraphicStrokeStatic {
		NONE: "none",
		ROUND: "round",
		SQUARE: "square",
		MITER: "miter",
		BEVEL: "bevel",
		HORIZONTAL: "horizontal",
		VERTICAL: "vertical"
	}
}