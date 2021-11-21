<template>
  <div>
    <div class="inputField"></div>
    <input
      class="form-control form-control-lg mb-3"
      type="text"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo"
    />
    <ul v-show="todos.length" class="list-group mb-3">
      <li
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <div>
          <input
            class="form-check-input me-3"
            type="checkbox"
            :checked="allChecked"
            @change="toggleAll(!allChecked)"
          />
          <span class="text-secondary px-1">
            {{ remaining }} {{ pluralize(remaining, 'item') }} left
          </span>
        </div>
        <nav class="nav">
          <ul class="nav">
            <li v-for="(val, key) in filters" :key="key" class="nav-item">
              <a
                class="nav-link px-2 py-1"
                :href="'#/' + key"
                :class="{ 'link-secondary': visibility !== key }"
                @click="visibility = key"
                >{{ capitalize(key) }}
              </a>
            </li>
          </ul>
        </nav>
      </li>
      <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
    </ul>
    <!-- <button
      v-show="todos.length > remaining"
      type="button"
      class="btn btn-primary w-100"
      @click="clearCompleted"
    >
      Clear completed
    </button> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TodoItem from '@components/TodoItem.vue'

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.done),
  completed: (todos) => todos.filter((todo) => todo.done),
}

export default {
  name: 'Home',
  components: {
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
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos
    },
    allChecked() {
      return this.todos.every((todo) => todo.done)
    },
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
    remaining() {
      return this.todos.filter((todo) => !todo.done).length
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
  },
}
</script>

<style lang="scss">
.form-check-input {
  cursor: pointer;
}
</style>
