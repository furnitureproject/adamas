<template>
<div>
  아이디 <input type="text" v-model="userId"><br>
  비밀번호 <input type="password" v-model="userPw"><br>
  <!-- <button @click="login">로그인</button> -->
  <CheckButton/>
  <button @click="userlogin">로그인</button>
  <!-- <button @click="testlogin">로그인</button> -->
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import axios from 'axios';
import CheckButton from '@/components/CheckButton.vue';

export default {
  computed: {
    ...mapState(['logincheck', 'isLogin']),
  },
  data() {
    return {
      userId: null,
      userPw: null,
      token: null,
      role: null,
    };
  },
  components: {
    CheckButton,
  },
  methods: {
    ...mapActions(['changeisLoginAct']),
    // 빨강색일때 유저 로그인
    async userlogin() {
      // 테스트 할거면 url 바꿔서 하면됨
      if (this.logincheck.userlog) {
        const url = '/ROOT/userlogin';
        const headers = { 'Content-Type': 'application/json' };
        const body = { userId: this.userId, userPw: this.userPw };
        const response = await axios.post(url, body, { headers })
          .catch(() => {
            alert('존재하지않는 아이디 입니다.');
            // console.log(err);
          });
        console.log(response);
        if (response.data.status === 200) {
          this.token = response.data.token;
          sessionStorage.setItem('token', this.token);
          this.changeisLoginAct(true);
          this.$router.push('/');
        } else if (response.data.status === 'invalid-password') {
          alert('아이디와 비밀번호가 일치하지 않습니다.');
        }
      } else if (this.logincheck.sellerlog) {
        const url = '/ROOT/sellerlogin';
        const headers = { 'Content-Type': 'application/json' };
        const body = { sellerId: this.userId, sellerPw: this.userPw };
        const response = await axios.post(url, body, { headers })
          .catch(() => {
            alert('존재하지않는 아이디 입니다.');
            // console.log(err);
          });
        // console.log(response);
        if (response.data.status === 200) {
          this.token = response.data.token;
          sessionStorage.setItem('token', this.token);
          this.$router.push('/');
        } else if (response.data.status === 'invalid-password') {
          alert('아이디와 비밀번호가 일치하지 않습니다.');
        }
      }
    },
    // async testlogin() {
    //   // console.log(this.logincheck.userlog);
    //   const url = '/ROOT/test/eee';
    //   const headers = { 'Content-Type': 'application/json' };
    //   const body = { testbody: 511975416797, testbody1: 'bodybodybodybodybodybody' };
    //   const res = await axios.post(url, body, { headers });
    //   console.log(res);
    // },
  },
};
</script>

<style>

</style>
