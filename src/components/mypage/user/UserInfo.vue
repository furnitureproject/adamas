<template>
  <div class='mypageContainer'>
    <div class='TitleCon orderTitleCon'>
      <div class="Title">
        <h2>정보 변경</h2>
      </div>
    </div>

    <div>
      <div class='inputdiv'>
        <label for="idinput">ID</label>
        <input type='text' class="joinbox" id="idinput" disabled>
      </div>
      <div class='inputdiv'>
        <label for="pwinput">비밀번호</label>
        <input type='password' class="joinbox" id="pwinput" disabled>
      </div>
      <div class='inputdiv'>
        <label for="nameinput">이름</label>
        <input type='text' class="joinbox" id="nameinput" disabled>
      </div>
      <div class='inputdiv'>
        <label for="birthinput">생년월일</label>
        <input type='text' class="joinbox" id="birthinput" disabled>
      </div>
      <div class='inputdiv'>
        <label for="phoneinput">전화번호</label>
        <input type='text' class="joinbox" id="phoneinput" disabled>
      </div>
      <div class='inputdiv'>
        <label for="emailinput">E-mail</label>
        <input type='text' class="joinbox emailid" id="emailinput" disabled>
        @
        <input type='text' class="joinbox emailaddress" id="emailinput2" disabled>
      </div>
    </div>

    <div>
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

    <div>
      <button>변경하기</button>
    </div>
    <div>
      <button>확인</button>
      <button>취소</button>
    </div>

  </div>
</template>

<script>
export default {

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

label {
  display: inline-block;
  // border: 3px dotted red;
  width: 200px;
  text-align: center;
}
.inputdiv {
  // text-align: center;
  margin-bottom: 15px;
}
.joinbox{
  width: 400px;
  padding: 10px 4px;
  border: none;
  border-bottom: 1px solid #444;
}
.emailid {
  width: 192px;
}
.emailaddress {
  width: 191px;
}
</style>
