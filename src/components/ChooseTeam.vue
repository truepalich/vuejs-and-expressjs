<template>
  <v-select
    :items="states"
    menu-props="auto"
    label="Select a team"
    hide-details
    prepend-icon="group"
    single-line
    class="ma-0 pa-0"
    v-model="team"
  ></v-select>
</template>

<script>
    export default {
      name: 'ChooseTeam',
      data () {
        return {
          team: 'New York Knicks',
          states: [
            'Atlanta Hawks',
            'Boston Celtics',
            'Brooklyn Nets',
            'Charlotte Bobcats',
            'Chicago Bulls',
            'Cleveland Cavaliers',
            'Dallas Mavericks',
            'Denver Nuggets',
            'Detroit Pistons',
            'Golden State Warriors',
            'Houston Rockets',
            'Indiana Pacers',
            'LA Clippers',
            'LA Lakers',
            'Memphis Grizzlies',
            'Miami Heat',
            'Milwaukee Bucks',
            'Minnesota Timberwolves',
            'New Orleans Hornets',
            'New York Knicks',
            'Oklahoma City Thunder',
            'Orlando Magic',
            'Philadelphia Sixers',
            'Phoenix Suns',
            'Portland Trail Blazers',
            'Sacramento Kings',
            'San Antonio Spurs',
            'Toronto Raptors',
            'Utah Jazz',
            'Washington Wizards'
          ]
        }
      }
    }
</script>

<style scoped>

</style>
