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

      <v-flex xs4 class="pt-3 text-xs-center" v-for="item in skills" :key="item.name">
        <v-badge overlap color="secondary" >
          <template v-slot:badge v-if="item.tags.length > 0">
            <v-icon>local_offer</v-icon>
          </template>
          <v-avatar
                  :class="[item.tags.length > 0 ? 'primary' : 'secondary']"
                  @click="addTagsToSkill(item)"
          >
            <v-icon dark>offline_bolt</v-icon>
          </v-avatar>
        </v-badge>
        <p class="white--text">{{ item.name }}</p>



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
              <SkillTags :currentSkill=item ></SkillTags>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="dialogTags = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>



      </v-flex>

      <v-flex xs8 offset-xs2 class="px-3 pt-3">
        <v-btn color="primary" block large class="font-weight-bold" @click="dialogSaveSession = true">Finish</v-btn>
      </v-flex>

      <v-flex xs12 class="pa-2"></v-flex>

      <!--<v-dialog-->
        <!--v-model="dialogAddTag"-->
        <!--width="500"-->
      <!--&gt;-->
        <!--<v-card>-->
          <!--<v-card-title-->
            <!--class="headline"-->
          <!--&gt;-->
            <!--Tags-->
          <!--</v-card-title>-->

          <!--<v-card-text>-->
            <!--<v-layout row>-->
              <!--<v-flex xs9>-->
                <!--<v-text-field v-model="newTagField" placeholder="Create a new tag..." v-on:keyup.13="addNewTag()"></v-text-field>-->
              <!--</v-flex>-->
              <!--<v-flex xs3>-->
                <!--&lt;!&ndash;<v-btn color="primary darken-1" @click="dialogAddTag = false" block>+Add</v-btn>&ndash;&gt;-->
                <!--<v-btn color="primary darken-1" @click="addNewTag()" block>+Add</v-btn>-->
              <!--</v-flex>-->
            <!--</v-layout>-->

            <!--<v-layout wrap>-->
              <!--<v-flex xs6 v-for="item in tags" :key="item.name">-->
                <!--<v-chip v-if="consistTags" label color="secondary darken-2" text-color="white" class="d-block pa-2 ml-0">-->
                  <!--<v-icon left>label</v-icon>{{ item.name }}-->
                <!--</v-chip>-->

                <!--<v-chip v-else label color="secondary" text-color="white" class="d-block pa-2 ml-0">-->
                  <!--<v-icon left>label</v-icon>{{ item.name }}-->
                <!--</v-chip>-->
              <!--</v-flex>-->
            <!--</v-layout>-->

          <!--</v-card-text>-->

          <!--<v-divider></v-divider>-->

          <!--<v-card-actions>-->
            <!--<v-spacer></v-spacer>-->
            <!--&lt;!&ndash;<v-btn color="primary" flat @click="dialogAddTag = false; consistTags = false">Close</v-btn>&ndash;&gt;-->
            <!--<v-btn color="primary" flat @click="dialogAddTag = false; consistTags = false; clickedSkill = {}">Close</v-btn>-->
          <!--</v-card-actions>-->
        <!--</v-card>-->
      <!--</v-dialog>-->









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
    import SkillTags from '../components/SkillTags'
    export default {
      name: 'SessionFocus',
      components: {SkillTags},
      data () {
        return {
          dialogTags: false,
          dialogSaveSession: false,
          dialogAddTag: false,
          consistTags: false,
          newSkillField: '',
          newTagField: '',
          clickedSkill: {}
        }
      },
      methods: {
        // showDialogOfTags: function (tags) {
        //   if (tags === 'consistTags') {
        //     this.consistTags = true
        //   } else {
        //     this.consistTags = false
        //   }
        //   this.dialogAddTag = true
        // },

        addTagsToSkill: function (skill) {
          this.dialogTags = true
        },
        showTagsOfSkill: function (skill) {
          // this.clickedSkill = skill

          if (skill.tags.length > 0) {
            this.consistTags = true
          } else {
            this.consistTags = false
          }
          this.dialogAddTag = true
          // if (tagsArr === 'consistTags') {
          //   this.consistTags = true
          // } else {
          //   this.consistTags = false
          // }
          // this.dialogAddTag = true
        },
        addNewTag: function () {
          if (this.newTagField !== '' && this.newTagField !== null && this.newTagField !== undefined) {
            let obj = {
              name: this.newTagField,
              id: Date.now()
            }
            let allTags = this.tags
            allTags.unshift(obj)
            this.$store.commit('setTags', allTags)
            this.newTagField = ''
          }
          return true
        }
      },
      computed: {
        skills () {
          return this.$store.getters.getSkills
        },
        tags () {
          // let resultTags = []
          // let tagsForSkill = this.$store.getters.getTags
          // for (let item of tagsForSkill) {
          //   for (let ct of this.clickedSkill.tags) {
          //     if (item.id === ct) {
          //       resultTags.push({name: item, active: true})
          //     } else {
          //       resultTags.push({name: item, active: false})
          //     }
          //   }
          //   break
          // }
          // return resultTags
          return this.$store.getters.getTags
        }
      }
    }
</script>

<style scoped>

</style>
