import { zetaret } from "./../src";

export abstract class EventDispatcherAbstract extends zetaret.global.packages.clockwork.events.EventDispatcher implements zetaret.global.packages.clockwork.events.EventDispatcher {
	eventTarget: zetaret.global.packages.clockwork.events.EventTarget;
	events: object;

	setEventTarget(target: zetaret.global.packages.clockwork.events.EventTarget): zetaret.global.packages.clockwork.events.EventDispatcher { return super.setEventTarget.apply(this, arguments); }
	addEventListener(event: string, callback: Function): zetaret.global.packages.clockwork.events.EventDispatcher { return super.addEventListener.apply(this, arguments); }
	removeEventListener(event: string, callback?: Function): zetaret.global.packages.clockwork.events.EventDispatcher { return super.removeEventListener.apply(this, arguments); }
	hasEvent(event: string): boolean { return super.hasEvent.apply(this, arguments); }
	dispatch(event: string, data?: object | zetaret.global.packages.clockwork.events.EventData): zetaret.global.packages.clockwork.events.EventDispatcher { return super.dispatch.apply(this, arguments); }
	dispatchEvent(event: zetaret.global.packages.clockwork.events.Event, data?: object | zetaret.global.packages.clockwork.events.EventData, settarget?: boolean): zetaret.global.packages.clockwork.events.EventDispatcher { return super.dispatchEvent.apply(this, arguments); }
	destruct(): void { return super.destruct.apply(this, arguments); }
}