let route = []
route.push({
  path: '/',
  component: require('./index.vue').default
})
route.push({
  path: '/score',
  component: require('./score.vue').default
})
export default route
