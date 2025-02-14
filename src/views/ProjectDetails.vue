<script setup>
const props = defineProps({
    project: Object,
});
</script>

<template>
    <div class="container mx-auto pt-36 px-6 text-text max-w-[1080px]">
        <div class="mb-10 w-1/2">
            <h1 class="text-3xl font-bold mb-3">{{ project?.title || "Project not found" }}</h1>
            <p class="text-lg text-subtle italic font-serif">
                {{ project?.description || "This project does not exist." }}
            </p>
        </div>
        <div class="mb-10">
            <component :is="project?.component" v-if="project?.component" />
        </div>

        <RouterLink to="/projects" class="text-subtle active:text-gold hover:text-text transition-colors duration-300">
            ← Back to Projects
        </RouterLink>
    </div>
</template>
