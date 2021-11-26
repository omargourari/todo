import { createStore } from 'vuex'
import axios from 'axios'
// const stage = process.env.NODE_ENV || 'development'

const STORAGE_KEY = 'vue-todo-pwa'

const defaultTodos = [
  { id: 1, text: 'Learn JavaScript', done: true },
  { id: 2, text: 'Learn Vue 3', done: true },
  { id: 3, text: 'Learn Bootstrap 5', done: false },
  { id: 4, text: 'Build something awesome!', done: false },
]

const state = {
  todos: defaultTodos,
  addTodoVisible: false,
}

const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo)
  },

  removeTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  editTodo(state, { todo, text = todo.text, done = todo.done }) {
    const index = state.todos.indexOf(todo)

    state.todos.splice(index, 1, {
      ...todo,
      text,
      done,
    })
  },
}

const actions = {
  getAllTodos({ commit }) {
    commit('getAllTodos')
  },

  addTodo: ({ commit }, id) => {
    axios
      .get(`http://localhost:7070/api/todo/${id}`)
      .then((response) => commit('addTodo', response.data))
      .catch((e) => {
        console.log(e)
      })
  },

  removeTodo({ commit }, todo) {
    commit('removeTodo', todo)
  },

  toggleTodo({ commit }, todo) {
    commit('editTodo', { todo, done: !todo.done })
  },

  editTodo({ commit }, { todo, value }) {
    commit('editTodo', { todo, text: value })
  },

  clearCompleted({ state, commit }) {
    state.todos
      .filter((todo) => todo.done)
      .forEach((todo) => {
        commit('removeTodo', todo)
      })
  },

  toggleAddTodoInput({ state }) {
    state.addTodoVisible = !state.addTodoVisible
  },
}

// plugins
const plugins = [
  (store) => {
    store.subscribe((mutation, { todos }) => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    })
  },
]

export default createStore({
  state,
  mutations,
  actions,
  plugins,
})
