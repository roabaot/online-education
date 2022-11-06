<template>
  <div>
    <v-img
      src="/img/header.jpg"
      position="center center"
      gradient="rgba(40, 120, 235, 0.9), rgba(40, 120, 235, 0.9)"
      class="main-header py-md-16 px-8 py-8 px-sm-4 py-xs-8 px-xs-4"
      :height="$vuetify.breakpoint.mdAndUp ? 'calc(100vh - 85px)' : '100%'"
    >
      <v-container class="my-12 py-12 text-center">
        <h1 class="white--text my-4" :class="$vuetify.breakpoint.mdAndUp ? 'text-h3' : 'text-h5'">
          Learn From Home
        </h1>
        <h1 class="white--text mb-5" :class="$vuetify.breakpoint.mdAndUp ? 'text-h1' : 'text-h4'">
          Education Courses
        </h1>
        <div class="mx-auto mb-5 pt-5 header-form">
          <v-row class="form-group mx-sm-n3 mx-n7 flex-wrap align-stretch flex-nowrap">
            <v-select
              :items="courses"
              label="Courses"
              solo
              hide-details
              height="62"
              class="rounded-0 elevation-0 small-input subtitle-1"
            />
            <v-text-field
              label="Search for Course.."
              solo
              hide-details
              height="62"
              class="rounded-0 elevation-0 d-block subtitle-1"
            />
            <v-btn
              color="error"
              tile
              height="62"
              class="rounded-0 elevation-0 d-flex subtitle-1 text-capitalize px-md-12 px-6"
            >
              Search
            </v-btn>
          </v-row>
        </div>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  data () {
    return {
      courses: ['Course 1', 'Course 2', 'Course 3']
    }
  }
}
</script>

<style lang="scss">
.main-header {
  margin-bottom: 90px;
  position: relative;

  .v-image__image {
    // position: relative;
    top: -1px;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 85px;
      left: 0;
      z-index: 1;
      bottom: 0;
      background: url(/img/overlay-bottom.png) bottom center no-repeat;
      background-size: contain;
      transform: translateY(3px);

      @media (min-width: 1904px) {
        background-size: cover;
      }
    }
  }

  .header-form {
    width: 100%;
    max-width: 600px;

    .form-group {
      position: relative;

      .small-input {
        position: relative;
        display: flex;
        max-width: 123.25px;
        width: 123.25px;
        min-width: 123.25px;
      }
    }
  }
}
</style>
