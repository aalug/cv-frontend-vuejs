<template>
  <div
      class="navbar"
      :class="{scrolled: scrolledPastThreshold}"
  >
    <ul v-if="onHomePage">
      <li>
        <a href="#about">
          About
        </a>
      </li>
      <li>
        <a href="#my-skills">
          Skills
        </a>
      </li>
      <li>
        <a href="#my-projects">
          Projects
        </a>
      </li>
    </ul>
    <ul v-else>
      <li>
        <router-link :to="{name: 'home'}">
          Home
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script setup lang="ts">
import {ref, watch, onMounted, onBeforeUnmount} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();

const scrollThreshold = 150;
const scrolledPastThreshold = ref<boolean>(false);

const navbarPosition = ref<string>('');

const onHomePage = ref<boolean>(true);

const handleScroll = () => {
  const scroll = window.scrollY;
  if (scroll >= scrollThreshold && !scrolledPastThreshold.value) {
    // Add the "scrolled" class when scrolled past the threshold
    scrolledPastThreshold.value = true;
  } else if (scroll < scrollThreshold && scrolledPastThreshold.value) {
    // Remove the "scrolled" class when scrolled back above the threshold
    scrolledPastThreshold.value = false;
  }
};

watch(() => route.path, (newPath) => {
  onHomePage.value = route.path == '/';
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  margin-top: .4rem;
}

ul li {
  list-style: none;
}

ul li a {
  position: relative;
  display: block;
  text-transform: uppercase;
  padding: 10px 20px;
  text-decoration: none;
  color: var(--color-black);
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  transition: 0.5s;
  z-index: 1;
}

ul li a:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: 2px solid #262626;
  border-bottom: 2px solid #262626;
  transform: scaleY(2);
  opacity: 0;
  transition: 0.3s;
}

ul li a:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #262626;
  transform: scale(0);
  opacity: 0;
  transition: 0.3s;
  z-index: -1;
}

ul li a:hover {
  color: #fff;
}

ul li a:hover:before {
  transform: scaleY(1);
  opacity: 1;
}

ul li a:hover:after {
  transform: scaleY(1);
  opacity: 1;
}

.navbar {
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 5rem;
  z-index: 1000;
  animation: appear 1.5s linear;
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.scrolled {
  width: 100%;
  height: 6.2rem;
  background-color: var(--color-navy);
  opacity: .6;
  transition: all 1s;
}

.scrolled:hover {
  opacity: .92;
}

</style>
