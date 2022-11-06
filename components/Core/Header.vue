<template>
  <div>
    <v-system-bar
      :height="$vuetify.breakpoint.mdAndUp ? 40 : 'auto'"
      dark
      color="#120F2D"
      class="white--text text-center"
    >
      <v-container class="d-flex align-center flex-wrap" :class="$vuetify.breakpoint.mdAndUp ? '' : 'justify-center'">
        <div>
          <v-icon class="white--text">
            mdi-phone
          </v-icon>
          <span class="mx-1">
            +012 345 6789
          </span>
          <v-divider vertical class="mx-3 my-2 white" />
          <v-icon class="white--text">
            mdi-email
          </v-icon>
          <span class="mx-1">
            info@example.com
          </span>
        </div>

        <v-spacer v-if="$vuetify.breakpoint.mdAndUp" />

        <div>
          <v-btn icon small>
            <v-icon size="18" class="ma-0 white--text">
              mdi-facebook
            </v-icon>
          </v-btn>
          <v-btn icon small>
            <v-icon size="18" class="ma-0 white--text">
              mdi-twitter
            </v-icon>
          </v-btn>
          <v-btn icon small>
            <v-icon size="18" class="ma-0 white--text">
              mdi-linkedin
            </v-icon>
          </v-btn>
          <v-btn icon small>
            <v-icon size="18" class="ma-0 white--text">
              mdi-instagram
            </v-icon>
          </v-btn>
          <v-btn icon small>
            <v-icon size="18" class="ma-0 white--text">
              mdi-youtube
            </v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-system-bar>
    <v-app-bar class="nav-bar" height="87" elevation="0" color="white">
      <v-container class="d-flex align-center">
        <h1 class="text-h3 primary--text logo">
          <v-icon class="text-h3 primary--text">
            mdi-book-open-variant
          </v-icon>
          <span>
            EDUKATE
          </span>
        </h1>
        <v-spacer />
        <div v-if="$vuetify.breakpoint.mdAndUp">
          <v-btn
            height="87"
            text
            tile
            nuxt
            to="/"
            class="subtitle-1 font-weight-bold text-capitalize"
            active-class="primary--text"
          >
            Home
          </v-btn>
          <v-btn
            height="87"
            text
            tile
            nuxt
            to="/about"
            class="subtitle-1 font-weight-bold text-capitalize"
            active-class="primary--text"
          >
            About
          </v-btn>
          <v-btn
            height="87"
            text
            tile
            nuxt
            to="/courses"
            class="subtitle-1 font-weight-bold text-capitalize"
            active-class="primary--text"
          >
            Courses
          </v-btn>
          <v-menu offset-y open-on-hover>
            <template #activator="{ on, attrs }">
              <v-btn
                height="87"
                text
                tile
                nuxt
                :to="null"
                class="subtitle-1 font-weight-bold text-capitalize"
                active-class="primary--text"
                v-bind="attrs"
                v-on="on"
              >
                Pages
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                dense
                nuxt
                :to="item.to"
                class="text-capitalize"
                active-class="primary--text"
              >
                <v-list-item-title class="subtitle-1">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            height="87"
            text
            tile
            nuxt
            to="/contact"
            class="subtitle-1 font-weight-bold text-capitalize"
            active-class="primary--text"
          >
            Contact
          </v-btn>
        </div>

        <v-spacer />

        <v-btn
          v-if="$vuetify.breakpoint.mdAndUp"
          tile
          color="primary"
          class="subtitle-1 text-capitalize pa-5"
          @click="$nuxt.$router.push('/')"
        >
          Join Us
        </v-btn>
        <v-card v-else outlined>
          <v-app-bar-nav-icon class="rounded" />
        </v-card>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      Drawer: this.drawer,
      items: [
        { title: 'Course Detail', to: 'course-detail' },
        { title: 'Our Features', to: 'our-features' },
        { title: 'Instructors', to: 'instructors' },
        { title: 'Testimonial', to: 'testimonial' }
      ]
    }
  },
  methods: {
    onDrawer () {
      this.Drawer = !this.Drawer
      this.$emit('drawer', true)
    },
    scroll (refName) {
      const element = document.getElementById(refName)
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  .logo {
    @media (max-width: 1200px) {
      font-size: calc(1.375rem + 1.5vw) !important;

      i {
        vertical-align: sub !important;
      }
    }
    i {
      vertical-align: baseline;
    }
  }
}
</style>
