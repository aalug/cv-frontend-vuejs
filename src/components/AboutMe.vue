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
        <div class="bio" v-html="cvProfile.bio"></div>

      </div>
    </v-container>

  </div>

</template>

<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {useFetchDataStore} from '@/store/fetch_data';
import EducationCard from '@/components/EducationCard.vue';
import ContactMe from '@/components/ContactMe.vue';

const fetchDataStore = useFetchDataStore();

const {cvProfile} = storeToRefs(fetchDataStore);

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