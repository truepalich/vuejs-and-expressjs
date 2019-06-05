import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    skills: [
      { name: 'Skill 1', tags: [] },
      { name: 'Skill 2', tags: [] },
      { name: 'Skill 3', tags: ['1', '2'] },
      { name: 'Skill 4', tags: [] },
      { name: 'Skill 5', tags: [] },
      { name: 'Skill 6', tags: ['1', '2'] },
      { name: 'Skill 7', tags: [] },
      { name: 'Skill 8', tags: [] },
      { name: 'Skill 9', tags: ['1', '2'] },
      { name: 'Skill 10', tags: [] },
      { name: 'Skill 11', tags: [] }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setSkills (state, payload) {
      state.skills = payload
    }
  },
  actions: {
    // increment(context) {
    //   context.commit('increment');
    // }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    },
    getSkills: (state, getters) => {
      return state.skills
    }
  }
})
