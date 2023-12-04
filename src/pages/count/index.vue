<template>
  <div id="app">
    <div id="count">Count: {{ count }}</div>
    <CusButton
      classBackground="btn_increment" @clickButton="increment()" text="Count"
    ></CusButton>
    <CusButton
      classBackground="btn_reset" @clickButton="reset()" text="Reset"
    ></CusButton>
  </div>
</template>

<script>
import CusButton from "../../components/CusButton.vue";
export default {
  components: { CusButton },
  name: "CountPage",
  data() {
    return {
      count: "0"
    };
  },
  methods: {
    increment: function() {
      if (!isNaN(this.count)) {
        this.count = (parseInt(this.count) + 1).toString();
      }
    },
    reset: function() {
      this.count = "0";
    }
  },
  watch: {
    count: function(newCount) {
      if (newCount % 10 === 0) {
        alert("stop!");
      }
    }
  }
};
</script>

<style scoped>
#app {
  margin-top: 400px;
}
.btn_increment {
  background: rgb(10, 125, 6);
}
.btn_reset {
  background: red;
}

</style>
