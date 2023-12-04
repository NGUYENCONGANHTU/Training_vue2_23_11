<template>
  <button :class="classBackground" @click="clickButton">{{ text }}</button>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: '',
        },
        classBackground: {
            type: String,
            default: '',
        }
    },
    methods: {
        clickButton() {
            this.$emit('clickButton');
        }
    }
}
</script>

<style scoped>

button{
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  margin-left: 20px;
}
</style>