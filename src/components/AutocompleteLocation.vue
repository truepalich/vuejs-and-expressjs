<template>
  <v-layout wrap>
    <v-flex xs11>
      <v-combobox
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        hide-no-data
        hide-details
        label="What state are you from?"
        solo
      ></v-combobox>
    </v-flex>
    <v-flex xs1 class="d-flex align-center justify-center">
      <v-btn flat icon color="white" class="ma-0" @click="getCurrentPosition()">
        <v-icon>location_on</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
    export default {
      name: 'AutocompleteLocation',
      data () {
        return {
          loading: false,
          items: [],
          search: null,
          select: null,
          states: [
            'Alabama',
            'Alaska',
            'American Samoa',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'District of Columbia',
            'Federated States of Micronesia',
            'Florida',
            'Georgia',
            'Guam',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Marshall Islands',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Northern Mariana Islands',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Palau',
            'Pennsylvania',
            'Puerto Rico',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virgin Island',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
          ]
        }
      },
      watch: {
        search (val) {
          val && val !== this.select && this.querySelections(val)
        }
      },
      methods: {
        querySelections (v) {
          this.loading = true
          // Simulated ajax query
          setTimeout(() => {
            this.items = this.states.filter(e => {
              return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
            })
            this.loading = false
          }, 500)
        },
        getCurrentPosition () {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              // Get the coordinates of the current possition.
              var lat = position.coords.latitude
              var lng = position.coords.longitude
              this.select = lat + ', ' + lng
            })
          } else {
            this.select = 'No location found...'
          }
        }
      }
    }
</script>

<style scoped>

</style>
