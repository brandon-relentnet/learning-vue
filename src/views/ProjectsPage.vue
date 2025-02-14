<script setup>
import { computed } from "vue";

const props = defineProps({
    projectData: Object,
});

const projects = computed(() => Object.values(props.projectData));
</script>

<template>
    <div>
        <div class="mb-10 w-1/2">
            <h1 class="text-3xl font-bold mb-3">Projects</h1>
            <p class="text-lg text-subtle italic font-serif">
                Here are some of the projects I have been working on. Each project is a simple demonstration of a
                specific Vue concept or feature.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RouterLink v-for="project in projects" :key="project.id" :to="`/projects/${project.id}`"
                class="bg-surface group p-6 rounded-xl shadow-xs hover:bg-overlay transition-colors duration-300 flex justify-between items-start space-x-4">
                <div class="flex flex-col space-y-2">
                    <h2 class="text-lg font-semibold">{{ project.title }}</h2>
                    <p class="text-subtle italic font-serif">
                        {{ project.description }}
                    </p>
                </div>
                <span class="group-hover:text-gold text-3xl transition-colors duration-300">→</span>
            </RouterLink>
        </div>
    </div>
</template>
