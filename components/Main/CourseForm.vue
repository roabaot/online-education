<template>
  <div class="course-form">
    <v-container>
      <v-row justify="center">
        <v-col md="6" cols="12" class="py-12">
          <v-card class="card-form">
            <v-card-text class="text-center">
              <h4 class="font-weight-bold black--text" :class="$vuetify.breakpoint.mdAndUp ? 'text-h4' : 'text-h5'">
                30% Off For New Students
              </h4>
              <v-form class="mt-4 contact-form">
                <ValidationObserver ref="observer">
                  <v-row class="pt-6">
                    <v-col sm="6" cols="12" class="py-0">
                      <div>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="name"
                          rules="required"
                        >
                          <v-text-field
                            v-model="name"
                            solo
                            flat
                            filled
                            background-color="#ECF4FF"
                            label="Your Name"
                            :error-messages="errors"
                          />
                        </ValidationProvider>
                      </div>
                    </v-col>
                    <v-col sm="6" cols="12" class="py-0">
                      <div>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="email"
                          rules="required|email"
                        >
                          <v-text-field
                            v-model="email"
                            solo
                            flat
                            filled
                            background-color="#ECF4FF"
                            label="You Email"
                            :error-messages="errors"
                          />
                        </ValidationProvider>
                      </div>
                    </v-col>
                    <v-col sm="6" cols="12" class="py-0">
                      <div>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="name"
                          rules="required"
                        >
                          <v-autocomplete
                            v-model="course"
                            :items="courses"
                            item-text="course"
                            item-value="id"
                            filled
                            solo
                            flat
                            background-color="#ECF4FF"
                            label="Select Course"
                            :error-messages="errors"
                          />
                        </ValidationProvider>
                      </div>
                    </v-col>
                    <v-col sm="6" cols="12" class="py-0">
                      <div>
                        <v-btn color="primary" block height="56" class="text-capitalize">
                          Sign Up Now
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </ValidationObserver>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate'
setInteractionMode('eager')
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      name: '',
      email: '',
      course: '',
      courses: [
        {
          id: 1,
          course: 'course 1'
        },
        {
          id: 2,
          course: 'course 2'
        },
        {
          id: 3,
          course: 'course 3'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.course-form {
  background-color: #d3e5ff;
  .card-form {
    box-shadow: 0px 0px 56px 1px rgb(0 0 0 / 8%) !important;
  }
}
</style>
