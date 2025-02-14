<template>
    <nav
        class="bg-base text-text p-4 flex justify-center items-center fixed top-0 left-0 w-full space-x-4 font-semibold">
        <RouterLink to="/" activeClass="bg-surface"
            class="hover:bg-surface rounded px-4 py-2 transition-colors duration-300">Home</RouterLink>
        <RouterLink to="/projects" activeClass="bg-surface"
            class="hover:bg-surface rounded px-4 py-2 transition-colors duration-300">Projects</RouterLink>
    </nav>
</template>