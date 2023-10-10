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

<style scoped>

div.navbar {
  margin: 0 auto;
  padding: 1rem 0 3rem 0;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: transform 0.8s, right 0.8s;
  z-index: 1000;
}

.scrolled {
  transform: translateX(70%);
  transform-origin: top right;
  rotate: 90deg;
}

div.navbar a {
  color: #FFF;
  text-decoration: none;
  font-size: 2rem;
  margin: 0 10px;
  padding: 10px 3rem;
  position: relative;
  z-index: 0;
  cursor: pointer;
}

div.top-bottom-in a:before, div.top-bottom-in a:after {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #FFF;
  content: "";
  opacity: 0;
  transition: all 0.3s;
}

div.top-bottom-in a:before {
  top: 0;
  transform: translateY(-10px);
}

div.top-bottom-in a:after {
  bottom: 0;
  transform: translateY(10px);
}

div.top-bottom-in a:hover:before, div.top-bottom-in a:hover:after {
  opacity: 1;
  transform: translateY(0px);
}

</style>