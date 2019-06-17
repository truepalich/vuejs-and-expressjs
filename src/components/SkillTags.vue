<template>
  <div>
    <v-layout row>
      <v-flex xs9>
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
          class="mt-0"
        ></v-combobox>
      </v-flex>
      <v-flex xs3>
        <v-btn color="primary darken-1" @click="addNewTag()" block class="ml-2">+Add</v-btn>
      </v-flex>
    </v-layout>
    <v-layout wrap mt-2>
      <!--{{currentSkill}}-->
      <v-flex xs6 class="tag-item pt-2" v-for="tag in tagsOfSkill" :key="tag.id">
        <v-chip class="d-block pa-0 ma-0 mr-1 ml-1" color="secondary" text-color="white" disabled>
          {{ tag.name }}
          <i aria-hidden="true" class="v-icon mdi mdi-close-circle theme--dark" @click="removeTag(tag)"></i>
        </v-chip>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'SkillTags',
    props: ['currentSkill'],
    data () {
      return {
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
      allSkills () {
        return this.$store.getters.getSkills
      },
      allTags () {
        return this.$store.getters.getTags
      },
      tagsOfSkill () {
        const updatedTagsOfSkill = []
        const allTags = this.allTags
        if (this.currentSkill.tags && this.currentSkill.tags.length > 0) {
          this.currentSkill.tags.forEach(function (cst) {
            allTags.forEach(function (tag) {
              if (cst === tag.id) {
                updatedTagsOfSkill.push(tag)
              }
            })
          })
        }
        return updatedTagsOfSkill
      }
    },
    created: function () {
      // this.currentSkill.tags.forEach(function (tag) {
      //   console.log('asdasdas')
      // })
      // console.log(this.currentSkill)
    },
    methods: {
      removeTag (removeTag) {
        const updatedTagsOfSkill = this.tagsOfSkill
        const resultTagsOfSkill = []
        if (removeTag) {
          updatedTagsOfSkill.forEach(function (cst) {
            if (cst.id !== removeTag.id) {
              resultTagsOfSkill.push(cst.id)
            }
          })
        }
        this.allSkills.forEach(function (skill) {
          if (skill.id === this.id) {
            skill.tags = resultTagsOfSkill
          }
        }, this.currentSkill)
        this.$store.commit('setSkills', this.allSkills)
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
