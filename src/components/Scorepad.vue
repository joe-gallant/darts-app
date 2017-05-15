<template>
  <div class="scorepad">
		<div class="scorefield">{{combineScore}}<span v-if="!combineScore">0</span></div>
		<div class="actions">
			<div class="remove" v-on:click="undoPress">Undo</div>
			<div class="clear" v-on:click="clearPress">Clear</div>
		</div>
  	<div class="buttons">
	  	<div class="pad" v-on:click="padPress(1)">1</div>
	  	<div class="pad" v-on:click="padPress(2)">2</div>
	  	<div class="pad" v-on:click="padPress(3)">3</div>
	  	<div class="pad" v-on:click="padPress(4)">4</div>
	  	<div class="pad" v-on:click="padPress(5)">5</div>
	  	<div class="pad" v-on:click="padPress(6)">6</div>
	  	<div class="pad" v-on:click="padPress(7)">7</div>
	  	<div class="pad" v-on:click="padPress(8)">8</div>
	  	<div class="pad" v-on:click="padPress(9)">9</div>
  	</div>
	</div>
</template>

<script>
export default {
  name: 'scorepad',
  methods: {
    padPress: function (number) {
      this.score.push(number)
    },
    undoPress: function () {
      this.score.pop()
    },
    clearPress: function () {
      this.score = []
    }
  },
  computed: {
    combineScore: function () {
      return this.score.join('')
    }
  },
  data () {
    return {
      score: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.scorepad {
	margin:12px 0;
  clear:both;
  display: inline-block;
  max-width:100%;
  width:500px;
}

.pad {
	width:33.3%;
	padding:24px;
	border-left:1px solid #ccc;
	border-bottom:1px solid #ccc;
	float:left;
	background:#eaeaea;
}

.pad:nth-of-type(-n+3) {
	border-top:1px solid #ccc;
}

.pad:nth-of-type(3n + 3) {
	border-right:1px solid #ccc;
}

.scorefield {
	width:100%;
	padding:24px 48px;
	background:#f3f3f3;
	border-left:1px solid #ccc;
	border-top:1px solid #ccc;
	border-right:1px solid #ccc;
	font-size:24px;
	font-weight:bolder;
}

.actions {
	width:100%;
}

.actions div {
	width:50%;
	background:#2c3e50;
	color:#ffffff;
	padding:12px;
	float:left;
	border-right:1px solid #ccc;
}

</style>
