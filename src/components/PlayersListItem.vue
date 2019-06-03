<template>
  <div>

    <!--<v-list>-->
      <!--<v-list-group-->
        <!--v-for="item in items"-->
        <!--:key="item.title"-->
        <!--v-model="item.active"-->
        <!--:prepend-icon="item.action"-->
        <!--no-action-->
      <!--&gt;-->
        <!--<template v-slot:activator>-->
          <!--<v-list-item-content>-->
            <!--<v-list-item-title v-text="item.title"></v-list-item-title>-->
          <!--</v-list-item-content>-->
        <!--</template>-->

        <!--<v-list-item-->
          <!--v-for="subItem in item.items"-->
          <!--:key="subItem.title"-->
          <!--@click=""-->
        <!--&gt;-->
          <!--<v-list-item-content>-->
            <!--<v-list-item-title v-text="subItem.title"></v-list-item-title>-->
          <!--</v-list-item-content>-->
        <!--</v-list-item>-->
      <!--</v-list-group>-->
    <!--</v-list>-->

    <div v-for="(item, index) in players" >
      <v-list two-line class="ma-0 pa-0">
        <v-list-tile
          :key="item.title"
          class="py-2"
        >
          <v-list-tile-avatar class="d-flex column" size="55">
            <img :src="item.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content class="ml-4">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">
              <v-btn icon flat class="mb-2 secondary">
                <v-icon>local_hotel</v-icon>
              </v-btn>
              <v-btn icon flat class="mb-2 secondary" @click="dialogIntensity = true">
                <v-icon>local_hospital</v-icon>
              </v-btn>
              <v-btn icon flat class="mb-2 secondary" @click="dialogComment = true">
                <v-icon>comment</v-icon>
              </v-btn>
              <v-btn icon flat class="mb-2 secondary" @click="dialogAddTag = true">
                <v-icon>local_offer</v-icon>
              </v-btn>
            </v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action class="font-weight-bold">
            {{ item.number }}
          </v-list-tile-action>
        </v-list-tile>
        <v-divider
          v-if="index + 1 < players.length"
          :key="index"
        ></v-divider>
      </v-list>
    </div>

    <v-dialog
      v-model="dialogIntensity"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline"
        >
          Override Intensity?
        </v-card-title>

        <v-card-text>
          <v-btn color="primary darken-1" class="ml-0" @click="dialogIntensity = false">No</v-btn>

          <v-layout row wrap>
            <v-flex xs12 sm6 md6>
              <v-radio-group v-model="intensity" row>
                <v-radio
                  label="Light"
                  color="light-blue"
                  value="light"
                ></v-radio>
                <v-radio
                  label="Intermediate"
                  color="green"
                  value="intermediate"
                ></v-radio>
                <v-radio
                  label="Hard"
                  color="orange"
                  value="hard"
                ></v-radio>
              </v-radio-group>
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
            <v-chip label color="secondary darken-2" text-color="white" class="d-block pa-2 ml-0">
              <v-icon left>label</v-icon>Frequent Tag 7
            </v-chip>
            </v-flex>
            <v-flex xs6>
              <v-chip label color="secondary" text-color="white" class="d-block pa-2 mr-0">
                <v-icon left>label</v-icon>Frequent Tag 2
              </v-chip>
              <v-chip label color="secondary darken-2" text-color="white" class="d-block pa-2 mr-0">
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
          <v-btn color="primary" flat @click="dialogAddTag = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
    export default {
      name: 'PlayersListItem',
      props: ['players'],
      data () {
        return {
          dialogComment: false,
          dialogAddTag: false,
          dialogIntensity: false,
          intensity: 'light',
          items: [
            {
              action: 'local_activity',
              title: 'Attractions',
              items: [
                { title: 'List Item' }
              ]
            },
            {
              action: 'restaurant',
              title: 'Dining',
              active: true,
              items: [
                { title: 'Breakfast & brunch' },
                { title: 'New American' },
                { title: 'Sushi' }
              ]
            },
            {
              action: 'school',
              title: 'Education',
              items: [
                { title: 'List Item' }
              ]
            },
            {
              action: 'directions_run',
              title: 'Family',
              items: [
                { title: 'List Item' }
              ]
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
