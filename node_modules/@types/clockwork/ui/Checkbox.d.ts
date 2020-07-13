declare namespace zetaret.global.packages.clockwork.ui {
	export interface CheckboxCTOR {
		new(): Checkbox
	}
	export interface Checkbox extends ButtonContainer {
		checked: boolean;
		value: object;
		bg: zetaret.global.packages.clockwork.ui.Shape;
		checkBtn: zetaret.global.packages.clockwork.ui.ButtonContainer;
		txt: zetaret.global.packages.clockwork.ui.TextField;
		bgcheck: boolean;
		autoInvalidateStage: boolean;

		initBox(check?: boolean, label?: boolean): zetaret.global.packages.clockwork.ui.Checkbox
		onCheckClick(e?: zetaret.global.packages.clockwork.events.Event, d?: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		check(val?: boolean): boolean
		change(): zetaret.global.packages.clockwork.ui.Checkbox
		destruct(): void
	}
}