<template>
  <v-layout wrap>
    <v-flex xs6 class="px-3 tag-item" v-for="tag in frequentTags" :key="tag.id">
      <v-chip class="d-block pa-0 mx-0" color="secondary" text-color="white" disabled>
        {{ tag.name }}
        <i aria-hidden="true" class="v-icon mdi mdi-close-circle theme--dark" @click="removeTag(tag)"></i>
      </v-chip>
    </v-flex>

    <v-flex xs12 class="px-3 py-3">
      <v-btn color="primary" block large class="font-weight-bold" @click="dialogAddTag = true"><v-icon left dark>add</v-icon> Add Tag</v-btn>
    </v-flex>

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
          <v-combobox
            v-model="newTagField"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            cache-items
            hide-no-data
            hide-details
            label="Please start typing tag name..."
            prepend-icon="label"
          ></v-combobox>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" @click="addNewTag(), dialogAddTag = false">Add</v-btn>
          <v-btn color="primary" flat @click="dialogAddTag = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
    export default {
      name: 'SessionFrequentTags',
      data () {
        return {
          dialogAddTag: false,
          loading: false,
          items: [],
          search: null,
          newTagField: '',
          tags: [
            'Frequent Tag 1',
            'Frequent Tag 2',
            'Frequent Tag 3',
            'Frequent Tag 4',
            'Tag 5',
            'Tag 6',
            'Tag 7',
            'Tag 8'
          ]
        }
      },
      watch: {
        search (val) {
          val && val !== this.newTagField && this.querySelections(val)
        }
      },
      computed: {
        allTags () {
          return this.$store.getters.getTags
        },
        frequentTags () {
          return this.$store.getters.getFrequentTags
        }
      },
      methods: {
        removeTag (removeTag) {
          const updatedFrequentTags = []
          this.frequentTags.forEach(function (tag) {
            if (tag.id !== removeTag.id) {
              updatedFrequentTags.push(tag)
            }
          })
          this.$store.commit('setTags', updatedFrequentTags)
        },
        addNewTag: function () {
          if (this.newTagField !== '' && this.newTagField !== null && this.newTagField !== undefined) {
            let obj = {
              name: this.newTagField,
              id: Date.now(),
              frequent: true,
              selected: true
            }
            let frequentTags = this.allTags
            frequentTags.push(obj)
            this.$store.commit('setTags', frequentTags)
            this.newTagField = ''
          }
          return true
        },
        querySelections (v) {
          this.loading = true
          // Simulated ajax query
          setTimeout(() => {
            this.items = this.tags.filter(e => {
              return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
            })
            this.loading = false
          }, 500)
        }
      }
    }
</script>

<style>
  .tag-item .v-chip .v-chip__content {
    display: flex;
  }
  .tag-item .v-chip .v-chip__content .v-icon {
    cursor: pointer;
  }
</style>
