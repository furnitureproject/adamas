<template>
  <div>
    <table class="type09">
      <thead>
      <tr>
        <th scope="cols">상품코드</th>
        <th scope="cols">상품명</th>
        <th scope="cols">문의글 제목</th>
        <th scope="cols">문의글 내용</th>
        <th scope="cols">날짜</th>
        <th scope="cols">답글</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(q, idx) in qnalist" :key="idx">
        <th scope="row">{{q.productCode}}</th>
        <td>{{q.productTitle}}</td>
        <td>{{q.qnaTitle}}</td>
        <td>{{q.qnaContent}}</td>
        <td>{{q.qnaReplyRegdateString}}</td>
        <td><button>답글달기</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.getQnAdata();
  },
  data() {
    return {
      token: sessionStorage.getItem('token'), // 토큰
      qnapage: 1, // 현재 페이지
      qnaAllpages: 1, // 전체 페이지 
      qnalist: [], // 받은 데이터    
    };
  },
  methods: {
    async getQnAdata() {
      const url = `/ROOT/seller/select_qnalist?page=${this.qnapage}`;
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const res = await axios.get(url, { headers });
      console.log(res);
      this.qnalist = res.data.list;
      this.qnaAllpages = res.data.cnt;
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
</style>

