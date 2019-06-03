<template>
  <v-container class="pa-0">
    <v-layout wrap>

      <v-toolbar color="secondary">
        <v-btn icon flat :to="{ name: 'Session' }" class="mb-2">
          <v-icon>navigate_before</v-icon>
        </v-btn>
        <v-toolbar-title class="ml-1">Log Individuals</v-toolbar-title>
      </v-toolbar>

      <v-flex xs12 class="pt-3">
        <h4 class="title font-weight-medium text-uppercase text-xs-center white--text">Coaches</h4>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-chip color="primary" text-color="white">
          <v-avatar>
            <v-icon>account_circle</v-icon>
          </v-avatar>
          Alex Ranee
        </v-chip>
        <v-chip color="primary" text-color="white">
          <v-avatar>
            <v-icon>account_circle</v-icon>
          </v-avatar>
          George Ranee
        </v-chip>
        <v-chip color="primary" text-color="white">
          <v-avatar>
            <v-icon>account_circle</v-icon>
          </v-avatar>
          Ranee
        </v-chip>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-chip color="primary" text-color="white">
          <v-avatar>
            <v-icon>account_circle</v-icon>
          </v-avatar>
          Alex Clare
        </v-chip>
        <v-chip color="primary" text-color="white">
          <v-avatar>
            <v-icon>account_circle</v-icon>
          </v-avatar>
          Mark O'neal
        </v-chip>
        <v-chip color="secondary" text-color="white">
          <v-avatar>
            <v-icon>account_circle</v-icon>
          </v-avatar>
          Ranee
        </v-chip>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center">
        <v-chip color="primary" text-color="white">
          <v-avatar>
            <v-icon>account_circle</v-icon>
          </v-avatar>
          Max Koval
        </v-chip>
        <v-chip color="primary" text-color="white">
          <v-avatar>
            <v-icon>account_circle</v-icon>
          </v-avatar>
          Andrew
        </v-chip>
        <v-chip color="primary" text-color="white">
          <v-avatar>
            <v-icon>account_circle</v-icon>
          </v-avatar>
          Gelik Jem
        </v-chip>
      </v-flex>


      <v-flex xs12 class="pt-3">
        <v-flex xs12 class="pt-3 px-3">
          <v-select
            :items="items"
            label="NBA Players"
            solo
          ></v-select>
        </v-flex>

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
    export default {
      name: 'Session',
      components: {PlayersListItem},
      data () {
        return {
          items: ['NBA Forwards', 'NBA Middlefilders', 'NBA Deffenders'],
          players: [
            {
              number: '#11',
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              action: '15 min',
              headline: 'Brunch this weekend?',
              title: 'Ali Connorss',
              subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            {
              number: '#12',
              avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
              action: '2 hr',
              headline: 'Summer BBQs',
              title: 'me, Scrott, Jennifers',
              subtitle: "Wish I could come, but I'm out of town this weekend."
            },
            {
              number: '#22',
              avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
              action: '6 hr',
              headline: 'Oui oui',
              title: 'Sandra Adamss',
              subtitle: 'Do you have Paris recommendations? Have you ever been?'
            },
            {
              number: '#43',
              avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
              action: '12 hr',
              headline: 'Birthday gift',
              title: 'Trevor Hansens',
              subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
            },
            {
              number: '#11',
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              action: '15 min',
              headline: 'Brunch this weekend?',
              title: 'Ali Connorss',
              subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            {
              number: '#12',
              avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
              action: '2 hr',
              headline: 'Summer BBQs',
              title: 'me, Scrott, Jennifers',
              subtitle: "Wish I could come, but I'm out of town this weekend."
            },
            {
              number: '#22',
              avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
              action: '6 hr',
              headline: 'Oui oui',
              title: 'Sandra Adamss',
              subtitle: 'Do you have Paris recommendations? Have you ever been?'
            },
            {
              number: '#43',
              avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
              action: '12 hr',
              headline: 'Birthday gift',
              title: 'Trevor Hansens',
              subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
