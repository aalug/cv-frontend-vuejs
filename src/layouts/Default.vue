<template>

  <div :class="{welcome: startWelcome}">
    {{ displayedText }}
  </div>

  <v-layout class="layout" :class="{appearLayout: startWelcome}">
    <router-view class="rv"/>

    <!--  footer  -->
    <div class="footer">
      © {{ currentYear }} Adam Gulczynski. All rights reserved. <br>
      Last Updated: {{ lastUpdate }}
    </div>

  </v-layout>

</template>

<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
let codeExecuted: boolean = false;
const startWelcome = ref<boolean>(false);
const lastUpdate = ref<string>('');
const currentYear = ref<number>(2023);

// Execute the code when the route path is '/' and the code has not been executed yet
const executeCode = () => {
  if (!codeExecuted) {
    startWelcome.value = true;
    wordFlick();
    codeExecuted = true; // Set the flag to true after executing the code
  }
};

// Watch for changes in the route
watch(() => route.path, (newPath) => {
  if (newPath === '/') {
    executeCode();
  }
});

// Use onMounted to execute the code on the initial page load
onMounted(() => {
  if (route.path === '/') {
    executeCode();
  }

  // get date of last update from env
  const dateObject: Date = new Date(import.meta.env.VITE_LAST_UPDATE);

// Format the date
  const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric'};
  lastUpdate.value = dateObject.toLocaleDateString('en-US', options);

  console.log(import.meta.env.VITE_LAST_UPDATE)

  // get current year for copyrights
  currentYear.value = new Date().getFullYear();
});

const displayedText = ref<string>('');

const words: string[] = [
  'Welcome!',
  'I\'m Adam Gulczynski',
  'Explore my code journey in seconds.'
];
let i: number = 0;
let offset: number = 0;
const len: number = words.length;
let forwards: boolean = true;
let skipCount: number = 0;
const skipDelay: number = 15;
const speed: number = 45;

const wordFlick = (): void => {

  setInterval(() => {
    if (forwards && i < len) {
      if (offset >= words[i].length) {
        ++skipCount;
        if (skipCount === skipDelay) {
          forwards = false;
          skipCount = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          displayedText.value = '';
          return
        }
      }
    }
    displayedText.value = words[i].substr(0, offset);
    if (skipCount === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
  }, speed);
};

</script>

<style scoped>
.layout {
  background-color: var(--color-navy);
  opacity: 0.9;
  width: 100rem;
  height: 100%;
  margin: 0 auto;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.7);
}

.appearLayout {
  animation: appearFromBelow 6.4s forwards;
}

@keyframes appearFromBelow {
  0% {
    transform: translateY(100%);
  }
  70% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

.welcome {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #FFF;
  background-color: #000;
  font-size: 4rem;
  font-weight: 700;
  text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;
  animation: disappearAbove 1s forwards;
  animation-delay: 5.8s;
}

@keyframes disappearAbove {
  to {
    top: -30%;
  }
}

.rv {
  padding-bottom: 10rem;
}

.footer {
  width: 100rem;
  height: 8rem;
  background-color: var(--color-black);
  color: #FFF;
  text-align: center;
  position: absolute;
  bottom: 0;
  padding-top: 2rem;
}

</style>
