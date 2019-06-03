<template>
  <v-container class="pa-0">
    <v-layout wrap>

      <v-toolbar color="secondary">
        <v-btn icon flat :to="{ name: 'Session' }" class="mb-2">
          <v-icon>navigate_before</v-icon>
        </v-btn>
        <v-toolbar-title class="ml-1">Session Focus</v-toolbar-title>
      </v-toolbar>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-badge overlap color="secondary">
          <template v-slot:badge>
            <v-icon>local_offer</v-icon>
          </template>
          <v-avatar
            color="primary"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">Skill name</p>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-badge overlap color="secondary">
          <v-avatar
            color="secondary"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">Skill name</p>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-badge overlap color="secondary">
          <v-avatar
            color="secondary"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">Skill name</p>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-badge overlap color="secondary">
          <v-avatar
            color="secondary"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">Skill name</p>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-badge overlap color="secondary">
          <template v-slot:badge>
            <v-icon>local_offer</v-icon>
          </template>
          <v-avatar
            color="primary"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">Skill name</p>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-badge overlap color="secondary">
          <v-avatar
            color="secondary"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">Skill name</p>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-badge overlap color="secondary">
          <v-avatar
            color="secondary"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">Skill name</p>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-badge overlap color="secondary">
          <v-avatar
            color="secondary"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">Skill name</p>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-badge overlap color="secondary">
          <v-avatar
            color="secondary"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">Skill name</p>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-badge overlap color="secondary">
          <v-avatar
            color="secondary"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">Skill name</p>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-badge overlap color="secondary">
          <v-avatar
            color="secondary"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">Skill name</p>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-badge overlap color="secondary">
          <v-avatar
            color="secondary"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">Skill name</p>
      </v-flex>

      <v-flex xs8 offset-xs2 class="px-3 pt-3">
        <v-btn color="primary" block large class="font-weight-bold">Finish</v-btn>
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
            :to="{ name: 'Sessions' }"
          >
            <v-icon class="d-flex">navigate_next</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: 'SessionFocus',
      data () {
        return {
          apple: 'asdasdasd'
        }
      }
    }
</script>

<style scoped>

</style>
