<template>
  <div class="inner">
    <!-- 전체 박스 -->
    <div class="container">

      <!-- 왼쪽 -->
      <div class="productSummary">
        <!-- 왼쪽박스 패딩용 박스 -->
        <div class="forPadding">
          <!-- 상단 왼쪽 중앙 container -->
          <div class="leftMidBoxCon">
            <!-- 상단 제일 왼쪽 박스 -->
            <div class="leftbox">
              <!-- 이미지 -->
              <div class="imagebox">
                <!-- 메인 이미지 -->
                <div class="titleImg">
                  <img :src= thumimage>
                </div>
                <!-- 서브 이미지 -->
                <div class="subImg">
                  <ul>
                    <li v-for="(subimg, subnum) in subimglist" :key="subnum"><img :src=subimg></li>
                    <!-- <li><img src="@/assets/img/desk3.jpg"></li> -->
                  </ul>
                </div>
              </div>
              <!-- 이미지 끝 -->
            </div>
            <!-- 상단 제일 왼쪽 박스 끝 -->

            <!-- 상단 중간 박스 -->
            <div class="middlebox">
              <!-- 제목 -->
              <div class="titlebox">
                <p>{{product.productTitle}}</p>
              </div>
              <!-- 제목 끝 -->
              <!-- 평점 별 -->
              <div class="tstar">
                스타 표시
              </div>
              <!-- 평점 별 끝 -->
              <!-- 대표가격 -->
              <div class="tprice">
                <strong>{{bossprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</strong><span>원</span>
              </div>
              <!-- 대표가격 끝 -->
              <!-- 상품 요약 설명 -->
              <div class="tdesc">
                <p>
                  {{product.productDesc}}
                </p>
              </div>
              <!-- 상품 요약 설명 끝 -->
            </div>
            <!-- 상단 중간 박스 끝-->
          </div>
          <!-- 상단 왼쪽 중앙 container 끝 -->
          <!-- 상품 정보 사진 -->
          <div class="descbox" v-for="(i, idx) in deslist" :key="idx">
            <img :src= i>
          </div>
          <!-- 상품 정보 사진 끝 -->

          <!-- 리뷰 시작 -->
          <div>
            <div class="reviewconTitle">
              <p> 전체리뷰 ({{reviewcount}}) </p>
            </div>
            <div v-for="review in reviewlist" v-bind:key="review.reviewNum" class="reviewcard">
              <div class="reviewtitlebox">
                <div class="reviewid">
                  {{review.user}}
                </div>
                <div class="reviewtitle">
                  {{review.reivewTitle}}
                </div>
                <div class="reviewdate">
                  {{review.reviewRegDateString}}
                </div>
              </div>
              
              
              <div class="star-ratings">
                <div 
                  class="star-ratings-fill space-x-2 text-lg"
                  :style="{ width: review.reviewStar*20 + '%' }"
                >
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <div class="star-ratings-base space-x-2 text-lg">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> 
                </div>  
              </div>
              <div class="reviewcontent">
                {{review.reviewContent}}
              </div>
              
              <img :src= review.reviewImage1 style="width:100px; height:100px" onerror="this.style.display='none'" v-if="review.reviewImage1">
              <img :src= review.reviewImage2 style="width:100px; height:100px" onerror="this.style.display='none'" v-if="review.reviewImage2">
              <img :src= review.reviewImage3 style="width:100px; height:100px" onerror="this.style.display='none'" v-if="review.reviewImage3">
            </div>
            <!-- 테스트용 버튼임 지울것 -->
            <div>
              <button class="fillBtn" @click="setReview">리뷰추가</button>
            </div>
          </div>
          <!-- 리뷰 끝 -->

        </div>
        <!-- 왼쪽박스 패딩용 박스 끝 -->
      </div>
      <!-- 왼쪽 끝 -->


      <!-- 오른쪽 -->
      <div class="productSidebar">
        <div class="rightforposition">
          <!-- 옵션 박스 -->          
          <div class="optioncontainer">
            <div class="optionwrap">
              <!-- <label for="optionbutton">옵션</label>
              <input type="button" id="optionbutton"> -->
              <p>옵션</p>
              <div class="optionwindow">
                <!-- 여기 카드부분이 반복문 돌아가면 됨 -->
                <div class="optionCard" v-for="(i, idx) in optionlist" :key="i" @click="funClone(i)">
                  <p>{{idx}}) {{i.optionName}}</p>
                  <div class="forcal forcal2">
                    <div>
                      <!-- <strong>{{i.optionPrice}}</strong><span> 원</span> -->
                      <strong>{{i.optionPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</strong><span> 원</span>
                    </div>
                  </div>  
                </div>

                              

              </div>
            </div>
          </div>
          <!-- 선택한 옵션 박스 -->
          <div class="optioncontainer">
            <div class="optionwrap">
              <div class="optionwindow windowforheight">
                <div class="optionCard" v-for="(s, no) in selOptionlist" :key="s">
                  <p>{{no}}) {{s.optionName}}</p>
                  <div class="forcal">
                    <input type="number" v-model="s.cartOptionCount">
                    <div>
                      <strong>{{s.optionPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</strong><span> 원</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <!-- 옵션 박스 끝 -->
          <!-- 가격 표시 박스 -->
          <div>
            <div class="tprice sideprice">
              <strong>555,555</strong><span>원</span>
            </div>
          </div>
          <!-- 가격 표시 박스 끝 -->
          <!-- 버튼 박스 -->
          <div class="buttonwrap">
            <button class="fillBtn" @click="commitCnt">장바구니</button>
            <button class="fillBtn orderBtn" @click='GoOrder'>구매하기</button>
          </div>
          <!-- 버튼 박스 끝 -->
        </div>
      </div>
      <!-- 오른쪽 끝 -->
    </div>
    <!-- 전체 박스 끝 -->
  </div>
  <!-- inner 끝 -->
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  created() {
    this.getproductinfo();
    console.log(this.optionlist);
    this.getSubImg();
  },
  data() {
    return {
      token: sessionStorage.getItem('token'),
      // 나중에 vuex에 넣고 query말고 action으로 변경할것.
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
      // 선택한 옵션 총 개수(추가하면 +1, 빼면 -1 로 구분하자)
      selOptionCnt: 0,
      // 선택한 옵션 리스트
      selOptionlist: [],
      // 카트에 담기는 수량
      cartcnt: 1,
      // 변경된 product 대표가격
      commaPrice: '',
      // 변경된 옵션 가격
      commaoptionPrice: '',
      // 대표가격
      bossprice: 0,
      // 리뷰용 변수 3개
      reviewlist : [],
      reviewcount : 0,
      imgbox : [], 
      // 서브 이미지 변수
      subimglist: [],
    };
  },
  methods: {
    ...mapActions(['changeorderdataAct']),
    async getproductinfo() {
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
      // 리뷰
      const url5 = `/ROOT/review/test?productcode=${this.productCode}&page=1`;
      const headers = { 'Content-Type': 'application/json' };
      try {
        const res = await axios.get(url, {headers});
        // category_categoryCode: 201001 
        // productCode: 202111090005 productDesc: "헹거2" 
        // productHit: 0 productTitle: "헹거2"
        this.product = res.data.product; 
        const res1 = await axios.get(url1, { headers });
        this.deslist = res1.data.list1;
        const res2 = await axios.get(url2, { headers });
        this.thumimage = res2.data.image;
        const res3 = await axios.get(url3, { headers });
        this.subimage = res3.data.list1;
        const res4 = await axios.get(url4, { headers });
        this.optionlist = res4.data.list;
        this.bossprice = res4.data.price;
        const res5 = await axios.get(url5, { headers });
        console.log(res5);
        if(res5.data.status == 200){
          this.reviewlist = res5.data.list.content
          this.reviewcount = res5.data.list.content.length
        }
        console.log(res);
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
    },
    // 클릭했을때 함수
    funClone(val) {
      // val 는 클릭한 옵션의 Option 데이터(백엔드에서 받은것)
      // const org = {productoptionCode: val.optionCode, optionName: val.optionName, optionPrice: val.optionPrice, cartOptionCount: 1};
      const org = {productOption:{optionCode: val.optionCode}, optionName: val.optionName, optionPrice: val.optionPrice, cartOptionCount: 1};
      // console.log(org);
      this.makeCard(org);
    },
    // 선택한 옵션을 선택옵션리스트에 추가해주는 함수
    makeCard(val) {
      this.selOptionlist.push(val);
      // console.log(this.selOptionlist);
    },
    // 장바구니 담기
    async commitCnt() {
      if(this.token === null) {
        this.$router.push('/login');
      }
      console.log(this.selOptionlist);
      const url = '/ROOT/cart';
      // const url1 = '/ROOT/order';
      const headers = { 'Content-Type': 'application/json', token: sessionStorage.getItem('token') };
      const body = this.selOptionlist;
      const res = await axios.post(url, body, {headers});
      // const res1 = await axios.post(url1, body, {headers});
      console.log(res);
      // console.log(res1);
      if(res.data.status === 200) {
        const YesOrNo = confirm('장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?');
        if(YesOrNo === true) {
          this.$router.push('/cart');
        }
      }
    },
    // 주문하기 버튼
    async GoOrder() {
      if(this.token === null) {
        this.$router.push('/login');
      }
      console.log(this.selOptionlist);
      const url = '/ROOT/orderdir';
      const headers = { 'Content-Type': 'application/json', token: sessionStorage.getItem('token') };
      const body = this.selOptionlist;
      console.log(body);
      const res = await axios.post(url, body, { headers });
      console.log(res);
      this.changeorderdataAct(res.data.orderCode);
      this.$router.push('/orderdir');
    },
    // 돈표시로 바꾸기
    changeMainDollar() {
      return product.optionPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    changeOptionDollar() {
      return product.optionPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    // 리뷰 가져오기
    async setReview() {
      const url = `/ROOT/review/test`;
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const body = { reviewTitle: '테스트', reviewContent: '테스트테스트', reviewStar: 4, product: {productCode: this.productCode} };
      const res = await axios.post(url, body, { headers });
      console.log(res);
    },
    // 서브 이미지 가져오기
    async getSubImg() {
      const url = `/ROOT/product/select_subimglist?productCode=${this.productCode}`;
      const headers = { 'Content-Type': 'application/json' };
      const res = await axios.get(url, { headers });
      console.log(res);
      this.subimglist = res.data.list1;
    }
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/product/productinfo.scss';

</style>
