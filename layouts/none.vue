<template>
  <v-app>
    <v-main class="bg-color">
      <nuxt />
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
export default {
  name: 'None',
  data () {
    return {
      clipped: false,
      drawer: false,
      miniVariant: false,
      title: 'Anime Legend'
    }
  },
  mounted () {
    this.$meta().refresh()
  }
}
</script>

<style lang="scss">
@import '~/assets/index.scss';
.bg-color {
  background-color: #f1f1f1;
}
</style>
