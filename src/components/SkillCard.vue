<template>
  <div class="card">
    <div class="card-image">
      <img
          :src="skillImage"
          alt="Skill picture"
      >
    </div>
    <div class="card-text">
      <h2 class="card-title">{{ skillName }}</h2>
      <p class="card-body">{{ skillDescription }}</p>
    </div>
    <div
        class="card-link"
        :style="`background-color: ${newSkillColor};`"
    >
      Explore My Projects
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {hexToRgba} from '@/utils/hex_to_rgba'

const newSkillColor = ref<string>('');

const props = defineProps<{
  skillName: string,
  skillColor: string,
  skillDescription: string,
  skillImage: string,
  skillCategory: string,
}>();

onMounted(() => {
  const newColor = hexToRgba(props.skillColor, 0.7);
  if (newColor !== null) {
    newSkillColor.value = newColor;
  } else {
    newSkillColor.value = props.skillColor;
  }
})

</script>

<style scoped>

.card {
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin-bottom: 4rem;
}

.card > div {
  box-shadow: 0 11px 14px 0 rgba(0, 0, 0, 0.4);
}

.card-image {
  max-width: 100%;
  max-height: 100%;
  width: 25rem;
  height: 14rem;
}

.card-image > img {
  width: 25rem;
  height: 14rem;
  object-fit: cover;
  object-position: bottom;
}

.card-text {
  margin: -30px auto -50px;
  height: 10rem;
  width: 18rem;
  background-color: rgba(29, 28, 32, 0.9);
  color: #FFF;
  padding: 1rem;
}

.card-title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  margin-top: .5rem;
}

.card-body {
  font-size: 1.1rem;
  margin: auto 1.7rem;
}

.card-link {
  width: 6rem;
  height: 5rem;
  color: #FFF;
  margin-left: auto;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 1.5s;
  cursor: pointer;
}

.card-link:hover {
  animation: rotate .4s linear, changeOpacity .35s forwards;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(60deg) scale(1, 1);;
  }
  40% {
    transform: rotate(180deg) scale(1, 1.5);;
  }
  60% {
    transform: rotate(200deg) scale(1.5, 1.5);
  }
  80% {
    transform: rotate(330deg) scale(1.5, 1);
  }
  100% {
    transform: rotate(360deg) scale(1, 1);
  }
}

@keyframes changeOpacity {
  0% {
    opacity: 0.9;
  }
  25% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.3;
  }
  75% {
    opacity: 6;
  }
  100% {
    opacity: 1;
  }
}


</style>