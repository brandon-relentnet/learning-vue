<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="h-screen bg-zinc-900">
    <Navbar />
    <transition name="slide" mode="out-in">
      <router-view :key="$route.fullPath"/>
    </transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
