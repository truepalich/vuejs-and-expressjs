<template>
  <div>
    <div v-for="(item, index) in sessionList" >
      <v-list three-line class="ma-0 pa-0">
        <v-list-tile
          :key="item.title"
          class="py-2"
          :to="{ name: 'Session' }"
        >
          <v-list-tile-content>
            <v-list-tile-title class="ml-1">{{ item.date }} {{ item.sessionType }}</v-list-tile-title>
            <v-list-tile-sub-title>
              <v-chip color="secondary" text-color="white" small v-for="person in item.attendance" :key="person.id">
                <v-avatar>
                  <v-icon>account_circle</v-icon>
                </v-avatar>
                {{ person.name }}
              </v-chip>
            </v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon flat :to="{ name: 'Session' }" class="mb-2">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn icon flat @click.prevent="showCommentDialog(item)">
            <!--<v-btn icon flat @click.prevent="dialog = true">-->
              <v-icon>comment</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider
          v-if="index + 1 < sessionList.length"
          :key="index"
        ></v-divider>
      </v-list>
    </div>

    <v-dialog
      v-model="dialogComment"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline"
        >
          {{ dialogCommentData.date }} - {{ dialogCommentData.sessionType }}
        </v-card-title>

        <v-card-text>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            <br/><b>06/01/2019 - <i>Jason Stadham</i></b>
          </p>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            <br/><b>06/01/2019 - <i>Jason Stadham</i></b>
          </p>

          <v-layout row>
            <v-flex xs9>
              <v-text-field placeholder="Please type new comment..."></v-text-field>
            </v-flex>
            <v-flex xs3>
              <v-btn color="primary darken-1" block>+Add</v-btn>
            </v-flex>
          </v-layout>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialogComment = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
    export default {
      name: 'SessionListItem',
      props: ['sessionList'],
      data () {
        return {
          dialogComment: false,
          dialogCommentData: {}
        }
      },
      methods: {
        showCommentDialog (sessionInfo) {
          this.dialogCommentData = sessionInfo
          this.dialogComment = true
        }
        // toggle (index) {
        //   const i = this.selected.indexOf(index)
        //
        //   if (i > -1) {
        //     this.selected.splice(i, 1)
        //   } else {
        //     this.selected.push(index)
        //   }
        // }
      }
    }
</script>

<style scoped>

</style>
