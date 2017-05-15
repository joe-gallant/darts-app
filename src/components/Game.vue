<template>
  <div class="game_board">
 			<div class="scoreboard">
 				<div class="player1 score active">501</div>
 				<div class="player2 score">501</div>
 			</div>

 			<scorepad></scorepad>

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
      console.log(this.combinedScore)
    }
  },
  data () {
    return {

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
