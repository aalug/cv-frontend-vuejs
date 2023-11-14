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

          <!--  Loading  -->
          <ContentLoader
              v-if="loading" 
              viewBox="0 0 300 100"
              secondaryColor="var(--color-text-color)"
              style="opacity: .65;"
          >
            <rect x="0" y="0" rx="1" ry="1" width="50" height="7"/>
            <rect x="55" y="0" rx="1" ry="1" width="20" height="7"/>
            <rect x="80" y="0" rx="1" ry="1" width="80" height="7"/>
            <rect x="165" y="0" rx="1" ry="1" width="25" height="7"/>
            <rect x="195" y="0" rx="1" ry="1" width="40" height="7"/>
            <rect x="240" y="0" rx="1" ry="1" width="30" height="7"/>

            <rect x="0" y="13" rx="1" ry="1" width="60" height="7"/>
            <rect x="65" y="13" rx="1" ry="1" width="30" height="7"/>
            <rect x="105" y="13" rx="1" ry="1" width="50" height="7"/>
            <rect x="160" y="13" rx="1" ry="1" width="35" height="7"/>
            <rect x="200" y="13" rx="1" ry="1" width="20" height="7"/>
            <rect x="230" y="13" rx="1" ry="1" width="40" height="7"/>

            <rect x="0" y="26" rx="1" ry="1" width="15" height="7"/>
            <rect x="20" y="26" rx="1" ry="1" width="20" height="7"/>
            <rect x="25" y="26" rx="1" ry="1" width="45" height="7"/>
            <rect x="75" y="26" rx="1" ry="1" width="60" height="7"/>
            <rect x="140" y="26" rx="1" ry="1" width="40" height="7"/>
            <rect x="185" y="26" rx="1" ry="1" width="15" height="7"/>
            <rect x="205" y="26" rx="1" ry="1" width="65" height="7"/>

            <rect x="0" y="39" rx="1" ry="1" width="50" height="7"/>
            <rect x="55" y="39" rx="1" ry="1" width="20" height="7"/>
            <rect x="80" y="39" rx="1" ry="1" width="80" height="7"/>
            <rect x="165" y="39" rx="1" ry="1" width="25" height="7"/>
            <rect x="195" y="39" rx="1" ry="1" width="40" height="7"/>
            <rect x="240" y="39" rx="1" ry="1" width="30" height="7"/>

            <rect x="0" y="52" rx="1" ry="1" width="60" height="7"/>
            <rect x="65" y="52" rx="1" ry="1" width="30" height="7"/>
            <rect x="105" y="52" rx="1" ry="1" width="50" height="7"/>
            <rect x="160" y="52" rx="1" ry="1" width="35" height="7"/>
            <rect x="200" y="52" rx="1" ry="1" width="20" height="7"/>
            <rect x="230" y="52" rx="1" ry="1" width="40" height="7"/>

            <rect x="0" y="65" rx="1" ry="1" width="15" height="7"/>
            <rect x="20" y="65" rx="1" ry="1" width="20" height="7"/>
            <rect x="25" y="65" rx="1" ry="1" width="45" height="7"/>
            <rect x="75" y="65" rx="1" ry="1" width="60" height="7"/>
            <rect x="140" y="65" rx="1" ry="1" width="40" height="7"/>
            <rect x="185" y="65" rx="1" ry="1" width="15" height="7"/>
            <rect x="205" y="65" rx="1" ry="1" width="65" height="7"/>

            <rect x="0" y="78" rx="1" ry="1" width="50" height="7"/>
            <rect x="55" y="78" rx="1" ry="1" width="20" height="7"/>
            <rect x="80" y="78" rx="1" ry="1" width="80" height="7"/>
            <rect x="165" y="78" rx="1" ry="1" width="25" height="7"/>
            <rect x="195" y="78" rx="1" ry="1" width="40" height="7"/>
            <rect x="240" y="78" rx="1" ry="1" width="30" height="7"/>

            <rect x="0" y="91" rx="1" ry="1" width="15" height="7"/>
            <rect x="20" y="91" rx="1" ry="1" width="20" height="7"/>
            <rect x="25" y="91" rx="1" ry="1" width="45" height="7"/>
            <rect x="75" y="91" rx="1" ry="1" width="60" height="7"/>
            <rect x="140" y="91" rx="1" ry="1" width="40" height="7"/>
            <rect x="185" y="91" rx="1" ry="1" width="15" height="7"/>
            <rect x="205" y="91" rx="1" ry="1" width="65" height="7"/>

          </ContentLoader>

          <p v-else>
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
import {ContentLoader} from 'vue-content-loader';
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
  width: 60%;
  margin: auto 4rem;
  text-align: justify !important;
  font-size: 1.4rem;
  line-height: 180%;
}

.my-name {
  font-size: 2rem;
  color: var(--color-red);
  margin-bottom: 2rem;
}

.education {
  list-style: none;
  width: 30%;
}
</style>