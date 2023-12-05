<template>
  <section>
     <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <img src="https://vietlott.vn/static.vietlott.vn/uploads/images/Logo%20-slogan%20white.jpg?v=11212" alt="" img="img-fluid">
            </div>
            <div class="col-6">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"> <a href=""><router-link to="/">Home</router-link></a></div>
            <div class="col"> <a href=""><router-link to="/2">Random</router-link></a></div>
            </div>
        </div>
    </div>
        <div class="text">
            <h2>Kiểm tra nhân phẩm của bạn tại đây</h2>
            <h3>Chọn con số may mắn của bạn!!!</h3>
        </div>
        <div class="keyboard">
            <div class="items">
               <button class="number">1</button> 
               <button class="number">2</button> 
               <button class="number">3</button> 
               <button class="number">4</button> 
            </div>
            <div class="items">
               <button class="number">5</button> 
               <button class="number">6</button> 
               <button class="number">7</button> 
               <button class="number">8</button> 
            </div>
            <div class="items">
               <button class="number">9</button> 
               <button class="number">10</button> 
            </div>
        </div>
        <div class="btn">
            <button>Test Nhân Phẩm</button>
        </div>
        <div class="btn-home">
            <button><router-link to="/"><a href="">Back to home</a> </router-link></button>
        </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Hedvig+Letters+Serif:opsz@12..24&family=Poppins:wght@300;400&family=Roboto+Mono:wght@500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Hedvig+Letters+Serif:opsz@12..24&family=Poppins:wght@300;400&family=Roboto+Mono:wght@400;500;600&display=swap');
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
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto Mono;
    break-before: always;

}
.container .text {
    margin-bottom: 30px;
   
}
.container .text h2{
    margin-bottom: 30px; font-weight: bold;
}
.keyboard{
    max-width: 700px;
    margin: auto;
}
.keyboard .items{
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
    flex-wrap: wrap;
    max-width: 700px;
    text-align: center;
    margin-top: 30px;
    padding: 10px;
}
.keyboard .items .number{
    margin-left: 10px;
    border-radius: 10px;
}
.btn{
    margin-top: 20px;
}
.keyboard .items .number {
   background-color: #bad7d7;
}
.btn button{
    background-color: rgb(149, 17, 17);
    color: white;
    font-weight: bold;
    border-radius: 5px;
    padding: 5px;
  
}
.btn-home
{
  position: fixed;  
  bottom: 10px;
  right: 10px;  
  padding: 10px;  
  border-radius: 10px;
}
.btn-home button{
    border-radius: 10px;
    background-color: rgb(149, 17, 17);
    color: white;
    font-weight: bold;
    padding: 5px;
}
.btn-home a {
    text-decoration: none;
    color: white;
    padding: 10px;
}

</style>