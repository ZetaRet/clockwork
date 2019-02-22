window.package("zetaret.global.packages.clockwork.stacks").internal(
{
	name:"ClockworkTier0Init",
	version:"1.00",
	init:function(clockwork, window){
		clockwork.toppack=window;
		clockwork.toInterface(zetaret.global.packages.clockwork.interfaces.IFrontEnd,window.package("zetaret.global.packages.clockwork.ui.interfaces"));
		clockwork.toInterface(zetaret.global.packages.clockwork.interfaces.IEvents,window.package("zetaret.global.packages.clockwork.events.interfaces"));
		clockwork.toInterface(zetaret.global.packages.clockwork.interfaces.IGraphics,window.package("zetaret.global.packages.clockwork.graphics.interfaces"));

		clockwork.resolveCls(zetaret.global.packages.clockwork.interfaces.IFrontEnd, window,"zetaret.global.packages.clockwork.ui.interfaces").
			resolveCls(zetaret.global.packages.clockwork.interfaces.IEvents, window,"zetaret.global.packages.clockwork.events.interfaces").
			resolveCls(zetaret.global.packages.clockwork.interfaces.IGraphics, window,"zetaret.global.packages.clockwork.graphics.interfaces");

		clockwork.resolveHeaders(window);
	}
});
