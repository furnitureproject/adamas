<template>
  <div class='inner'>
    <div class='joinInner'>
      <router-link to='/user/join'>
      <button class="fillBtn userBtn">유저 회원가입</button>
      </router-link>
      <router-link to='/seller/join'>
        <button class="fillBtn sellerBtn">판매자 회원가입</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.joinInner {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  padding: 100px 0;
  text-align: center;
}
.fillBtn {
  font-size: 40px;
  padding: 30px 60px;
  border: 3px solid gold;
  background-color: transparent;
  color: gold;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
}
.fillBtn:focus {
  outline: none;
}
.fillBtn::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: gold;
  top: 100%;
  left: 0;
  transition: all 0.4s;
  z-index: -1;
}
.fillBtn:hover::before {
  transform: translateY(-100%);
}
.fillBtn:hover {
  cursor: pointer;
  color: #3c3e70;
}
.userBtn {
  margin-right: 30px;
}
.sellerBtn {
  border: 3px solid #07b123;
  color: #07b123;
}
.sellerBtn::before {
  background-color: #07b123;
  // top: 0;
  // left: -100%;
}
</style>