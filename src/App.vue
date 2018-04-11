<template>
<v-app id="app" v-cloak>
  <navComponent></navComponent>
    <router-view/>
  <homeComponent></homeComponent>
</v-app>
</template>
<script>
export default {
  name: 'app',
  components: {
    homeComponent: homeComponent =>
      import ('./components/homeComponent.vue'),
    navComponent: navComponent =>
      import ('./components/navComponent.vue')
  }
}
</script>

<style media="screen" >
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css');
@font-face {
  font-family: 'Roboto Mono', monospace;
  src: url('./assets/fonts/RobotoMono-Regular.ttf') format('ttf');
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

.application.theme--light {
  background: #fcfcfc !important;
}

img {
  max-width: 100%;
}

.container {
  padding: 0 !important;
}

.margtop {
  margin-top: 100px !important;
}


[v-cloak] {
  display: none
}
</style>
