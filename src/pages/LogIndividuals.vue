<template>
  <v-container class="pa-0">
    <v-layout wrap>

      <v-toolbar color="secondary">
        <v-btn icon flat :to="{ name: 'Session' }" class="mb-2">
          <v-icon>navigate_before</v-icon>
        </v-btn>
        <v-toolbar-title class="ml-1">Log Individuals</v-toolbar-title>
      </v-toolbar>

      <Coaches></Coaches>

      <v-flex xs12 class="px-3 pt-3">
        <v-select
          :items="items"
          v-model="defaultSelected"
          solo
        ></v-select>
      </v-flex>

      <v-flex xs12>
        <PlayersListItem :players="players"></PlayersListItem>
      </v-flex>

      <v-flex xs12>
        <div style="height: 90px;"></div>

        <v-fab-transition>
          <v-btn
            color="deep-orange lighten-1"
            dark
            fixed
            bottom
            right
            fab
            :to="{ name: 'SessionFocus' }"
          >
            <v-icon class="d-flex">navigate_next</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
    import PlayersListItem from '../components/PlayersListItem'
    import Coaches from '../components/Coaches'
    export default {
      name: 'Session',
      components: {Coaches, PlayersListItem},
      data () {
        return {
          defaultSelected: 'All Active Roster',
          items: ['All Active Roster', 'Traveling Roster', 'Guards']
        }
      },
      computed: {
        players () {
          return this.$store.getters.getPlayers
        }
      }
    }
</script>

<style scoped>

</style>
