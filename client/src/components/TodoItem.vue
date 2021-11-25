<script>
import { useStore } from 'vuex'

export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    // vuex store access
    const store = useStore()
    const addTodo = (todo) => store.dispatch('addTodo', todo)
    const toggleTodo = (todo) => store.dispatch('toggleTodo', todo)
    const editTodo = (todo) => store.dispatch('editTodo', todo)
    const removeTodo = (todo) => store.dispatch('removeTodo', todo)

    // methods
    function doneEdit(e) {
      const value = e.target.value.trim()
      const todo = props.todo
      if (!value) {
        removeTodo(todo)
      } else {
        editTodo({
          todo,
          value,
        })
      }
    }

    function cancelEdit(e) {
      e.target.blur()
    }

    // expose to template
    return {
      toggleTodo,
      removeTodo,
      doneEdit,
      cancelEdit,
      addTodo,
    }
  },
}
</script>

<template>
  <li tabindex="0">
    <!-- <input
      class="form-check-input me-3"
      type="checkbox"
      :checked="todo.done"
      @change="toggleTodo(todo)"
    /> -->
    <input
      tabindex="-1"
      class="form-control form-control-plaintext p-1"
      :class="{ 'text-primary': todo.done }"
      type="text"
      :value="todo.text"
      @keyup.enter="addTodo"
      @keyup.esc="cancelEdit"
      @blur="doneEdit"
    />
    <!-- <button
      type="button"
      class="btn-close btn-sm ms-2"
      @click="removeTodo(todo)"
    ></button> -->
  </li>
</template>

<style lang="scss" module>
@import '~bootstrap/scss/bootstrap';

li {
  @extend .d-flex;
  @extend .justify-content-between;
  @extend .align-items-center;
  background-color: transparent;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 24px;
  font-family: 'Source Sans Pro', sans-serif;
}

li:focus,
li:focus-visible,
li:focus-within,
li:hover,
li:active {
  background-color: red;
  outline-color: transparent;
  border-color: transparent;
  color: white;
  cursor: pointer;

  input {
    background-color: transparent;
    outline-color: transparent;
    border-color: transparent;
    &:hover,
    &:active,
    &:focus {
      background-color: transparent;
      outline-color: transparent;
      border-color: transparent;
      cursor: pointer;
    }
  }
}
</style>
