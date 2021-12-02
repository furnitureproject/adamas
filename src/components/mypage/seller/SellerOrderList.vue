<template>
  <div>
    <table class="type09" style="text-align:center">
      <thead>
      <tr>
        <th scope="cols"></th>
        <th scope="cols">주문코드</th>
        <th scope="cols">상품명</th>
        <th scope="cols">옵션명</th>
        <th scope="cols">가격</th>
        <th scope="cols">받는사람</th>
        <th scope="cols">등록일</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(i, idx) in list" :key="idx">
        <th scope="row">{{idx+1}}</th>
        <td>{{i.orderCode}}</td>
        <td>{{i.productTitle}}</td>
        <td>{{i.optionName}}</td>
        <td>{{i.price}}원</td>
        <td>{{i.receiverName}}</td>
        <td>{{i.orderDateString}}</td>
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
    this.getOrder();
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
    async getOrder() {
      const url = `/ROOT/seller/select_dellist?page=${this.page}`;
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const res = await axios.get(url, { headers });
      console.log(res);
      this.list = res.data.list;
      this.pages = res.data.cnt;
    },
    // 페이지 변경 함수
    changePage(val) {
      this.page = val;
      this.getOrder();
    }
  },
};
</script>

<style lang='scss' scoped>
table.type09 {
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  margin-top: 82px;
}
table.type09 thead th {
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  // color: #369;
  // border-bottom: 3px solid #036;
  color: #2F4858;
  border-bottom: 3px solid #2F4858;
}
table.type09 tbody th {
  width: 150px;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
  background: #f3f6f7;
}
table.type09 td {
  width: 350px;
  padding: 10px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
}
.pagecon {
  margin-top: 30px;
  .pagebox {
    ul {
      text-align: center;
      li {
        display: inline-block;
        margin-right: 15px;
        padding: 5px 10px;
        &:hover {
          background: #222;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
