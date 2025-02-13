<script setup>
defineProps({
    label: String,
    onClick: Function,
});
</script>

<template>
    <button @click="onClick"
        class="p-4 rounded-xl shadow-xs hover:shadow active:shadow-xl transition duration-300 active:scale-90 bg-surface text-subtle hover:text-text hover:bg-overlay">
        {{ label }}
    </button>
</template>
