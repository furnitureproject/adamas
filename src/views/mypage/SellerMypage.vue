<template>
  <div class="inner">
    <div class="test1">
      <router-link to='/seller/mypage'><div>내 정보</div></router-link>
      <ul>
        <router-link to='/seller/order'><li>주문 및 배송관리</li></router-link>
        <router-link to='/seller/product'><li>등록 상품 관리</li></router-link>
        <router-link to='/seller/qna'><li>상품 QnA</li></router-link>
        <router-link to='/seller/info'><li>판매자정보 변경</li></router-link>
        <router-link to='/seller/withdraw'><li>회원탈퇴</li></router-link>
      </ul>
    </div>
    <div class="test2wrap">
      <div class="test2">
        화면표시
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
.test1 {
  float: left;
  padding-left: 40px;
  width: 200px;
  min-height: 1000px;
  background: red;
}
.test2wrap{
  float: left;
  width: 1140px;
  min-height: 1000px;
  background: turquoise;
  .test2 {
  margin: 0 auto;
  width: 1040px;
  min-height: 1000px;
  background: violet;
  }
}



</style>
