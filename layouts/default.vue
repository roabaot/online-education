<template>
  <v-app id="app">
    <!-- <CoreDrawer v-if="$vuetify.breakpoint.smAndDown" :drawer="drawer" @drawer="drawer = $event" /> -->
    <CoreHeader :drawer="drawer" @drawer="drawer = $event" />
    <!-- <SideBar /> -->
    <v-main id="main">
      <nuxt />
    </v-main>
    <CoreFooter />
    <!-- <Snackbar /> -->
  </v-app>
</template>

<script>
export default {
  name: 'Default',
  data () {
    return {
      title: 'LODGE',
      drawer: false
    }
  },
  mounted () {
    this.$meta().refresh()
  }
}
</script>

<style lang="scss">
@import '~/assets/index.scss';
</style>
