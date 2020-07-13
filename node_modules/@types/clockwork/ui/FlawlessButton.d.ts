declare namespace zetaret.global.packages.clockwork.ui {
	export interface FlawlessButtonCTOR {
		new(): FlawlessButton
	}
	export interface FlawlessButton {
		bgshadow: zetaret.global.packages.clockwork.ui.Shape;
		bg: zetaret.global.packages.clockwork.ui.Shape;
		cachesuf: string;
		cacheid: string;
		shadowcacheid: string;
		normalGradient: Array<object>;
		normalLineGradient: Array<object>;
		normalTextColor: zetaret.global.packages.clockwork.graphics.FillType;
		normalTextFont: string;
		overGradient: Array<object>;
		overLineGradient: Array<object>;
		overTextColor: zetaret.global.packages.clockwork.graphics.FillType;
		overTextFont: string;
		downGradient: Array<object>;
		downLineGradient: Array<object>;
		downTextColor: zetaret.global.packages.clockwork.graphics.FillType;
		downTextFont: string;
		text: string;
		textYOffset: number;
		textXOffset: number;
		textDownYOffset: number;
		textDownXOffset: number;
		textOverYOffset: number;
		textOverXOffset: number;
		strokeSize: number;
		borderTL: number;
		borderTR: number;
		borderBL: number;
		borderBR: number;
		shadowBlur: number;
		shadowOffsetX: number;
		shadowOffsetY: number;
		shadowFill: zetaret.global.packages.clockwork.graphics.FillType;
		shadowBlend: zetaret.global.packages.clockwork.graphics.FillType;
		shadowAlpha: number;

		renderNormal(): void
		renderOver(): void
		renderDown(): void
		craft(width: number, height: number, style: object): zetaret.global.packages.clockwork.ui.FlawlessButton
		mouseOver(e: zetaret.global.packages.clockwork.events.Event, stage: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		mouseOut(e: zetaret.global.packages.clockwork.events.Event, stage: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		mouseDown(e: zetaret.global.packages.clockwork.events.Event, stage: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		mouseUp(e: zetaret.global.packages.clockwork.events.Event, stage: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		mouseUpOutside(e: zetaret.global.packages.clockwork.events.Event, stage: zetaret.global.packages.clockwork.controllers.Stage2DController): void
		initListeners(): void
		destruct(): void
	}
}