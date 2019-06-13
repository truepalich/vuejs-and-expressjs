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
    user: { family_name: 'Last name', given_name: 'First name' },
    skills: [
      { id: '1', name: 'Skill 1', tags: [] },
      { id: '2', name: 'Skill 2', tags: [] },
      { id: '3', name: 'Skill 3', tags: ['1', '2'] },
      { id: '4', name: 'Skill 4', tags: [] },
      { id: '5', name: 'Skill 5', tags: [] },
      { id: '6', name: 'Skill 6', tags: [] },
      { id: '7', name: 'Skill 7', tags: ['1', '2'] },
      { id: '8', name: 'Skill 8', tags: [] },
      { id: '9', name: 'Skill 9', tags: [] },
      { id: '11', name: 'Skill 11', tags: [] }
    ],
    tags: [
      { id: '1', name: 'Frequent Tag 1', frequent: true, selected: false },
      { id: '2', name: 'Frequent Tag 2', frequent: true, selected: false },
      { id: '3', name: 'Frequent Tag 3', frequent: true, selected: false },
      { id: '4', name: 'Frequent Tag 4', frequent: true, selected: false },
      { id: '5', name: 'Tag 5', frequent: false, selected: false },
      { id: '6', name: 'Tag 6', frequent: false, selected: false },
      { id: '7', name: 'Tag 7', frequent: false, selected: false },
      { id: '8', name: 'Tag 8', frequent: false, selected: false }
    ],
    comments: [
      { id: '1', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
      { id: '2', text: 'A reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that.' }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setSkills (state, payload) {
      state.skills = payload
    },
    setTags (state, payload) {
      state.tags = payload
    },
    setComments (state, payload) {
      state.comments = payload
    },
    setUser (state, payload) {
      state.user = payload
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
    },
    getComments: (state, getters) => {
      return state.comments
    },
    getTags: (state, getters) => {
      return state.tags
    },
    getFrequentTags: state => {
      return state.tags.filter(tag => tag.frequent === true)
    },
    getNonFrequentTags: state => {
      return state.tags.filter(tag => tag.frequent === false)
    },
    getUser: (state, getters) => {
      return state.user
    }
  }
})
