<script setup>
import { defineProps, defineEmits } from "vue";
import {
  CheckCircleIcon as IncompletedIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { CheckCircleIcon as CompletedIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["toggle-todo", "remove-todo"]);

const toggleCompleted = () => {
  emit("toggle-todo", props.todo.id);
};

const removeTodo = () => {
  emit("remove-todo", props.todo.id);
};
</script>

<template>
  <li
    class="group cursor-pointer bg-surface hover:bg-overlay rounded-xl p-4 transition duration-200 flex justify-between items-center"
    @click="toggleCompleted"
  >
    <div class="flex items-center space-x-4 mr-2">
      <Transition name="fade-scale" mode="out-in" class="mr-2 flex-none">
        <IncompletedIcon
          v-if="!todo.completed"
          class="size-6 text-subtle cursor-pointer"
          key="incompleted"
        />
        <CompletedIcon
          v-else
          class="size-6 text-gold cursor-pointer"
          key="completed"
        />
      </Transition>
      <div class="flex flex-col">
        <span
          :class="{
            'line-through text-subtle': todo.completed,
            'cursor-pointer': true,
          }"
          class="transition duration-200 font-semibold mr-2"
        >
          {{ todo.text }}
        </span>
        <p
          :class="{ 'line-through': todo.completed, 'cursor-pointer': true }"
          class="transition duration-200 italic font-serif text-subtle break-all"
        >
          {{ todo.details }}
        </p>
      </div>
    </div>
    <XMarkIcon
      @click.stop="removeTodo"
      class="size-6 flex-none text-subtle hover:text-gold cursor-pointer transition duration-200"
    />
  </li>
</template>
