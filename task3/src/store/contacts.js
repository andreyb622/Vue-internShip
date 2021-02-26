export default {
  state() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          valid: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          valid: false,
        },
      ]
    }
},
  mutations: {
    removeContact: (state, id) => state.friends = state.friends.filter(friend => friend.id !== id),
    addNewContact: (state, {name, phone, email}) => {
      state.friends.push({
        id: Date.now(),
        name: name,
        phone: phone,
        email: email,
        valid: true,
      })
    },
    toggleValid: (state, id) => {
      const friend = state.friends.find(friend => friend.id === id)
      friend.valid = !friend.valid
    }
  },
  getters: {
    getFriends: state => state.friends
  },
  actions: {
    deleteContact: (context, id) => context.commit('removeContact', id),
    addContact: (context, {name, phone, email}) => context.commit('addNewContact', {name, phone, email}),
    changeValid: (context, id) => context.commit('toggleValid', id)
  }
}
