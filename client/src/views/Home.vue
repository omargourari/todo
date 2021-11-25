<script>
import { mapActions } from 'vuex'
import TodoItem from '@components/TodoItem.vue'
import AddTaskInput from '@components/AddTaskInput.vue'

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.done),
  completed: (todos) => todos.filter((todo) => todo.done),
}

export default {
  name: 'Home',
  components: {
    AddTaskInput,
    TodoItem,
  },
  props: {
    filter: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      visibility: this.filter,
      filters: filters,
      selected: null,
    }
  },
  computed: {
    addTodoVisible() {
      return this.$store.state.addTodoVisible
    },
    todos() {
      return this.$store.state.todos
    },
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
  },
  watch: {
    count() {
      if (this.$store.state.addTodoVisible) {
        this.$refs.addTaskInput.$el.focus()
      }
    },
  },
  methods: {
    ...mapActions(['toggleAll', 'clearCompleted']),
    addTodo(e) {
      const text = e.target.value.trim()
      if (text) {
        this.$store.dispatch('addTodo', text)
        e.target.value = ''
      }
    },
    pluralize(n, w) {
      return n === 1 ? w : w + 's'
    },
    capitalize(s) {
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
    cleanAddTaskInput(text) {
      this.newTask = ''
      this.$store.dispatch('toggleAddTodoInput')
    },
  },
}
</script>

<template>
  <main>
    <AddTaskInput />
    <ul v-show="todos.length" class="list-group mb-3">
      <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
    </ul>
  </main>
</template>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';

main {
  padding: 60px 0 0 0;
  @extend .col-lg-4;
  @extend .offset-lg-4;
  @extend .col-md-4;
  @extend .col-sm-8;
  @extend .col-10;
}
</style>
