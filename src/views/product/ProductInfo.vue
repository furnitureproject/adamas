<template>
  <div class="inner">
    <div class='TitleCon'>
      <div class="Title">
        <h2>상품 정보</h2>
      </div>
    </div>

      <div>
        <!-- <h1>WORKSTATION DESK</h1> -->
        <h1>{{product.productTitle}}</h1>
      </div>

    <div class="topCon">
      <div class="imgBox">
        <!-- <img src="@/assets/img/desk1.jpg" width="500" height="500"> -->
        <img :src= thumimage width="500" height="500">
      </div>

      <div class="topMenu">
          <div class="optionBox">
            <h1>옵션</h1>
            <select id="optionselect" size="15">
              <!-- <option>1</option> -->
              <option v-for="i in optionlist" :key="i">{{i.optionName}}</option>
            </select>
          </div>
          <div class="paymentBox">
            <h1>결제 및 카트</h1>
            <div class="cartPriceCon">
              <div class="cartPrice">
                <h4>판매가</h4>
                <span class='price'>
                  <em class='totalPrice'>54,578,500</em>원
                </span>
              </div>
            </div>
            <div class="cartPriceCon">
              <div class="cartPrice">
                <h4 class="discountTitle">할인가</h4>
                <span class='discountprice'>
                  <em class='totalPrice'>54,578,500</em>원
                </span>
              </div>
            </div>
          </div>
        <div class="buttonBox">
          <div class="buttonWrap">
            <button class="fillBtn">장바구니 담기</button>
            <button class="fillBtn orderBtn">구매하기</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 설명란 -->
    <div class="descCon">
      <!-- 설명 nav 칸 -->
      <div class="descNav">
        <div class="navWrap">
          <ul>
            <li>상세정보</li>
            <li>상품후기</li>
            <li>QnA</li>
            <li>배송안내</li>
          </ul>
        </div>
      </div>
      <!-- 설명 이미지 칸 -->
      <div>
        <div class="descimgbox">
          <!-- <img src='@/assets/img/11st1.jpg'> -->
          <img :src=i v-for="(i, idx) in deslist" :key="idx">
        </div>
      </div>
      <!-- 상품후기 칸 -->
      <div class="reviewWrap">
        <div class="reviewInner">
          <!-- reviewListWrap 부분을 반복문 돌릴것 -->
          <div class="reviewListWrap">
            <ul>
              <li class="realReview">
                <div class="reviewTop">
                  <!-- <p class="reviewIndex">reviewIndex</p> -->
                  <p class="reviewTitle">reviewTitle</p>
                  <p class="reviewRegdate">reviewRegdate</p>
                </div>
                <p class="starRating">starRating</p>
                <div class="reviewContentWrap">
                  <p class="reviewContent">reviewContent</p>
                </div>
                <div class="reviewImgWrap">
                  <img src="@/assets/img/model1.jpg" class="reviewImg">
                  <img src="@/assets/img/model2.jpg" class="reviewImg">
                  <img src="@/assets/img/model3.jpg" class="reviewImg">
                </div>
              </li>
              <li class="realReview">
                <div class="reviewTop">
                  <!-- <p class="reviewIndex">reviewIndex</p> -->
                  <p class="reviewTitle">reviewTitle</p>
                  <p class="reviewRegdate">reviewRegdate</p>
                </div>
                <p class="starRating">starRating</p>
                <div class="reviewContentWrap">
                  <p class="reviewContent">reviewContent</p>
                </div>
                <div class="reviewImgWrap">
                  <img src="@/assets/img/model1.jpg" class="reviewImg">
                  <img src="@/assets/img/model2.jpg" class="reviewImg">
                  <img src="@/assets/img/model3.jpg" class="reviewImg">
                </div>
              </li>
            </ul>
            <div class="reviewPage">Pagenation</div>
          </div>
        </div>
      </div>

      <!-- QnA -->
      <div class="qnaWrap">
        <div class="accordion">
          <input type="radio" name="accordion" checked id="answer01">
          <label for="answer01">QNATitle<em></em></label>
          <div>
            <div><p>QNAContent</p></div>
            <div><p>QNAanswer</p></div>
          </div>
          <input type="radio" name="accordion" id="answer02">
          <label for="answer02">QNATitle<em></em></label>
          <div>
            <div><p>QNAContent</p></div>
            <div><p>QNAanswer</p></div>
          </div>
          <input type="radio" name="accordion" id="answer03">
          <label for="answer03">QNATitle<em></em></label>
          <div>
            <div><p>QNAContent</p></div>
            <div><p>QNAanswer</p></div>
          </div>
          <input type="radio" name="accordion" id="answer04">
          <label for="answer04">QNATitle<em></em></label>
          <div>
            <div><p>QNAContent</p></div>
            <div><p>QNAanswer</p></div>
          </div>
        </div>
        <div>
          <div>PAGENATION</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    this.testgetproductinfo();
  },
  data() {
    return {
      // productinfo 테스트용 변수
      productCode: this.$route.query.productCode,
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
        console.log(this.optionlist);
      }
      catch(err) {
        console.log(err);
      }
    }
  },
};
</script>

<style lang='scss' src='@/assets/scss/product/productinfo.scss' scoped>


</style>
