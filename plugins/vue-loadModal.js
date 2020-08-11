import Vue from 'vue';
import * as ModalDialogs from 'vue-modal-dialogs';
import loadModalWrap from "~/components/__loadModal/_loadModalWrap";

export default function ({app, store }, inject) {
	Vue.use(ModalDialogs);
	let $loadModal = (modalName, modalProps) => {
		return ModalDialogs.create(loadModalWrap, 'component', 'modalProps')(modalName, modalProps);
	};
	inject('loadModal', $loadModal);
}
