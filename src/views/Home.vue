<template>
  <Carousel/>
  <div class="inner">
    <div class="mainImageTitle">
      <!-- <div class="mainImageText">
        <span class="text1st">Furniture</span>
        <span class="text2nd">Shop</span>
      </div> -->
      <div class="mainimgbox">
        <img src="@/assets/img/bigbed.jpg">
      </div>
    </div>
    <div>
      <div class='TitleCon'>
        <div class="Title">
          <h2>베스트 상품</h2>
        </div>
      </div>
      <div class="listcon">
        <div class="bestproduct">
          <ul>
            <li>
              <div class="productcard">
                <div class="imgbox">
                  <img src="@/assets/img/furniture1.jpg">
                </div>
                <div class="cardcontent">
                  <div class="cardtitle">
                    <p>상품제목</p>
                  </div>
                  <div class="carddesc">
                    <p>잡다한 내용</p>
                  </div>
                  <div class="cardprice">
                    <strong>959,984</strong><span>원</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
    <SixBox/>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/home/Carousel.vue';
import SixBox from '@/components/home/SixBox.vue';

export default {
  components: {
    Carousel, SixBox,
  },
  mounted() {
    
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/home.scss';

</style>
