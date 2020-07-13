declare namespace zetaret.global.packages.clockwork.ui {
	export interface MenuCTOR {
		new(): Menu
	}
	export interface Menu extends ButtonContainer {
		menulist: zetaret.global.packages.clockwork.ui.List;
		menubg: zetaret.global.packages.clockwork.ui.Shape;
		menulabels: object;
		autoInvalidate: boolean;

		setBackground(): zetaret.global.packages.clockwork.ui.Shape
		addbtn(id: string, handler?: Function): zetaret.global.packages.clockwork.ui.MenuButton
		addMenuButton(mb: zetaret.global.packages.clockwork.ui.MenuButton): zetaret.global.packages.clockwork.ui.Menu
		initMenu(): zetaret.global.packages.clockwork.ui.Menu
		destruct(): void
	}
}