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
            <!-- <input type='button' class='deliveryBtn' value="배송지 목록"> -->
          </div>
        </div>
        <div class='deliveryBox'>
          <div class='deName'>
            <div class="field receiver">
              <input type="text" class="receivername" placeholder="받는 사람" v-model="receiver">
            </div>
          </div>
          <div class='deAddInput'>
            <div class="field">
              <input type="button" class="btnAddressSearch" value="주소찾기" @click="daumaddress">
              <!-- <button class="btnAddressSearch">주소찾기</button> -->
              <input type="text" class="codeAddress" placeholder="우편번호" v-model="zip" disabled>
            </div>
            <div class="field">
              <input type="text" class="normalAddress" placeholder="기본주소" v-model="addr1" disabled>
            </div>
            <div class="field">
              <input type="text" class="detailAddress" placeholder="상세주소" v-model="addr2">
            </div>
          </div>
          <div class="dePhoneInput">
            <div class="field">
              <input type="text" class="firstnum" placeholder="010" v-model="tel1">
              <input type="text" class="secondnum" placeholder="핸드폰 앞자리" v-model="tel2">
              <input type="text" class="thidnum" placeholder="핸드폰 뒷자리" v-model="tel3">
            </div>
          </div>
          <div>
            <div class="field">
              <input type="text" class="select" placeholder="요구사항" v-model="req">
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
        <tr v-for="(o, idx) in orderlist" :key="idx">
          <td class='imgCon'>
            <div class="cartImgBox">
              <img :src= o.imageurl>
            </div>
          </td>
          <td>
            <p>{{o.productTitle}}</p>
            <p>옵션: {{o.optionName}}</p>
          </td>
          <td><p>{{o.optionPrice}}원</p></td>
          <td><p>{{o.cartOptionCount}}개</p></td>
          <td><p>{{o.optionPrice * o.cartOptionCount}}원</p></td>
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
          <em class='totalPrice'>{{totalprice}}</em>원
        </span>
      </div>
    </div>

    <div class="cartBtnBox">
      <!-- <button class="fillBtn">결제하기</button> -->
      <button class="fillBtn" @click="kakaopay">카카오 테스트</button>
      <button class="fillBtn" @click="danalss">다날 테스트</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.getordercode();
    console.log(this.orderids);
  },
  computed: {
    ...mapState(['sendcart', 'orderids']),
  },
  data() {
    return {
      token: sessionStorage.getItem('token'),
      zip: 5656, // 우편 번호
      addr1: '우리집', // 주소
      addr2: '우리집', // 상세주소
      receiver: '나', // 받는사람
      tel1: '010', // 핸드폰 번호 첫번째 자리
      tel2: '5555', // 핸드폰번호 두번째 자리
      tel3: '4444', // 핸드폰번호 세번째 자리
      req: '없음', // 요구사항
      orderCode: 0, // 주문코드
      orderlist: [], // 주문 리스트
      totalprice: 0, // 주문 총가격
      payment: {}, // 페이먼트 정보
      address: {}, // address 정보
    };
  },
  methods: {
    ...mapActions(['changeorderidsAct']),
    kakaopay() {
      var IMP = window.IMP;
      IMP.init('imp50325691');
      IMP.request_pay({
      pg: 'kakaopay',
      pay_method: 'card',
      merchant_uid: 'merchant_' + new Date().getTime(),
      name: '주문명:결제테스트',
      amount: this.totalprice,
      buyer_email: 'iamport@siot.do',
      buyer_name: this.receiver,
      buyer_tel: `${this.tel1}-${this.tel2}-${this.tel3}`,
      buyer_addr: this.addr1 + this.addr2,
      buyer_postcode: this.zip,
      m_redirect_url: 'http://localhost:9090/orderdone'
      }, async (rsp) => {
      console.log(rsp);
      if (rsp.success) {
      var msg = '결제가 완료되었습니다.';
      // msg += '고유ID : ' + rsp.imp_uid;
      // msg += '상점 거래ID : ' + rsp.merchant_uid;
      // msg += '결제 금액 : ' + rsp.paid_amount;
      // msg += '카드 승인번호 : ' + rsp.apply_num;
      await this.setaddress();
      await this.setpayment();
      await this.setdelivery();
      alert(msg);
      this.$router.push('/orderdone');
      } else {
      var msg = '결제에 실패하였습니다.';
      msg += '에러내용 : ' + rsp.error_msg;
      }
      alert(msg);
      });
    },
    danalss() {
      var IMP = window.IMP; // 생략가능
      console.log(IMP);
      IMP.init('imp50325691');
      IMP.request_pay({
      // pg: 'danal.9810030929',
      pay_method: 'card',
      merchant_uid: 'product_' + new Date().getTime(),
      name: '주문명:Desker',
      //결제창에서 보여질 이름
      amount: 1000,
      //가격
      buyer_email: 'iamport@siot.do',
      buyer_name: '흠바스키',
      buyer_tel: '010-1234-5678',
      buyer_addr: '부산 광역시 강남구 삼성동',
      buyer_postcode: '123-456',
      m_redirect_url: 'http://localhost:9090/payments/complete'
      /*
      모바일 결제시,
      결제가 끝나고 랜딩되는 URL을 지정
      (카카오페이, 페이코, 다날의 경우는 필요없음. PC와 마찬가지로 callback함수로 결과가 떨어짐)
      */
      }, function (rsp) {
      console.log(rsp);
      if (rsp.success) {
      var msg = '결제가 완료되었습니다.';
      msg += '고유ID : ' + rsp.imp_uid;
      msg += '상점 거래ID : ' + rsp.merchant_uid;
      msg += '결제 금액 : ' + rsp.paid_amount;
      msg += '카드 승인번호 : ' + rsp.apply_num;
      } else {
      var msg = '결제에 실패하였습니다.';
      msg += '에러내용 : ' + rsp.error_msg;
      }
      alert(msg);
      });
    },
    daumaddress() {
      new daum.Postcode({
        oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분. 
          // 도로명 주소의 노출 규칙에 따라 주소를 조합한다. 
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          let fullRoadAddr = ''; 
          if(data.userSelectedType == 'R'){
            fullRoadAddr = data.roadAddress; // 도로명 주소 변수 
          }
          else {
            fullRoadAddr = data.jibunAddress; // 지번 주소 변수
          }
          let extraRoadAddr = ''; // 도로명 조합형 주소 변수 
          // 법정동명이 있을 경우 추가한다. (법정리는 제외) 
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다. 
          if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)) { extraRoadAddr += data.bname; } 
          // 건물명이 있고, 공동주택일 경우 추가한다. 
          if(data.buildingName !== '' || data.apartment === 'Y') { 
            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName); 
          } 
          // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다. 
          if(extraRoadAddr !== '') { extraRoadAddr = ' (' + extraRoadAddr + ')'; } 
          // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다. 
          if(fullRoadAddr !== '') { fullRoadAddr += extraRoadAddr; } 
          // 우편번호와 주소 정보를 해당 필드에 넣는다. 
          this.zip = data.zonecode; //5자리 새우편번호 사용 
          this.addr1 = fullRoadAddr;
          console.log(data);
          console.log(this.zip);
          console.log(this.addr1);
          console.log(extraRoadAddr);
        }
    }).open();
    },
    // 주문 리스트 받기
    async getordercode() {
      console.log(this.sendcart);
      const url = '/ROOT/order';
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const body = this.sendcart;
      const res = await axios.post(url, body, { headers });
      console.log(res);
      this.orderCode = res.data.orderCode; // 카트 넘버를 넘겨주고 받은 주문코드
      this.changeorderidsAct(res.data.orderId); // 오더 넘버 등록
      console.log(this.orderids);
      const url1 = `/ROOT/order?no=${this.orderCode}`;
      const res1 = await axios.get(url1, { headers });
      // console.log(res1);
      this.orderlist = res1.data.list; // 주문코드를 넘겨주고 받은 주문리스트
      console.log(this.orderlist);
      for(let i of this.orderlist) {
        this.totalprice += i.optionPrice * i.cartOptionCount
      }
      for(let i of this.orderlist) {

      }
    },
    // 결제 정보 보내주기
    async setpayment() {
      const url = '/ROOT/payment/insert';
      const headers = { 'Content-Type': 'application/json' };
      const res = await axios.post(url, {}, { headers });
      console.log(res);
      this.payment = res.data.payment;
    },
    // 주소 보내주기
    async setaddress() {
      const url = '/ROOT/address/insert';
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const body = {
        addressZipcode: this.zip,
        addressCity: this.addr1,
        addressDetail: this.addr2,
        receiverPhone: this.tel1+this.tel2+this.tel3,
        receiverName: this.receiver,
        requireComment: this.req
      }
      const res = await axios.post(url, body, { headers });
      console.log(res);
      this.address = res.data.address;
    },
    // 배송정보 등록
    async setdelivery() {
      const url = '/ROOT/delivery/insert';
      const headers = { 'Content-Type': 'application/json', token: this.token};
      const body = [];
      for(let i in this.orderids) {
        const del = {order: {orderNo: this.orderids[i]}, payment: {paymentNo: this.payment.paymentNo}, userAddress: {addressNo: this.address.addressNo}}
        body.push(del);
      };
      console.log(body);
      const res = await axios.post(url, body, { headers });
      console.log(res);
      if(res.data.status === 200) {
      }
    } 
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/order/order.scss';

</style>
