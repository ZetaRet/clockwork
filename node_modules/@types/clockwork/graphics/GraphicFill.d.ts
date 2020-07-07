declare namespace zetaret.global.packages.clockwork.graphics {
	export interface GraphicFillCTOR {
		new(): GraphicFill
	}
	export interface GraphicFill extends GraphicCommand {
		color: FillType;
		alpha: number;
		command: number;

		toCommandData(): Array<object>
	}
}