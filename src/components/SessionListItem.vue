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
            <v-list-tile-title class="ml-1">{{ item.date }} - <span class="primary--text">{{ item.sessionType }}</span></v-list-tile-title>
            <v-list-tile-sub-title>
              <div v-if="item.attendance">
                <v-chip color="secondary" text-color="white" small v-for="person in item.attendance" :key="person.id">
                  {{ person.name }}
                </v-chip>
              </div>
              <div v-else>
                <v-avatar class="mt-2 mr-2 mb-2" v-for="p in item.attendance2" :key="p.id"
                  size="26px"
                >
                  <img
                    v-if="p.avatar"
                    :src="p.avatar"
                    alt="Avatar"
                  >
                </v-avatar>
              </div>

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
          class="headline d-block"
        >
          <span class="d-block">{{ dialogCommentData.date }}</span> <span class="primary--text d-block">{{ dialogCommentData.sessionType }}</span>
        </v-card-title>

        <v-card-text>
          <p v-for="comment in comments">
            {{ comment.text }}
            <br/><b>06/01/2019, 12:12 PM - <i>Jason Stadham</i></b>
          </p>
          <v-layout row>
            <v-flex xs12>
              <v-text-field v-model="newCommentField" placeholder="Please type new comment..."></v-text-field>
            </v-flex>
          </v-layout>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" @click="addNewComment()">Add</v-btn>
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
          dialogCommentData: {},
          newCommentField: ''
        }
      },
      computed: {
        comments () {
          return this.$store.getters.getComments
        }
      },
      methods: {
        showCommentDialog (sessionInfo) {
          this.dialogCommentData = sessionInfo
          this.dialogComment = true
        },
        addNewComment: function () {
          if (this.newCommentField !== '' && this.newCommentField !== null && this.newCommentField !== undefined) {
            let obj = {
              text: this.newCommentField,
              id: Date.now()
            }
            let allComments = this.comments
            allComments.push(obj)
            this.$store.commit('setComments', allComments)
            this.newCommentField = ''
          }
          return true
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
