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
      top: line.offsetTop - line.offsetHeight - containerElement.offsetHeight + 100,
      behavior: "smooth",
    });
  }
}

function scrollToTop(this: any) {
  container.value?.scrollTo({ top: 0 });
}
</script>
<template>
  <div data-aos="fade-up" data-aos-delay="100" class="relative w-full">
    <v-termynal class="AnimatedTerminal" forward-button restart-button lazy @before-new-line="scrollToNewLine($event)"
      @restart="scrollToTop()">
      <div ref="container" class="line-container">
        <vt-input :lineDelay="500">Hi there 👋</vt-input>
        <vt-input :lineDelay="500" :typeDelay="45">The writer is connecting...</vt-input>
        <vt-progress :lineDelay="1000" prefix="&nbsp;" />
        <!-- <vt-input :lineDelay="500">✨ Success !</vt-input> -->
        <vt-text :lineDelay="500">
          ✨ Success !
        </vt-text>
        <br />
        <vt-text :lineDelay="300">
          <HomeLinesDiamond />
        </vt-text>
        <vt-input :lineDelay="500">I am</vt-input>
        <vt-text :lineDelay="1000">
          <HomeLinesDsIcon />
        </vt-text>
        <vt-input :typeDelay="45" :lineDelay="500">🔭 I’m currently working on WuHan.</vt-input>
        <vt-input :typeDelay="45" :lineDelay="500">🌱 I’m currently learning Vue & React & ReactNative & Node.</vt-input>
        <vt-input :typeDelay="45" :lineDelay="1000">📫 How to reach me: dsshuai2020@163.com</vt-input>
        <!-- <br />
        <vt-text :lineDelay="300">
          <HomeLinesDiamond />
        </vt-text> -->
        <!-- 本网站主要是用来记录我的学习过程和一些实验结果 -->
        <!-- <vt-input :typeDelay="50" :lineDelay="500">This website is mainly used to record my learning process and some
          experimental results. </vt-input> -->
        <br />
        <vt-text :lineDelay="300">
          <HomeLinesDiamond />
        </vt-text>
        <!-- 我目前正在做 -->
        <vt-input :typeDelay="45" :lineDelay="500">🚀 I'm currently doing it ... </vt-input>
        <HomeLinesProject />
        <br />
        <vt-text :lineDelay="300">
          <HomeLinesDiamond />
        </vt-text>
        <vt-input :typeDelay="45" :lineDelay="500">So Long, and Thanks for visit, I hope it can help you.</vt-input>
        <br />
        <vt-text :lineDelay="0">🐑 Blogs and notes? at
          <NuxtLink href="https://blog.dshuais.com/" target="_blank" class="text-blue-500 font-bold">
            https://blog.dshuais.com
          </NuxtLink>
        </vt-text>
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

/* Applies to both terminals */
.v-termynal .vt__line {
  white-space: normal;
}
</style>
