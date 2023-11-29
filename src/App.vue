<template>

  <!-- Navbar   -->
  <NavBar v-if="loadNavBar"/>

  <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>

  <router-view/>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import NavBar from '@/components/NavBar.vue';

const loadNavBar = ref<boolean>(false);

setTimeout(() => {
  loadNavBar.value = true;
}, 6000)

</script>

<style scoped>
.bg {
  animation: slide 14s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #E1AA74 50%, #F3F0CA 50%);
  bottom: 0;
  left: -50%;
  opacity: .5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
}

.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 15s;
}

.bg3 {
  animation-duration: 16s;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}

</style>
