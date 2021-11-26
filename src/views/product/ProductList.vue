<template>
  <div class='inner'>
    <div class='TitleCon'>
      <div class="Title">
        <h2>상품리스트</h2>
      </div>
    </div>
    <div class="listwrap">

      <div class="navbar">
        <div class="navcontent">
          <ul>
            <li @click="getListByCate">ALL</li>
            <li v-for="(t, tidx) in tier3list" :key="tidx" @click="getTier3List(t.categoryCode)">{{t.categoryName}}</li>
            <!-- <li><router-link to='/product/list'>COMPUTER DESK</router-link></li>
            <li><router-link to='/product/list'>GAMING DESK</router-link></li>
            <li><router-link to='/product/list'>MOTION DESK</router-link></li>
            <li><router-link to='/product/list'>STANDING DESK</router-link></li> -->
          </ul>
        </div>
      </div>

      <div class="tablelist">
        <div class="image_table">
          <ul>
            <li v-for="(i, idx) in list" :key="idx" @click="goProductinfo(i.productCode)">
              <!-- <router-link to='/'> -->
              <div class="contentBox">
                <div class="screen">
                  <!-- <img src="@/assets/img/MATCHSPEL.png"> -->
                  <img :src= i.image>
                </div>
                <div class="textField">
                  <h3>{{i.productTitle}}</h3>
                  <!-- <h3>asdsadsadsadddddddddddsadasdasdasdsadas</h3> -->
                  <div>
                    <span>10%</span>
                    <p>{{i.optionPrice}}~</p>
                  </div>
                </div>
              <!-- </router-link> -->
              </div>
            </li>
          </ul>
        </div>
        <div class="pagebox">
            <div class="pagenation">
              <ul v-if="ispage">
                <!-- <li v-for="(i, idx) in allpage" :key="i"><router-link :to= changepage(idx+1)>{{idx+1}}</router-link></li> -->
                <li v-for="(i, idx) in allpage" :key="i" @click="changepage(idx+1)">{{idx+1}}</li>
              </ul>
              <ul v-if="!ispage">
                <!-- <li v-for="(i, idx) in allpage" :key="i"><router-link :to= changepage(idx+1)>{{idx+1}}</router-link></li> -->
                <li v-for="(h, hidx) in allpage" :key="h" @click="change3TierPage(hidx+1)">{{hidx+1}}</li>
              </ul>
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'ProductList',
  created() {
    console.log('created');
    this.getListByCate();
  },
  watch: {
    '$route' (to, from) {
      console.log('-----------from-------------------');
      console.log(from);
      console.log('-----------to-------------------');
      console.log(to);
      this.getListByCate();
    },
    categoryParent(){
      this.getListByCate();
    }
  },
  computed: {
    ...mapState(['categoryParent'])
  },
  data() {
    return {
      // 리스트 불러오기 용 변수
      // categoryParent: 201000,
      sort: 1,
      // 받아온 2티어 리스트
      list: [],
      // 받아온 3티어 리스트
      tier3list: [],
      // 리스트에서 받아야하는 변수
      CategoryCode: 0,
      // 왼쪽 메뉴 클릭시 3티어 코드
      tier3categorycode: 0,
      optionPrice: 0,
      productCode: 0,
      productTitle: '',
      allpage: 0, //전체페이지 개수
      page: 1, //현재 페이지 변경을 위한
      // nav 버튼으로 온경우
      // navcategoryParent: this.$route.query.categoryParent,
      // 티어에따른 페이지네이션 변경
      ispage: true, //true일때 2티어 false일때 3티어
    }
  },
  methods: {
    // vuex 연동 시킬것. header에서 클릭시 리셋이 안됨
    // 메인 리스트
    async getListByCate() {
      this.sort = 1;
      // const url = `/ROOT/product/select_list2?sort=${this.sort}&categoryParent=${this.categoryParent}&page=1`;
      // console.log(this.$route.query.categoryParent);
      // const url = `/ROOT/product/select_list2?sort=${this.sort}&categoryParent=${this.navcategoryParent}&page=1`;
      const url = `/ROOT/product/select_list2?sort=${this.sort}&categoryParent=${this.categoryParent}&page=1`;
      const headers = {'Content-Type': 'application/json'};
      const res = await axios.get(url, {headers});
      console.log(res);
      // console.log(res.data.list);
      this.list = res.data.list;
      this.allpage = res.data.cnt;
      this.ispage = true;
      // console.log(this.list);
      const url1 = `/ROOT/category/list_category?categoryParent=${this.categoryParent}`;
      const headers1 = { 'Content-Type': 'application/json' };
      const res1 = await axios.get(url1, { headers: headers1 });
      console.log(res1);
      this.tier3list = res1.data.list;
    },
    // 서브메뉴 클릭시 화면표시
    async getTier3List(val) {
      console.log(val);
      this.tier3categorycode = val;
      const url = `/ROOT/product/select_list1?sort=1&categoryCode=${val}`;
      const headers = { 'Content-Type': 'application/json' };
      const res = await axios.get(url, { headers });
      console.log(res);
      this.list = res.data.list ;
      this.allpage = res.data.cnt;
      this.ispage = false;
    },
    async goProductinfo(val) {
      console.log(val);
      this.$router.push(`/product/info?productCode=${val}`);
    },
    // 티어2 페이지 네이션 변경
    async changepage(val) {
      const url = `/ROOT/product/select_list2?sort=${this.sort}&categoryParent=${this.categoryParent}&page=${val}`;
      // return url;
      const headers = {'Content-Type': 'application/json'};
      const res = await axios.get(url, {headers});
      console.log(res);
      // console.log(res.data.list);
      this.list = res.data.list;
      this.allpage = res.data.cnt;
      // console.log(this.list);
    },
    async change3TierPage(val) {
      console.log(val); //페이지 숫자
      const url = `/ROOT/product/select_list1?sort=${this.sort}&categoryCode=${this.tier3categorycode}&page=${val}`;
      const headers = { 'Content-Type':'application/json' };
      const res = await axios.get(url, { headers });
      console.log(res);
      this.list = res.data.list;
    }
  },
};
</script>

<style lang='scss' src='@/assets/scss/product/productlist.scss' scoped>

</style>
