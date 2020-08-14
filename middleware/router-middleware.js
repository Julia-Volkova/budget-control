let redirectMap = {
	'/subjects': '/',
	'/': '/account/1?operations=income',
};

export default function ({ route, redirect }) {
	if (redirectMap[ route.fullPath ]) {
		return redirect(redirectMap[ route.fullPath ]);
	}
}
