<script setup>
import Theme from "./Theme.vue";
</script>

<template>
    <nav class="bg-base text-text p-4 flex justify-end items-center fixed top-0 left-0 w-full space-x-2 font-semibold">
        <RouterLink to="/" activeClass="bg-surface"
            class="hover:bg-surface rounded-xl px-4 py-2 transition-colors duration-300">Home</RouterLink>
        <RouterLink to="/projects" activeClass="bg-surface"
            class="hover:bg-surface rounded-xl px-4 py-2 transition-colors duration-300">Projects</RouterLink>
        <Theme />
    </nav>
</template>