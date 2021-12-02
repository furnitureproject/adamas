<template>
  <!-- 리뷰 등록 화면 -->
  <div :class="reviewboardclass">
    <input type="text" placeholder="제목" v-model="reviewTitle">
    <textarea cols="25" rows="10" placeholder="내용" v-model="reviewContent"></textarea>
    <input type="text" placeholder="별점 1-5점까지" v-model="reviewStar">
    <div class="reviewselimg">
      <button class="fillBtn"><label for="multibox">리뷰 이미지 첨부(3장까지)</label></button>
      <input multiple="multiple" @change='handlerFiles' ref="file" type="file" name="filename[]" id="multibox" accept=".jpg, .png" hidden>
    </div>
    <button class="fillBtn" @click="setReview">리뷰작성</button>
    <button class="fillBtn" @click="reviewCancel">취소</button>
  </div>

  <div class="mypageContainer">
    <div class='TitleCon orderTitleCon'>
      <div class="Title">
        <h2>주문 내역</h2>
      </div>
    </div>
    <div class="divTable blueTable">
      <div class="divTableHeading">
        <div class="divTableRow">
          <div class="divTableHead">주문일자</div>
          <div class="divTableHead">상품 상세 정보</div>
          <div class="divTableHead">결제 금액(수량)</div>
          <div class="divTableHead">판매자</div>
          <div class="divTableHead">주문상태</div>
          <div class="divTableHead">리뷰작성</div>
        </div>
      </div>
      <div class="divTableBody">
        <div class="divTableRow" v-for="(d, di) in dellist" :key="di">
          <div class="orderTableCell orderTableDate">
            <router-link :to="`/product/info?productCode=${d.productCode}`">
              <p>{{d.orderDateString}}</p>
              <p>{{d.orderCode}}</p>
              <span>상세보기</span>
            </router-link>
          </div>
          <div class="orderTableCell">
            <div class='tableTitleBox'>
              <div class='imgCell'>
                <img :src='`/ROOT/product/select_image?productCode=${d.productCode}`' style="width:60px;height:60px">
              </div>
              <div class="tableTitle">
                <router-link :to="`/product/info?productCode=${d.productCode}`">
                  <p>{{d.productTitle}}</p>
                  <p>옵션: {{d.optionName}}</p>
                </router-link>
              </div>
            </div>
          </div>
          <div class="orderTableCell">
            <p>{{d.price}}원</p>
            <span>({{d.cartOptionCount}}개)</span>
          </div>
          <div class="orderTableCell">
            <p>{{d.sellerName}}</p>
          </div>
          <div class="orderTableCell">
            <p>배송중</p>
            <router-link to='/'><span>(배송조회)</span></router-link>
          </div>
          <div class="orderTableCell">
            <button class="reviebtn" @click="makeReview(d.productCode)">리뷰쓰기</button>
          </div>
        </div>
        <!-- <div>
          <div class="reviewbox">
            <label for="reviewtitle">제목</label>
            <input type="text" id="reviewtitle" placeholder="제목">
            <label for="reviewcontent">내용</label>
            <input type="text" id="reviewcontent" placeholder="내용">
            <label for="reviewimg">사진첨부</label>
            <input type="file" multiple id="reviewimg">
          </div>
        </div> -->
      </div>
    </div>
    <div class="pagelist">
      <div>
      <ul>
        <li v-for="(p, pidx) in pages" :key="pidx" @click="changePage(pidx+1)">{{pidx+1}}</li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.getdelivery();
  },
  data() {
    return {
      token: sessionStorage.getItem('token'),
      page: 1, // 현재 페이지
      pages: 1, // 전체 페이지 네이션
      dellist: [], // 배송 정보 받은것
      reviewimgbox : [], // 리뷰 이미지
      reviewTitle: '', // 리뷰 제목
      reviewContent: '', // 리뷰 내용
      reviewStar: '', // 리뷰 별점
      productCode: '', // 상품코드
      reviewboardclass: [{ reviewboard: true }, { boardappear: false }],
      reviewNum: 0, //리뷰 넘버
    };
  },
  methods: {
    async getdelivery() {
      const url = `/ROOT/delivery/select_userdellist?page=${this.page}`;
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const res = await axios.get(url, { headers });
      console.log(res);
      this.dellist = res.data.list;
      this.pages = res.data.cnt;
    },
    // 페이지 변경
    changePage(val) {
      this.page = val;
      console.log(this.page);
      this.getdelivery();
    },
    // 리뷰 이미지 이벤트
    handlerFiles(e) {
      console.log(e.target);
      const files = e.target.files;
      for(let i=0; i< files.length; i++) {
        // console.log(i);
        this.reviewimgbox.push(files[i]);
        console.log(this.reviewimgbox);
      }
    },
    // 리뷰 등록
    async setReview() {
      console.log(this.productCode)
      const url = `/ROOT/review/test`;
      const headers = { 'Content-Type': 'application/json', token: this.token };
      const body = { reviewTitle: this.reviewTitle, reviewContent: this.reviewContent, reviewStar: this.reviewStar, product: {productCode: this.productCode} };
      console.log(body);
      const res = await axios.post(url, body, { headers });
      console.log(res);
      this.reviewNum = res.data.reviewNum;
      console.log(this.reviewNum);
      await this.setReviewImg();
      // await getproductinfo()
    },
    // 리뷰 이미지 등록
    async setReviewImg() {
      const url = `/ROOT/reviewimage?reviewnum=${this.reviewNum}`;
      const headers = { 'Content-Type': 'multipart/form-data', token: this.token };
      const body = new FormData();
      for(let i=0; i< this.reviewimgbox.length; i++){
        body.append('file' ,this.reviewimgbox[i]);
      }
      // body.append('file', [this.descimg]);
      console.log(body)
      // body.append('file', this.descimg);
      const res = await axios.post(url, body, {headers});
      console.log(res);
      if(res.status == 200) {
        await this.getdelivery()
      }
    },
    // 리뷰 등록창 보여주기
    makeReview(val) {
      console.log(val);
      this.productCode = val;
      this.reviewboardclass[1].boardappear = true;
    },
    // 리뷰 창 닫기
    reviewCancel() {
      this.reviewboardclass[1].boardappear = false;
    }
  },
};
</script>

