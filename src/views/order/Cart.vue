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
          <th><input type="checkbox" @click="selectAll" v-model="allSelected"></th>
          <th colspan="2">상품정보</th>
          <th>단가</th>
          <th>수량</th>
          <th>상품금액</th>
          <th>주문</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
          <td class='checkCon'><input type="checkbox" v-model="so"></td>
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
        </tr> -->
        <tr v-for="(i, idx) in cartlist" :key="idx">
          <!-- <td class='checkCon'><input type="checkbox" v-model="ischeck" :value="i.cartNo" @click="select"></td> -->
          <td class='checkCon'><input type="checkbox" v-model="ischeck" :value="i" @click="select"></td>
          <!-- {{ischeck}}
          {{arrayprice}} -->
          <td class='imgCon'>
            <div class="cartImgBox">
              <img :src= i.cartImgName>
            </div>
          </td>
          <td>
            <p>{{i.cartName}}</p>
            <p>{{i.cartOptionName}}</p>
          </td>
          <td><p>{{i.cartOptionPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}원</p></td>
          <td><p>{{i.cartOptionCount}}개</p></td>
          <!-- <td><p><input type="number" v-bind="i.cartOptionCount">개</p></td> -->
          <td><p>{{(i.cartOptionPrice*i.cartOptionCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}} 원</p></td>
          <td>
            <!-- <p>바로구매</p> -->
            <p @click='deleteone(i.cartNo)' class="deleteonebtn">삭제하기</p>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="cartPriceCon">
      <div class="cartPrice">
        <h4>합계</h4>
        <span class='price'>
          <!-- <em class='totalPrice'>54,578,500</em>원 -->
          <em class='totalPrice'>{{selectprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</em>원
        </span>
      </div>
    </div>

    <div class="cartBtnBox">
      <button class="fillBtn" @click="goOrder">상품 주문</button>
      <button class="fillBtn" @click="deleteSelected">상품 삭제</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  mounted() {
    this.getCart();
  },
  watch: {
    ischeck: {
      deep: true,
      handler: 'allpriceselected'
    },
  },
  data() {
    return {
      ischeck: [], //체크된 애들(userids)
      ischeckcartno: [], //체크된 애들의 cartno
      cartlist: [], // 페이지 렌더링시 받은 유저가 고른 카트 전체
      checklist: [], //체크했던 애들
      selected: [],
      allSelected: false,
      token: sessionStorage.getItem('token'),
      forselectdelete: [], // for in 돌려서 key 줄려고했는데 안줘도 되서 지금은 안씀
      selectprice:0,
      arrayprice: [], //안씀
      orderids: [], // 오더 넘버즈
    };
  },
  methods: {
    ...mapActions(['changesendcartAct']),
    async getCart() {
      console.log(this.arrayprice);
      const token = this.token;
      const url = '/ROOT/cart';
      const headers = { 'Content-Type': 'application/json', 'token': token };
      const res = await axios.get(url, { headers });
      console.log(res);
      this.cartlist = res.data.list;
    },
    select() {
      this.allSelected = false;
    },
    selectAll(){
      this.ischeck = [];
      this.arrayprice = [];
      if (!this.allSelected) {
        for (let i in this.cartlist) {
          // this.ischeck.push(this.cartlist[i].cartNo);
          this.ischeck.push(this.cartlist[i]);
          // this.arrayprice.push(this.cartlist[i].cartOptionPrice);
        }
      }
    },
    goOrder() {
      console.log(this.cartlist);
      console.log(this.ischeck);
      if(this.ischeckcartno.length == 0) {
        alert('선택된 것이 없습니다.');
        return;
      }
      else{
        this.changesendcartAct(this.ischeckcartno);
        this.$router.push('/order');
      }
    },
    async deleteone(no) {
      console.log(no);
      
      const token = this.token;
      const url = 'ROOT/cart';
      const headers = { 'Content-Type': 'application/json', token };
      const data = [no];
      const confirmdata = confirm('삭제하시겠습니까?');
      if(confirmdata){
      const res = await axios.delete(url, {headers:headers, data:data});
      console.log(res);
        if(res.data.status === 200) {
          await this.getCart();
          console.log(this.cartlist);
        }
      }
    },
    async deleteSelected() {
      if(this.ischeckcartno.length == 0) {
        alert('선택된 것이 없습니다.');
        return;
      }
      else {
        const token = this.token;
        const url = 'ROOT/cart';
        const headers = { 'Content-Type': 'application/json', token };
        // const data = this.ischeck;
        const data = this.ischeckcartno;
        // for(let i in this.ischeck) {
        //   console.log(`${this.ischeck[i]}`)
        //   this.forselectdelete.push({cartNo: `${this.ischeck[i]}`});
        // }
        // console.log(this.forselectdelete);
        const confirmdata = confirm('삭제하시겠습니까?');
        if(confirmdata) {
        const res = await axios.delete(url, {headers:headers, data:data});
        console.log(res);
        if(res.data.status === 200) {
          this.selectprice = 0;
          await this.getCart();
          console.log(this.cartlist);
          }
        }
      }
    },
    // 선택한 카트 가격 합
    allpriceselected() {
      // console.log(this.ischeck);
      this.selectprice = 0;
      this.ischeckcartno = [];
      for(let i in this.ischeck) {
        // console.log(this.ischeck[i].cartOptionPrice);
        this.selectprice += this.ischeck[i].cartOptionPrice * this.ischeck[i].cartOptionCount; //선택한 카트 총금액 합
        this.ischeckcartno.push(this.ischeck[i].cartNo); //선택한 카트 넘버만 담기
      }
      console.log(this.selectprice);
      console.log(this.ischeckcartno);
    }
  },
};
</script>

<style lang='scss' src='@/assets/scss/order/cart.scss' scoped>

</style>
