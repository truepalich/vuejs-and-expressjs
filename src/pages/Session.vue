<template>
  <v-container class="pa-0">
    <v-layout wrap>

      <v-toolbar color="secondary">
        <v-btn icon flat :to="{ name: 'Sessions' }" class="mb-2">
          <v-icon>navigate_before</v-icon>
        </v-btn>
        <v-toolbar-title class="ml-1">View Session</v-toolbar-title>
      </v-toolbar>

      <v-flex xs12 class="px-3 pb-3 pt-3">
        <v-btn-toggle class="d-flex custom-btn-toggle" v-model="btnToggle" mandatory>
          <v-btn flat large value="Team">
            <v-icon class="mr-2">supervised_user_circle</v-icon>
            Team
          </v-btn>
          <v-btn flat large value="Group">
            <v-icon class="mr-2">group_work</v-icon>
            Group
          </v-btn>
          <v-btn flat large value="Solo">
            <v-icon class="mr-2">account_circle</v-icon>
            Solo
          </v-btn>
        </v-btn-toggle>
      </v-flex>

      <!--<v-flex xs6>-->
      <!--<v-switch class="align-center justify-center" color="primary" v-model="frequentTypes" label="Frequent type 1" value="Frequent type 1"></v-switch>-->
      <!--<v-switch class="align-center justify-center" color="primary" v-model="frequentTypes" label="Frequent type 2" value="Frequent type 2"></v-switch>-->
      <!--<v-switch class="align-center justify-center" color="primary" v-model="frequentTypes" label="Frequent type 3" value="Frequent type 3"></v-switch>-->
      <!--</v-flex>-->
      <!--<v-flex xs6>-->
      <!--<v-switch class="align-center justify-center" color="primary" v-model="frequentTypes" label="Frequent type 4" value="Frequent type 4"></v-switch>-->
      <!--<v-switch class="align-center justify-center" color="primary" v-model="frequentTypes" label="Frequent type 5" value="Frequent type 5"></v-switch>-->
      <!--<v-switch class="align-center justify-center" color="primary" v-model="frequentTypes" label="Frequent type 6" value="Frequent type 6"></v-switch>-->
      <!--</v-flex>-->

      <v-flex xs12 class="px-3 py-3">
        <v-select
          :items="sessionTypes"
          label="Session Type"
          solo
          hide-details
        ></v-select>
      </v-flex>

      <v-flex xs12 class="px-3 py-3">
        <AutocompleteLocation></AutocompleteLocation>
      </v-flex>

      <v-flex xs12 class="px-3 pt-3 pb-4">
        <Intensive></Intensive>
      </v-flex>

      <SessionFrequentTags></SessionFrequentTags>

      <v-flex xs12>
        <div style="height: 90px;"></div>

        <v-fab-transition>
          <v-btn
            color="deep-orange lighten-1"
            dark
            fixed
            bottom
            left
            fab
            @click="dialogNote = true"
          >
            <v-icon class="d-flex">note_add</v-icon>
          </v-btn>
        </v-fab-transition>


        <v-fab-transition>
          <v-btn
            color="deep-orange lighten-1"
            dark
            fixed
            bottom
            right
            fab
            :to="{ name: 'LogIndividuals' }"
          >
            <v-icon class="d-flex">navigate_next</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-flex>

      <v-dialog
              v-model="dialogNote"
              width="500"
      >
        <v-card>
          <v-card-title
                  class="headline"
          >
            Add Note
          </v-card-title>
          <v-card-text>
            <v-layout row>
              <v-flex xs12>
                <v-textarea placeholder="Please type new note..." ></v-textarea>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary darken-1" @click="dialogNote = false">Save</v-btn>
            <v-btn color="primary" flat @click="dialogNote = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-layout>
  </v-container>
</template>

<script>
  import AutocompleteLocation from '../components/AutocompleteLocation'
  import ComboboxTags from '../components/ComboboxTags'
  import AutocompleteTags from '../components/AutocompleteTags'
  import SessionFrequentTags from '../components/SessionFrequentTags'
  import Intensive from '../components/Intensive'
  export default {
    name: 'Session',
    components: {Intensive, SessionFrequentTags, AutocompleteTags, AutocompleteLocation, ComboboxTags},
    data () {
      return {
        intensive: 2,
        btnToggle: 'Team',
        sessionTypes: ['Practice', 'Team Workout', 'Film study', 'Indiv. Film Study'],
        dialogNote: false
        // frequentTypes: ['Frequent type 2', 'Frequent type 6']
      }
    }
  }
</script>

<style>

</style>
