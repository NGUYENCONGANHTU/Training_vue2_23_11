<template>
  <div id="app">
  <div id="count">Count: {{ count }}</div>
  <button class="btn_increment" @click="increment">Count</button>
</div>
</template>

<script>
export default {
  name: 'Clock',
  data() {
    return {
        count:'0',
    };
  }, 
  methods:{
    increment:function(){
      if(!isNaN(this.count)){
        this.count = (parseInt(this.count)+1).toString();
      }
    },
    reset: function(){
      this.count='0';
    }
  }, watch:{
    count: function(newCount){
      if(newCount%10===0){
        alert('stop!');
      }
    }
  }
   }
</script>

<style scoped>
#app
{
  margin-top: 400px;
}
button{
  padding: 5px;
  margin-top: 20px;
  border-radius: 5px;
}
.btn_increment{
  background: green;
}
.btn_reset{
  background: red;
}
</style>