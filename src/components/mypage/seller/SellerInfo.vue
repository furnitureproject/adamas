<template>
  <div>
    <div class="title">
      타이틀 박스
    </div>
    <div class="content">
      <div>
        <div class="field">
          <label for="idbox">아이디</label>
          <input type="text" id="idbox" placeholder="ID">
        </div>
        <div class="field">
          <label for="pwbox">비밀번호</label>
          <input type="text" id="pwbox" placeholder="PASSWORD">
        </div>
        <div class="field">
          <label for="newpwbox">새 비밀번호</label>
          <input type="text" id="newpwbox" placeholder="NEW PASSWORD">
        </div>
        <div class="field">
          <label for="namebox">이름</label>
          <input type="text" id="namebox" placeholder="NAME">
        </div>
        <div class="field">
          <label for="birthbox">생년월일</label>
          <input type="text" id="birthbox" placeholder="BIRTH">
        </div>
        <div class="field">
          <label for="phonebox">전화번호</label>
          <input type="text" id="phonebox" placeholder="PHONE">
        </div>
        <div class="field">
          <label for="emailbox">E-MAIL</label>
          <input type="text" id="emailbox" placeholder="E-MAIL">
        </div>
        <div class="field">
          <label for="storenamebox">STORE</label>
          <input type="text" id="storenamebox" placeholder="STORE NAME">
        </div>
        <div class="field">
          <label for="storephonebox">PHONE</label>
          <input type="text" id="storephonebox" placeholder="STORE PHONE">
        </div>
      </div>
    </div>
    <div class="btnbox">
      <button class="btn submitBtn">변경하기</button>
    </div>
  </div>
</template>

<script>
export default {

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
  .field {
    label {
      float: left;
      width: 120px;
      height: 46px;
      padding: 10px 15px 14px 15px;
      text-align: center;
      font-size: 18px;
      color: #222;
      border: 1px solid #ccc;
      border-right: none;
      background: #E2E2E2;
    }
    margin-bottom: 10px;
    input[type='text'] {
      display: block;
      float: left;
      width: 608px;
      height: 46px;
      padding: 13px 16px;
      border: 1px solid #ccc;
      font-size: 15px;
      font-weight: normal;
      line-height: 20px;
      color: #111;
      letter-spacing: 0;
      &::placeholder {
        color: #999;
      }
    }
    &:after {
      display: block;
      content: "";
      clear: both;
    }
  }
  .btn {
    width: 150px;
    padding: 10px 20px;
    font-size: 20px;
    color: #222;
    border: 3px solid #222;
    background: white;
    font-weight: bolder;
    &:hover {
      background: #222;
      border: 3px solid white;
      color: #e2e2e2;
      transition: all 0.5s;
      cursor: pointer;
    }
  }
  .btnbox {
    width: 730px;
    &::after {
      display: block;
      content: '';
      clear: both;
    }
  }
  .submitBtn {
    float: right;
  }
</style>
