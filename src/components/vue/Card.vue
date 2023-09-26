<script setup>
const props = defineProps({
  tag: { type: String, default: 'Tag' }, 
	name: { type: String, default: 'Commerce' }, 
	address: { type: String, default: 'This is the address' },
	logo: { type: String, default: 'https://via.placeholder.com/192x192.png?text=Logo+Not+Available' },
	cta: { type: String, default: '/directorio' }
})
</script>

<template>
  <div class="w-[20rem] h-[40rem] m-8 p-8 bg-slate drop-shadow-lg text-center">
    <div class="flex flex-col justify-between h-full">
      <div>
        <img class="mx-auto mb-8 w-48" :src="props.logo" alt="Logo">
        <div class="uppercase font-bold tracking-widest rounded-full bg-accent text-white h-12 py-3">
          {{ props.tag }}
        </div>
        <p class="font-bold tracking-widest">{{ props.name }}</p>
        <p class="text-sm">{{ props.address }}</p>
      </div>
      <div>
        <a class="button rounded-lg" :href="props.cta">
          Ver más
        </a>
      </div>
    </div>
  </div>
</template>