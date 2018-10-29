import Vue from 'vue';
import Router from 'vue-router';
import writePostPage from '../views/WritePostPage.vue';
Vue.use(Router);

const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/write',
      component: writePostPage
    },
    {
      path: '/user/:id',
      component: User
    }
  ]
});


export default router;
