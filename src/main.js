import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFlag, faFlagCheckered, faMapMarkerAlt, faBirthdayCake, faGraduationCap, faHeart, faRing, faFemale, faMale, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import store from './store'
library.add(faEnvelope, faFlag, faFlagCheckered, faMapMarkerAlt, faBirthdayCake, faGraduationCap, faHeart, faRing, faFemale, faMale, faVenusMars);

createApp(App)
  .use(router) 
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon) 
  .mount('#app');