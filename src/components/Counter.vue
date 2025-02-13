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
        <h2 class="text-zinc-50 mb-3 text-2xl font-bold">Count: {{ count }}</h2>
        <div class="flex space-x-4">
            <CounterButtons label="Decrement" :onClick="decrement" bgColor="bg-red-400" />
            <CounterButtons label="Reset" :onClick="reset" bgColor="bg-yellow-400" />
            <CounterButtons label="Increment" :onClick="increment" bgColor="bg-green-400" />
        </div>
    </div>
</template>