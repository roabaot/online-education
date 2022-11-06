<template>
  <div class="courses pt-12">
    <v-container>
      <v-row justify="center">
        <v-col md="6" cols="12" class="text-center">
          <h6 class="text-uppercase error--text mb-4 subtitle d-inline-block" :class="$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2'">
            Our Courses
          </h6>
          <h1 class="font-weight-bold mb-6" :class="$vuetify.breakpoint.mdAndUp ? 'text-h3' : 'text-h5'">
            Checkout New Releases Of Our Courses
          </h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.courses {
  .subtitle {
    border-bottom: 2px dashed;
  }
}
</style>
