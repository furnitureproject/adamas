<template>
  <div class="container">
      <div id="header" :class="activeclass[0]">
        <nav>
          <div class="logo"><img src="#" /></div>
          <ul>
            <li><a>HOME</a></li>
            <li><a>COMPANY</a></li>
            <li><a>SERVICE</a></li>
            <li><a>PORODUCT</a></li>
            <li><a>NOTICE</a></li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    window.addEventListener("scroll", this.scrollnav);
  },
  data() {
      return {
        // scroll할때 스타일을 주기위한 변수
        activeclass: [{active: false}],
        
      };
    },
  methods: {
    scrollnav(){
      // console.log(window.scrollY);
      if(window.scrollY > 0) {
        this.activeclass[0].active=true;
        // console.log(this.activeclass[0].active);
      }
      else {
        this.activeclass[0].active=false;
        // console.log(this.activeclass[0].active);
      }
    },
  },
  // $(window).on("scroll", function () {
  //       if ($(window).scrollTop()) {
  //         $("#header").addClass("active");
  //       } else {
  //         $("#header").removeClass("active");
  //       }
  //     });
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/test.scss';

</style>
