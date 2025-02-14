<script setup>
import { ref, computed } from 'vue'
import { CheckCircleIcon as IncompletedIcon, XMarkIcon, EyeIcon, EyeSlashIcon, BackspaceIcon } from '@heroicons/vue/24/outline'
import { CheckCircleIcon as CompletedIcon, PlusIcon } from '@heroicons/vue/24/solid'
import { useStorage } from '@vueuse/core'

let id = useStorage('todo-id', 0);

const newTodo = ref('');
const todoDetails = ref('');
const hideCompleted = ref(false);
const taskTitleInput = ref(null);
const todos = useStorage('todos',
    [
        { id: id.value++, text: 'Task 1', completed: false },
        { id: id.value++, text: 'Task 2', completed: true },
        { id: id.value++, text: 'Task 3', completed: false },
    ]);

const filteredTodos = computed(() => {
    return hideCompleted.value
        ? todos.value.filter((todo) => !todo.completed)
        : todos.value;
})

function addTodo() {
    if (!todos.value.length) id.value = 0;
    todos.value.push({
        id: id.value++,
        text: newTodo.value,
        details: todoDetails.value,
        completed: false,
    });
}

function removeTodo(id) {
    todos.value = todos.value.filter((todo) => todo.id !== id);
}

const showConfirmModal = ref(false);

function clearAllTodos() {
    showConfirmModal.value = true;
}

function confirmClearAll() {
    todos.value = [];
    id.value = 0;
    showConfirmModal.value = false;
}

function cancelClearAll() {
    showConfirmModal.value = false;
}
</script>

<template>
    <div class="flex justify-between items-center mb-6">
        <form @submit.prevent="addTodo">
            <input v-model="newTodo" ref="taskTitleInput" required placeholder="Add a new task"
                class="border-b placeholder:italic border-subtle hover:bg-surface rounded-t-xl outline-none focus:bg-surface focus:border-gold transition duration-200 px-4 py-2 mr-2" />
            <input v-model="todoDetails" placeholder="Task details"
                class="border-b placeholder:italic border-subtle hover:bg-surface rounded-t-xl outline-none focus:bg-surface focus:border-gold transition duration-200 px-4 py-2 mr-2" />
            <button
                class="hover:bg-surface rounded-xl px-4 py-2 transition duration-200 text-subtle hover:text-text font-semibold">Add</button>
        </form>
        <button @click="hideCompleted = !hideCompleted"
            class="hover:bg-surface rounded-xl px-4 py-2 cursor-pointer transition duration-200 flex items-center space-x-2 text-subtle hover:text-text font-semibold">
            <Transition name="fade-scale" mode="out-in" class="inline-block mr-2">
                <EyeIcon v-if="!hideCompleted" class="size-6 mt-0.5" />
                <EyeSlashIcon v-else class="size-6 mt-0.5" />
            </Transition>
            {{ hideCompleted ? 'Show' : 'Hide' }}
            Completed
        </button>
    </div>
    <Transition name="add-more" mode="out-in">
        <ul v-if="todos.length" class="flex flex-col space-y-2">
            <transition-group name="task-animation">
                <li v-for="todo in filteredTodos" :key="todo.id" @click="todo.completed = !todo.completed"
                    class="group cursor-pointer bg-surface hover:bg-overlay rounded-xl p-4 transition duration-200 flex justify-between items-center">
                    <div class="flex items-center space-x-4 mr-2">
                        <Transition name="fade-scale" mode="out-in" class="mr-2 flex-none">
                            <IncompletedIcon v-if="!todo.completed" class="size-6 text-subtle cursor-pointer"
                                key="incompleted" />
                            <CompletedIcon v-else class="size-6 text-gold cursor-pointer" key="completed" />
                        </Transition>
                        <div class="flex flex-col">
                            <span :class="{ 'line-through text-subtle': todo.completed, 'cursor-pointer': true }"
                                class="transition duration-200 font-semibold mr-2 ">
                                {{ todo.text }}
                            </span>
                            <p :class="{ 'line-through': todo.completed, 'cursor-pointer': true }"
                                class="transition duration-200 italic font-serif text-subtle break-all">
                                {{ todo.details }}
                            </p>
                        </div>
                    </div>
                    <XMarkIcon @click="removeTodo(todo.id)"
                        class="size-6 flex-none text-subtle hover:text-gold cursor-pointer transition duration-200" />
                </li>
            </transition-group>
        </ul>
        <div v-else @click="taskTitleInput.focus()"
            class="cursor-pointer bg-surface hover:bg-overlay rounded-xl p-4 transition duration-200 flex justify-start items-center">
            <PlusIcon class="size-6 mt-0.5 mr-2" />
            <p>Add more tasks!</p>
        </div>
    </Transition>
    <button @click="clearAllTodos"
        class="mt-4 hover:bg-surface rounded-xl px-4 py-2 cursor-pointer transition duration-200 flex items-center space-x-2 text-subtle hover:text-text font-semibold">
        <BackspaceIcon class="size-6 mt-0.5" />
        <span>Clear All</span>
    </button>
    <Transition name="popup">
        <Teleport to="body">
            <div v-if="showConfirmModal" class="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-10">
                <div class="bg-surface rounded-xl shadow-lg p-6 text-center text-text">
                    <p class="text-lg font-semibold mb-4">Are you sure you want to clear all tasks?</p>
                    <div class="flex justify-center space-x-4 text-subtle">
                        <button @click="confirmClearAll"
                            class="px-4 py-2 bg-overlay hover:bg-gold hover:text-base font-semibold transition duration-200 rounded-xl active:scale-90">
                            Yes, Clear All
                        </button>
                        <button @click="cancelClearAll"
                            class="px-4 py-2 bg-overlay hover:bg-muted hover:text-text font-semibold rounded-xl transition duration-200 active:scale-90">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </Teleport>
    </Transition>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active,
.popup-enter-active,
.popup-leave-active,
.add-more-enter-active,
.add-more-leave-active,
.task-animation-enter-active,
.task-animation-leave-active {
    transition: all 0.2s ease-in-out;
}

.fade-scale-enter-from,
.fade-scale-leave-to,
.add-more-enter-from,
.add-more-leave-to {
    transform: scale(0);
    opacity: 0;
}

.fade-scale-enter-to,
.fade-scale-leave-from,
.add-more-enter-to,
.add-more-leave-from {
    transform: scale(1);
    opacity: 1;
}

.popup-enter-from,
.popup-leave-to,
.task-animation-enter-from,
.task-animation-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.popup-enter-to,
.popup-leave-from,
.task-animation-enter-to,
.task-animation-leave-from {
    transform: translateY(0);
    opacity: 1;
}
</style>