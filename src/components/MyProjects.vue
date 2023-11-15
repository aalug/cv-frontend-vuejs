<template>
  <v-container id="my-projects">
    <h1 class="projects-header">My Projects</h1>
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
import axios from 'axios';
import ProjectCard from '@/components/ProjectCard.vue';
import {Project} from '@/types/Project';

const projects = ref<Project[]>([]);

onMounted(async () => {
  // fetch data from the API
  const {data} = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/projects/1?page=1&page_size=10`);
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
})

</script>

<style scoped>
#my-projects {
  margin-top: 8rem;
}

.projects-header {
  color: var(--color-orange-main);
  margin-bottom: 2rem;
  border-bottom: solid 2px var(--color-orange-main);
}

</style>