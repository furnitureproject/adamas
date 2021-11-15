<template>
  <div class='mypageContainer'>
    <div class='TitleCon'>
      <div class="Title">
        <h2>배송지 관리</h2>
      </div>
    </div>
    <div class="divTable blueTable">
      <div class="divTableHeading">
        <div class="divTableRow">
          <div class="divTableHead">체크</div>
          <div class="divTableHead">배송지</div>
          <div class="divTableHead">주소</div>
          <div class="divTableHead">받는사람</div>
          <div class="divTableHead">전화번호</div>
        </div>
      </div>
      <div class="divTableBody">
        <div class="divTableRow">
          <div class="orderTableCell">
            <input type="checkbox">
          </div>
            <div class='orderTableCell'>
              <p>이모집</p>
            </div>
          <div class="orderTableCell">
            <p>부산 광역시 중구 사상 89-48</p>
          </div>
          <div class="orderTableCell">
            <p>작은이모</p>
          </div>
          <div class="orderTableCell">
            <p>010-5647-5465</p>
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
