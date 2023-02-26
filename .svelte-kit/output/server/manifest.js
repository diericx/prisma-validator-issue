export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.6401d35a.js","imports":["_app/immutable/entry/start.6401d35a.js","_app/immutable/chunks/index.f98f3a93.js","_app/immutable/chunks/singletons.b1f0ad7d.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.97a93fbb.js","imports":["_app/immutable/entry/app.97a93fbb.js","_app/immutable/chunks/index.f98f3a93.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/error",
				pattern: /^\/error\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/success",
				pattern: /^\/success\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
