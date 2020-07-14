declare namespace zetaret.global.packages.clockwork.events {
	export interface EventCTOR {
		new(type: string, target?: zetaret.global.packages.clockwork.events.EventTarget): Event
	}
	export interface Event {
		type: string;
		bubbles: boolean;
		cancelBubble: boolean;
		cancelable: boolean;
		currentTarget: zetaret.global.packages.clockwork.events.IEventTarget;
		target: zetaret.global.packages.clockwork.events.IEventTarget;
		defaultPrevented: boolean;
		targetMap: object;
		eventPhase: string;
		time: number;
		creator: object;
		nativeEvent: object | globalThis.Event;
		identifier: string;
		_capabilities: object;

		preventBubble(): zetaret.global.packages.clockwork.events.Event
		preventDefault(): zetaret.global.packages.clockwork.events.Event
		preventCapture(): zetaret.global.packages.clockwork.events.Event
		stopPropagation(): zetaret.global.packages.clockwork.events.Event
		stopImmediatePropagation(): zetaret.global.packages.clockwork.events.Event
		setEventPhase(phase: string): zetaret.global.packages.clockwork.events.Event
		setEventType(type: string): zetaret.global.packages.clockwork.events.Event
		setEventTarget(target: zetaret.global.packages.clockwork.events.IEventTarget): zetaret.global.packages.clockwork.events.Event
		setEventCurrentTarget(target: zetaret.global.packages.clockwork.events.IEventTarget): zetaret.global.packages.clockwork.events.Event
		addToTargetMap(target: zetaret.global.packages.clockwork.events.IEventTarget): zetaret.global.packages.clockwork.events.Event
		setNativeEvent(e: object | globalThis.Event): zetaret.global.packages.clockwork.events.Event
		clone(): zetaret.global.packages.clockwork.events.Event
	}
	export interface EventStatic {
		BUBBLE_PHASE: "bubblePhase";
		CAPTURE_PHASE: "capturePhase";
		NO_PHASE: "noPhase";
		NULL_PHASE: "nullPhase";
	}
}