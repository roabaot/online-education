export default function (ctx) {
  const authToken = ctx.app.$cookies.get('auth._token.local')
  if (authToken) {
    const token = authToken.split(' ')[1]

    if (token && token !== 'locale' && ctx.store.state.authUser.loggedIn) {
      return ctx.redirect('/')
    } else if (token !== 'locale' && ctx.store.state.authUser.loggedIn) {
      return ctx.redirect('/')
    }
  }
}
