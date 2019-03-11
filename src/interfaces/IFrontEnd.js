window.package("zetaret.global.packages.clockwork.interfaces").IFrontEnd = {
	IButton: {
		over: ["///events.interfaces::IEvent"],
		out: ["///events.interfaces::IEvent"],
		up: ["///events.interfaces::IEvent"],
		down: ["///events.interfaces::IEvent"],
		click: ["///events.interfaces::IEvent"],
		move: ["///events.interfaces::IEvent"],
		enter: ["///events.interfaces::IEvent"],
		leave: ["///events.interfaces::IEvent"],
		select: [],
		unselect: [],
		setState: [String],
		getState: []
	},
	ICheckbox: {},
	IDialog: {},
	IDisplayObject: {
		setX: [Number],
		setY: [Number],
		setVisible: [Boolean],
		getVisible: [],
		getX: [],
		getY: [],
		setTransform: [Number, Number, Number, Number, Number, Number],
		getTransform: [],
		clone: []
	},
	IDropdown: {},
	IFocus: {},
	IImage: {},
	IInput: {},
	IKeyboard: {},
	ILabel: {},
	IList: {},
	IPanel: {},
	IRadioButton: {},
	IScrollbar: {},
	ISelector: {},
	IShape: {
		setGraphics: ["///graphics.interfaces::IGraphics"],
		getGraphics: [],
		resetGraphics: []
	},
	ITextField: {},
	ITree: {},
	IView: {},
	IWindow: {}
};