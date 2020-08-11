<template>
	<div class="_loadModalWrap p-wrap" tabindex="1">
		<div class="p-bg" @click="$close()"/>
		<div class="p-container" :class="{loading: isLoading}">
			<div class="p-content">
				<div class="p-close" @click="$close()" v-if="!isLoading">
					<v-svg name="cross-circle" w="26" h="26"/>
				</div>
				<component :is="asyncComponent" v-on:success="success" v-on:cancel="cancel" v-on:close="$close"
									 v-on:mounted.once="onMounted" :modalProps="modalProps" @click.native="onCLickComponent($event)"/>
			</div>
		</div>
	</div>
</template>

<script>
	import '~/assets/sprite/svg/cross-circle.svg';

	export default {
		name: "loadModalWrap",
		props: {},
		components: {},
		data() {
			return {
				asyncComponent: '',
				isLoading: true,
				forceClose: false,
			}
		},
		methods: {
			success(val) {
				this.$close(val)
			},
			cancel(val) {
				this.$close(val)
			},
			windowHandler(event) {
				if (!process.browser) return false;
				if (event.key === 27) {
					this.$close(null);
				}
			},
			onMounted() {
				this.isLoading = false;
			},
			onCLickComponent (e) {
				if(e.target.tagName.toLowerCase() === 'a') {
					this.$close(null);
				}
			}
		},
		computed: {},
		mounted() {
			if (!process.browser) return false;
			this.$el.focus();
			window.addEventListener('keydown', this.windowHandler);
			this.$windowScrollDisable();
			this.asyncComponent = async () => await import(`@/components/_modals/${this.component}`);

		},
		beforeDestroy() {
			if (!process.browser) return false;
			this.$el.style.display = 'none';
			window.removeEventListener('keydown', this.windowHandler);
			this.$windowScrollEnable();
		},
	}
</script>
