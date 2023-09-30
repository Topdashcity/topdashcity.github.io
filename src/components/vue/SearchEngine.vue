<script setup>
import { ref, computed } from 'vue'
import Fuse from 'fuse.js'
import Card from './Card.vue';

const props = defineProps({
  searchIndex: Array
})

const searchInput = ref('')
const searchResults = ref(props.searchIndex)

const searchIsEmpty = computed(() => (searchResults.value.length === 0))
const inputIsEmpty = computed(() => searchInput.value === '')

const fuseOptions = {
  keys: ['data.name', 'data.address', 'data.tag', 'data.city'],
	includeMatches: true,
	minMatchCharLength: 3,
	threshold: 0.3,
}

const searchList = new Fuse(props.searchIndex, fuseOptions)

const search = () => {
  searchResults.value = (inputIsEmpty.value) 
    ? props.searchIndex
    : searchResults.value = searchList
        .search(searchInput.value)
        .map((searchItem) => (searchItem.item))
  searchInput.value = ''
}
</script>

<template>
  <section class="mx-auto py-6 w-2/3 flex justify-center place-items-center">
    <input v-model="searchInput" placeholder="🔍 Escribe tú búsqueda" @keyup.enter="search" class="w-2/3 h-[3rem] bg-slate pr-8" type="text" />
    <button class="-ml-4 button rounded-r-lg search" @click="search">Buscar</button>
  </section>
  <div v-if="searchIsEmpty">
    <h2 class="text-primary text-center">No se ha encontrado su búsqueda.</h2>
    <p class="text-center">Puedes intentar buscando en el <a class="text-primary font-bold" href="/directorio">directorio</a></p>
  </div>
  <section class="container custom-grid sm:grid-cols-4" v-else>
    <Card 
      v-for="commerce in searchResults"
      v-bind="commerce.data"
      :cta="`/directorio/${commerce.data.city}/${commerce.slug}`"
    />
  </section>
</template>