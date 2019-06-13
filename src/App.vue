<template>
  <v-app dark>
    <v-flex xl4 offset-xl4>
      <router-view></router-view>
    </v-flex>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  created: function () {
    if (typeof window.user !== 'undefined') {
      this.$store.commit('setUser', window.user)
    }
  }
}
</script>

<style>
/*.container {*/
  /*!*max-width: 960px;*!*/
  /*max-width: 375px;*/
/*}*/
.v-btn--bottom:not(.v-btn--absolute) {
  bottom: 32px !important;
}

@media all and (display-mode: standalone) {
  .v-btn--bottom:not(.v-btn--absolute) {
    bottom: 16px !important;
  }
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
