declare namespace zetaret.global.packages.clockwork.skin.html {
	export interface ProtoHTMLCTOR {
		new(): ProtoHTML
	}
	export interface ProtoHTML {
		registerZetaConstructor(name: string): void
	}
}