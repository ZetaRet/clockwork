declare namespace zetaret.global.packages.clockwork.ui {
	export interface AlertBoxCTOR {
		new(): AlertBox
	}
	export interface AlertBox {
		bg: zetaret.global.packages.clockwork.ui.Shape;
		yesBtn: zetaret.global.packages.clockwork.ui.LabelButton;
		noBtn: zetaret.global.packages.clockwork.ui.LabelButton;
		closeBtn: zetaret.global.packages.clockwork.ui.ButtonContainer;
		txt: zetaret.global.packages.clockwork.ui.TextField;
		icon: zetaret.global.packages.clockwork.ui.Image;
		
		alert(message: string): zetaret.global.packages.clockwork.ui.AlertBox
		initBox(yes?: boolean, no?: boolean, close?: boolean, label?: boolean, icon?: boolean): zetaret.global.packages.clockwork.ui.AlertBox
		defaultButtons(): zetaret.global.packages.clockwork.ui.AlertBox
		onCancel(e?: zetaret.global.packages.clockwork.events.Event, d?: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		onOk(e?: zetaret.global.packages.clockwork.events.Event, d?: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		destruct(): void
	}
}