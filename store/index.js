export const state = () => ({
	env: {},
	modalOffset: '0px',
});

export const getters = {};

export const mutations = {
	setProcessEnv(state, value) {
		state.env = value
	},
	setPopupOffset(state, value) {
		state.modalOffset = value;
	},
	setFlashphonerState(state) {
		state.flashphonerState = true;
	},
};

export const actions = {

	async nuxtServerInit({commit, dispatch, state}) {

		await commit('setProcessEnv', {
			STORE_HOST: process.env.STORE_HOST,
			API_WEB: process.env.API_WEB,
			WS_URL: process.env.WS_URL,
			WS_FLASHPHONER_URL: process.env.WS_FLASHPHONER_URL,
			GTM_ID: process.env.GTM_ID,
			YA_COUNTER_ID: process.env.YA_COUNTER_ID,
			VK_CLIENT_ID: process.env.VK_CLIENT_ID,
			FB_CLIENT_ID: process.env.FB_CLIENT_ID,
			GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
			SOCIAL_REDIRECT_URI: process.env.SOCIAL_REDIRECT_URI,
		});

	}
};

