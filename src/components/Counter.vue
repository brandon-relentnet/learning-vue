<script setup>
import { ref } from 'vue'

const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
</script>

<template>
    <div class="bg-zinc-800 p-4 rounded shadow-md text-center">
        <h2 class="text-zinc-50 mb-3 text-2xl font-bold">Count: {{ count }}</h2>
        <div class="flex space-x-4">
            <button @click="decrement"
                class="p-4 bg-red-400 text-slate-950 rounded shadow-md hover:shadow-xl hover:bg-red-500 active:bg-red-600 active:shadow-3xl transition duration-300">
                Decrement
            </button>
            <button @click="increment"
                class="p-4 bg-green-400 text-slate-950 rounded shadow-md hover:shadow-xl hover:bg-green-500 active:bg-green-600 active:shadow-3xl transition duration-300">
                Increment
            </button>
        </div>
    </div>
</template>