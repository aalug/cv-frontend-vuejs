<template>
    <div class="main-div">
      <NavBar/>
      <AboutMe/>
    </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue';
import AboutMe from '@/components/AboutMe.vue';
</script>

<style scoped>
.main-div {
  margin: 2rem 1rem;
  text-align: center;
}
</style>
