declare namespace zetaret.global.packages.clockwork.events {
	export interface MouseEventCTOR {
		new(type: string, target?: zetaret.global.packages.clockwork.events.EventTarget): MouseEvent
	}
	export interface MouseEvent extends zetaret.global.packages.clockwork.events.Event {
		x: number;
		y: number;
		ox: number;
		oy: number;
		lx: number;
		ly: number;
		keys: object;

		getX(): number
		getY(): number
		getLocalX(): number
		getLocalY(): number
		getOffsetX(): number
		getOffsetY(): number
		getKeys(): object
		getMouseIn(el: HTMLElement): object
		updateTargetOffset(): zetaret.global.packages.clockwork.events.MouseEvent
		getXY(): Array<object>
		setNativeEvent(e: globalThis.MouseEvent): zetaret.global.packages.clockwork.events.MouseEvent
	}
}