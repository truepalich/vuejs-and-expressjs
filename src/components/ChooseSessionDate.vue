<template>
  <v-container grid-list-md class="pb-0">
    <v-layout row wrap>
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
              v-model="dateFormatted"
              label="From"
              persistent-hint
              prepend-icon="event"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
              dark
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
      </v-flex>

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
          <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-flex>

      <v-flex xs2 class="align-center justify-center pt-3">
        <v-btn flat icon color="white" class="ma-0">
          <v-icon>filter_list</v-icon>
        </v-btn>
      </v-flex>

      <v-flex xs12>
        <v-select
          :items="items"
          label="Session History"
          solo
        ></v-select>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: 'ChooseSessionDate',
      data: vm => ({
        date: new Date().toISOString().substr(0, 10),
        dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
        menu1: false,
        menu2: false,
        items: ['Session History', 'Bar', 'Fizz', 'Buzz']
      }),

      computed: {
        computedDateFormatted () {
          return this.formatDate(this.date)
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
