<template>
  <v-snackbar
    v-model="snackbar.trigger"
    :color="snackbar.color"
    right
    bottom
    multi-line
    :timeout="4000"
  >
    <v-row>
      <div class="title">{{snackbar.message}}</div>
      <v-spacer />
      <div class="d-flex align-center">
        <v-btn
          dark
          @click="snackbar.trigger = false"
          class="title"
          color="blue-grey"
        >
          اغلاق
        </v-btn>
      </div>
    </v-row>
  </v-snackbar>
</template>

<script>
export default {
  data () {
    return {
      snackbar: {
        trigger: false,
        message: '',
        color: ''
      }
    }
  },
  mounted () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'triggerSnackbar') {
        this.snackbar.trigger = true
        this.snackbar.message = state.snackbar.message
        this.snackbar.color = state.snackbar.color
      }
    })
  }
}
</script>

<style>

</style>
