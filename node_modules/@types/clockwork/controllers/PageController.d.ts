declare namespace zetaret.global.packages.clockwork.controllers {
	export interface PageControllerCTOR {
		new(container?: zetaret.global.packages.clockwork.ui.DisplayObjectContainer, pages?: Array<object>): PageController
	}
	export interface PageController extends zetaret.global.packages.clockwork.events.EventDispatcher {
		Container: zetaret.global.packages.clockwork.ui.DisplayObjectContainer;
		Pages: Array<string>;
		PageIndex: number;
		CurrentPage: zetaret.global.packages.clockwork.ui.PageBase;
		DispatchFirstPageInit: boolean;
		DataMap: object;
		ChangeHandler: Function;
		BeforeDestroyMethod: string;
		InitMethod: string;
		PageClassSuffix: string;
		CachedPages: { [name: string]: zetaret.global.packages.clockwork.ui.PageBase };
		CachePages: boolean;
		AnimateFirstPage: boolean;
		RecreateIds: object;
		pageKey: number;
		dataKey: number;
		pagePackage: string;
		mAnimating: boolean;
		mQueue: number;
		mQueueSuffix: string;
		mQueueCallback: Function;

		get_PageId(): string
		get_PageClass(): string
		onComplete(oldPage?: zetaret.global.packages.clockwork.ui.PageBase): void
		AddPageById(id: string, data: object, index: number): zetaret.global.packages.clockwork.controllers.PageController
		SetPages(pages: Array<string | Array<number>>): zetaret.global.packages.clockwork.controllers.PageController
		DestroyPage(): zetaret.global.packages.clockwork.controllers.PageController
		GetPage(id: string, suffix?: string): zetaret.global.packages.clockwork.ui.PageBase
		ShowPage(indexOrId: number | string, suffix?: string, callback?: Function): zetaret.global.packages.clockwork.ui.PageBase
	}
}