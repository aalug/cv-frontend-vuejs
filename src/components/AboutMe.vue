<template>
  <div id="about">
    <!-- profile picture -->
    <v-img
        src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
        class="profile-pic"
    ></v-img>

    <!-- about -->
    <v-container>
      <h3>My name is {{ cvProfile.name }},</h3>
      <p class="bio">
        {{ cvProfile.bio }}
      </p>

      <ul class="education">
        <li
            v-for="education in cvProfile.educations"
        >
            {{ education }}
        </li>
      </ul>
    </v-container>

  </div>

</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {CvProfile} from '@/types/CvProfile';
import {Education} from '@/types/Education';

const cvProfile = ref<CvProfile>(new CvProfile());

onMounted(async () => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/cv-profiles/1`
  try {
    const {data} = await axios.get(url)
    cvProfile.value.cvProfileID = data.cv_profile_id;
    cvProfile.value.name = data.name;
    cvProfile.value.email = data.email;
    cvProfile.value.phone = data.phone;
    cvProfile.value.address = data.address;
    cvProfile.value.bio = data.bio;
    cvProfile.value.linkedinUrl = data.linkedin_url;
    cvProfile.value.githubUrl = data.github_url;
    cvProfile.value.profilePictureUrl = data.profile_picture;

    for (const eduData of data.education) {
      const education: Education = {
        id: eduData.id,
        institution: eduData.institution,
        degree: eduData.degree,
        startDate: eduData.start_date,
        endDate: eduData.end_date,
        cvProfileID: eduData.cv_profile_id,
      };
      cvProfile.value.educations.push(education);
    }
  } catch (e) {
    console.error(e)
  }
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