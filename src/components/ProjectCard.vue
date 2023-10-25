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
                        to left,
                        ${project.themeColor},
                        ${secondColor}
                    );`"
            >
              <h2 class="card-front__heading">
                {{ project.title }}
              </h2>
              <p class="card-front__text-sd">
                {{ project.shortDescription }}
              </p>
            </div>

            <div class="card-front__bottom">
              <p
                  class="card-front__text-view"
                  :style="`color: ${project.themeColor}`"
              >
                MORE
              </p>
            </div>
          </div>
          <div class="card-back">
            <!--  Project image   -->
            <v-img
                :src="project.image"
                alt="project image"
                cover
                class="project-image"
            ></v-img>
          </div>
        </div>
      </div>

      <div class="inside-page">
        <div class="inside-page__div">
          <h3
              class="inside-page__heading"
              :style="`color: ${project.themeColor}`"
          >
            Technologies used
          </h3>
          <ul class="multi-column-list">
            <li v-for="technology in project.technologiesUsed">
              {{ technology }}
            </li>
          </ul>

          <hr style="width: 50%;">

          <p class="description">
            {{ project.description }}
          </p>

          <!--   GitHub project link button   -->
          <a
              id="github-url-btn"
              :href="project.projectUrl"
          >
            GitHub &nbsp;
            <font-awesome-icon
                id="gh-logo"
                icon="fa-brands fa-github"
                size="xl"
            />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {hexToRgba} from '@/utils/hex_to_rgba'
import {Project} from '@/types/Project';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

const props = defineProps<{
  project: Project
}>();

const secondColor = ref<string>('');

onMounted(async () => {
  // get new color for the card
  const newColor = hexToRgba(props.project.themeColor, 0.9);
  if (newColor !== null) {
    secondColor.value = newColor;
  } else {
    secondColor.value = props.project.themeColor;
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
  height: 23rem;
  position: relative;
  transition: all 1s ease;
  width: 40rem;
  margin-bottom: 2rem;
}

.flip-card {
  height: 23rem;
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
  height: 23rem;
  width: 40rem;
}

.card-front__top {
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%);
  display: flex;
  flex-direction: column;
  height: 21rem;
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

#github-url-btn {
  position: absolute;
  right: .3rem;
  bottom: .3rem;
  background: #000;
  color: #FFF;
  padding: .4rem 1.1rem;
  transition: all .4s ease;
  text-decoration: none;

}

#github-url-btn:hover {
  color: #000;
  background: #FFF;
  outline: solid 1px #000;
}

.project-image {
  width: 40rem;
  height: 23rem;
}

.card-back p {
  margin: .7rem 1.4rem 0;
}

.description {
  margin-top: 1rem;
  position: relative;
  right: 4rem;
  text-align: justify-all;
}
</style>
