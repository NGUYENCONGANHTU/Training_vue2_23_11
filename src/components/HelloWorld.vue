<template>
  <div class="clock">
    <p>Current Time: {{ currentTime }}</p>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data() {
    return {
      time: new Date()
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
      return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
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
    }
  },
  mounted() {
    // Call the updateTime method when the component is mounted
    this.updateTime();
  }
};
</script>

<style scoped>
.clock {
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}
</style>
