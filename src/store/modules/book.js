const book = {
  state: {
    test: 'bookTest'
  },
  mutations: {
    SET_TEST: (state, newTest) => {
      state.test = newTest
    }
  },
  actions: {
    setTest: ({ commit, state }, newTest) => {
      return commit('SET_TEST', newTest)
    }
  }
}

export default book
