<!--
 * @Author: dushuai
 * @Date: 2024-01-22 11:26:44
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-25 10:22:16
 * @description: Logo
-->
<script setup lang="ts">
const dom = ref<HTMLElement>()

onMounted(() => {
  dom.value?.classList.add('animate__jello', 'animate__animated')
  animate()
})

function animate() {
  dom.value?.addEventListener('animationend', () => {
    dom.value?.classList.remove('animate__jello', 'animate__animated')
    setTimeout(() => {
      dom.value?.classList.add('animate__jello', 'animate__animated')
      animate()
    }, 3000);
  }, { once: true })
}

</script>
<template>
  <div ref="dom" class="flex logo">
    <!-- <img height="25" width="25" src="/logo.svg"> -->
    <h3 class="text-base ml-2 font-bold logo-text">
      <!-- <span class="">Create </span><span class="text font-semibold">Keep Design</span> -->
      <span>dshuais'</span>
    </h3>
  </div>
</template>
<style scoped>
.logo {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.logo-text {
  font-family: "Lucida Handwriting";
}

.text {
  color: transparent;
  background: -webkit-linear-gradient(120deg, #42d392 30%, #d1fae5);
  background-clip: text;
  /* opacity: 0.7; */
}
</style>
