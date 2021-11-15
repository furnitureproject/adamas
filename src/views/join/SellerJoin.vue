/* eslint-disable */
<template>
  <div class="inner">
    <div class="joinform">
      <h1>회원가입</h1>
      <div class='inputdiv'>
        <label for="idinput">ID</label>
        <input type='text' class="joinbox" id="idinput"
          v-model="userbody.userId" @input="checkId($event)">
        <div v-if="userIdcheck">아이디가 중복됩니다.</div>
      </div>
      <div class='inputdiv'>
        <label for="pwinput">비밀번호</label>
        <input type='password' class="joinbox" id="pwinput" v-model="userbody.userPw">
      </div>
      <div class='inputdiv'>
        <label for="pw2input">비밀번호 확인</label>
        <input type='password' class="joinbox" id="pw2input" v-model="userPw2">
        <div v-if="userPw2check">비밀번호가 일치하지 않습니다</div>
      </div>
      <div class='inputdiv'>
        <label for="nameinput">이름</label>
        <input type='text' class="joinbox" id="nameinput" v-model="userbody.userName">
      </div>
      <div class='inputdiv'>
        <label for="birthinput">생년월일</label>
        <input type='text' class="joinbox" id="birthinput" v-model="userbody.userBirth">
      </div>
      <div class='inputdiv'>
        <label for="phoneinput">전화번호</label>
        <input type='text' class="joinbox" id="phoneinput" v-model="userbody.userPhone">
      </div>
      <div class='inputdiv'>
        <label for="emailinput">E-mail</label>
        <input type='text' class="joinbox" id="emailinput" v-model="userEmail1">
        @
        <input type='text' class="joinbox" id="emailinput2" v-model="userEmail2">
        <select v-model="eoption" @click="econtrol()">
          <option v-for="(item, idx) in eoptionss" :key="idx" :value='idx'>{{item[idx]}}</option>
        </select>
      </div>
      <!-- <select v-model="eoption" @click="econtrol()">
          <option :value='0'>직접입력</option>
          <option :value='1'>naver.com</option>
          <option :value='2'>gmail.com</option>
          <option :value='3'>hanmail.net</option>
          <option :value='4'>nate.com</option>
          <option :value='5'>daum.net</option>
        </select> -->
      <div class='inputdiv'>
        <label for="bName">상호명</label>
        <input type='text' class="joinbox" id="bName" v-model="userbody.userName">
      </div>
      <div class='inputdiv'>
        <label for="bCode">사업자 번호</label>
        <input type='text' class="joinbox" id="bCode" v-model="userbody.userName">
      </div>
      <div class='inputdiv'>
        <label for="sName">스토어명</label>
        <input type='text' class="joinbox" id="sName" v-model="userbody.userName">
      </div>
      <div class='inputdiv'>
        <label for="sPhone">스토어 대표전화</label>
        <input type='text' class="joinbox" id="sPhone" v-model="userbody.userName">
      </div>
      <button class="joinbtn" @click="goJoin">회원가입</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import axios from 'axios';

export default {
  computed: {
    ...mapState(['userJoinBody']),

  },
  watch: {
    async userPw2(val) {
      console.log(val);
      const url = '/ROOT/test/userpw';
      const headers = { 'Content-Type': 'application/json' };
      const body = { userPw: this.userbody.userPw, userPw2: this.userPw2 };
      const response = await axios.post(url, body, { headers });
      console.log(response);
      if (response.data.status === 401) {
        this.userPw2check = true;
        console.log(this.userPw2check);
      } else {
        this.userPw2check = false;
        console.log(this.userPw2check);
      }
    },
    // async userId(val) {
    //   console.log(val);
    //   const url = '/ROOT/test/userid';
    //   const headers = { 'Content-Type': 'application/json' };
    //   const body = { userId: this.userbody.userId };
    //   const res = await axios.post(url, body, { headers });
    //   console.log(res);
    // },
  },
  data() {
    return {
      userbody: {
        userId: null,
        userPw: null,
        userName: null,
        userBirth: null,
        userPhone: null,
        userEmail: null,
      },
      userEmail1: '',
      userPw2: '',
      userEmail2: '',
      eoption: 0,
      eoptionss: [{ 0: '직접입력' }, { 1: 'naver.com' }, { 2: 'gmail.com' }, { 3: 'hanmail.net' }, { 4: 'nate.com' }, { 5: 'daum.net' }],
      userPw2check: false,
      userIdcheck: false,
    };
  },
  methods: {
    ...mapActions(['changeUserJoinAct']),
    async goJoin() {
      const url = '/ROOT/user/join';
      const headers = { 'Content-Type': 'application/json' };
      this.userbody.userEmail = `${this.userEmail1}@${this.userEmail2}`;
      await this.changeUserJoinAct(this.userbody);
      // console.log(this.userId);
      // console.log(this.userbody);
      // console.log(this.userJoinBody);
      const response = await axios.post(url, this.userJoinBody, { headers })
        .catch((error) => {
          console.log(error);
        });
      console.log(response);
      if (response.data.status === 200) {
        this.$router.push({ path: '/' });
      }
    },
    econtrol() {
      console.log(this.eoption);
      // if (this.eoption === '0') {
      //   this.userEmail2 = '';
      // } else if (this.eoption === '1') {
      //   this.userEmail2 = 'naver.com';
      // } else if (this.eoption === '2') {
      //   this.userEmail2 = 'gmail.com';
      // } else if (this.eoption === '3') {
      //   this.userEmail2 = 'hanmail.net';
      // } else if (this.eoption === '4') {
      //   this.userEmail2 = 'nate.com';
      // } else if (this.eoption === '5') {
      //   this.userEmail2 = 'daum.net';
      // }
      if (this.eoption === 0) {
        this.userEmail2 = '';
      } else {
        console.log(this.eoptionss[this.eoption]);
        this.userEmail2 = this.eoptionss[this.eoption][this.eoption];
      }
    },
    async checkId(event) {
      console.log(event.target.value);
      const url = '/ROOT/test/userid';
      const headers = { 'Content-Type': 'application/json' };
      const body = { userId: this.userbody.userId };
      const res = await axios.post(url, body, { headers });
      console.log(res);
      if (res.data.status === 401) {
        this.userIdcheck = true;
      } else {
        this.userIdcheck = false;
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.joinbox{
    width: 600px;
    padding: 10px 4px;
    border: none;
    border-bottom: 1px solid #444;
}
  h1 {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 100px;
  }
  .joinform {
    padding: 0 75px;
  }
  label {
    display: inline-block;
    // border: 3px dotted red;
    width: 200px;
    // text-align: center;
  }
  .inputdiv {
    text-align: center;
    margin-bottom: 15px;
  }
  .joinbtn {
    padding: 20px;
    border: 0px;
    &:hover{
      cursor: pointer;
    }
    background: turquoise;
  }
</style>
