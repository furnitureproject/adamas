<template>
  <div class="container">
    <h2>Our Newsletter</h2>
    <div>
      <div class="inputBox">
        <input type="text" required="required">
        <span>ID</span>
      </div>
      <div class="inputBox">
        <input type="email" required="required">
        <span>PASSWORD</span>
      </div>
      <div class="inputBox">
        <input type="button" value="Subscribe">
      </div>
    </div>
  </div>

  <nav>
    <div id='marker'></div>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Portfolio</a>
    <a href="#">Team</a>
    <a href="#">Contact</a>
  </nav>
</template>

<script>
import { test } from '../assets/js/test.js';

export default {
  mounted() {
    test();
  }
};

</script>

<style lang='scss' scoped>
@import '@/assets/scss/test1.scss';

</style>
