<template>
  <div class="mt-10 shadow-sm sm:mt-20 bg-primary-light dark:bg-ternary-dark">
    <div class="container block py-20 mx-auto sm:flex sm:justify-between sm:items-center">
      <div class="mb-20 sm:mb-0">
        <p class="counter__parrafo">10+</p>
        <span class="counter__span">Years of experience</span>
      </div>
      <div class="mb-20 sm:mb-0">
        <p class="counter__parrafo">20k+</p>
        <span class="counter__span">Estrellas en GitHub</span>
      </div>
      <div class="mb-20 sm:mb-0">
        <p class="counter__parrafo">92%</p>
        <span class="counter__span">Positive comments</span>
      </div>
      <div>
        <p class="counter__parrafo">100+</p>
        <span class="counter__span">Project completed</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutCounter'
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
