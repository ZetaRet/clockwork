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

const AlertBoxInstance: zetaret.global.packages.clockwork.ui.AlertBox = new zetaret.global.packages.clockwork.ui.AlertBox();
const DialogInstance: zetaret.global.packages.clockwork.ui.Dialog = new zetaret.global.packages.clockwork.ui.Dialog();
const ButtonInstance: zetaret.global.packages.clockwork.ui.Button = new zetaret.global.packages.clockwork.ui.Button();
const ButtonStatic: zetaret.global.packages.clockwork.ui.ButtonStatic = zetaret.global.packages.clockwork.ui.Button;
const ButtonContainerInstance: zetaret.global.packages.clockwork.ui.ButtonContainer = new zetaret.global.packages.clockwork.ui.ButtonContainer();
const DisplayObjectInstance: zetaret.global.packages.clockwork.ui.DisplayObject = new zetaret.global.packages.clockwork.ui.DisplayObject();
const DisplayObjectStatic: zetaret.global.packages.clockwork.ui.DisplayObjectStatic = zetaret.global.packages.clockwork.ui.DisplayObject;
const DisplayObjectContainerInstance: zetaret.global.packages.clockwork.ui.DisplayObjectContainer = new zetaret.global.packages.clockwork.ui.DisplayObjectContainer();
const FlawlessButtonInstance: zetaret.global.packages.clockwork.ui.FlawlessButton = new zetaret.global.packages.clockwork.ui.FlawlessButton();
const GalleryInstance: zetaret.global.packages.clockwork.ui.Gallery = new zetaret.global.packages.clockwork.ui.Gallery();
const GalleryItemInstance: zetaret.global.packages.clockwork.ui.GalleryItem = new zetaret.global.packages.clockwork.ui.GalleryItem();
const HTMLElementInstance: zetaret.global.packages.clockwork.ui.HTMLElement = new zetaret.global.packages.clockwork.ui.HTMLElement();
const ImageInstance: zetaret.global.packages.clockwork.ui.Image = new zetaret.global.packages.clockwork.ui.Image();
const LabelInstance: zetaret.global.packages.clockwork.ui.Label = new zetaret.global.packages.clockwork.ui.Label();
const LabelButtonInstance: zetaret.global.packages.clockwork.ui.LabelButton = new zetaret.global.packages.clockwork.ui.LabelButton();
const ListInstance: zetaret.global.packages.clockwork.ui.List = new zetaret.global.packages.clockwork.ui.List();
const MaskedObjectInstance: zetaret.global.packages.clockwork.ui.MaskedObject = new zetaret.global.packages.clockwork.ui.MaskedObject();
const MenuInstance: zetaret.global.packages.clockwork.ui.Menu = new zetaret.global.packages.clockwork.ui.Menu();
const MenuButtonInstance: zetaret.global.packages.clockwork.ui.MenuButton = new zetaret.global.packages.clockwork.ui.MenuButton();
const PageBaseInstance: zetaret.global.packages.clockwork.ui.PageBase = new zetaret.global.packages.clockwork.ui.PageBase();
const ProgressLoaderInstance: zetaret.global.packages.clockwork.ui.ProgressLoader = new zetaret.global.packages.clockwork.ui.ProgressLoader();
const RadioButtonInstance: zetaret.global.packages.clockwork.ui.RadioButton = new zetaret.global.packages.clockwork.ui.RadioButton();
const ScrollbarInstance: zetaret.global.packages.clockwork.ui.Scrollbar = new zetaret.global.packages.clockwork.ui.Scrollbar();
const ScrollpaneInstance: zetaret.global.packages.clockwork.ui.Scrollpane = new zetaret.global.packages.clockwork.ui.Scrollpane();
const ShapeInstance: zetaret.global.packages.clockwork.ui.Shape = new zetaret.global.packages.clockwork.ui.Shape();
const SimpleScrollpaneInstance: zetaret.global.packages.clockwork.ui.SimpleScrollpane = new zetaret.global.packages.clockwork.ui.SimpleScrollpane();
const SkinnableComponentInstance: zetaret.global.packages.clockwork.ui.SkinnableComponent = new zetaret.global.packages.clockwork.ui.SkinnableComponent();
const TextFieldInstance: zetaret.global.packages.clockwork.ui.TextField = new zetaret.global.packages.clockwork.ui.TextField();
const TextFieldStatic: zetaret.global.packages.clockwork.ui.TextField = zetaret.global.packages.clockwork.ui.TextField;
const WindowInstance: zetaret.global.packages.clockwork.ui.Window = new zetaret.global.packages.clockwork.ui.Window();

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
	AlertBoxInstance,
	DialogInstance,
	ButtonInstance,
	ButtonStatic,
	ButtonContainerInstance,
	DisplayObjectInstance,
	DisplayObjectStatic,
	DisplayObjectContainerInstance,
	FlawlessButtonInstance,
	GalleryInstance,
	GalleryItemInstance,
	HTMLElementInstance,
	ImageInstance,
	LabelInstance,
	LabelButtonInstance,
	ListInstance,
	MaskedObjectInstance,
	MenuInstance,
	MenuButtonInstance,
	PageBaseInstance,
	ProgressLoaderInstance,
	RadioButtonInstance,
	ScrollbarInstance,
	ScrollpaneInstance,
	ShapeInstance,
	SimpleScrollpaneInstance,
	SkinnableComponentInstance,
	TextFieldInstance,
	TextFieldStatic,
	WindowInstance
].forEach((e: any) => console.log(e));