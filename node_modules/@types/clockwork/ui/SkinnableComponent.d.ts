declare namespace zetaret.global.packages.clockwork.ui {
	export interface SkinnableComponentCTOR {
		new(): SkinnableComponent
	}
	export interface SkinnableComponent {
		skinId: string;
		skin: object;
		toskin: Array<object>;
		skintarget: object;
		skindata: object;

		setSkin(skinid: string, skin: object, toskin: object, skindata?: object): zetaret.global.packages.clockwork.ui.SkinnableComponent
		setSkinTarget(target: object): zetaret.global.packages.clockwork.ui.SkinnableComponent
		onUpdateSkin(e?: zetaret.global.packages.clockwork.events.Event, d?: object): void
		skinme(): zetaret.global.packages.clockwork.ui.SkinnableComponent
	}
}