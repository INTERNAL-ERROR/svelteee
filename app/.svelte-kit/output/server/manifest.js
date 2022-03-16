export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-a3df2a49.js","js":["start-a3df2a49.js","chunks/vendor-e133cae4.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/([^/]+?)\/?$/,
				params: (m) => ({ name: m[1]}),
				path: null,
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/emoji\/?$/,
				params: null,
				load: () => import('./entries/endpoints/emoji.js')
			}
		]
	}
};
