<template>
  <div>
    <div v-for="(item, index) in sessionList">
      <v-list two-line class="py-0">
        <v-list-tile
          :key="item.title"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon flat color="deep-orange lighten-2">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn icon flat color="deep-orange lighten-2" >
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
  </div>
</template>

<script>
    export default {
      name: 'SessionListItem',
      props: ['sessionList'],
      data () {
        return {

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
