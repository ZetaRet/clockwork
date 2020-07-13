declare namespace zetaret.global.packages.clockwork.ui {
	export interface LabelButtonCTOR {
		new(): LabelButton
	}
	export interface LabelButton extends ButtonContainer {
		label: zetaret.global.packages.clockwork.ui.TextField;

		initLabelButton(name: string): zetaret.global.packages.clockwork.ui.LabelButton
		destruct(): void
	}
}