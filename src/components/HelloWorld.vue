<template>
  <div class="clock">
    <p>Count: {{ count }}</p>
    <button class="btn-count" @click="increase">Count</button>
    <button class="btn-reset" @click="reset">Reset</button>
    <div>{{name}}</div>
  </div>
</template>

<script>
import { watch } from 'vue';
export default {
  name: 'Clock',
  data() {
    return {
     count: 0,
     name: 'Tu',
    };
  },
  computed: {
    isDivisibleByTen: function () {
      return this.count % 10 === 0 && this.count !== 0;
    }
  },
  methods:{
    increase(){ 
      this.count++;
    },
    reset(){
      this.count = '0';
    }
  },
  watch:{
    count: function(newCount){
      console.log("count change");
      this.name = 'Minh';
       if( newCount % 10 === 0){
        alert('stop!');
       }
    }
  }
};
</script>

<style scoped>
.btn-count{
  background: green;

}
button{
  padding: 10px;
  outline: none;
}
.btn-reset{
  background: red;
}
.clock{
  background: linear-gradient(blue, violet);;
}
body{}
</style>
