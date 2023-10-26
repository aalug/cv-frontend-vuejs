<template>
  <div class="contact-info">
    <span>Contact Information</span>
    <p><strong>Address:</strong> {{ address }}</p>
    <p><strong>Phone:</strong> {{ phoneNumber }}</p>
    <p><strong>Email:</strong> {{ email }}</p>

    <a class="github-link"
       :href="gitHubUrl"
       target="_blank"
    >
      <div >
        GitHub: aalug
        <font-awesome-icon
            id="gh-logo"
            icon="fa-brands fa-github"
            size="xl"
        />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import {createVitePlugin} from "unplugin";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps<{
  email: string;
  phoneNumber: string;
  address: string;
  gitHubUrl: string;
}>();

</script>

<style scoped>
.contact-info {
  text-align: justify;
  margin-left: 2rem;
  font-size: 1.5rem;
  color: var(--color-black);
  padding: .5rem 1rem;
  line-height: 220%;
}

.github-link {
  text-decoration: none;
}

.github-link div {
  width: 16rem;
  text-align: center;
  color: #FFF;
  background: #000;
  padding: .5rem;
  transition: .3s ease;
}

.github-link div:hover {
  background: #FFF;
  color: #000;
  outline: solid 1px black;
}

.contact-info span {
  font-size: 1.9rem;
  font-weight: bold;
  border-bottom: solid 2px black;
}
</style>