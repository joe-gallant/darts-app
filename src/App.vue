<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function () {
    this.$store.dispatch('LOAD_CHECKOUTS')
  }
}
</script>

<style>
* {
  box-sizing:border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 24px;
}

.button {
  display:block;
  padding:24px 48px;
  max-width:100%;
  width:400px;
  background:#42b983;
  color:#ffffff;
  font-weight:bolder;
  text-align:center;
  color:#ffffff;
  text-decoration: none;
  margin:0 auto;
}

.button-alt {
  background:#2c3e50;
}

input:focus {
  outline:none;
}
</style>
