<template>
  <div class="instructors py-12">
    <v-container>
      <div class="text-center">
        <h6 class="text-uppercase error--text mb-4 subtitle d-inline-block" :class="$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2'">
          instructors
        </h6>
        <h1 class="font-weight-bold mb-6" :class="$vuetify.breakpoint.mdAndUp ? 'text-h3' : 'text-h5'">
          Meet Our Instructors
        </h1>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.instructors {
  .subtitle {
    border-bottom: 2px dashed;
  }
}
</style>
