declare namespace zetaret.global.packages.clockwork.ui {
	export interface ButtonContainerCTOR {
		new(): ButtonContainer
	}
	export interface ButtonContainer extends zetaret.global.packages.clockwork.data.ChildContainer, Button {
		addButtonShapeCls: Shape;

		addButtonShape(name?: string, nocfg?: boolean, listeners?: boolean, interaction?: boolean, mouseEnabled?: boolean, mouseChildren?: boolean): object
		configButtonShape(btnsh?: DisplayObject, listeners?: boolean, interaction?: boolean, mouseEnabled?: boolean, mouseChildren?: boolean): ButtonContainer
		getBounds(tm: Array<number>): object
		drag(target?: DisplayObject, dx?: boolean, dtarget?: DisplayObject, handler?: Function, hscope?: object): zetaret.global.packages.clockwork.controllers.DragController
	}
}