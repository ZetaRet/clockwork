import { zetaret } from "./src";

const ClockworkInstance: zetaret.global.packages.clockwork.Clockwork = new zetaret.global.packages.clockwork.Clockwork();

const ContextRendererInstance: zetaret.global.packages.clockwork.context.ContextRenderer = new zetaret.global.packages.clockwork.context.ContextRenderer();
const Canvas2DRendererInstance: zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer = new zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer();
const Canvas2DRendererStatic: zetaret.global.packages.clockwork.context.c2d.Canvas2DRendererStatic = zetaret.global.packages.clockwork.context.c2d.Canvas2DRenderer;

const ChildControllerInstance: zetaret.global.packages.clockwork.controllers.ChildController = new zetaret.global.packages.clockwork.controllers.ChildController();
const DragControllerInstance: zetaret.global.packages.clockwork.controllers.DragController = new zetaret.global.packages.clockwork.controllers.DragController();
const InteractionControllerInstance: zetaret.global.packages.clockwork.controllers.InteractionController = new zetaret.global.packages.clockwork.controllers.InteractionController();
const KeyboardControllerInstance: zetaret.global.packages.clockwork.controllers.KeyboardController = new zetaret.global.packages.clockwork.controllers.KeyboardController();
const MouseControllerInstance: zetaret.global.packages.clockwork.controllers.MouseController = new zetaret.global.packages.clockwork.controllers.MouseController();
const PageControllerInstance: zetaret.global.packages.clockwork.controllers.PageController = new zetaret.global.packages.clockwork.controllers.PageController();
const Stage2DControllerInstance: zetaret.global.packages.clockwork.controllers.Stage2DController = new zetaret.global.packages.clockwork.controllers.Stage2DController();

const AppDataInstance: zetaret.global.packages.clockwork.data.AppData = new zetaret.global.packages.clockwork.data.AppData();
const ChildContainerInstance: zetaret.global.packages.clockwork.data.ChildContainer = new zetaret.global.packages.clockwork.data.ChildContainer();
const MatrixInstance: zetaret.global.packages.clockwork.data.Matrix = new zetaret.global.packages.clockwork.data.Matrix();
const MetaDataInstance: zetaret.global.packages.clockwork.data.MetaData = new zetaret.global.packages.clockwork.data.MetaData();
const RandomizerInstance: zetaret.global.packages.clockwork.data.Randomizer = new zetaret.global.packages.clockwork.data.Randomizer();
const RSIInstance: zetaret.global.packages.clockwork.data.RSI = new zetaret.global.packages.clockwork.data.RSI();

const EventInstance: zetaret.global.packages.clockwork.events.Event = new zetaret.global.packages.clockwork.events.Event();
const EventStatic: zetaret.global.packages.clockwork.events.EventStatic = zetaret.global.packages.clockwork.events.Event;
const EventDataInstance: zetaret.global.packages.clockwork.events.EventData = new zetaret.global.packages.clockwork.events.EventData();
const EventDispatcherInstance: zetaret.global.packages.clockwork.events.EventDispatcher = new zetaret.global.packages.clockwork.events.EventDispatcher();
const EventTargetInstance: zetaret.global.packages.clockwork.events.EventTarget = new zetaret.global.packages.clockwork.events.EventTarget();
const KeyboardEventInstance: zetaret.global.packages.clockwork.events.KeyboardEvent = new zetaret.global.packages.clockwork.events.KeyboardEvent();
const MouseEventInstance: zetaret.global.packages.clockwork.events.MouseEvent = new zetaret.global.packages.clockwork.events.MouseEvent();

