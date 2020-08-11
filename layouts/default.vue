<template>
  <div class="page disableOutline">
		<div class="layout">
			<nuxt/>
		</div>

		<no-ssr>
			<dialogs-wrapper/>
		</no-ssr>
  </div>
</template>
<script>
	import DisableOutline from "~/components/_mixins/DisableOutline";
	export default {
		name: 'layoutDefault',
		mixins: [DisableOutline],
	}
</script>
