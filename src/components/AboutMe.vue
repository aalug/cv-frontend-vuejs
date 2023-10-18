<template>
<div id="about">
  <!-- profile picture -->
  <v-img
      src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
      class="profile-pic"
  ></v-img>

  <!-- about -->
  <v-container>
    <p class="bio">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took
      a galley of type and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </v-container>

</div>

</template>

<script setup lang="ts">
import {onMounted} from 'vue';
import axios from 'axios';

onMounted(async () => {
  const {data} = await axios.get('http://localhost:8080/cv-profiles/1')
  console.log(data)
})

</script>

<style scoped>
#about {
  margin-top: 9rem;
}

.profile-pic {
  border-radius: 50%;
  width: 22rem;
  margin: 2rem auto 1rem;
}

.bio {
  color: var(--color-orange);
  width: 80%;
  margin: auto;
  text-align: justify !important;
  font-size: 1.3rem;
}
</style>