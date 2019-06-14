<template>
  <v-bottom-nav
    :active.sync="intensive"
    :color="color"
    :value="true"
    dark
    shift
  >
    <v-btn dark>
      <span>Observing</span>
      <v-icon>mdi-battery-20</v-icon>
    </v-btn>

    <v-btn dark>
      <span>Medical rehab</span>
      <v-icon>mdi-battery-40</v-icon>
    </v-btn>

    <v-btn dark>
      <span>Light contact</span>
      <v-icon>mdi-battery-60</v-icon>
    </v-btn>

    <v-btn dark>
      <span>No contact</span>
      <v-icon>mdi-battery-80</v-icon>
    </v-btn>

    <v-btn dark>
      <span>Full contact</span>
      <v-icon>mdi-battery</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
    export default {
      name: 'Intensive',
      data () {
        return {
          intensive: 2
        }
      },
      computed: {
        color () {
          switch (this.intensive) {
            case 0: return 'black'
            case 1: return 'deep-orange'
            case 2: return 'red darken-1'
            case 3: return 'yellow darken-3'
            case 4: return 'green'
          }
        }
      }
    }
</script>

<style>
  .intensity-slider .v-slider__ticks span {
    font-size: 14px;
    text-align: center;
    line-height: 15px;
    white-space: normal;
  }
  .intensity-slider .v-slider__ticks>span {
    top: 17px;
  }
</style>
