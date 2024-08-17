<script setup>
import NavBar from './NavBar.vue'
</script>
<template>
  <div class="w-full relative min-h-screen">
    <div class="max-w-7xl mx-auto">
      <NavBar />
      <slot></slot>
    </div>
  </div>
</template>