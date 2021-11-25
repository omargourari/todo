<script>
export default {
  name: 'Sidebar',
  data() {
    return {}
  },
  computed: {
    remaining() {
      return this.todos.filter((todo) => !todo.done).length
    },
    todos() {
      return this.$store.state.todos
    },
  },
  mounted() {
    this.$mousetrap.bind('shift+enter', this.showAddTaskInput)
  },
  methods: {
    showAddTaskInput() {
      this.$store.dispatch('toggleAddTodoInput')
    },
  },
}
</script>

<template>
  <aside>
    <span :class="$style.sidebarAddTask" @click="showAddTaskInput">
      <font-awesome-icon icon="plus" />
    </span>
    <span :class="$style.sidebarTotalTodos">
      {{ remaining }}
    </span>
  </aside>
</template>

<style lang="scss" module>
aside {
  position: absolute;
  right: 0;
  top: 0;
  padding: 24px 24px 0 0;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.sidebarTotalTodos {
  font-size: 32px;
  font-weight: 700;
}

.sidebarAddTask {
  border: 4px solid black;
  color: black;
  border-radius: 50%;
  font-size: 32px;
  font-weight: 900;
  padding: 0 11px;
  background-color: transparent;
}

.sidebarAddTask:hover,
.sidebarAddTask:active,
.sidebarAddTask:focus {
  border: 4px solid red;
  color: red;
  padding: 0 11px;
  font-size: 32px;
  background-color: transparent;
  border-radius: 50%;
  font-weight: 900;
  cursor: pointer;
}

.sidebar {
  text-align: center;
  list-style-type: none;

  > li {
    display: inline-block;
    font-size: 24px;
  }
}
</style>
