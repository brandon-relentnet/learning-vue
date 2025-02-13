<script setup>
defineProps({
    label: String,
    onClick: Function,
    bgColor: String
});
</script>

<template>
    <button @click="onClick"
        class="p-4 text-slate-950 rounded shadow-md hover:shadow-xl active:shadow-3xl transition duration-300 active:scale-90"
        :class="[bgColor, 'hover:' + bgColor.replace('400', '500'), 'active:' + bgColor.replace('400', '600')]">
        {{ label }}
    </button>
</template>
