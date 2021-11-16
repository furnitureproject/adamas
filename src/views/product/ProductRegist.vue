<template>
  <div class="inner">
    <div>
      <div class='TitleCon'>
        <div class="Title">
          <h2>상품 등록</h2>
        </div>
      </div>
      <div class="registbox">
        <label for="productTitle">제목</label>
        <input type="text" id="productTitle" v-model="productTitle">
      </div>
      <div class="registbox">
        <label for="productContent">
          <input type="checkbox" v-model="contentOnOff">상품 내용(텍스트)
        </label>
        <textarea rows="10" cols="100" id="productContent" v-model="productContent"
          v-if="contentOnOff"></textarea>
      </div>
      <div class="registbox">
        <button class="fillBtn"><label for="filebox">대표 이미지 첨부</label></button>
        <!-- <label for="filebox">대표 이미지 첨부</label> -->
        <input type="file" @change='handlerFile' name="filename" id="filebox" accept=".jpg, .png" hidden>
      </div>
      <div class="registbox">
        <label for="multibox">상세정보 이미지 첨부</label>
        <input multiple="multiple" @change='handlerFiles' type="file" name="filename[]" id="multibox" accept=".jpg, .png" hidden>
      </div>
      <div class="registbox">
        <div class='TitleCon'>
        <div class="Title">
          <h2>옵션지정</h2>
        </div>
      </div>
        <div><h3>옵션1</h3></div>
        <div>
          <label for="optionName">옵션 이름</label>
          <input type="text" id="optionName" v-model="optionName">
        </div>
        <div>
          <label for="optionQuantity">옵션수량</label>
          <input type="text" id="optionQuantity" v-model="optionQuantity">
        </div>
        <div>
          <label for="optionPrice">옵션가격</label>
          <input type="text" id="optionPrice" v-model="optionPrice"><span>원</span>
        </div>
        <div><button>옵션 추가</button></div>
      </div>
      <div class='TitleCon'>
          <div class="Title">
            <h2>카테고리 설정</h2>
          </div>
        </div>
      <div class="cateWrap">
        <div class='catebox cateboxtier1'>
          <p>카테고리 대분류</p>
          <select size="15" v-model="tier1" @click="testOnClick">
            <option>거실</option>
            <option>주방</option>
            <option>큰방</option>
            <option>화장실</option>
            <option>샤워룸</option>
            <option>서재</option>
          </select>
        </div>
        <div class='catebox cateboxtier2'>
          <p>카테고리 중분류</p>
          <select size="15" v-model="tier2" @click="testOnClick">
            <option>침대</option>
            <option>의자</option>
            <option>책상</option>
            <option>게이밍</option>
            <option>장롱</option>
          </select>
        </div>
        <div class='catebox cateboxtier3'>
          <p>카테고리 소분류</p>
          <select size="15" v-model="tier3" @click="testOnClick">
            <option>책상</option>
            <option>의자</option>
            <option>다리</option>
            <option>쇼파</option>
            <option>식탁</option>
            <option>자동차</option>
          </select>
        </div>
      </div>
    </div>
    <button>제품 등록</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentOnOff: false,
      productTitle: '',
      productContent: '',
      optionName: '',
      optionQuantity: 0,
      optionPrice: 0,
      tier1: '',
      tier2: '',
      tier3: '',
      // 대표이미지
      repimg: null,
      // 설명 이미지
      descimg: null,
    };
  },
  methods: {
    testOnClick() {
      console.log(this.tier1);
      console.log(this.tier2);
      console.log(this.tier3);
    },
    handlerFile(e) {
      const file = e.target.files[0];
      this.repimg = file;
      console.log(this.repimg);
    },
    handlerFiles(e) {
      const files = e.target.files;
      this.descimg = files;
      console.log(this.descimg);
    },
    async setProduct() {
      const url = `/ROOT/product/insert?categoryCode=${this.categoryCode}`;
      // const url = '/ROOT/test/eee';
      const headers = { 'Content-Type': 'multipart/form-data', token: this.token };
      console.log(this.token);
      const body = new FormData();
      body.append('productTitle', this.productTitle);
      body.append('productDesc', this.productContent);
      // body.append('categoryCode', this.categoryCode);
      body.append('file', this.productImg);
      console.log(body);
      const res = await axios.post(url, body, { headers });
      console.log(res);
    },
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/product/productregist.scss';

</style>
