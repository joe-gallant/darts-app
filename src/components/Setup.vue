<template>
  <div class="setup">
    <h1>Game Setup</h1>

    <input type="text" name="player1" id="player1" placeholder="Player 1" v-model="player1.name" @input="update1Name">
    <input type="text" name="player2" id="player2" placeholder="Player 2" v-model="player2.name" @input="update2Name">

		<hr>

    <h3>Game mode</h3>
		<input type="radio" value="201" name="mode1" id="mode1" checked>
		<label class="mode" for="mode1">201</label>
		<input type="radio" value="301" name="mode1" id="mode2">
		<label class="mode" for="mode2">301</label>
		<input type="radio" value="501" name="mode1" id="mode3">
		<label class="mode" for="mode3">501</label>

		<hr>

		<router-link class="button button-alt" to="game">Begin</router-link>

  </div>
</template>

<script>
export default {
  name: 'setup',
  data () {
    return {

    }
  },
  computed: {
    player1 () {
      return this.$store.state.player1
    },
    player2 () {
      return this.$store.state.player2
    }
  },
  methods: {
    update1Name (e) {
      this.$store.commit('update1Name', e.target.value)
    },
    update2Name (e) {
      this.$store.commit('update2Name', e.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.setup {
	padding:0 24px;
}

.mode {
	padding:12px 24px;
	background:#eaeaea;
	color:#42b983;
}

input[type=text] {
	width:100%;
	border:1px solid #eaeaea;
	background:#eaeaea;
	padding:16px 24px;
	margin-bottom:12px;
}

label {
	margin:0 6px;
}

input[type=radio] {
	display: none;
}

input[type=radio]:checked + label {
	background:#42b983;
	color:#fff;
}

hr {
	border:0;
	height:1px;
	background:#eaeaea;
	margin:24px 0;
}

h3 {
	margin-bottom:30px;
}

</style>
