import { createStore } from 'vuex'
import axios from 'axios'
const stage = 'development'
const env = require('../../env.js').server[stage]

const state = {
  todos: {},
  addTodoVisible: false,
}

const mutations = {
  ADDTODO(state, todo) {
    state.todos.unshift(todo)
  },

  REMOVETODO(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  GETALLTODOS(state, todos) {
    state.todos = todos
  },
}

const actions = {
  addTodo: ({ commit }, todo) => {
    axios
      .post(`${env.api_url}/api/todo/${todo.title}`)
      .then((response) => {
        commit('ADDTODO', response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  },

  removeTodo({ commit }, todo) {
    axios
      .delete(`${env.api_url}/api/todo/${todo.id}`)
      .then(() => {
        commit('REMOVETODO', todo)
      })
      .catch((e) => {
        console.log(e)
      })
  },

  getAllTodos({ commit }) {
    axios
      .get(`${env.api_url}/api/todos`)
      .then((response) => {
        commit('GETALLTODOS', response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  },

  toggleAddTodoInput({ state }) {
    state.addTodoVisible = !state.addTodoVisible
  },
}

export default createStore({
  state,
  mutations,
  actions,
})
