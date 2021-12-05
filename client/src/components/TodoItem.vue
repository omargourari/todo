<script>
import { useStore } from 'vuex'
import { DateTime } from 'luxon'

const units = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second']

const timeAgo = (date) => {
  const dateTime = DateTime.fromISO(date)
  const diff = dateTime.diffNow().shiftTo(...units)
  const unit = units.find((unit) => diff.get(unit) !== 0) || 'second'
  const relativeFormatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
  })
  return relativeFormatter.format(Math.trunc(diff.as(unit)), unit)
}

export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore()
    const editTodo = (todo) => store.dispatch('editTodo', todo)
    const removeTodo = (todo) => store.dispatch('removeTodo', todo)
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

    return {
      removeTodo,
      doneEdit,
    }
  },
  computed: {
    timeago() {
      return timeAgo(this.todo.createdAt)
    },
  },
}
</script>

<template>
  <li>
    <div class="todo">
      <input type="text" :value="todo.title" />
      <span class="timeago">{{ timeago }}</span>
    </div>
    <button type="button" class="btn-close" @click="removeTodo(todo)"></button>
  </li>
</template>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap';

li {
  background-color: transparent;
  padding: 4px 0;
  font-size: 24px;
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  flex-flow: row nowrap;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: rgba(10, 10, 10, 0.1);
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
}

.todo {
  display: flex;
  flex-flow: column nowrap;
  margin: auto auto auto 0;
  width: 100%;
  input {
    background-color: transparent;
    outline-color: transparent;
    border-color: transparent;
    padding: 0;
    border: 0;
    &:hover,
    &:active,
    &:focus {
      background-color: transparent;
      outline-color: transparent;
      border-color: transparent;
      cursor: pointer;
    }
  }
  .timeago {
    font-size: 10px;
    opacity: 0.4;
  }
}

button {
  margin: auto 8px auto auto;
  font-size: 16px;
}
</style>
