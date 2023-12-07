<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <img
            src="https://vietlott.vn/static.vietlott.vn/uploads/images/Logo%20-slogan%20white.jpg?v=11212"
            alt=""
            img="img-fluid"
          />
        </div>
        <div class="col-6">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col">
            <a href=""><router-link to="/">Home</router-link></a>
          </div>
          <div class="col">
            <a href=""><router-link to="/2">Random</router-link></a>
          </div>
        </div>
      </div>
    </div>
    <div class="text">
      <h2>Kiểm tra nhân phẩm của bạn tại đây</h2>
      <h3>Chọn con số may mắn của bạn!!!</h3>
    </div>
    <div class="keyboard">
      <div class="items">
        <button
          v-for="index in 10"
          :key="index"
          :class="{ number: true, active: userNumber === index }"
          @click="setuserNumber(index)"
        >
          {{ index }}
        </button>
      </div>
    </div>
    <div class="btn" @click="startRandom()">
      <button>Test Nhân Phẩm</button>
    </div>
    <div class="btn-home">
      <button>
        <router-link to="/"><a href="">Back to home</a> </router-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      random: 0,
      randomNumber: 0,
      intervalCount: 0,
      userNumber: 0
    };
  },
  methods: {
    startRandom() {
      this.randomNumber = Math.floor(Math.random() * 11) + 1;
      console.log(this.randomNumber);
      this.$router.push({
        path: "result",
        query: {
          random: this.randomNumber === this.userNumber ? "true" : "false"
        }
      });

      // const interval = setInterval(() => {
      //   this.random++;
      //   if (this.random > 10) {
      //     this.random = 1;
      //     this.intervalCount++;
      //     if (this.intervalCount === 1) {
      //       clearInterval(interval);
      //       this.random = this.stopRandomNumber;
      //       this.$router.push({
      //         path: "result",
      //         query: { random: this.stopRandomNumber }
      //       });
      //     }
      //   }
      // }, 200);
    },
    setuserNumber(number) {
      this.userNumber = number;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Agbalumo&family=Hedvig+Letters+Serif:opsz@12..24&family=Poppins:wght@300;400&family=Roboto+Mono:wght@500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Agbalumo&family=Hedvig+Letters+Serif:opsz@12..24&family=Poppins:wght@300;400&family=Roboto+Mono:wght@400;500;600&display=swap");
.container-fluid .row .col-6 img {
  width: 150px;
}
.container-fluid {
  border-top: 5px solid red;
}
.container-fluid .row .col-6 {
  display: flex;
  text-align: center;

  align-items: center;
}
.container-fluid .row .col-6 .col a {
  text-decoration: none;
  color: black;
  font-family: Hedvig Letters Serif;
}
.container-fluid .row .col-6 .col a:hover {
  text-decoration: none;
  color: red;
  font-family: Hedvig Letters Serif;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto Mono;
  break-before: always;
}
.container .text {
  margin-bottom: 30px;
}
.container .text h2 {
  margin-bottom: 30px;
  font-weight: bold;
}
.keyboard {
  max-width: 700px;
  margin: auto;
}
.keyboard .items {
  display: grid;
  grid-template-columns: 150px 150px 150px 150px;
  flex-wrap: wrap;
  max-width: 700px;
  text-align: center;
  margin-top: 30px;
  grid-gap: 10px;
}
.keyboard .items .number {
  margin-left: 10px;
  border-radius: 10px;
}
.btn {
  margin-top: 20px;
  border: none;
}
.keyboard .items .number {
  background-color: #bad7d7;
}
.btn button {
  background-color: #c71515;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px;
}
button {
  border: none;
}
.btn-home {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  border-radius: 10px;
}
.btn-home button {
  border-radius: 10px;
  background-color: #c71515;
  color: white;
  font-weight: bold;
  padding: 5px;
}
.btn-home a {
  text-decoration: none;
  color: white;
  padding: 10px;
}
.active {
  background-color: rgb(217, 47, 47) !important;
}
</style>
