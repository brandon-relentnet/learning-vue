<script setup>
import Counter from '@/components/Counter.vue';
</script>

<template>
    <div class="container mx-auto pt-26">
        <h1 class="text-4xl font-bold text-zinc-50 mb-3 text-center">Projects</h1>
        <p class="text-lg text-zinc-200 mb-6 text-center">
            Here are some of the projects I have been working on. Each project is a simple demonstration of a specific
            Vue concept or feature.
        </p>

        <div>
            <h2 class="text-2xl font-bold text-zinc-50 mb-3">Counter App</h2>
            <p class="text-md text-zinc-200 mb-6">
                A simple counter app that demonstrates the basics of Vue reactivity and component interaction.
            </p>
            <Counter />
        </div>
    </div>
</template>