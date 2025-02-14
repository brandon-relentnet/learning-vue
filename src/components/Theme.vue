<script setup>
import { useColorMode } from '@vueuse/core'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'

const mode = useColorMode({
    initialValue: 'dark',
    storageKey: 'theme',
    attribute: 'data-theme',
});

function toggleTheme() {
    mode.value = mode.value === 'light' ? 'dark' : 'light';
}
</script>

<template>
    <div class="flex justify-end">
        <button @click="toggleTheme"
            class="px-4 py-2 rounded-xl cursor-pointer text-subtle hover:text-text hover:bg-surface transition duration-200">
            <transition name="scale" mode="out-in">
                <MoonIcon v-if="mode === 'dark'" class="size-6" key="moon" />
                <SunIcon v-else key="sun" class="size-6" />
            </transition>
        </button>
    </div>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
    transition: transform 0.2s ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
    transform: scale(0);
}

.scale-enter-to,
.scale-leave-from {
    transform: scale(1);
}
</style>