const GraphicBitmapFillInstance: zetaret.global.packages.clockwork.graphics.GraphicBitmapFill = new zetaret.global.packages.clockwork.graphics.GraphicBitmapFill;
const GraphicCommandInstance: zetaret.global.packages.clockwork.graphics.GraphicCommand = new zetaret.global.packages.clockwork.graphics.GraphicCommand();
const GraphicCommandStatic: zetaret.global.packages.clockwork.graphics.GraphicCommandStatic = zetaret.global.packages.clockwork.graphics.GraphicCommand;
const GraphicDataInstance: zetaret.global.packages.clockwork.graphics.GraphicData = new zetaret.global.packages.clockwork.graphics.GraphicData();
const GraphicEndFillInstance: zetaret.global.packages.clockwork.graphics.GraphicEndFill = new zetaret.global.packages.clockwork.graphics.GraphicEndFill();
const GraphicFillInstance: zetaret.global.packages.clockwork.graphics.GraphicFill = new zetaret.global.packages.clockwork.graphics.GraphicFill();
const GraphicGradientFillInstance: zetaret.global.packages.clockwork.graphics.GraphicGradientFill = new zetaret.global.packages.clockwork.graphics.GraphicGradientFill();
const GraphicPathInstance: zetaret.global.packages.clockwork.graphics.GraphicPath = new zetaret.global.packages.clockwork.graphics.GraphicPath();
const GraphicsInstance: zetaret.global.packages.clockwork.graphics.Graphics = new zetaret.global.packages.clockwork.graphics.Graphics();
const GraphicShaderFillInstance: zetaret.global.packages.clockwork.graphics.GraphicShaderFill = new zetaret.global.packages.clockwork.graphics.GraphicShaderFill();
const GraphicSolidFillInstance: zetaret.global.packages.clockwork.graphics.GraphicSolidFill = new zetaret.global.packages.clockwork.graphics.GraphicSolidFill();
const GraphicStrokeInstance: zetaret.global.packages.clockwork.graphics.GraphicStroke = new zetaret.global.packages.clockwork.graphics.GraphicStroke();
const GraphicTextInstance: zetaret.global.packages.clockwork.graphics.GraphicText = new zetaret.global.packages.clockwork.graphics.GraphicText();

const DOMMediatorInstance: zetaret.global.packages.clockwork.mediators.DOMMediator = new zetaret.global.packages.clockwork.mediators.DOMMediator();
const GraphicContext2DMediatorInstance: zetaret.global.packages.clockwork.mediators.GraphicContext2DMediator = new zetaret.global.packages.clockwork.mediators.GraphicContext2DMediator();

const ProtoCSSInstance: zetaret.global.packages.clockwork.skin.css.ProtoCSS = new zetaret.global.packages.clockwork.skin.css.ProtoCSS();
const ProtoHTMLInstance: zetaret.global.packages.clockwork.skin.html.ProtoHTML = new zetaret.global.packages.clockwork.skin.html.ProtoHTML();

const DisplayObjectInstance: zetaret.global.packages.clockwork.ui.DisplayObject = new zetaret.global.packages.clockwork.ui.DisplayObject();
const DisplayObjectStatic: zetaret.global.packages.clockwork.ui.DisplayObjectStatic = zetaret.global.packages.clockwork.ui.DisplayObject;
const DisplayObjectContainerInstance: zetaret.global.packages.clockwork.ui.DisplayObjectContainer = new zetaret.global.packages.clockwork.ui.DisplayObjectContainer();
const PageBaseInstance: zetaret.global.packages.clockwork.ui.PageBase = new zetaret.global.packages.clockwork.ui.PageBase();
const ShapeInstance: zetaret.global.packages.clockwork.ui.Shape = new zetaret.global.packages.clockwork.ui.Shape();

[
	ClockworkInstance,
	ContextRendererInstance,
	Canvas2DRendererInstance,
	Canvas2DRendererStatic,
	ChildControllerInstance,
	DragControllerInstance,
	InteractionControllerInstance,
	KeyboardControllerInstance,
	MouseControllerInstance,
	PageControllerInstance,
	Stage2DControllerInstance,
	AppDataInstance,
	ChildContainerInstance,
	MatrixInstance,
	MetaDataInstance,
	RandomizerInstance,
	RSIInstance,
	EventInstance,
	EventStatic,
	EventDataInstance,
	EventDispatcherInstance,
	EventTargetInstance,
	KeyboardEventInstance,
	MouseEventInstance,
	GraphicBitmapFillInstance,
	GraphicCommandInstance,
	GraphicCommandStatic,
	GraphicDataInstance,
	GraphicEndFillInstance,
	GraphicFillInstance,
	GraphicGradientFillInstance,
	GraphicPathInstance,
	GraphicsInstance,
	GraphicShaderFillInstance,
	GraphicSolidFillInstance,
	GraphicStrokeInstance,
	GraphicTextInstance,
	DOMMediatorInstance,
	GraphicContext2DMediatorInstance,
	ProtoCSSInstance,
	ProtoHTMLInstance,
	DisplayObjectInstance,
	DisplayObjectStatic,
	DisplayObjectContainerInstance,
	PageBaseInstance,
	ShapeInstance
].forEach((e: any) => console.log(e));