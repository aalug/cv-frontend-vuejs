<template>
  <v-card
      class="mx-auto skill-card"
      max-width="344"
      :color="skillColor"
  >

    <v-img
        :src="skillImage"
        height="200px"
        cover
    ></v-img>

    <v-card-title>
      {{ skillName }}
    </v-card-title>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
          :icon="showDetails ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="showDetails = !showDetails"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showDetails">
        <v-divider></v-divider>

        <v-card-text>
          {{ skillDetails }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import {ref} from 'vue';

defineProps<{
  skillName: string,
  skillColor: string,
  skillDetails: string,
  skillImage: string,
}>();

const showDetails = ref<boolean>(false);
</script>

<style scoped>
.skill-card {
  transition: transform 0.2s ease-in-out;
}

.skill-card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  transform: scale(1.015);
}
</style>