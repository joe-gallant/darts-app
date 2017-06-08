import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    gameMode: 501,
    player1: {
      name: 'Player 1',
      score: 501,
      turn: true,
      checkoutFinish: false
    },
    player2: {
      name: 'Player 2',
      score: 501,
      turn: false,
      checkoutFinish: false
    },
    checkouts: []
  },
  actions: {
    LOAD_CHECKOUTS: function ({ commit }) {
      axios.get('https://darts-app-f1cb5.firebaseio.com/checkouts.json').then((response) => {
        commit('SET_CHECKOUTS', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
    SET_CHECKOUTS: (state, { list }) => {
      state.checkouts = list
    },
    submitScore (state, score) {
      if (state.player1.turn) {
        var player1Score = state.player1.score - score

        // if score valid
        if (player1Score > 1) {
          state.player1.score = player1Score

          // switch players
          state.player1.turn = false
          state.player2.turn = true
        } else if (player1Score === 0) {
          alert('Player 1 wins')
        }

        // set checkout finish to players state
        state.player1.checkoutFinish = store.getters.getCheckout(player1Score)
      } else {
        var player2Score = state.player2.score - score

        // if score valid
        if (player2Score > 1) {
          state.player2.score = player2Score

          // switch players
          state.player2.turn = false
          state.player1.turn = true
        } else if (player2Score === 0) {
          alert('Player 2 wins')
        }

        // set checkout finish to players state
        state.player2.checkoutFinish = store.getters.getCheckout(player2Score)
      }
    },
    update1Name (state, value) {
      // update players name based on input on setup
      state.player1.name = value
    },
    update2Name (state, value) {
      // update players name based on input on setup
      state.player2.name = value
    },
    updateGameMode (state, value) {
      state.player1.score = Number(value)
      state.player2.score = Number(value)
    }
  },
  getters: {
    getCheckout: (state) => (score) => {
      var validCheckout = state.checkouts[score]

      // return as false if finish not available
      if (typeof validCheckout !== 'undefined') {
        return validCheckout
      } else {
        return false
      }
    }
  }
})

export default store
