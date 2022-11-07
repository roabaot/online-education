<template>
  <div>
    <v-container class="py-12 about-us">
      <v-row class="py-12">
        <v-col md="5" cols="12">
          <img src="https://i.postimg.cc/MHcbJk1Z/about.jpg" alt="about us" class="about-img">
        </v-col>
        <v-col md="7" cols="12">
          <h1 class="text-uppercase error--text mb-2 subtitle d-inline-block" :class="$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2'">
            About Us
          </h1>
          <h1 class="mt-2 mb-8 font-weight-bold" :class="$vuetify.breakpoint.mdAndUp ? 'text-h2' : 'text-h4'">
            First Choice For Online Education Anywhere
          </h1>
          <p class="subtitle-1 grey--text text--darken-2">
            Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna
          </p>
          <v-lazy
            v-model="isActive"
            :options="{
              threshold: .5
            }"
            min-height="200"
            transition="fade-transition"
          >
            <v-row class="pt-6 mx-0">
              <v-col md="3" cols="12" class="px-0">
                <div class="success white--text text-center pa-6">
                  <h1 id="subjects" class=" mb-2 text-h4 countup">
                    345
                  </h1>
                  <h6 class="mb-2 subtitle-2">
                    AVAILABLE SUBJECTS
                  </h6>
                </div>
              </v-col>
              <v-col md="3" cols="12" class="px-0">
                <div class="primary white--text text-center pa-6">
                  <h1 id="courses" class="countup mb-2 text-h4">
                    3456
                  </h1>
                  <h6 class="mb-2 subtitle-2">
                    ONLINE COURSES
                  </h6>
                </div>
              </v-col>
              <v-col md="3" cols="12" class="px-0">
                <div class="error white--text text-center pa-6">
                  <h1 id="skills" class="countup mb-2 text-h4">
                    254
                  </h1>
                  <h6 class="mb-2 subtitle-2">
                    SKILLED INSTRUCTORS
                  </h6>
                </div>
              </v-col>
              <v-col md="3" cols="12" class="px-0">
                <div class="warning white--text text-center pa-6">
                  <h1 id="students" class="countup mb-2 text-h4">
                    5453
                  </h1>
                  <h6 class="mb-2 subtitle-2">
                    HAPPY STUDENTS
                  </h6>
                </div>
              </v-col>
            </v-row>
          </v-lazy>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  watch: {
    isActive (val, old) {
      setTimeout(() => {
        this.counterUp()
      }, 50)
    }
  },
  methods: {
    counterUp () {
      // How long you want the animation to take, in ms
      const animationDuration = 2000
      // Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
      const frameDuration = 1000 / 50
      // Use that to calculate how many frames we need to complete the animation
      const totalFrames = Math.round(animationDuration / frameDuration)
      // An ease-out function that slows the count as it progresses
      const easeOutQuad = (t) => {
        return t * (2 - t)
      }

      // The animation function, which takes an Element
      const animateCountUp = (el) => {
        let frame = 0
        const countTo = parseInt(el.innerHTML, 10)
        // Start the animation running 60 times per second
        const counter = setInterval(() => {
          frame++
          // Calculate our progress as a value between 0 and 1
          // Pass that value to our easing function to get our
          // progress on a curve
          const progress = easeOutQuad(frame / totalFrames)
          // Use the progress value to calculate the current count
          const currentCount = Math.round(countTo * progress)

          // If the current count has changed, update the element
          if (parseInt(el.innerHTML, 10) !== currentCount) {
            el.innerHTML = currentCount
          }

          // If we’ve reached our last frame, stop the animation
          if (frame === totalFrames) {
            clearInterval(counter)
          }
        }, frameDuration)
      }

      // Run the animation on all elements with a class of ‘countup’
      const countupEls = document.querySelectorAll('.countup')
      countupEls.forEach(animateCountUp)
    }
  },
  mounted () {
    // if (this.isActive) {
    //   setTimeout(() => {
    //     this.counterUp()
    //   }, 500)
    // }
  }
}
</script>

<style lang="scss" scoped>
.about-us {
  @media (min-width: 960px) {
    max-width: 1000px;
  }
  .about-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .subtitle {
    border-bottom: 2px dashed;
  }
}
</style>
