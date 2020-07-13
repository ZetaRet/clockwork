declare namespace zetaret.global.packages.clockwork.ui {
	export interface DialogCTOR {
		new(): Dialog
	}
	export interface Dialog extends ButtonContainer {
		autoShow: boolean;
		autoArrange: boolean;
		autoInvalidateStage: boolean;
		visible: boolean;

		arrangeBox(): zetaret.global.packages.clockwork.ui.Dialog
		show(): zetaret.global.packages.clockwork.ui.Dialog
		hide(): zetaret.global.packages.clockwork.ui.Dialog
	}
}