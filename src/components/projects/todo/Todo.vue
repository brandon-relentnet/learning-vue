<script setup>
import { ref, computed } from 'vue'

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
    <form @submit.prevent="addTodo">
        <input v-model="newTodo" required placeholder="Add a new task" />
        <button>Add</button>
    </form>
    <ul v-if="todos.length">
        <li v-for="todo in filteredTodos" :key="todo.id">
            <input type="checkbox" v-model="todo.completed" />
            <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
            <button @click="removeTodo(todo.id)">Remove</button>
        </li>
    </ul>
    <p v-else>Add more tasks!</p>
    <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show Completed' : 'Hide Completed' }}
    </button>
</template>