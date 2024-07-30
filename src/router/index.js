import { createRouter, createWebHistory } from 'vue-router';
import UserRegister from '../components/UserRegister.vue';
import UserLogin from '../components/pages/LoginPage.vue';
import UserInfo from '../components/pages/InfoPage.vue';
import mirrorPage from '../components/pages/mirrorPage.vue';
import UserRecover from '../components/pages/RecoverPage.vue';
import PasswordChange from '../components/pages/PasswordChangePage.vue';
import HomePage from '../components/pages/HomePage.vue'
const routes = [
  { path: '/register', component: UserRegister },
  { path: '/login', component: UserLogin },
  { path: '/info', component: UserInfo },
  { path: '/mirror', component: mirrorPage },
  { path: '/recover', component: UserRecover },
  { path: '/password-change', component: PasswordChange },
  { path: '/home', component: HomePage },
  { path: '/', component: UserLogin },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
