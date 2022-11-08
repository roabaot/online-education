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
    <div>
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="course in courses" :key="course.id" class="courses-item">
            <img :src="course.img">
            <div class="courses-text white--text">
              <h4 class="text-center text-white px-4" :class="$vuetify.breakpoint.mdAndUp ? 'text-h5' : 'title'">{{ course.title }}</h4>
              <div class="courses-footer mt-4">
                <div class="d-flex justify-content-between pa-6">
                  <span class="text-white"><i class="fa fa-user mr-2"></i>Jhon Doe</span>
                  <span class="text-white"><i class="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                </div>
              </div>
              <div class="courses-actions white text-center py-6" >
                <v-btn color="primary">Course Detail</v-btn>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </client-only>
    </div>
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
        slidesPerView: 5,
        spaceBetween: 0,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      },
      courses: [
        {
          id: 1,
          title: 'Web Design Courses for Beginner',
          img: 'https://i.postimg.cc/NfSL9xqk/courses-1.jpg'
        },
        {
          id: 2,
          title: 'Web Development Courses for Beginner',
          img: 'https://i.postimg.cc/Dy8P35Pr/courses-2.jpg'
        },
        {
          id: 3,
          title: 'Programming Language Courses for Children',
          img: 'https://i.postimg.cc/sXBK4rDN/courses-3.jpg'
        },
        {
          id: 4,
          title: 'Electronic Marketing Courses',
          img: 'https://i.postimg.cc/ZRttNVJp/courses-4.jpg'
        },
        {
          id: 5,
          title: 'Design of Desktop Software Development Courses',
          img: 'https://i.postimg.cc/XXMC6MWX/courses-5.jpg'
        },
        {
          id: 6,
          title: 'Prepare Courses for Control Panels',
          img: 'https://i.postimg.cc/tRw1Xm4J/courses-6.jpg'
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

.courses-item {
  img {
    position: relative;
    margin-top: 40px;
    transition: .5s;
    width: 100%;
    display: block;
    height: 100%;
  }
  .courses-text {
    position: absolute;
    width: 100%;
    height: calc(100% + 62px);
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background: linear-gradient(to bottom, rgba(18, 15, 45, 0), rgba(18, 15, 45, 1));
    transition: .5s;
    z-index: 1;
  }
  .courses-footer {
    width: 100%;
    border-top: 1px solid #dee2e6 !important;
  }
  .courses-actions {
    width: 100%;
  }

  &:hover {
    img {
      margin-top: 0px;
    }
    .courses-text {
      height: calc(100%0);
    }
  }
}

.courses {
  .subtitle {
    border-bottom: 2px dashed;
  }
}
</style>
