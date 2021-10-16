import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals }
  ]
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

// this is because router starts from nothin route to the inital route
// in default mode but you con tell when the router is ready and what
// component render. We did this to solution the appereance of the
// animation when we reload the page
router.isReady().then(() => {
  app.mount('#app');
});
