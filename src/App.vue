<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="h-screen bg-zinc-900">
    <Navbar />
    <router-view />
  </div>
</template>

