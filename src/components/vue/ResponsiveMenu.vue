<script setup>
import {ref, onMounted} from 'vue'

const props = defineProps({
  menuLinks: Array
})

const expanded = ref(false)

onMounted(() => {
  expanded.value = false
})
</script>

<template>
  <ul class="sm:flex sm:items-center sm:p-4 hidden w-auto">
    <li v-for="link in props.menuLinks" class="uppercase text-background font-bold hover:underline hover:decoration-2 tracking-wide text-sm mx-4">
      <a :href="link[1]">{{ link[0] }}</a>
    </li>
  </ul>
  <div class="mt-2 relative inline-block text-left sm:hidden">
    <div>
      <button type="button" class="button inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" @click="expanded = !expanded">
        Menu
        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
      <div :class="['absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none', {'hidden': !expanded}]" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">
          <a 
            v-for="link, i in menuLinks" 
            :href="link[1]" 
            class="text-background block px-4 py-2 uppercase text-background font-bold tracking-wide" 
            role="menuitem" 
            tabindex="-1" 
            :id="`menu-item-${i}`"
          > 
            {{ link[0] }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>