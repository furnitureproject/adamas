<template>
  <div class="inner">

  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>
// 장바구니 담기 버튼
.fillBtn {
  font-size: 25px;
  padding: 5px 40px;
  border: 3px solid #ebedee;
  background-color: transparent;
  color: #b4b2b2;
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
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  top: 100%;
  left: 0;
  transition: all 0.4s;
  z-index: -1;
}
.fillBtn:hover::before {
  transform: translateY(-100%);
}
.fillBtn:hover {
  color: #1d1b2e;
  // color: #fff;
}
</style>
