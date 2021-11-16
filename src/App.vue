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

.inner{
	width: 1340px;
  // min-height: 1000px;
	margin: 0px auto;
  margin-bottom: 50px;
}

// #app {
//   position: relative;
// }

</style>
