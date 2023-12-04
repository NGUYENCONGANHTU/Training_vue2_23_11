<template>
  <div id="app">
    <router-view/>
    <Header/>
    <Random/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Random from './components/Random.vue';
export default {
  comments:{
    Header,
    Random
  },
  name: 'App',
}
</script>
<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
</style>
