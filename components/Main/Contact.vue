<template>
  <div class="contact mb-12">
    <v-container>
      <v-row>
        <v-col md="5" cols="12">
          <v-card color="#d3e5ff" tile flat>
            <v-card-text>
              <v-list color="transparent">
                <v-list-item v-for="(item , i) in items" :key="i" class="my-8">
                  <v-list-item-avatar tile :color="item.color" size="77">
                    <!-- <v-img :src="item.avatar"></v-img> -->
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="text-h5 font-weight-bold">
                      {{ item.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="subtitle-1 grey--text text--darken-2">
                      {{ item.subtitle }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="7" cols="12">
          <div class="my-2">
            <h6 class="text-uppercase error--text mb-2 subtitle d-inline-block" :class="$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2'">
              TESTIMONIAL
            </h6>
            <h1 class="mt-2 font-weight-bold" :class="$vuetify.breakpoint.mdAndUp ? 'text-h2' : 'text-h4'">
              Send Us A Message
            </h1>
            <v-form>
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
                          dense
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
                          dense
                          label="You Email"
                          :error-messages="errors"
                        />
                      </ValidationProvider>
                    </div>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <div>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="subject"
                        rules="required"
                      >
                        <v-text-field
                          v-model="subject"
                          dense
                          label="Subject"
                          :error-messages="errors"
                        />
                      </ValidationProvider>
                    </div>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <div>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="message"
                        rules="required"
                      >
                        <v-textarea
                          v-model="message"
                          dense
                          label="Message"
                          :error-messages="errors"
                        />
                      </ValidationProvider>
                    </div>
                  </v-col>
                  <v-col sm="6" cols="12" class="py-0">
                    <div>
                      <v-btn color="primary" height="56" class="text-capitalize px-12">
                        Sign Up Now
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </ValidationObserver>
            </v-form>
          </div>
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
      subject: '',
      message: '',
      items: [
        {
          title: 'Our Location',
          subtitle: '123 Street, New York, USA',
          color: 'primary'
        },
        {
          title: 'Call Us',
          subtitle: '+012 345 6789',
          color: 'error'
        },
        {
          title: 'Email Us',
          subtitle: 'info@example.com',
          color: 'warning'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  .subtitle {
    border-bottom: 2px dashed;
  }
}
</style>
