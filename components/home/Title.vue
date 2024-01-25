<!--
 * @Author: dushuai
 * @Date: 2024-01-24 10:24:34
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-24 11:10:46
 * @description: Home Title
-->
<script setup lang="ts">
type Props = {
  title: string;
}
const props = defineProps<Props>()

</script>
<template>
  <h1 class="text text-6xl lg:text-7xl font-bold tracking-tighter">{{ props.title }}</h1>
</template>
<style scoped>
.text {
  /* font-family: "Lucida Handwriting"; */
  line-height: 1.3;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image:
    linear-gradient(90deg,
      rgb(100, 126, 255),
      rgb(66, 211, 146),
      rgb(255, 167, 69),
      rgb(254, 134, 159),
      rgb(239, 122, 200),
      rgb(160, 131, 237),
      rgb(67, 174, 255),
      rgb(160, 131, 237),
      rgb(239, 122, 200),
      rgb(254, 134, 159),
      rgb(255, 167, 69),
      rgb(66, 211, 146),
      rgb(100, 126, 255));
  background-size: 400%;
  animation: streamer 26s linear infinite;
}

@keyframes streamer {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}
</style>