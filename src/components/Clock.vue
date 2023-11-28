<template>
  <div id="app">
    <div class="clock">
      <!-- hiển thị thời gian hiện tại -->
      <p>Current Time: {{ currentTime }}</p>   

    </div>

    <div id="timer">
      <!-- hiển thị định dạng của bộ đếm thời gian -->
      <h1>Timer: {{ timerDisplay }}</h1>

      <label for="hours">Giờ:</label>
      <input type="number" id="hours" min="0" v-model="inputHours" />
      <label for="minutes">Phút:</label>
      <input type="number" id="minutes" min="0" v-model="inputMinutes" />
      <label for="seconds">Giây:</label>
      <input type="number" id="seconds" min="0" v-model="inputSeconds" /><br />

      <button @click="startTimer" :disabled="timerRunning">Bắt đầu hẹn giờ</button>
      <button @click="stopTimer" :disabled="!timerRunning">Dừng hẹn giờ</button>

    </div>
  </div>
</template>
  <script>
    new Vue({
      el: '#app',
      data: {
        time: new Date(), //khai báo 'time' thời gian hiện tại
        inputHours: 0,    //lấy giờ cho bộ đếm thời gian
        inputMinutes: 0,  //lấy phút cho bộ đếm thời gian
        inputSeconds: 0,  //lấy giây cho bộ đếm thời gian
        timerRunning: false  //Trạng thái của timerRunning
      },
      computed: {
        currentTime() { //hiển thị thời gian hiện tại dưới dạng chuỗi định dạng
          return this.formatTime(this.time);
        },
        timerDisplay() { // Hiển thị giờ/phút/giây cho bộ đếm thời gian dưới dạng chuỗi định dạng.
          return this.formatTime(new Date(this.inputHours * 3600 * 1000 + this.inputMinutes * 60 * 1000 + this.inputSeconds * 1000));
        }
      },
      watch: {  //theo dõi trạng thái của timerRunning
        timerRunning(newVal) {
          if (newVal) {   //khi newVal thay đổi --> startCountdown thay đổi 
            this.startCountdown();
          } else {   
            this.stopCountdown();
          }
        }
      },
      methods: {
        formatTime(time) {    // định dạng thời gian
          const hours = time.getHours();
          const minutes = time.getMinutes();
          const seconds = time.getSeconds();
          return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
        },
        padZero(value) {
          return value < 10 ? `0${value}` : value;  
        },
        updateTime() {  //Lấy thời gian hiện tại
          this.time = new Date();
        },  
        startTimer() {  //Bắt đầu chạy thời gian
          this.timerRunning = true;
        },  
        stopTimer() {   //Dừng chạy thời gian
          this.timerRunning = false;
        },
        startCountdown() {
          this.countdownInterval = setInterval(() => {
            if (this.inputHours === 0 && this.inputMinutes === 0 && this.inputSeconds === 0) { //if hour, minutes, second === 0 are stop!!!!
              this.timerRunning = false;
              alert('Hẹn giờ đã đến!');
            } 
            else 
            {
              this.inputSeconds--;
              if (this.inputSeconds < 0) 
              {
                  this.inputSeconds = 59;
                  this.inputMinutes--;
                if (this.inputMinutes < 0) 
                {
                  this.inputMinutes = 59;
                  this.inputHours--;
                }
              }
            }
          }, 1000);
        },
        stopCountdown() {
          clearInterval(this.countdownInterval);
        }
      },
      mounted() {
        setInterval(() => {
          this.updateTime();
        }, 1000);
      }
    });
  </script>
<style scoped>

</style>

