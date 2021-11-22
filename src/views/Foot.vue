<template>
  <footer>
    <div class="footInner">
      <div class="upper">
        <h1>TEAMPROJECT</h1>
        <ul>
          <li><a href="#">Policy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Family Site</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
      <div class="lower">
        <address>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ullam.<br>
        TEL : 031-111-1234 C.P : 010-1234-5678
        </address>
        <p>
          2021 TEAMPROJECT & copy; copyright all right reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
};
</script>

<style lang='scss' scoped>
footer{
  // position: absolute;
  // bottom: 0;
  width: 100%;
  background: #333;
  padding: 50px 0px;
  border-top: 1px solid #888;
  margin-top: 120px;
  // position: absolute;
  // left: 0;
  // bottom: 0;
}
.footInner{
	width: 1380px;
	margin: 0px auto;
}
.upper{
	width: 100%;
	border-bottom: 1px solid #777;
	padding-bottom: 20px;
	h1{
		float: left;
		font: bold 24px/1 "arial";
		color: #666;
	}
	ul{
		float: right;
		li{
			float: left;
			margin-left: 20px;
			a{
				font: bold 14px/1 "arial";
				color: #666;
			}
		}
	}
}
::after{
	content: "";
	display: block;
	clear: both;
}

.lower {
  width: 100%;
  padding-top: 20px;
  address{
    width: 100%;
    font: 12px/1.3 "arial";
    color: #777;
    margin-bottom: 20px;
  }
  p{
    width: 100%;
    font: 12px/1 "arial";
    color: #777;
  }
}
</style>
