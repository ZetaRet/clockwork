window.package("zetaret.global.packages.clockwork.controllers").internal(
function KeyboardController() {
	var o = this,
		a = arguments;
	o.controllerId = "keyboard";
	o.stage = null;
	o.interaction = null;
	o.defaultInteractiveMap = {};
	o.keyboardEventTarget = null;
	o.keyboardEvents = [];
	o.keyboardTargets = [];
	o.keyboardIterated = [];
	o.keysDown = {};
	o.keyboardMap = {};
	o.charMap = {};
	o.asciiMap = {};
	o.keyboardEnabledKey = "keyboardEnabled";
	o.keyboardChildrenKey = "keyboardChildren";
	o.keyboardFocusKey = "keyboardFocus";
	o.keyboardCustomEvent = null;
	o.preventNative = false;
	o.defaultEvents = ["keydown", "keypress", "keyup"];
	o.invalidateStage = true;
	o.super(a, true);
	var m = {};
	m.init = function(stage, interaction, target) {
		stage.controllers.push(o);
		if (stage.controllers.indexOf(interaction) < 0)
			stage.controllers.push(interaction);
		o.stage = stage;
		o.interaction = interaction;
		o.keyboardEventTarget = target;
		o.initCapabilities();
		return o;
	};
	m.initCapabilities = function() {
		return o;
	};
	m.initDefaultEvents = function() {
		var de = o.defaultEvents,
			l = de.length;
		while (l--) o.addKeyboardEvent(de[l]);
		return o;
	};
	m.getInteractionData = function(id) {
		if (!id) id = {};
		id[o.keyboardEnabledKey] = true;
		id[o.keyboardChildrenKey] = true;
		id[o.keyboardFocusKey] = false;
		return id;
	};
	m.setKeyboardFocus = function(dobj, focus) {
		var vars = {};
		vars[o.keyboardFocusKey] = focus;
		return o.interaction.updateInteractId(dobj, vars);
	};
	m.addInteractionData = function(dobj) {
		return o.getInteractionData(o.interaction.getInteractMap(dobj));
	};
	m.addKeyboardEvent = function(type) {
		var mtype = "keyboardEventHandler_" + type,
			h = o[mtype] || o.keyboardEventHandler;
		o.keyboardEvents.push(type);
		o.keyboardEventTarget.addEventListener(type, function(e) {
			return h.apply(o, arguments);
		});
		return o;
	};
	m.bubbleEventHandler = function(child, parent, customEvent) {
		parent.dispatchEvent(customEvent, o.stage);
		o.keyboardTargets.push(parent);
		o.keyboardIterated.push(parent);
		if (!customEvent.bubbles || customEvent.eventPhase === ZetaRet_Event.NULL_PHASE || customEvent.eventPhase === ZetaRet_Event.NO_PHASE)
			return false;
		return true;
	};
	m.stageIterator = function(child, f, customEvent, parent, list, type, childo) {
		var stage = o.stage,
			interc = o.interaction,
			chi = child[interc.interactIDKey],
			kim = chi ? interc.interactiveVars[chi] : o.defaultInteractiveMap,
			kek = o.keyboardEnabledKey,
			kck = o.keyboardChildrenKey,
			kfk = o.keyboardFocusKey;
		customEvent.currentTarget = stage;
		if (!child.visible) return false;
		if (chi) {
			if (kim && kim[kek] && kim[kfk]) {
				customEvent.currentTarget = child;
				child.dispatchEvent(customEvent, stage);
				o.keyboardTargets.push(child);
				if (customEvent.eventPhase === ZetaRet_Event.NO_PHASE) {
					stage.bubblePhase = !customEvent.defaultPrevented ? zetaret.global.packages.clockwork.controllers.ChildController.BUBBLENEXT : zetaret.global.packages.clockwork.controllers
						.ChildController.BUBBLEUP;
				} else if (customEvent.eventPhase === ZetaRet_Event.NULL_PHASE) {
					stage.bubblePhase = zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP;
				} else if (customEvent.eventPhase === ZetaRet_Event.BUBBLE_PHASE) {
					stage.bubblePhase = zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP;
					if (customEvent.bubbles && stage.bubbleMechanics === zetaret.global.packages.clockwork.controllers.ChildController.BUBBLE)
						stage.childToRoot(child, o.bubbleEventHandler, customEvent, o);
				} else if (customEvent.eventPhase === ZetaRet_Event.CAPTURE_PHASE) {
					if (customEvent.bubbles && stage.bubbleMechanics === zetaret.global.packages.clockwork.controllers.ChildController.BUBBLE)
						stage.childToRoot(child, o.bubbleEventHandler, customEvent, o);
					if (customEvent.defaultPrevented) stage.bubblePhase = zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP;
				}
			}
			if (!kim[kck]) {
				return false;
			}
			return !customEvent.defaultPrevented;
		}
		return true;
	};
	m.keyboardEventHandler = function(e) {
		var stage = o.stage,
			keyboardTargets = [],
			keyboardIterated = [],
			customEvent = new zetaret.global.packages.clockwork.events.KeyboardEvent();
		o.keyboardIterated = keyboardIterated;
		o.keyboardTargets = keyboardTargets;
		customEvent.type = e.type;
		customEvent.eventPhase = ZetaRet_Event.CAPTURE_PHASE;
		customEvent.bubbles = true;
		customEvent.setNativeEvent(e);
		o.keyboardCustomEvent = customEvent;
		stage.iterateInversed(stage.root, o.stageIterator, customEvent, null, keyboardIterated, o);
		if (o.invalidateStage) o.stage.invalidate = true;
		if (o.preventNative) e.preventDefault();
		return o;
	};
	m.setKeyboard = function(keymap, chmap, ascmap) {
		o.keyboardMap = keymap;
		o.charMap = chmap;
		o.asciiMap = ascmap;
		return o;
	};
	m.keyDown = function(key) {
		if (!o.keysDown[key]) {
			o.keysDown[key] = true;
			return true;
		}
		return false;
	};
	m.keyUp = function(key) {
		return delete o.keysDown[key];
	};
	m.getKeys = function(keys, isor) {
		var l = keys.length,
			k, kd = o.keysDown;
		if (isor) {
			while (l--) {
				k = keys[l];
				if (kd[k]) return true;
			}
		} else {
			while (l--) {
				k = keys[l];
				if (!kd[k]) return false;
			}
			return true;
		}
		return false;
	};
	o.superize(a, m, true, true);
	return o;
});