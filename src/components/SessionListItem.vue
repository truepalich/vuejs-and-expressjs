<template>
  <div>
    <div v-for="(item, index) in sessionList" >
      <v-list two-line class="ma-0 pa-0">
        <v-list-tile
          :key="item.title"
          class="py-2"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon flat :to="{ name: 'Session' }" class="mb-2">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn icon flat @click="dialog = true">
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
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline"
        >
          Comments
        </v-card-title>


        <v-card-text>
          <p><b>1.</b> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <p><b>2.</b> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <p><b>3.</b> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
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
          dialog: false
        }
      },
      methods: {
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
