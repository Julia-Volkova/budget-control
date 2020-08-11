<template>
	<div class="_testModal popup">
		<div class="popup__header">
			<div class="popup__title">Test Popup</div>
		</div>
		<div class="popup__content">

		</div>
		<div class="popup__footer">
			<div class="btn-wrap">
				<button class="btn" @click="cancel">cancel</button>
				<button class="btn btn--accent" @click="success">success</button>
			</div>
		</div>
	</div>
</template>
<script>
	import _popupMixin from '~/components/__loadModal/_modalMixin';

	export default {
		name: "testModal",
		mixins: [_popupMixin],
		props: {},
		components: {},
		data() {
			return {
				text: '',
			}
		},
		methods: {},
		computed: {
			emitData() {
				return {
					text: this.text
				}
			}
		},
		mounted() {
		}
	}
</script>
