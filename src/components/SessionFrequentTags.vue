<template>
  <div>
    <v-layout wrap>
      <v-flex xs6 class="px-3" v-for="tag in frequentTags" :key="tag.id">
        <v-chip label color="secondary" text-color="white" class="d-block mx-0 py-2 px-1" @click="addToActiveTags(tag)">
          <v-icon left>label</v-icon>{{ tag.name }}
        </v-chip>
      </v-flex>
      <!--<v-flex xs6 class="pr-3">-->
      <!--<v-chip label color="secondary" text-color="white" class="d-block pa-2 mr-0">-->
      <!--<v-icon left>label</v-icon>Frequent Tag 2-->
      <!--</v-chip>-->
      <!--<v-chip label color="secondary darken-2" text-color="white" class="d-block pa-2 mr-0">-->
      <!--<v-icon left>label</v-icon>Frequent Tag 4-->
      <!--</v-chip>-->
      <!--</v-flex>-->
      <v-flex xs12 class="px-3">
        <v-btn color="primary" block large class="font-weight-bold" @click="dialogAddTag = true"><v-icon left dark>add</v-icon> Add Tag</v-btn>
      </v-flex>
    </v-layout>


    <v-dialog
      v-model="dialogAddTag"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline"
        >
          Add Tag
        </v-card-title>

        <v-card-text>
          <!--<ComboboxTags></ComboboxTags>-->
          <!--<AutocompleteTags></AutocompleteTags>-->
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" @click="dialogAddTag = false">Add</v-btn>
          <v-btn color="primary" flat @click="dialogAddTag = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
    export default {
      name: 'SessionFrequentTags',
      data () {
        return {
          dialogAddTag: false,
          activeTags: []
        }
      },
      computed: {
        tags () {
          return this.$store.getters.getTags
        },
        frequentTags () {
          return this.$store.getters.getFrequentTags
        }
      }
    }
</script>

<style scoped>

</style>
