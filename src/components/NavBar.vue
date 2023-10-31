<template>
  <div
      class="navbar top-bottom-in"
      :class="{'scrolled': scrolledPastThreshold}"
  >
    <a href="#about">About</a>
    <a href="#my-skills">Skills</a>
    <a href="#my-projects">Projects</a>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from 'vue';

const scrollThreshold = 1;
const scrolledPastThreshold = ref(false);

const handleScroll = () => {
  if (window.scrollY >= scrollThreshold && !scrolledPastThreshold.value) {
    // Add the "scrolled" class when scrolled past the threshold
    scrolledPastThreshold.value = true;
  } else if (window.scrollY < scrollThreshold && scrolledPastThreshold.value) {
    // Remove the "scrolled" class when scrolled back above the threshold
    scrolledPastThreshold.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
