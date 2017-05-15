<template>
  <div class="game_board">
 			<div class="scoreboard">
 				<div class="player1 score" v-bind:class="{ active: player1Turn }">{{player1Score}}</div>
 				<div class="player2 score" v-bind:class="{ active: !player1Turn }">{{player2Score}}</div>
 			</div>

 			<scorepad :score="score"></scorepad>

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
      if (this.player1Turn) {
        this.player1Score = this.player1Score - this.score.join('')
        this.player1Turn = false
        this.score = []
      } else {
        this.player2Score = this.player2Score - this.score.join('')
        this.player1Turn = true
        this.score = []
      }
    }
  },
  data () {
    return {
      player1Score: 501,
      player2Score: 501,
      player1Turn: true,
      score: []
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

.score {
	height:100%;
	width:49%;
	background:#eaeaea;
	border:2px solid #ccc;
	float:left;
	padding:24px;
	font-size:26px;
	font-weight:bolder;
	letter-spacing: 2px;
	opacity: 0.5;
}

.score.player2 {
	float:right;
}

.score.active {
	border:2px solid #42b983;
	opacity: 1;
}
</style>
