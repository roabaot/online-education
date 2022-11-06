<template>
  <div class="feature mb-16">
    <v-container class="px-0">
      <v-row class="flex-wrap-reverse mx-0">
        <v-col md="5" cols="12" class="pt-md-12" :class="$vuetify.breakpoint.mdAndUp ? 'pb-12 my-12' : ''">
          <h6 class="text-uppercase error--text mb-2 subtitle d-inline-block" :class="$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2'">
            TESTIMONIAL
          </h6>
          <h1 class="mt-2 mb-8 font-weight-bold" :class="$vuetify.breakpoint.mdAndUp ? 'text-h2' : 'text-h4'">
            What Say Our Students
          </h1>

          <p class="grey--text text--darken-2 subtitle-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo voluptates nemo. Temporibus laborum quidem dolorem nemo animi voluptatem ad vitae dolorum minima architecto nobis eveniet dignissimos magni, labore, blanditiis eos, quas aliquam! Architecto voluptas quibusdam laboriosam, labore quasi nesciunt aliquam perspiciatis asperiores, eligendi quisquam accusantium quas debitis illo sapiente.
          </p>
        </v-col>
        <v-col md="7" cols="12" class="my-12 py-12">
          <v-card>
            <v-card-text>
              <div>
                <v-icon class="primary--text" size="84">
                  mdi-format-quote-open
                </v-icon>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Skilled Instructors',
          color: 'primary'
        },
        {
          title: 'International Certificate',
          color: 'error'
        },
        {
          title: 'Online Classes',
          color: 'warning'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.feature {
  background-color: #d3e5ff;
  .subtitle {
    border-bottom: 2px dashed;
  }
}
</style>
