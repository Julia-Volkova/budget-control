let body = document.querySelector('body');
let disableCount = 0;
let getScrollBarWidth = function () {
	return window.innerWidth - body.offsetWidth;
};

let $windowScrollEnable = function (store) {
	if(disableCount === 1) {
		store.commit('setPopupOffset', '0px');
		body.style.paddingRight = null;
		body.classList.remove('disableScroll');
	}
	disableCount--;
};

let $windowScrollDisable = function(store) {
	if(disableCount === 0) {
		let offset = getScrollBarWidth() + 'px';
		body.style.paddingRight = offset;
		store.commit('setPopupOffset', offset);
		body.classList.add('disableScroll');
	}
	disableCount++;
};

export default function ({app, store}, inject) {
	inject('windowScrollEnable', () => $windowScrollEnable(store));
	inject('windowScrollDisable', () => $windowScrollDisable(store));
}
