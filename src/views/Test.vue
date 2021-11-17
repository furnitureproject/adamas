<template>
  <div class="container">
      <div id="header" :class="activeclass[0]">
        <nav>
          <div class="logo"><img src="#" /></div>
          <ul>
            <li><a>HOME</a></li>
            <li><a>COMPANY</a></li>
            <li><a>SERVICE</a></li>
            <li><a>PORODUCT</a></li>
            <li><a>NOTICE</a></li>
          </ul>
        </nav>
      </div>
      <div v-for="i in deslist" :key="i">
        <img :src="i" alt="" width="100" height="100">
      </div>
      <button @click="testgetproductinfo">상품 정보</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    window.addEventListener("scroll", this.scrollnav);
  },
  data() {
      return {
        // scroll할때 스타일을 주기위한 변수
        activeclass: [{active: false}],
        // productinfo 테스트용 변수
        productCode: 202111090005,
        // 받은것
        // 상품정보
        product: {},
        // 설명이미지
        deslist: [],
        // 썸네일이미지
        thumimage: '',
        // 다른 썸네일 이미지
        subimage: [],
        // 옵션 리스트
        optionlist: [],
      };
    },
  methods: {
    scrollnav(){
      // console.log(window.scrollY);
      if(window.scrollY > 0) {
        this.activeclass[0].active=true;
        // console.log(this.activeclass[0].active);
      }
      else {
        this.activeclass[0].active=false;
        // console.log(this.activeclass[0].active);
      }
    },
    async testgetproductinfo() {
      // 상품 정보
      const url = `/ROOT/product/select_one?productCode=${this.productCode}`;
      // 상품 설명 이미지
      const url1 = `/ROOT/product/select_desimglist?productCode=${this.productCode}`;
      // 상품 대표 이미지
      const url2 = `/ROOT/product//select_Thumimage?productCode=${this.productCode}`;
      // 상품 서브 이미지
      const url3 = `/ROOT/product/select_subimglist?productCode=${this.productCode}`;
      // 상품 옵션
      const url4 = `/ROOT/productoption/select_list?productCode=${this.productCode}`;
      const headers = { 'Content-Type': 'application/json' };
      try {
        const res = await axios.get(url, {headers});
        // category_categoryCode: 201001 
        // productCode: 202111090005 productDesc: "헹거2" 
        // productHit: 0 productTitle: "헹거2"
        this.product = res.data.product; 
        const res1 = await axios.get(url1, {headers});
        this.deslist = res1.data.list1;
        const res2 = await axios.get(url2, {headers});
        this.thumimage = res2.data.image;
        const res3 = await axios.get(url3, {headers});
        this.subimage = res3.data.list1;
        const res4 = await axios.get(url4, {headers});
        this.optionlist = res4.data.list;

        // console.log(res);
        // console.log(res1);
        // console.log(res2);
        // console.log(res3);
        // console.log(res4);
        // console.log(this.product);
        // console.log(this.deslist);
        // console.log(this.thumimage);
        // console.log(this.subimage);
        // console.log(this.optionlist);
      }
      catch(err) {
        console.log(err);
      }
    },
  },
  // $(window).on("scroll", function () {
  //       if ($(window).scrollTop()) {
  //         $("#header").addClass("active");
  //       } else {
  //         $("#header").removeClass("active");
  //       }
  //     });
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/test.scss';

</style>
