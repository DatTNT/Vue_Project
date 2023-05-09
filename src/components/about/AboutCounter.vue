<template>
  <div class="mt-10 shadow-sm sm:mt-20 bg-primary-light dark:bg-ternary-dark">
    <div class="container block py-20 mx-auto sm:flex sm:justify-between sm:items-center">
      <div v-for="count in counters" :key="count.id" class="mb-20 sm:mb-0">
        <div v-if="count.name === 'Years of experience'">
          <p class="counter__parrafo">{{ counts[0].count }}years</p>
        </div>
        <div v-else-if="count.name === 'Estrellas en GitHub'">
          <p class="counter__parrafo">{{ counts[1].count }}+</p>
        </div>
        <div v-else-if="count.name === 'Positive comments'">
          <p class="counter__parrafo">{{ counts[2].count }}%</p>
        </div>
        <div v-else>
          <p class="counter__parrafo">{{ counts[3].count }}+</p>
        </div>
        <span class="counter__span">{{ count.name }}</span>
        <!-- <span class="counter__span">{{ count.name }}</span> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import data from '@/data/about/AboutCounterData.json'

interface Counter {
  id: number
  number: number
  name: string
}

export default defineComponent({
  name: 'AboutCounter',
  data() {
    return {
      counters: data.counters as Counter[],
      counts: [
        { count: 0, limit: 50, speed: 100 },
        { count: 0, limit: 100, speed: 100 },
        { count: 0, limit: 150, speed: 100 },
        { count: 0, limit: 200, speed: 100 }
      ]
    }
  },
  mounted() {
    this.counts.forEach((counter, index) => {
      const intervalId = setInterval(() => {
        counter.count++
        if (counter.count === counter.limit) {
          clearInterval(intervalId)
        }
      }, counter.speed)
    })
  }
})
</script>

<style scoped>
.counter__parrafo {
  @apply mb-2 text-4xl font-bold text-secondary-dark dark:text-secondary-light;
}

.counter__span {
  @apply text-ternary-dark dark:text-ternary-light;
}
</style>
