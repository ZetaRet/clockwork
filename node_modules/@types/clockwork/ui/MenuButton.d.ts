declare namespace zetaret.global.packages.clockwork.ui {
	export interface MenuButtonCTOR {
		new(): MenuButton
	}
	export interface MenuButton extends ButtonContainer {
		tf: zetaret.global.packages.clockwork.ui.TextField;

		setText(txt: string): zetaret.global.packages.clockwork.ui.MenuButton
		initMenuButton(): zetaret.global.packages.clockwork.ui.MenuButton
	}
}