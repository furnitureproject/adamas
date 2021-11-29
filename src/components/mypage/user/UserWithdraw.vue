<template>
  <div class="mypageContainer">
    <div class='TitleCon orderTitleCon'>
      <div class="Title">
        <h2>회원 탈퇴</h2>
      </div>
    </div>

    <div class="inputcon">
        <div class='inputdiv'>
          <label for="idinput">ID</label>
          <input type='text' class="joinbox" id="idinput">
        </div>
        <div class='inputdiv'>
          <label for="pwinput">비밀번호</label>
          <input type='password' class="joinbox" id="pwinput">
        </div>
    </div>
    <div class="btnbox">
      <button class="fillBtn" @click="Withdrawbtn">회원탈퇴</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      token: sessionStorage.getItem('token'),
    };
  },
  methods: {
    async Withdrawbtn() {
      const reply = confirm('정말 탈퇴하시겠습니까?');
      if(reply) {
        const url = '/ROOT/user/delete';
        const headers = { 'Content-Type': 'application/json', token: this.token };
        const res = await axios.delete(url, { headers });
        console.log(res);
        if(res.status === 200) {
          alert('회원탈퇴 완료');
          this.$router.push('/');
        }
      }
    }
  },
};
</script>

<style lang='scss' scoped>
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
.inputcon {
  margin: 0 auto;
  // text-align: center;
  margin-top: 30px;
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
