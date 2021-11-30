<template>
  <div>
    판매자 마이페이지 메인
    <div class="title">
      타이틀 박스
    </div>
    <div class="content">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.getsellerdelivery();
  },
  data() {
    return {
      token: sessionStorage.getItem('token'),
    };
  },
  methods: {
    // 판매자 아이디별로 딜리버리 조회 테스트
    async getsellerdelivery() {
      const url = '/ROOT/seller/select_dellist?page=1';
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const res = await axios.get(url, { headers });
      console.log(res);
    }
  },
};
</script>

<style lang='scss' scoped>
.title {
  height: 75px;
  background: #eee;
}
.content {
  margin-top: 15px;
}
</style>
