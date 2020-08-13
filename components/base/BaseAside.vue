<template>
  <aside class="_BaseAside aside">
    <div class="tabs">
      <nuxt-link :to="`/account/1`" class="tabs__item block">
        Кошелек 1
      </nuxt-link>
      <nuxt-link :to="`/account/2`" class="tabs__item block">
        Кошелек 2
      </nuxt-link>
      <nuxt-link :to="`/account/3`" class="tabs__item block">
        Кошелек 3
      </nuxt-link>
    </div>
  </aside>
</template>

<script>
  export default {
    name: "BaseAside",
    scrollToTop: true,
    props: {},
    components: {},
    data() {
      return {
        state: {
          account1: true,
          account2: false,
          account3: false,
        },
      };
    },
    computed: {},
    methods: {
      setState(state) {
        Object.keys(this.state).map((key) => {
          this.state[ key ] = false;
        });
        this.state[ state ] = true;
      },
    },
    directives: {},
    filters: {},
    watch: {},
    mounted() {
    },
  };
</script>
