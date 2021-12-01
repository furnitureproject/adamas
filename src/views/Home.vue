<template>
  <Carousel/>
  <div class="inner">
    <div class="mainImageTitle">
      <!-- <div class="mainImageText">
        <span class="text1st">Furniture</span>
        <span class="text2nd">Shop</span>
      </div> -->
      <div class="mainimgbox">
        <!-- <img src="@/assets/img/bigbed.jpg"> -->
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
            <li v-for="(b, bi) in bestItemlist" :key="bi" @click="goproduct(b.productCode)">
              <div class="productcard">
                <div class="imgbox">
                  <img :src=b.image>
                </div>
                <div class="cardcontent">
                  <div class="cardtitle">
                    <p>{{b.productTitle}}</p>
                  </div>
                  <div class="carddesc">
                    <p style="font-size:10px;">{{b.productDesc}}</p>
                  </div>
                  <div class="cardprice">
                    <strong>{{b.optionPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</strong><span>원</span>
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
import axios from 'axios';
import Carousel from '@/components/home/Carousel.vue';
import SixBox from '@/components/home/SixBox.vue';

export default {
  components: {
    Carousel, SixBox,
  },
  mounted() {
    this.getbestitems();
  },
  data() {
    return {
      bestItemlist: [], // 베스트상품
    };
  },
  methods: {
    // BEST 상품 가져오기
    async getbestitems() {
      const url = '/ROOT/product/main?sort=1&page=1';
      const headers = { 'Content-Type': 'application/json' };
      const res = await axios.get(url, headers);
      console.log(res);
      this.bestItemlist = res.data.list;
    },
    // 베스트 클릭시 상품 상세화면으로 보내기
    async goproduct(val) {
      this.$router.push(`/product/info?productCode=${val}`);
    }
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/home.scss';

</style>
