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
          <h4>{{status}}</h4>
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
      status: ''
    }
  },
  created() {
    this.loadQuote()
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
    },
    loadQuote() {
      this.status = 'loading...'
      var self = this
      this.axios.get('gs://milan-petrovic.appspot.com/')
      .then(function (response) {
        console.log(response);
      })
      .catch(function(error){
        this.status = 'error'
      })
    }
  }
}
</script>

<style scoped lang="css">
@keyframes loadIn {
  0% {
    opacity: 0;
    filter: blur(20px);

  }
  60% {
    opacity: 0;

  }
  100% {
    opacity: 1;

  }
}

</style>
