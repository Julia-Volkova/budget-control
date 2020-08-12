let redirectMap = {
	"/subjects": "/",
};

export default function ({ route, redirect }) {
	if (redirectMap[ route.fullPath ]) {
		return redirect(redirectMap[ route.fullPath ]);
	}
}
