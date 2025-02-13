<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Counter from '@/components/projects/counter/Counter.vue';

const route = useRoute();
const projectId = computed(() => route.params.id);

const projectData = {
    counter: {
        title: 'Counter',
        description: 'A simple counter that demonstrates the basics of Vue reactivity and component interaction.',
        component: Counter,
    },
    todo: {
        title: 'Todo',
        description: 'A todo app that demonstrates the basics of Vue reactivity and component interaction.',
    },
    calculator: {
        title: 'Calculator',
        description: 'A calculator that demonstrates the basics of Vue reactivity and component interaction.',
    },
};

const project = computed(() => projectData[projectId.value] || {
    title: 'Project not found',
    description: 'This project does not exist.',
    component: null,
});
</script>

<template>
    <div class="container mx-auto pt-28 flex flex-col items-center">
        <h1 class="text-4xl font-bold text-zinc-50 mb-3 text-center">{{ project.title }}</h1>
        <p class="text-lg text-zinc-200 mb-6 text-center">
            {{ project.description }}
        </p>
        <div class="mb-6">
            <component :is="project.component" v-if="project.component" />
        </div>


        <RouterLink to="/projects" class="text-blue-400 hover:text-blue-600 transition-colors duration-300">
            ← Back to Projects
        </RouterLink>
    </div>
</template>