<template>
  <v-container class="pa-0 fill-height">

    <Preloader></Preloader>

    <v-layout wrap>

      <v-toolbar color="secondary">
        <v-flex xs9 class="pa-2" d-flex align-center justify-start>
          <!--<v-icon style="flex: none !important;">group</v-icon>-->
          <!--<b class="ml-2 subheading" style="flex: none !important;">NY Knicks</b>-->
          <ChooseTeam></ChooseTeam>
        </v-flex>

        <v-flex xs3 class="text-xs-right pt-2 pb-2 pr-0">
          <v-btn flat icon color="white" class="ma-0" @click="dialogSettings = true">
            <v-icon>settings</v-icon>
          </v-btn>
        </v-flex>

      </v-toolbar>

      <v-flex xs12 class="bottom-gradient py-4">
        <v-img :src="images.sample" contain height="150"></v-img>
      </v-flex>

      <v-flex xs12 class="pt-3">
        <h4 class="title font-weight-medium text-uppercase text-xs-center white--text">Session insights</h4>
        <ChooseSessionDate></ChooseSessionDate>
      </v-flex>

      <v-flex xs12 justify-end>
        <SessionListItem :sessionList="items"></SessionListItem>
        <div style="height: 90px;"></div>

        <v-fab-transition>
          <v-btn
            color="deep-orange lighten-1"
            dark
            fixed
            bottom
            right
            fab
            :to="{ name: 'Session' }"
          >
            <v-icon class="d-flex">add</v-icon>
          </v-btn>
        </v-fab-transition>

      </v-flex>


      <v-dialog
        v-model="dialogSettings"
        width="500"
      >
        <v-card>
          <v-card-title
            class="headline"
          >
            Cooming Soon!
          </v-card-title>

          <v-card-text>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialogSettings = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-layout>
  </v-container>
</template>

<script>
    import ChooseSessionDate from '../components/ChooseSessionDate'
    import ChooseTeam from '../components/ChooseTeam'
    import SessionListItem from '../components/SessionListItem'
    import Preloader from '../components/Preloader'
    export default {
      name: 'Sessions',
      components: {Preloader, SessionListItem, ChooseTeam, ChooseSessionDate},
      data () {
        return {
          dialogSettings: false,
          images: {
            sample: require('../assets/team_logo.png')
          },
          items: [
            {
              date: '06/01/2019',
              sessionType: 'Practice',
              headline: 'Brunch this weekend?',
              title: 'Ali Connorss',
              subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            {
              date: '06/02/2019',
              sessionType: 'Team Workout',
              headline: 'Summer BBQs',
              title: 'me, Scrott, Jennifers',
              subtitle: "Wish I could come, but I'm out of town this weekend."
            },
            {
              date: '06/03/2019',
              sessionType: 'Team Workout',
              headline: 'Oui oui',
              title: 'Sandra Adamss',
              subtitle: 'Do you have Paris recommendations? Have you ever been?'
            },
            {
              date: '06/04/2019',
              sessionType: 'Film study',
              headline: 'Birthday gift',
              title: 'Trevor Hansens',
              subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
            },
            {
              date: '06/05/2019',
              sessionType: 'Team Workout',
              headline: 'Recipe to try',
              title: 'Britta Holts',
              subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
            },
            {
              date: '06/06/2019',
              sessionType: 'Team Workout',
              headline: 'Brunch this weekend?',
              title: 'Ali Connors',
              subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            {
              date: '2 hr',
              sessionType: 'Practice',
              headline: 'Summer BBQ',
              title: 'me, Scrott, Jennifer',
              subtitle: "Wish I could come, but I'm out of town this weekend."
            },
            {
              date: '06/07/2019',
              sessionType: 'Team Workout',
              headline: 'Oui oui',
              title: 'Sandra Adams',
              subtitle: 'Do you have Paris recommendations? Have you ever been?'
            },
            {
              date: '06/08/2019',
              sessionType: 'Film study',
              headline: 'Birthday gift',
              title: 'Trevor Hansen',
              subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
            },
            {
              date: '06/09/2019',
              sessionType: 'Practice',
              headline: 'Recipe to try',
              title: 'Britta Holt',
              subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
            }
          ]
        }
      },
      created: function () {
        this.$store.commit('increment')
        this.$store.commit('increment')
        // console.log(this.$store.state.count)
        // const todos = this.$store.getters.doneTodos
        // console.log(todos)
        // console.log(this.$store.getters.doneTodosCount)
        // console.log(this.$store.getters.getTodoById(2))
      }
    }
</script>

<style scoped>
  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
    rgba(230,106,39,.25),
    rgba(230,106,39,.25) 5px,
    rgba(32,127,181,.25) 5px,
    rgba(32,127,181,.25) 10px
    );
  }
  .bottom-gradient {
    /*background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);*/
    background-image: linear-gradient(to top, rgba(32, 127, 181, 0.4) 0%, transparent 250px);
  }
</style>
