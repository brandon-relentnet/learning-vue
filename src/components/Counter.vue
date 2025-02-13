<script setup>
import { ref } from 'vue'
import CounterButtons from './CounterButtons.vue';

const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
const reset = () => count.value = 0;
</script>

<template>
    <div class="bg-zinc-800 p-4 rounded shadow-md text-center">
        <div class="flex justify-center mb-3 space-x-2 text-zinc-50 text-2xl">
            <h2>Count:</h2>
            <transition name="fade" mode="out-in">
                <h2 :key="count" class="font-bold">{{ count }}</h2>
            </transition>
        </div>
        <div class="flex space-x-4">
            <CounterButtons label="Decrement" :onClick="decrement" bgColor="bg-red-400" />
            <CounterButtons label="Reset" :onClick="reset" bgColor="bg-yellow-400" />
            <CounterButtons label="Increment" :onClick="increment" bgColor="bg-green-400" />
        </div>
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>