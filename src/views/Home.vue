<template>

  <div class="main-div">
    <AboutMe/>
    <MySkills/>
    <MyProjects/>
  </div>

</template>

<script lang="ts" setup>
import {defineAsyncComponent} from 'vue';
import NavBar from '@/components/NavBar.vue';
import AboutMe from '@/components/AboutMe.vue';

const MySkills = defineAsyncComponent(() => import('@/components/MySkills.vue'));
const MyProjects = defineAsyncComponent(() => import('@/components/MyProjects.vue'));

</script>

<style scoped>
.main-div {
  margin: 2rem 1rem;
  text-align: center;
}
</style>
