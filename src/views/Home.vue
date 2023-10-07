<template>
  <div class="main-div">
    <NavBar/>
    <AboutMe/>
    <MySkills/>
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue';
import AboutMe from '@/components/AboutMe.vue';
import MySkills from '@/components/MySkills.vue';
</script>

<style scoped>
.main-div {
  margin: 2rem 1rem;
  text-align: center;
}
</style>
