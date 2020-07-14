declare namespace zetaret.global.packages.clockwork.events {
	export interface EventDispatcherCTOR {
		new(target?: zetaret.global.packages.clockwork.events.IEventTarget): EventDispatcher
	}
	export interface EventDispatcher {
		eventTarget: zetaret.global.packages.clockwork.events.IEventTarget;
		events: object;

		setEventTarget(target: zetaret.global.packages.clockwork.events.IEventTarget): zetaret.global.packages.clockwork.events.EventDispatcher
		addEventListener(event: string, callback: Function): zetaret.global.packages.clockwork.events.EventDispatcher
		removeEventListener(event: string, callback?: Function): zetaret.global.packages.clockwork.events.EventDispatcher
		hasEvent(event: string): boolean
		dispatch(event: string, data?: EventDataType): zetaret.global.packages.clockwork.events.EventDispatcher
		dispatchEvent(event: zetaret.global.packages.clockwork.events.Event, data?: EventDataType, settarget?: boolean): zetaret.global.packages.clockwork.events.EventDispatcher
		destruct(): void
	}
}