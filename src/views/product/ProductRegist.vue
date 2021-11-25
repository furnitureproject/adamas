<template>
  <div class="inner">


      <!-- <div class="orderBox">
      <div class="orderBoxInner">
        <div class='orderTitleCon'>
          <div class='orderTitle'>
            <h2>상품 등록</h2>
          </div>
        </div>
        <div class='deliveryBox'>
          <div class='fieldBox'>
            <div class="field">
              <input type="text" class="fieldInput" placeholder="상품 대표명칭">
            </div>
          </div>
          <div>
            <div class="field">
              <input type="text" class="select" placeholder="요구사항">
            </div>
          </div>
        </div>
      </div>
    </div> -->


    <div>
      <div class='TitleCon'>
        <div class="Title">
          <h2>상품 등록</h2>
        </div>
      </div>
      <div class="registbox">
        <!-- <label for="productTitle">제목</label>
        <input type="text" id="productTitle" v-model="productTitle"> -->
        <div class="field">
          <input type="text" class="fieldInput" placeholder="상품 대표명칭" v-model="productTitle">
        </div>
      </div>
      <div class="registbox">
        <label for="productContent">
          <input type="checkbox" v-model="contentOnOff">상품 내용(텍스트)
        </label>
        <textarea rows="10" cols="100" id="productContent" v-model="productDesc"
          v-if="contentOnOff"></textarea>
      </div>
      <div class="registbox">
        <button class="fillBtn"><label for="filebox">대표 이미지 첨부</label></button>
        <!-- <label for="filebox">대표 이미지 첨부</label> -->
        <input type="file" @change='handlerFile' name="filename" id="filebox" accept=".jpg, .png" hidden>
      </div>
      <div class="registbox">
        <label for="multibox">상세정보 이미지 첨부</label>
        <input multiple="multiple" @change='handlerFiles' ref="file" type="file" name="filename[]" id="multibox" accept=".jpg, .png" hidden>
      </div>
      <div class="registbox">
        <div class='TitleCon'>
        <div class="Title">
          <h2>옵션지정</h2>
        </div>
      </div>
        <div><h3>옵션1</h3></div>
        <!-- <div>
          <label for="optionName">옵션 이름</label>
          <input type="text" id="optionName" v-model="optionName">  
        </div> -->
        <div class="field">
          <input type="text" class="fieldInput" placeholder="옵션 이름" v-model="optionName">
        </div>
        <!-- <div>
          <label for="optionQuantity">옵션수량</label>
          <input type="text" id="optionQuantity" v-model="optionQuantity">
        </div> -->
        <div class="field">
          <input type="text" class="fieldInput" placeholder="옵션 수량" v-model="optionQuantity">
        </div>
        <!-- <div>
          <label for="optionPrice">옵션가격</label>
          <input type="text" id="optionPrice" v-model="optionPrice"><span>원</span>
        </div> -->
        <div class="field">
          <input type="text" class="fieldInput" placeholder="옵션 가격" v-model="optionPrice">
        </div>
        <div><button class="fillBtn">옵션 추가</button></div>
      </div>
      <div class='TitleCon'>
          <div class="Title">
            <h2>카테고리 설정</h2>
          </div>
        </div>
      <div class="cateWrap">
        <div class='catebox cateboxtier1'>
          <p>카테고리 대분류</p>
          <select size="15" v-model="tier1" >
            <option value="100000" @click="tierOneOnClick">국내</option>
            <option value="200000" @click="tierOneOnClick">해외</option>
          </select>
        </div>
        <div class='catebox cateboxtier2'>
          <p>카테고리 중분류</p>
          <select size="15" v-model="tier2">
            <option v-for="(ct2, idx) in tier2list" :key="idx" :value="ct2.categoryCode" @click="tiertwoOnClick">{{ct2.categoryName}}</option>
          </select>
        </div>
        <div class='catebox cateboxtier3'>
          <p>카테고리 소분류</p>
          <select size="15" v-model="tier3">
            <option v-for="(ct3, idx) in tier3list" :key="idx" :value="ct3.categoryCode" @click="tierthreeOnClick">{{ct3.categoryName}}</option>
          </select>
        </div>
        
      </div>
    </div>
    <button @click="setProduct">제품 등록</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productCode: 1,
      token: sessionStorage.getItem('token'),
      contentOnOff: false,
      productTitle: '',
      productDesc: '',
      optionName: '',
      optionQuantity: '',
      optionPrice: '',
      // 카테고리용 티어
      tier1: '',
      tier2: '',
      tier3: '', //tier3 은 담아서 보내줘야함.
      tier2list: [],
      tier3list: [],
      // 대표이미지
      repimg: null,
      // 설명 이미지
      descimg: [],
      optioncard: [],
    };
  },
  methods: {
    // 카테고리 선택
    async tierOneOnClick() {
      console.log(this.tier1);
      const url = `/ROOT/category/list_category?categoryParent=${this.tier1}`;
      const headers = { 'Content-Type': 'application/json' };
      const res = await axios.get(url, { headers });
      this.tier2list = res.data.list;
      console.log(this.tier2list);
    },
    async tiertwoOnClick() {
      const url = `/ROOT/category/list_category?categoryParent=${this.tier2}`;
      const headers = { 'Content-Type': 'application/json' };
      const res = await axios.get(url, { headers });
      this.tier3list = res.data.list;
      console.log(this.tier3list);
    },
    tierthreeOnClick() {
      console.log(this.tier3);
    },
    // 이미지 첨부시 이렇게 해서 change씀
    handlerFile(e) {
      const file = e.target.files[0];
      this.repimg = file;
      console.log(this.repimg);
    },
    handlerFiles(e) {
      const files = e.target.files;
      for(let i=0; i< files.length; i++) {
        console.log(i);
        this.descimg.push(files[i]);
        console.log(this.descimg);
      }
      // const formData = new FormData();
      // for( var i = 0; i < this.$refs.file.files.length; i++ ){
      //   let file = this.$refs.file.files[i];
      //   formData.append('files[' + i + ']', file);
      // }
      // this.descimg = formData;
      // this.descimg.push(files);
      // console.log(files);
      console.log(this.descimg);
    },
    // 제품등록
    // 방식은 왼쪽엔 제품기본정보 등록하는거 놔두고 카테고리까지 골라지면 오른쪽에 옵션 등록이 활성화되면서 옵션까지 마치고나면 한번에 등록하도록 할것.
    // 따로 따로 해버리면 상품만 등록하고 취소해버리면 옵션이 없는 상품이 DB에 올라가버림
    async setProduct() {
      console.log(this.tier3);
      const url = `/ROOT/product/insert?categoryCode=${this.tier3}`;
      const headers = { 'Content-Type': 'multipart/form-data', token: this.token };
      console.log(this.token);
      const body = new FormData();
      // body.append('productCode', this.productCode);
      body.append('productTitle', this.productTitle);
      if (this.productDesc !== '') {
        body.append('productDesc', this.productDesc);
      }
      body.append('file', this.repimg);
      console.log(body);
      const res = await axios.post(url, body, { headers });
      console.log(res.data.product);
      this.productCode = res.data.product;
      // 상품 설명 이미지 넣는 부분
      this.setDescImg();
      this.setoptions();
    },
    async setDescImg() {
      // 상품 설명 이미지 넣는 부분
      const url = `/ROOT/product/insert_desimage?productCode=${this.productCode}`;
      const headers = { 'Content-Type': 'multipart/form-data', token: this.token };
      const body = new FormData();
      for(let i=0; i< this.descimg.length; i++){
        body.append('File' ,this.descimg[i]);
      }
      // body.append('file', [this.descimg]);
      console.log(body)
      // body.append('file', this.descimg);
      const res = await axios.post(url, body, {headers});
      console.log(res);
    },
    // 옵션 등록
    async setoptions() {
      const url = `/ROOT/productoption/insertAll?productCode=${this.productCode}`;
      const headers = { 'Content-Type': 'application/json' };
      const body = [{optionName: this.optionName, optionQuantity: this.optionQuantity, optionPrice: this.optionPrice}];
      const res = await axios.post(url, body, { headers });
      console.log(res);
    }
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/product/productregist.scss';

</style>
