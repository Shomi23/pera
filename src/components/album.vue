<template lang="html">
  <v-app>
    <v-container class="mainContainer margtop" grid-list-xl>
      <v-layout  row wrap  class="mb-5 text-xs-center"  >
        <v-flex  v-for="pic in pics" :class="`${pic.size}`" >
          <clazy-load :src="getPic(pic.name)">
            <figure class="image-wrapper" slot="image">
              <img :src='getPic(pic.name)'>
                <h3>{{title}}</h3>
            </figure>
            <v-flex fill-height slot="placeholder holder" >
              <v-progress-circular color="black"></v-progress-circular>
            </v-flex>
        </clazy-load>
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
.image-wrapper{
  position: relative;
}
.holder{
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  transition: all 100ms ease-in;
}
.loading,.loaded{
  animation: loadIn 1s ease-in-out!important;
  transition: 1s ease-in-out !important;
}
.lg6 img{
  max-height: 630px;

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
