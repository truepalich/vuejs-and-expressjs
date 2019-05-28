<template>
  <div v-show="loading" class="custom-loader">
    <v-flex class="text-xs-center">
      <img src="../assets/LuceoSports-Logo.png" alt="Luceo Sports">
      <div></div>
      <v-progress-circular
        :size="80"
        color="deep-orange lighten-2"
        indeterminate
        class="mt-5"
      ></v-progress-circular>
    </v-flex>
  </div>
</template>

<script>
    export default {
      name: 'Preloader',
      data () {
        return {
          loading: true
        }
      },
      created: function () {
        setTimeout(() => {
          this.loading = false
        }, 2000)
      }
    }
</script>

<style scoped>
  .custom-loader {
    width: 100%;
    min-height: 100%;
    background-color: #303030;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 201;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
