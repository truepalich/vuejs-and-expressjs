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
          <v-btn v-if="user.family_name || user.given_name" flat icon color="white" class="ma-0" @click="dialogSettings = true">
            <v-icon>settings</v-icon>
          </v-btn>
        </v-flex>

      </v-toolbar>

      <v-flex xs12 class="bottom-gradient py-4">
        <v-img :src="images.sample" contain height="150"></v-img>
      </v-flex>

      <v-flex xs12 class="pt-3">
        <h4 class="title font-weight-medium text-uppercase text-xs-center white--text">Session insights</h4>
        <ActionWithSessions></ActionWithSessions>
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
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="secondary">
            <v-btn icon flat dark @click="dialogSettings = false">
              <v-icon>navigate_before</v-icon>
            </v-btn>
            <v-toolbar-title class="ml-1">
              <span v-if="user.family_name">{{ user.family_name }}</span>
              <span v-if="user.given_name">{{ user.given_name }}</span>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-btn color="primary" large class="font-weight-bold" :to="{ name: 'Logout' }" >Logout</v-btn>
          </v-card-text>
          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>

    </v-layout>
  </v-container>
</template>

<script>
  import ActionWithSessions from '../components/ActionWithSessions'
  import ChooseTeam from '../components/ChooseTeam'
  import SessionListItem from '../components/SessionListItem'
  import Preloader from '../components/Preloader'
  export default {
    name: 'Sessions',
    components: {Preloader, SessionListItem, ChooseTeam, ActionWithSessions},
    data () {
      return {
        dialogSettings: false,
        images: {
          sample: require('../assets/team_logo.png')
        },
        items: [
          {
            date: '06/01/2019, 12:12 PM',
            sessionType: 'Practice',
            title: 'Ali Connorss',
            attendance: [
              { id: '1', name: 'John Snow' },
              { id: '2', name: 'James Bond' },
              { id: '3', name: 'Tom Cruze' },
              { id: '4', name: 'Jenifer Aniston' }
            ]
          },
          {
            date: '06/02/2019, 12:12 PM',
            sessionType: 'Team Workout',
            title: 'me, Scrott, Jennifers',
            attendance2: [
              { id: '7', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
              { id: '5', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
              { id: '8', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' }
            ]
          },
          {
            date: '06/03/2019, 12:12 PM',
            sessionType: 'Team Workout',
            title: 'Sandra Adamss',
            attendance: [
              { id: '20', name: 'John Snow' },
              { id: '21', name: 'James Bond' },
              { id: '22', name: 'Tom Cruze' },
              { id: '23', name: 'Jenifer Aniston' }
            ]
          },
          {
            date: '06/04/2019, 12:12 PM',
            sessionType: 'Film study',
            title: 'Trevor Hansens',
            attendance2: [
              { id: '71', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
              { id: '72', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
              { id: '73', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
              { id: '74', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
              { id: '75', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
              { id: '76', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' }
            ]
          },
          {
            date: '06/05/2019, 12:12 PM',
            sessionType: 'Team Workout',
            title: 'Britta Holts',
            attendance: [
              { id: '31', name: 'John Snow' },
              { id: '32', name: 'James Bond' },
              { id: '33', name: 'Tom Cruze' },
              { id: '34', name: 'Jenifer Aniston' }
            ]
          },
          {
            date: '06/05/2019, 12:12 PM',
            sessionType: 'Team Workout',
            title: 'Ali Connors',
            attendance: [
              { id: '37', name: 'Tom Cruze' },
              { id: '35', name: 'John Snow' },
              { id: '38', name: 'Jenifer Aniston' }
            ]
          },
          {
            date: '06/07/2019, 12:12 PM',
            sessionType: 'Practice',
            title: 'me, Scrott, Jennifer',
            attendance: [
              { id: '41', name: 'John Snow' },
              { id: '42', name: 'James Bond' },
              { id: '43', name: 'Tom Cruze' },
              { id: '44', name: 'Jenifer Aniston' }
            ]
          },
          {
            date: '06/08/2019, 12:12 PM',
            sessionType: 'Team Workout',
            title: 'Sandra Adams',
            attendance: [
              { id: '47', name: 'Tom Cruze' },
              { id: '45', name: 'John Snow' },
              { id: '48', name: 'Jenifer Aniston' }
            ]
          },
          {
            date: '06/09/2019, 12:12 PM',
            sessionType: 'Film study',
            title: 'Trevor Hansen',
            attendance: [
              { id: '51', name: 'John Snow' },
              { id: '52', name: 'James Bond' },
              { id: '53', name: 'Tom Cruze' },
              { id: '54', name: 'Jenifer Aniston' }
            ]
          },
          {
            date: '06/10/2019, 12:12 PM',
            sessionType: 'Practice',
            title: 'Britta Holt',
            attendance: [
              { id: '57', name: 'Tom Cruze' },
              { id: '55', name: 'John Snow' },
              { id: '58', name: 'Jenifer Aniston' }
            ]
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
    },
    computed: {
      user () {
        return this.$store.getters.getUser
      }
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
