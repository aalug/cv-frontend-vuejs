<template>
  <div class="edu-card">
    <div class="main-div">
      <div class="main-div_item">
        <a href="#" class="main-div_item-link">
          <div class="main-div_item-bg"></div>

          <div class="main-div_item-title">
            <h3>{{ education.degree }}</h3>
          </div>

          <div class="date-box">
            <strong>{{ education.institution }}</strong><br>
            <span class="item-date">
            {{ formattedStartDate }} - {{ formattedEndDate }}
          </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {Education} from '@/types/Education';

const props = defineProps<{
  education: Education
}>()

const formattedStartDate = ref<string>('');
const formattedEndDate = ref<string>('');

const formatDate = () => {
  const sDate = new Date(props.education.startDate);
  const eDate = new Date(props.education.startDate);
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

  formattedStartDate.value = formattedSDate;
  formattedEndDate.value = formattedEDate;
};

onMounted(formatDate);
</script>

<style scoped>
.edu-card {
  width: 80rem;
  margin: 0 !important;
}

.main-div {
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 50px 0;
}

.main-div_item {
  -ms-flex-preferred-size: calc(33.33333% - 30px);
  flex-basis: calc(33.33333% - 30px);
  margin: 0 15px 30px;
  overflow: hidden;
}

.main-div_item-link {
  display: block;
  padding: 30px 20px;
  background-color: rgba(18, 18, 18, 0.67);
  overflow: hidden;
  position: relative;
  text-decoration: none;
}

.main-div_item-link:hover,
.main-div_item-link:hover .item-date {
  text-decoration: none;
  color: #FFF;
}

.main-div_item-link:hover .main-div_item-bg {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}

.main-div_item-title {
  min-height: 90px;
  overflow: hidden;
  color: #FFF;
  z-index: 2;
  position: relative;
}

.date-box {
  color: #FFF;
  z-index: 2;
  position: relative;
}

.item-date {
  color: #FFF;
  -webkit-transition: color .4s ease-in-out;
  -o-transition: color .4s ease-in-out;
  transition: color .4s ease-in-out;
}

.main-div_item-bg {
  height: 120px;
  width: 120px;
  background-color: var(--color-red);

  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 30%;
  transform: rotate(45deg);

  -webkit-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}

</style>