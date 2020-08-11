module.exports = {
	/**
	 * Application configuration section
	 * http://pm2.keymetrics.io/docs/usage/application-declaration/
	 */
	apps: [
		// First application
		{
			name: 'budget_control',
			script: 'server/index.js',
			watch: true,
			// instances : "max",
			// exec_mode : "cluster",

			max_memory_restart: "750M",
			env: {}
		}
	]
};
