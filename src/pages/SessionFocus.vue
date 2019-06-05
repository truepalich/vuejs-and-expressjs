<template>
  <v-container class="pa-0">
    <v-layout wrap>

      <v-toolbar color="secondary">
        <v-btn icon flat :to="{ name: 'LogIndividuals' }" class="mb-2">
          <v-icon>navigate_before</v-icon>
        </v-btn>
        <v-toolbar-title class="ml-1">Session Focus</v-toolbar-title>
      </v-toolbar>

      <v-flex xs12 class="pa-2"></v-flex>

      <v-flex xs4 class="pt-3 text-xs-center" v-for="item in skills" v-bind:key="item.name">
        <v-badge overlap color="secondary" >
          <template v-slot:badge v-if="item.tags.length > 0">
            <v-icon>local_offer</v-icon>
          </template>
          <v-avatar
            v-if="item.tags.length > 0"
            color="primary"
            @click="showDialogOfTags('consistTags')"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
          <v-avatar
            v-else
            color="secondary"
            @click="showDialogOfTags"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>

        </v-badge>
        <p class="white--text">{{ item.name }}</p>
      </v-flex>

      <v-flex xs4 class="pt-3 text-xs-center" >
        <v-badge overlap color="secondary" >
          <v-avatar
            color="primary darken-1"
            @click="dialogAddSkill = true"
          >
            <v-icon dark>add_circle</v-icon>
          </v-avatar>

        </v-badge>
        <p class="white--text">Add Skill</p>
      </v-flex>

      <v-flex xs8 offset-xs2 class="px-3 pt-3">
        <v-btn color="primary" block large class="font-weight-bold" @click="dialogSaveSession = true">Finish</v-btn>
      </v-flex>

      <v-flex xs12 class="pa-2"></v-flex>

      <v-dialog
        v-model="dialogAddTag"
        width="500"
      >
        <v-card>
          <v-card-title
            class="headline"
          >
            Tags
          </v-card-title>

          <v-card-text>
            <v-layout row>
              <v-flex xs9>
                <v-text-field placeholder="Create a new tag..."></v-text-field>
              </v-flex>
              <v-flex xs3>
                <v-btn color="primary darken-1" @click="dialogAddTag = false" block>+Add</v-btn>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs6>
                <v-chip label color="secondary" text-color="white" class="d-block pa-2 ml-0">
                  <v-icon left>label</v-icon>Frequent Tag 1
                </v-chip>
                <v-chip label color="secondary" text-color="white" class="d-block pa-2 ml-0">
                  <v-icon left>label</v-icon>Frequent Tag 3
                </v-chip>
                <v-chip label color="secondary" text-color="white" class="d-block pa-2 ml-0">
                  <v-icon left>label</v-icon>Frequent Tag 5
                </v-chip>
                <v-chip label v-if="consistTags" color="secondary darken-2" text-color="white" class="d-block pa-2 ml-0">
                  <v-icon left>label</v-icon>Frequent Tag 7
                </v-chip>
                <v-chip label v-else color="secondary" text-color="white" class="d-block pa-2 ml-0">
                  <v-icon left>label</v-icon>Frequent Tag 7
                </v-chip>
              </v-flex>
              <v-flex xs6>
                <v-chip label color="secondary" text-color="white" class="d-block pa-2 mr-0">
                  <v-icon left>label</v-icon>Frequent Tag 2
                </v-chip>

                <v-chip label v-if="consistTags" color="secondary darken-2" text-color="white" class="d-block pa-2 mr-0">
                  <v-icon left>label</v-icon>Frequent Tag 4
                </v-chip>
                <v-chip label v-else color="secondary" text-color="white" class="d-block pa-2 mr-0">
                  <v-icon left>label</v-icon>Frequent Tag 4
                </v-chip>

                <v-chip label color="secondary" text-color="white" class="d-block pa-2 mr-0">
                  <v-icon left>label</v-icon>Frequent Tag 6
                </v-chip>
                <v-chip label color="secondary" text-color="white" class="d-block pa-2 mr-0">
                  <v-icon left>label</v-icon>Frequent Tag 8
                </v-chip>
              </v-flex>
            </v-layout>

          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialogAddTag = false; consistTags = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


      <v-dialog
        v-model="dialogAddSkill"
        width="500"
      >
        <v-card>
          <v-card-title
            class="headline"
          >
            Add Skill
          </v-card-title>

          <v-card-text>
            <v-layout row>
              <v-flex xs9>
                <v-text-field v-model="newSkillField" placeholder="Create a new skill..."></v-text-field>
              </v-flex>
              <v-flex xs3>
                <!--<v-btn color="primary darken-1" @click="dialogAddSkill = false" block>+Add</v-btn>-->
                <v-btn color="primary darken-1" @click="addNewSkill()" block>+Add</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialogAddSkill = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


      <v-dialog
        v-model="dialogSaveSession"
        width="500"
      >
        <v-card>
          <v-card-title
            class="headline"
          >
            Save session Log?
          </v-card-title>

          <v-card-text>

            <v-layout row>
              <v-flex xs12>
                You can edit or add comments from the home screen
              </v-flex>
            </v-layout>

          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn color="primary darken-1" :to="{ name: 'Sessions' }" block>Yes</v-btn>
            <v-btn color="primary lighten-1" @click="dialogSaveSession = false" block>No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: 'SessionFocus',
      data () {
        return {
          dialogSaveSession: false,
          dialogAddSkill: false,
          dialogAddTag: false,
          consistTags: false,
          newSkillField: ''
        }
      },
      methods: {
        showDialogOfTags: function (tags) {
          if (tags === 'consistTags') {
            this.consistTags = true
          } else {
            this.consistTags = false
          }
          this.dialogAddTag = true
        },

        addNewSkill: function () {
          if (this.newSkillField !== '' && this.newSkillField !== null && this.newSkillField !== undefined) {
            let obj = {
              name: this.newSkillField,
              tags: []
            }
            let allSkills = this.skills
            allSkills.push(obj)
            this.$store.commit('setSkills', allSkills)
            this.newSkillField = ''
          }
          this.dialogAddSkill = false
          return true
        }
      },
      computed: {
        skills () {
          return this.$store.getters.getSkills
        }
      }
    }
</script>

<style scoped>

</style>
