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
            <li>
              <router-link to='/'>
                <div class="screen">
                  <img src="@/assets/img/room1.jpg">
                </div>
                <div class="textField">
                  <h3>제목이 들어갈 부분</h3>
                  <p>내용이 들어갈 부분</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to='/'>
                <div class="screen">
                  <img src="@/assets/img/desk1.jpg">
                </div>
                <div class="textField">
                  <h3>WORKSTATION DESK</h3>
                  <p>215,000 원</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to='/'>
                <div class="screen">
                  <img src="@/assets/img/desk1.jpg">
                </div>
                <div class="textField">
                  <h3>WORKSTATION DESK</h3>
                  <p>215,000 원</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to='/'>
                <div class="screen">
                  <img src="@/assets/img/desk1.jpg">
                </div>
                <div class="textField">
                  <h3>WORKSTATION DESK</h3>
                  <p>215,000 원</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to='/'>
                <div class="screen">
                  <img src="@/assets/img/desk1.jpg">
                </div>
                <div class="textField">
                  <h3>WORKSTATION DESK</h3>
                  <p>215,000 원</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to='/'>
                <div class="screen">
                  <img src="@/assets/img/desk1.jpg">
                </div>
                <div class="textField">
                  <h3>WORKSTATION DESK</h3>
                  <p>215,000 원</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to='/'>
                <div class="screen">
                  <img src="@/assets/img/desk1.jpg">
                </div>
                <div class="textField">
                  <h3>WORKSTATION DESK</h3>
                  <p>215,000 원</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to='/'>
                <div class="screen">
                  <img src="@/assets/img/desk1.jpg">
                </div>
                <div class="textField">
                  <h3>WORKSTATION DESK</h3>
                  <p>215,000 원</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to='/'>
                <div class="screen">
                  <img src="@/assets/img/desk1.jpg">
                </div>
                <div class="textField">
                  <h3>WORKSTATION DESK</h3>
                  <p>215,000 원</p>
                </div>
              </router-link>
            </li>

          </ul>
        </div>
        <div class="pagebox">
            <div class="pagenation">
              <ul>
                <li><router-link to="/product/list">1</router-link></li>
                <li><router-link to="/product/list">2</router-link></li>
                <li><router-link to="/product/list">3</router-link></li>
                <li><router-link to="/product/list">4</router-link></li>
                <li><router-link to="/product/list">4</router-link></li>
                <li><router-link to="/product/list">4</router-link></li>
                <li><router-link to="/product/list">4</router-link></li>
                <li><router-link to="/product/list">4</router-link></li>
                <li><router-link to="/product/list">4</router-link></li>
                <li><router-link to="/product/list">4</router-link></li>
                <li><router-link to="/product/list">4</router-link></li>
                <li><router-link to="/product/list">4</router-link></li>
                <li><router-link to="/product/list">4</router-link></li>
                <li><router-link to="/product/list">4</router-link></li>
              </ul>
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' src='@/assets/scss/product/productlist.scss' scoped>

</style>
