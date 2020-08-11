<template>
  <div class="">
    <button @click="modal">modal</button>
  </div>
</template>

<script>
  export default {
    components: {},
    methods: {
      modal() {
        this.$loadModal("testModal");
      },
    },
  };
</script>

