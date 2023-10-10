<template>
  <v-container id="my-projects">
    <h1 class="projects-header">My Projects</h1>
    <v-container
        v-for="(project, index) in projects"
        :key="index"
        class="d-flex justify-center"
    >
        <ProjectCard
            :project-title=" project.title"
            :project-description="project.description"
            :technologies-used=project.technologiesUsed
            :projects-color="project.color"
        />
    </v-container>

  </v-container>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import ProjectCard from "@/components/ProjectCard.vue";

const projects = ref([
      {
        title: 'Project 1',
        description: 'My first project, my first project',
        technologiesUsed: ['Go', 'Gin', 'Postgres'],
        color: '#197349',
      },
      {
        title: 'Project 2',
        description: 'My second project, my second project',
        technologiesUsed: ['Python', 'Django', 'Postgres'],
        color: '#de4242',
      },
      {
        title: 'Project 3',
        description: 'My third project, my third project',
        technologiesUsed: ['TypeScript', 'Vue.js'],
        color: '#11a3be',
      }
    ]
)

</script>

<style scoped>
#my-projects {
  margin-top: 8rem;
}

.projects-header {
  color: var(--color-orange);
  margin-bottom: 2rem;
  border-bottom: solid 2px var(--color-orange);
}

</style>