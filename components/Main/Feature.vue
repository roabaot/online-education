<template>
  <div class="feature mb-16">
    <v-container>
      <v-row class="flex-wrap-reverse">
        <v-col md="7" cols="12" class="my-12 pt-md-12 pb-12">
          <h6 class="text-uppercase error--text mb-2 subtitle d-inline-block" :class="$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2'">
            WHY CHOOSE US?
          </h6>
          <h1 class="mt-2 mb-8 font-weight-bold" :class="$vuetify.breakpoint.mdAndUp ? 'text-h2' : 'text-h4'">
            First Choice For Online Education Anywhere
          </h1>

          <v-list color="transparent">
            <v-list-item v-for="(item , i) in items" :key="i" class="mb-12">
              <v-list-item-avatar tile :color="item.color" size="77">
                <!-- <v-img :src="item.avatar"></v-img> -->
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="text-h5 font-weight-bold">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col md="5" cols="12" class="py-0">
          <div class="fill-height feature-img">
            <img src="/img/feature.jpg" alt="feature" class="feature-img">
          </div>
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

  .feature-img {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .subtitle {
    border-bottom: 2px dashed;
  }
}
</style>
