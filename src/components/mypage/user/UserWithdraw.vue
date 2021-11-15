<template>
  <div class="mypageContainer">
    <div class='TitleCon orderTitleCon'>
      <div class="Title">
        <h2>회원 탈퇴</h2>
      </div>
    </div>

    <div>
      <div>
        <label for="userid">아이디</label>
        <input type="text" id="userid">
        <label for="userpw">비밀번호</label>
        <input type="text" id="userpw">
      </div>
      <div>
        <button>탈퇴</button>
        <button>취소</button>
      </div>
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
</style>
