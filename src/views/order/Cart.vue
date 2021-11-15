<template>
  <div class="inner">
    <div class='TitleCon'>
      <div class="Title">
        <h2>장바구니</h2>
      </div>
    </div>

    <table class="cartTB">
      <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th colspan="2">상품정보</th>
          <th>단가</th>
          <th>수량</th>
          <th>상품금액</th>
          <th>주문</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class='checkCon'><input type="checkbox"></td>
          <td class='imgCon'>
            <div class="cartImgBox">
              <img src='@/assets/img/desk1.jpg'>
            </div>
          </td>
          <td>
            <p>다리가 무려 4개!!!!! 총알배송 다리4개 책상</p>
            <p>옵션: 다리4개 분홍색</p>
          </td>
          <td><p>120,000원</p></td>
          <td><p>1개</p></td>
          <td><p>120,000원</p></td>
          <td>
            <p>바로구매</p>
            <p>삭제하기</p>
          </td>
        </tr>
        <tr>
          <td class='checkCon'><input type="checkbox"></td>
          <td class='imgCon'>
            <div class="cartImgBox">
              <img src='@/assets/img/desk1.jpg'>
            </div>
          </td>
          <td>
            <p>다리가 무려 4개!!!!! 총알배송 다리4개 책상</p>
            <p>옵션: 다리4개 분홍색</p>
          </td>
          <td><p>120,000원</p></td>
          <td><p>1개</p></td>
          <td><p>120,000원</p></td>
          <td>
            <p>바로구매</p>
            <p>삭제하기</p>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="cartPriceCon">
      <div class="cartPrice">
        <h4>합계</h4>
        <span class='price'>
          <em class='totalPrice'>54,578,500</em>원
        </span>
      </div>
    </div>

    <div class="cartBtnBox">
      <button class="fillBtn">상품 주문</button>
      <button class="fillBtn">상품 삭제</button>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>

.cartTB {
  width: 1200px;
  margin: 20px auto;
  text-align: center;
  border-collapse: collapse;
  thead {
    tr {
      th {
        padding: 14px 20px;
        border-bottom: 1px solid #eee;
        text-align: center;
      }
    }
  }
  tbody {
    .checkCon {
      width: 10px;
      vertical-align: top;
      padding-top: 30px;
    }
    .imgCon {
      width: 200px;
    }
    tr {
      border-top: 1px solid #eee;
      td {
        padding: 20px 0px;
        .cartImgBox {
          width: 150px;
          height: 150px;
          padding: 20px 0 0 0;
          margin-left: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}

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
.cartPriceCon {
  .cartPrice {
    float: right;
    margin-right: 100px;
    h4 {
      float: left;
      font-size: 2em;
      font-weight: bold;
      // line-height: 22px;
      color: #f43142;
    }
    .price {
      float: left;
      display: block;
      padding-left: 40px;
      font-size: 15px;
      color: #f43142;
      text-align: right;
      .totalPrice {
        margin-right: 3px;
        font-size: 34px;
        font-weight: bold;
        line-height: 41px;
        vertical-align: -3px;
        font-style: normal;
      }
    }
    &:after {
      display: block;
      content: '';
      clear: both;
    }
  }
  &:after {
    display: block;
    content: '';
    clear: both;
  }
}

.cartBtnBox {
  text-align: center;
  margin-top: 15px;
}
.fillBtn {
  font-size: 25px;
  padding: 5px 40px;
  border: 2px solid #FF6B95;
  background-color: transparent;
  color: #FF6B95;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
  margin-right: 10px;
}
.fillBtn:focus {
  outline: none;
}
.fillBtn::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
  top: 0%;
  left: -100%;
  transition: all 0.4s;
  z-index: -1;
}
.fillBtn:hover::before {
  transform: translateX(100%);
}
.fillBtn:hover {
  color: #eeee;
  // color: #fff;
}
</style>
