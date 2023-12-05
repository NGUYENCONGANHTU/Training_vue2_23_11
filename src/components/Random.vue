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
   <div class="time">
     <div class="items">
        <div class="number"></div>
        <div class="number"></div>
        <div class="number"></div>
        <div class="number"></div>
        <div class="number"></div>
        <div class="number"></div>
     </div>
   </div>
   <div class="btn-button">
    <button><router-link to="/">Back to top</router-link></button>
   </div>
  </section>
</template>

<script>
export default {
  
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
.time .items .number  {
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