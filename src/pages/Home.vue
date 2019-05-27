<template>
  <v-container class="pa-0 fill-height">
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
  </v-container>
</template>

<script>
    export default {
      name: 'Home',

      created: function () {
        setTimeout(() => {
          this.$router.push({ name: 'Sessions' })
        }, 2000)
      }
    }
</script>

<style scoped>

</style>
