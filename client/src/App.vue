<script>
import Footer from '@components/Footer.vue'
import Header from '@components/Header.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
  created: function () {
    this.$store.dispatch('getAllTodos')
  },
  mounted: function () {
    this.$mousetrap.bind('enter', this.togglAddTaskInput)
  },
  methods: {
    togglAddTaskInput() {
      this.$store.dispatch('toggleAddTodoInput')
    },
  },
}
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
@import '~bootstrap/scss/bootstrap';

body {
  background: white;
  overflow-x: hidden;
  font-family: 'Source Sans Pro', sans-serif;
  color: #000;
}
</style>
