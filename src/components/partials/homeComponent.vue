<template>
<v-app appear>
  <v-container class="homeContainer margtop" grid-list-xl>
    <v-layout row wrap class="text-xs-center">
      <v-flex xs12 md6 v-for="pic in pics" :key="pic.id" @click="moveTop">
        <router-link :to="'/album/'+ pic.id">
          <div>
            <progressive-img
              :src="getPic(pic.thumbnailQ)"
              :placeholder="getPic(pic.thumbnailLowQ)"
              :blur="30"
              >
            </progressive-img>
            <h4>{{title}}</h4>
          </div>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>
<script>
export default {
  data() {
    return {
      title: 'Picture Title'
    }
  },
  methods: {
    getPic(pic) {
      return  require('@/assets/img/' + pic)
    },
    moveTop() {
      window.scrollTo(0, 0)
    }
  },
  computed: {
    pics() {
      return this.$store.getters.loadAlbums
    }
  }
}
</script>
<style scoped>
.homeContainer {
  max-width: 1000px !important;
  padding: 0;
}
a{
  text-decoration: none;
  color:black;
}
</style>
