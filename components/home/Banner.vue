<!--
 * @Author: dushuai
 * @Date: 2024-01-23 16:52:52
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-23 17:29:18
 * @description: 心平气和
-->
<script setup lang="ts">
defineProps({
  badgeText: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: undefined,
  },
  linkText: {
    type: String,
    default: 'Check it out!',
  },
})
</script>

<template>
  <div
    class="relative bg-gray-200/70 dark:bg-pickled-bluewood-800 hidden items-center justify-center pt-3 pb-3 text-[1rem] lg:flex"
  >
    <span
      v-if="badgeText"
      class="mr-5 rounded-lg bg-blue-600 px-4 py-1 text-sm text-white"
    >
      {{ badgeText }}
    </span>
    <span class="dark:text-gray-200">
      {{ text }}
    </span>
    <NuxtLink
      v-if="link"
      :href="link"
      target="_blank"
      class="text-blue ml-4 underline"
    >
      {{ linkText }}
    </NuxtLink>
  </div>
</template>
