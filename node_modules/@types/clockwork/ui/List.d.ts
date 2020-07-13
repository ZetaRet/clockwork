declare namespace zetaret.global.packages.clockwork.ui {
	export interface ListCTOR {
		new(): List
	}
	export interface List extends DisplayObjectContainer {
		listItems: Array<object>;
		xmargin: number;
		ymargin: number;
		xspace: number;
		yspace: number;
		xoffset: number;
		yoffset: number;
		listItemWidth: number;
		listItemHeight: number;
		xarrange: boolean;
		yarrange: boolean;
		xsize: number;
		ysize: number;

		addListItem(li: object): zetaret.global.packages.clockwork.ui.List
		removeListItem(li: object): boolean
		setConfig(cfg: object): zetaret.global.packages.clockwork.ui.List
		readdListItems(): zetaret.global.packages.clockwork.ui.List
		arrangeList(): zetaret.global.packages.clockwork.ui.List
		invalidateList(): zetaret.global.packages.clockwork.ui.List
	}
}