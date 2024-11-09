<!-- src/App.vue -->
<template>
  
  <BaseLayout>
    <RouterView />
  </BaseLayout>
</template>

<script setup>
import BaseLayout from './layouts/Base.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>
