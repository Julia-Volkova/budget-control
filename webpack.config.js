const path = require('path');

module.exports = {
	context: path.resolve(__dirname, '../'),
	resolve: {
		extensions: ['.js', '.json', '.vue', '.ts', '.scss', '.jpg', '.html'],
		root: path.resolve(__dirname),
		alias: {
			'@': path.resolve(__dirname),
			'vue$': 'vue/dist/vue.esm.js',
			'~': path.resolve(__dirname),
		},
	},
};
