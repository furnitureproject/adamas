<template>
  <header>
    <div class='inner'>
      <ul class="gnb">
        <li><router-link to='/'>Home</router-link></li>
        <!-- <li :value="tab1" @click="golist(tab1)">거실가구</li>
        <li :value="tab1" @click="golist(tab1)">침실가구</li>
        <li :value="tab1" @click="golist(tab1)">주방가구</li>
        <li :value="tab1" @click="golist(tab1)">욕실가구</li>
        <li :value="tab1" @click="golist(tab1)">수납/생활</li>
        <li :value="tab1" @click="golist(tab1)">키즈가구</li>
        <li :value="tab1" @click="golist(tab1)">서재/학생방</li>
        <li :value="tab1" @click="golist(tab1)">브랜드관</li> -->
        <li v-for="(i, idx) in list" :key="idx" @click="golist(i.categoryCode)">{{i.categoryName}}</li>
        <!-- <li><a href="#">이벤트</a></li> -->
      </ul>
      <ul class="util">
        <!-- <li><a href="#">Contact</a></li>
        <li><a href="#">Help</a></li> -->
        <li><router-link to='/cart'>Cart<span>장바구니</span> </router-link></li>
        <li v-if="!isLogin"><router-link to='/login'>Login</router-link></li>
        <li v-if="isLogin"><router-link to='/logout'>Logout</router-link></li>
        <li v-if="!isLogin"><router-link to='/join'>Join</router-link></li>
        <!-- <li v-if="isLogin"><router-link to='/user/mypage'>Mypage</router-link></li> -->
        <li v-if="isLogin"><span class="mypageurl" @click="setmypageurl">Mypage</span></li>
        <!-- <li><a href="#">Sitemap</a></li> -->
      </ul>
    </div>
  </header>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';

export default {
  created() {
    this.logincontrolfunc();
    this.getCate();
  },
  computed: {
    ...mapState(['logincheck', 'isLogin', 'categoryParent', 'roleLogin']),
  },
  data() {
    return {
      logincontrol: false,
      token: sessionStorage.getItem('token'),
      tab1: 1,
      tab2: 2,
      tab3: 3,
      tab4: 4,
      tab5: 5,
      tab6: 6,
      tab7: 7,
      tab8: 8,
      tab9: 9,
      list: [],
    };
  },
  methods: {
    ...mapActions(['changecategoryParentAct']),
    logincontrolfunc() {
      console.log(sessionStorage.getItem('token'));
      if (sessionStorage.getItem('token') !== null) {
        this.logincontrol = true;
      }
      if (sessionStorage.getItem('token') === null) {
        this.logincontrol = false;
      }
    },
    async golist(val) {
      console.log('-----------카테고리 코드-------');
      console.log(val);
      console.log(this.$route.path)
      // this.$router.push({name: 'ProductList', query: {sort: 1, categoryParent: val, page: 1}});
      // if(this.$route.path == '/product/list') {
        console.log('실행')
        this.changecategoryParentAct(val);
        console.log(this.categoryParent);
        this.$router.push('/product/list');
      // }
    },
    async getCate() {
      const url = '/ROOT/category/list_category2';
      const headers = { 'Content-Type': 'application/json' };
      const res = await axios.get(url, { headers });
      console.log(res);
      this.list = res.data.list;
    },
    setmypageurl() {
      console.log(this.roleLogin);
      if(this.roleLogin === 'user') {
        this.$router.push('/user/mypage');
      } else if(this.roleLogin === 'seller') {
        this.$router.push('/seller/mypage');
      }
    }
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
        // a{
        //   /* inline 요소인 a태그는 block 을 설정하여 크기 조절 가능 */
        //   display: block;
        //   font: bold 15px/1;
        //   // color: #555;
        //   color: black;
        //   /* 클릭 영역 확보를 위해 블록화 한 뒤에 패딩을 설정 */
        //   padding: 20px 40px;
        //   transition: all 0.5s;
        // }
        // a:hover{
        //   // background: #555;
        //   background: black;
        //   border-radius: 2px;
        //   color: #fff;
        // }
        
          /* inline 요소인 a태그는 block 을 설정하여 크기 조절 가능 */
          display: block;
          font: bold 15px/1;
          // color: #555;
          color: black;
          /* 클릭 영역 확보를 위해 블록화 한 뒤에 패딩을 설정 */
          padding: 20px 40px;
          transition: all 0.5s;
        &:hover{
          // background: #555;
          background: black;
          border-radius: 2px;
          color: #fff;
          cursor: pointer;
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
      .mypageurl {
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