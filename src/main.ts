/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// CSS files
import './assets/main.css'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faArrowRight);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
