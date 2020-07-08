declare namespace zetaret.global.packages.clockwork.mediators {
	export interface DOMMediatorCTOR {
		new(obj?: object, domo?: HTMLElement): DOMMediator
	}
	export interface DOMMediator extends zetaret.global.packages.clockwork.events.EventDispatcher {
		obj: object;
		domo: HTMLElement;

		eventize(e1: string, e2: string, cls: zetaret.global.packages.clockwork.events.Event | Function, fname: string, h?: Function, obj?: object, domo?: HTMLElement): Function
	}
}