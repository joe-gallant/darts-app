<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="setup" class="button">Quick Match</router-link></li>
      <li><router-link to="setup" class="button button-alt">Login</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Darts Scorer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  padding:0 24px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 12px 0;
  width:100%;
}

.login {
  background:#ffffff;
}
</style>
