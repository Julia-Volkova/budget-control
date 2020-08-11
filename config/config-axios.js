export default function ({app, $axios, store, redirect }) {
	$axios.defaults.baseURL = process.server ? process.env.API_WEB : store.state.env.API_WEB;
	// $axios.onError(error => {
	// 	const code = parseInt(error.response && error.response.status);
	// 	if (code === 401 && app.$auth.loggedIn && !!app.$auth.user) {
	// 		app.$auth.logout();
	// 		redirect(app.localePath('index'));
	// 	}
	// })
}
