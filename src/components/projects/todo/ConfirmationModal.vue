<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["confirm", "cancel"]);

const confirm = () => {
  emit("confirm");
};

const cancel = () => {
  emit("cancel");
};
</script>

<template>
  <Transition name="slide-up">
    <Teleport to="body">
      <div
        v-if="visible"
        class="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-10"
      >
        <div class="bg-surface rounded-xl shadow-lg p-6 text-center text-text">
          <p class="text-lg font-semibold mb-4">
            Are you sure you want to clear all tasks?
          </p>
          <div class="flex justify-center space-x-4 text-subtle">
            <button
              @click="confirm"
              class="px-4 py-2 bg-overlay hover:bg-gold hover:text-base font-semibold transition duration-200 rounded-xl active:scale-90"
            >
              Yes, Clear All
            </button>
            <button
              @click="cancel"
              class="px-4 py-2 bg-overlay hover:bg-muted hover:text-text font-semibold rounded-xl transition duration-200 active:scale-90"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>
