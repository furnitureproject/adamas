<template>
  <div class='mypageContainer'>
    <div class='TitleCon orderTitleCon'>
      <div class="Title">
        <h2>정보 변경</h2>
      </div>
    </div>
      <div class="inputcon">
        <div class='inputdiv'>
          <label for="idinput2">ID</label>
          <input type='text' class="joinbox" id="idinput2" disabled>
        </div>
        <div class='inputdiv'>
          <label for="pwinput2">비밀번호</label>
          <input type='password' class="joinbox" id="pwinput2">
        </div>
        <div class='inputdiv'>
          <label for="pw2input2">비밀번호 확인</label>
          <input type='password' class="joinbox" id="pw2input2">
        </div>
        <div class='inputdiv'>
          <label for="nameinput2">이름</label>
          <input type='text' class="joinbox" id="nameinput2" disabled>
        </div>
        <div class='inputdiv'>
          <label for="birthinput2">생년월일</label>
          <input type='text' class="joinbox" id="birthinput2" disabled>
        </div>
        <div class='inputdiv'>
          <label for="phoneinput2">전화번호</label>
          <input type='text' class="joinbox" id="phoneinput2">
        </div>
        <div class='inputdiv'>
          <label for="emailinput3">E-mail</label>
          <input type='text' class="joinbox emailid" id="emailinput3">
          @
          <input type='text' class="joinbox emailaddress" id="emailinput4">
        </div>
      </div>

    <div class="btnbox">
      <button class="fillBtn">변경하기</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.getinfo();
  },
  data() {
    return {
      token: sessionStorage.getItem('token'),
    };
  },
  methods: {
    async getinfo() {
      const url = '/ROOT/user/update';
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const res = await axios.get(url, { headers });
      console.log(res);
    }
  },
};
</script>

<style lang='scss' scoped>
.inputcon {
  margin: 0 auto;
  // text-align: center;
  margin-top: 30px;
}
.TitleCon {
  // background: #eee;
  padding: 26px 0px 16px 0px;
  border-bottom: 1px solid #999;
  margin-bottom: 15px;
}
.Title {
height: 40px;
  h2 {
    float: left;
    font-size: 20px;
    line-height: 40px;
  }
}

label {
  display: inline-block;
  // border: 3px dotted red;
  width: 200px;
  text-align: center;
}
.inputdiv {
  // text-align: center;
  margin-bottom: 30px;
}
.joinbox{
  width: 600px;
  padding: 10px 4px;
  border: none;
  border-bottom: 1px solid #444;
}
.emailid {
  width: 200px;
}
.emailaddress {
  width: 380px;
}
.btnbox {
  width: 800px;
  margin-top: 30px;
  text-align: right;
  padding: 20px 0px;
}
.fillBtn {
  font-size: 25px;
  padding: 5px 40px;
  border: 3px solid #333333;
  background-color: transparent;
  color: #b4b2b2;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
  // margin-right: 10px;
  label {
    padding: 10px;
  }
}
.fillBtn:focus {
  outline: none;
}
.fillBtn::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  top: 100%;
  left: 0;
  transition: all 0.4s;
  z-index: -1;
}
.fillBtn:hover::before {
  transform: translateY(-100%);
}
.fillBtn:hover {
  color: #1d1b2e;
  // color: #fff;
  cursor: pointer;
}
</style>
