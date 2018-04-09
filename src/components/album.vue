<template lang="html">
  <v-app>
    <v-container class="mainContainer margtop" grid-list-xl>
      <v-layout  row wrap  class="mb-5 text-xs-center"  >
        <v-flex xs12 v-for="pic in pics" :class="`${pic.size}`" >
          <progressive-img
            :src="getPic(pic.picQuality)"
            :placeholder="getPic(pic.picLowQuality)"
            :blur="30"
            >
          </progressive-img>
          <h4>{{title}}</h4>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: 'Picture Title',
    }
  },
  computed: {
    album() {
      return this.$store.getters.LoadedAlbum(this.id)
    },
    pics() {
      return this.album.slike
    }
  },
  methods: {
    getPic(pic) {
      return require(`@/assets/img/${pic}`)
    }
  }
}
</script>

<style scoped lang="css">
.mainContainer {
  max-width: 1000px !important;
  padding: 0 !important;

}


</style>
