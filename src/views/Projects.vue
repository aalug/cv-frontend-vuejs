<template>
  <v-container>
    <div class="navbar top-bottom-in">
      <router-link :to="{name: 'home'}">Home</router-link>
    </div>


    <h1 class="projects-skill-header">My Projects that use {{ skill }}</h1>
    <v-container
        v-for="(project, index) in projects"
        :key="index"
        class="d-flex justify-center"
    >
      <ProjectCard
          :project="project"
      />
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import axios from 'axios';
import ProjectCard from '@/components/ProjectCard.vue';
import {Project} from '@/types/Project';

const route = useRoute();
const skill = route.params.skill

const projects = ref<Project[]>([]);

onMounted(async () => {
  try {
    const {data} = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/projects/skill/1/${skill}?page=1&page_size=10`)
    for (const project of data) {
      projects.value.push({
        id: project.id,
        title: project.title,
        shortDescription: project.short_description,
        description: project.description,
        projectUrl: project.project_url,
        themeColor: project.hex_theme_color,
        image: project.image,
        technologiesUsed: project.technologies_used,
        cvProfileID: project.cv_profile_id
      })
    }
  } catch (error) {
    console.error(error)
  }
})

</script>

<style scoped>
.projects-skill-header {
  color: var(--color-red);
  border-bottom: solid 2px var(--color-red);
  display: flex;
  justify-content: center;
  margin: 10rem auto 5rem;
  width: 50%;
}

</style>