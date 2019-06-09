<template>
  <v-combobox
          v-model="chips"
          :items="items"
          label="Frequent tags"
          chips
          clearable
          solo
          multiple
  >
    <template v-slot:selection="data">
      <v-chip
              :selected="data.selected"
              close
              @input="remove(data.item)"
      >
        <strong>{{ data.item }}</strong>
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
  export default {
    name: 'ComboboxTags',
    data () {
      return {
        chips: [],
        items: ['Frequent Tag 1', 'Frequent Tag 2', 'Frequent Tag 3', 'Frequent Tag 4', 'Frequent Tag 5', 'Frequent Tag 6', 'Frequent Tag 7', 'Frequent Tag 8']
      }
    },

    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      }
    }
  }
</script>

<style scoped>

</style>
