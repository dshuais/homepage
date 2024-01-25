<!--
 * @Author: dushuai
 * @Date: 2024-01-24 17:48:10
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-25 18:28:00
 * @description: 我正在做的项目列表
-->
<script setup lang="ts">
import { VtText } from "@lehoczky/vue-termynal";

</script>
<template>
  <vt-text :lineDelay="0">✔ <span class="text-green-500">HomePage</span>:<br />&nbsp;&nbsp;
    A clean and concise site based on @nuxt-themes/docus.
  </vt-text>
  <vt-text :lineDelay="1500">✔ <span class="text-green-500">My blog</span>:<br />&nbsp;&nbsp;
    A personal customized blog based on vitepress.
  </vt-text>
  <vt-text :lineDelay="0">✔ <span class="text-green-500">Keep-Design</span>:<br />&nbsp;&nbsp;
    A personalized front-end component library built on Vue 3 + TypeScript.
  </vt-text>
  <vt-text :lineDelay="1500">✔ <span class="text-green-500">Create-Keep-Design</span>:<br />&nbsp;&nbsp;
    A Vite+TypeScript based scaffolding for quickly building a Vue 3 component library development environment.
  </vt-text>
  <vt-text :lineDelay="0">✔ <span class="text-green-500">Lottie-vue3</span>:<br />&nbsp;&nbsp;
    A Lottie animation playback interactive plug-in based on Vue 3+Lottie-Web, clean, easy to use, more apis.
  </vt-text>
  <vt-text :lineDelay="1500">✔ <span class="text-green-500">Danmaku-vue</span>:<br />&nbsp;&nbsp;
    Based on Vue 3 web pop-up interactive plug-in, light, easy to use, strong extensibility.
  </vt-text>
  <br />
  <vt-text :lineDelay="1000">✨ For more interesting and fun experiments, please visit
    <NuxtLink href="/labs" class="text-blue-500 font-bold select-none">
      /LABS
    </NuxtLink>
  </vt-text>
</template>
<style scoped>
.v-termynal .vt__line {
  white-space: normal;
}
</style>
