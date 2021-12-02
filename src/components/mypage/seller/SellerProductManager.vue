<template>
  <div>
    <!-- 판매자 상품 관리
    <div class="title">
      타이틀 박스
    </div> -->
    <!-- <div class="content">
      <div class="tablebox">
        <div class="itemcard">
          <div class="imgbox">
            <img src="@/assets/img/desk1.jpg">
          </div>
          <div class="titlebox">
            <strong class="itemtitle">title</strong>
          </div>
          <div class="codebox">
            <p>code: <span>202111300001</span></p>
          </div>
          <div class="datebox">
            <p>regdate: <span>2021-11-30</span></p>
          </div>
        </div>
      </div>
    </div> -->

    <table class="type09" style="text-align:center">
      <thead>
      <tr>
        <th scope="cols"></th>
        <th scope="cols">상품코드</th>
        <th scope="cols">상품명</th>
        <th scope="cols">옵션명</th>
        <th scope="cols">가격</th>
        <th scope="cols">등록일</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(i, idx) in list" :key="idx">
        <th scope="row">{{idx+1}}</th>
        <td>{{i.productCode}}</td>
        <td>{{i.productTitle}}</td>
        <td>{{i.optionName}}</td>
        <td>{{i.optionPrice}}원</td>
        <td>{{i.productRegdateString}}</td>
      </tr>
      </tbody>
    </table>
    <div class="pagecon">
      <div class="pagebox">
        <ul>
          <li v-for="(p, pi) in pages" :key="pi" @click="changePage(pi+1)">{{pi+1}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.getProduct();
  },
  data() {
    return {
      token: sessionStorage.getItem('token'),
      list: [], // 받아온 데이터
      page: 1, // 상품 정보 현재페이지
      pages: 1, // 상품 정보 전체 페이지
    };
  },
  methods: {
    async getProduct() {
      const url = `/ROOT/seller/select_prolist?page=${this.page}`;
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const res = await axios.get(url, { headers });
      console.log(res);
      this.list = res.data.list;
      this.pages = res.data.cnt;
    },
    // 페이지 변경 함수
    changePage(val) {
      this.page = val;
      this.getProduct();
    }
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/mypage/seller/sellerproductmanager.scss';

</style>
