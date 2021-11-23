<template>
  <div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.logout();
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['changeisLoginAct']),
    logout() {
      const token = sessionStorage.getItem('token');
      if (token !== null) {
        sessionStorage.removeItem('token');
        this.changeisLoginAct(false);
        alert('로그아웃이 완료되었습니다.');
        this.$router.push('/');
      }
    },
  },
};
</script>

<style>

</style>
