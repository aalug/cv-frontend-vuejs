<template>
  <div class="edu-card">
    <div
        v-for="(education, index) in educations"
        :key="education.id"
        class="education-details"
    >
      <h4>{{ education.degree }}</h4>
      <br>
      <strong>{{ education.institution }}</strong><br>
      <span class="item-date">
            {{ education.startDate }} - {{ education.endDate }}
          </span>
      <hr v-if="index < educations.length -1"
      style="margin-top: 1rem;">
    </div>

  </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue';
import {Education} from '@/types/Education';

const props = defineProps<{
  educations: Education[]
}>()

const formatDate = (startDateString: string, endDateString: string): string[] => {
  /**
   * Format and return dates based on provided strings.
   */

  const sDate = new Date(startDateString);
  const eDate = new Date(endDateString);
  const formattedSDate = sDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const formattedEDate = eDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return [
    formattedSDate,
    formattedEDate
  ]
};

onMounted(() => {
  for (const education of props.educations) {
    const dates = formatDate(education.startDate, education.endDate);
    education.startDate = dates[0];
    education.endDate = dates[1];
  }
});
</script>

<style scoped>

.edu-card {
  background: #FFF;
  color: var(--color-black);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 16rem;
  height: 20rem;
  padding: 1.3rem;
  position: relative;
  margin-left: 2.6rem;
  margin-top: 3rem;
}

.edu-card:before, .edu-card:after {
  content: "";
  height: 98%;
  position: absolute;
  width: 100%;
}

.edu-card:before {
  background: #fbfbfa;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  left: -5px;
  top: 4px;
  transform: rotate(-2.5deg);
}

.edu-card:after {
  background: #f6f6f6;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  right: -4px;
  top: 1px;
  transform: rotate(1.4deg);
}

.education-details {
  position: relative;
  z-index: 100;
  margin-bottom: 1rem;
}

</style>