declare namespace zetaret.global.packages.clockwork.events {
	export type EventDataType = object | zetaret.global.packages.clockwork.events.IEventData;
	export interface EventDataCTOR {
		new(): EventData
	}
	export interface EventData extends Event, IEventData {

	}
	export interface IEventData {
		data: object;

		getData(): object
	}
}