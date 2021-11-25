<template>
  <h3> 전체리뷰 ({{reviewcount}}) </h3>
  <div v-for="review in reviewlist" v-bind:key="review.reviewNum" style="height: 200px; border-bottom:1px solid #eee">
          <div class="title">
          {{review.user}}  {{review.reivewTitle}}
          </div>
          <div class="date">
          {{review.reviewRegDateString}}
          </div>
          
          <div class="star-ratings">
          <div 
            class="star-ratings-fill space-x-2 text-lg"
            :style="{ width: review.reviewStar*20 + '%' }"
          >
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <div class="star-ratings-base space-x-2 text-lg">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> 
          </div>  
         
        </div>
         
          <div>
          {{review.reviewContent}}
          </div>

       
          <img :src= review.reviewImage1 style="width:100px; height:100px" onerror="this.style.display='none'" v-if="review.reviewImage1">
          <img :src= review.reviewImage2 style="width:100px; height:100px" onerror="this.style.display='none'" v-if="review.reviewImage2">
          <img :src= review.reviewImage3 style="width:100px; height:100px" onerror="this.style.display='none'" v-if="review.reviewImage3">
          
        
         
   
 
    
  </div>
  <router-view/>
</template>

<script>

import axios from 'axios';

export default {
    data(){
        return {
          productcode : 	202111110009,
          reviewlist : [],
          reviewcount : 0,
          imgbox : [], 

          
        }
    },
    methods:{
      async userreview(){
        const header = { "content-Type" : "application/json"}
        const url = `/ROOT/review/test?productcode=${this.productcode}&page=1`;
        const response = await axios.get(url, header);
        console.log(response);
        if(response.data.status == 200){
          this.reviewlist = response.data.list.content
          this.reviewcount = response.data.list.content.length
        } 
      
      },

    },

    async created(){
      await this.userreview();
    },

}
           
</script>


<style scoped>
  .date {
  float: right;

}
  .title {
  width: max-content;
  color: #0a0a0a; 
  font-weight: bolder;
}
  .star-ratings {
  color: #aaa9a9; 
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #2b2a29;
}
 
.star-ratings-fill {
  color: #fff58c;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: gold;
}
 
.star-ratings-base {
  z-index: 0;
  padding: 0;
}
</style>


