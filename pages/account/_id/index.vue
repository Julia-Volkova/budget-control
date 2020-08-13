<template>
  <div class="_AccountId">
    <div class="tabs">
      <button class="tabs__item" :class="{'tabs__item--active': state.income}" @click="setState('income')">Доходы</button>
      <button class="tabs__item" :class="{'tabs__item--active': state.expenses}" @click="setState('expenses')">Расходы</button>
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
  import OperationsList from "@/components/operations/OperationsList";

  export default {
    name: "AccountId",
    scrollToTop: true,
    props: {},
    components: { OperationsList, OperationsDiagram },
    data() {
      return {
        state: {
          income: true,
          expenses: false,
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
    },
    directives: {},
    filters: {},
    watch: {},
    mounted() {
    },
  };
</script>
