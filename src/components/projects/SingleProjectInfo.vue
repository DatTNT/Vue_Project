<template>
  <!-- Project information -->
  <div class="block gap-0 sm:flex sm:gap-10 mt-14">
    <div class="w-full text-left sm:w-1/3">
      <div class="mb-7">
        <p class="mb-2 text-2xl font-semibold text-secondary-dark dark:text-secondary-light">
          Cliente
        </p>
        <ul class="leading-loose">
          <li class="text-ternary-dark dark:text-ternary-light">
            <span>Nombre:</span>
            Pepito de los Palotes, SA
          </li>
          <li class="text-ternary-dark dark:text-ternary-light">
            <span>Servicio: </span>
            UI Design & Frontend Development
          </li>
          <li class="text-ternary-dark dark:text-ternary-light">
            <span>Website: </span>
            <a href="https://github.com/DatTNT" target="_blank">https://github.com/DatTNT</a>
          </li>
          <li class="text-ternary-dark dark:text-ternary-light">
            <span>Teléfono: </span>
            +34 555 666 777
          </li>
        </ul>
      </div>
      <div class="mb-7">
        <p class="mb-2 text-2xl font-semibold text-ternary-dark dark:text-ternary-light">
          Objetivo
        </p>
        <p class="text-primary-dark dark:text-ternary-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod
          in esse, mollitia molestias incidunt quas ipsa accusamus veniam, quis odit cumque vero
          voluptate, reiciendis amet non!
        </p>
      </div>
      <div class="mb-7">
        <p class="mb-2 text-2xl font-semibold text-ternary-dark dark:text-ternary-light">
          Herramientas & Technologías
        </p>
        <p class="text-primary-dark dark:text-ternary-light">
          HTML, CSS, JavaScript, Vue.js, TailwindCSS, Figma
        </p>
      </div>
      <div>
        <p class="mb-2 text-2xl font-semibold text-ternary-dark dark:text-ternary-light">
          Comparte
        </p>
        <div class="flex items-center gap-3 mt-5">
          <div
            v-for="single in singleProject"
            :key="single.id"
            class="single-project-info__social-links"
          >
            <a :href="single.link" target="__blank"><Icon :icon="single.icon" class="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-10 text-left sm:w-2/3 sm:mt-0">
      <p class="text-2xl font-bold text-primary-dark dark:text-primary-light mb-7">
        Acciones realizadas
      </p>
      <p class="mb-5 text-lg text-ternary-dark dark:text-ternary-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa, ullam modi esse ea
        molestiae, non quidem expedita perspiciatis nihil eligendi maxime eum eos exercitationem.
        Aliquam labore amet odio quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Velit, consectetur? Soluta, minus, quia tenetur distinctio asperiores aperiam impedit
        provident at autem omnis odio, atque dicta minima alias voluptatum ullam animi.
      </p>
      <p class="mb-5 text-lg text-ternary-dark dark:text-ternary-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa, ullam modi esse ea
        molestiae, non quidem expedita perspiciatis nihil eligendi maxime eum eos exercitationem.
        Aliquam labore amet odio quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Velit, consectetur? Soluta, minus, quia tenetur distinctio asperiores aperiam impedit
        provident at autem omnis odio, atque dicta minima alias voluptatum ullam animi.
      </p>
      <p class="mb-5 text-lg text-ternary-dark dark:text-ternary-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa, ullam modi esse ea
        molestiae, non quidem expedita perspiciatis nihil eligendi maxime eum eos exercitationem.
        Aliquam labore amet odio quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Velit, consectetur? Soluta, minus, quia tenetur distinctio asperiores aperiam impedit
        provident at autem omnis odio, atque dicta minima alias voluptatum ullam animi.
      </p>
      <p class="mb-5 text-lg text-ternary-dark dark:text-ternary-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa, ullam modi esse ea
        molestiae, non quidem expedita perspiciatis nihil eligendi maxime eum eos exercitationem.
        Aliquam labore amet odio quisquam?
      </p>
    </div>
  </div>
  <!-- Project information -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import data from '@/data/projects/SingleProjectData.json'

interface singlePro {
  id: number
  link: string
  icon: string
}

export default defineComponent({
  name: 'SingleProjectInfo',
  data() {
    return {
      singleProject: data.single as singlePro[]
    }
  },

  components: {
    Icon
  }
})
</script>

<style scoped>
.single-project-info__social-links {
  @apply h-9 p-2 text-gray-400 rounded-lg shadow-sm bg-ternary-light dark:bg-ternary-dark hover:text-primary-dark dark:hover:text-primary-light;
}
</style>
