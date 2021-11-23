<template>
<div class="testcontainer">
  <div class="container1">
    <label class="chlabel">
          <input type="checkbox" class="chbox" v-model="changecheck" @click='changeLogin'>
          <span>
              <i></i>
          </span>
    </label>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['logincheck']),
  },
  data() {
    return {
      changecheck: false,
    };
  },
  methods: {
    ...mapActions(['changeLoginAct']),
    changeLogin() {
      console.log(this.logincheck);
      if (this.changecheck === false) {
        this.changeLoginAct(false);
        console.log(this.logincheck);
      } else {
        this.changeLoginAct(true);
        console.log(this.logincheck);
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/checkbutton2.scss';
</style>
