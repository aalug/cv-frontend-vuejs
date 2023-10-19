<template>

  <v-layout class="layout">
    <router-view/>
  </v-layout>

</template>

<style scoped>
.layout {
  background-color: var(--color-navy);
  width: 100rem;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 6rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  justify-content: center;
}
</style>
