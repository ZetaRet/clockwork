declare namespace zetaret.global.packages.clockwork.graphics {
	export interface GraphicSolidFillCTOR {
		new(): GraphicSolidFill
	}
	export interface GraphicSolidFill extends GraphicCommand {
		color: FillType;
		command: number;

		toCommandData(): Array<object>
	}
}