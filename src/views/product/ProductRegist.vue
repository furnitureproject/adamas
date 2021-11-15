<template>
<div class="inner">
  <div>
    <h1>제품 등록</h1>
    <label for="productTitle">제목</label>
    <input type="text" id="productTitle" v-model="productTitle">
    <label for="productContent">
      <input type="checkbox" v-model="contentOnOff">제품 내용(텍스트)
    </label>
    <textarea rows="10" cols="100" id="productContent" v-model="productContent"
      v-if="contentOnOff"></textarea>
    <label for="multibox">상세정보 이미지 첨부</label>
    <input multiple="multiple" type="file" name="filename[]" id="multibox" accept=".jpg, .png">
    <div>옵션 지정</div>
    <div>옵션1</div>
    <div>옵션 이름</div>
    <div>옵션 가격</div>
    <div>옵션 추가</div>
    <div class="cateWrap">
      <h3>카테고리 설정</h3>
      <div>
        <h4>카테고리 대분류</h4>
        <select size="30">
          <option>1.책상</option>
          <option>2.의자</option>
          <option>3.다리</option>
          <option>4.쇼파</option>
          <option>5.식탁</option>
          <option>6.자동차</option>
        </select>
      </div>
      <div>
        <h4>카테고리 중분류</h4>
        <select size="30">
          <option>1.책상</option>
          <option>2.의자</option>
          <option>3.다리</option>
          <option>4.쇼파</option>
          <option>5.식탁</option>
          <option>6.자동차</option>
        </select>
      </div>
      <div>
        <h4>카테고리 소분류</h4>
        <select size="30">
          <option>1.책상</option>
          <option>2.의자</option>
          <option>3.다리</option>
          <option>4.쇼파</option>
          <option>5.식탁</option>
          <option>6.자동차</option>
        </select>
      </div>
    </div>
  </div>
</div>
  <button>제품 등록</button>
</template>

<script>
export default {
  data() {
    return {
      contentOnOff: false,
    };
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/product/productregist.scss';

</style>
