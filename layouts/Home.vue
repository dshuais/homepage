<!--
 * @Author: dushuai
 * @Date: 2024-01-22 11:26:44
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-23 18:22:43
 * @description: home
-->
<script lang="ts" setup>
import { onMounted } from 'vue'
import AOS from 'aos'

defineOptions({
  name: 'Home',
})

onMounted(() => {
  AOS.init()
})
</script>
<template>
  <div class="relative">
    <HomeBanner
      badge-text="Beta"
      text="dshuais' blog has been updated."
      link="https://blog.dshuais.com/"
      link-text="Check it out →"
    />

    <div class="relative">
      <section class="relative w-full min-h-[96vh] mt-20">
        <div class="max-w-5xl mx-auto text-center px-5 lg:px-0">
          <h2 class="text-gray-300 tracking-wide">welcome to</h2>
          <h1
            class="StaticGradientText text-6xl lg:text-7xl font-bold tracking-tight"
          >
            dshuais' homepage
          </h1>
          <h3 class="text-lg mt-8 text-gray-800 dark:text-gray-400">
            Here is my personal home page, the main record of personal life and
            learning thinking and summary, welcome to visit.
          </h3>
        </div>

        <div
          class="relative mx-auto flex items-center space-x-5 w-full justify-center mt-5 px-5 lg:px-0 flex-col lg:flex-row"
        >
          <ButtonLink href="/about"> Know More About → </ButtonLink>
          <NuxtLink
            href="https://github.com/dshuais/homepage"
            target="_blank"
            class="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold mt-4 lg:mt-0"
          >
            Open on GitHub and give a star
          </NuxtLink>
        </div>

        <div class="relative mt-10 lg:mt-24 overflow-x-clip">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            class="max-w-5xl mx-auto"
          >
            <div
              class="SpinAnimation absolute w-[400px] h-[400px] left-[-100px] top-[70px] bg-green-700 rounded-full"
            />
            <div
              class="SpinAnimation absolute w-[400px] h-[400px] left-[50%] bg-blue-700 rounded-full"
              style="animation-duration: 10000ms"
            />
            <div
              class="SpinAnimation absolute w-[400px] h-[400px] right-[50%] bg-pink-700 rounded-full"
              style="animation-direction: reverse; animation-duration: 8000ms"
            />
            <div
              class="SpinAnimation absolute w-[400px] h-[400px] right-[-100px] top-[150px] bg-yellow-700 rounded-full"
              style="animation-direction: reverse; animation-duration: 10000ms"
            />
          </div>

          <!-- <div class="max-w-5xl px-5 lg:px-0 mx-auto ">
            <div class="relative group rounded-lg overflow-hidden">
              <Terminal />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-100 group-hover:bg-black/50 transition grid place-items-center">
                <div class="text-center">
                  <h1 class="text-4xl font-bold text-white">
                    Get started in one line!
                  </h1>
                  <h3>
                    Use our sidebase CLI to boostrap your project in minutes!
                  </h3>
                  <div class="flex items-center mt-4 space-x-2 mx-auto justify-center">
                    <span class="bg-black rounded-lg px-4 py-1 text-white">
                      npm create sidebase@latest
                    </span>
                    <CopyButton content="npm create sidebase@latest" />
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
.StaticGradientText {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.3;
}
.SpinAnimation {
  animation: linear 7000ms spin infinite;
  transform-origin: center 35% 0;
  filter: blur(80px);
  opacity: 75%;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
