<template>
  <main class="container px-2">
    <router-view></router-view>
    <Sidebar />
    <Footer />
  </main>
</template>

<script>
import Footer from '@components/Footer.vue'
import Sidebar from '@components/side-bar.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Sidebar,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

/* html,
body,
#app {
  height: 100%;
} */

body {
  background: white;
}

#app {
  font-family: 'Poppins', sans-serif;
  color: #000;
}
</style>
