<template>
  <v-card tile flat>
    <v-footer padless class="d-block">
      <v-card color="#120F2D" flat tile class="footer">
        <v-container class="mt-12 pt-12">
          <v-row class="mx-0 mb-12" :class="$vuetify.breakpoint.mdAndUp ? 'mt-8' : ''">
            <v-col md="6" cols="12">
              <a href="/" class="white--text text-decoration-none mx-4 mb-5 d-inline-block font-weight-bold" :class="$vuetify.breakpoint.mdAndUp ? 'text-h4' : 'text-h5'">
                EDUKATE
              </a>
              <p class="grey--text" :class="$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2'">
                Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at et diam est, tempor rebum ipsum sit ea tempor stet et consetetur dolores. Justo stet diam ipsum lorem vero clita diam
              </p>
            </v-col>
            <v-col md="6" cols="12">
              <h2 class="white--text mb-9 font-weight-bold" :class="$vuetify.breakpoint.mdAndUp ? 'text-h5' : 'text-h6'">
                Newsletter
              </h2>
              <v-row class="ma-0">
                <v-col sm="10" cols="9" class="pa-0 ma-0">
                  <v-text-field
                    v-model="search"
                    solo
                    flat
                    hide-details
                    height="62"
                    label="Your Email Address"
                    class="rounded-0"
                  />
                </v-col>
                <v-col sm="2" cols="3" class="pa-0 ma-0">
                  <v-btn color="primary" block tile height="100%" class="text-capitalize">
                    Sign Up
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="mx-0 mb-12">
            <v-col md="4" cols="12">
              <h3 class="text-h5 font-weight-black mb-5 white--text">
                Get In Touch
              </h3>
              <p class="grey--text mb-4 pl-4">
                123 Street, New York, USA
              </p>
              <p class="grey--text mb-4 pl-4">
                +012 345 67890
              </p>
              <p class="grey--text mb-4 pl-4">
                info@example.com
              </p>
            </v-col>
            <v-col md="4" cols="12">
              <h3 class="text-h5 font-weight-black mb-5 white--text">
                Our Courses
              </h3>
              <template v-for="(course, i) in courses">
                <v-hover :key="i" v-slot="{ hover }">
                  <a :href="course.to" :class="{ 'on-hover': hover, 'text-decoration-none': !hover }" class="d-table mb-2 ml-4 grey--text">
                    {{ course.title }}
                  </a>
                </v-hover>
              </template>
            </v-col>
            <v-col md="4" cols="12">
              <h3 class="text-h5 font-weight-black mb-5 white--text">
                Quick Links
              </h3>
              <template v-for="(link, i) in links">
                <v-hover :key="i" v-slot="{ hover }">
                  <a :href="link.to" :class="{ 'on-hover': hover, 'text-decoration-none': !hover }" class="d-table mb-2 ml-4 grey--text">
                    {{ link.title }}
                  </a>
                </v-hover>
              </template>
            </v-col>
          </v-row>
        </v-container>

        <v-divider dark />

        <v-card-text class="text-center grey--text" :class="$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2'">
          <span>Copyright © </span><a href="/" class="white--text text-decoration-none">Your Site Name.</a><span> All Rights Reserved.</span>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      courses: [
        {
          title: 'Web Design',
          to: '/'
        },
        {
          title: 'Apps Design',
          to: '/'
        },
        {
          title: 'Marketing',
          to: '/'
        },
        {
          title: 'Research',
          to: '/'
        },
        {
          title: 'SEO',
          to: '/'
        }
      ],
      links: [
        {
          title: 'Privacy Policy',
          to: '/'
        },
        {
          title: 'Terms & Condition',
          to: '/'
        },
        {
          title: 'Regular FAQs',
          to: '/'
        },
        {
          title: 'Help & Support',
          to: '/'
        },
        {
          title: 'Contact',
          to: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.footer {
  position: relative;
  margin-top: 90px;

  &::before {
    position: absolute;
      content: "";
      width: 100%;
      height: 85px;
      left: 0;
      z-index: 1;
      top: 0;
      background: url(/img/overlay-top.png) top center no-repeat;
      background-size: contain;
      transform: translateY(-3px);

      @media (min-width: 1904px) {
        background-size: cover;
      }
  }
}
</style>
