window.package("zetaret.global.packages.clockwork.controllers").internal(
function ChildController() {
	var o = this,a=arguments;
	o.root=null;
	o.iterateExitHandler=null;
	o.bubbleMechanics="";
	o.bubblePhase="";
	o.childrenkey="children";
	o.targetkey="target";
	o.listskey="lists";
	o.parentkey="parent";
	o.useFractalRoot=false;
	o.super(a, true);
	var m = {};
	m.setRoot=function(root){
		o.root=root;
		return o;
	};
	m.setBubblePhase=function(bphase){
		o.bubblePhase=bphase;
		return o;
	};
	m.setBubbleMechanics=function(bmech){
		o.bubbleMechanics=bmech;
		return o;
	};
	m.childToRoot=function(child,f,d,scope){
		var chk=o.childrenkey,lk=o.listskey,tk=o.targetkey,ch,li=child[lk],l=li?li.length:0,lij,fr,pk=o.parentkey;
		if(!scope)scope=o;
		if(!o.useFractalRoot){
			if(li){
				while(lij=li[pk]){
					if(lij[tk]){
						fr=f.call(scope,child,lij[tk],d);
						if(!fr)break;
						child=lij[tk];
						li=child[lk];
						if(!li)break;
					} else break;
				}
			}
		} else {
			while(l--){
				lij=li[l];
				if(lij[tk]){
					fr=f.call(scope,child,lij[tk],d);
					if(!fr)break;
					ch=lij[chk];
					if(ch&&ch.length>0)o.childToRoot(lij[tk],f,d,scope);
				}
			}
		}
		
		return o;
	};
	m.iterate=function(child,f,d,parent,list,scope,mode,skip){
		var chk=o.childrenkey,tk=o.targetkey,ch=child[chk],l=ch?ch.length:0,
			c2,ch2,c2t,cht=child[tk],sr,i=0,ieh;
		if(!scope)scope=o;
		if(!skip){
			o.bubblePhase=zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEDOWN;
			if(cht){
				sr=f.call(scope,cht,f,d,parent,list,mode,child);
				if(o.iterateExitHandler){
					ieh=o.iterateExitHandler;
					o.iterateExitHandler=null;
				}
				if(o.bubblePhase===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP){if(ieh)ieh.call(scope,cht); return o;}
				else if(o.bubblePhase===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLENEXT){if(ieh)ieh.call(scope,cht); return o;}
				if(!sr){if(ieh)ieh.call(scope,cht); return o;}
				if(list)list.push(cht);
			}
		}
		while(i<l){
			o.bubblePhase=zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEDOWN;
			c2=ch[i++];
			ch2=c2[chk];
			c2t=c2[tk];
			if(ch2&&ch2.length>0){
				o.iterate(c2,f,d,child,list,scope,mode);
				if(o.bubblePhase===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP)break;
				else if(o.bubblePhase===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLENEXT)continue;
			}
			else if(c2t){
				sr=f.call(scope,c2t,f,d,child,list,mode,c2);
				if(o.iterateExitHandler){
					o.iterateExitHandler.call(scope,c2t);
					o.iterateExitHandler=null;
				}
				if(o.bubblePhase===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP)break;
				else if(o.bubblePhase===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLENEXT)continue;
				if(!sr)continue;
				if(list)list.push(c2t);
			}
		}
		if(ieh)ieh.call(scope,cht);
		return o;
	};
	m.iterateInversed=function(child,f,d,parent,list,scope,mode,skip){
		var chk=o.childrenkey,tk=o.targetkey,ch=child[chk],l=ch?ch.length:0,
			c2,ch2,c2t,cht=child[tk],sr,ieh;
		if(!scope)scope=o;
		if(!skip){
			o.bubblePhase=zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEDOWN;
			if(cht){
				sr=f.call(scope,cht,f,d,parent,list,mode,child);
				if(o.iterateExitHandler){
					ieh=o.iterateExitHandler;
					o.iterateExitHandler=null;
				}
				if(o.bubblePhase===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP){if(ieh)ieh.call(scope,cht); return o;}
				else if(o.bubblePhase===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLENEXT){if(ieh)ieh.call(scope,cht); return o;}
				if(!sr){if(ieh)ieh.call(scope,cht); return o;}
				if(list)list.push(cht);
			}
			
		}
		while(l--){
			o.bubblePhase=zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEDOWN;
			c2=ch[l];
			ch2=c2[chk];
			c2t=c2[tk];
			if(ch2&&ch2.length>0){
				o.iterateInversed(c2,f,d,child,list,scope,mode);
				if(o.bubblePhase===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP)break;
				else if(o.bubblePhase===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLENEXT)continue;
			}
			else if(c2t){
				sr=f.call(scope,c2t,f,d,child,list,mode,c2);
				if(o.iterateExitHandler){
					o.iterateExitHandler.call(scope,c2t);
					o.iterateExitHandler=null;
				}
				if(o.bubblePhase===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLEUP)break;
				else if(o.bubblePhase===zetaret.global.packages.clockwork.controllers.ChildController.BUBBLENEXT)continue;
				if(!sr)continue;
				if(list)list.push(c2t);
			}
		}
		if(ieh)ieh.call(scope,cht);
		return o;
	};
	o.superize(a, m, true, true);
	return o;
}
);
ProtoSS.eventProps(zetaret.global.packages.clockwork.controllers.ChildController, ["bubble","bubbleUp","bubbleNext","bubbleDown"]);
