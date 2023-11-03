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
        :id="`epl-${skillId}`"
        class="explore-link"
        @click="goTOProjectsBySkill(skillName)"
    >
      <p>Explore My Projects</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {hexToRgba} from '@/utils/hex_to_rgba';

const router = useRouter();

const newSkillColor = ref<string>('');

const props = defineProps<{
  skillId: number;
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

  const item = document.getElementById(`epl-${props.skillId}`) as HTMLElement;

  item.style.setProperty('--skillColor', props.skillColor);
  item.style.setProperty('--skillColor2', hexToRgba(props.skillColor, 0.5));
});

const goTOProjectsBySkill = (skillName: string) => {
  /*
  * Take user to the page with projects listed by skill.
  */
  router.push({name: 'projects', params: {skill: skillName}});
}

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
  height: 12rem;
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

.explore-link {
  margin-left: auto;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-explore-links: center;
  width: 6rem;
  height: 5rem;
  position: relative;
  cursor: pointer;
  z-index: 1005;
}

.explore-link p {
  background-color: rgba(255, 255, 255, .3);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  box-shadow: 3px 3px 5px 0 rgba(15, 15, 25, 0.4);
  transition: background-color 1s ease;
}

.explore-link p:hover {
  background-color: rgba(255, 255, 255, .9);
}

.explore-link::before,
.explore-link::after {
  background: var(--skillColor);
  content: '';
  height: 100%;
  position: absolute;
  transition: all 0.2s;
  transition-delay: 0.2s;
  transform: translateY(0) translateX(0);
  width: 100%;
  z-index: -1;
}

.explore-link::after {
  background-color: var(--skillColor2);
}

.explore-link:hover {
  animation-name: hoverPop;
  animation-duration: 0.3s;
  animation-fill-direction: forward;
}

.explore-link:hover::before {
  animation: slick-hover-2 2.2s 0.3s linear infinite;
  transform: translateY(-.6rem) translateX(-.6rem);
}

.explore-link:hover::after {
  animation: slick-hover 2.2s 0.3s linear infinite reverse;
  transform: translateY(.6rem) translateX(.6rem);
}

@keyframes hoverPop {
  0%, 100% {
    transform: scale(1);
  }
  33% {
    transform: scale(1.15);
  }
  66% {
    transform: scale(0.85);
  }
}

@keyframes slick-hover {
  0.00% {
    transform: translateY(.6rem) translateX(.6rem);
  }
  16.67% {
    transform: translateY(-.4rem) translateX(-.3rem);
  }
  33.33% {
    transform: translateY(.1rem) translateX(.4rem);
  }
  50.00% {
    transform: translateY(.6rem) translateX(-.6rem);
  }
  66.67% {
    transform: translateY(-.1rem) translateX(.2rem);
  }
  83.33% {
    transform: translateY(-.5rem) translateX(-.4rem);
  }
  100.00% {
    transform: translateY(.6rem) translateX(.6rem);
  }
}

@keyframes slick-hover-2 {
  0.00% {
    transform: translateY(-.6rem) translateX(-.6rem);
  }
  16.67% {
    transform: translateY(.1rem) translateX(-.15rem);
  }
  33.33% {
    transform: translateY(.55rem) translateX(-.3rem);
  }
  50.00% {
    transform: translateY(-.6rem) translateX(.6rem);
  }
  66.67% {
    transform: translateY(.5rem) translateX(-.1rem);
  }
  83.33% {
    transform: translateY(-.04rem) translateX(.5rem);
  }
  100.00% {
    transform: translateY(-.6rem) translateX(-.6rem);
  }
}

</style>