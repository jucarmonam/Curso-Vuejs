import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    //with alias we refer to the component with diferrents url but this
    //doesn't change what is the same that define a path with the other url
    //and the same component
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      //here we specify what comoponent load in what router-view that
      //depend in the name defined in main.js beacuse this 2
      //router-view are at the same level
      components: { default: TeamsList, footer: TeamsFooter },
      //nested routes will be render inside his father route, so you have
      //to define anoter router-view in this component in this case in TeamsList
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ] // /teams/t1
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      }
    },
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    //dynamic segment with regular expression that means that any caracter
    //combination is going to be handled by this route
    // { path: '/:notFound(.*)', redirect: '/teams' }
    { path: '/:notFound(.*)', component: NotFound }
  ],
  //active classes name that we can modidy
  linkActiveClass: 'active',
  // scrollBehavior(to, from, savePosition) {
  scrollBehavior(_, _2, savePosition) {
    if (savePosition) {
      return savePosition;
    }
    return {
      left: 0,
      top: 0
    };
  }
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);

  // if (to.meta.needsAuth) {
  //   console.log('Needs auth!');
  //   next();
  // }else {
  //   next()
  // }

  //confirm navigation
  //next(true) === next()

  //cancel navigation
  //next(false);

  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //redirect to another page or component or route
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }

  next();
});

router.afterEach((to, from) => {
  // sending analytics data, for logs navigation
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
