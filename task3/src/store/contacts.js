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

  },
  getters: {
    getFriends(){
      return state
    } 
  },
  actions: {

  }
}
