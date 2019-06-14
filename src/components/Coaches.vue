<template>
  <v-layout wrap>
    <v-flex xs4 class="pt-4 pl-3"></v-flex>
    <v-flex xs4 class="pt-4 mb-2">
      <h4 class="title font-weight-medium text-uppercase text-xs-center white--text">
        Coaches
      </h4>
    </v-flex>
    <v-flex xs4 class="pt-3 pr-3 text-xs-right">
      <v-btn small icon @click="dialogCoaches = true" color="primary">
        <v-icon small>edit</v-icon>
      </v-btn>
    </v-flex>

    <v-flex xs4 class="text-xs-center" v-for="coach in coaches" :key="coach.id" v-if="coach.selected === true">
      <v-chip color="secondary" text-color="white" disabled>
        <v-avatar>
          <v-icon>account_circle</v-icon>
        </v-avatar>
        {{ coach.name }}
      </v-chip>
    </v-flex>


    <v-dialog
      v-model="dialogCoaches"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar card dark color="secondary">
          <v-btn icon flat dark @click="dialogCoaches = false">
            <v-icon>navigate_before</v-icon>
          </v-btn>
          <v-toolbar-title class="ml-1">Edit Coaches</v-toolbar-title>
        </v-toolbar>
        <v-card-text>

          <v-list>
            <v-list-tile
              v-for="item in coaches"
              :key="item.id"
              avatar
              @click="item.selected = !item.selected"
            >

              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-text="item.name"></v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-checkbox v-model="item.selected" @click="changeSelectedCoaches(item)"></v-checkbox>
              </v-list-tile-action>

            </v-list-tile>
          </v-list>

          <!--<v-btn @click="">save</v-btn>-->


        </v-card-text>
        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
    export default {
      name: 'Coaches',
      data () {
        return {
          dialogCoaches: false
        }
      },
      computed: {
        coaches () {
          return this.$store.getters.getCoaches
        }
      },
      methods: {
        changeSelectedCoaches (coach) {
          const updatedCoaches = this.coaches
          updatedCoaches.forEach(function (item) {
            if (item.id === coach.id) {
              if (coach.selected === true) {
                item.selected = false
              } else {
                item.selected = true
              }
            }
          })
          this.$store.commit('setCoaches', updatedCoaches)
        }
      }
    }
</script>

<style scoped>

</style>
