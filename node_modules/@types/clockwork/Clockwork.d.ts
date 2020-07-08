declare namespace zetaret.global.packages.clockwork {
	export interface ClockworkCTOR {
		new(): Clockwork
	}
	export interface Clockwork {
		useXeltoss: boolean;
		calibers: object;

		unpackCaliber(clbrname: string, toppack?: object, xeltoss?: boolean): Array<Function>
		xeltossCaliber(clbrname: string): zetaret.global.packages.clockwork.Clockwork
		caliberClass(name: string, supers: Array<Function | string>, settings: object, defname?: boolean, superargs?: null | boolean | object, supertype?: boolean): Function
		runXeltoSS(xcls: Array<Function>): void
	}
}