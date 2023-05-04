<template>
  <div class="container mx-auto">
    <!-- Projects -->
    <ProjectsGrid />
    <!-- Projects -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectsGrid from '@/components/projects/ProjectsGrid.vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Projects',

  components: {
    ProjectsGrid
  }
})
</script>

<style scoped></style>
