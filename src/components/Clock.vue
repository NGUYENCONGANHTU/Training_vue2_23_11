<template>
  <div>
    <div class="clock">
      <p>Current Time: {{ currentTime }}</p>
    </div>
    <div id="demo">
      <h1 id="clock">00:00:00</h1>
      <label for="hours">Giờ:</label>
      <input type="number" id="hours" min="0" max="23" v-model="hour" />
      <label for="minutes">Phút:</label>
      <input type="number" id="minutes" min="0" max="59" v-model="minute" />
      <label for="seconds">Giây:</label>
      <input type="number" id="seconds" min="0" max="59" v-model="second" /><br />
      <button class="SetTimeout" @click="setTimer()">Đặt hẹn giờ</button>
      <button class="countdown" @click="cancelTimer()">Hủy hẹn giờ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      time: new Date(),
      hour: 0,
      minute: 0,
      second: 0,
      timeHengio: null
    };
  },
  computed: {
    currentTime() {
      return this.formatTime(this.time);
    }
  },
  methods: {
    formatTime(time) {
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(
        seconds
      )}`;
    },
    padZero(value) {
      return value < 10 ? `0${value}` : value;
    },
    updateTime() {
      // Update the time every second using setTimeout
      setTimeout(() => {
        this.time = new Date();
        this.updateTime();
      }, 1000);
    },
    setTimer() {
      //format hour, minute, second
      // ...
      let _tmpTime = new Date();
      _tmpTime.setHours(this.hour);
      _tmpTime.setMinutes(this.minute);
      _tmpTime.setSeconds(this.second);
      if(_tmpTime > this.time) {
        this.timeHengio = _tmpTime;
        alert('Hẹn giờ đã được đặt.');
      } else {
        this.timeHengio = null;
        alert('Vui lòng chọn một thời gian hợp lệ trong tương lai.');
      }
    }
  },
  mounted() {
    // Call the updateTime method when the component is mounted
    this.updateTime();
        
    this.$watch('timeHengio', (i) => {
      if(i) {

      }
    }, { immediate: true });
  }
};
</script>

<style scoped>

</style>
