<template>
  <div id="app" class="relative">
    <video
      poster="poster.jpg"
      class="w-full h-full object-cover absolute"
      autoplay
      muted
      loop
      id="myVideo"
    >
      <source src="../public/huy-ngu.mp4" type="video/mp4" />
    </video>
    <div class="relative">
      <Header></Header>

      <suspense>
        <router-view />
      </suspense>
      <!-- Footer -->
      <Footer></Footer>
    </div>
    <!-- </div> -->

    <!-- Header -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import Footer from './components/shared/Footer.vue'
import Header from './components/shared/Header.vue'
import ThemeStore from '@/stores/ThemeStore'

export default defineComponent({
  name: 'App',

  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
    // eslint-disable-next-line vue/no-reserved-component-names
    Header
  },

  setup() {
    // Iniciamos el tema en la store
    const themeStore = ThemeStore()
    onBeforeMount(() => {
      themeStore.initTheme()
    })
  }
})
</script>

<style scoped>
#app {
  /* opacity: 0.2; */
}
/* Programamos las transiciones
https://vuejs.org/v2/guide/transitions.html */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
