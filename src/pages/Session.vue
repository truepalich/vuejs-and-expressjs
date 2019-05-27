<template>
  <v-container class="pa-0">
    <v-layout wrap>

      <v-toolbar color="secondary">
        <v-btn icon flat :to="{ name: 'Sessions' }" class="mb-2">
          <v-icon>navigate_before</v-icon>
        </v-btn>
        <v-toolbar-title class="ml-0">View Session</v-toolbar-title>
      </v-toolbar>

      <v-flex xs12 class="pa-3">
        <v-btn-toggle v-model="text" light max="100%" class="d-block">
          <v-btn flat value="team">
            Team
          </v-btn>
          <v-btn flat value="group">
            Group
          </v-btn>
          <v-btn flat value="solo">
            Solo
          </v-btn>
        </v-btn-toggle>
      </v-flex>


      <v-flex xs12 class="pa-3">
        <v-select
          :items="items"
          label="Session History"
          solo
          light
        ></v-select>
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
            @click="dialog = true"
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
            :to="{ name: 'Home' }"
          >
            <v-icon class="d-flex">navigate_next</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-flex>

      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title
            class="headline"
          >
            Comments
          </v-card-title>


          <v-card-text>
            <p><b>1.</b> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <p><b>2.</b> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <p><b>3.</b> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: 'Session',
      data () {
        return {
          text: 'team',
          items: ['Session History', 'Bar', 'Fizz', 'Buzz'],
          dialog: false
        }
      }
    }
</script>

<style scoped>
</style>
