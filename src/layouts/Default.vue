<template>

  <div class="welcome">
    {{ displayedText }}
  </div>

  <v-layout class="layout">
    <router-view/>
  </v-layout>

</template>

<script setup lang="ts">
import {ref} from 'vue';

const words: string[] = [
  'Welcome!',
  'I\'m Adam Gulczynski',
  'a skilled Software Developer.',
  'Explore my code journey in seconds.'
];

const displayedText = ref<string>('');
let i: number = 0;
let offset: number = 0;
const len: number = words.length;
let forwards: boolean = true;
let skipCount: number = 0;
const skipDelay: number = 15;
const speed: number = 45;

const wordFlick = (): void => {
  setInterval(() => {
    if (forwards) {
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

wordFlick();

</script>

<style scoped>
.layout {
  background-color: var(--color-navy);
  opacity: 0.9;
  width: 100rem;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 6rem;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.7);
  animation: appearFromBelow 10s forwards;
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
  animation-delay: 9.1s;
}

@keyframes disappearAbove {
  to {
    top: -30%;
  }
}

</style>
