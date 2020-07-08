declare namespace zetaret.global.packages.clockwork.data {
	export interface RSICTOR {
		new(): RSI
	}
	export interface RSI {
		residualImage: Object | Function;
		residualMod: boolean;
		residualImagex: string;
		rsiself: object;
		rsikeys: Array<object>;
		timestamp: number;
		autoTimestamp: boolean;

		transferResidualImage(obj: object, keys?: Array<object>, scope?: object, timestamp?: boolean | number): zetaret.global.packages.clockwork.data.RSI
		clearRSI(): void
	}
}