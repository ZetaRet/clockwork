declare namespace zetaret.global.packages.clockwork.ui {
	export interface RadioButtonCTOR {
		new(): RadioButton
	}
	export interface RadioButton extends ButtonContainer {
		checked: boolean;
		value: object;
		radioGroup: Array<object>;
		bg: zetaret.global.packages.clockwork.ui.Shape;
		checkBtn: zetaret.global.packages.clockwork.ui.ButtonContainer;
		txt: zetaret.global.packages.clockwork.ui.TextField;
		bgcheck: boolean;
		autoInvalidateStage: boolean;

		createRadioGroup(btns: Array<object>): zetaret.global.packages.clockwork.ui.RadioButton
		configureRadioGroupButton(button: zetaret.global.packages.clockwork.ui.RadioButton): zetaret.global.packages.clockwork.ui.RadioButton
		onRadioChange(e?: zetaret.global.packages.clockwork.events.Event, d?: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		initBox(check?: boolean, label?: boolean): zetaret.global.packages.clockwork.ui.RadioButton
		onCheckClick(e?: zetaret.global.packages.clockwork.events.Event, d?: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		check(val?: boolean): boolean
		change(): zetaret.global.packages.clockwork.ui.RadioButton
		destruct(): void
	}
}