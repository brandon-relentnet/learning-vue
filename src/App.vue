<script setup>
import { inject } from "vue";
import Navbar from "./components/Navbar.vue";

const transitionState = inject('transitionState');
</script>

<template>
  <div class="container mx-auto px-6 pt-36 text-text max-w-[1080px]">
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition :name="transitionState.transitionName" mode="out-in">
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
/* Left Slide (Going Deeper) */
.slide-left-enter-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-left-enter-from {
  transform: translateX(50%);
  opacity: 0;
}

.slide-left-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-left-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}

/* Right Slide (Going Back) */
.slide-right-enter-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-right-enter-from {
  transform: translateX(-50%);
  opacity: 0;
}

.slide-right-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-right-leave-to {
  transform: translateX(50%);
  opacity: 0;
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
