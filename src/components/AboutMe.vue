<template>
  <div id="about">
    <!-- profile picture -->
    <v-img
        :src="cvProfile.profilePictureUrl"
        alt="profile picture"
        class="profile-pic"
        id="profile-pic"
    ></v-img>

    <!-- about -->
    <v-container>
      <h3 class="my-name">My name is {{ cvProfile.name }},</h3>

      <div class="d-flex">
        <div style="width: 30%">
          <!--  Contact   -->
          <ContactMe
              :address="cvProfile.address"
              :email="cvProfile.email"
              :git-hub-url="cvProfile.githubUrl"
              :phone-number="cvProfile.phone"
          />

          <!--  Education    -->
          <EducationCard :educations="cvProfile.educations"/>

        </div>

        <!--  Bio    -->
        <div class="bio">
          <p>
            {{ cvProfile.bio }}
          </p>
        </div>
      </div>
    </v-container>

  </div>

</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {CvProfile} from '@/types/CvProfile';
import {Education} from '@/types/Education';
import EducationCard from '@/components/EducationCard.vue';
import ContactMe from '@/components/ContactMe.vue';
import GolfClub from '@/components/GolfClub.vue';
import LedLight from "@/components/LedLight.vue";

const cvProfile = ref<CvProfile>(new CvProfile());

onMounted(async () => {
  let elem = document.getElementById("profile-pic");
  let bodyWidth = document.body.clientWidth;
  if (elem) {
    let elemWidth = elem.offsetWidth;
    elem.style.setProperty('--pic-position', `${(bodyWidth - 280) / 2}px`);
  }

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
  width: 280px;
  height: 280px;
  background: #fbfbf8;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.4);
  margin: 2rem auto 1rem;
  border-radius: 100%;
  transition: transform 1s;
  position: relative;
  animation: movePic 4.8s linear 1,
  spin .8s linear 3,
  reverseSpin 2.3s ease-out 2.4s;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes reverseSpin {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes movePic {
  0% {
    left: -100%;
    animation-timing-function: linear;
  }
  50% {
    left: var(--pic-position);
    animation-timing-function: ease-out;;
  }
  100% {
    left: 0;
  }
}

.bio {
  color: var(--color-text-color);
  width: 70%;
  margin: auto 4rem;
  text-align: justify !important;
  font-size: 1.3rem;
  line-height: 170%;
}

.my-name {
  font-size: 1.8rem;
  color: var(--color-red);
  margin-bottom: 2rem;
}

.education {
  list-style: none;
  width: 30%;
}
</style>