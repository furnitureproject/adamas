<template>
  <div class="aslidebox">
    <input type="radio" name="aslide" id="aslide01" checked>
    <input type="radio" name="aslide" id="aslide02">
    <input type="radio" name="aslide" id="aslide03">
    <input type="radio" name="aslide" id="aslide04">
    <ul class="aslidelist">
      <li class="aslideitem">
        <div>
          <label for="aslide04" class="left"></label>
          <label for="aslide02" class="right"></label>
          <a><img src="@/assets/img/bigbed.jpg"></a>
        </div>
      </li>
      <li class="aslideitem">
        <div>
          <label for="aslide01" class="left"></label>
          <label for="aslide03" class="right"></label>
          <a><img src="@/assets/img/bigtable.jpg"></a>
        </div>
      </li>
      <li class="aslideitem">
        <div>
          <label for="aslide02" class="left"></label>
          <label for="aslide04" class="right"></label>
          <a><img src="@/assets/img/room3.jpg"></a>
        </div>
      </li>
      <li class="aslideitem">
        <div>
          <label for="aslide03" class="left"></label>
          <label for="aslide01" class="right"></label>
          <a><img src="@/assets/img/room4.jpg"></a>
        </div>
      </li>
    </ul>
    <!-- 아래버튼 -->
    <!-- <ul class="paginglist">
      <li>
        <label for="aslide01"></label>
      </li>
      <li>
        <label for="aslide02"></label>
      </li>
      <li>
        <label for="aslide03"></label>
      </li>
      <li>
        <label for="aslide04"></label>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' src='@/assets/scss/home/carousel.scss' scoped>

</style>
