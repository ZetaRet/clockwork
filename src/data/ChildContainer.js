window.package("zetaret.global.packages.clockwork.data").internal(
function ChildContainer() {
	var o = this,a=arguments;
	o.children=[];
	o.target=null;
	o.autochild=true;
	o.namecache=null;
	o.autosetstage=true;
	o.recursiveStage=true;
	o.stageEvents=true;
	o.super(a, true);
	var m = {};
	m.getChildren=function(){
		return o.children;
	};
	m.numChildren=function(){
		return o.children.length;
	};
	m.addChild=function(child){
		var i=o.children.indexOf(child);
		if(i!==-1)o.children.splice(i,1);
		o.children.push(child);
		if(o.autochild){
			child.addToList(o,"parent");
		}
		if(o.autosetstage && o.target && o.target.stage){
			if(o.recursiveStage)o.target.stage.setStageToChildren(child,o.stageEvents);
			else {
				if(child.stage!==o.target.stage){
					child.stage=o.target.stage;
					if(o.stageEvents){
						child.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("addedToStage"),child.stage);
					}
				}
			}
		}
		return o;
	};
	m.addChildAt=function(child, index){
		var i=o.children.indexOf(child);
		if(i!==-1)o.children.splice(i,1);
		o.children.splice(index,0,child);
		if(o.autochild){
			child.addToList(o,"parent");
		}
		if(o.autosetstage && o.target && o.target.stage){
			if(o.recursiveStage)o.target.stage.setStageToChildren(child,o.stageEvents);
			else {
				if(child.stage!==o.target.stage){
					child.stage=o.target.stage;
					if(o.stageEvents){
						child.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("addedToStage"),child.stage);
					}
				}
			}
		}
		return o;
	};
	m.containsChild=function(child){
		return o.children.indexOf(child)!==-1;
	};
	m.removeChild=function(child){
		var i=o.children.indexOf(child);
		if(i!==-1){
			o.children.splice(i, 1);
			if(o.autochild){
				child.removeList(o,"parent");
			}
			if(o.autosetstage && child.stage){
				if(o.recursiveStage)child.stage.setStageToChildren(child,o.stageEvents,true);
				else {
					var rstage=child.stage;
					child.stage=null;
					if(o.stageEvents){
						child.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("removedFromStage"),rstage);
					}
				}
			}
		}
		return o;
	};
	m.removeChildAt=function(index){
		var child=o.children[index];
		if(child){
			o.children.splice(index,1);
			if(o.autochild){
				child.removeList(o,"parent");
			}
			if(o.autosetstage && child.stage){
				if(o.recursiveStage)child.stage.setStageToChildren(child,o.stageEvents,true);
				else {
					var rstage=child.stage;
					child.stage=null;
					if(o.stageEvents){
						child.dispatchEvent(new zetaret.global.packages.clockwork.events.Event("removedFromStage"),rstage);
					}
				}
			}
		}
		return child;
	};
	m.getChildIndex=function(child){
		return o.children.indexOf(child);
	};
	m.getChildByName=function(name,cache){
		var ch,c=o.children,cl=c.length;
		if(cache&&o.namecache&&o.namecache[name])return o.namecache[name];
		while(cl--){
			ch=c[cl];
			if(ch.name==name){
				if(cache&&o.namecache)o.namecache[name]=ch;
				return ch;
			}
		}
		return null;
	};
	m.getChildByType=function(type, strict){
		var ch,c=o.children,cl=c.length;
		if(strict){
			while(cl--){
				ch=c[cl];
				if(ch.constructor===type)return ch;
			}
		} else {
			while(cl--){
				ch=c[cl];
				if(ch.is(type))return ch;
			}
		}
		return null;
	};
	m.getChildIndexByName=function(name){
		var ch,c=o.children,cl=c.length;
		while(cl--){
			ch=c[cl];
			if(ch.name==name)return cl;
		}
		return -1;
	};
	m.swapChildren=function(child1, child2){
		var c=o.children,i1=c.indexOf(child1),i2=c.indexOf(child2);
		if(i1>=0 && i2>=0){
			c[i1]=child2;
			c[i2]=child1;
		}
		return o;
	};
	m.swapChildrenAt=function(index1, index2){
		var c=o.children,ch1=c[index1];
		if(ch1 && c[index2]){
			c[index1]=c[index2];
			c[index2]=ch1;
		}
		return o;
	};
	o.superize(a, m, true, true);
	return o;
}
);
