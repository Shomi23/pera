<template>
<v-app id="app" v-cloak>
  <navComponent></navComponent>
  <div>
    <transition name="fade" mode="in-out">
        <router-view/>
    </transition>
  </div>
  <homeComponent></homeComponent>
  <foot></foot>
</v-app>
</template>
<script>
export default {
  name: 'app',
  components: {
    homeComponent: homeComponent => import('./components/partials/homeComponent.vue'),
    foot: foot => import('./components/partials/footer.vue'),
    navComponent: navComponent => import('./components/partials/navComponent.vue')
  }
}
</script>

<style media="screen" >
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

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

.mainContainer {
  max-width: 1000px !important;
  padding: 0 !important;
}

.margtop {
  margin-top: 100px !important;
}

.fade-enter-active {
  transition: .3s ease-in-out;
}

.fade-leave-active,
.fade-enter {
  transform: translate(4%);
  filter:blur(20px);
  transition: .3s ease-in-out;

}
[v-cloak] {
  display: none
}
</style>
