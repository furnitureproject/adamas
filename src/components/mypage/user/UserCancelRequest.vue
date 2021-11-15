<template>
  <div class='mypageContainer'>
    <div class='TitleCon orderTitleCon'>
      <div class="Title">
        <h2>회원 탈퇴</h2>
      </div>
    </div>

    <div class="orderTBwrap">
      <table border='1' width='800'>
        <thead align='center'>
          <tr>
            <th colspan="6">주문</th>
          </tr>
          <th>주문일자</th>
          <th>상품 상세 정보</th>
          <th>상품 금액(수량)</th>
          <th>판매자</th>
          <th>주문상태</th>
        </thead>
        <tbody align='center'>
          <tr>
            <!-- <td rowspan="2"> -->
            <td>
              <router-link to='/userorderlist'>
                <p>20211112</p>
                <p>20211112555502</p>
                <span>상세보기</span>
              </router-link>
            </td>
            <td>
              <router-link to='/userorderlist'>
                <p>다리가 무려 4개!!!!! 총알배송 다리4개 책상</p>
                <p>옵션: 다리4개 분홍색</p>
              </router-link>
            </td>
            <td>120,000원(1개)</td>
            <td>다리익선</td>
            <td>
              <p>주문취소</p>
            </td>
          </tr>

          <tr>
            <td>
              <router-link to='/userorderlist'>
                <p>20211112</p>
                <p>20211112555502</p>
              </router-link>
              <span>상세보기</span>
            </td>
            <td>
              <router-link to='/userorderlist'>
                <p>다리가 무려 4개!!!!! 총알배송 다리4개 책상</p>
                <p>옵션: 다리4개 분홍색</p>
              </router-link>
            </td>
            <td>120,000원(1개)</td>
            <td>다리익선</td>
            <td>
              <p>배송중</p>
              <router-link to='/'><span>배송조회</span></router-link>
            </td>
          </tr>
        </tbody>
      </table>
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
