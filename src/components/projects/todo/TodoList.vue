<script setup>
import { defineProps, defineEmits } from "vue";
import TodoItem from "./TodoItem.vue";
import { PlusIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["toggle-todo", "remove-todo", "focus-input"]);

const toggleTodo = (id) => {
  emit("toggle-todo", id);
};

const removeTodo = (id) => {
  emit("remove-todo", id);
};
</script>

<template>
  <Transition name="slide-up" mode="out-in">
    <ul v-if="todos && todos.length" class="flex flex-col space-y-2">
      <transition-group name="slide-up">
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @toggle-todo="toggleTodo"
          @remove-todo="removeTodo"
        />
      </transition-group>
    </ul>
    <div
      v-else
      @click="$emit('focus-input')"
      class="cursor-pointer bg-surface hover:bg-overlay rounded-xl p-4 transition duration-200 flex justify-start items-center"
    >
      <PlusIcon class="size-6 mt-0.5 mr-2" />
      <p>Add more tasks!</p>
    </div>
  </Transition>
</template>
