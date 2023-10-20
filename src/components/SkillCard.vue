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
      <p class="card-body">{{ skillDetails }}</p>
    </div>
    <div
        class="card-link"
        :style="`background-color: ${skillColor};`"
    >
      Explore My Projects
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  skillName: string,
  skillColor: string,
  skillDetails: string,
  skillImage: string,
}>();

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
  width: 25rem;
  height: 18rem;
}

.card-image > img {
  width: 100%;
  height: 100%;
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
}

</style>