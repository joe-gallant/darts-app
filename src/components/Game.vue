<template>
  <div class="game_board">
 			<div class="scoreboard">
        
        <div class="player player1" v-bind:class="{ active: player1.turn }">
          <div class="name">{{ player1.name }}</div>
          <div class="score">
            {{ player1.score }}
            <span class="finish" v-if="player1.checkoutFinish.dart1">{{ player1.checkoutFinish.dart1 }} + {{ player1.checkoutFinish.dart2 }} + {{ player1.checkoutFinish.dart3 }}</span>
          </div>
        </div>
        <div class="player player2" v-bind:class="{ active: player2.turn }">
          <div class="name">{{ player2.name }}</div>
          <div class="score">
            {{ player2.score }}
            <span class="finish" v-if="player2.checkoutFinish.dart1">{{ player2.checkoutFinish.dart1 }} + {{ player2.checkoutFinish.dart2 }} + {{ player2.checkoutFinish.dart3 }}</span>
          </div>
        </div>
 			</div>

 			<scorepad :score="score" v-on:clearPress="resetScore"></scorepad>

			<div class="button" v-on:click="submitScore">Submit score</div>

  </div>
</template>

<script>
import scorepad from '@/components/Scorepad.vue'

export default {
  name: 'game',
  components: {
    scorepad
  },
  methods: {
    submitScore: function () {
      this.$store.commit('submitScore', this.combineScore)
      this.score = []
    },
    resetScore: function () {
      this.score = []
    }
  },
  data () {
    return {
      score: []
    }
  },
  computed: {
    player1 () {
      return this.$store.state.player1
    },
    player2 () {
      return this.$store.state.player2
    },
    combineScore: function () {
      return this.score.join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game_board {
	padding:12px;
}

.scoreboard {
	width:100%;
	height:auto;
}

.player {
  width:49%;
  float:left;
}

.player.player2 {
  float:right;
}

.name {
  background:#f3f3f3;
  padding:6px;
  font-size:14px;
  font-weight:bolder;
}

.player.active .score {
  border:2px solid #42b983;
  opacity: 1;
}

.player.active .name {
  background:#42b983;
  color:#fff;
}

.score {
	height:100%;
	width:100%;
	background:#eaeaea;
	border:2px solid #ccc;
	float:left;
	padding:24px;
	font-size:26px;
	font-weight:bolder;
	letter-spacing: 2px;
	opacity: 0.5;
  position:relative;
}

.finish {
  position:absolute;
  bottom:5px;
  width:100%;
  left:0;
  font-size:11px;
  letter-spacing: 0;
  opacity: 0.6;
}
</style>
