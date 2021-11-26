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
    <!-- <div ref="embed"></div> -->
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
          <td><p>{{o.optionPrice}}</p></td>
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
      <button class="fillBtn">결제하기</button>
      <button class="fillBtn" @click="kakaopay">카카오 테스트</button>
      <button class="fillBtn" @click="danalss">다날 테스트</button>
      <button class="fillBtn" @click="test">다날 테스트</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  mounted() {
    this.getorder();
  },
  computed: {
    ...mapState(['orderdata']),
  },
  data() {
    return {
      token: sessionStorage.getItem('token'),
      zip: '', // 우편 번호
      addr1: '', // 주소
      addr2: '', // 상세주소
      receiver: '', // 받는사람
      tel1: '010', // 핸드폰 번호 첫번째 자리
      tel2: '', // 핸드폰번호 두번째 자리
      tel3: '', // 핸드폰번호 세번째 자리
      req: '', // 요구사항
      orderlist: '', // 받은 orderdata 값들
      totalprice: 0, // 주문 상품 총가격
    };
  },
  methods: {
    kakaopay() {
      var IMP = window.IMP; // 생략가능
      IMP.init('imp50325691');
      // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용
      // i'mport 관리자 페이지 -> 내정보 -> 가맹점식별코드
      IMP.request_pay({
      pg: 'kakaopay', // version 1.1.0부터 지원.
      /*
      'kakaopay':카카오페이,
      html5_inicis':이니시스(웹표준결제)
      'nice':나이스페이
      'jtnet':제이티넷
      'uplus':LG유플러스
      'danal':다날
      'payco':페이코
      'syrup':시럽페이
      'paypal':페이팔
      */
      pay_method: 'card',
      /*
      'samsung':삼성페이,
      'card':신용카드,
      'trans':실시간계좌이체,
      'vbank':가상계좌,
      'phone':휴대폰소액결제
      */
      merchant_uid: 'merchant_' + new Date().getTime(),
      /*
      merchant_uid에 경우
      https://docs.iamport.kr/implementation/payment
      위에 url에 따라가시면 넣을 수 있는 방법이 있습니다.
      참고하세요.
      나중에 포스팅 해볼게요.
      */
      name: '주문명:결제테스트',
      //결제창에서 보여질 이름
      amount: 1000,
      //가격
      buyer_email: 'iamport@siot.do',
      buyer_name: '구매자이름',
      buyer_tel: '010-1234-5678',
      buyer_addr: '서울특별시 강남구 삼성동',
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
      // new daum.Postcode({
      new window.daum.Postcode({
        oncomplete: (data) => {
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
          console.log(this);
          console.log(this.zip); //우편번호
          console.log(this.addr1); //주소
          // console.log(extraRoadAddr);
        }
    }).open();
    // }).embed(this.$refs.embed);
    },
    async getorder() {
      console.log(this.orderdata);
      const url = `/ROOT/order?no=${this.orderdata}`;
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const res = await axios.get(url, { headers });
      console.log(res);
      this.orderlist = res.data.list;
      for(let i of this.orderlist) {
        this.totalprice += i.optionPrice * i.cartOptionCount
      }
      console.log(this.totalprice);
    },
    async test() {
      const url = '/ROOT/address/insert';
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const body = { 
        addressZipcode: this.zip, 
        addressCity: this.addr1, 
        addressDetail: this.addr2, 
        receiverName: this.receiver, 
        receiverPhone: this.tel1+this.tel2+this.tel3, 
        requireComment: this.req 
      };
      const res = await axios.post(url, body, { headers });
      console.log(res);
    }

  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/order/order.scss';

</style>
