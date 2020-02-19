window.package("zetaret.global.packages.clockwork.skin.html").internal(
	function ProtoHTML() {
		var o = this,
			a = arguments;
		o.super(a);
		var m = {};
		var s = o.superize(a, m, true, true);
		o.statis(a, a.callee.packobj.ProtoHTMLStatis, s, true, true);
		return o;
	}
).internal(
	function ProtoHTMLStatis(s, c) {
		s.registerZetaConstructor = function(name) {
			HTMLDocument.prototype.registerZetaConstructor(name, this[name]);
		};

		HTMLDocument.prototype.__zetaElements = {};
		HTMLDocument.prototype.__zetaObserver = null;
		HTMLDocument.prototype.registerZetaElement = function(name, data, protoElement) {
			var doc = this;
			doc.__zetaElements[name] = data || {};
			doc.__zetaElements[name].protoElement = protoElement;
			doc.getElementsByTagName(name).constructZetaElement(name, null, protoElement);
			return doc;
		};
		HTMLDocument.prototype.registerZetaConstructor = function(name, construct) {
			HTMLUnknownElement.prototype[name.toUpperCase() + '_constructor'] = construct;
		};
		HTMLDocument.prototype.observeZetaElements = function(observeOptions) {
			var doc = this,
				observer = new MutationObserver(function(mutations) {
					var i, an, l = mutations.length;
					for (i = 0; i < l; i++) {
						an = mutations[i].addedNodes;
						if (an && an.length > 0)
							doc.constructZetaElements(an);
					}
				});
			if (!observeOptions) {
				observeOptions = {
					childList: true,
					subtree: true
				};
			}
			observer.observe(doc.body, observeOptions);
			doc.__zetaObserver = observer;
			return observer;
		};
		HTMLDocument.prototype.constructZetaElements = function(list) {
			var name, un, j, el, protoElement, zel = this.__zetaElements,
				anl = list.length;
			for (j = 0; j < anl; j++) {
				el = list[j];
				un = el.tagName;
				name = un ? un.toLowerCase() : null;
				if (zel[name] && el.constructor === HTMLUnknownElement) {
					el[un + "_constructor"](name);
					protoElement = zel[name].protoElement || HTMLElement;
					Object.setPrototypeOf(el, protoElement.prototype)
				}
			}
			return this;
		};
		HTMLDocument.prototype.registerZetaElementMap = function(map) {
			var k, v, doc = this;
			for (k in map) {
				v = map[k];
				doc.registerZetaConstructor(k, v.protoConstructor);
				doc.registerZetaElement(k, v, v.protoElement);
			}
			if (!doc.__zetaObserver)
				doc.observeZetaElements();
		};
		HTMLCollection.prototype.constructZetaElement = function(name, list, protoElement) {
			if (!list)
				list = this;
			var i, el, un = name.toUpperCase(),
				l = list.length;
			if (!protoElement)
				protoElement = HTMLElement;
			for (i = 0; i < l; i++) {
				el = list[i];
				if (el.tagName === un && el.constructor === HTMLUnknownElement) {
					el[un + "_constructor"](name);
					Object.setPrototypeOf(el, protoElement.prototype)
				}
			}
			return this;
		};
	}
);
