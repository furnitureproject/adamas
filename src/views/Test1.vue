<template>
<section class="cards">
<article class="card card--1">
  <!-- <div class="card__img"></div>
  <a href="#" class="card_link">
    <div class="card__img--hover"></div>
  </a> -->
  <div>
  <img src="@/assets/img/desk1.jpg" class="card__img">
  </div>
  <div>
  <img src="@/assets/img/desk1.jpg" class="card__img--hover">
  </div>
  <div class="card__info">
    <span class="card__category"> Recipe</span>
    <h3 class="card__title">Crisp Spanish tortilla Matzo brei</h3>
    <span class="card__by">by <a href="#" class="card__author" title="author">Celeste Mills</a></span>
  </div>
</article>
  
  
<article class="card card--2">
  <div class="card__img"></div>
  <a href="#" class="card_link">
    <div class="card__img--hover"></div>
  </a>
  <div class="card__info">
    <span class="card__category"> Travel</span>
    <h3 class="card__title">Discover the sea</h3>
    <span class="card__by">by <a href="#" class="card__author" title="author">John Doe</a></span>
  </div>
</article>  
  
  
  
  </section>
</template>

<script>

export default {
  
};

</script>

<style lang='scss' scoped>
@import '@/assets/scss/test1.scss';

</style>
