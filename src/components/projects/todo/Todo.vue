<script setup>
import { ref, computed } from "vue";
import { useStorage } from "@vueuse/core";
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";
import ConfirmationModal from "./ConfirmationModal.vue";
import {
  EyeIcon,
  EyeSlashIcon,
  BackspaceIcon,
} from "@heroicons/vue/24/outline";

let id = useStorage("todo-id", 0);
const hideCompleted = ref(false);
const showConfirmModal = ref(false);
const todos = useStorage("todos", [
  { id: id.value++, text: "Task 1", completed: false },
  { id: id.value++, text: "Task 2", completed: true },
  { id: id.value++, text: "Task 3", completed: false },
]);

const filteredTodos = computed(() =>
  hideCompleted.value
    ? todos.value.filter((todo) => !todo.completed)
    : todos.value
);

const addTodo = ({ text, details }) => {
  if (!todos.value.length) id.value = 0;
  todos.value.push({
    id: id.value++,
    text,
    details,
    completed: false,
  });
};

const toggleTodo = (id) => {
  const todo = todos.value.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

const removeTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};

const clearAllTodos = () => {
  showConfirmModal.value = true;
};

const confirmClearAll = () => {
  todos.value = [];
  id.value = 0;
  showConfirmModal.value = false;
};

const cancelClearAll = () => {
  showConfirmModal.value = false;
};

const toggleHideCompleted = () => {
  hideCompleted.value = !hideCompleted.value;
};

const todoInput = ref(null);
const focusTodoInput = () => {
  todoInput.value && todoInput.value.focusInput();
};
</script>

<template>
  <div class="flex justify-between items-center mb-6">
    <TodoInput @add-task="addTodo" ref="todoInput" />
    <button
      @click="toggleHideCompleted"
      class="hover:bg-surface rounded-xl px-4 py-2 cursor-pointer transition duration-200 flex items-center space-x-2 text-subtle hover:text-text font-semibold"
    >
      <Transition name="fade-scale" mode="out-in" class="inline-block mr-2">
        <EyeIcon v-if="!hideCompleted" class="size-6 mt-0.5" />
        <EyeSlashIcon v-else class="size-6 mt-0.5" />
      </Transition>
      {{ hideCompleted ? "Show" : "Hide" }} Completed
    </button>
  </div>
  <TodoList
    :todos="filteredTodos"
    @toggle-todo="toggleTodo"
    @remove-todo="removeTodo"
    @focus-input="focusTodoInput"
  />
  <button
    @click="clearAllTodos"
    class="mt-4 hover:bg-surface rounded-xl px-4 py-2 cursor-pointer transition duration-200 flex items-center space-x-2 text-subtle hover:text-text font-semibold"
  >
    <BackspaceIcon class="size-6 mt-0.5" />
    <span>Clear All</span>
  </button>
  <ConfirmationModal
    :visible="showConfirmModal"
    @confirm="confirmClearAll"
    @cancel="cancelClearAll"
  />
</template>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active,
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s ease-in-out;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  transform: scale(0);
  opacity: 0;
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  transform: scale(1);
  opacity: 1;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
