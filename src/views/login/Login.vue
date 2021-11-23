<template>
  <div class="inner">
    <!-- <div>
      아이디 <input type="text" v-model="userId"><br>
      비밀번호 <input type="password" v-model="userPw"><br>
      <CheckButton/>
      <button @click="userlogin">로그인</button>
    </div> -->

    <div class="container">
      <h2>로그인</h2>
      <div>
        <div class="inputBox">
          <input type="text" required="required" v-model="userId">
          <span>ID</span>
        </div>
        <div class="inputBox">
          <input type="password" required="required" v-model="userPw">
          <span>PASSWORD</span>
        </div>
        <CheckButton/>
        <div class="inputBox">
          <input type="button" value="LOGIN" @click="userlogin">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import axios from 'axios';
import CheckButton from '@/components/CheckButton.vue';

export default {
  mounted() {
    this.changeLoginAct(true);
    console.log(this.logincheck);
  },
  computed: {
    ...mapState(['logincheck', 'isLogin', 'roleLogin',]),
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
    ...mapActions(['changeisLoginAct', 'changeroleLoginAct', 'changeLoginAct']),
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
          const role = response.data.role;
          this.changeroleLoginAct(role);
          this.changeisLoginAct(true);
          console.log(this.roleLogin);
          alert('로그인 완료');
          this.$router.push('/');
        } else if (response.data.status === 'invalid-password') {
          alert('아이디와 비밀번호가 일치하지 않습니다.');
        }
      } else if (this.logincheck.sellerlog) {
        const url1 = '/ROOT/sellerlogin';
        const headers1 = { 'Content-Type': 'application/json' };
        const body1 = { sellerId: this.userId, sellerPw: this.userPw };
        const response1 = await axios.post(url1, body1, { headers1 })
          .catch(() => {
            alert('존재하지않는 아이디 입니다.');
            // console.log(err);
          });
        // console.log(response);
        if (response1.data.status === 200) {
          this.token = response1.data.token;
          sessionStorage.setItem('token', this.token);
          const role = response1.data.role;
          this.changeroleLoginAct(role);
          this.changeisLoginAct(true);
          console.log(this.roleLogin);
          alert('로그인 완료');
          this.$router.push('/');
        } else if (response1.data.status === 'invalid-password') {
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

<style lang='scss' scoped>
@import '@/assets/scss/test1.scss';

</style>
