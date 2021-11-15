<template>
  <div class='mypageContainer'>
    <div class='TitleCon'>
      <div class="Title">
        <h2>QnA 목록</h2>
      </div>
    </div>
    <div class="divTable blueTable">
      <div class="divTableHeading">
        <div class="divTableRow">
          <div class="divTableHead">번호</div>
          <div class="divTableHead">상품명</div>
          <div class="divTableHead">판매자</div>
          <div class="divTableHead">문의내용</div>
          <div class="divTableHead">작성일</div>
        </div>
      </div>
      <div class="divTableBody">
        <div class="divTableRow">
          <div class="orderTableCell">
            <p>1</p>
          </div>
            <div class='orderTableCell'>
              <p>다리가 무려 4개!!!!! 총알배송 다리4개 책상</p>
              <p>옵션: 다리4개 분홍색</p>
            </div>
          <div class="orderTableCell">
            <p>다리익선</p>
          </div>
          <div class="orderTableCell">
            <p>다리가 몇개인게 제일 좋나요?</p>
          </div>
          <div class="orderTableCell">
            <p>2021-11-12</p>
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
  
 
</style>
