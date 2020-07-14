declare namespace zetaret.global.packages.clockwork.events {
	export interface EventTargetCTOR {
		new(): EventTarget
	}
	export interface EventTarget extends Event, IEventTarget {

	}
	export interface IEventTarget {

	}
}