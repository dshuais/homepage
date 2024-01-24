<!--
 * @Author: dushuai
 * @Date: 2024-01-23 18:26:02
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-24 18:35:44
 * @description: bash
-->
<script setup lang="ts">
import { VTermynal, VtInput, VtProgress, VtSpinner, VtText, } from "@lehoczky/vue-termynal";

const container = ref<HTMLElement>();

function scrollToNewLine(line: any) {
  if (line.id === "no-scroll") {
    return;
  }

  const containerElement = container.value as HTMLElement;
  if (line.offsetTop - line.offsetHeight > containerElement.offsetHeight) {
    containerElement.scrollTo({
      top: line.offsetTop - line.offsetHeight - containerElement.offsetHeight,
      behavior: "smooth",
    });
  }
}

function scrollToTop(this: any) {
  console.log("scrollToTop");
  container.value?.scrollTo({ top: 0 });
}
</script>
<template>
  <div data-aos="fade-up" data-aos-delay="100" class="relative w-full">
    <v-termynal class="AnimatedTerminal" forward-button restart-button lazy @before-new-line="scrollToNewLine($event)"
      @restart="scrollToTop()">
      <div ref="container" class="line-container">
        <vt-input :lineDelay="500">Hi there 👋</vt-input>
        <vt-input :lineDelay="500">I am</vt-input>
        <vt-text :lineDelay="1000">
          <HomeLinesDsIcon />
        </vt-text>
        <vt-input :typeDelay="50" :lineDelay="500">🔭 I’m currently working on WuHan.</vt-input>
        <vt-input :typeDelay="50" :lineDelay="500">🌱 I’m currently learning Vue & React & ReactNative & Node.</vt-input>
        <vt-input :typeDelay="50" :lineDelay="1000">📫 How to reach me: dsshuai2020@163.com</vt-input>
        <br />
        <vt-text :lineDelay="300">
          <HomeLinesDiamond />
        </vt-text>
        <!-- 本网站主要是用来记录我的学习过程和一些实验结果 -->
        <vt-input :typeDelay="50" :lineDelay="500">This website is mainly used to record my learning process and some
          experimental results. </vt-input>
        <br />
        <vt-text :lineDelay="300">
          <HomeLinesDiamond />
        </vt-text>
        <!-- 我目前正在做 -->
        <vt-input :typeDelay="50" :lineDelay="500">🚀 I'm currently doing it ... </vt-input>
        <!-- <HomeLinesProject /> -->
        <vt-input :typeDelay="60" :lineDelay="500">I hope it can help you.</vt-input>

        <!-- <HomeLinesSheepIcon /> -->
        <!-- <vt-text :lineDelay="0">Welcome to
          <span class="text-green-500 font-bold">sidebase v0.3.0!</span></vt-text>
        <vt-text :lineDelay="0"> -->
        <!-- <DiamondSeparator /> -->
        <!-- </vt-text>
        <vt-text :lineDelay="0">sidebase helps you to create fully typesafe Nuxt 3 app in
          seconds!</vt-text>
        <br />
        <vt-text :lineDelay="1000">What will your project be called?
          <span class="font-bold text-gray-500">my-first-sidebase-project</span></vt-text> -->
        <!-- <StackInputSelect :next-id="nextId" />
        <ModulesInputSelect :next-id="nextId" />
        <GitInputSelect :next-id="nextId" />
        <CiInputSelect :next-id="nextId" />
        <NPMInputSelect :next-id="nextId" /> -->
        <!-- <br />
        <vt-text :lineDelay="0">
          <DiamondSeparator />
        </vt-text>
        <vt-text :lineDelay="0">Now setting up
          <span class="text-green-500">my-first-sidebase-project</span>:</vt-text>
        <vt-text>✔ Adding Nuxt 3 merino-template</vt-text>
        <vt-text>✔ Adding Nuxt modules</vt-text>
        <vt-text>✔ Adding README</vt-text>
        <br />
        <vt-text :lineDelay="0">
          <DiamondSeparator />
        </vt-text>
        <vt-text :lineDelay="0">✨ Project setup finished. Next steps are:</vt-text>
        <vt-text :lineDelay="0"><span class="text-blue-500">> cd my-first-sidebase-project</span></vt-text>
        <vt-text :lineDelay="0"><span class="text-blue-500">> npm install</span></vt-text>
        <vt-text :lineDelay="0"><span class="text-blue-500">> npx prisma db push</span></vt-text>
        <vt-text :lineDelay="0"><span class="text-blue-500">> npx prisma generate</span></vt-text>
        <vt-text :lineDelay="0"><span class="text-blue-500">> npm run dev</span></vt-text>
        <br />
        <vt-text :lineDelay="0">Stuck? Join us at
          <span class="text-blue-500">https://discord.gg/auc8eCeGzx</span></vt-text>
        <br />
        <vt-text :lineDelay="0">🐑 So Long, and Thanks for ... using
          <span class="text-green-500">sidebase</span> to setup your
          application</vt-text> -->
      </div>
    </v-termynal>
  </div>
</template>
<style scoped>
.AnimatedTerminal {
  width: 100%;
  padding: 40px 20px 20px 20px;

  @apply text-xs md:text-sm lg:text-base;
}

.line-container {
  height: 600px;
  overflow: hidden;
}

@keyframes hideAnimation {
  to {
    visibility: hidden;
    width: 0;
    height: 0;
  }
}
</style>
