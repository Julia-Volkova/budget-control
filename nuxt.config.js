const pkg = require('./package');

const globSassLoader = {
	test: /\.scss/,
	enforce: "pre",
	loader: "import-glob-loader",
};

module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
			{name: 'format-detection', content: 'telephone=no'},
			{name: 'msapplication-TileColor', content: '#000'},
			{name: 'theme-color', content: '#ffffff'},
			{name: 'apple-mobile-web-app-capable', content: 'yes'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  css: [
		'@/assets/scss/style.scss',
  ],
	router: {
		linkActiveClass: 'active',
		linkExactActiveClass: 'activeExact',
		middleware: 'router-middleware',
	},
	render: {
		resourceHints: false,
	},
	env: {
		VERSION: pkg.version
	},
  plugins: [
		{src: '~/config/config-axios.js', ssr: true},
		{src: '~/plugins/vue-loadModal.js', ssr: false},
		{src: '~/plugins/vue-svg.js', ssr: true},
		{src: '~/plugins/windowScrollControl.js', ssr: false},
	],

  modules: [
    '@nuxtjs/axios',
		['@nuxtjs/pwa', {
			icon: false,
			manifest: false,
			meta: {
				name: false,
				description: false,
				favicon: false,
				lang: false,
				ogTitle: false,
				ogDescription: false,
				ogType: false,
				ogUrl: false,
				ogImage: false,
				ogSiteName: false,
				twitterCard: false,
			},
		}],
		'@nuxtjs/svg-sprite',
  ],
	axios: {
		proxyHeaders: false,
		retry: false,
	},

  build: {
		extractCSS: process.env.NODE_ENV === 'production',

    extend(config, ctx) {

			// Загрузчик *.scss
			config.module.rules.push(globSassLoader);
		}
  }
};
