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
            <div class="col"> <a href="">Random</a></div>
            <div class="col"> <a href="">Test Nhân Phẩm</a></div>
        </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
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
</style>