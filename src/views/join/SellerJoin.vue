/* eslint-disable */
<template>
  <div class="inner">
    <div class="joinform">
      <h1>회원가입</h1>
      <div class='inputdiv'>
        <label for="idinput">ID</label>
        <input type='text' class="joinbox" id="idinput"
          v-model="sellerbody.sellerId" @input="checkId($event)">
        <div v-if="sellerIdcheck">아이디가 중복됩니다.</div>
      </div>
      <div class='inputdiv'>
        <label for="pwinput">비밀번호</label>
        <input type='password' class="joinbox" id="pwinput" v-model="sellerbody.sellerPw">
      </div>
      <div class='inputdiv'>
        <label for="pw2input">비밀번호 확인</label>
        <input type='password' class="joinbox" id="pw2input" v-model="sellerPw2">
        <div v-if="sellerPw2check">비밀번호가 일치하지 않습니다</div>
      </div>
      <div class='inputdiv'>
        <label for="nameinput">이름</label>
        <input type='text' class="joinbox" id="nameinput" v-model="sellerbody.sellerName">
      </div>
      <div class='inputdiv'>
        <label for="birthinput">생년월일</label>
        <input type='text' class="joinbox" id="birthinput" v-model="sellerbody.sellerBirth">
      </div>
      <div class='inputdiv'>
        <label for="phoneinput">전화번호</label>
        <input type='text' class="joinbox" id="phoneinput" v-model="sellerbody.sellerPhone">
      </div>
      <div class='inputdiv'>
        <label for="emailinput">E-mail</label>
        <input type='text' class="joinbox" id="emailinput" v-model="sellerEmail1">
        @
        <input type='text' class="joinbox" id="emailinput2" v-model="sellerEmail2">
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
        <input type='text' class="joinbox" id="bName" v-model="sellerbody.businessName">
      </div>
      <div class='inputdiv'>
        <label for="bCode">사업자 번호</label>
        <input type='number' class="joinbox" id="bCode" v-model="sellerbody.businessCode">
      </div>
      <div class='inputdiv'>
        <label for="sName">스토어명</label>
        <input type='text' class="joinbox" id="sName" v-model="sellerbody.storeName">
      </div>
      <div class='inputdiv'>
        <label for="sPhone">스토어 대표전화</label>
        <input type='text' class="joinbox" id="sPhone" v-model="sellerbody.storePhone">
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
    ...mapState(['sellerJoinBody']),

  },
  watch: {
    async sellerPw2(val) {
      console.log(val);
      const url = '/ROOT/test/userpw';
      const headers = { 'Content-Type': 'application/json' };
      const body = { userPw: this.sellerbody.sellerPw, userPw2: this.sellerPw2 };
      const response = await axios.post(url, body, { headers });
      console.log(response);
      if (response.data.status === 401) {
        this.sellerPw2check = true;
        console.log(this.sellerPw2check);
      } else {
        this.sellerPw2check = false;
        console.log(this.sellerPw2check);
      }
    },
    // async sellerId(val) {
    //   console.log(val);
    //   const url = '/ROOT/test/sellerid';
    //   const headers = { 'Content-Type': 'application/json' };
    //   const body = { sellerId: this.sellerbody.sellerId };
    //   const res = await axios.post(url, body, { headers });
    //   console.log(res);
    // },
  },
  data() {
    return {
      sellerbody: {
        sellerId: null,
        sellerPw: null,
        sellerName: null,
        sellerBirth: null,
        sellerPhone: null,
        sellerEmail: null,
        businessName: null,
        businessCode: null,
        storeName: null,
        storePhone: null,
      },
      sellerEmail1: '',
      sellerPw2: '',
      sellerEmail2: '',
      eoption: 0,
      eoptionss: [{ 0: '직접입력' }, { 1: 'naver.com' }, { 2: 'gmail.com' }, { 3: 'hanmail.net' }, { 4: 'nate.com' }, { 5: 'daum.net' }],
      sellerPw2check: false,
      sellerIdcheck: false,
    };
  },
  methods: {
    ...mapActions(['changeSellerJoinAct']),
    async goJoin() {
      const url = '/ROOT/seller/insert';
      const headers = { 'Content-Type': 'application/json' };
      this.sellerbody.sellerEmail = `${this.sellerEmail1}@${this.sellerEmail2}`;
      await this.changeSellerJoinAct(this.sellerbody);
      // console.log(this.sellerId);
      // console.log(this.sellerbody);
      // console.log(this.sellerJoinBody);
      const response = await axios.post(url, this.sellerJoinBody, { headers })
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
      //   this.sellerEmail2 = '';
      // } else if (this.eoption === '1') {
      //   this.sellerEmail2 = 'naver.com';
      // } else if (this.eoption === '2') {
      //   this.sellerEmail2 = 'gmail.com';
      // } else if (this.eoption === '3') {
      //   this.sellerEmail2 = 'hanmail.net';
      // } else if (this.eoption === '4') {
      //   this.sellerEmail2 = 'nate.com';
      // } else if (this.eoption === '5') {
      //   this.sellerEmail2 = 'daum.net';
      // }
      if (this.eoption === 0) {
        this.sellerEmail2 = '';
      } else {
        console.log(this.eoptionss[this.eoption]);
        this.sellerEmail2 = this.eoptionss[this.eoption][this.eoption];
      }
    },
    async checkId(event) {
      console.log(event.target.value);
      const url = '/ROOT/test/userid';
      const headers = { 'Content-Type': 'application/json' };
      const body = { userId: this.sellerbody.sellerId };
      const res = await axios.post(url, body, { headers });
      console.log(res);
      if (res.data.status === 401) {
        this.sellerIdcheck = true;
      } else {
        this.sellerIdcheck = false;
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
  #emailinput {
    width: 170px;
  }
  #emailinput2 {
    width: 310px;
  }
</style>
