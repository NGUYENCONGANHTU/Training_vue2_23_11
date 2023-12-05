<template>
  <section>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <img src="@/assets/logo.svg" alt="" img="img-fluid">
            </div>
            <div class="col-6">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"><router-link to="/">Home</router-link></div>
                <div class="col"> <a href=""><router-link to="/8">Test Nhân Phẩm</router-link></a></div>
            </div>
        </div>
        
    </div>
  <div class="title">
     <h1>{{ title }}</h1>
  </div>
  <h1>{{ loading === false? 'Bộ số may mắn của bạn là:'  :'Kết quả đang được tính toán!!' }}</h1>
   <div class="time">
    <!-- hiện ra 6 loading khi điều kiện loading = true -->
        <div class="items" v-if="loading === true">
            <div v-for="index in 6" :key="index">
                <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    <!-- hiện ra 6 số random đã đc đặt ra từ trước khi loading = false -->
        <div v-else class="items">
            <div class="number" v-for="list in lists" :key="list">
                {{ list }}
            </div>
        </div>
     </div>
   <div class="btn-button">
    <button><router-link to="/">Back to top</router-link></button>
   </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
        lists:[],
        loading:false,
        index: 0,
    //     title:'Kết quả đang được tính toán!!!',
    }
  }, 
  mounted() 
    {
       this.loading = true,
       setTimeout(() => {

        this.loading=false;
        // this.title='Bộ số may mắn của bạn là: ';
        for( this.index = 0; this.index < 6; this.index++){
            let random =Math.floor(Math.random()*56+1) ;
            this.lists.push(random);
        }
       },2000)

    }, 
    
};
</script>

<style  scoped>

@import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Hedvig+Letters+Serif:opsz@12..24&family=Poppins:wght@300;400&family=Roboto+Mono:wght@500;600&display=swap');

.container-fluid .row .col-6 img{
    width: 250px;
    text-align: center;
}
.container-fluid
{
    border-top: 5px solid red;
}
.container-fluid .row .col-6{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.container-fluid .row .col-6 .col a{
    text-decoration: none;
    color: black;
    font-family: Hedvig Letters Serif;
}
.container-fluid .row .col-6 .col a:hover{
    text-decoration: none;
    color: red;
    font-family: Hedvig Letters Serif;
}
.container
{
    display: flex;
    justify-content: center;
    align-items: center;
}
.title
{
    margin-top: 150px;
}
.time{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
.time .items {
    display: grid;
    grid-template-columns: 150px 150px 150px 150px 150px 150px ;
    font-size: 50px;
    padding: 20px;
   
}
.time .items >.number  {
     background-color: teal; 
     margin-left: 10px;
     color:white;
     padding: 30px 40px;
     border-radius: 10px;
}
.btn-button
{
    display: inline-block;
    right: 40px;
    bottom: 30px;
    position: fixed;  

}
button{
    background-color: red;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px 20px;

}

</style>