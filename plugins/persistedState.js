import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

// const cookieStorage = {
//   getItem: function(key) {
//     return Cookies.get(key)
//   },
//   setItem: function(key, value) {
//     return Cookies.set(key, value, { expires: 3, secure: false })
//   },
//   removeItem: function(key) {
//     return Cookies.remove(key)
//   }
// }

// export default (context) => {
//   createPersistedState ({
//     storage: cookieStorage,
//     getState: cookieStorage.getItem,
//     setState: cookieStorage.setItem
//   }) (context.store)
// }

export default ({ store, req }) => {
  createPersistedState({
    key: 'vuex',
    paths: ['authUser', 'posts', 'friends'],
    storage: {
      getItem: (key) => {
        if (process.server) {
          let headerCookie = req.headers.cookie
          if (typeof headerCookie !== 'string') {
            headerCookie = ''
          }
          const parsedCookies = cookie.parse(headerCookie)
          return parsedCookies[key]
        } else {
          return Cookies.get(key)
        }
      },
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 365, secure: false }),
      removeItem: key => Cookies.remove(key)
    }
  })(store)
}
