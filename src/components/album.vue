<template lang="html">
  <v-app>
    <v-container class="mainContainer margtop" grid-list-xl>
      <v-layout  row wrap  class="mb-5 text-xs-center"  >
        <v-flex xs12 v-for="pic in pics" :class="`${pic.size}`" >
          <progressive-img
            :src="getPic(pic.picQuality)"
            :placeholder="getPic(pic.picLowQuality)"
            :blur="30"
            :class="progImg"
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
      title: 'Picture Title'
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

.lg6 img{


}
@keyframes loadIn {
  0% {
    opacity: 0;
    filter: blur(20px);
    transform: scale(0.9);
  }
  60% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

</style>
