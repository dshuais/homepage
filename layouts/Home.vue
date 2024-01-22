<!--
 * @Author: dushuai
 * @Date: 2024-01-22 11:26:44
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-22 15:47:20
 * @description: home
-->
<script lang="ts" setup>
import { onMounted } from 'vue'
import AOS from 'aos';

defineOptions({
  name: 'Home'
})


onMounted(() => {
  AOS.init()
})

</script>
<template>
  <div>
    123
  </div>
</template>
