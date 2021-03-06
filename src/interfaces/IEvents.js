window.package("zetaret.global.packages.clockwork.interfaces").IEvents = {
	IAnimationEvent: {},
	IAudioEvent: {
		getSamples: [Number, Number],
		getFrequency: [],
		getBitrate: [],
		getTime: [],
		getLength: [],
		isPlaying: []
	},
	IBlobEvent: {},
	IClipboardEvent: {
		getText: [],
		getHTML: [],
		getClipboardData: [String],
		setClipboardData: [String, String],
		clearClipboard: []
	},
	IClockworkEvent: {},
	ICloseEvent: {
		isClosed: []
	},
	ICompositionEvent: {},
	ICustomEvent: {},
	IDeviceEvent: {},
	IDisplayEvent: {},
	IDomEvent: {},
	IDragEvent: {},
	IErrorEvent: {},
	IEvent: {
		preventBubble: [],
		preventDefault: [],
		preventCapture: [],
		stopPropagation: [],
		stopImmediatePropagation: [],
		setEventPhase: [String],
		setEventType: [String],
		setEventTarget: ["/IEventTarget"],
		setEventCurrentTarget: ["/IEventTarget"],
		addToTargetMap: ["/IEventTarget"],
		setNativeEvent: [Event],
		clone: []
	},
	IEventData: {
		getData: []
	},
	IEventDispatcher: {
		setEventTarget: ["/IEventDispatcher"],
		addEventListener: [String, Function],
		removeEventListener: [String, Function],
		hasEvent: [String],
		dispatch: [String, "/IEventData"],
		dispatchEvent: ["/IEvent", "/IEventData"]
	},
	IEventTarget: {},
	IFocusEvent: {},
	IImageEvent: {},
	IInputEvent: {},
	IKeyboardEvent: {},
	IMouseEvent: {
		getX: [],
		getY: [],
		getLocalX: [],
		getLocalY: [],
		getOffsetX: [],
		getOffsetY: [],
		getKeys: [],
		getXY: []
	},
	IProtossEvent: {},
	ISensorEvent: {},
	IStateEvent: {},
	IStorageEvent: {},
	ITimeEvent: {},
	ITouchEvent: {},
	IUIEvent: {},
	IVideoEvent: {},
	IWheelEvent: {},
	IWindowEvent: {},
	IZetaRetEvent: {}
};