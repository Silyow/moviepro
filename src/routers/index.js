import Vue from 'vue'
import Router from 'vue-router'
import movieRoute from './movie'
import cinemeRoute from './cinema'
import mineRoute from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRoute,
    cinemeRoute,
    mineRoute
  ]
})
