<template>

  <v-layout class="layout">
    <router-view/>
  </v-layout>

</template>

<style scoped>
.layout {
  background-color: var(--color-navy);
  opacity: 0.9;
  width: 100rem;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 6rem;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.7);
}
</style>
