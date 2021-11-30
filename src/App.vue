<template>
  <div id='app'>
    <Head/>
      <router-view/>
    <Foot/>
  </div>
</template>

<script>
import Head from '@/views/Head.vue';
import Foot from '@/views/Foot.vue';

export default {
  components: { Head, Foot },
};
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
:root {
  --linecolor: #4C2B1F;
  --backcolor: #402E32;
  --linecolor2: #DFE0DF;
  --button1: #B5AA99;
  --button2: #FFBF82;
  --blue: #2F4858;
  // https://mycolor.space/?hex=%23E2BD77&sub=1
}
#app {
  // background: #FFEECA;
}
.inner{
	width: 1340px;
  min-height: 1000px;
	margin: 0px auto;
  margin-bottom: 50px;
}

// #app {
//   position: relative;
// }

</style>
