<script setup>
import { Search } from 'lucide-vue-next'
</script>

<template>
  <div class="relative">
    <ul class="bg-gray-700 rounded-full flex items-center shadow-sm">
      <router-link to="/movies">
        <li 
          class="py-2 px-4 text-sm text-gray-200 hover:bg-white/20 cursor-pointer hover:rounded-full"
        >
          Filmes
        </li>
      </router-link>
      <router-link to="/series">
        <li 
          class="py-2 px-4 text-sm text-gray-200 hover:bg-white/20 cursor-pointer hover:rounded-full"
        >
          Séries
        </li>
      </router-link>
      <router-link to="/people">
        <li class="py-2 px-4 text-sm text-gray-200 hover:bg-white/20 cursor-pointer hover:rounded-full">Artistas</li>
      </router-link>
      <li class="py-2 px-4 cursor-pointer hover:bg-white/20 hover:rounded-full">
        <Search class="size-5 text-gray-200"/>
      </li>
    </ul>
  </div>
</template>