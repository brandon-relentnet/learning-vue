<script setup>
import Counter from '@/components/projects/counter/Counter.vue';
</script>

<template>
    <div class="container mx-auto pt-36 text-text">
        <h1 class="text-4xl font-bold mb-3 text-center">Projects</h1>
        <p class="text-lg mb-6 text-center">
            Here are some of the projects I have been working on. Each project is a simple demonstration of a specific
            Vue concept or feature.
        </p>

        <div class="space-y-4">
            <RouterLink to="/projects/counter"
                class="bg-surface group p-4 rounded shadow-md hover:bg-overlay transition-colors duration-300 flex justify-between items-center">
                <h2 class="text-xl font-semibold">Counter App</h2>
                <span class="group-hover:text-gold text-3xl transition-colors duration-300">→</span>
            </RouterLink>

        </div>
    </div>
</template>