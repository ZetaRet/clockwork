declare namespace zetaret.global.packages.clockwork.graphics {
	export interface GraphicBitmapFillCTOR {
		new(): GraphicBitmapFill
	}
	export interface GraphicBitmapFill extends GraphicCommand {
		bitmapData: BitmapType;
		matrix: SVGMatrix;
		repeat: string;
		smooth: boolean;
		alpha: number;
		stroke: boolean;
		imgid: string;
		command: number;

		toCommandData(): Array<object>
	}
	export interface GraphicBitmapFillStatic {
		REPEAT: "repeat",
		REPEAT_X: "repeat-x",
		REPEAT_Y: "repeat-y",
		NO_REPEAT: "no-repeat"
	}
}