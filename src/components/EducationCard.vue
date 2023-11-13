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
            {{ formatDate(education.startDate) }} - {{ formatDate(education.endDate) }}
          </span>
      <hr v-if="index < educations.length -1"
          style="margin-top: 1rem;">
    </div>

  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {Education} from '@/types/Education';

const props = defineProps<{
  educations: Education[]
}>()

const dates = ref(new Map<number, string>());

const formatDate = (dateString: string): string => {
  /**
   * Format and return dates based on provided strings.
   *  Validate whether the specified date lies in the
   *  future; if it does, rather than displaying the
   *  formatted date, return the string "current".
   */
  try {
    const date = new Date(dateString);
    const currentDate = new Date();

    if (date > currentDate) {
      return 'current';
    }

    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      year: 'numeric',
      timeZone: 'UTC'
    })
  } catch (error) {
    console.error('Error formatting dates:', error);
    return 'Invalid Date'
  }
};

</script>

<style scoped>

.edu-card {
  background: #FFF;
  color: var(--color-black);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 16rem;
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