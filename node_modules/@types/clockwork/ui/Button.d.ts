declare namespace zetaret.global.packages.clockwork.ui {
	export interface ButtonCTOR {
		new(): Button
	}
	export interface Button extends DisplayObject {
		selected: boolean;
		state: string;
		istate: string;
		isButton: boolean;
		mousec: zetaret.global.packages.clockwork.controllers.MouseController;
		buttonEvent: zetaret.global.packages.clockwork.events.MouseEvent;
		autoStageButton: boolean;
		autoInteraction: boolean;
		interactionQueue: Array<object>;

		setInteraction(mousec?: zetaret.global.packages.clockwork.controllers.MouseController): zetaret.global.packages.clockwork.ui.Button
		addButtonEvent(type: string, cls?: Function): zetaret.global.packages.clockwork.ui.Button
		buttonMode(autostage?: boolean, autointeract?: boolean): zetaret.global.packages.clockwork.ui.Button
		doInteractionQueue(): zetaret.global.packages.clockwork.ui.Button
		configButton(btn: zetaret.global.packages.clockwork.ui.DisplayObject): zetaret.global.packages.clockwork.ui.Button
		onAddedToStage(e: zetaret.global.packages.clockwork.events.Event, stage: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		buttonDefaultPrevent(e: zetaret.global.packages.clockwork.events.Event, stage: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		buttonDefaultStop(e: zetaret.global.packages.clockwork.events.Event, stage: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		onover(e: zetaret.global.packages.clockwork.events.Event, stage: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		onout(e: zetaret.global.packages.clockwork.events.Event, stage: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		over(e: zetaret.global.packages.clockwork.events.Event): zetaret.global.packages.clockwork.ui.Button
		out(e: zetaret.global.packages.clockwork.events.Event): zetaret.global.packages.clockwork.ui.Button
		up(e: zetaret.global.packages.clockwork.events.Event): zetaret.global.packages.clockwork.ui.Button
		down(e: zetaret.global.packages.clockwork.events.Event): zetaret.global.packages.clockwork.ui.Button
		click(e: zetaret.global.packages.clockwork.events.Event): zetaret.global.packages.clockwork.ui.Button
		move(e: zetaret.global.packages.clockwork.events.Event): zetaret.global.packages.clockwork.ui.Button
		enter(e: zetaret.global.packages.clockwork.events.Event): zetaret.global.packages.clockwork.ui.Button
		leave(e: zetaret.global.packages.clockwork.events.Event): zetaret.global.packages.clockwork.ui.Button
		select(): zetaret.global.packages.clockwork.ui.Button
		unselect(): zetaret.global.packages.clockwork.ui.Button
		getState(): string
		setState(state: string): zetaret.global.packages.clockwork.ui.Button
	}
	export interface ButtonStatic {
		SELECTED: "selected",
		UNSELECTED: "unselected",
		OVERSELECT: "over,selected",
		OVERUNSELECT: "over,unselect",
		NULL: null,
		NONE: "none"
	}
}