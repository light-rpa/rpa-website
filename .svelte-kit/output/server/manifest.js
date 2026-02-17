export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["infinity-electric.mp4","infinity-elegant-loop.mp4","infinity-fire.mp4","infinity-logo-v2.png","infinity-logo-v3.png","infinity-logo.png","infinity-smoke.mp4","infinity-stardust.mp4","infinity-water.mp4","infinity-welding-loop.mp4","infinity-welding.mp4"]),
	mimeTypes: {".mp4":"video/mp4",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.r43kt7qT.js",app:"_app/immutable/entry/app.BLyV8ORA.js",imports:["_app/immutable/entry/start.r43kt7qT.js","_app/immutable/chunks/K3ICwq_o.js","_app/immutable/chunks/CMwayz6E.js","_app/immutable/chunks/Dg1prh9F.js","_app/immutable/entry/app.BLyV8ORA.js","_app/immutable/chunks/CMwayz6E.js","_app/immutable/chunks/Cy316hIW.js","_app/immutable/chunks/BLYYjihB.js","_app/immutable/chunks/C1R6x1wZ.js","_app/immutable/chunks/Dg1prh9F.js","_app/immutable/chunks/BexAlJAV.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
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
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/despre",
				pattern: /^\/despre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/gdpr",
				pattern: /^\/gdpr\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/industrii",
				pattern: /^\/industrii\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/servicii",
				pattern: /^\/servicii\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
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
