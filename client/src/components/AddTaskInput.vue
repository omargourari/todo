<script>
export default {
  name: 'AddTaskInput',
  data() {
    return {
      todo: {
        id: null,
        title: '',
        createdAt: null,
        updatedAt: null,
      },
    }
  },
  computed: {
    addTodoVisible() {
      return this.$store.state.addTodoVisible
    },
  },
  updated() {
    this.$nextTick(() => {
      this.$refs.addTaskInput.focus()
    })
  },
  methods: {
    addTodo() {
      if (this.$el.value) {
        this.$store.dispatch('addTodo', this.todo)
        this.todo.title = ''
      }
    },
    cleanAddTaskInput() {
      this.$refs.addTaskInput.value = ''
      this.$refs.addTaskInput.blur()
      this.$store.dispatch('toggleAddTodoInput')
    },
  },
}
</script>

<template>
  <input
    v-show="addTodoVisible"
    ref="addTaskInput"
    v-model="todo.title"
    class="form-control form-control-lg mb-3"
    type="text"
    autofocus
    autocomplete="off"
    @keyup.enter="addTodo"
    @keyup.esc="cleanAddTaskInput"
  />
</template>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
