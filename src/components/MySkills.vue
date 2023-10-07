<template>
  <div>
    <v-container id="my-skills">
      <h1 class="skills-header">My Skills</h1>
      <v-row>
        <v-col
            v-for="(skill, index) in skills"
            :key="index"
            cols="12"
            md="4"
            sm="6"
        >
          <SkillCard
              :skill-name="skill.name"
              :skill-color="skill.color"
              :skill-details="skill.details"
              :skill-image="skill.image"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import SkillCard from '@/components/SkillCard.vue';

// without types for now,
// after finishing the backend
// it will become clear what data is sent
const skills = ref(
    [
      {
        name: 'Go',
        image: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
        color: 'light-blue',
        details: 'some details'
      },
      {
        name: 'Python',
        image: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
        color: 'blue',
        details: 'some details'
      },
      {
        name: 'Django',
        image: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
        color: 'teal',
        details: 'some details'
      },
      {
        name: 'SQL',
        image: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
        color: 'grey',
        details: 'some details'
      },
    ]
)

</script>

<style scoped>
#my-skills {
  margin-top: 8rem;
}

.skills-header {
  color: var(--color-red);
  margin-bottom: 2rem;
  border-bottom: solid 2px var(--color-red);
}
</style>