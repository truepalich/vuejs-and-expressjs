<template>
  <v-layout wrap>

    <v-flex xs9 class="pa-1">
      <ChooseTeam></ChooseTeam>
    </v-flex>

    <v-flex xs3 class="text-xs-right pa-1">
      <v-btn flat icon color="deep-orange lighten-2" class="ma-0">
        <v-icon>settings</v-icon>
      </v-btn>
    </v-flex>

    <v-flex xs12>
      <v-img :src="images.sample"></v-img>
    </v-flex>

    <v-flex xs12 class="pa-3 text-uppercase text-xs-center">
      <h4 class="title font-weight-medium">Session insights</h4>
    </v-flex>

    <v-flex xs12>
      <ChooseSessionDate></ChooseSessionDate>
    </v-flex>

    <v-flex xs12>
      <SessionListItem :sessionList="items"></SessionListItem>

      <v-fab-transition>
        <v-btn
          color="deep-orange lighten-1"
          dark
          fixed
          bottom
          right
          fab
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-fab-transition>

    </v-flex>

  </v-layout>
</template>

<script>
    import ChooseSessionDate from '../components/ChooseSessionDate'
    import ChooseTeam from '../components/ChooseTeam'
    import SessionListItem from '../components/SessionListItem'
    export default {
      name: 'Sessions',
      components: {SessionListItem, ChooseTeam, ChooseSessionDate},
      data () {
        return {
          images: {
            sample: require('../assets/lakers_promo.jpg')
          },
          items: [
            {
              action: '15 min',
              headline: 'Brunch this weekend?',
              title: 'Ali Connorss',
              subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            {
              action: '2 hr',
              headline: 'Summer BBQs',
              title: 'me, Scrott, Jennifers',
              subtitle: "Wish I could come, but I'm out of town this weekend."
            },
            {
              action: '6 hr',
              headline: 'Oui oui',
              title: 'Sandra Adamss',
              subtitle: 'Do you have Paris recommendations? Have you ever been?'
            },
            {
              action: '12 hr',
              headline: 'Birthday gift',
              title: 'Trevor Hansens',
              subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
            },
            {
              action: '18hr',
              headline: 'Recipe to try',
              title: 'Britta Holts',
              subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
            },
            {
              action: '15 min',
              headline: 'Brunch this weekend?',
              title: 'Ali Connors',
              subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            {
              action: '2 hr',
              headline: 'Summer BBQ',
              title: 'me, Scrott, Jennifer',
              subtitle: "Wish I could come, but I'm out of town this weekend."
            },
            {
              action: '6 hr',
              headline: 'Oui oui',
              title: 'Sandra Adams',
              subtitle: 'Do you have Paris recommendations? Have you ever been?'
            },
            {
              action: '12 hr',
              headline: 'Birthday gift',
              title: 'Trevor Hansen',
              subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
            },
            {
              action: '18hr',
              headline: 'Recipe to try',
              title: 'Britta Holt',
              subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
            }
          ]
        }
      }
    }
</script>

<style scoped>
</style>
