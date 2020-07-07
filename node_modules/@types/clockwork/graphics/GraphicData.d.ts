declare namespace zetaret.global.packages.clockwork.graphics {
	export interface GraphicDataCTOR {
		new(): GraphicData
	}
	export interface GraphicData {
		data: object;
		command: number;
		type: string;
	}
}