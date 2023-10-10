<template>
  <main>
    <div class="card">
      <div class="flip-card">
        <div class="flip-card__div">
          <div class="card-front">
            <div
                class="card-front__top"
                :style="`background:
                        linear-gradient(
                        to bottom,
                        ${projectsColor},
                        ${secondColor}
                    );`"
            >
              <h2 class="card-front__heading">
                {{ projectTitle }}
              </h2>
              <p class="card-front__text-price">
                {{ projectDescription }}
              </p>
            </div>

            <div class="card-front__bottom">
              <p
                  class="card-front__text-view"
                  :style="`color: ${projectsColor}`"
              >
                MORE
              </p>
            </div>
          </div>
          <div class="card-back">
            {{ projectDescription }}
          </div>
        </div>
      </div>

      <div class="inside-page">
        <div class="inside-page__div">
          <h3
              class="inside-page__heading"
              :style="`color: ${projectsColor}`"
          >
            Technologies used
          </h3>
          <ul class="multi-column-list">
            <li v-for="technology in technologiesUsed">
              {{ technology }}
            </li>
          </ul>

          <div class="details-button">
            <a href="#"
               :style="`color: ${projectsColor}; border: solid 1px ${projectsColor}`"
            >
              Details
            </a>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {hexToRgba} from '@/utils/het_to_rgba'

const props = defineProps<{
  projectTitle: string,
  projectDescription: string,
  technologiesUsed: string[],
  projectsColor: string,
}>();

const secondColor = ref<string>('');

onMounted(() => {
  const newColor = hexToRgba(props.projectsColor, 0.9);
  if (newColor !== null) {
    secondColor.value = newColor;
  } else {
    secondColor.value = props.projectsColor;
  }
})

</script>

<style scoped>
*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

.card {
  background-color: rgba(0, 0, 0, .05);
  height: 18rem;
  position: relative;
  transition: all 1s ease;
  width: 40rem;
}

.flip-card {
  height: 18rem;
  perspective: 100rem;
  position: absolute;
  right: 0;
  transition: all 1s ease;
  visibility: hidden;
  width: 40rem;
  z-index: 100;
}

.flip-card > * {
  visibility: visible;
}

.flip-card__div {
  height: 100%;
  position: absolute;
  right: 0;
  transform-origin: left;
  transform-style: preserve-3d;
  transition: all 1s ease;
  width: 100%;
}

.card-front,
.card-back {
  backface-visibility: hidden;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.card-front {
  height: 18rem;
  width: 40rem;
}

.card-front__top {
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%);
  display: flex;
  flex-direction: column;
  height: 15rem;
  justify-content: center;
  padding: .75rem;
}

.card-front__bottom {
  align-items: center;
  display: flex;
  justify-content: center;
}

.card-back {
  background-color: #fafbfa;
  transform: rotateY(180deg);
}

.inside-page {
  background-color: #fafbfa;
  box-shadow: inset 20rem 0 5rem -2.5rem rgba(0, 0, 0, 0.25);
  height: 100%;
  padding: 1rem;
  position: absolute;
  right: 0;
  transition: all 1s ease;
  width: 40rem;
  z-index: 1;
}

.inside-page__div {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  text-align: left;
  margin-left: 5rem;
}

.card:hover {
  box-shadow: -.1rem 1.7rem 6.6rem -3.2rem rgba(0, 0, 0, 0.75);
  width: 80rem;
}

.card:hover .flip-card__div {
  transform: rotateY(-180deg);
}

.card:hover .inside-page {
  box-shadow: inset 1rem 0 5rem -2.5rem rgba(0, 0, 0, 0.1);
}

.multi-column-list {
  column-count: 3;
  column-gap: 20px;
}

.multi-column-list li {
  margin-bottom: 10px;
}

.details-button {
  position: absolute;
  right: .5rem;
  bottom: .5rem;
}

.details-button a {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  overflow: hidden;
  transition: color 0.2s ease-in-out;
}
</style>
