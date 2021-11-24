<template>
  <div class="inner">
    <!-- 전체 박스 -->
    <div class="container">

      <!-- 왼쪽 -->
      <div class="productSummary">
        <!-- 왼쪽박스 패딩용 박스 -->
        <div class="forPadding">
          <!-- 상단 왼쪽 중앙 container -->
          <div class="leftMidBoxCon">
            <!-- 상단 제일 왼쪽 박스 -->
            <div class="leftbox">
              <!-- 이미지 -->
              <div class="imagebox">
                <!-- 메인 이미지 -->
                <div class="titleImg">
                  <img src="@/assets/img/desk2.jpg">
                </div>
                <!-- 서브 이미지 -->
                <div class="subImg">
                  <ul>
                    <li><img src="@/assets/img/desk3.jpg"></li>
                    <li><img src="@/assets/img/desk3.jpg"></li>
                  </ul>
                </div>
              </div>
              <!-- 이미지 끝 -->
            </div>
            <!-- 상단 제일 왼쪽 박스 끝 -->

            <!-- 상단 중간 박스 -->
            <div class="middlebox">
              <!-- 제목 -->
              <div class="titlebox">
                <p>책상이 겁나 싸요</p>
              </div>
              <!-- 제목 끝 -->
              <!-- 평점 별 -->
              <div class="tstar">
                스타 표시
              </div>
              <!-- 평점 별 끝 -->
              <!-- 대표가격 -->
              <div class="tprice">
                <strong>599,999</strong><span>원</span>
              </div>
              <!-- 대표가격 끝 -->
              <!-- 상품 요약 설명 -->
              <div class="tdesc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rerum iste aliquid. Qui nobis facilis tempora suscipit perspiciatis facere quibusdam optio amet quis deleniti atque ea repudiandae mollitia, autem voluptates?
                  Consequatur itaque unde vitae dicta quis ipsum sint fugiat! Incidunt soluta dicta facere minus laborum sed perferendis explicabo, quo, adipisci, aliquid voluptatum molestias aspernatur commodi a beatae nemo tenetur velit?
                </p>
              </div>
              <!-- 상품 요약 설명 끝 -->
            </div>
            <!-- 상단 중간 박스 끝-->
          </div>
          <!-- 상단 왼쪽 중앙 container 끝 -->
          <!-- 상품 정보 사진 -->
          <div class="descbox">
            <img src="@/assets/img/11st1.jpg" alt="">
          </div>
          <!-- 상품 정보 사진 끝 -->
        </div>
        <!-- 왼쪽박스 패딩용 박스 끝 -->
      </div>
      <!-- 왼쪽 끝 -->


      <!-- 오른쪽 -->
      <div class="productSidebar">
        <div class="rightforposition">
          <!-- 옵션 박스 -->          
          <div class="optioncontainer">
            <div class="optionwrap">
              <!-- <label for="optionbutton">옵션</label>
              <input type="button" id="optionbutton"> -->
              <p>옵션</p>
              <div class="optionwindow">
                <!-- 여기 카드부분이 반복문 돌아가면 됨 -->
                <div class="optionCard">
                  <p>01) 옵션1</p>
                  <div class="forcal forcal2">
                    <div>
                      <strong>333,333</strong><span> 원</span>
                    </div>
                  </div>  
                </div>

                              

              </div>
            </div>
          </div>
          <!-- 선택한 옵션 박스 -->
          <div class="optioncontainer">
            <div class="optionwrap">
              <div class="optionwindow windowforheight">
                <div class="optionCard">
                  <p>01) FREDDE-프레데-블랙-책상</p>
                  <div class="forcal">
                    <input type="number">
                    <div>
                      <strong>333,333</strong><span> 원</span>
                    </div>
                  </div>
                </div>

               

              </div>
            </div>
          </div>
          <!-- 옵션 박스 끝 -->
          <!-- 가격 표시 박스 -->
          <div>
            <div>
              <span>1개</span><p>555555원</p>
            </div>
          </div>
          <!-- 가격 표시 박스 끝 -->
          <!-- 버튼 박스 -->
          <div class="buttonwrap">
            <button>장바구니</button>
            <button>구매하기</button>
          </div>
          <!-- 버튼 박스 끝 -->
        </div>
      </div>
      <!-- 오른쪽 끝 -->
    </div>
    <!-- 전체 박스 끝 -->
  </div>
  <!-- inner 끝 -->
</template>

<script>
export default {
  
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/test2.scss';

</style>
