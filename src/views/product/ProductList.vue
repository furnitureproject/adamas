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
            <li><router-link to='/product/list'>ALL</router-link></li>
            <li><router-link to='/product/list'>BASIC DESK</router-link></li>
            <li><router-link to='/product/list'>COMPUTER DESK</router-link></li>
            <li><router-link to='/product/list'>GAMING DESK</router-link></li>
            <li><router-link to='/product/list'>MOTION DESK</router-link></li>
            <li><router-link to='/product/list'>STANDING DESK</router-link></li>
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
                  <img src="@/assets/img/MATCHSPEL.png">
                  <!-- <img :src= i.image> -->
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
              <ul>
                <li v-for="(i, idx) in allpage" :key="i"><router-link to="/product/list">{{idx+1}}</router-link></li>
              </ul>
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    this.getListByCate();
  },
  data() {
    return {
      // 리스트 불러오기 용 변수
      categoryParent: 201000,
      sort: 1,
      // 받아온 리스트
      list: [],
      // 리스트에서 받아야하는 변수
      CategoryCode: 0,
      optionPrice: 0,
      productCode: 0,
      productTitle: '',
      allpage: 0, //전체페이지 개수
      page: 1, //현재 페이지 변경을 위한
      // nav 버튼으로 온경우
      navcategoryParent: this.$route.query.categoryParent
    }
  },
  methods: {
    async getListByCate() {
      // const url = `/ROOT/product/select_list2?sort=${this.sort}&categoryParent=${this.categoryParent}&page=1`;
      console.log(this.navcategoryParent);
      const url = `/ROOT/product/select_list2?sort=${this.sort}&categoryParent=${this.navcategoryParent}&page=1`;
      const headers = {'Content-Type': 'application/json'};
      const res = await axios.get(url, {headers});
      console.log(res);
      // console.log(res.data.list);
      this.list = res.data.list;
      this.allpage = res.data.cnt;
      // console.log(this.list);
    },
    async goProductinfo(val) {
      console.log(val);
      this.$router.push(`/product/info?productCode=${val}`);
    },
  },
};
</script>

<style lang='scss' src='@/assets/scss/product/productlist.scss' scoped>

</style>
