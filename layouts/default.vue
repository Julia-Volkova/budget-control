<template>
  <div class="page disableOutline">
    <div class="page__aside">
      <BaseAside/>
    </div>
    <main class="page__main">
      <div class="layout">
        <nuxt/>
      </div>
    </main>

    <no-ssr>
      <dialogs-wrapper/>
    </no-ssr>
  </div>
</template>
<script>
  import DisableOutline from "~/components/_mixins/DisableOutline";
  import BaseAside from "~/components/base/BaseAside";

  export default {
    name: "layoutDefault",
    components: { BaseAside },
    mixins: [DisableOutline],
  };
</script>
