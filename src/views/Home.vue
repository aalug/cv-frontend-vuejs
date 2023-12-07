<template>

  <div class="main-div">
    <AboutMe/>
    <MySkills v-if="loadOtherComponents"/>
    <MyProjects v-if="loadOtherComponents"/>
  </div>

</template>

<script lang="ts" setup>
import {ref, watch, defineAsyncComponent} from 'vue';
import {storeToRefs} from 'pinia';
import {useFetchDataStore} from '@/store/fetch_data';
import AboutMe from '@/components/AboutMe.vue';

const MySkills = defineAsyncComponent(() => import('@/components/MySkills.vue'));
const MyProjects = defineAsyncComponent(() => import('@/components/MyProjects.vue'));

const fetchDataStore = useFetchDataStore();
const {loading} = storeToRefs(fetchDataStore);

const loadOtherComponents = ref<boolean>(false);
watch(loading, val => {
  if (!val) {
    setTimeout(() => {
      loadOtherComponents.value = true;
    }, 500)
  }
});

</script>

<style scoped>
.main-div {
  margin: 2rem 1rem;
  text-align: center;
}
</style>
