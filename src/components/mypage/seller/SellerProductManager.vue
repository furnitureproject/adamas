<template>
  <div>
    <!-- 판매자 상품 관리
    <div class="title">
      타이틀 박스
    </div> -->
    <!-- <div class="content">
      <div class="tablebox">
        <div class="itemcard">
          <div class="imgbox">
            <img src="@/assets/img/desk1.jpg">
          </div>
          <div class="titlebox">
            <strong class="itemtitle">title</strong>
          </div>
          <div class="codebox">
            <p>code: <span>202111300001</span></p>
          </div>
          <div class="datebox">
            <p>regdate: <span>2021-11-30</span></p>
          </div>
        </div>
      </div>
    </div> -->

    <table class="type09">
      <thead>
      <tr>
        <th scope="cols"></th>
        <th scope="cols">상품코드</th>
        <th scope="cols">상품명</th>
        <th scope="cols">옵션명</th>
        <th scope="cols">가격</th>
        <th scope="cols">등록일</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row"></th>
        <td>202108110001</td>
        <td>desk</td>
        <td>화려한 네발</td>
        <td>444,444원</td>
        <td>2021-08-11</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/mypage/seller/sellerproductmanager.scss';

</style>
