<template lang="html">
  <v-toolbar fixed flat  class="mainToolbar">
    <v-container class="homeContainer">
      <v-layout class="rowz text-xs-center">
        <v-flex xs12>
          <div class="titl">
            <router-link class="titleMain" to="/">
              <h1 class="titleMain">Milan Petrovic</h1>
            </router-link>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style scoped lang="css">
h1{
  font-size: 30px;
}
.mainToolbar {
  height: 100px;
  background-color: #fcfcfc !important;
  line-height: 100px!important;
}
.titleMain
 {
  cursor: pointer;
  text-decoration: none;
  color: black;
}

</style>
