import { createStore } from 'vuex'
import contacts from './contacts'

export default createStore({
  modules: {
    contacts
  },
  state() {
    return {
      name: 4
    }
  },
  mutations: {

  },
  getters: {
    
  },
  actions: {

  }
})