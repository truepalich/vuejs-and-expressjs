<template>
  <div>
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
              <v-btn icon flat class="mb-2 secondary">
                <v-icon>local_hospital</v-icon>
              </v-btn>
              <v-btn icon flat class="mb-2 secondary">
                <v-icon>comment</v-icon>
              </v-btn>
              <v-btn icon flat class="mb-2 secondary">
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

    <!--<v-dialog-->
      <!--v-model="dialog"-->
      <!--width="500"-->
    <!--&gt;-->
      <!--<v-card>-->
        <!--<v-card-title-->
          <!--class="headline"-->
        <!--&gt;-->
          <!--Comments-->
        <!--</v-card-title>-->


        <!--<v-card-text>-->
          <!--<p><b>1.</b> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>-->
          <!--<p><b>2.</b> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>-->
          <!--<p><b>3.</b> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>-->
        <!--</v-card-text>-->

        <!--<v-divider></v-divider>-->

        <!--<v-card-actions>-->
          <!--<v-spacer></v-spacer>-->
          <!--<v-btn-->
            <!--color="primary"-->
            <!--flat-->
            <!--@click="dialog = false"-->
          <!--&gt;-->
            <!--Close-->
          <!--</v-btn>-->
        <!--</v-card-actions>-->
      <!--</v-card>-->
    <!--</v-dialog>-->
  </div>
</template>

<script>
    export default {
      name: 'PlayersListItem',
      props: ['players'],
      data () {
        return {
          // sdsd: ''
        }
      }
    }
</script>

<style scoped>

</style>
