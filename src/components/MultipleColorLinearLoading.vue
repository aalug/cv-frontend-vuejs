<template>
  <div class="progress-container">
    <h2>Please wait...</h2>
    <v-progress-linear
        indeterminate
        color="#0079FF"
        :height="9"
        class="progress"
        style="width: 70%"
    ></v-progress-linear>
    <v-progress-linear
        indeterminate
        :height="6"
        color="#00DFA2"
        class="progress"
    ></v-progress-linear>
    <v-progress-linear
        indeterminate
        color="#F6FA70"
        :height="8"
        class="progress"
        style="width: 50%"
    ></v-progress-linear>
    <v-progress-linear
        indeterminate
        color="#FF0060"
        :height="10"
        class="progress"
        style="width: 80%"
    ></v-progress-linear>
  </div>
</template>

<style scoped>
.progress-container {
  width: 50rem;
  height: 80rem;
  position: fixed;
  top: 20rem;
  left: calc(50% - 25rem);
  z-index: 9999;
}

.progress-container h2 {
  text-align: center;
  color: #FFF;
  opacity: .9;
}

.progress {
  margin: .6rem;
}
</style>

