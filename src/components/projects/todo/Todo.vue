<script setup>
import { ref, computed } from 'vue'
import { CheckCircleIcon as IncompletedIcon, XMarkIcon, EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'
import { CheckCircleIcon as CompletedIcon } from '@heroicons/vue/24/solid'

let id = 0;

const newTodo = ref('');
const hideCompleted = ref(false);
const todos = ref([
    { id: id++, text: 'Task 1', completed: false },
    { id: id++, text: 'Task 2', completed: true },
    { id: id++, text: 'Task 3', completed: false },
]);

const filteredTodos = computed(() => {
    return hideCompleted.value
        ? todos.value.filter((todo) => !todo.completed)
        : todos.value;
})

function addTodo() {
    todos.value.push({
        id: id++,
        text: newTodo.value,
        completed: false,
    });
}

function removeTodo(id) {
    todos.value = todos.value.filter((todo) => todo.id !== id);
}
</script>

<template>
    <div class="flex justify-between items-center mb-6">
        <form @submit.prevent="addTodo">
            <input v-model="newTodo" required placeholder="Add a new task"
                class="border-b placeholder:italic border-subtle hover:bg-surface rounded-t-xl outline-none focus:bg-surface focus:border-gold transition duration-200 px-4 py-2 mr-2" />
            <button
                class="hover:bg-surface rounded-xl px-4 py-2 transition duration-200 text-subtle hover:text-text font-semibold">Add</button>
        </form>
        <button @click="hideCompleted = !hideCompleted"
            class="hover:bg-surface rounded-xl px-4 py-2 cursor-pointer transition duration-200 flex items-center space-x-2 text-subtle hover:text-text font-semibold">
            <Transition name="fade-scale" mode="out-in" class="inline-block mr-2">
                <EyeIcon v-if="!hideCompleted" class="size-6 mt-1" />
                <EyeSlashIcon v-else class="size-6 mt-1" />
            </Transition>
            {{ hideCompleted ? 'Show' : 'Hide' }}
            Completed
        </button>
    </div>
    <ul v-if="todos.length" class="flex flex-col space-y-2">
        <li v-for="todo in filteredTodos" :key="todo.id" @click="todo.completed = !todo.completed"
            class="group cursor-pointer bg-surface hover:bg-overlay rounded-xl p-4 transition duration-200 flex justify-between items-center">
            <div>
                <Transition name="fade-scale" mode="out-in" class="inline-block mr-2">
                    <IncompletedIcon v-if="!todo.completed" class="size-6 text-subtle cursor-pointer"
                        key="incompleted" />
                    <CompletedIcon v-else class="size-6 text-gold cursor-pointer" key="completed" />
                </Transition>
                <span :class="{ 'line-through text-subtle': todo.completed, 'cursor-pointer': true }"
                    class="transition duration-200 font-semibold">
                    {{ todo.text }}
                </span>
            </div>
            <XMarkIcon @click="removeTodo(todo.id)"
                class="inline-block size-6 text-subtle hover:text-gold cursor-pointer transition duration-200" />
        </li>
    </ul>
    <p v-else>Add more tasks!</p>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: transform 0.2s ease, opacity 0.2s ease;
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
</style>