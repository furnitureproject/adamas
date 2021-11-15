<template>
  <div class="inner">
    <div class='TitleCon'>
      <div class="Title">
        <h2>주문</h2>
      </div>
    </div>

    <div class="orderBox">
      <div class="orderBoxInner">
        <div class='orderTitleCon'>
          <div class='orderTitle'>
            <h2>배송정보</h2>
            <input type='button' class='deliveryBtn' value="배송지 목록">
          </div>
        </div>
        <div class='deliveryBox'>
          <div class='deName'>
            <div class="field receiver">
              <input type="text" class="receivername" placeholder="받는 사람">
            </div>
          </div>
          <div class='deAddInput'>
            <div class="field">
              <input type="button" class="btnAddressSearch" value="주소찾기">
              <!-- <button class="btnAddressSearch">주소찾기</button> -->
              <input type="text" class="codeAddress" placeholder="우편번호">
            </div>
            <div class="field">
              <input type="text" class="normalAddress" placeholder="기본주소">
            </div>
            <div class="field">
              <input type="text" class="detailAddress" placeholder="상세주소">
            </div>
          </div>
          <div class="dePhoneInput">
            <div class="field">
              <input type="text" class="firstnum" placeholder="010">
              <input type="text" class="secondnum" placeholder="핸드폰 앞자리">
              <input type="text" class="thidnum" placeholder="핸드폰 뒷자리">
            </div>
          </div>
          <div>
            <div class="field">
              <input type="text" class="select" placeholder="요구사항">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="orderBox">
      <div class='orderTitleCon'>
        <div class='orderTitle'>
          <h2>상품정보</h2>
        </div>
      </div>
    </div>
    <table class="cartTB">
      <thead>
        <tr>
          <th colspan="2">상품정보</th>
          <th>단가</th>
          <th>수량</th>
          <th>상품금액</th>
          <th>배송</th>
        </tr>
      </thead>
      <tbody>
        <tr>
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
            <p>택배</p>
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
      <button class="fillBtn">결제하기</button>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>

.orderBox {
  width: 1200px;
  margin-bottom: 45px;
  margin: 0 auto;
  // position: relative;
}
.orderTitleCon {
  // background: #eee;
  padding: 26px 0px 16px 0px;
  border-bottom: 1px solid #777;
}
.orderTitle {
  height: 40px;
  h2 {
    float: left;
    font-size: 18px;
    color: #999;
    line-height: 40px;
  }
  .deliveryBtn {
    margin-left: 25px;
    display: inline-block;
    padding: 9px 11px 8px;
    border: 1px solid #ccc;
    background: #fff;
    vertical-align: middle;
    line-height: 1.4;
    font-size: 15px;
    color: #111;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
  }
}
.field {
  margin-bottom: 15px;
  input[type='text'] {
    display: block;
    float: left;
    width: 608px;
    height: 46px;
    padding: 13px 16px;
    border: 1px solid #ccc;
    font-size: 15px;
    font-weight: normal;
    line-height: 20px;
    color: #111;
    letter-spacing: 0;
    &::placeholder {
      color: #999;
    }
  }
  &:after {
    display: block;
    content: "";
    clear: both;
  }
}
.deliveryBox {
  position: relative;
  margin-top: 20px;
}
.deName {
  display: block;
  .receiver {
    label {
      font-size: 18px;
      line-height: 24px;
      font-weight: bold;
      color: #111;
    }
    .receivername {
      width: 341px;
    }
  }
}
.deAddInput {
  .btnAddressSearch {
    float: left;
    width: 108px;
    height: 46px;
    margin-right: 15px;
    border: 1px solid #f43142;
    font-size: 15px;
    line-height: 46px;
    color: #f43142;
    text-align: center;
    letter-spacing: normal;
    text-decoration: none;
    background-color: #fff;
    cursor: pointer;
  }
  .field{
    .codeAddress { 
      width: 218px;
    }
  }
}
.dePhoneInput {
  .field {
    input {
      width: 234px;
      margin-left: 15px;
    }
    .firstnum {
      width: 110px;
      margin: 0;
    }
  }
}


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
    .imgCon {
      width: 200px;
    }
    tr {
      border-top: 1px solid #eee;
      td {
        padding: 20px 0px;
        .cartImgBox {
          width: 250px;
          height: 250px;
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
