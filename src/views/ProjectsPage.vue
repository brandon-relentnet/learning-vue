<script setup>
import Counter from '@/components/projects/counter/Counter.vue';
</script>

<template>
    <div class="container mx-auto pt-26">
        <h1 class="text-4xl font-bold text-zinc-50 mb-3 text-center">Projects</h1>
        <p class="text-lg text-zinc-200 mb-6 text-center">
            Here are some of the projects I have been working on. Each project is a simple demonstration of a specific
            Vue concept or feature.
        </p>

        <div class="space-y-4">
            <RouterLink to="/projects/counter"
                class="bg-zinc-800 p-4 rounded shadow-md text-zinc-50 hover:bg-zinc-700 transition-colors duration-300 flex justify-between items-center">
                <h2 class="text-xl font-bold">Counter App</h2>
                <span class="text-blue-400">→</span>
            </RouterLink>

        </div>
    </div>
</template>