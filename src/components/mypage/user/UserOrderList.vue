<template>
  <div class="mypageContainer">
    <div class='TitleCon orderTitleCon'>
      <div class="Title">
        <h2>주문 내역</h2>
      </div>
    </div>
    <div class="divTable blueTable">
      <div class="divTableHeading">
        <div class="divTableRow">
          <div class="divTableHead">주문일자</div>
          <div class="divTableHead">상품 상세 정보</div>
          <div class="divTableHead">상품 금액(수량)</div>
          <div class="divTableHead">판매자</div>
          <div class="divTableHead">주문상태</div>
          <div class="divTableHead">리뷰작성</div>
        </div>
      </div>
      <div class="divTableBody">
        <div class="divTableRow">
          <div class="orderTableCell orderTableDate">
            <router-link to='/user/order'>
              <p>20211112</p>
              <p>20211112555502</p>
              <span>상세보기</span>
            </router-link>
          </div>
          <div class="orderTableCell">
            <div class='tableTitleBox'>
              <div class='imgCell'>
                <img src='@/assets/img/desk1.jpg' style="width:60px;height:60px">
              </div>
              <div class="tableTitle">
                <router-link to='/user/order'>
                  <p>다리가 무려 4개!!!!! 총알배송 다리4개 책상</p>
                  <p>옵션: 다리4개 분홍색</p>
                </router-link>
              </div>
            </div>
          </div>
          <div class="orderTableCell">
            <p>120,000원</p>
            <span>(1개)</span>
          </div>
          <div class="orderTableCell">
            <p>다리익선</p>
          </div>
          <div class="orderTableCell">
            <p>배송중</p>
            <router-link to='/'><span>(배송조회)</span></router-link>
          </div>
          <div class="orderTableCell">
            <p>리뷰쓰기</p>
          </div>
        </div>
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
}
.Title {
  height: 40px;
  h2 {
    float: left;
    font-size: 20px;
    line-height: 40px;
  }
}
.orderTitleCon {
  margin-bottom: 15px;
}

div.blueTable {
  // border: 1px solid #1C6EA4;
  // background-color: #EEEEEE;
  width: 1000px;
  text-align: center;
  border-collapse: collapse;
  a, p {
    font-size: 14px;
  }
}
// .divTable.blueTable .divTableCell, .divTable.blueTable .divTableHead {
//   border: 1px solid #AAAAAA;
//   padding: 5px 5px;
// }
.orderTableCell, .divTableHead {
  border: 1px solid #eeee;
  padding: 5px 5px;
}
.divTable.blueTable .divTableBody .orderTableCell {
  font-size: 14px;
  color: #333333;
}
.orderTableDate {
  a {
    p{
      font-size: 12px;
    }
  }
  
}
.divTable.blueTable .divTableHeading .divTableHead {
  font-size: 15px;
  font-weight: bold;
  // color: #FFFFFF;
  text-align: center;
}
// .divTableHeading {
//   border-bottom: 1px solid black;
// }
/* DivTable.com */
.divTable{ display: table; }
.divTableRow { display: table-row; }
.divTableHeading { display: table-header-group;}
.orderTableCell, .divTableHead { display: table-cell;}
.divTableHeading { display: table-header-group;}
.divTableBody { display: table-row-group;}

.tableTitleBox {
  .imgCell{
    float: left;
    margin-left: 10px;
  }
  &:after{
    content: '';
    display: block;
    clear: both;
  }
}
</style>
