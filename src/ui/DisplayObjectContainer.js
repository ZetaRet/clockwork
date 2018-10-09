window.package("zetaret.global.packages.clockwork.ui").internal(
function DisplayObjectContainer() {
	var o = this,a=arguments;
	o.containerGroup="";
	o.super(a, null);
	var m = {};
	m.getBounds=function(tm){
		return zetaret.global.packages.clockwork.ui.DisplayObject.getUnionBounds(o.children, tm||o.cachedtransform||o.getStageTransform().t, true);
	};
	o.superize(a, m, true, true);
	return o;
});
