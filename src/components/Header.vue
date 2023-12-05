<template>
<section>
  <div class="container-fluid">
    <div class="row">
        <div class="col-5">
            <img src="@/assets/logo.svg" alt="" img="img-fluid">
        </div>
        <div class="col-7">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"> <a href=""><router-link to="/2">Random</router-link></a></div>
            <div class="col"> <a href=""><router-link to="/8">Test Nhân Phẩm</router-link></a></div>
        </div>
    </div>
  </div>
   <div class="container">
    <div class="row">
        <div class="col-6">
            <h3>Random: <span><b>VIETLOTT</b></span> </h3>
            <h2><a href="">Tại đây</a></h2>
            <ul class="content__container__list">
                <li class="content__container__list__item xl:pl-3">Nhanh chóng</li>
                <li class="content__container__list__item xl:pl-3">Chất lượng</li>
                <li class="content__container__list__item xl:pl-3">Uy tín</li>
                <li class="content__container__list__item xl:pl-3">Tại sao không?</li>
            </ul>
            <h1>Chúc các bạn may mắn!!! </h1>
        </div>
        <div class="col-6">
            <img src="https://media.dautuvakinhdoanh.vn/thumb_x400x/images/2022/01/13/9897-1642062966-logo-power-655-big.jpg" alt="">
        </div>
  </div>
   </div>
   <div class="btn-button">
   <button><router-link to="/2">Random</router-link></button>
   </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      msg: 'VIETLOTT'
    };
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Hedvig+Letters+Serif:opsz@12..24&family=Poppins:wght@300;400&family=Roboto+Mono:wght@500;600&display=swap');

.container-fluid .row .col-5 img{
    width: 150px;
    float: left;
}
.container-fluid
{
    border-top: 5px solid red;
}
.container-fluid .row .col-7{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.container-fluid .row .col-7 .col a{
    text-decoration: none;
    color: black;
    font-family: Hedvig Letters Serif;
}
.container-fluid .row .col-7 .col a:hover{
    text-decoration: none;
    color: red;
    font-family: Hedvig Letters Serif;
}
.container{
    margin-top: 150px;
     font-family: Hedvig Letters Serif;
}
span{
    color: red;
}
.content__container__list {
    list-style: none;
    animation-name: change;
    animation-duration: 20s;
    animation-iteration-count: 2;
    font-weight: normal;
    overflow: hidden;  
    max-height: 4em;  
    
}
.content__container__list__item {
    list-style: none;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    font-weight: normal;
    overflow: hidden;
    line-height: 40px;
}
.container .row .col-6 a{
    text-decoration: none;
    color: black;
    font-family: Hedvig Letters Serif;
}
.container .row .col-6 a:hover{
    text-decoration: black;
    color: rgb(162, 15, 15);
    font-family: Hedvig Letters Serif;
}
@keyframes change {
    0%,
    7.14%,
    100% {
        transform: translate3d(0, 0, 0)
    }
 
    14.28% {
        transform: translate3d(0, -14.28%, 0)
    }
 
    21.42% {
        transform: translate3d(0, -28.57%, 0)
    }
 
    28.57% {
        transform: translate3d(0, -42.85%, 0)
    }
 
    35.71% {
        transform: translate3d(0, -57.14%, 0)
    }
 
    42.85% {
        transform: translate3d(0, -71.42%, 0)
    }
 
    53.5% {
        transform: translate3d(0, -85.71%, 0)
    }
 
    64.28% {
        transform: translate3d(0, -71.42%, 0)
    }
 
    71.42% {
        transform: translate3d(0, -57.14%, 0)
    }
 
    78.54% {
        transform: translate3d(0, -42.85%, 0)
    }
 
    85.71% {
        transform: translate3d(0, -28.57%, 0)
    }
 
    92.85% {
        transform: translate3d(0, -14.28%, 0)
    }
}
h1{
     font-family: Hedvig Letters Serif;
     color: red;
     margin-top:30px;
}
.btn-button
{
    display: inline-block;
    right: 900px;
    bottom: 50px;
    position: fixed;  
}
button{
    border-radius: 40px;
    background-color: rgb(199, 21, 21);
    padding: 5px 20px;
    color: rgb(245, 226, 226);
    font-family: Hedvig Letters Serif;
   

}
button a{
    text-decoration: none;
    color: white;
    font-family: Hedvig Letters Serif;

}
</style>