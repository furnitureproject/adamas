<template>
  <header>
    <div class='inner'>
      <ul class="gnb">
        <li><router-link to='/'>Home</router-link></li>
        <li><a href="#">거실가구</a></li>
        <li><a href="#">침실가구</a></li>
        <li><a href="#">주방가구</a></li>
        <li><a href="#">욕실가구</a></li>
        <li><a href="#">수납/생활</a></li>
        <li><a href="#">키즈가구</a></li>
        <li><a href="#">서재/학생방</a></li>
        <li><a href="#">브랜드관</a></li>
        <!-- <li><a href="#">이벤트</a></li> -->
      </ul>
      <ul class="util">
        <!-- <li><a href="#">Contact</a></li>
        <li><a href="#">Help</a></li> -->
        <li><router-link to='/cart'>Cart<span>장바구니</span> </router-link></li>
        <li v-if="!isLogin"><router-link to='/login'>Login</router-link></li>
        <li v-if="isLogin"><router-link to='/logout'>Logout</router-link></li>
        <li v-if="!isLogin"><router-link to='/join'>Join</router-link></li>
        <li v-if="isLogin"><router-link to='/user/mypage'>Mypage</router-link></li>
        <!-- <li><a href="#">Sitemap</a></li> -->
      </ul>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  created() {
    this.logincontrolfunc();
  },
  computed: {
    ...mapState(['logincheck', 'isLogin']),
  },
  data() {
    return {
      logincontrol: false,
      token: sessionStorage.getItem('token'),
    };
  },
  methods: {
    logincontrolfunc() {
      console.log(sessionStorage.getItem('token'));
      if (sessionStorage.getItem('token') !== null) {
        this.logincontrol = true;
      }
      if (sessionStorage.getItem('token') === null) {
        this.logincontrol = false;
      }
    },
  },
};
</script>

<style lang='scss' scoped>
header {
  width: 100%;
  border-bottom: 1px solid #ddd;
  position: relative;
  // position: fixed;
  top: 1000;
  z-index: 2000;
  background: transparent;
  // background: #555;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 6%), 0 2px 12px 0 rgb(0 0 0 / 3%);
}
.inner{
	width: 1340px;
	height: 120px;
	margin: 0px auto;
	position: relative; /* 자식 absoulte 요소의 기준점 설정 */
	h1{
		position: absolute;
		left: 0px;
		bottom: 15px;
		a{
			/* 폰트 축약형 */
			/* font-weight: bold; font-size: 24px; line-height: 1; font-family: "arial";  */
			// font: bold 24px/1 "arial";
			font: bold 24px/1 'Noto Sans KR';
			color: #444;
		}
	}
}
/* global navigation bar 전역 이동 메뉴 막대 주메뉴*/
.gnb{
	position: absolute;
	bottom: 0px;
	left: 0px;
    li{
        float: left;
        a{
          /* inline 요소인 a태그는 block 을 설정하여 크기 조절 가능 */
          display: block;
          font: bold 15px/1;
          // color: #555;
          color: black;
          /* 클릭 영역 확보를 위해 블록화 한 뒤에 패딩을 설정 */
          padding: 20px 40px;
          transition: all 0.5s;
        }
        a:hover{
          // background: #555;
          background: black;
          border-radius: 2px;
          color: #fff;
        }
    }
}
/*  오른쪽 상단 보조메뉴*/
.util {
	position: absolute;
	top: 20px;
	right: 60px;
    li {
      float: left;
      a {
        display: block;
        font: 12px/1 "Noto Sans KR";
        color: #999;
        padding: 0px 10px;
      }
      &:hover {
        // border-bottom: 1px solid #666;
        transition: ease-out 1s;
      }
    }
}
</style>