<script setup>
import { inject } from "vue";
import Navbar from "./components/Navbar.vue";

const transitionState = inject("transitionState");
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
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(50%);
  opacity: 0;
}

.slide-left-leave-to,
.slide-right-enter-from {
  transform: translateX(-50%);
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
