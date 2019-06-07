<template>
  <v-container class="pa-0">
    <v-layout wrap>

      <v-toolbar color="secondary">
        <v-btn icon flat :to="{ name: 'Sessions' }" class="mb-2">
          <v-icon>navigate_before</v-icon>
        </v-btn>
        <v-toolbar-title class="ml-1">View Session</v-toolbar-title>
      </v-toolbar>

      <v-flex xs12 class="px-3 pb-2 pt-3">
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

      <v-flex xs12 class="px-3 py-2">
        <v-select
          :items="sessionTypes"
          label="Session Type"
          solo
          hide-details
        ></v-select>
      </v-flex>

      <v-flex xs12 class="px-3 py-2">
        <Autocomplete></Autocomplete>
      </v-flex>

      <v-flex xs12 class="px-4 pb-3 pt-4">
        <v-slider
          class="intensity-slider"
          v-model="intensity"
          :tick-labels="intensityLabels"
          max="4"
          step="1"
          tick-size="3"
          :color="color"
          always-dirty
          thumb-label="always"
        ></v-slider>
      </v-flex>

      <v-flex xs6 class="pl-3">
        <v-chip label color="secondary" text-color="white" class="d-block pa-2 ml-0">
          <v-icon left>label</v-icon>Frequent Tag 1
        </v-chip>
        <v-chip label color="secondary" text-color="white" class="d-block pa-2 ml-0">
          <v-icon left>label</v-icon>Frequent Tag 3
        </v-chip>
      </v-flex>
      <v-flex xs6 class="pr-3">
        <v-chip label color="secondary" text-color="white" class="d-block pa-2 mr-0">
          <v-icon left>label</v-icon>Frequent Tag 2
        </v-chip>
        <v-chip label color="secondary darken-2" text-color="white" class="d-block pa-2 mr-0">
          <v-icon left>label</v-icon>Frequent Tag 4
        </v-chip>
      </v-flex>
      <v-flex xs12 class="px-3">
        <v-btn color="primary" block large class="font-weight-bold" @click="dialogAddTag = true"><v-icon left dark>add</v-icon> Add Tag</v-btn>
      </v-flex>


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
            @click="dialogComment = true"
          >
            <v-icon class="d-flex">comment</v-icon>
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
        v-model="dialogComment"
        width="500"
      >
        <v-card>
          <v-card-title
            class="headline"
          >
            Add Comment
          </v-card-title>


          <v-card-text>
            <v-textarea placeholder="Please, add comment..."></v-textarea>
          </v-card-text>


          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary darken-1" @click="dialogComment = false">Save</v-btn>
            <v-btn color="primary" flat @click="dialogComment = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


      <v-dialog
        v-model="dialogAddTag"
        width="500"
      >
        <v-card>
          <v-card-title
            class="headline"
          >
            Add Tag
          </v-card-title>

          <v-card-text>
            <v-text-field placeholder="Please, add tag..."></v-text-field>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary darken-1" @click="dialogAddTag = false">Save</v-btn>
            <v-btn color="primary" flat @click="dialogAddTag = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-layout>
  </v-container>
</template>

<script>
    import Autocomplete from '../components/Autocomplete'
    export default {
      name: 'Session',
      components: {Autocomplete},
      data () {
        return {
          btnToggle: 'Team',
          sessionTypes: ['Practice', 'Team Workout', 'Film study', 'Indiv. Film Study'],
          dialogComment: false,
          dialogAddTag: false,
          frequentTypes: ['Frequent type 2', 'Frequent type 6'],
          intensity: 2,
          intensityLabels: [
            'Observing',
            'Medical rehab',
            'Light contact',
            'No contact',
            'Full contact'
          ]
        }
      },
      computed: {
        color () {
          if (this.intensity === 4) return 'green'
          if (this.intensity === 3) return 'yellow darken-3'
          if (this.intensity === 2) return 'red darken-1'
          if (this.intensity === 1) return 'deep-orange'
          return 'black'
        }
      }
    }
</script>

<style>
  .intensity-slider .v-slider__ticks span {
    font-size: 14px;
    text-align: center;
    line-height: 15px;
    white-space: normal;
  }
  .intensity-slider .v-slider__ticks>span {
    top: 17px;
  }
</style>
