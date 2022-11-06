export default function (ctx) {
  const authToken = ctx.app.$cookies.get('auth._token.local')
  if (authToken) {
    console.log(authToken)
    const token = authToken.split(' ')[1]

    if (!token || token === 'locale') {
      return ctx.redirect('/login')
    }
  } else {
    return ctx.redirect('/login')
  }
}
