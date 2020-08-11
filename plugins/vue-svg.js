import Vue from 'vue';

Vue.component('v-svg', {
	name: "v-svg",
	functional: true,
	props: {
		w: String,
		h: String,
	},
	render(h, {data, props, children}) {
		return h('svg-icon', {
			class: data.class,
			staticClass: data.staticClass,
			style: data.style,
			staticStyle: data.staticStyle,
			attrs: {
				...data.attrs,
				width: props.w,
				height: props.h,
			}
		}, children);
	},
});
