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
              :skill-id="skill.id"
              :skill-name="skill.name"
              :skill-color="skill.themeColor"
              :skill-description="skill.description"
              :skill-image="skill.image"
              :skill-category="skill.category"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import SkillCard from '@/components/SkillCard.vue';
import axios from 'axios';
import {Skill} from '@/types/Skill'

const skills = ref<Skill[]>([]);

onMounted(async () => {
  const {data} = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/skills/1`)
  for (const skill of data) {
    // @ts-ignore
    skills.value.push({
      id: skill.id,
      name: skill.name,
      description: skill.description,
      category: skill.category,
      themeColor: skill.hex_theme_color,
      image: skill.image
    })
  }
})

</script>

<style scoped>
#my-skills {
  margin-top: 8rem;
}

.skills-header {
  color: var(--color-red);
  margin-bottom: 5rem;
  border-bottom: solid 2px var(--color-red);
}
</style>