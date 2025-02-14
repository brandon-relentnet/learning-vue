<script setup>
import { ref, onMounted, defineExpose } from "vue";

const localTodo = ref("");
const localDetails = ref("");
const taskTitleInput = ref(null);

const emit = defineEmits(["add-task"]);

const handleSubmit = () => {
  emit("add-task", { text: localTodo.value, details: localDetails.value });
  localTodo.value = "";
  localDetails.value = "";
};

defineExpose({
  focusInput: () => {
    taskTitleInput.value && taskTitleInput.value.focus();
  },
});

onMounted(() => {
  taskTitleInput.value && taskTitleInput.value.focus();
});
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="localTodo"
      ref="taskTitleInput"
      required
      placeholder="Add a new task"
      class="border-b placeholder:italic border-subtle hover:bg-surface rounded-t-xl outline-none focus:bg-surface focus:border-gold transition duration-200 px-4 py-2 mr-2"
    />
    <input
      v-model="localDetails"
      placeholder="Task details"
      class="border-b placeholder:italic border-subtle hover:bg-surface rounded-t-xl outline-none focus:bg-surface focus:border-gold transition duration-200 px-4 py-2 mr-2"
    />
    <button
      class="hover:bg-surface rounded-xl px-4 py-2 transition duration-200 text-subtle hover:text-text font-semibold"
    >
      Add
    </button>
  </form>
</template>
