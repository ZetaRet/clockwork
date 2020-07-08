declare namespace zetaret.global.packages.clockwork.data {
	export interface RandomizerCTOR {
		new(seed?: number, count?: number): Randomizer
	}
	export interface Randomizer {
		Seed: number;
		Count: number;
		SEED_CONST: number;
		TIME_CONST: number;
		NUMBER_SEED_CONST: number;
		OVERFLOW_CONST: number;
		randomSeedCount: number;

		setRandomSeed(): zetaret.global.packages.clockwork.data.Randomizer
		GetTime(): number
		GenerateSeed(): number
		GetInt(): number
		GetNumber(): number
		GetRange(min: number, max: number): number
		GetRangeMethod(min: number, max: number, method: Function): number
		Clone(): zetaret.global.packages.clockwork.data.Randomizer
	}
}