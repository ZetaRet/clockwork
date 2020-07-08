declare namespace zetaret.global.packages.clockwork.events {
	export interface KeyboardEventCTOR {
		new(type: string, target?: zetaret.global.packages.clockwork.events.EventTarget): KeyboardEvent
	}
	export interface KeyboardEvent extends zetaret.global.packages.clockwork.events.Event {
		key: string;
		code: string;
		keyCode: number;

		getKey(): string
		getCode(): string
		getKeyCode(): string
		setNativeEvent(e: globalThis.KeyboardEvent): zetaret.global.packages.clockwork.events.KeyboardEvent
	}
}