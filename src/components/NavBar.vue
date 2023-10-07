<template>
  <div class="navbar top-bottom-in">
    <a href="#about">About</a>
    <a href="#my-skills">Skills</a>
    <a href="#">Projects</a>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

div.navbar {
  margin: 0 auto;
  padding: 1rem 0 3rem 0;
  text-align: center;
}

div.navbar a {
  color: #FFF;
  text-decoration: none;
  font-size: 2rem;
  margin: 0 10px;
  padding: 10px 3rem;
  position: relative;
  z-index: 0;
  cursor: pointer;
}

div.top-bottom-in a:before, div.top-bottom-in a:after {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #FFF;
  content: "";
  opacity: 0;
  transition: all 0.3s;
}

div.top-bottom-in a:before {
  top: 0;
  transform: translateY(-10px);
}

div.top-bottom-in a:after {
  bottom: 0;
  transform: translateY(10px);
}

div.top-bottom-in a:hover:before, div.top-bottom-in a:hover:after {
  opacity: 1;
  transform: translateY(0px);
}

</style>