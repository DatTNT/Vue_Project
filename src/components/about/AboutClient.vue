<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-sans text-2xl font-semibold text-center sm:text-4xl text-primary-dark dark:text-primary-light"
    >
      Some companies I have worked with
    </p>
    <div class="grid grid-cols-2 gap-2 mt-10 sm:grid-cols-4 sm:mt-20">
      <div v-for="client in clients" :key="client.id">
        <img :src="client.img" :alt="client.name" class="clients__image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import data from '@/data/about/AboutClientData.json'

interface Client {
  id: number
  img: string
  name: string
}

export default defineComponent({
  name: 'AboutClients',
  data() {
    return {
      clients: data.client as Client[]
    }
  }
})
</script>

<style scoped>
.clients__image {
  @apply w-64 px-10 py-5 mb-8 border shadow-sm cursor-pointer border-ternary-light dark:border-ternary-dark rounded-xl;
}
</style>
