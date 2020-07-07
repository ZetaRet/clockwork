declare namespace zetaret.global.packages.clockwork.graphics {
	export interface GraphicShaderFillCTOR {
		new(): GraphicShaderFill
	}
	export interface GraphicShaderFill extends GraphicCommand {
		matrix: object;
		shader: Function;
		data: object;
		xoffset: number;
		yoffset: number;
		x: number;
		y: number;
		width: number;
		height: number;
		byteCode: object;
		precisionHint: string;
		command: number;

		toCommandData(): Array<object>
	}
}