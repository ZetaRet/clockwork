declare namespace zetaret.global.packages.clockwork.ui {
	export interface TextFieldCTOR {
		new(): TextField
	}
	export interface TextField {
		textColor: zetaret.global.packages.clockwork.graphics.FillType;
		textFont: string;
		textAlpha: number;
		text: string;
		isHtml: boolean;
		maxChars: number;
		autoSize: boolean;
		multiline: boolean;
		wordWrap: boolean;
		textRuns: Array<object>;
		autoRenderText: boolean;
		textWidth: number;
		textX: number;
		textY: number;
		textAlign: string;
		textBaseline: string;
		textDirection: string;
		strokedText: boolean;
		backgroundColor: string;
		backgroundBorder: string;
		backgroundDraw: Function;
		background: boolean;
		border: boolean;
		styleList: Array<object>;

		setText(v: string): zetaret.global.packages.clockwork.ui.TextField
		setHtmlText(v: string): zetaret.global.packages.clockwork.ui.TextField
		setStyleList(list: Array<object>): zetaret.global.packages.clockwork.ui.TextField
		addStyle(style: object): zetaret.global.packages.clockwork.ui.TextField
		removeStyle(style: object): zetaret.global.packages.clockwork.ui.TextField
		applyStyles(): zetaret.global.packages.clockwork.ui.TextField
		setStyle(s: object, ignore?: boolean): zetaret.global.packages.clockwork.ui.TextField
		resetStyle(): zetaret.global.packages.clockwork.ui.TextField
		renderText(): zetaret.global.packages.clockwork.ui.TextField
		destruct(): void
	}
	export interface TextFieldStatic {
		BORDER_THICKNESS: 1,
		BORDER_ALPHA: 1,
		BG_ALPHA: 1
	}
}