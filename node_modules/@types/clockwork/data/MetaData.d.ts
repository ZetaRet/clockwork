declare namespace zetaret.global.packages.clockwork.data {
	export interface MetaDataCTOR {
		new(): MetaData
	}
	export interface MetaData {
		metadata: object;

		setMetaData(key: string, value: object): zetaret.global.packages.clockwork.data.MetaData
		getMetaData(): object
		getMetaDataByKey(key: string): object
	}
}