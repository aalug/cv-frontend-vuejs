<template>
  <div id="about">
    <!-- profile picture -->
    <v-img
        :src="cvProfile.profilePictureUrl"
        alt="profile picture"
        class="profile-pic"
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
          <ul class="education">
            <li
                v-for="education in cvProfile.educations"
            >
              <EducationCard :education="education"/>
            </li>
          </ul>
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
import ContactMe from "@/components/ContactMe.vue";

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
  console.log(cvProfile.value.profilePictureUrl)
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