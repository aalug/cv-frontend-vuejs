<template>

  <div class="main-div">
    <AboutMe/>
    <MySkills/>
    <MyProjects/>
  </div>

</template>

<script lang="ts" setup>
import {defineAsyncComponent} from 'vue';
import {storeToRefs} from "pinia";
import AboutMe from '@/components/AboutMe.vue';
import {useFetchDataStore} from "@/store/fetch_data";
import MultipleColorLinearLoading from '@/components/MultipleColorLinearLoading.vue';


const MySkills = defineAsyncComponent(() => import('@/components/MySkills.vue'));
const MyProjects = defineAsyncComponent(() => import('@/components/MyProjects.vue'));

const fetchDataStore = useFetchDataStore();

const {loading} = storeToRefs(fetchDataStore);

</script>

<style scoped>
.main-div {
  margin: 2rem 1rem;
  text-align: center;
}
</style>
