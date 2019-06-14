<template>
  <div class="player-list-item">
    <div v-for="item in players">
      <v-list two-line class="py-0">
        <v-list-group
          :key="item.id"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile class="py-2">
              <v-list-tile-avatar class="d-flex column" size="55">
                <img :src="item.avatar" style="border: 2px solid red">
              </v-list-tile-avatar>
              <v-list-tile-content class="pl-4">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">
                  <v-btn icon flat class="mb-2 ml-0" :class="[item.sleeppy ? 'primary' : 'secondary']" @click.stop="sleeppyLogic(item)">
                    <v-icon>local_hotel</v-icon>
                  </v-btn>
                  <v-btn icon flat class="mb-2 ml-0" :class="[item.illness ? 'primary' : 'secondary']" @click.stop="illnessLogic(item)">
                    <v-icon>local_hospital</v-icon>
                  </v-btn>
                  <v-btn icon flat class="mb-2 secondary ml-0" @click.stop="dialogComment = true">
                    <v-icon>comment</v-icon>
                  </v-btn>
                  <v-btn icon flat class="mb-2 secondary ml-0" @click.stop="dialogTags = true">
                    <v-icon>local_offer</v-icon>
                  </v-btn>
                  <v-btn icon flat class="mb-2 ml-0" :class="[item.attendance ? 'primary' : 'secondary']" @click.stop="attendanceLogic(item)">
                    <v-icon>check_circle</v-icon>
                  </v-btn>
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action class="font-weight-bold">
                {{ item.number }}
              </v-list-tile-action>
            </v-list-tile>
          </template>

          <v-flex xs12 v-for="param in item.params" :key="param.label" class="px-4">
            <v-subheader class="pa-0">{{ param.label }}</v-subheader>
            <v-slider v-model="param.val" class="ma-0"></v-slider>
          </v-flex>

        </v-list-group>
      </v-list>

      <v-divider></v-divider>
    </div>

    <v-dialog
      v-model="dialogIntensity"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline"
        >
          Override Intensity
        </v-card-title>

        <v-card-text>

          <v-layout row wrap>
            <v-flex xs12>
              <Intensive></Intensive>
            </v-flex>
          </v-layout>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialogIntensity = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-dialog
      v-model="dialogSleeppy"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline"
        >
          Override Intensity
        </v-card-title>

        <v-card-text>

          <v-layout row wrap>
            <v-flex xs12>
              <Intensive></Intensive>
            </v-flex>
          </v-layout>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialogSleeppy = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
      v-model="dialogTags"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline"
        >
          Tags
        </v-card-title>

        <v-card-text>
          <Tags></Tags>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialogTags = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
    import Tags from './Tags'
    import Intensive from './Intensive'
    export default {
      name: 'PlayersListItem',
      components: {Intensive, Tags},
      props: ['players'],
      data () {
        return {
          dialogComment: false,
          dialogTags: false,
          dialogIntensity: false,
          dialogSleeppy: false
        }
      },
      methods: {
        illnessLogic (item) {
          if (item.illness === true) {
            item.illness = false
          } else {
            this.dialogIntensity = true
            item.illness = true
          }
        },
        sleeppyLogic (item) {
          if (item.sleeppy === true) {
            item.sleeppy = false
          } else {
            this.dialogSleeppy = true
            item.sleeppy = true
          }
        },
        attendanceLogic (item) {
          if (item.attendance === true) {
            item.attendance = false
          } else {
            item.attendance = true
          }
        }
      }
    }
</script>

<style>
  .player-list-item .v-subheader {
    height: 30px;
  }
  .player-list-item .v-slider__thumb {
    width: 36px;
    height: 36px;
    left: -18px;
  }
</style>
