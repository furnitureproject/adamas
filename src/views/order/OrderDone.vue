<template>
  <div class="inner">
    <div class="orderdonebox">
      <div class="mainText">
        <p>주문해주셔서 감사합니다.</p>
      </div>
      <div class="codeBox">
        <!-- <p>주문번호: {{orderdata}}</p> -->
        <!-- <p><span>주문번호: </span><strong>2021120100000027</strong></p> -->
        <p><span>주문번호: </span><strong>{{orderdata}}</strong></p>
      </div>
      <div class="btnBox">
        <!-- <button class="fillBtn" @click="changepage(1)">홈</button>
        <button class="fillBtn" @click="changepage(2)">주문내역</button> -->
        <button class="donebtn" @click="changepage(1)">홈</button>
        <button class="donebtn" @click="changepage(2)">주문내역</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['orderdata']),
  },
  data() {
    return {
      
    };
  },
  methods: {
    changepage(val) {
      if (val == 1) {
        this.$router.push('/');
      }
      else if (val == 2) {
        this.$router.push('/user/mypage')
      }
    }
  },
}
</script>

<style lang='scss' scoped>
.inner {
  margin: auto;
  margin-top: 50px;
}
.orderdonebox {
  width: 800px;
  margin: auto;
  border: 3px solid #222;
  padding: 30px;
  background: #f5f5f5;
}
.mainText {
  margin-bottom: 20px;
  p {
    font-size: 50px;
    font-weight: 700;
  }
}
.codeBox {
  margin-bottom: 30px;
  p {
    span {
      font-size: 25px;
      color: #222;
    }
    strong {
      font-size: 30px;
      color: rgb(184, 17, 17);
    }
  }
}
.btnBox {
  text-align: center;
  .donebtn {
    display: inline-block;
    width: 300px;
    padding: 15px 30px;
    border: 3px solid #222;
    background: transparent;
    color: #222;
    margin-right: 20px;
    font-size: 25px;
    font-weight: 500;
    &:hover {
      color: #fff;
      background: #222;
      border: 3px solid rgb(144, 144, 144);
      cursor: pointer;
    }
  }
  // &::after {
  //   display: block;
  //   content: '';
  //   clear: both;
  // }
}

// 버튼
// .fillBtn {
//     font-size: 25px;
//     padding: 5px 40px;
//     // border: 2px solid #FF6B95;
//     border: 3px solid #333333;
//     background-color: transparent;
//     // color: #FF6B95;
//     color: #b4b2b2;
//     text-transform: uppercase;
//     letter-spacing: 5px;
//     font-weight: bold;
//     position: relative;
//     transition: all 0.4s;
//     overflow: hidden;
//     margin-right: 10px;
//   }
//   .fillBtn:focus {
//     outline: none;
//   }
//   .fillBtn::before {
//     content: "";
//     position: absolute;
//     height: 100%;
//     width: 100%;
//     // background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
//     background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
//     top: 100%;
//     left: 0;
//     transition: all 0.4s;
//     z-index: -1;
//   }
//   .fillBtn:hover::before {
//     transform: translateY(-100%);
//   }
//   .fillBtn:hover {
//     color: #1d1b2e;
//   // color: #fff;
//   cursor: pointer;
//   }
</style>