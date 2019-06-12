<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    cache-items
    hide-no-data
    hide-details
    label="Please start typing tag name..."
    prepend-icon="label"
  ></v-autocomplete>
</template>

<script>
    export default {
      name: 'AutocompleteTags',
      data () {
        return {
          loading: false,
          items: [],
          search: null,
          select: null,
          tags: [
            'Tag 5',
            'Tag 6',
            'Tag 7',
            'Tag 8'
          ]
        }
      },
      watch: {
        search (val) {
          val && val !== this.select && this.querySelections(val)
        }
      },
      methods: {
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

<style scoped>

</style>
