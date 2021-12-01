<template>
  <div class="inner">
    <!-- 왼쪽 nav menu -->
    <div class="wrapMenu">
      <!-- <router-link to='/user/mypage'><div class="myinfofo">내 정보</div></router-link> -->
      <div class="myinfofo">내 정보</div>
      <ul>
        <router-link to='/user/mypage'><li>주문 및 배송조회</li></router-link>
        <!-- <router-link to='/user/cancelrequest'><li>취소/반품/교환 조회</li></router-link> -->
        <!-- <router-link to='/user/address'><li>배송지 관리</li></router-link> -->
        <router-link to='/user/qna'><li>상품 QnA</li></router-link>
        <router-link to='/user/info'><li>회원정보 변경</li></router-link>
        <router-link to='/user/withdraw'><li>회원 탈퇴</li></router-link>
      </ul>
    </div>
    <!-- 마이페이지 내용 -->
    <div class="wrapContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      myMenuSet: 1,
    };
  },
  methods: {
  },
};
</script>

<style lang='scss' scoped>
.mypageContainer {
  width: 1000px;
  margin: 0 auto;
}
.inner {
  // min-height: 600px;
  // margin: 0px auto 20px auto;
  // padding-top: 75px;
  // border: 1px dotted skyblue;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
}
.wrapMenu {
  float: left;
  width: 210px;
  min-height: 1000px;
  margin-top: 26px;
  // border: 1px solid #999;
  .myinfofo {
    color: #555;
    padding-bottom: 26px;
    font-weight: 900;
    font-size: 20px;
    text-align: center;
    border-bottom: 2px solid #555;
  }
  ul {
    margin-top: 10px;
    li {
      height: 30px;
      line-height: 0.3;
      padding: 5px 10px;
      // background-color: antiquewhite;
      margin-bottom: 10px;
      // font-weight: 500;
      font-size: 14px;
      letter-spacing: 2px;
      text-align: center;
      &:hover {
        color: #999;
      }
    }
    a.router-link-active {
      li {
        color: black;
        // font-size: 19px;
        font-weight: 700;
        // transition: ease-in-out 0.5s;
      }
    }
  }
}
.wrapContent {
  float: left;
  min-width: 1100px;
  min-height: 1000px;
  margin-left:10px;
  // border: 1px solid red;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
}

</style>
