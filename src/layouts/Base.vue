<!-- src/layouts/BaseLayout.vue -->
<template>

    <!-- Main content area -->
    <main class="bg-[#F7FAFC] w-screen h-screen">
      <div class="pl-7 pr-7 pt-1"> 
        <slot />
      </div>
    </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>
