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

// Pinia
import { createPinia } from 'pinia'

// Plugins
import { registerPlugins } from '@/plugins'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)

registerPlugins(app)

app.mount('#app')
