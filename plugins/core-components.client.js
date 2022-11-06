import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '@/components', true, /\.vue$/
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

// import SideBar from '@/components/Core/SideBar'
// import Header from '@/components/Core/Header'
// import Drawer from '@/components/Core/Drawer'
// import Footer from '@/components/Core/Footer'
// import Snackbar from '@/components/Core/Snackbar'

// Vue.component('SideBar', SideBar)
// Vue.component('Header', Header)
// Vue.component('Drawer', Drawer)
// Vue.component('Footer', Footer)
// Vue.component('Snackbar', Snackbar)
