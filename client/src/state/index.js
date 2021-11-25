import { createStore } from 'vuex'

const STORAGE_KEY = 'todo'

// initial state
const state = {
  todos: {},
  addTodoVisible: false,
}

// mutations
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

// actions
const actions = {
  addTodo({ commit }, text) {
    commit('addTodo', {
      id: Date.now(),
      text,
      done: false,
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

  toggleAll({ state, commit }, done) {
    state.todos.forEach((todo) => {
      commit('editTodo', { todo, done })
    })
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
