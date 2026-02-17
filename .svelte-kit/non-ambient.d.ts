
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/contact" | "/despre" | "/gdpr" | "/industrii" | "/servicii";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/contact": Record<string, never>;
			"/despre": Record<string, never>;
			"/gdpr": Record<string, never>;
			"/industrii": Record<string, never>;
			"/servicii": Record<string, never>
		};
		Pathname(): "/" | "/contact" | "/despre" | "/gdpr" | "/industrii" | "/servicii";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/infinity-electric.mp4" | "/infinity-elegant-loop.mp4" | "/infinity-fire.mp4" | "/infinity-logo-v2.png" | "/infinity-logo-v3.png" | "/infinity-logo.png" | "/infinity-smoke.mp4" | "/infinity-stardust.mp4" | "/infinity-water.mp4" | "/infinity-welding-loop.mp4" | "/infinity-welding.mp4" | string & {};
	}
}