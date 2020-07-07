declare namespace zetaret.global.packages.clockwork.graphics {
	export interface GraphicTextCTOR {
		new(): GraphicText
	}
	export interface GraphicText {
		color: FillType;
		alpha: number;
		stroke: boolean;
		font: string;
		textAlign: string;
		textBaseline: string;
		direction: string;
		command: number;

		toCommandData(): Array<object>
	}
	export interface GraphicTextStatic {
		RTL: "rtl",
		LTR: "ltr",
		TOP: "top",
		HANGING: "hanging",
		MIDDLE: "middle",
		ALPHABETIC: "alphabetic",
		IDEOGRAPHIC: "ideographic",
		BOTTOM: "bottom"
	}
}