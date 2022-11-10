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
      <div>
        <swiper class="swiper" :options="swiperOption" ref="swiper">
          <swiper-slide
            v-for="(instructor, i) in instructors"
            :key="i"
            class="instructor-item"
          >
            <v-card class="instructor-card mb-1">
              <v-img :src="instructor.img" class="instructor-img" />

              <v-card-title class="justify-center">
                {{ instructor.name }}
              </v-card-title>
              <v-card-subtitle>
                {{ instructor.work }}
              </v-card-subtitle>
              <v-card-text class="px-0">
                <v-btn icon small>
                  <v-icon size="18" class="ma-0 blue--text">
                    mdi-facebook
                  </v-icon>
                </v-btn>
                <v-btn icon small>
                  <v-icon size="18" class="ma-0 blue--text">
                    mdi-twitter
                  </v-icon>
                </v-btn>
                <v-btn icon small>
                  <v-icon size="18" class="ma-0 blue--text">
                    mdi-linkedin
                  </v-icon>
                </v-btn>
                <v-btn icon small>
                  <v-icon size="18" class="ma-0 blue--text">
                    mdi-instagram
                  </v-icon>
                </v-btn>
                <v-btn icon small>
                  <v-icon size="18" class="ma-0 blue--text">
                    mdi-youtube
                  </v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      },
      instructors: [
        {
          name: 'Alexa Jeams',
          work: 'Backend developer',
          img: 'https://i.postimg.cc/zBJ62rC3/team-1.jpg'
        },
        {
          name: 'Frank Peter',
          work: 'UI/Ux',
          img: 'https://i.postimg.cc/Kjf2VbwY/team-2.jpg'
        },
        {
          name: 'Tilda Smitt',
          work: 'Frontend Developer',
          img: 'https://i.postimg.cc/SN2NGdDh/team-3.jpg'
        },
        {
          name: 'Andrew Joe',
          work: 'Devops',
          img: 'https://i.postimg.cc/ydyk0Jjk/team-4.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  height: auto;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
  }
}

.instructors {
  .subtitle {
    border-bottom: 2px dashed;
  }
}

.instructor-item {
  .instructor-card {
    .instructor-img {
      width: 100%;
    }
  }
}
</style>
