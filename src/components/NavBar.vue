<template>
  <div class="container topBotomBordersIn">
    <a href="#">About</a>
    <a href="#">Skills</a>
    <a href="#">Projects</a>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

div.container {
  margin: 0 auto;
  padding: 1rem 0 3rem 0;
  text-align: center;
}

div.container a {
  color: #FFF;
  text-decoration: none;
  font-size: 20px;
  margin: 0 10px;
  padding: 10px 2rem;
  position: relative;
  z-index: 0;
  cursor: pointer;
}

div.topBotomBordersIn a:before, div.topBotomBordersIn a:after {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #FFF;
  content: "";
  opacity: 0;
  transition: all 0.3s;
}

div.topBotomBordersIn a:before {
  top: 0;
  transform: translateY(-10px);
}

div.topBotomBordersIn a:after {
  bottom: 0;
  transform: translateY(10px);
}

div.topBotomBordersIn a:hover:before, div.topBotomBordersIn a:hover:after {
  opacity: 1;
  transform: translateY(0px);
}

</style>