<template>
  <v-navigation-drawer
    v-model="Drawer"
    app
    color="subbackground"
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        active-class="active-btn"
        dark
        :href="item.to"
        router
        exact
      >
        <!-- <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action> -->
        <v-list-item-content>
          <v-list-item-title v-text="item.title"  />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template #append>
      <v-list-item active-class="active-btn" @click="logout">
        <v-list-item-action>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'logout'" />
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-navigation-drawer>
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
      items: [
        {
          icon: 'mdi-home-outline',
          title: 'معلومات عني',
          to: '#about-me'
        },
        {
          icon: 'mdi-rss',
          title: 'خدماتنا',
          to: '#service'
        },
        {
          icon: 'mdi-chat-outline',
          title: 'مشاريعي',
          to: ''
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'تواصل معي',
          to: ''
        }
      ]
    }
  },
  computed: {
    Drawer: {
      get () {
        return this.drawer
      },
      set (drawer) {
        this.$emit('drawer', drawer)
        return drawer
      }
    }
  },
  methods: {
    logout () {
      // await this.$auth.logout()
      this.$router.push('/login')
      this.$store.commit('clearUser')
    }
  }
}
</script>

<style lang="scss">
.active-btn {
  color: #1976D2 !important;
}
</style>
