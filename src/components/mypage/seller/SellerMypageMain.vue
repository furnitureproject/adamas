<template>
  <div>
    판매자 마이페이지 메인
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
      console.log(res)
    }
  },
};
</script>

<style>

</style>
