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

const loading = ref<boolean>(false);
const cvProfile = ref<CvProfile>(new CvProfile());

onMounted(async () => {
  let elem = document.getElementById("profile-pic");
  let bodyWidth = document.body.clientWidth;
  if (elem) {
    let elemWidth = elem.offsetWidth;
    elem.style.setProperty('--pic-position', `${(bodyWidth - 280) / 2}px`);
  }

  loading.value = true;
  try {
    const {data} = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/cv-profiles/1`)
    cvProfile.value.cvProfileID = data.cv_profile_id;
    cvProfile.value.name = data.name;
    cvProfile.value.email = data.email;
    cvProfile.value.phone = data.phone;
    cvProfile.value.address = data.address;
    cvProfile.value.bio = data.bio;
    cvProfile.value.linkedinUrl = data.linkedin_url;
    cvProfile.value.githubUrl = data.github_url;
    cvProfile.value.profilePictureUrl = data.profile_picture;

    // Sort education array by start date in descending order (latest first)
    data.education.sort((a: any, b: any) => {
      const date1 = new Date(a.start_date);
      const date2 = new Date(b.start_date);
      return date2.getTime() - date1.getTime();
    });

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
  loading.value = false;
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
  transform: translateY(0px);
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.6);
    transform: translateY(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translateY(0px);
  }
}

.bio {
  color: var(--color-text-color);
  width: 70%;
  margin: 5rem 4rem;
  text-align: justify !important;
  font-size: 1.4rem;
  line-height: 180%;
}

.my-name {
  font-size: 2.5rem;
  color: var(--color-orange-main);
  margin-top: 1rem;
  margin-bottom: 2rem;
}
</style>