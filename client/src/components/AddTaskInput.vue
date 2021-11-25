<template>
  <input
    v-show="addTodoVisible"
    ref="addTaskInput"
    v-model="newTask"
    class="form-control form-control-lg mb-3"
    type="text"
    autofocus
    autocomplete="off"
    @keyup.enter="addTodo"
    @keyup.esc="cleanAddTaskInput"
  />
</template>

<script>
export default {
  name: 'AddTaskInput',
  data() {
    return {
      newTask: '',
    }
  },
  computed: {
    addTodoVisible() {
      return this.$store.state.addTodoVisible
    },
  },
  // updated() {
  //   this.$refs.AddTaskInput.focus()
  // },
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
