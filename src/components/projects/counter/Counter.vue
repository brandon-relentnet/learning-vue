<script setup>
import { ref } from 'vue'
import CounterButtons from './CounterButtons.vue';

const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
const reset = () => count.value = 0;
</script>

<template>
    <div class="border border-subtle p-8 rounded-xl shadow-md text-center inline-block">
        <div class="flex justify-center mb-3 space-x-2 text-text text-2xl">
            <h2>Count:</h2>
            <transition name="slide" mode="out-in">
                <h2 :key="count" class="font-bold">{{ count }}</h2>
            </transition>
        </div>
        <div class="flex space-x-4">
            <CounterButtons label="Decrement" :onClick="decrement" />
            <CounterButtons label="Reset" :onClick="reset" />
            <CounterButtons label="Increment" :onClick="increment" />
        </div>
    </div>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
    transition: transform 0.1s ease, opacity 0.1s ease;
}

.slide-enter-from {
    transform: translateY(-10px);
    opacity: 0;
}

.slide-leave-to {
    transform: translateY(10px);
    opacity: 0;
}
</style>