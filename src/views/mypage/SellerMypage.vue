<template>
  <div class="inner">
    <div class="navbar">
      <!-- <router-link to='/seller/mypage'><div class="myinfo">내 정보</div></router-link> -->
      <div class="myinfo">내 정보</div>
      <ul>
        <router-link to='/seller/mypage'><li>주문 및 배송관리</li></router-link>
        <router-link to='/seller/product'><li>등록 상품 관리</li></router-link>
        <router-link to='/seller/qna'><li>상품 QnA</li></router-link>
        <router-link to='/seller/info'><li>판매자정보 변경</li></router-link>
        <router-link to='/seller/withdraw'><li>회원탈퇴</li></router-link>
      </ul>
    </div>
    <div class="viewwrap">
      <div class="viewscreen">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>
.inner {
  min-height: 1000px;
  &::after {
    display: block;
    content: '';
    clear: both;
  }
}
.navbar {
  float: left;
  // padding-left: 40px;
  width: 200px;
  min-height: 1000px;
  // background: grey;
  // border-left: 1px solid #eee;
  // border-right: 2px solid var(--backcolor);
  .myinfo {
    font-size: 30px;
    // border-bottom: 1px solid #222;
    margin-bottom: 15px;
    padding-left: 10px;
    padding-top: 15px;
  }
  ul {
    li {
      font-size: 20px;
      padding-top: 15px;
      padding-bottom: 5px;
      // border-bottom: 1px solid #222;
      border-bottom: 3px solid var(--linecolor);
    }
  }
  a.router-link-active {
    // color: #222;
    // font-weight: 500;
    li {
      color: #222;
      font-weight: 500;
    }
  }
}
.viewwrap{
  float: left;
  width: 1140px;
  min-height: 1000px;
  // background: turquoise;
  .viewscreen {
  margin: 0 auto;
  width: 1040px;
  min-height: 1000px;
  // background: violet;
  }
}



</style>