<style lang='scss' scoped>
.TitleCon {
  // background: #eee;
  padding: 26px 0px 16px 0px;
  border-bottom: 1px solid #999;
}
.Title {
  height: 40px;
  h2 {
    float: left;
    font-size: 20px;
    line-height: 40px;
  }
}
.orderTitleCon {
  margin-bottom: 15px;
}

div.blueTable {
  // border: 1px solid #1C6EA4;
  // background-color: #EEEEEE;
  width: 1000px;
  text-align: center;
  border-collapse: collapse;
  a, p {
    font-size: 14px;
  }
}
// .divTable.blueTable .divTableCell, .divTable.blueTable .divTableHead {
//   border: 1px solid #AAAAAA;
//   padding: 5px 5px;
// }
.orderTableCell, .divTableHead {
  border: 1px solid #eeee;
  padding: 5px 5px;
}
.divTable.blueTable .divTableBody .orderTableCell {
  font-size: 14px;
  color: #333333;
}
.orderTableDate {
  a {
    p{
      font-size: 12px;
    }
  }
  
}
.divTable.blueTable .divTableHeading .divTableHead {
  font-size: 15px;
  font-weight: bold;
  // color: #FFFFFF;
  text-align: center;
}
// .divTableHeading {
//   border-bottom: 1px solid black;
// }
/* DivTable.com */
.divTable{ display: table; }
.divTableRow { display: table-row; }
.divTableHeading { display: table-header-group;}
.orderTableCell, .divTableHead { display: table-cell;}
.divTableHeading { display: table-header-group;}
.divTableBody { display: table-row-group;}

.tableTitleBox {
  .imgCell{
    float: left;
    margin-left: 10px;
  }
  &:after{
    content: '';
    display: block;
    clear: both;
  }
}
// 페이지네이션
.pagelist {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  div{
    ul {
      text-align: center;
      li {
        display: inline-block;
        margin-right: 10px;
        cursor: pointer;
        font-size: 16px;
        text-align: center;
      }
    }
    &::after {
        display: block;
        content: '';
        clear: both;
    }
  }
}
// 버튼
.fillBtn {

  font-size: 20px;
  padding: 10px 0;
  border: 3px solid #333333;
  background-color: transparent;
  color: #b4b2b2;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
  margin-right: 10px;
  width: 145px;
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
  cursor: pointer;
  background: white;
}
// 리뷰 등록창
.reviewboard {
  background: rgba(34, 34, 34, 0.767);
  position: absolute;
  display: none;
  left: 35%;
  width: 540px;
  top: 150px;
  padding: 20px;
  input[type='text'] {
    display: block;
    width: 500px;
    border: 2px solid #2b2a29;
    padding: 10px;
  }
  textarea {
    width: 500px;
    border: 2px solid #2b2a29;
    padding: 10px;
    margin-top: 10px;
  }
  .fillBtn {
    width: 500px;
    margin-top: 10px;
  }
}
@keyframes slidein {
    from {
      // margin-left: 100%;
      // width: 100%
      opacity: 0%;
    }
  
    to {
      // margin-left: 0%;
      // width: 100%;
      opacity: 100%;
    }
  }
  .boardappear {
    display: block;
    // transition: all 2s;
    animation-duration: 1s;
    animation-name: slidein;
  }
  .reviebtn {
    padding: 5px 10px;
    border: 3px solid #eee;
    vertical-align: middle;
    background: #2b2a29;
    color: #eee;
    &:hover {
      border: 3px solid #222;
      background: #eee;
      color: #222;
      transition: all 0.3s;
      cursor: pointer;
    }
  }
</style>
