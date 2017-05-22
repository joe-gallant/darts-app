import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    player1: {
      name: 'Player 1',
      score: 501,
      turn: true
    },
    player2: {
      name: 'Player 2',
      score: 501,
      turn: false
    }
  },
  actions: {
  },
  mutations: {
    submitScore (state, score) {
      if (state.player1.turn) {
        state.player1.score = state.player1.score - score
        state.player1.turn = false
        state.player2.turn = true
      } else {
        state.player2.score = state.player2.score - score
        state.player2.turn = false
        state.player1.turn = true
      }
    },
    update1Name (state, value) {
      state.player1.name = value
    },
    update2Name (state, value) {
      state.player2.name = value
    }
  },
  getters: {
  }
})

export default store
