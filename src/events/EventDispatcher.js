window.package("zetaret.global.packages.clockwork.events").internal(
function EventDispatcher(target) {
	var o = this,a=arguments;
	o.super(a,true);
	var m = {};
	o.superize(a, m, true, true);
	return o;
}
);

window.internal(
function ZetaRet_EventDispatcher(target){
	var o=this,a=arguments;
	o.super(a);
	o.eventTarget=target || o;
	o.events={};
	var m={};
	m.setEventTarget=function(target){
		o.eventTarget=target;
		return o;
	};
	m.addEventListener=function(event,callback){
		o.events[event] = o.events[event]||[];
		if (o.events[event]){o.events[event].push(callback);}
		return o;
	};
	m.removeEventListener=function(event,callback){
		if (o.events[event]) {
			var listeners = o.events[event];
			if (!callback){ delete o.events[event]; }
			else {
				for (var i = listeners.length-1; i>=0; --i){
					if (listeners[i] === callback) {listeners.splice(i, 1); return true;}
				}
			}
		}
		return false;
	};
	m.hasEvent=function(type){
		if (o.events[type])return true;
		return false;
	};
	m.dispatch=function(event,data){
		if (o.events[event]) {
			var listeners = o.events[event], len = listeners.length;
			var list=listeners.concat();
			for(var i=0;i<len;i++){
				var r=list[i].call(o, o.eventTarget, data);
				if (r)break;
			}
		}
		return o;
	};
	m.dispatchEvent=function(event,data,settarget){
		if (settarget)event.currentTarget=o;
		if (o.events[event.type]){
			var listeners = o.events[event.type], len = listeners.length;
			var list=listeners.concat();
			event.target=o;
			for(var i=0;i<len;i++){
				var r=list[i].call(o, event, data);
				if (r || event.eventPhase==ZetaRet_Event.NULL_PHASE)break;
			}
		}
		return o;
	};
	m.destruct=function(){
		o.events={};
	};
	o.superize(a,m,true,true);
	return o;
}
);
