<template>
  <div class="_AccountId">
    <div class="tabs">
      <button class="tabs__item" :class="{'tabs__item--active': state.income}" @click="[setState('income'), setRouterQuery('income')]">Доходы</button>
      <button class="tabs__item" :class="{'tabs__item--active': state.expenses}" @click="[setState('expenses'), setRouterQuery('expenses')]">Расходы
      </button>
      <button class="tabs__item" :class="{'tabs__item--active': state.total}" @click="[setState('total'), setRouterQuery('total')]">Общие</button>
    </div>

    <div style="margin-top: 20px;">
      <div class="">Фильтрация по периодам</div>
    </div>

    <div style="margin-top: 20px;">
      <div class="">Аккардион с диаграммами</div>
      <OperationsDiagram/>
    </div>

    <div style="margin-top: 20px;">
      <div class="">Аккардион со списком операций</div>
      <OperationsList/>
    </div>

  </div>
</template>

<script>
  import OperationsDiagram from "~/components/operations/OperationsDiagram";
  import OperationsList from "~/components/operations/OperationsList";

  export default {
    name: "AccountId",
    scrollToTop: true,
    props: {},
    components: {
      OperationsList,
      OperationsDiagram,
    },
    watchQuery: ["operations"],
    asyncData({ route }) {
      // route.query.operations
      // загрузка данных, в зависимости от типа операций
      return {};
    },
    data() {
      return {
        state: {
          income: true,
          expenses: false,
          total: false,
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
        // переключение данных (доходы/расходы)
      },
      setRouterQuery(query) {
        this.$router.push({ query: { operations: query } });
      },
    },
    directives: {},
    filters: {},
    watch: {},
    mounted() {
    },
  };
</script>
