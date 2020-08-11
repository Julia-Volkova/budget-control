<script>
	export default {
		name: "_modalMixin",
		props: {
			modalProps: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		components: {},
		data() {
			return {}
		},
		methods: {
			success() {
				this.$emit('success', this.emitData);
			},
			cancel() {
				this.$emit('cancel', undefined);
			}
		},
		computed: {
			emitData() {
				return true;
			}
		},
		mounted() {
			this.$emit('mounted');
		}
	}
</script>
