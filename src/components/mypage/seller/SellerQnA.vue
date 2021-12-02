<template>
  <div>
    <!-- QnA 등록 화면 -->
    <div :class="qnaboardclass">
      <textarea cols="25" rows="10" placeholder="내용" v-model="qnaReply"></textarea>
      <button class="fillBtn" @click="qnaAnswer">답글 작성</button>
      <button class="fillBtn" @click="qnaCancel">취소</button>
    </div>
    <table class="type09">
      <thead>
      <tr>
        <th scope="cols">상품코드</th>
        <th scope="cols">상품명</th>
        <th scope="cols">문의글 제목</th>
        <th scope="cols">문의글 내용</th>
        <th scope="cols">등록일자</th>
        <th scope="cols">답글</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(q, idx) in qnalist" :key="idx">
        <th scope="row">{{q.productCode}}</th>
        <td>{{q.productTitle}}</td>
        <td>{{q.qnaTitle}}</td>
        <td>{{q.qnaContent}}</td>
        <td>{{q.qnaRegdateString}}</td>
        <td><button class="addreply" v-if="q.qnaReply==null" @click="showreply(q.qnaNum)">답글달기</button><p v-if="q.qnaReply!=null">{{q.qnaReply}}</p></td>
      </tr>
      </tbody>
    </table>
    <div class="pagecon">
      <div class="pagebox">
        <ul>
          <li v-for="(p, pi) in qnaAllpages" :key="pi" @click="changePage(pi+1)">{{pi+1}}</li>
        </ul>
      </div>
    </div>
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
      qnano: 0,
      qnaboardclass: [{ qnaboard: true }, { boardappear: false }], // 화면 나오게 하기    
      qnaReply: '',
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
    },
    // 답글 창 열기
    async showreply(val) {
      console.log(val);
      this.qnano = val;
      this.qnaboardclass[1].boardappear = true;
    },
    // 답글 등록
    async qnaAnswer() {
      const url = `/ROOT/qna/update2?qnano=${this.qnano}`;
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const body = { qnaReply: this.qnaReply };
      const res = await axios.put(url, body, { headers });
      console.log(res);
      this.qnaboardclass[1].boardappear = false;
      this.getQnAdata();
    },
    // 답글 창 닫기
    qnaCancel() {
      this.qnaboardclass[1].boardappear = false;
    },
    changePage(val) {
      this.qnapage = val;
      this.getQnAdata();
    }
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/mypage/seller/sellerqna.scss';

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

