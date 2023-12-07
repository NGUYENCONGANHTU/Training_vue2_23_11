<template>
  <div class=" d-flex justify-content-center align-items-center">
    <div v-if="loading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      <div v-if="$route.query.random === 'true'">
        <h1>Bạn thật may mắn</h1>
        <img src="../assets/img/congratulation.gif" />
      </div>
      <div v-else>
        <h1>Bạn thật đen đủi</h1>
        <img src="../assets/img/virus.gif" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 1000px;
}
</style>
