<template>
  <v-container grid-list-md class="pb-0">
    <v-layout row wrap>

      <v-flex xs12>
        <v-select
          :items="items"
          label="Session History"
          solo
        ></v-select>
      </v-flex>

      <v-flex xs5>
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="computedSevenDaysAgoFormatted"
              label="From"
              persistent-hint
              prepend-icon="event"
              v-on="on"
              dark
            ></v-text-field>
          </template>
          <v-date-picker v-model="dateSevenDaysAgo" no-title @input="menu1 = false" :min="dateSevenDaysAgo" :max="date"></v-date-picker>
        </v-menu>
      </v-flex>

      <v-flex xs1></v-flex>

      <v-flex xs5>
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="computedDateFormatted"
              label="To"
              persistent-hint
              prepend-icon="event"
              readonly
              v-on="on"
              dark
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu2 = false" :min="dateSevenDaysAgo" :max="date"></v-date-picker>
        </v-menu>
      </v-flex>

      <v-flex xs1 class="align-center justify-center pt-3">
        <v-btn flat icon color="white" class="ma-0" @click="dialogFilter = true">
          <v-icon>filter_list</v-icon>
        </v-btn>
      </v-flex>


      <v-dialog
        v-model="dialogFilter"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="secondary">
            <v-btn icon flat dark @click="dialogFilter = false">
              <v-icon>navigate_before</v-icon>
            </v-btn>
            <v-toolbar-title class="ml-1">Filter Sessions</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div>
              <v-subheader class="px-0">Session Types:</v-subheader>
              <v-layout wrap>
                <v-flex xs6>
                  <v-checkbox label="Practice" class="mt-0"></v-checkbox>
                </v-flex>
                <v-flex xs6>
                  <v-checkbox label="Team Workout" class="mt-0"></v-checkbox>
                </v-flex>
                <v-flex xs6>
                  <v-checkbox label="Film study" class="mt-0"></v-checkbox>
                </v-flex>
                <v-flex xs6>
                  <v-checkbox label="Indiv. Film Study"  class="mt-0"></v-checkbox>
                </v-flex>
              </v-layout>
            </div>

            <v-divider></v-divider>

            <v-list>
              <v-subheader class="px-0">Attendance:</v-subheader>
              <v-list-tile
                v-for="item in attendance"
                :key="item.title"
                avatar
                @click=""
              >

                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-text="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.number }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-checkbox></v-checkbox>
                </v-list-tile-action>

              </v-list-tile>
            </v-list>


          </v-card-text>
          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>



    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: 'ActionWithSessions',
      data: vm => ({
        date: new Date().toISOString().substr(0, 10),
        dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
        menu1: false,
        menu2: false,
        items: ['Session History', 'Bar', 'Fizz', 'Buzz'],
        dialogFilter: false,
        attendance: [
          { checked: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', number: '#12' },
          { checked: false, title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', number: '#22' },
          { checked: false, title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', number: '#42' },
          { checked: false, title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', number: '#23' },
          { checked: true, title: 'Jason Oner1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', number: '#12' },
          { checked: false, title: 'Travis Howard2', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', number: '#72' },
          { checked: false, title: 'Ali Connors3', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', number: '#02' },
          { checked: false, title: 'Cindy Baker4', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', number: '#17' }
        ]
      }),

      computed: {
        dateSevenDaysAgo () {
          const d = new Date()
          d.setDate(d.getDate() - 7)
          return d.toISOString().substr(0, 10)
        },
        computedDateFormatted () {
          return this.formatDate(this.date)
        },
        computedSevenDaysAgoFormatted () {
          return this.formatDate(this.dateSevenDaysAgo)
        }
      },

      watch: {
        date (val) {
          this.dateFormatted = this.formatDate(this.date)
        }
      },

      methods: {
        formatDate (date) {
          if (!date) return null

          const [year, month, day] = date.split('-')
          return `${month}/${day}/${year}`
        },
        parseDate (date) {
          if (!date) return null

          const [month, day, year] = date.split('/')
          return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        }
      }
    }
</script>

<style scoped>

</style>
