<!--
 * @Author: dushuai
 * @Date: 2024-01-22 11:26:44
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-26 17:42:54
 * @description: home
-->
<script lang="ts" setup>
import { onMounted } from 'vue'
import AOS from 'aos'

defineOptions({
  name: 'Home',
})

onMounted(() => {
  ThisLog()
  AOS.init()
})
</script>
<template>
  <div class="relative pb-24">
    <HomeBanner badge-text="Beta" text="dshuais' blog has been updated." link="https://blog.dshuais.com/"
      link-text="Check it out →" />

    <div class="relative">
      <section class="relative w-full min-h-[96vh] mt-20">
        <div class="max-w-5xl mx-auto text-center px-5 lg:px-0">
          <h2 class="text-gray-200 tracking-wide dark:text-gray-600">HELLO WORLD !</h2>

          <HomeTitle title="dshuais' homepage" />

          <h3 class="text-lg mt-8 text-gray-800 dark:text-gray-400">
            <!-- 欢迎访问，这里是我的主页，在这里我主要用来记录我的学习历程和分享自己的实验成果，如果刚好帮到你，你可以打开GitHub并给予一颗星 -->
            Welcome to visit, here is my home page, where I mainly used to record my learning process and share their own
            experimental results, if it just helps you, you can open GitHub and give a star.
            I hope it can help you.
            <br />
            <span class="mt-2 block">
              Blogs and notes are accessible:
              <NuxtLink href="https://blog.dshuais.com/" target="_blank"
                class="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold">
                blog.dshuais.com
              </NuxtLink>
            </span>
            <!-- <div class="mt-1">I hope it can help you.</div> -->
          </h3>
        </div>

        <div
          class="relative mx-auto flex items-center space-x-5 w-full justify-center mt-8 px-5 lg:px-0 flex-col lg:flex-row">
          <ButtonLink class="getStartBtn" href="/about"> Know More About → </ButtonLink>
          <NuxtLink href="https://github.com/dshuais/homepage/" target="_blank"
            class="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold mt-4 lg:mt-0 select-none">
            Open on GitHub and give a star
          </NuxtLink>
        </div>

        <div class="relative mt-10 lg:mt-24 overflow-x-clip">
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" class="max-w-5xl mx-auto">
            <div class="SpinAnimation absolute w-[400px] h-[400px] left-[-100px] top-[70px] bg-green-700 rounded-full" />
            <div class="SpinAnimation absolute w-[400px] h-[400px] left-[50%] bg-blue-700 rounded-full"
              style="animation-duration: 10000ms" />
            <div class="SpinAnimation absolute w-[400px] h-[400px] right-[50%] bg-pink-700 rounded-full"
              style="animation-direction: reverse; animation-duration: 8000ms" />
            <div class="SpinAnimation absolute w-[400px] h-[400px] right-[-100px] top-[150px] bg-yellow-700 rounded-full"
              style="animation-direction: reverse; animation-duration: 10000ms" />
          </div>

          <div class="max-w-5xl px-5 lg:px-0 mx-auto">
            <div class="relative group rounded-lg overflow-hidden">
              <HomeTerminal />
              <!-- <div
                class="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-100 group-hover:bg-black/50 transition grid place-items-center">
                <div class="text-center">
                  <h1 class="text-4xl font-bold text-white">
                    Get started in one line!
                  </h1>
                  <h3 class="text-white">
                    Use our create-keep-design CLI to boostrap your project in minutes!
                  </h3>
                  <div class="flex items-center mt-4 space-x-2 mx-auto justify-center">
                    <span class="bg-black rounded-lg px-4 py-1 text-white">
                      pnpm create keepdesign
                    </span>
                    <CopyButton content="pnpm create keepdesign" />
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-6" data-aos="fade-up">
        <!-- <div class="absolute xl:top-[-300px] 2xl:top-[-500px] left-0 select-none">
          <NuxtImg class="w-[100vw] hidden dark:block" src="/shading.webp" alt="Background Image" />
        </div> -->
        <div class="relative SidebaseContainer">
          <div class="Heading">
            <h1>
              ✨ <span class="GradientTextPurple">Notes selection</span> !
            </h1>
            <p>
              <!-- 主要用来记录我的学习笔记，以及学习过程中的一些思考和总结。欢迎光临指导。 -->
              It is mainly used to record my learning notes, as well as some thinking and summary in the learning process.
              Welcome to visit and comment.
            </p>
          </div>
          <!-- <ModulesSection /> -->
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
.getStartBtn {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  border: none !important;
  user-select: none;
  transition: box-shadow 0.6s;
  border-radius: 0.75rem;
  position: relative;
  padding: 0.1rem 1.5rem;
  line-height: 3rem;
}

.getStartBtn:hover {
  box-shadow: 0 0 60px 2px #42d392, 0.5rem 0.5rem 30px #647eff;
}

.SpinAnimation {
  animation: linear 7000ms spin infinite;
  transform-origin: center 35% 0;
  filter: blur(80px);
  opacity: 75%;
}

.SidebaseContainer {
  max-width: 80rem;
  margin: auto auto 5rem;

  @apply px-12 2xl:px-0;
}

.Heading {
  margin: 100px 0 50px 0;
}

.Heading h1 {
  font-size: 2rem;
  font-weight: bold;
}

.Heading p {
  max-width: 50rem;
  font-size: 1.2rem;
}

.GradientTextPurple {
  background: linear-gradient(to right, #42d392 10%, #647eff 40%, #798be9 60%, #42d392 90%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 1s linear infinite;

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
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
