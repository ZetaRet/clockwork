declare namespace zetaret.global.packages.clockwork.graphics {
	export interface GraphicEndFillCTOR {
		new(): GraphicEndFill
	}
	export interface GraphicEndFill extends GraphicCommand {
		resetColorTransform: boolean;
		fillRule: string;
		stroke: boolean;
		resetColor: boolean;
		resetStroke: boolean;
		commandResetColor: number;
		commandResetStroke: number;
		commandStroke: number;
		command: number;

		toCommandData(): Array<object>
	}
	export interface GraphicEndFillStatic {
		NONZERO: "nonzero",
		EVENODD: "evenodd"
	}
}