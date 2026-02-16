const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.Cy6XFjnX.js",app:"_app/immutable/entry/app.CS0ybptJ.js",imports:["_app/immutable/entry/start.Cy6XFjnX.js","_app/immutable/chunks/BS5zwJJx.js","_app/immutable/chunks/BaWDgjC9.js","_app/immutable/chunks/BwoD0iPq.js","_app/immutable/entry/app.CS0ybptJ.js","_app/immutable/chunks/BaWDgjC9.js","_app/immutable/chunks/DIoKx3-5.js","_app/immutable/chunks/8jhkBHws.js","_app/immutable/chunks/BwoD0iPq.js","_app/immutable/chunks/DBqXp7JU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Clpasml9.js')),
			__memo(() => import('./chunks/1-T4wJ5zLP.js')),
			__memo(() => import('./chunks/2-CtT848HN.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
