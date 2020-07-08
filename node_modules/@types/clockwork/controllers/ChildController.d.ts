declare namespace zetaret.global.packages.clockwork.controllers {
	export interface ChildControllerCTOR {
		new(): ChildController
	}
	export interface ChildController extends zetaret.global.packages.clockwork.events.EventDispatcher {
		root: zetaret.global.packages.clockwork.data.ChildContainer;
		iterateExitHandler: Function;
		bubbleMechanics: string;
		bubblePhase: string;
		childrenkey: string;
		targetkey: string;
		listskey: string;
		parentkey: string;
		useFractalRoot: boolean;

		setRoot(root: zetaret.global.packages.clockwork.data.ChildContainer): zetaret.global.packages.clockwork.controllers.ChildController
		setBubblePhase(bphase: string): zetaret.global.packages.clockwork.controllers.ChildController
		setBubbleMechanics(bmech: string): zetaret.global.packages.clockwork.controllers.ChildController
		childToRoot(child: object, f: Function, d?: object, scope?: object): zetaret.global.packages.clockwork.controllers.ChildController
		iterate(child: object, f: Function, d?: object, parent?: zetaret.global.packages.clockwork.data.ChildContainer, list?: Array<object>, scope?: object, mode?: string, skip?: boolean): zetaret.global.packages.clockwork.controllers.ChildController
		iterateInversed(child: object, f: Function, d?: object, parent?: zetaret.global.packages.clockwork.data.ChildContainer, list?: Array<object>, scope?: object, mode?: string, skip?: boolean): zetaret.global.packages.clockwork.controllers.ChildController
	}
}